"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WishlistForm } from "@/components/landing/WishlistForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import {
  Sparkles,
  ArrowRight,
  Target,
  Search,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
  Briefcase,
  Users,
  Compass,
  FileCheck,
  ShieldCheck,
  Layers,
} from "lucide-react";

export default function HowItWorksPage() {
  const [quickEmail, setQuickEmail] = useState("");
  const [prefilledEmail, setPrefilledEmail] = useState("");

  useEffect(() => {
    trackEvent("landing_page_view" as any, {
      path: "/how-it-works",
      title: "How It Works — ProsConnect",
    });
  }, []);

  const scrollToWishlist = (emailVal?: string) => {
    const targetEmail = (emailVal || quickEmail).trim();
    if (targetEmail) {
      setPrefilledEmail(targetEmail);
      const emailInputs = document.querySelectorAll<HTMLInputElement>(
        "#wishlist-form input[type='email']"
      );
      emailInputs.forEach((inp) => {
        inp.value = targetEmail;
        inp.dispatchEvent(new Event("input", { bubbles: true }));
      });
    }

    const el = document.getElementById("wishlist-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });

      el.classList.add(
        "ring-4",
        "ring-primary",
        "ring-offset-4",
        "ring-offset-background",
        "scale-[1.01]",
        "transition-all",
        "duration-500"
      );
      setTimeout(() => {
        el.classList.remove(
          "ring-4",
          "ring-primary",
          "ring-offset-4",
          "ring-offset-background",
          "scale-[1.01]"
        );
      }, 2000);

      setTimeout(() => {
        const nameInput =
          el.querySelector<HTMLInputElement>("input[type='text']") ||
          el.querySelector<HTMLInputElement>("input");
        if (nameInput) nameInput.focus();
      }, 450);
    }
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("hero_cta_clicked" as any, {
      source: "how_it_works_hero",
      hasEmail: Boolean(quickEmail.trim()),
    });
    scrollToWishlist(quickEmail.trim());
  };

  const steps = [
    {
      number: "01",
      title: "Define What You Need",
      subtitle: "Start with your goal.",
      description:
        "Whether you're looking for a specialist, exploring a collaboration, or searching for expertise to move a project forward, start by telling ProsConnect what you're looking for.",
      icon: Target,
      tag: "Goal Definition",
      badgeColor: "bg-primary/10 text-primary border-primary/20",
    },
    {
      number: "02",
      title: "Discover Relevant Professionals",
      subtitle: "Find expertise that fits.",
      description:
        "Explore professionals based on their skills, experience, industry, areas of expertise, and other relevant information. The goal isn't simply to show you more people. It's to help you discover more relevant people.",
      icon: Search,
      tag: "Precision Discovery",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    },
    {
      number: "03",
      title: "Explore & Evaluate",
      subtitle: "Know who you're connecting with.",
      description:
        "Explore professional profiles to understand their expertise, experience, services, and professional background before starting a conversation. Make informed decisions before making a connection.",
      icon: FileCheck,
      tag: "Deep Context",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    },
    {
      number: "04",
      title: "Connect",
      subtitle: "Start the conversation.",
      description:
        "When you've found someone who fits what you're looking for, connect directly and begin a professional conversation.",
      icon: MessageSquare,
      tag: "Direct Contact",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    },
    {
      number: "05",
      title: "Create Opportunities",
      subtitle: "Turn connections into outcomes.",
      description:
        "A connection can become a project, partnership, collaboration, business opportunity, or long-term professional relationship. ProsConnect is designed to make those possibilities easier to discover.",
      icon: TrendingUp,
      tag: "High Value Outcomes",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    },
  ];

  const pillars = [
    {
      title: "Discover",
      desc: "Find people based on what they know and what they do.",
      icon: Compass,
    },
    {
      title: "Understand",
      desc: "Get a clearer picture of professional expertise and experience.",
      icon: ShieldCheck,
    },
    {
      title: "Connect",
      desc: "Start conversations directly without intermediaries.",
      icon: MessageSquare,
    },
    {
      title: "Build",
      desc: "Turn professional connections into long-term opportunities.",
      icon: Layers,
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
                The ProsConnect Journey
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-foreground text-balance leading-[1.1]">
                The Right Connection <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
                  Starts Here.
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                ProsConnect makes it easier to discover professionals, explore expertise, and connect with the right people for your next project, business need, or opportunity.
              </p>

              {/* Interactive Quick Capture CTA */}
              <div className="mt-8 max-w-xl mx-auto mb-3">
                <form
                  onSubmit={handleHeroSubmit}
                  className="flex flex-col sm:flex-row items-center gap-3 p-1.5 sm:p-2 bg-card/70 border border-border/80 rounded-2xl shadow-xl backdrop-blur-xl transition-all focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20"
                >
                  <div className="relative w-full">
                    <input
                      type="email"
                      placeholder="Enter your email to join the wishlist..."
                      value={quickEmail}
                      onChange={(e) => setQuickEmail(e.target.value)}
                      className="w-full h-12 px-4 bg-transparent border-none text-foreground placeholder:text-muted-foreground/70 text-sm md:text-base focus:outline-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto h-12 px-7 text-sm md:text-base rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 whitespace-nowrap transition-all hover:scale-[1.02] shrink-0 cursor-pointer"
                  >
                    Join the Wishlist
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </form>

                <div className="flex items-center justify-center gap-4 mt-3">
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById("steps-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs font-semibold text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                  >
                    <span>Explore ProsConnect (5 Steps)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Quick Flow Indicators */}
              <div className="mt-14 pt-8 border-t border-border/60 max-w-3xl mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  {[
                    { step: "Discover", desc: "Targeted Search" },
                    { step: "Evaluate", desc: "Verified Context" },
                    { step: "Connect", desc: "Direct Dialogue" },
                    { step: "Collaborate", desc: "Real Outcomes" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-card border border-border/60 shadow-xs flex flex-col items-center hover:border-primary/30 transition-colors"
                    >
                      <span className="text-xs font-mono font-bold text-primary mb-0.5">
                        0{idx + 1}
                      </span>
                      <span className="text-sm font-bold font-display text-foreground">
                        {item.step}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section: One Platform. Better Connections. */}
        <section className="py-20 md:py-24 bg-secondary/30 border-y border-border/60 relative">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-accent/20">
                One Platform. Better Connections.
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground text-balance">
                Professional connections, without the friction.
              </h2>
              <div className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4 max-w-3xl mx-auto text-pretty">
                <p>
                  Finding the right person shouldn't require endless searches, scattered recommendations, or uncertainty about who to trust.
                </p>
                <p>
                  ProsConnect brings professional discovery and connection into one experience, helping clients find relevant expertise while giving professionals a place to showcase what they do and build meaningful relationships.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section: How ProsConnect Works (5 Steps) */}
        <section id="steps-section" className="py-24 md:py-32 px-6">
          <div className="container max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-16 md:mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Step-by-Step Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-2">
                How ProsConnect Works
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                A simple, intuitive path from identifying a need to forging a productive professional relationship.
              </p>
            </ScrollReveal>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 md:before:left-12 before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent before:hidden md:before:block">
              {steps.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <div className="flex flex-col md:flex-row items-start gap-6 p-6 sm:p-8 rounded-3xl bg-card border border-border/80 shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 relative group">
                    {/* Number Badge */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <span className="text-xl sm:text-2xl font-bold font-mono text-primary group-hover:text-primary-foreground transition-colors">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${step.badgeColor}`}
                        >
                          {step.tag}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold font-display text-foreground tracking-tight">
                        {step.title}
                      </h3>
                      <h4 className="text-base font-semibold text-primary">
                        {step.subtitle}
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Built for Both Sides */}
        <section className="py-20 md:py-28 bg-secondary/30 border-y border-border/60 px-6">
          <div className="container max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-14 md:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Two Sides, One Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-2">
                Built for Both Sides
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're looking for expertise or offering it, ProsConnect connects the two.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* For Professionals Card */}
              <ScrollReveal delay={100}>
                <div className="h-full p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-md hover:border-primary/40 hover:shadow-xl transition-all flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                      <Briefcase className="w-7 h-7" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                      For Professionals
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                      Showcase your work to the right people.
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Build your professional presence, showcase your expertise, and become discoverable by people and organizations looking for what you do.
                    </p>
                  </div>
                  <div className="pt-8">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full h-12 rounded-xl font-semibold border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    >
                      <Link href="/for-professionals" className="flex items-center justify-center gap-2">
                        Explore for Professionals
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>

              {/* For Clients Card */}
              <ScrollReveal delay={200}>
                <div className="h-full p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-md hover:border-accent/40 hover:shadow-xl transition-all flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-105 transition-transform">
                      <Users className="w-7 h-7" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                      For Clients
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                      Find expertise tailored to your goals.
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Discover relevant professionals and connect with the expertise you need to move your project, business, or idea forward.
                    </p>
                  </div>
                  <div className="pt-8">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full h-12 rounded-xl font-semibold border-border group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all"
                    >
                      <Link href="/for-clients" className="flex items-center justify-center gap-2">
                        Explore for Clients
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Section: What Makes the Experience Different? */}
        <section className="py-24 md:py-32 px-6">
          <div className="container max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-16 md:mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                The ProsConnect Difference
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-2">
                Less searching. More meaningful connections.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                ProsConnect is designed around relevance and professional identity rather than simply creating another place to post and search for jobs.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => (
                <ScrollReveal key={idx} delay={idx * 90}>
                  <div className="p-6 rounded-3xl bg-card border border-border/80 shadow-sm hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      <pillar.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 bg-secondary/30 border-t border-border/60 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <ScrollReveal className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                Join the Early Access List
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-foreground text-balance">
                The next opportunity could start with one connection.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Join ProsConnect and be among the first to experience a better way to discover and connect with professionals.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="max-w-xl mx-auto">
              <WishlistForm
                id="wishlist-form"
                defaultRole="both"
                ctaText="Join the Wishlist"
                headline="Join the ProsConnect Wishlist"
                description="Early members receive prioritized invitations, onboarding benefits, and first access to new connections."
                prefilledEmail={prefilledEmail}
              />
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
