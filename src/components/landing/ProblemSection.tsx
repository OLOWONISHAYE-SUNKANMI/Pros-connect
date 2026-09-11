"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SearchX, ShieldAlert, GitFork, AlertCircle } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: SearchX,
      title: "Too Much Searching",
      tag: "Wasted Hours",
      description:
        "Finding the right person often means searching through multiple platforms, referrals, social media, and communities with no guarantee of quality.",
      painPoint: "High search friction & scattered channels",
    },
    {
      icon: ShieldAlert,
      title: "Hard to Know Who to Trust",
      tag: "Uncertainty",
      description:
        "Profiles don't always provide enough transparent information or authentic signals to confidently evaluate someone's true expertise before hiring.",
      painPoint: "Lack of verified track records & credibility",
    },
    {
      icon: GitFork,
      title: "Fragmented Connections",
      tag: "Tool Chaos",
      description:
        "People discover professionals in one place, communicate somewhere else, and manage contracts and relationships across disconnected tools.",
      painPoint: "Siloed communication & broken workflows",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="about">
      <div className="container relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-semibold uppercase tracking-wider mb-4 border border-destructive/20">
            <AlertCircle className="w-3.5 h-3.5" />
            The Friction In Professional Networking
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground text-balance">
            Finding the Right Professional Shouldn't Be This Hard.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Whether you are hiring or offering services, the current landscape is crowded with noise, fake claims, and fragmented workflows.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <ScrollReveal
                key={prob.title}
                delay={idx * 120}
                className="group relative p-7 rounded-2xl bg-card border border-border/70 hover:border-destructive/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary">
                      {prob.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-foreground mb-3">
                    {prob.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {prob.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 text-xs font-medium text-destructive flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-destructive" />
                  {prob.painPoint}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
