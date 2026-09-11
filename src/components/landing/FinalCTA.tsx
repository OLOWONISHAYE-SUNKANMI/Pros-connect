"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { WishlistForm } from "./WishlistForm";
import { Sparkles, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-secondary/40 to-background relative overflow-hidden border-t border-border/70">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Your Next Chapter Begins Here
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight text-foreground text-balance leading-tight mb-6">
            The Right Connection Can Change Everything.
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            Join the ProsConnect wishlist and be among the first to experience a smarter way to connect with professionals.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150} className="max-w-xl mx-auto">
          <WishlistForm id="wishlist-form-final" compact={true} />
        </ScrollReveal>

        <p className="text-xs text-muted-foreground mt-6 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-primary" />
          No spam. Just launch updates and early-access information.
        </p>
      </div>
    </section>
  );
}
