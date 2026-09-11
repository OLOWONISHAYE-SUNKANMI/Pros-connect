export interface WishlistEmailData {
  name: string;
  email: string;
  role: "client" | "professional" | "both";
  queueNumber: number;
}

export function generateWishlistWelcomeEmailHtml({
  name,
  role,
  queueNumber,
}: WishlistEmailData): string {
  const firstName = name.trim().split(" ")[0] || "there";
  const formattedQueueNumber = queueNumber.toLocaleString();

  // Role-tailored messaging
  let roleTitle = "Client Member";
  let roleBadgeColor = "#2563eb";
  let roleDescription =
    "As a client, you will get early access to discover, evaluate, and collaborate with verified, high-caliber professionals across software, design, finance, legal, and growth — without the bidding chaos or gatekeeping.";
  let roleBullets = `
    <tr>
      <td style="padding: 10px 0; font-size: 14px; color: #374151; line-height: 1.5;">
        <strong style="color: #111827;">Direct Connection:</strong> Message top-tier talent directly without friction or middlemen markups.
      </td>
    </tr>
    <tr>
      <td style="padding: 10px 0; font-size: 14px; color: #374151; line-height: 1.5;">
        <strong style="color: #111827;">Verified Proof of Work:</strong> Browse authentic portfolios, client ratings, and vetted credentials.
      </td>
    </tr>
    <tr>
      <td style="padding: 10px 0; font-size: 14px; color: #374151; line-height: 1.5;">
        <strong style="color: #111827;">Launch Priority:</strong> Early access invitations rolling out before general public release.
      </td>
    </tr>
  `;

  if (role === "professional") {
    roleTitle = "Founding Professional";
    roleBadgeColor = "#d94e1f";
    roleDescription =
      "As a founding professional, you will be in the spotlight. Get early access to set up your profile, earn founding-member verification, and connect with high-intent clients looking specifically for your domain expertise.";
    roleBullets = `
      <tr>
        <td style="padding: 10px 0; font-size: 14px; color: #374151; line-height: 1.5;">
          <strong style="color: #111827;">Zero Bidding Wars:</strong> Clients find and hire you directly based on your verified credentials and portfolio.
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 0; font-size: 14px; color: #374151; line-height: 1.5;">
          <strong style="color: #111827;">Founding Member Badge:</strong> Exclusive launch badge on your public profile boosting discovery rank.
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 0; font-size: 14px; color: #374151; line-height: 1.5;">
          <strong style="color: #111827;">Keep What You Earn:</strong> Transparent, creator-friendly platform economics built for long-term relationships.
        </td>
      </tr>
    `;
  } else if (role === "both") {
    roleTitle = "Hybrid Founding Member";
    roleBadgeColor = "#7c3aed";
    roleDescription =
      "You have unlocked dual-sided early access. You can both discover top-tier talent for your projects and showcase your own professional expertise to companies seeking specialized leaders.";
    roleBullets = `
      <tr>
        <td style="padding: 10px 0; font-size: 14px; color: #374151; line-height: 1.5;">
          <strong style="color: #111827;">Full Ecosystem Access:</strong> Seamlessly toggle between hiring talent and receiving client inquiries.
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 0; font-size: 14px; color: #374151; line-height: 1.5;">
          <strong style="color: #111827;">Founding Network:</strong> Join an exclusive cohort of multidisciplinary builders and practitioners.
        </td>
      </tr>
      <tr>
        <td style="padding: 10px 0; font-size: 14px; color: #374151; line-height: 1.5;">
          <strong style="color: #111827;">Priority Onboarding:</strong> Dedicated concierge onboarding when the private beta goes live.
        </td>
      </tr>
    `;
  }

  const shareText = encodeURIComponent(
    "I just joined the wishlist for ProsConnect — the next-generation platform to connect with trusted professionals. Check it out!"
  );
  const siteUrl = "https://prosconnect.com";

  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to the ProsConnect Wishlist</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #0d0d0f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">
  <div style="display: none; font-size: 1px; color: #0d0d0f; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
    You're in! Welcome to the ProsConnect wishlist. Member #${formattedQueueNumber} for early platform access.
  </div>

  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0d0d0f; min-height: 100vh;">
    <tr>
      <td align="center" style="padding: 40px 16px 60px 16px;">
        
        <!-- Main Email Container Card -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
          
          <!-- Top Brand Header Banner -->
          <tr>
            <td style="background-color: #000000; padding: 36px 40px; text-align: center; border-bottom: 2px solid #d94e1f;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: middle; padding-right: 12px;">
                          <img src="https://res.cloudinary.com/depeqzb6z/image/upload/v1789020932/orange.transparent_4x_dmcjss.png" alt="ProsConnect" width="36" height="36" style="display: block; border: 0;" />
                        </td>
                        <td style="vertical-align: middle;">
                          <span style="font-size: 24px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff;">pros<span style="color: #d94e1f;">connect</span></span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Email Body -->
          <tr>
            <td style="padding: 40px 40px 30px 40px;">
              
              <!-- Priority Badge -->
              <div style="margin-bottom: 20px;">
                <span style="display: inline-block; background-color: #fff1eb; color: #d94e1f; font-size: 11px; font-weight: 800; letter-spacing: 0.8px; text-transform: uppercase; padding: 6px 14px; border-radius: 9999px; border: 1px solid #fed7aa;">
                  Priority Access Pass • #${formattedQueueNumber}
                </span>
              </div>

              <!-- Greeting & Headline -->
              <h1 style="margin: 0 0 16px 0; font-size: 28px; font-weight: 800; color: #111827; letter-spacing: -0.5px; line-height: 1.2;">
                Welcome to the wishlist, ${firstName}! 🎉
              </h1>

              <p style="margin: 0 0 24px 0; font-size: 16px; color: #4b5563; line-height: 1.6;">
                Thank you for joining the early-access wishlist for <strong>ProsConnect</strong>. You are officially member 
                <strong style="color: #d94e1f;">#${formattedQueueNumber}</strong> in line.
              </p>

              <!-- Role Overview Card -->
              <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 14px; padding: 22px; margin-bottom: 28px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <span style="display: inline-block; background-color: ${roleBadgeColor}; color: #ffffff; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 3px 10px; border-radius: 6px; margin-bottom: 10px;">
                        Registered Role: ${roleTitle}
                      </span>
                      <p style="margin: 6px 0 0 0; font-size: 14px; color: #374151; line-height: 1.55;">
                        ${roleDescription}
                      </p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- What's Next Section -->
              <h2 style="margin: 0 0 14px 0; font-size: 18px; font-weight: 700; color: #111827; letter-spacing: -0.3px;">
                What to Expect Next:
              </h2>

              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                ${roleBullets}
              </table>

              <!-- Primary CTA Button -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 36px;">
                <tr>
                  <td align="center">
                    <a href="${siteUrl}" target="_blank" style="display: inline-block; background-color: #d94e1f; color: #ffffff; font-size: 15px; font-weight: 700; text-decoration: none; padding: 14px 32px; border-radius: 12px; box-shadow: 0 6px 20px rgba(217, 78, 31, 0.35); text-align: center;">
                      Visit ProsConnect &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Viral Referral Box -->
              <div style="background-color: #fff8f5; border: 1px dashed #fdba74; border-radius: 14px; padding: 22px; text-align: center; margin-bottom: 20px;">
                <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 700; color: #9a3412;">
                  ⚡ Move up the wishlist queue
                </p>
                <p style="margin: 0 0 16px 0; font-size: 13px; color: #7c2d12; line-height: 1.5;">
                  Share ProsConnect with colleagues, founders, or fellow professionals to unlock priority early invitations.
                </p>
                
                <table border="0" cellpadding="0" cellspacing="0" align="center">
                  <tr>
                    <td style="padding: 0 4px;">
                      <a href="https://api.whatsapp.com/send?text=${shareText}%20${siteUrl}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; font-size: 12px; font-weight: 700; text-decoration: none; padding: 8px 14px; border-radius: 8px;">
                        WhatsApp
                      </a>
                    </td>
                    <td style="padding: 0 4px;">
                      <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${siteUrl}" target="_blank" style="display: inline-block; background-color: #000000; color: #ffffff; font-size: 12px; font-weight: 700; text-decoration: none; padding: 8px 14px; border-radius: 8px;">
                        Share on 𝕏
                      </a>
                    </td>
                    <td style="padding: 0 4px;">
                      <a href="https://www.linkedin.com/sharing/share-offsite/?url=${siteUrl}" target="_blank" style="display: inline-block; background-color: #0A66C2; color: #ffffff; font-size: 12px; font-weight: 700; text-decoration: none; padding: 8px 14px; border-radius: 8px;">
                        LinkedIn
                      </a>
                    </td>
                  </tr>
                </table>
              </div>

            </td>
          </tr>

          <!-- Compliance & Marketing Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 26px 40px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #6b7280; line-height: 1.5;">
                You received this email because <strong>${name}</strong> registered for the ProsConnect wishlist.
              </p>
              <p style="margin: 0 0 12px 0; font-size: 11px; color: #9ca3af;">
                ProsConnect Inc. • Connecting Talent with Trusted Opportunity
              </p>
              <p style="margin: 0; font-size: 11px; color: #9ca3af;">
                <a href="${siteUrl}" style="color: #6b7280; text-decoration: underline;">Website</a> &nbsp;|&nbsp; 
                <a href="${siteUrl}/privacy" style="color: #6b7280; text-decoration: underline;">Privacy Policy</a> &nbsp;|&nbsp; 
                <a href="${siteUrl}/terms" style="color: #6b7280; text-decoration: underline;">Terms of Service</a> &nbsp;|&nbsp; 
                <a href="mailto:support@prosconnect.com?subject=Unsubscribe%20Wishlist" style="color: #6b7280; text-decoration: underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
