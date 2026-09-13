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
  Search,
  Filter,
  CheckCircle2,
  MessageSquare,
  Repeat,
  Building,
  Rocket,
  User,
  Layers,
  Code,
  Palette,
  Briefcase,
  Megaphone,
  HardHat,
  ShieldCheck,
} from "lucide-react";

export default function ForClientsPage() {
  const [quickEmail, setQuickEmail] = useState("");
  const [prefilledEmail, setPrefilledEmail] = useState("");

  useEffect(() => {
    trackEvent("landing_page_view" as any, {
      path: "/for-clients",
      title: "For Clients — ProsConnect",
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
      source: "for_clients_hero",
      hasEmail: Boolean(quickEmail.trim()),
    });
    scrollToWishlist(quickEmail.trim());
  };

  const clientCapabilities = [
    {
      title: "Describe What You Need",
      subtitle: "Start with your goal.",
      description:
        "Whether you're building a product, launching a business, solving a problem, or looking for specialized expertise, tell ProsConnect what you're trying to accomplish.",
      icon: Search,
      tag: "Intelligent Intake",
    },
    {
      title: "Discover Relevant Professionals",
      subtitle: "Precision over noise.",
      description:
        "Explore professionals based on skills, expertise, industry, services, and other relevant criteria. Find people who are relevant to your specific need, not just people who happen to match a keyword.",
      icon: Filter,
      tag: "Relevance Engine",
    },
    {
      title: "Explore Their Expertise",
      subtitle: "Build context before you connect.",
      description:
        "Review professional profiles to understand: Skills, Experience, Services, Areas of expertise, and Professional background. Make informed, confident choices.",
      icon: ShieldCheck,
      tag: "Transparent Profiles",
    },
    {
      title: "Connect Directly",
      subtitle: "No friction. Pure collaboration.",
      description:
        "Found someone who looks like a good fit? Start a conversation and explore whether there's an opportunity to work together.",
      icon: MessageSquare,
      tag: "Direct Dialogue",
    },
    {
      title: "Build Long-Term Relationships",
      subtitle: "Your trusted roster for the future.",
      description:
        "The right professional doesn't have to be a one-time solution. Build relationships with people you can return to for future projects, collaborations, and opportunities.",
      icon: Repeat,
      tag: "Lasting Partnerships",
    },
  ];

  const categories = [
    {
      title: "Technology",
      icon: Code,
      description:
        "Developers, AI specialists, software engineers, IT professionals, and technology consultants.",
    },
    {
      title: "Design & Creative",
      icon: Palette,
      description:
        "UI/UX designers, graphic designers, photographers, videographers, and creative specialists.",
    },
    {
      title: "Business & Consulting",
      icon: Briefcase,
      description:
        "Business consultants, strategists, operations specialists, and advisors.",
    },
    {
      title: "Marketing",
      icon: Megaphone,
      description:
        "Brand strategists, digital marketers, SEO specialists, content professionals, and social media experts.",
    },
    {
      title: "Engineering & Construction",
      icon: HardHat,
      description:
        "Architects, engineers, project managers, contractors, and construction specialists.",
    },
    {
      title: "Professional Services",
      icon: ShieldCheck,
      description:
        "Finance, legal, education, healthcare, and other specialized professional services.",
    },
  ];

  const clientSegments = [
    {
      title: "Startups",
      icon: Rocket,
      desc: "Find the expertise needed to turn an idea into a product and scale fast.",
    },
    {
      title: "Businesses",
      icon: Building,
      desc: "Connect with specialists who can solve specific, high-impact business challenges.",
    },
    {
      title: "Individuals",
      icon: User,
      desc: "Find verified professionals for personal projects and specialized consulting needs.",
    },
    {
      title: "Organizations",
      icon: Layers,
      desc: "Discover vetted professional teams for large initiatives and ongoing requirements.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar onJoinWishlistClick={scrollToWishlist} />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative px-6 pb-20 md:pb-28 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container max-w-5xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-6 border border-accent/20">
                <Sparkles className="w-3.5 h-3.5" />
                For Clients & Organizations
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-foreground text-balance leading-[1.1]">
                Find the Expertise <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
                  You Need.
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                From a single project to a long-term business relationship, ProsConnect helps you discover professionals with the skills and experience to move things forward.
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
                      placeholder="Enter your email to find expertise..."
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
                    Join as a Client
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Section: Finding the Right Professional Should Be Easier */}
        <section className="py-20 md:py-24 bg-secondary/30 border-y border-border/60 px-6">
          <div className="container max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
                The Core Challenge
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground text-balance">
                Finding the Right Professional Should Be Easier.
              </h2>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-pretty">
                When you need specialized expertise, searching through referrals, social media, directories, and disconnected platforms can take time. ProsConnect brings professional discovery into one place.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* What You Can Do (5 Client Capabilities) */}
        <section className="py-24 md:py-32 px-6">
          <div className="container max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-16 md:mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Client Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-2">
                What You Can Do
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
                Designed to make discovering, vetting, and collaborating with specialists straightforward.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientCapabilities.map((cap, idx) => (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <div className="h-full p-8 rounded-3xl bg-card border border-border/80 shadow-md hover:shadow-xl hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                        <cap.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                        {cap.tag}
                      </span>
                      <h3 className="text-xl font-bold font-display text-foreground">
                        {cap.title}
                      </h3>
                      <h4 className="text-xs font-semibold text-primary">
                        {cap.subtitle}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section: What Can You Find? */}
        <section className="py-20 md:py-28 bg-secondary/30 border-y border-border/60 px-6">
          <div className="container max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-14 md:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Explore Categories
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-2">
                What Can You Find?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore specialized talent across leading global disciplines.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat, idx) => (
                <ScrollReveal key={idx} delay={idx * 70}>
                  <div className="p-6 sm:p-7 rounded-2xl bg-card border border-border/80 shadow-sm hover:border-primary/40 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <cat.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold font-display text-foreground">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Built for Different Needs */}
        <section className="py-24 md:py-32 px-6">
          <div className="container max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-16 md:mb-20">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Versatile Fit
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mt-2">
                Built for Different Needs
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you're building, growing, or solving.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientSegments.map((seg, idx) => (
                <ScrollReveal key={idx} delay={idx * 80}>
                  <div className="p-6 rounded-3xl bg-card border border-border/80 shadow-sm hover:shadow-lg hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                      <seg.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground mb-2">
                      {seg.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {seg.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Make Better Connections */}
        <section className="py-20 md:py-24 bg-secondary/30 border-y border-border/60 px-6">
          <div className="container max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground">
                Make Better Connections
              </h2>
              <p className="mt-4 text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Don't just find someone. Find someone who fits.
              </p>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                ProsConnect is designed to help you move beyond endless searching and toward more relevant professional connections.
              </p>
              <div className="mt-8 flex justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToWishlist()}
                  className="h-12 px-8 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  Join as a Client
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 bg-secondary/30 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <ScrollReveal className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                Join the Wishlist
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-foreground text-balance">
                Your Next Project Starts With the Right People.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Join the ProsConnect wishlist and be among the first to discover a better way to connect with professionals.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="max-w-xl mx-auto">
              <WishlistForm
                id="wishlist-form"
                defaultRole="client"
                ctaText="Join as a Client"
                headline="Join as a Client"
                description="Get priority access to vetted professional directories and exclusive matching tools upon release."
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
