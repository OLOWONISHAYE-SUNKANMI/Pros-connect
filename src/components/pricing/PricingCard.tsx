import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface PricingCardProps {
  name: string;
  price: string;
  description?: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
}

export function PricingCard({ name, price, description, features, popular, ctaText = "Get Started" }: PricingCardProps) {
  return (
    <div className={`relative rounded-[2rem] p-8 h-full flex flex-col transition-all duration-300 ${popular ? "bg-primary text-primary-foreground shadow-2xl scale-100 md:scale-105 z-10 border border-primary/20 hover:shadow-primary/30 hover:-translate-y-2" : "bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-border hover:-translate-y-1"}`}>
      {popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm border border-accent/20">
          Most Popular
        </div>
      )}
      
      <div className="mb-8 text-center pt-2">
        <h3 className="font-display text-2xl font-bold mb-3">{name}</h3>
        {description && <p className={`text-sm mb-6 ${popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{description}</p>}
        <div className="flex justify-center items-end gap-1">
          <span className="text-4xl md:text-5xl font-display font-bold tabular-nums">{price}</span>
        </div>
      </div>
      
      <div className={`h-px w-full mb-8 ${popular ? "bg-primary-foreground/10" : "bg-border/60"}`} />
      
      <ul className="space-y-4 flex-1 mb-10">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${popular ? "text-accent" : "text-primary"}`} />
            <span className={`text-sm md:text-base ${popular ? "text-primary-foreground/90 font-medium" : "text-foreground/80 font-medium"}`}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant={popular ? "secondary" : "outline"} 
        size="xl" 
        className={`w-full h-14 text-lg rounded-xl border ${popular ? "shadow-lg hover:shadow-xl hover:-translate-y-1 bg-background text-foreground border-transparent" : "border-border/60 hover:bg-secondary/50"}`} 
        asChild
      >
        <Link to="/signup">{ctaText}</Link>
      </Button>
    </div>
  );
}
