import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import {
  Video,
  Calendar,
  MessageSquare,
  Shield,
  Wifi,
  FileText,
  Sparkles,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  { icon: Video, title: "Crystal-Clear Video", desc: "Adaptive streaming optimized for varying bandwidth — stay connected even on 3G." },
  { icon: Calendar, title: "Smart Scheduling", desc: "Book meetings across time zones with calendar sync and automatic reminders." },
  { icon: MessageSquare, title: "In-Meeting Chat", desc: "Share messages, links, and files without leaving your call." },
  { icon: Shield, title: "Enterprise Security", desc: "End-to-end encryption and role-based access for every meeting." },
  { icon: Wifi, title: "Low-Bandwidth Mode", desc: "Built for real African internet conditions — not Silicon Valley fibre." },
  { icon: Sparkles, title: "AI Meeting Minutes", desc: "Automatic summaries, action items, and transcripts after every call." },
];

const steps = [
  { num: "01", title: "Create Your Account", desc: "Sign up in 30 seconds. No credit card required." },
  { num: "02", title: "Schedule or Start", desc: "Pick a time or jump into an instant meeting with a single click." },
  { num: "03", title: "Connect & Collaborate", desc: "Video, chat, screen share, and get AI-powered notes when you're done." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
                Built for Africa. Ready for the World.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance leading-[1.1] tracking-tight">
                Professional meetings that work on your network
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                ProsConnect delivers reliable video conferencing, smart scheduling, and AI-powered meeting notes — engineered for the bandwidth realities of Nigerian professionals.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/signup">Start for Free <ArrowRight className="ml-1 w-5 h-5" /></Link>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/login">Log In</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero visual — abstract meeting grid */}
          <ScrollReveal delay={400} className="mt-16 max-w-4xl mx-auto">
            <div className="rounded-2xl bg-primary/5 border-2 border-primary/10 p-6 md:p-10">
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {[
                  { name: "Adaeze O.", initials: "AO", bg: "bg-primary" },
                  { name: "Emeka N.", initials: "EN", bg: "bg-accent" },
                  { name: "Fatima B.", initials: "FB", bg: "bg-primary/70" },
                  { name: "Chidi A.", initials: "CA", bg: "bg-accent/80" },
                  { name: "Ngozi I.", initials: "NI", bg: "bg-primary/50" },
                  { name: "Tunde K.", initials: "TK", bg: "bg-accent/60" },
                ].map((p, i) => (
                  <div
                    key={i}
                    className={`${p.bg} rounded-xl aspect-video flex flex-col items-center justify-center text-primary-foreground transition-transform hover:scale-[1.02]`}
                  >
                    <span className="text-xl md:text-3xl font-display font-bold">{p.initials}</span>
                    <span className="text-xs md:text-sm mt-1 opacity-80">{p.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live · 6 participants
                </div>
                <span className="text-sm tabular-nums text-muted-foreground">00:42:17</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28 bg-card">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Everything you need for seamless collaboration</h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Get started in minutes, not hours</h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 120} animation={i % 2 === 0 ? "slide-left" : "slide-right"}>
                <div className="flex gap-6 items-start">
                  <span className="text-4xl font-display font-bold text-accent/30 shrink-0">{s.num}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-pretty">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="pricing" className="py-20 md:py-28 bg-card">
        <div className="container">
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Start free, scale as you grow</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Starter", price: "Free", items: ["Up to 4 participants", "40-min meetings", "Basic chat", "5 recordings/month"] },
              { name: "Professional", price: "₦4,500/mo", items: ["Up to 50 participants", "Unlimited duration", "AI meeting notes", "Calendar integration", "Unlimited recordings"], popular: true },
              { name: "Enterprise", price: "Custom", items: ["Unlimited participants", "SSO & admin controls", "Priority support", "Custom integrations", "Dedicated account manager"] },
            ].map((plan, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`rounded-xl p-6 h-full flex flex-col ${plan.popular ? "bg-primary text-primary-foreground ring-2 ring-accent shadow-xl" : "bg-background shadow-sm"}`}>
                  {plan.popular && (
                    <span className="text-xs font-semibold tracking-widest uppercase text-accent mb-2">Most Popular</span>
                  )}
                  <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                  <p className="text-2xl font-bold mt-2 mb-4 tabular-nums">{plan.price}</p>
                  <ul className="space-y-2 flex-1">
                    {plan.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-accent" : "text-primary"}`} />
                        <span className={plan.popular ? "opacity-90" : "text-muted-foreground"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="mt-6 w-full"
                    asChild
                  >
                    <Link to="/signup">{plan.price === "Custom" ? "Contact Sales" : "Get Started"}</Link>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <ScrollReveal>
            <div className="bg-primary rounded-2xl p-10 md:p-16 text-center text-primary-foreground max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">Ready to upgrade your meetings?</h2>
              <p className="mt-4 opacity-80 text-pretty max-w-lg mx-auto">
                Join thousands of Nigerian professionals who've switched to ProsConnect for reliable, intelligent virtual meetings.
              </p>
              <Button variant="hero" size="xl" className="mt-8" asChild>
                <Link to="/signup">Create Free Account <ArrowRight className="ml-1" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
