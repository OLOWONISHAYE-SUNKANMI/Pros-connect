"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { trackEvent } from "@/lib/analytics";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  const [legalModal, setLegalModal] = useState<"terms" | "privacy" | null>(null);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border/80 bg-card text-card-foreground">
      <div className="container py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/70">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center group inline-flex"
            >
              <BrandLogo size="lg" />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              ProsConnect is the modern platform designed to connect people with trusted professionals and make it easier to discover, evaluate, and connect with the right expertise.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Preparing For Global Launch
              </span>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground font-display">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/for-professionals"
                  className="hover:text-foreground transition-colors"
                >
                  For Professionals
                </Link>
              </li>
              <li>
                <Link
                  href="/for-clients"
                  className="hover:text-foreground transition-colors"
                >
                  For Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-foreground transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Col */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground font-display">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => setLegalModal("terms")}
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button
                  onClick={() => setLegalModal("privacy")}
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Social Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground font-display">
              Connect With Us
            </h4>
            <p className="text-xs text-muted-foreground">
              Follow our journey and stay updated with behind-the-scenes previews.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <span className="text-xs font-bold font-mono">in</span>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <span className="text-xs font-bold">𝕏</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <span className="text-xs font-bold font-mono">ig</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <span className="text-xs font-bold font-mono">fb</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© 2026 ProsConnect. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted for trusted professional connections worldwide.
          </p>
        </div>
      </div>

      {/* Legal Dialogs */}
      <Dialog open={legalModal !== null} onOpenChange={() => setLegalModal(null)}>
        <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              {legalModal === "terms" ? "Terms of Use" : "Privacy Policy"}
            </DialogTitle>
            <DialogDescription>
              Last updated: September 2026
            </DialogDescription>
          </DialogHeader>
          <div className="text-sm text-muted-foreground space-y-4 py-4 leading-relaxed">
            {legalModal === "terms" ? (
              <>
                <p>
                  Welcome to ProsConnect. By visiting our website or joining our early-access wishlist, you agree to these Terms of Use.
                </p>
                <h4 className="font-semibold text-foreground">1. Platform Purpose</h4>
                <p>
                  ProsConnect is a platform designed to connect people with trusted professionals across multiple service disciplines. Joining the wishlist reserves your spot for early platform access.
                </p>
                <h4 className="font-semibold text-foreground">2. Communication & Updates</h4>
                <p>
                  By submitting your name and email address, you grant ProsConnect permission to transmit launch communications, product milestones, and verification requests. We will never sell your information.
                </p>
                <h4 className="font-semibold text-foreground">3. Modifications</h4>
                <p>
                  We reserve the right to modify these terms as our platform evolves prior to public availability.
                </p>
              </>
            ) : (
              <>
                <p>
                  ProsConnect respects your privacy and is dedicated to protecting your personal information.
                </p>
                <h4 className="font-semibold text-foreground">1. Information We Collect</h4>
                <p>
                  We collect your full name, email address, chosen role (Client, Professional, or Both), and standard referral/device metadata strictly for wishlist queue assignment and product readiness.
                </p>
                <h4 className="font-semibold text-foreground">2. Data Security & Storage</h4>
                <p>
                  All credentials and contact details are stored securely using industry-grade encryption. We do not sell or lease your personal data to advertisers or external broker networks.
                </p>
                <h4 className="font-semibold text-foreground">3. Your Rights</h4>
                <p>
                  You may request removal of your email from the wishlist or unsubscribe from updates at any time by contacting support@prosconnect.com.
                </p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
