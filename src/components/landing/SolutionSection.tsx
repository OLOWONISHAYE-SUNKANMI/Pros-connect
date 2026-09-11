"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Compass, CheckSquare, MessageCircle, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export function SolutionSection() {
  const solutions = [
    {
      icon: Compass,
      title: "Discover",
      badge: "Intelligent Match",
      description:
        "Find professionals based on verified skills, industry expertise, project categories, and specific professional needs without digging through directories.",
      features: ["Granular skill matching", "Category filtering", "Availability filters"],
    },
    {
      icon: CheckSquare,
      title: "Evaluate",
      badge: "Radical Transparency",
      description:
        "Explore rich professional profiles and understand real experience, verified credentials, and client feedback before ever making a connection.",
      features: ["Verified track records", "Standardized credibility scores", "Authentic portfolio signals"],
    },
    {
      icon: MessageCircle,
      title: "Connect",
      badge: "Direct Access",
      description:
        "Connect directly with the specialists who can move your project forward. No middlemen, no artificial barriers, no bureaucratic runaround.",
      features: ["Direct messaging", "Frictionless inquiry", "One-click meeting scheduling"],
    },
    {
      icon: TrendingUp,
      title: "Grow",
      badge: "Shared Success",
      description:
        "Professionals increase their visibility, attract high-intent clients, and build lasting, repeatable relationships with top collaborators.",
      features: ["High-intent inbound leads", "Reputation compounding", "Network referral loops"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            The Unified Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground text-balance">
            Meet ProsConnect
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            ProsConnect brings professionals and opportunities into one connected ecosystem, making it easier to discover expertise, build trust, and create meaningful professional connections.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={item.title}
                delay={idx * 100}
                className="group p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-foreground mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <ul className="space-y-1.5">
                    {item.features.map((feat) => (
                      <li key={feat} className="text-xs text-foreground/75 font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
