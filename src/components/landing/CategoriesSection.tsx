"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Code,
  Palette,
  Megaphone,
  Briefcase,
  Cpu,
  Coins,
  Scale,
  Building2,
  Hammer,
  Building,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";

export function CategoriesSection() {
  const categories = [
    {
      id: "software",
      name: "Software Development",
      icon: Code,
      count: "340+ Pros",
      skills: ["Fullstack", "Mobile (React Native/Flutter)", "APIs", "DevOps"],
    },
    {
      id: "design",
      name: "Design",
      icon: Palette,
      count: "210+ Pros",
      skills: ["Product Design", "UI/UX", "Brand Systems", "Design Systems"],
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: Megaphone,
      count: "185+ Pros",
      skills: ["Growth Marketing", "SEO", "Performance Ads", "Content Strategy"],
    },
    {
      id: "consulting",
      name: "Consulting",
      icon: Briefcase,
      count: "140+ Pros",
      skills: ["Management Consulting", "Operations", "Market Entry", "Strategy"],
    },
    {
      id: "engineering",
      name: "Engineering",
      icon: Cpu,
      count: "120+ Pros",
      skills: ["Electrical", "Mechanical", "Systems Engineering", "IoT"],
    },
    {
      id: "finance",
      name: "Finance",
      icon: Coins,
      count: "165+ Pros",
      skills: ["Fractional CFO", "Financial Modeling", "Tax", "Valuation"],
    },
    {
      id: "legal",
      name: "Legal",
      icon: Scale,
      count: "95+ Pros",
      skills: ["Corporate Law", "IP & Patents", "Contract Review", "Regulatory"],
    },
    {
      id: "architecture",
      name: "Architecture",
      icon: Building2,
      count: "80+ Pros",
      skills: ["Commercial Planning", "3D Rendering", "Interior Design", "BIM"],
    },
    {
      id: "construction",
      name: "Construction",
      icon: Hammer,
      count: "110+ Pros",
      skills: ["Project Management", "Site Inspection", "Quantity Surveying"],
    },
    {
      id: "business-services",
      name: "Business Services",
      icon: Building,
      count: "190+ Pros",
      skills: ["HR & Recruiting", "Executive Assistance", "Virtual Operations"],
    },
    {
      id: "creative-services",
      name: "Creative Services",
      icon: Sparkles,
      count: "155+ Pros",
      skills: ["Copywriting", "Video Production", "Animation", "Voiceover"],
    },
    {
      id: "technology",
      name: "Technology",
      icon: Layers,
      count: "230+ Pros",
      skills: ["AI / Machine Learning", "Data Science", "Cybersecurity", "Cloud"],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryWishlist = () => {
    const el = document.getElementById("wishlist-signup-hero") || document.getElementById("wishlist-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            Broad Disciplines
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground text-balance">
            Explore Specialized Categories
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
            From technical engineering and legal counsel to product design and finance, ProsConnect gathers top-tier practitioners across key sectors.
          </p>
        </ScrollReveal>

        {/* 12 Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-10">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory.id === cat.id;

            return (
              <ScrollReveal
                key={cat.id}
                delay={idx * 30}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer text-left flex flex-col justify-between ${
                  isSelected
                    ? "bg-card border-primary/60 shadow-lg shadow-primary/10 ring-2 ring-primary/20"
                    : "bg-card/60 hover:bg-card border-border/70 hover:border-border hover:shadow-md"
                }`}
              >
                <div onClick={() => setSelectedCategory(cat)}>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold text-muted-foreground">
                      {cat.count}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-foreground font-display mb-1">
                    {cat.name}
                  </h3>

                  <p className="text-[11px] text-muted-foreground line-clamp-1">
                    {cat.skills.slice(0, 2).join(", ")}...
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Dynamic Category Preview Drawer/Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-secondary/60 border border-border/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shrink-0 shadow-md">
              <selectedCategory.icon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <h4 className="text-lg sm:text-xl font-bold font-display text-foreground">
                  {selectedCategory.name} on ProsConnect
                </h4>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">
                  {selectedCategory.count}
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 mt-2">
                <span className="text-xs text-muted-foreground mr-1">Specialties:</span>
                {selectedCategory.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-background border border-border text-foreground/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCategoryWishlist}
            className="w-full md:w-auto px-6 py-3 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
          >
            Join Wishlist for {selectedCategory.name}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
