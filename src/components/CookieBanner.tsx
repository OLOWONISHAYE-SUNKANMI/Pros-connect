"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiePreference = localStorage.getItem("cookie-preference");
    if (!cookiePreference) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-preference", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-preference", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
      <div className="max-w-5xl mx-auto bg-card/90 backdrop-blur-xl border border-border shadow-2xl rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="flex items-start gap-4 relative z-10 w-full md:w-auto">
          <div className="bg-primary/10 p-3 rounded-2xl hidden sm:flex shrink-0 border border-primary/20">
            <Cookie className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-semibold text-lg text-foreground mb-1.5 flex items-center gap-2">
              <Cookie className="w-5 h-5 text-primary sm:hidden" />
              Cookies & Privacy Policy
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and optimize our platform for varying network conditions. 
              <Link href="/docs" className="text-primary hover:text-accent font-medium ml-1.5">
                Learn more
              </Link>
            </p>
          </div>
        </div>
        
        <div className="flex flex-row w-full md:w-auto gap-3 shrink-0 relative z-10">
          <Button 
            variant="outline" 
            className="flex-1 md:flex-none rounded-xl border-border/80 hover:bg-secondary transition-colors" 
            onClick={handleDecline}
          >
            Decline
          </Button>
          <Button 
            onClick={handleAccept} 
            className="flex-1 md:flex-none rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
          >
            Accept Cookies
          </Button>
        </div>
      </div>
    </div>
  );
}
