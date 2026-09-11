"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { trackEvent } from "@/lib/analytics";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface NavbarProps {
  onJoinWishlistClick?: () => void;
}

export function Navbar({ onJoinWishlistClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, eventName?: string) => {
    setOpen(false);
    if (eventName) {
      trackEvent(eventName as any, { href });
    }
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoinClick = () => {
    setOpen(false);
    trackEvent("hero_cta_clicked", { source: "navbar_cta" });
    if (onJoinWishlistClick) {
      onJoinWishlistClick();
    } else {
      const el = document.getElementById("wishlist-signup-hero") || document.getElementById("wishlist-form");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm py-3"
          : "bg-background/40 backdrop-blur-md py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group transition-transform active:scale-95"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <BrandLogo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <button
            onClick={() => handleNavClick("#how-it-works")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNavClick("#for-professionals", "professional_cta_clicked")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            For Professionals
          </button>
          <button
            onClick={() => handleNavClick("#for-clients", "client_cta_clicked")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            For Clients
          </button>
          <button
            onClick={() => handleNavClick("#about")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("#faq")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button
            size="sm"
            onClick={handleJoinClick}
            className="rounded-xl px-5 h-10 font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-accent" />
            Join Wishlist
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle mobile menu"
            className="p-2 rounded-lg border border-border bg-card text-foreground"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-reveal-up shadow-2xl">
          <nav className="flex flex-col space-y-3">
            <button
              onClick={() => handleNavClick("#how-it-works")}
              className="text-left py-2 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick("#for-professionals", "professional_cta_clicked")}
              className="text-left py-2 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
            >
              For Professionals
            </button>
            <button
              onClick={() => handleNavClick("#for-clients", "client_cta_clicked")}
              className="text-left py-2 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
            >
              For Clients
            </button>
            <button
              onClick={() => handleNavClick("#about")}
              className="text-left py-2 text-base font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("#faq")}
              className="text-left py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </nav>

          <div className="pt-2">
            <Button
              onClick={handleJoinClick}
              className="w-full h-12 rounded-xl text-base font-semibold bg-primary text-primary-foreground shadow-lg"
            >
              Join Wishlist
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
