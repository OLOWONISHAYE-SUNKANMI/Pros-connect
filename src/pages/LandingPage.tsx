import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
// import Spline from '@splinetool/react-spline';
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import {
  Video,
  MonitorPlay,
  Calendar,
  MessageSquare,
  Shield,
  Wifi,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Check,
  X,
  XCircle,
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
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />

      {/* Hero Section with Spline */}
      <section className="relative min-h-[100svh] flex flex-col justify-center">
        <InteractiveBackground />

        {/* Hero Content */}
        <div className="container relative z-10 flex-1 flex flex-col justify-center mt-20 md:mt-0">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/40 border border-border/50 mb-8 backdrop-blur-xl shadow-sm hover:bg-background/60 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-foreground/90">
                  Built for Africa. Ready for the World.
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-[1.05] tracking-tight drop-shadow-sm">
                Professional meetings that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-accent relative inline-block">
                  work on your network
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto font-medium leading-relaxed">
                ProsConnect delivers reliable video conferencing, smart scheduling, and AI-powered meeting notes — engineered for the bandwidth realities of Nigerian professionals.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="xl" asChild className="relative group overflow-hidden w-full sm:w-auto text-lg h-14 px-8 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                  <Link to="/signup">
                    <span className="relative z-10 flex items-center font-semibold">Start for Free <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild className="w-full sm:w-auto text-lg h-14 px-8 rounded-xl bg-background/50 backdrop-blur-md border-border/60 hover:bg-background/80 hover:scale-[1.02] transition-all duration-300">
                  <Link to="/login" className="font-semibold text-foreground/80 hover:text-foreground">Log In</Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Social Proof/Avatars */}
            <ScrollReveal delay={400}>
              <div className="mt-12 flex flex-col items-center justify-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-secondary relative z-${10 - i} shadow-sm`}>
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`User ${i}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shadow-sm z-0">
                    +2k
                  </div>
                </div>
                <p className="text-sm font-medium text-muted-foreground/80">Trusted by over 2,000 professionals</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Rest of the Content */}
      <div className="relative z-20 bg-background">
        {/* Solution/Problem Section */}
        <section id="solution" className="py-20 md:py-28 border-t border-border overflow-hidden">
          <div className="container relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none animate-blob" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-4000" />
            
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-24 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-xs tracking-widest uppercase mb-6 border border-accent/20">
                Built for the Realities of Work in Nigeria
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance font-display">
                The Problem & The Solution
              </h2>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto relative z-10">
              {/* Problem Column */}
              <ScrollReveal animation="slide-left" delay={100} className="h-full">
                <div className="bg-card border border-destructive/20 rounded-[2rem] p-6 sm:p-8 md:p-12 h-full shadow-lg relative overflow-hidden group hover:border-destructive/40 transition-colors">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/60 to-transparent" />
                  <div className="w-14 h-14 bg-destructive/10 rounded-2xl flex items-center justify-center mb-8">
                    <XCircle className="w-7 h-7 text-destructive" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Virtual Meetings Shouldn’t Be This Difficult
                  </h3>
                  <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                    Professionals across Nigeria face daily challenges when trying to collaborate online. Most existing tools are not built for local realities, leading to frustrating and inefficient meetings.
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Unstable internet connections cause dropped calls and poor video quality",
                      "High data costs make long meetings expensive and unsustainable",
                      "Foreign tools are not optimized for local bandwidth conditions",
                      "Frequent disruptions reduce productivity and waste valuable time",
                      "Complex setup and onboarding slow down teams and clients"
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="mt-1 bg-destructive/10 rounded-full p-1 shrink-0">
                          <X className="w-4 h-4 text-destructive" />
                        </div>
                        <span className="text-foreground/80 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Solution Column */}
              <ScrollReveal animation="slide-right" delay={200} className="h-full">
                <div className="bg-primary text-primary-foreground border border-primary-foreground/10 rounded-[2rem] p-6 sm:p-8 md:p-12 h-full shadow-2xl shadow-primary/20 relative overflow-hidden group flex flex-col">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -mr-20 -mt-20 transition-transform group-hover:scale-110 duration-700 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-background/10 rounded-full blur-[80px] -ml-20 -mb-20 transition-transform group-hover:scale-110 duration-700 pointer-events-none" />
                  
                  <div className="relative z-10 flex-1">
                    <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-accent/20">
                      <CheckCircle2 className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                      A Smarter Way to Meet and Collaborate
                    </h3>
                    <p className="text-primary-foreground/80 mb-10 text-lg leading-relaxed">
                      Our platform is designed specifically for professionals in Nigeria—delivering reliable, fast, and seamless virtual meetings, even on limited bandwidth.
                    </p>
                    <ul className="space-y-5">
                      {[
                        "Low-bandwidth optimized video calls for smooth communication",
                        "Data-efficient streaming to reduce internet costs",
                        "Fast connection and reconnection handling for unstable networks",
                        "Simple, intuitive interface to start meetings instantly",
                        "Built for local professionals, teams, and growing businesses"
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <div className="mt-1 bg-accent/20 rounded-full p-1 shrink-0">
                            <Check className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-primary-foreground leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Closing Line / Bridge CTA */}
            <ScrollReveal delay={300} className="mt-20 md:mt-28 text-center max-w-3xl mx-auto relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-10 text-balance leading-tight">
                Spend less time troubleshooting meetings—and more time getting work done.
              </h3>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button size="xl" className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300" asChild>
                  <Link to="/signup">
                    Start Your First Meeting <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl border-border hover:bg-secondary/50 transition-colors" asChild>
                  <Link to="/signup">Try It Free</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 md:py-28 bg-card border-t border-border">
          <div className="container">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6 font-display">Everything You Need for Seamless Virtual Meetings</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Built to help professionals in Nigeria connect, collaborate, and stay productive—no matter the network conditions.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <ScrollReveal delay={100} className="h-full">
                <div className="bg-background rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-md hover:border-border transition-all h-full flex flex-col group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Wifi className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Low-Bandwidth Video Calls</h3>
                  <p className="font-semibold text-primary mb-3">Stay connected, even on weak networks</p>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Experience smooth video and audio calls optimized for low internet speeds. Our platform automatically adjusts quality to keep your meetings running without interruptions.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {["Adaptive video quality", "Audio-first fallback mode", "Fast reconnection on network drops"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-foreground/80">
                        <Check className="w-5 h-5 shrink-0 text-accent" />
                        <span className="mt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Feature 2 */}
              <ScrollReveal delay={200} className="h-full">
                <div className="bg-background rounded-3xl p-6 sm:p-8 border border-border/50 shadow-sm hover:shadow-md hover:border-border transition-all h-full flex flex-col group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Smart Scheduling</h3>
                  <p className="font-semibold text-primary mb-3">Plan meetings without the back-and-forth</p>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Schedule meetings in seconds with built-in calendar tools and automated reminders, so everyone shows up on time.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {["Easy meeting creation", "Time zone awareness", "Email and push reminders"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-foreground/80">
                        <Check className="w-5 h-5 shrink-0 text-accent" />
                        <span className="mt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Feature 3 */}
              <ScrollReveal delay={100} className="h-full">
                <div className="bg-background rounded-3xl p-6 sm:p-8 border border-border/50 shadow-sm hover:shadow-md hover:border-border transition-all h-full flex flex-col group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Chat & File Sharing</h3>
                  <p className="font-semibold text-primary mb-3">Collaborate in real time</p>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Keep conversations and documents in one place. Share files, send messages, and collaborate seamlessly during meetings.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {["In-meeting chat", "File upload and sharing", "Persistent conversation history"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-foreground/80">
                        <Check className="w-5 h-5 shrink-0 text-accent" />
                        <span className="mt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Feature 4 */}
              <ScrollReveal delay={200} className="h-full">
                <div className="bg-background rounded-3xl p-6 sm:p-8 border border-border/50 shadow-sm hover:shadow-md hover:border-border transition-all h-full flex flex-col group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MonitorPlay className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 text-foreground">Recording & Playback</h3>
                  <p className="font-semibold text-primary mb-3">Never miss important details</p>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    Record your meetings and access them anytime. Perfect for teams, training sessions, and important discussions.
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {["One-click recording", "Secure cloud storage", "Easy playback and sharing"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-foreground/80">
                        <Check className="w-5 h-5 shrink-0 text-accent" />
                        <span className="mt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={300} className="mt-16 text-center relative z-10 w-full flex justify-center">
              <div className="inline-flex items-center justify-center p-4 px-6 md:px-8 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-md shadow-sm">
                <p className="text-lg md:text-xl font-medium text-foreground/90 text-center">
                  Run better meetings with tools designed for speed, simplicity, and reliability.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="py-20 md:py-28 border-t border-border bg-background">
          <div className="container relative">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
              <h2 className="text-3xl md:text-5xl font-bold text-balance mb-6 font-display">Get Started in Minutes</h2>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                No complicated setup. No technical barriers. Just simple, seamless meetings.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <ScrollReveal delay={100} className="h-full">
                <div className="bg-card rounded-3xl p-8 border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <span className="font-display text-9xl font-bold leading-none">1</span>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
                    <span className="font-display text-xl font-bold text-primary">01</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 relative z-10">Create Your Account</h3>
                  <p className="font-semibold text-primary mb-4 relative z-10">Sign up in seconds and get started</p>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed relative z-10 flex-1">
                    Create your account with just your email. Set up your profile and you’re ready to host or join meetings immediately.
                  </p>
                  <ul className="space-y-3 relative z-10">
                    {["Quick and secure sign-up", "No technical setup required", "Ready to use instantly"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-foreground/80">
                        <Check className="w-5 h-5 shrink-0 text-accent" />
                        <span className="mt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal delay={200} className="h-full">
                <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <span className="font-display text-8xl md:text-9xl font-bold leading-none">2</span>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
                    <span className="font-display text-xl font-bold text-primary">02</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 relative z-10">Schedule Your Meeting</h3>
                  <p className="font-semibold text-primary mb-4 relative z-10">Plan meetings with ease</p>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed relative z-10 flex-1">
                    Create a meeting, set the time, and invite participants. Everyone gets notified so nothing is missed.
                  </p>
                  <ul className="space-y-3 relative z-10">
                    {["Simple scheduling interface", "Invite via link or email", "Automated reminders"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-foreground/80">
                        <Check className="w-5 h-5 shrink-0 text-accent" />
                        <span className="mt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal delay={300} className="h-full">
                <div className="bg-card rounded-3xl p-6 sm:p-8 border border-border hover:border-primary/30 shadow-sm hover:shadow-lg transition-all h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <span className="font-display text-8xl md:text-9xl font-bold leading-none">3</span>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
                    <span className="font-display text-xl font-bold text-primary">03</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2 relative z-10">Join Instantly</h3>
                  <p className="font-semibold text-primary mb-4 relative z-10">Start or join meetings with one click</p>
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed relative z-10 flex-1">
                    No downloads or delays. Join meetings directly from your browser and start collaborating right away.
                  </p>
                  <ul className="space-y-3 relative z-10">
                    {["One-click access", "No installation required", "Optimized for fast connection"].map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium text-foreground/80">
                        <Check className="w-5 h-5 shrink-0 text-accent" />
                        <span className="mt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Closing Line / CTA */}
            <ScrollReveal delay={400} className="mt-16 text-center">
              <div className="inline-flex flex-col items-center justify-center p-6 sm:p-8 lg:px-12 rounded-3xl bg-primary text-primary-foreground shadow-2xl relative overflow-hidden max-w-4xl mx-auto w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-8">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-balance text-left md:max-w-md">
                    From sign-up to your first meeting in under 2 minutes.
                  </h3>
                  <Button variant="secondary" size="xl" className="shrink-0 w-full sm:w-auto h-14 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" asChild>
                    <Link to="/signup">
                      Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing teaser */}
        <section id="pricing" className="py-20 md:py-28 bg-card border-t border-border">
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
                  <div className={`rounded-xl p-6 h-full flex flex-col ${plan.popular ? "bg-primary text-primary-foreground ring-2 ring-accent shadow-xl" : "bg-background shadow-sm border border-border"}`}>
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

        {/* Bottom CTA */}
        <section className="py-24 md:py-32 border-t border-border relative overflow-hidden">
          {/* Ambient glow behind the CTA box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-primary/20 blur-[120px] pointer-events-none dark:mix-blend-screen animate-blob" />
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-accent/20 blur-[120px] pointer-events-none dark:mix-blend-screen animate-blob animation-delay-2000" />

          <div className="container relative z-10">
            <ScrollReveal>
              <div className="bg-card rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto shadow-2xl border border-border/50 overflow-hidden relative group">
                {/* Inner glowing effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 opacity-80" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/30 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 group-hover:bg-primary/30 transition-colors duration-500" />

                <div className="relative z-10">
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-balance mb-6">Ready to upgrade your meetings?</h2>
                  <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-xl mx-auto mb-10 leading-relaxed font-medium">
                    Join thousands of Nigerian professionals who've switched to ProsConnect for reliable, intelligent virtual meetings.
                  </p>
                  <Button size="xl" className="h-14 px-8 text-lg rounded-xl shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1" asChild>
                    <Link to="/signup">
                      Create Free Account <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
