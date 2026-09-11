"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { Briefcase, CheckCircle2, ArrowRight, TrendingUp, Users2, ShieldCheck, Sparkles } from "lucide-react";

interface ProfessionalsSectionProps {
  onJoinAsProfessional: () => void;
}

export function ProfessionalsSection({ onJoinAsProfessional }: ProfessionalsSectionProps) {
  const perks = [
    "Zero platform commission friction on direct client relationships",
    "Showcase verified case studies and demonstrable project outcomes",
    "Attract high-intent clients actively seeking your exact expertise",
    "Standardized reputation badges that build long-term career equity",
  ];

  const handleClick = () => {
    trackEvent("professional_cta_clicked", { source: "professionals_section" });
    onJoinAsProfessional();
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="for-professionals">
      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Narrative & CTA */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-accent/20">
                <Briefcase className="w-3.5 h-3.5" />
                For High-Caliber Professionals
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground text-balance leading-tight mb-6">
                Your Expertise Deserves to Be Discovered.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Build your professional presence, showcase what you do, and connect with people looking for your expertise. Step away from endless cold outreach and win opportunities on the merit of your work.
              </p>

              <div className="space-y-3.5 mb-8">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium text-foreground/90">{perk}</span>
                  </div>
                ))}
              </div>

              <div>
                <Button
                  size="xl"
                  onClick={handleClick}
                  className="rounded-xl px-8 h-12 text-sm sm:text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] group cursor-pointer"
                >
                  Join as a Professional
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground mt-2.5">
                  Early professionals receive verified founding member credentials at launch.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Card Preview */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={150}>
              <div className="p-6 md:p-8 rounded-3xl bg-card border border-border/80 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center font-bold font-display text-xl">
                      ✦
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-display text-base">Founding Pro Access</h4>
                      <p className="text-xs text-muted-foreground">Priority matching on day one</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    Active
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-background border border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">Direct Inbound Requests</span>
                    <span className="text-xs font-bold text-foreground">Unlimited</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-background border border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">Search Visibility Boost</span>
                    <span className="text-xs font-bold text-primary">Top Tier</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-background border border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">Verified Creator Badge</span>
                    <span className="text-xs font-bold text-foreground">Included</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary/70 border border-border/80 text-xs text-muted-foreground flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>
                    "ProsConnect will allow us to showcase real architecture case studies directly to vetted founders without the noise of generic directories."
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
