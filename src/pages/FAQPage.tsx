"use client";

import { useState, useMemo, useEffect } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WishlistForm } from "@/components/landing/WishlistForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackEvent } from "@/lib/analytics";
import {
  Sparkles,
  Search,
  HelpCircle,
  Briefcase,
  Users,
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: "General" | "Professionals" | "Clients" | "Wishlist" | "Trust";
  question: string;
  answer: string;
}

const allFaqs: FAQItem[] = [
  // General
  {
    id: "faq-gen-1",
    category: "General",
    question: "What is ProsConnect?",
    answer:
      "ProsConnect is a modern professional platform designed to make discovering, evaluating, and connecting with verified professionals frictionless. Rather than acting as a simple job board, ProsConnect emphasizes professional identity, specialized capabilities, and direct, context-rich relationships.",
  },
  {
    id: "faq-gen-2",
    category: "General",
    question: "When is ProsConnect launching?",
    answer:
      "We are currently in active development preparing for our staged private rollout. Early-access invitations will be distributed in batches to members on the wishlist.",
  },
  {
    id: "faq-gen-3",
    category: "General",
    question: "Is ProsConnect free to use?",
    answer:
      "Joining the ProsConnect wishlist and establishing your early profile is completely free. Early-access community members will also receive exclusive foundational perks and fee waivers at platform launch.",
  },
  {
    id: "faq-gen-4",
    category: "General",
    question: "How is ProsConnect different from conventional freelance boards?",
    answer:
      "Traditional boards are crowded with race-to-the-bottom bidding and transactional gigs. ProsConnect centers around verified professional identity, deep contextual portfolios, and building long-term collaborative relationships across industries.",
  },

  // Professionals
  {
    id: "faq-pro-1",
    category: "Professionals",
    question: "How does ProsConnect help professionals become discoverable?",
    answer:
      "ProsConnect indexes professionals by their proven capabilities, past projects, industry domain, and service offerings. When clients search for specific expertise, relevant profiles are highlighted based on qualitative fit rather than who paid for ad placement.",
  },
  {
    id: "faq-pro-2",
    category: "Professionals",
    question: "Can I use ProsConnect if I already work full-time or freelance?",
    answer:
      "Yes. ProsConnect is designed for consultants, agency owners, independent specialists, and full-time professionals looking to expand their network, discover advisory roles, or explore future collaborations at their own pace.",
  },
  {
    id: "faq-pro-3",
    category: "Professionals",
    question: "What industries and disciplines are supported?",
    answer:
      "ProsConnect supports Technology (developers, AI, cybersecurity, data), Creative (UI/UX, photographers, writers), Business (consultants, strategists), Marketing (brand, growth, SEO), Finance & Legal, and Construction & Engineering.",
  },

  // Clients
  {
    id: "faq-client-1",
    category: "Clients",
    question: "How do clients find the right professional?",
    answer:
      "You start with your specific project goal or capability requirement. ProsConnect provides guided filters by industry, skill set, and past outcomes so you review professionals who genuinely align with your scope.",
  },
  {
    id: "faq-client-2",
    category: "Clients",
    question: "Can organizations hire entire teams or just individuals?",
    answer:
      "Both. ProsConnect accommodates independent practitioners, cross-functional squads, and specialized boutique agencies depending on your organizational needs.",
  },
  {
    id: "faq-client-3",
    category: "Clients",
    question: "How do I communicate with professionals on the platform?",
    answer:
      "Once you identify a candidate whose background aligns with your project, you can start a direct conversation on the platform to discuss scope, alignment, and next steps.",
  },

  // Wishlist
  {
    id: "faq-wish-1",
    category: "Wishlist",
    question: "What are the benefits of joining the wishlist now?",
    answer:
      "Wishlist members receive priority queue access, founding-member badges, access to closed beta features, direct updates from the founders, and earliest access to incoming client inquiries and professional talent.",
  },
  {
    id: "faq-wish-2",
    category: "Wishlist",
    question: "Will I receive confirmation after joining?",
    answer:
      "Yes! You will receive a personalized welcome email confirming your spot on the wishlist along with your assigned queue position.",
  },

  // Trust & Security
  {
    id: "faq-trust-1",
    category: "Trust",
    question: "How does ProsConnect handle data privacy and security?",
    answer:
      "We strictly adhere to privacy laws and never sell or lease your personal information. All contact information and communication remain protected with enterprise-grade encryption.",
  },
  {
    id: "faq-trust-2",
    category: "Trust",
    question: "How are professional profiles verified?",
    answer:
      "ProsConnect combines identity verification, linked portfolio verifications, and peer references to ensure high community trust and authenticity.",
  },
];

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [quickEmail, setQuickEmail] = useState("");
  const [prefilledEmail, setPrefilledEmail] = useState("");

  useEffect(() => {
    trackEvent("landing_page_view" as any, {
      path: "/faq",
      title: "FAQs — ProsConnect",
    });
  }, []);

  const categories = [
    { label: "All", value: "All" },
    { label: "General", value: "General" },
    { label: "For Professionals", value: "Professionals" },
    { label: "For Clients", value: "Clients" },
    { label: "Early Access", value: "Wishlist" },
    { label: "Trust & Privacy", value: "Trust" },
  ];

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCat =
        selectedCategory === "All" || faq.category === selectedCategory;
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [search, selectedCategory]);

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
      source: "faq_hero",
      hasEmail: Boolean(quickEmail.trim()),
    });
    scrollToWishlist(quickEmail.trim());
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar onJoinWishlistClick={scrollToWishlist} />

      <main className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative px-6 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/20">
                <HelpCircle className="w-3.5 h-3.5" />
                Help & Knowledge Center
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-foreground text-balance leading-[1.1]">
                Frequently Asked <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">
                  Questions.
                </span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about ProsConnect, our vision, and what to expect as an early-access member.
              </p>

              {/* Real-time Search Input */}
              <div className="mt-8 max-w-lg mx-auto relative">
                <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search questions (e.g., free, verification, launch)..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-13 pl-12 pr-4 bg-card border-border/80 text-foreground placeholder:text-muted-foreground rounded-2xl shadow-md text-base focus-visible:ring-primary"
                />
              </div>

              {/* Category Pills */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => {
                      setSelectedCategory(cat.value);
                      trackEvent("faq_category_filter" as any, { category: cat.value });
                    }}
                    className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat.value
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                        : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Quick Capture CTA */}
              <div className="mt-8 max-w-lg mx-auto">
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
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section className="pb-24 md:pb-32 px-6">
          <div className="container max-w-3xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 bg-card rounded-3xl border border-border/70 p-8">
                <p className="text-lg font-semibold text-foreground">
                  No questions found matching "{search}"
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try adjusting your search query or clear the filter.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 text-xs font-semibold text-primary underline underline-offset-4"
                >
                  Reset search & filters
                </button>
              </div>
            ) : (
              <div className="rounded-3xl bg-card border border-border/80 shadow-lg p-6 sm:p-8">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? "Question" : "Questions"}
                  </span>
                  <span className="text-xs font-medium text-primary">
                    {selectedCategory === "All" ? "All Categories" : selectedCategory}
                  </span>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFaqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border border-border/60 rounded-2xl px-5 py-1 bg-background/50 hover:bg-background transition-colors data-[state=open]:border-primary/40 data-[state=open]:shadow-sm"
                    >
                      <AccordionTrigger className="text-left font-display text-base sm:text-lg font-bold text-foreground py-4 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5 pt-1">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 md:py-32 bg-secondary/30 border-t border-border/60 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="container max-w-4xl mx-auto text-center relative z-10">
            <ScrollReveal className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5" />
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-foreground text-balance">
                Have More Questions or Ready to Join?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Join the ProsConnect wishlist and be among the first to experience a better way to discover and connect with professionals.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="max-w-xl mx-auto">
              <WishlistForm
                id="wishlist-form"
                defaultRole="both"
                ctaText="Join the Wishlist"
                headline="Join the ProsConnect Wishlist"
                description="Lock in your early-access invitation and get direct access to our founding team's progress dispatches."
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
