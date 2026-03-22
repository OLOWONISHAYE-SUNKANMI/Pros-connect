import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Wifi, Calendar, MessageSquare, MonitorPlay, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FeaturesPage() {
  const features = [
    {
      icon: Wifi,
      title: "Low-Bandwidth Video Calls",
      description: "Smooth meetings even on unstable networks.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Easy calendar integration, reminders, and time zone support.",
    },
    {
      icon: MessageSquare,
      title: "Chat & File Sharing",
      description: "Collaborate during meetings seamlessly.",
    },
    {
      icon: MonitorPlay,
      title: "Recording & Playback",
      description: "Never miss important discussions.",
    },
    {
      icon: Sparkles,
      title: "Optional Add-ons",
      description: "AI-generated meeting summaries, webinar hosting, and integrations.",
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pt-16">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="pt-20 md:pt-32 pb-12 px-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-blob" />
          
          <div className="container relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance leading-tight">
              Everything You Need for Productive Meetings
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Our platform is built for Nigerian professionals who need reliable, low-bandwidth video calls, smart scheduling, and powerful collaboration tools.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-6 py-12 relative z-20">
          <div className="container max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, i) => (
                <div key={i} className="bg-card rounded-[2rem] p-8 border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/20 transition-all group flex flex-col h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-20 md:mt-32 px-6">
          <div className="container">
            <div className="bg-primary text-primary-foreground rounded-[2rem] p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent/30 rounded-full blur-[80px] pointer-events-none animate-blob" />
              
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 relative z-10 text-balance">
                Ready to experience these features?
              </h2>
              <Button variant="secondary" size="xl" className="h-14 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all relative z-10" asChild>
                <Link href="/pricing">
                  See Pricing Plans <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
