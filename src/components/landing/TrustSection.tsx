"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { ShieldCheck, UserCheck, Award, MessageSquareLock, CheckCircle, Sparkles } from "lucide-react";

export function TrustSection() {
  const trustPillars = [
    {
      icon: ShieldCheck,
      title: "Verified Professionals",
      description:
        "Every profile undergoes credential and identity screening to guarantee authentic representation and high professional standards.",
    },
    {
      icon: UserCheck,
      title: "Comprehensive Profiles",
      description:
        "View past projects, verified deliverables, detailed case studies, and demonstrable outcomes rather than generic resumes.",
    },
    {
      icon: Award,
      title: "Validated Skills & Expertise",
      description:
        "Skills are mapped to verified portfolio items and real work history, eliminating exaggeration and false claims.",
    },
    {
      icon: CheckCircle,
      title: "Authentic Reviews & Feedback",
      description:
        "Transparent evaluations from real clients and verified collaborators who have completed projects together.",
    },
    {
      icon: MessageSquareLock,
      title: "Secure & Direct Communication",
      description:
        "Direct communication channels that keep your project specifics, discussions, and contracts completely private and protected.",
    },
    {
      icon: Sparkles,
      title: "Transparent Information",
      description:
        "Clear pricing expectations, availability schedules, and response metrics displayed upfront before you reach out.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/20 relative overflow-hidden">
      <div className="container relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            Credibility by Design
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground text-balance">
            Built Around Trust, Expertise, and Real Connections
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            ProsConnect is intentionally engineered to help users make better professional decisions with complete confidence.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                delay={idx * 80}
                className="p-7 rounded-2xl bg-card border border-border/70 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display text-foreground mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
