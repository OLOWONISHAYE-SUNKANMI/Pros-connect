import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Globe, Shield, Lightbulb, Target, Rocket } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Reliability",
      description: "Consistent performance you can count on, no matter the network."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Designed to be inclusive and available to every professional."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade protection for your most important conversations."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly evolving to solve real-world connectivity challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pt-16">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="pt-24 md:pt-32 pb-12 px-6 text-center relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-blob" />
          
          <div className="container relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 text-balance leading-tight">
              Connecting Nigerian Professionals, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent pb-2">One Meeting at a Time</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              We believe collaboration should be simple, reliable, and affordable. Our mission is to empower businesses, freelancers, and educators across Nigeria with a professional virtual meeting solution built for local realities.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="px-6 py-12 md:py-20 relative z-20">
          <div className="container max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-card rounded-[2rem] p-8 md:p-12 border border-border/50 shadow-sm relative overflow-hidden group hover:border-primary/20 transition-colors">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-colors" />
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <Rocket className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To make virtual collaboration seamless and accessible for every professional in Nigeria.
                </p>
              </div>

              <div className="bg-card rounded-[2rem] p-8 md:p-12 border border-border/50 shadow-sm relative overflow-hidden group hover:border-accent/20 transition-colors">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-[40px] group-hover:bg-accent/10 transition-colors" />
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide a fast, reliable, and data-efficient platform that supports productivity and growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-6 py-12 md:py-20 relative z-20 bg-background">
          <div className="container max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Our Core Values</h2>
              <p className="text-lg md:text-xl text-muted-foreground">The principles that drive everything we build.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, i) => (
                <div key={i} className="bg-primary/5 border border-primary/10 rounded-3xl p-8 hover:bg-primary/10 hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center group shadow-sm hover:shadow-md">
                  <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-border/50">
                    <val.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{val.title}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed text-balance">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
