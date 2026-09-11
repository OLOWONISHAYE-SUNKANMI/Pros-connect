"use client";

import { useState, useEffect } from "react";
import { Sparkles, Users, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export function SocialProof() {
  const [memberCount, setMemberCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/wishlist")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.count) {
          setMemberCount(data.count);
        }
      })
      .catch(() => {
        // Fallback default
        setMemberCount(1248);
      });
  }, []);

  return (
    <section className="py-10 border-y border-border/70 bg-secondary/30 backdrop-blur-md">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {/* Main social proof counter */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex -space-x-3 items-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Member"
                className="w-11 h-11 rounded-full border-2 border-background object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Member"
                className="w-11 h-11 rounded-full border-2 border-background object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                alt="Member"
                className="w-11 h-11 rounded-full border-2 border-background object-cover shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                alt="Member"
                className="w-11 h-11 rounded-full border-2 border-background object-cover shadow-sm"
              />
              <div className="w-11 h-11 rounded-full border-2 border-background bg-primary text-primary-foreground font-bold text-xs flex items-center justify-center shadow-sm">
                +1.2k
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-base sm:text-lg font-bold text-foreground font-display">
                  {memberCount ? (
                    <>Join <span className="text-primary">{memberCount.toLocaleString()}+</span> people waiting for ProsConnect</>
                  ) : (
                    <>Join professionals & clients waiting for ProsConnect</>
                  )}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                Engineers, designers, founders, and consultants ready for a better connection experience.
              </p>
            </div>
          </div>

          {/* Quick Credibility Pillars */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10 border-t lg:border-t-0 lg:border-l border-border/70 pt-6 lg:pt-0 lg:pl-10">
            <div className="text-center sm:text-left">
              <div className="text-lg sm:text-xl font-bold text-foreground font-display">12+</div>
              <p className="text-xs text-muted-foreground font-medium">Expert Disciplines</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-lg sm:text-xl font-bold text-foreground font-display">100%</div>
              <p className="text-xs text-muted-foreground font-medium">Verified at Launch</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-lg sm:text-xl font-bold text-foreground font-display">Direct</div>
              <p className="text-xs text-muted-foreground font-medium">No Platform Bloat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
