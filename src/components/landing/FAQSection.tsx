"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackEvent } from "@/lib/analytics";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      id: "faq-1",
      question: "What is ProsConnect?",
      answer:
        "ProsConnect is a platform designed to help people discover, evaluate, and connect with professionals based on their expertise and needs.",
    },
    {
      id: "faq-2",
      question: "Who is ProsConnect for?",
      answer:
        "ProsConnect is designed for both people looking for professional expertise and professionals looking to build connections and discover opportunities.",
    },
    {
      id: "faq-3",
      question: "Is ProsConnect available yet?",
      answer:
        "ProsConnect is currently preparing for launch. Join the wishlist to receive updates and early-access information.",
    },
    {
      id: "faq-4",
      question: "Is joining the wishlist free?",
      answer: "Yes. Joining the ProsConnect wishlist is free.",
    },
    {
      id: "faq-5",
      question: "How will I know when ProsConnect launches?",
      answer:
        "You'll receive launch and early-access updates using the email address you provide when joining the wishlist.",
    },
  ];

  const handleValueChange = (val: string) => {
    if (val) {
      const match = faqs.find((f) => f.id === val);
      if (match) {
        trackEvent("faq_opened", { question: match.question });
      }
    }
  };

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="faq">
      <div className="container relative z-10 max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4 border border-primary/20">
            <HelpCircle className="w-3.5 h-3.5" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-foreground text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto text-pretty">
            Everything you need to know about ProsConnect and how early access works.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-3xl bg-card border border-border/80 shadow-lg p-6 sm:p-8">
            <Accordion type="single" collapsible onValueChange={handleValueChange} className="space-y-4">
              {faqs.map((faq) => (
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
        </ScrollReveal>
      </div>
    </section>
  );
}
