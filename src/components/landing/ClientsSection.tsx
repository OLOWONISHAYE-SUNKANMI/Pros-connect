"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { UserCheck, CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

interface ClientsSectionProps {
  onJoinAsClient: () => void;
}

export function ClientsSection({ onJoinAsClient }: ClientsSectionProps) {
  const perks = [
    "Discover pre-screened specialists with demonstrable work evidence",
    "Compare transparent hourly or fixed rate structures without hidden surprises",
    "Bypass agency markups and speak directly to execution leaders",
    "Save weeks of unproductive recruitment and interview cycles",
  ];

  const handleClick = () => {
    trackEvent("client_cta_clicked", { source: "clients_section" });
    onJoinAsClient();
  };

  return (
    <section className="py-20 md:py-28 bg-secondary/20 relative overflow-hidden" id="for-clients">
      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Card Preview */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal delay={150}>
              <div className="p-6 md:p-8 rounded-3xl bg-card border border-border/80 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold font-display text-xl">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-display text-base">Client Advantage</h4>
                      <p className="text-xs text-muted-foreground">Faster team expansion</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    Guaranteed
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-background border border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">Average Match Speed</span>
                    <span className="text-xs font-bold text-foreground">&lt; 24 Hours</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-background border border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">Direct Escrow Protection</span>
                    <span className="text-xs font-bold text-primary">Zero Markup</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-background border border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">Vetted Background Checks</span>
                    <span className="text-xs font-bold text-foreground">Verified 100%</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary/70 border border-border/80 text-xs text-muted-foreground flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    "Being able to find a fractional CFO and mobile engineer in one verified ecosystem will transform how our startup operates."
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative & CTA */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
                <UserCheck className="w-3.5 h-3.5" />
                For Companies & Founders
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground text-balance leading-tight mb-6">
                Find the People Who Can Move Your Idea Forward.
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Whether you're building a company, launching a project, solving a critical business problem, or looking for specialized expertise, ProsConnect helps you discover the right professionals without the noise.
              </p>

              <div className="space-y-3.5 mb-8">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
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
                  className="rounded-xl px-8 h-12 text-sm sm:text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] group cursor-pointer"
                >
                  Join as a Client
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground mt-2.5">
                  Early clients receive VIP concierge matching and invitation privileges.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
