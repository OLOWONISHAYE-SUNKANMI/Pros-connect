"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { FileText, SearchCheck, Users, Rocket, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: FileText,
      title: "Tell Us What You Need",
      desc: "Describe what you're looking for or the type of professional you want to connect with — whether for a quick project or long-term engagement.",
      highlight: "Simple & guided brief",
    },
    {
      num: "02",
      icon: SearchCheck,
      title: "Discover the Right Pros",
      desc: "Explore relevant professionals based on verified skills, industry background, rate transparency, and real-time availability.",
      highlight: "Precision discovery",
    },
    {
      num: "03",
      icon: Users,
      title: "Evaluate & Connect",
      desc: "Review comprehensive profiles, examine past work, and initiate conversations directly with the candidates who match your exact criteria.",
      highlight: "Direct conversation",
    },
    {
      num: "04",
      icon: Rocket,
      title: "Build Something Great",
      desc: "Turn your professional connection into real opportunities. Collaborate seamlessly, execute with confidence, and grow your network.",
      highlight: "Realized outcomes",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="how-it-works">
      <div className="container relative z-10">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            Frictionless Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground text-balance">
            From Need to Connection in Simple Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            A transparent four-step workflow built to connect you with the right specialist without unnecessary friction or gatekeeping.
          </p>
        </ScrollReveal>

        {/* 4-step horizontal process for desktop, vertical stack for mobile */}
        <div className="relative max-w-6xl mx-auto">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-14 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScrollReveal
                  key={step.num}
                  delay={idx * 150}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step number badge & icon container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-card border-2 border-primary/30 group-hover:border-primary text-primary flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-mono text-[10px] font-bold shadow-sm">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-foreground mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xs">
                    {step.desc}
                  </p>

                  <span className="mt-auto inline-block text-[11px] font-semibold text-primary/90 bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                    {step.highlight}
                  </span>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
