"use client";

import { useState } from "react";
import { WishlistForm } from "./WishlistForm";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import {
  ArrowRight,
  ArrowDown,
  Search,
  CheckCircle2,
  Star,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  MapPin,
  Clock,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

interface HeroProps {
  selectedRole?: "client" | "professional" | "both";
  onRoleSelect?: (role: "client" | "professional" | "both") => void;
}

// Sample mock professionals to power the interactive hero product visual
const SAMPLE_PROS = [
  {
    id: "pro-1",
    name: "Dr. Chioma Nwachukwu",
    role: "Principal Product & UX Architect",
    category: "Design",
    match: "98% Match",
    rating: 4.96,
    reviews: 42,
    location: "Lagos, NG (Remote)",
    rate: "$85/hr",
    status: "Available Now",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    skills: ["Design Systems", "Figma", "Fintech UX", "User Research"],
  },
  {
    id: "pro-2",
    name: "Adekunle Bamidele",
    role: "Senior Cloud & Distributed Systems Engineer",
    category: "Software",
    match: "Top Rated",
    rating: 5.0,
    reviews: 58,
    location: "Abuja, NG (Global)",
    rate: "$110/hr",
    status: "Active Today",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    skills: ["Next.js", "PostgreSQL", "Kafka", "AWS Architecture"],
  },
  {
    id: "pro-3",
    name: "Folake Balogun, FCA",
    role: "Fractional CFO & Corporate Strategist",
    category: "Finance",
    match: "Verified Partner",
    rating: 4.92,
    reviews: 31,
    location: "London & Lagos",
    rate: "$140/hr",
    status: "Taking Clients",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    skills: ["M&A Due Diligence", "Financial Modeling", "Fundraising", "Tax"],
  },
];

export function Hero({ selectedRole = "client", onRoleSelect }: HeroProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeProIndex, setActiveProIndex] = useState(0);
  const [connectedState, setConnectedState] = useState<string | null>(null);

  const categories = ["All", "Design", "Software", "Finance"];

  const filteredPros =
    activeCategory === "All"
      ? SAMPLE_PROS
      : SAMPLE_PROS.filter((p) => p.category === activeCategory);

  const activePro = filteredPros[activeProIndex] || filteredPros[0] || SAMPLE_PROS[0];

  const handleConnectClick = (proName: string) => {
    setConnectedState(proName);
    trackEvent("hero_cta_clicked", { action: "mock_connect", targetPro: proName });
    const formElement = document.getElementById("wishlist-signup-hero");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleScrollToWorks = () => {
    trackEvent("hero_cta_clicked", { action: "see_how_it_works" });
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToWishlist = () => {
    trackEvent("hero_cta_clicked", { action: "join_wishlist_hero" });
    const el = document.getElementById("wishlist-signup-hero");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-background">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-primary/15 rounded-full blur-[100px] pointer-events-none -z-10 animate-blob" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-blob animation-delay-2000" />

      <div className="container relative z-10">
        {/* Top badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-primary tracking-wide uppercase">
              Launching Soon • Early Access Open
            </span>
          </div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-foreground text-balance leading-[1.08] mb-6">
            Connect With the Right Professionals.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#e85d26] to-[#f47c43]">
              Get Things Done.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-normal max-w-2xl mx-auto text-pretty leading-relaxed mb-8">
            ProsConnect makes it easier to discover trusted professionals, explore their expertise, and connect with the right people for your next project, idea, or opportunity.
          </p>

          {/* Quick CTA button pair */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              onClick={handleScrollToWishlist}
              className="w-full sm:w-auto h-13 px-8 text-base md:text-lg rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 transition-all hover:scale-[1.02]"
            >
              Join the Wishlist
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={handleScrollToWorks}
              className="w-full sm:w-auto h-13 px-7 text-base rounded-xl bg-background/80 hover:bg-secondary border-border text-foreground transition-all"
            >
              See How It Works
              <ArrowDown className="w-4 h-4 ml-2 opacity-60" />
            </Button>
          </div>
        </div>

        {/* Two-column Core: Form on Left + Interactive Product Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* Wishlist Form Column */}
          <div className="lg:col-span-5 order-2 lg:order-1" id="wishlist-signup-hero">
            <div className="sticky top-24">
              <WishlistForm defaultRole={selectedRole} />
            </div>
          </div>

          {/* Product Discovery Mockup Visual */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="rounded-2xl border border-border/80 bg-card/85 backdrop-blur-2xl shadow-2xl p-4 sm:p-6 overflow-hidden relative">
              {/* Top mockup window control bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-muted-foreground ml-2 hidden sm:inline">
                    prosconnect.com/discover
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary text-[11px] font-semibold text-muted-foreground">
                  <Sparkles className="w-3 h-3 text-accent" />
                  Live Preview
                </div>
              </div>

              {/* Interactive Search Mockup */}
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <div className="w-full h-11 pl-10 pr-4 rounded-xl bg-background/90 border border-border flex items-center text-xs md:text-sm text-foreground/80 font-medium">
                    Search developers, designers, corporate counsel, consultants...
                  </div>
                </div>

                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setActiveProIndex(0);
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                        activeCategory === cat
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Main Selected Professional Spotlight Card */}
                <div className="p-4 md:p-5 rounded-xl bg-background border border-border/70 shadow-sm relative overflow-hidden transition-all duration-300">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="relative">
                        <img
                          src={activePro.avatar}
                          alt={activePro.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-primary/20 shadow-sm"
                        />
                        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-background" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-base font-bold text-foreground font-display">
                            {activePro.name}
                          </h4>
                          <span title="Verified Professional">
                            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">
                          {activePro.role}
                        </p>
                        <div className="flex items-center gap-3 mt-1 text-[11px] text-muted-foreground">
                          <span className="flex items-center gap-1 text-amber-500 font-semibold">
                            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                            {activePro.rating} ({activePro.reviews})
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {activePro.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rate & Status */}
                    <div className="sm:text-right w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50">
                      <div className="text-sm font-bold text-foreground">{activePro.rate}</div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        {activePro.status}
                      </span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border/50">
                    {activePro.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-secondary text-[11px] font-medium text-foreground/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action row */}
                  <div className="mt-4 pt-3 flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary inline-flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5" />
                      {activePro.match}
                    </span>

                    <Button
                      size="sm"
                      onClick={() => handleConnectClick(activePro.name)}
                      className="rounded-lg h-9 px-4 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                      Connect
                    </Button>
                  </div>

                  {/* Instant toast-style feedback in mockup if user clicked Connect */}
                  {connectedState === activePro.name && (
                    <div className="mt-3 p-2.5 rounded-lg bg-primary/10 border border-primary/30 text-xs text-foreground animate-reveal-up flex items-center justify-between">
                      <span className="font-medium flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Ready to connect with {activePro.name}! Sign up on the left for early access.
                      </span>
                    </div>
                  )}
                </div>

                {/* Sub-cards list preview */}
                <div className="space-y-2">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground px-1">
                    Other Recommended Professionals
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SAMPLE_PROS.filter((p) => p.id !== activePro.id).map((pro) => (
                      <div
                        key={pro.id}
                        onClick={() => {
                          const idx = filteredPros.findIndex((p) => p.id === pro.id);
                          if (idx !== -1) setActiveProIndex(idx);
                        }}
                        className="p-2.5 rounded-xl bg-background/60 hover:bg-background border border-border/60 hover:border-primary/40 transition-all cursor-pointer flex items-center gap-2.5 group"
                      >
                        <img
                          src={pro.avatar}
                          alt={pro.name}
                          className="w-9 h-9 rounded-full object-cover"
                        />
                        <div className="overflow-hidden flex-1">
                          <p className="text-xs font-bold text-foreground truncate group-hover:text-primary transition-colors">
                            {pro.name}
                          </p>
                          <p className="text-[11px] text-muted-foreground truncate">
                            {pro.role}
                          </p>
                        </div>
                        <div className="text-[11px] font-bold text-muted-foreground shrink-0">
                          ★ {pro.rating}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual connection indicator */}
                <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground border-t border-border/40">
                  <span className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    Verified Credentials
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    Direct Interaction
                  </span>
                  <span className="flex items-center gap-1.5 font-medium hidden sm:flex">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    Guaranteed Quality
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
