"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { SocialProof } from "@/components/landing/SocialProof";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { CategoriesSection } from "@/components/landing/CategoriesSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { ProfessionalsSection } from "@/components/landing/ProfessionalsSection";
import { ClientsSection } from "@/components/landing/ClientsSection";
import { LaunchCTA } from "@/components/landing/LaunchCTA";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";
import { trackEvent } from "@/lib/analytics";

export default function LandingPage() {
  const [selectedRole, setSelectedRole] = useState<"client" | "professional" | "both">("client");

  useEffect(() => {
    trackEvent("landing_page_view", {
      path: "/",
      title: "ProsConnect — Connect With the Right Professionals",
    });
  }, []);

  const scrollToHeroWishlist = (
    role?: "client" | "professional" | "both",
    prefillEmail?: string
  ) => {
    if (role) {
      setSelectedRole(role);
    }

    if (prefillEmail) {
      const emailInputs = document.querySelectorAll<HTMLInputElement>("input[type='email']");
      emailInputs.forEach((inp) => {
        inp.value = prefillEmail;
        inp.dispatchEvent(new Event("input", { bubbles: true }));
      });
    }

    const el =
      document.getElementById("wishlist-signup-hero") ||
      document.getElementById("wishlist-form");

    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });

      // Highlight with fiery orange glow ring
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

      // Focus name input after scroll begins
      setTimeout(() => {
        const input =
          el.querySelector<HTMLInputElement>("input[type='text']") ||
          el.querySelector<HTMLInputElement>("input");
        if (input) input.focus();
      }, 450);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* 1. Header / Navigation */}
      <Navbar onJoinWishlistClick={() => scrollToHeroWishlist()} />

      <main>
        {/* 2 & 3. Hero Section with Wishlist Signup Form & Interactive Visual Mockup */}
        <Hero
          selectedRole={selectedRole}
          onRoleSelect={(role) => setSelectedRole(role)}
        />

        {/* 4. Social Proof / Early Access Dynamic Indicator */}
        <SocialProof />

        {/* 5. Problem Section */}
        <ProblemSection />

        {/* 6. Solution / Meet ProsConnect Section */}
        <SolutionSection />

        {/* 7. How It Works Section */}
        <HowItWorks />

        {/* 8. Benefits Section */}
        <BenefitsSection
          onSelectRole={(role) => scrollToHeroWishlist(role)}
        />

        {/* 9. Professional Categories Grid */}
        <CategoriesSection />

        {/* 10. Trust Section */}
        <TrustSection />

        {/* 11. For Professionals Section */}
        <ProfessionalsSection
          onJoinAsProfessional={() => scrollToHeroWishlist("professional")}
        />

        {/* 12. For Clients Section */}
        <ClientsSection
          onJoinAsClient={() => scrollToHeroWishlist("client")}
        />

        {/* 13. Launch / Early Access Section */}
        <LaunchCTA
          onJoinWishlistClick={(email) => scrollToHeroWishlist(undefined, email)}
        />

        {/* 14. FAQ Section */}
        <FAQSection />

        {/* 15. Final CTA with Inline Wishlist Form */}
        <FinalCTA />
      </main>

      {/* 16. Footer */}
      <Footer />
    </div>
  );
}
