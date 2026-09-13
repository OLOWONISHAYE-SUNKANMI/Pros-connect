"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WishlistForm } from "@/components/landing/WishlistForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import {
  Sparkles,
  ArrowRight,
  Compass,
  Rocket,
  Target,
  Eye,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  Users,
} from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    trackEvent("landing_page_view" as any, {
      path: "/about",
      title: "About Us — ProsConnect",
    });
  }, []);

  const scrollToWishlist = () => {
    const el = document.getElementById("wishlist-form");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });

      el.classList.add("ring-4", "ring-primary", "ring-offset-4", "ring-offset-background");
      setTimeout(() => el.classList.remove("ring-4", "ring-primary", "ring-offset-4", "ring-offset-background"), 2000);
      const input = el.querySelector<HTMLInputElement>("input");
      if (input) input.focus();
    }
  };

  const beliefs = [
    {
      title: "Expertise Should Be Discoverable",
      desc: "Great capabilities shouldn't be confined to who you know or buried behind opaque algorithms. Every professional deserves a platform that illuminates what they do best.",
      icon: Eye,
    },
    {
      title: "Relevance Over Volume",
      desc: "More connections don't equal better outcomes. We prioritize depth, context, and accurate fit over superficial follower counts.",
      icon: Target,
    },
    {
      title: "Trust Is Built Through Clarity",
      desc: "Transparent credentials, verified capabilities, and open expectations lay the bedrock for dependable, high-impact collaboration.",
      icon: ShieldCheck,
    },
    {
      title: "Connections Create Possibilities",
      desc: "Every great enterprise, invention, or project began with an initial dialogue. Connecting the right minds unlocks compounding value.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar onJoinWishlistClick={scrollToWishlist} />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative px-6 pb-20 md:pb-28 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container max-w-5xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                Our Purpose & Story
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-foreground text-balance leading-[1.1]">
                We're Building a Better Way to <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
                  Connect People and Expertise.
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                ProsConnect exists because finding the right professional shouldn't depend on who you know, where you search, or how much time you have. We believe the right connection can create opportunities that wouldn't otherwise exist.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  onClick={scrollToWishlist}
                  className="w-full sm:w-auto h-13 px-8 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:scale-[1.02]"
                >
                  Join the Journey
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 md:py-24 bg-secondary/30 border-y border-border/60 px-6">
          <div className="container max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Origin & Purpose
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-2">
                Why ProsConnect?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-5 text-pretty">
                <p>
                  The professional world is full of talented people. There are developers building exceptional products, designers solving complex problems, consultants helping businesses grow, engineers building infrastructure, creatives shaping brands, and specialists solving problems every day.
                </p>
                <p>
                  But discovering the right person can still be difficult. Professional networks are fragmented. Opportunities are scattered. And finding someone you can confidently connect with often depends on personal referrals or endless searching.
                </p>
                <p className="text-foreground font-semibold text-xl pt-2">
                  ProsConnect is being built to change that.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vision & Mission Split Cards */}
        <section className="py-24 md:py-32 px-6">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <ScrollReveal delay={100}>
                <div className="h-full p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-md hover:border-primary/40 hover:shadow-xl transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Rocket className="w-7 h-7" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                      Our Vision
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                      A world where expertise is easier to discover and opportunities are easier to create.
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed pt-2">
                      We envision a connected professional ecosystem where people can discover expertise based on what they need, professionals can become visible for what they do best, and meaningful relationships can form beyond traditional networks.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Mission */}
              <ScrollReveal delay={200}>
                <div className="h-full p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-md hover:border-accent/40 hover:shadow-xl transition-all flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <Target className="w-7 h-7" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                      Our Mission
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                      Make professional connections more accessible, relevant, and meaningful.
                    </h3>
                    <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-2 pt-2">
                      <p>We're building technology that helps bridge the gap between:</p>
                      <div className="p-4 rounded-xl bg-secondary border border-border font-medium text-foreground text-center">
                        <strong className="text-primary">People who need expertise</strong>
                        <span className="mx-2 text-muted-foreground">and</span>
                        <strong className="text-accent">People who have it.</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section: What We Believe In */}
        <section className="py-20 md:py-28 bg-secondary/30 border-y border-border/60 px-6">
          <div className="container max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-16 md:mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Foundational Values
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-2">
                What We Believe In
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                The core convictions driving our platform architecture and team culture.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {beliefs.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-sm hover:border-primary/40 hover:shadow-md transition-all flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 bg-secondary/30 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <ScrollReveal className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                Join the Journey
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-foreground text-balance">
                Be Part of the ProsConnect Story.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Join our early-access community today and help shape the next era of professional discovery and connection.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="max-w-xl mx-auto">
              <WishlistForm
                id="wishlist-form"
                defaultRole="both"
                ctaText="Join the Journey"
                headline="Join the Journey"
                description="Receive behind-the-scenes progress reports, beta testing invites, and foundational community status."
              />
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
