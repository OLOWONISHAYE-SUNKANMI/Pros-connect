"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WishlistForm } from "@/components/landing/WishlistForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import {
  Sparkles,
  ArrowRight,
  Briefcase,
  Code,
  Palette,
  TrendingUp,
  Megaphone,
  Scale,
  HardHat,
  PlusCircle,
  Eye,
  Globe2,
  Network,
  Rocket,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ForProfessionalsPage() {
  const [quickEmail, setQuickEmail] = useState("");
  const [prefilledEmail, setPrefilledEmail] = useState("");

  useEffect(() => {
    trackEvent("landing_page_view" as any, {
      path: "/for-professionals",
      title: "For Professionals — ProsConnect",
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
      source: "for_professionals_hero",
      hasEmail: Boolean(quickEmail.trim()),
    });
    scrollToWishlist(quickEmail.trim());
  };

  const capabilities = [
    {
      title: "Showcase Your Expertise",
      subtitle: "What you do and why it matters.",
      description:
        "Create a professional profile that communicates your skills, experience, services, and areas of expertise. Let people understand what you do and why it matters.",
      icon: Eye,
      tag: "Visibility",
    },
    {
      title: "Become Discoverable",
      subtitle: "Get found by the right people.",
      description:
        "Make your expertise easier to find when clients, businesses, founders, and other professionals are looking for someone with your capabilities.",
      icon: Globe2,
      tag: "Discovery",
    },
    {
      title: "Build Professional Connections",
      subtitle: "Connect beyond your immediate circle.",
      description:
        "Connect with people beyond your immediate network. Discover potential clients, collaborators, partners, and other professionals who share your interests or complement your expertise.",
      icon: Network,
      tag: "Connection",
    },
    {
      title: "Discover Opportunities",
      subtitle: "Conversations that lead to breakthroughs.",
      description:
        "Not every opportunity begins with a job posting. Some begin with a conversation. ProsConnect is designed to create opportunities through meaningful professional connections.",
      icon: Rocket,
      tag: "Opportunity",
    },
    {
      title: "Build Your Network",
      subtitle: "A network that fuels long-term growth.",
      description:
        "Grow a professional network based on expertise, shared interests, industries, and potential collaboration.",
      icon: TrendingUp,
      tag: "Growth",
    },
  ];

  const industries = [
    {
      title: "Technology",
      icon: Code,
      examples:
        "Developers, engineers, cybersecurity specialists, data professionals, AI specialists, and technology consultants.",
    },
    {
      title: "Creative",
      icon: Palette,
      examples:
        "Designers, photographers, videographers, writers, artists, and creative professionals.",
    },
    {
      title: "Business",
      icon: Briefcase,
      examples:
        "Consultants, strategists, entrepreneurs, business advisors, and operations specialists.",
    },
    {
      title: "Marketing",
      icon: Megaphone,
      examples:
        "Digital marketers, brand strategists, SEO specialists, social media professionals, and communications experts.",
    },
    {
      title: "Finance & Legal",
      icon: Scale,
      examples:
        "Accountants, financial professionals, lawyers, compliance specialists, and advisors.",
    },
    {
      title: "Construction & Engineering",
      icon: HardHat,
      examples:
        "Architects, engineers, contractors, project managers, quantity surveyors, and construction professionals.",
    },
    {
      title: "And More",
      icon: PlusCircle,
      examples:
        "ProsConnect is designed to grow across professional industries and specialized communities.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar onJoinWishlistClick={scrollToWishlist} />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative px-6 pb-20 md:pb-28 overflow-hidden">
          <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container max-w-5xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                For Professionals
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-foreground text-balance leading-[1.1]">
                Your Expertise Deserves <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
                  to Be Discovered.
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                Create a professional presence that helps people discover what you do, understand your expertise, and connect with you when the right opportunity comes along.
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
                      placeholder="Enter your professional email address..."
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
                    Join as a Professional
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </form>
              </div>

              {/* Quote highlight */}
              <div className="mt-12 p-6 max-w-xl mx-auto rounded-2xl bg-card border border-border/70 shadow-sm">
                <p className="text-base sm:text-lg font-medium italic text-foreground/90">
                  “My expertise deserves to be discovered.”
                </p>
                <span className="text-xs text-primary font-semibold uppercase tracking-wider mt-2 block">
                  The ProsConnect Professional Promise
                </span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section: More Than a Profile */}
        <section className="py-20 md:py-24 bg-secondary/30 border-y border-border/60 relative px-6">
          <div className="container max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4 border border-accent/20">
                Beyond Standard Resumes
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground text-balance">
                More Than a Profile. Your Professional Presence.
              </h2>
              <div className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed space-y-4 max-w-3xl mx-auto text-pretty">
                <p>
                  Your expertise is more than a list of skills.
                </p>
                <p>
                  ProsConnect is designed to help you present your professional identity, communicate what you do, and become discoverable by people looking for your expertise.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What Professionals Can Do */}
        <section className="py-24 md:py-32 px-6">
          <div className="container max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-16 md:mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Key Advantages
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-2">
                What Professionals Can Do
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                Tools and visibility engineered to let your accomplishments speak with authority.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, idx) => (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <div className="h-full p-8 rounded-3xl bg-card border border-border/80 shadow-md hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <cap.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                        {cap.tag}
                      </span>
                      <h3 className="text-xl font-bold font-display text-foreground">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Who Is ProsConnect For? */}
        <section className="py-20 md:py-28 bg-secondary/30 border-y border-border/60 px-6">
          <div className="container max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-14 md:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Multi-Disciplinary Community
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-2">
                Who Is ProsConnect For?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                ProsConnect is built for professionals across industries and disciplines.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, idx) => (
                <ScrollReveal key={idx} delay={idx * 70}>
                  <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border/80 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <ind.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold font-display text-foreground">
                        {ind.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {ind.examples}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Your Professional Network Should Work for You */}
        <section className="py-24 md:py-32 px-6">
          <div className="container max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Proactive Reach
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-2">
                Your Professional Network Should Work for You
              </h2>
              <p className="mt-4 text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Be visible. Be discoverable. Be connected.
              </p>
              <div className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto space-y-3">
                <p>
                  Your next client may not be looking for a specific person.
                </p>
                <p>
                  They may simply be looking for the right expertise. ProsConnect helps bridge that gap.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section: Early Access */}
        <section className="py-16 md:py-20 bg-primary/5 border-y border-primary/20 px-6 text-center">
          <div className="container max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" />
              Early Access
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground">
              Be Among the First Professionals on ProsConnect.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Join the early-access list and secure your place in the growing ProsConnect professional community.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                size="lg"
                onClick={() => scrollToWishlist()}
                className="h-12 px-8 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                Join as a Professional
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
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
                Priority Placement
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-foreground text-balance">
                Put Your Expertise in the Right Room.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Be among the first professionals on ProsConnect. The right people are looking for expertise like yours.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="max-w-xl mx-auto">
              <WishlistForm
                id="wishlist-form"
                defaultRole="professional"
                ctaText="Join as a Professional"
                headline="Join as a Professional"
                description="Secure early platform placement, verified profile badging, and priority matching upon launch."
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
