import { Resend } from "resend";
import {
  generateWishlistWelcomeEmailHtml,
  WishlistEmailData,
} from "./email-templates/WishlistWelcomeEmail";

// Initialize Resend client lazily to prevent runtime exceptions when API key is not yet set
let resendClient: Resend | null = null;

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

export interface SendWishlistEmailResult {
  success: boolean;
  messageId?: string;
  simulated?: boolean;
  contactAdded?: boolean;
  error?: string;
}

/**
 * Sends the branded early-access confirmation email to a new wishlist member
 * and optionally syncs the contact with a Resend marketing audience.
 */
export async function sendWishlistWelcomeEmail(
  data: WishlistEmailData
): Promise<SendWishlistEmailResult> {
  const { email, name, role, queueNumber } = data;
  const resend = getResendClient();

  // If no API key configured (e.g. initial dev or key pending), gracefully simulate
  if (!resend) {
    console.info(
      `[Resend Notice] RESEND_API_KEY is not configured in environment. Simulated email sent to ${email} (Member #${queueNumber}).`
    );
    return {
      success: true,
      simulated: true,
      messageId: `sim_${Date.now()}`,
    };
  }

  const fromAddress =
    process.env.RESEND_FROM_EMAIL || "ProsConnect <onboarding@resend.dev>";
  const html = generateWishlistWelcomeEmailHtml(data);
  const subject = `Welcome to the ProsConnect Wishlist! 🚀 [Priority #${queueNumber.toLocaleString()}]`;

  try {
    const emailResponse = await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject,
      html,
      tags: [
        { name: "category", value: "wishlist_confirmation" },
        { name: "role", value: role },
      ],
    });

    if (emailResponse.error) {
      console.error("[Resend Error] Failed to send email:", emailResponse.error);
      return {
        success: false,
        error: emailResponse.error.message,
      };
    }

    let contactAdded = false;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    // If an audience/contact list is set up for marketing campaigns, auto-enroll user
    if (audienceId) {
      try {
        const [firstName, ...rest] = name.trim().split(" ");
        const lastName = rest.join(" ");

        await resend.contacts.create({
          email,
          firstName: firstName || "",
          lastName: lastName || "",
          unsubscribed: false,
          audienceId,
        });
        contactAdded = true;
      } catch (contactErr) {
        console.warn(
          "[Resend Marketing] Could not add contact to audience list:",
          contactErr
        );
      }
    }

    return {
      success: true,
      messageId: emailResponse.data?.id,
      simulated: false,
      contactAdded,
    };
  } catch (err: any) {
    console.error("[Resend Exception] Error sending welcome email:", err);
    return {
      success: false,
      error: err.message || "Unknown error sending email via Resend",
    };
  }
}
