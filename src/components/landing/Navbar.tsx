"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { trackEvent } from "@/lib/analytics";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface NavbarProps {
  onJoinWishlistClick?: () => void;
}

const navLinks = [
  { label: "How It Works", href: "/how-it-works", event: "nav_how_it_works" },
  { label: "For Professionals", href: "/for-professionals", event: "professional_cta_clicked" },
  { label: "For Clients", href: "/for-clients", event: "client_cta_clicked" },
  { label: "About", href: "/about", event: "nav_about" },
  { label: "FAQs", href: "/faq", event: "nav_faq" },
];

export function Navbar({ onJoinWishlistClick }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJoinClick = () => {
    setOpen(false);
    trackEvent("hero_cta_clicked", { source: "navbar_cta", path: pathname });

    if (onJoinWishlistClick) {
      onJoinWishlistClick();
      return;
    }

    const el =
      document.getElementById("wishlist-form") ||
      document.getElementById("wishlist-signup-hero");

    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });

      el.classList.add(
        "ring-4",
        "ring-primary",
        "ring-offset-4",
        "ring-offset-background",
        "scale-[1.01]",
        "transition-all",
        "duration-500"
      );
      setTimeout(() => {
        el.classList.remove(
          "ring-4",
          "ring-primary",
          "ring-offset-4",
          "ring-offset-background",
          "scale-[1.01]"
        );
      }, 2000);

      setTimeout(() => {
        const input =
          el.querySelector<HTMLInputElement>("input[type='text']") ||
          el.querySelector<HTMLInputElement>("input");
        if (input) input.focus();
      }, 450);
    } else {
      window.location.href = "/#wishlist-signup-hero";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm py-3"
          : "bg-background/50 backdrop-blur-md py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center group transition-transform active:scale-95"
          onClick={() => {
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <BrandLogo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href === "/faq" && pathname === "/faqs");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  trackEvent(item.event as any, { href: item.href });
                  if (pathname === item.href) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`text-sm font-medium transition-all relative py-1 cursor-pointer ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-fade-in" />
                )}
              </Link>
            );
          })}
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
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/faq" && pathname === "/faqs");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    trackEvent(item.event as any, { href: item.href });
                  }}
                  className={`text-left py-2.5 text-base font-medium transition-colors border-b border-border/50 flex items-center justify-between ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
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
