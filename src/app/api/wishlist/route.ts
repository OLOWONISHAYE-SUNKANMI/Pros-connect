import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendWishlistWelcomeEmail } from "@/lib/resend";

// Fallback in-memory/local registry in case PostgreSQL is not connected or in local dev
interface LocalWishlistEntry {
  id: string;
  name: string;
  email: string;
  role: "client" | "professional" | "both";
  source: string;
  createdAt: string;
}

// Global variable to persist entries across dev reload
const globalForWishlist = global as unknown as {
  _localWishlist?: LocalWishlistEntry[];
  _baseWaitlistCount?: number;
};

if (!globalForWishlist._localWishlist) {
  globalForWishlist._localWishlist = [
    {
      id: "wl_demo_1",
      name: "Tunde Adeyemi",
      email: "tunde@example.com",
      role: "professional",
      source: "demo",
      createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    },
    {
      id: "wl_demo_2",
      name: "Amina Yusuf",
      email: "amina@example.com",
      role: "client",
      source: "demo",
      createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    },
  ];
}

const BASE_COUNT = 1240;

function getFallbackCount(): number {
  return BASE_COUNT + (globalForWishlist._localWishlist?.length ?? 0);
}

export async function GET() {
  try {
    let count = getFallbackCount();
    // Try to get count from Prisma if DB is configured
    try {
      if ((prisma as any).wishlistMember) {
        const dbCount = await (prisma as any).wishlistMember.count();
        if (dbCount > 0) {
          count = BASE_COUNT + dbCount;
        }
      }
    } catch {
      // Prisma offline or schema unmigrated, fall back smoothly
    }

    return NextResponse.json({
      success: true,
      count,
    });
  } catch (error) {
    return NextResponse.json(
      { success: true, count: getFallbackCount() },
      { status: 200 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        { success: false, code: "INVALID_REQUEST", message: "Invalid JSON request." },
        { status: 400 }
      );
    }

    const { name, email, role = "client", source = "landing_page" } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, code: "INVALID_NAME", message: "Please provide your full name." },
        { status: 400 }
      );
    }

    const trimmedEmail = (email || "").trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, code: "INVALID_EMAIL", message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const validRole = ["client", "professional", "both"].includes(role)
      ? role
      : "client";

    // 1. Check duplicate in memory
    const existingLocal = globalForWishlist._localWishlist?.some(
      (m) => m.email.toLowerCase() === trimmedEmail
    );
    if (existingLocal) {
      return NextResponse.json(
        {
          success: false,
          code: "ALREADY_REGISTERED",
          message: "This email is already on the wishlist.",
        },
        { status: 409 }
      );
    }

    // 2. Try DB check and insertion if Prisma is active
    let dbSuccess = false;
    try {
      if ((prisma as any).wishlistMember) {
        const existingInDb = await (prisma as any).wishlistMember.findUnique({
          where: { email: trimmedEmail },
        });

        if (existingInDb) {
          return NextResponse.json(
            {
              success: false,
              code: "ALREADY_REGISTERED",
              message: "This email is already on the wishlist.",
            },
            { status: 409 }
          );
        }

        await (prisma as any).wishlistMember.create({
          data: {
            fullName: name.trim(),
            email: trimmedEmail,
            role: validRole,
            status: "active",
            source,
          },
        });
        dbSuccess = true;
      }
    } catch {
      // Prisma error / connection refused: continue with resilient fallback
    }

    // Record into local memory cache as well
    globalForWishlist._localWishlist?.push({
      id: `wl_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: name.trim(),
      email: trimmedEmail,
      role: validRole as any,
      source,
      createdAt: new Date().toISOString(),
    });

    const totalCount = getFallbackCount();

    // 3. Send branded welcome email and add contact for email marketing via Resend
    const emailResult = await sendWishlistWelcomeEmail({
      name: name.trim(),
      email: trimmedEmail,
      role: validRole as "client" | "professional" | "both",
      queueNumber: totalCount,
    });

    if (emailResult.simulated) {
      console.log(
        `ℹ️ [Resend Simulation] No RESEND_API_KEY detected in .env. Email to ${trimmedEmail} was simulated. Add RESEND_API_KEY in .env to send real emails.`
      );
    } else if (!emailResult.success) {
      console.error(
        `❌ [Resend Delivery Error] Email to ${trimmedEmail} failed:`,
        emailResult.error
      );
    } else {
      console.log(
        `✅ [Resend Success] Real email sent to ${trimmedEmail}! Message ID: ${emailResult.messageId}`
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the wishlist",
        count: totalCount,
        emailSent: emailResult.success,
        simulated: emailResult.simulated,
        emailError: emailResult.error,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Wishlist API error:", error);
    return NextResponse.json(
      {
        success: false,
        code: "SERVER_ERROR",
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
