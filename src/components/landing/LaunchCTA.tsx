"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface LaunchCTAProps {
  onJoinWishlistClick: (email?: string) => void;
}

export function LaunchCTA({ onJoinWishlistClick }: LaunchCTAProps) {
  const [email, setEmail] = useState("");

  const handleAction = (emailVal?: string) => {
    trackEvent("hero_cta_clicked", {
      source: "launch_cta_section",
      hasEmail: Boolean(emailVal),
    });
    onJoinWishlistClick(emailVal);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAction(email.trim() || undefined);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative ambient blurred ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Be An Early Pioneer
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground text-balance leading-tight mb-6">
            ProsConnect Is Coming.
          </h2>

          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
            We're building a better way for people and professionals to connect. Join the wishlist and be among the first to experience ProsConnect.
          </p>

          <div className="max-w-xl mx-auto mb-4">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 p-1.5 sm:p-2 bg-card/70 border border-border/80 rounded-2xl shadow-2xl backdrop-blur-xl transition-all focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20"
            >
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email to join the wishlist..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 bg-transparent border-none text-foreground placeholder:text-muted-foreground/70 text-sm md:text-base focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-sm md:text-base rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 whitespace-nowrap transition-all hover:scale-[1.02] cursor-pointer shrink-0"
              >
                Join the Wishlist
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </form>
          </div>

          <p className="text-xs md:text-sm text-muted-foreground mt-4 font-medium">
            Early members will be notified when access becomes available.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
