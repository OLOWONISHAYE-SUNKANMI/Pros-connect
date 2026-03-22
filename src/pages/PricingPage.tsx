import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingCard } from "@/components/pricing/PricingCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function PricingPage() {
  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      features: [
        "Up to 50-minute meetings",
        "5 participants per meeting",
        "Chat & file sharing",
        "Basic calendar integration"
      ],
      ctaText: "Start Free"
    },
    {
      name: "Pro Plan",
      price: "₦4,500/mo",
      popular: true,
      features: [
        "Unlimited meeting duration",
        "Up to 50 participants per meeting",
        "Recording & playback",
        "Advanced scheduling & reminders"
      ],
      ctaText: "Start Free"
    },
    {
      name: "Business Plan",
      price: "Custom",
      features: [
        "Team management & analytics",
        "Webinar & event hosting",
        "Priority support",
        "Integration with Google Calendar & Outlook"
      ],
      ctaText: "Start Free"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col pt-16">
      <Navbar />
      
      <main className="flex-1 pb-24">
        {/* Header Section */}
        <section className="pt-20 md:pt-32 pb-12 px-6 text-center relative overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-blob" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-2000" />
          
          <div className="container relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-balance leading-tight">
              Flexible Plans for Every Professional
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Whether you’re an individual freelancer or a growing business, we have a plan that fits your needs. Scale as your team grows.
            </p>
          </div>
        </section>

        {/* Pricing Cards Section */}
        <section className="px-6 py-12 relative z-20">
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-center mt-12 md:mt-8">
              {plans.map((plan, i) => (
                <PricingCard key={i} {...plan} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-20 md:mt-32 px-6">
          <div className="container">
            <div className="bg-primary/5 border border-primary/10 rounded-[2rem] p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              <h2 className="text-3xl font-display font-bold mb-8">Ready to upgrade your meetings?</h2>
              <Button size="xl" className="h-14 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" asChild>
                <Link to="/signup">
                  Start Free <ArrowRight className="ml-2 w-5 h-5" />
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
