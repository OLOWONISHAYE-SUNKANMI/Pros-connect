"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CheckCircle2, UserCheck, Briefcase, Sparkles, ArrowRight } from "lucide-react";

interface BenefitsSectionProps {
  onSelectRole?: (role: "client" | "professional") => void;
}

export function BenefitsSection({ onSelectRole }: BenefitsSectionProps) {
  const [activeTab, setActiveTab] = useState<"client" | "professional">("client");

  const clientBenefits = [
    {
      title: "Find relevant professionals faster",
      desc: "Stop sifting through hundreds of unqualified resumes. Get matched to vetted professionals with proven track records.",
    },
    {
      title: "Discover specialized expertise",
      desc: "From niche regulatory frameworks to state-of-the-art tech stacks, easily locate domain experts who understand your exact problem.",
    },
    {
      title: "Make more informed decisions",
      desc: "Compare verified ratings, portfolio deliverables, and authentic client recommendations transparently.",
    },
    {
      title: "Reduce time spent searching",
      desc: "Spend less time scouting and vetting, and more time building your company and launching initiatives.",
    },
    {
      title: "Build direct professional relationships",
      desc: "Communicate directly with talent without predatory middleman markups or unnecessary red tape.",
    },
  ];

  const proBenefits = [
    {
      title: "Increase professional visibility",
      desc: "Position your profile in front of motivated businesses, founders, and leaders looking for your specific skillset.",
    },
    {
      title: "Showcase genuine expertise",
      desc: "Highlight your verified deliverables, case studies, client accolades, and actual industry impact.",
    },
    {
      title: "Reach high-intent opportunities",
      desc: "Connect with clients who appreciate high-quality work, respect your expertise, and pay market rates.",
    },
    {
      title: "Build lasting professional credibility",
      desc: "Earn standardized credibility badges and reviews that stay with you across your entire professional trajectory.",
    },
    {
      title: "Connect with clients and collaborators",
      desc: "Expand your peer network, partner with fellow specialists, and unlock new collaborative projects.",
    },
  ];

  const handleRoleClick = (role: "client" | "professional") => {
    if (onSelectRole) onSelectRole(role);
    const target = document.getElementById("wishlist-signup-hero") || document.getElementById("wishlist-form");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
      <div className="container relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            Tailored Advantages
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground text-balance">
            Built for Better Professional Connections
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            ProsConnect bridges the gap with purpose-built tools designed specifically for the needs of both sides of the ecosystem.
          </p>
        </ScrollReveal>

        {/* Tab switch for mobile / compact screens */}
        <div className="flex justify-center mb-10 md:hidden">
          <div className="inline-flex p-1 bg-background rounded-xl border border-border">
            <button
              onClick={() => setActiveTab("client")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === "client" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              For Clients
            </button>
            <button
              onClick={() => setActiveTab("professional")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                activeTab === "professional" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"
              }`}
            >
              For Professionals
            </button>
          </div>
        </div>

        {/* Side by side columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Clients Card */}
          <ScrollReveal
            delay={100}
            className={`p-8 rounded-3xl bg-card border border-border/80 shadow-xl flex flex-col justify-between ${
              activeTab !== "client" ? "hidden md:flex" : "flex"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-foreground">For Clients</h3>
                    <p className="text-xs text-muted-foreground">Startups, founders & businesses</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-semibold text-foreground/80">
                  Seeking Talent
                </span>
              </div>

              <div className="space-y-4">
                {clientBenefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3.5">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-0.5">{b.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60">
              <button
                type="button"
                onClick={() => handleRoleClick("client")}
                className="w-full py-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-sm font-semibold flex items-center justify-center gap-2 transition-all group cursor-pointer"
              >
                Join as a Client
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </ScrollReveal>

          {/* For Professionals Card */}
          <ScrollReveal
            delay={200}
            className={`p-8 rounded-3xl bg-card border border-border/80 shadow-xl flex flex-col justify-between ${
              activeTab !== "professional" ? "hidden md:flex" : "flex"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-border/60">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-display text-foreground">For Professionals</h3>
                    <p className="text-xs text-muted-foreground">Specialists, creators & consultants</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary text-xs font-semibold text-foreground/80">
                  Offering Expertise
                </span>
              </div>

              <div className="space-y-4">
                {proBenefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3.5">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground mb-0.5">{b.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/60">
              <button
                type="button"
                onClick={() => handleRoleClick("professional")}
                className="w-full py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer"
              >
                Join as a Professional
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
