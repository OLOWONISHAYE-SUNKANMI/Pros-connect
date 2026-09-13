"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackEvent } from "@/lib/analytics";
import { toast } from "sonner";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Share2,
  Copy,
  Check,
  Send,
  Loader2,
  UserCheck,
  Briefcase,
  Layers,
} from "lucide-react";

interface WishlistFormProps {
  id?: string;
  defaultRole?: "client" | "professional" | "both";
  className?: string;
  compact?: boolean;
  onSuccess?: () => void;
  prefilledEmail?: string;
  ctaText?: string;
  headline?: string;
  description?: string;
}

export function WishlistForm({
  id = "wishlist-form",
  defaultRole = "client",
  className = "",
  compact = false,
  onSuccess,
  prefilledEmail = "",
  ctaText = "Join the Wishlist",
  headline,
  description,
}: WishlistFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(prefilledEmail);
  const [role, setRole] = useState<"client" | "professional" | "both">(defaultRole);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [queueCount, setQueueCount] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Sync role and prefilled email if changed
  useEffect(() => {
    if (defaultRole) {
      setRole(defaultRole);
    }
  }, [defaultRole]);

  useEffect(() => {
    if (prefilledEmail) {
      setEmail(prefilledEmail);
    }
  }, [prefilledEmail]);

  const handleFocus = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent("wishlist_form_started", { role });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    trackEvent("wishlist_form_submitted", { role, emailDomain: email.split("@")[1] });

    try {
      const res = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          role,
          source: "landing_form",
        }),
      });

      const data = await res.json();

      if (res.status === 409 || data.code === "ALREADY_REGISTERED") {
        toast.info("You're already registered!", {
          description: "We already have your email on our wishlist. We'll be in touch soon!",
        });
        setSubmitted(true);
        if (data.count) setQueueCount(data.count);
        trackEvent("wishlist_signup_failed", { reason: "ALREADY_REGISTERED", role });
        return;
      }

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to join wishlist");
      }

      setSubmitted(true);
      setQueueCount(data.count || 1248);
      trackEvent("wishlist_signup_success", { role });
      toast.success("Welcome to ProsConnect! 🎉", {
        description: "You are officially on the early-access wishlist.",
      });

      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "Could not complete registration. Please try again.");
      trackEvent("wishlist_signup_failed", { reason: err.message, role });
    } finally {
      setLoading(false);
    }
  };

  const shareText = encodeURIComponent(
    "I just joined the wishlist for ProsConnect — a smarter way to find and connect with trusted professionals. Check it out!"
  );
  const shareUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "https://prosconnect.com";

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      trackEvent("social_share_clicked", { platform: "copy_link" });
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (submitted) {
    return (
      <div
        id={id}
        className={`p-6 md:p-8 rounded-2xl bg-card border border-primary/20 shadow-xl backdrop-blur-xl animate-fade-in text-center ${className}`}
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 animate-reveal-up" />
        </div>

        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-primary/10 text-primary mb-2">
          Wishlist Confirmed
        </span>

        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-display mb-2">
          You're on the list! 🎉
        </h3>

        <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto leading-relaxed mb-4">
          Thanks for joining the ProsConnect wishlist. We'll keep you updated as we get closer to launch.
        </p>

        {queueCount && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/80 border border-border mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs md:text-sm font-medium text-foreground">
              You are member <strong className="text-primary font-bold">#{queueCount.toLocaleString()}</strong> in line for early access
            </span>
          </div>
        )}

        <div className="border-t border-border pt-6 mt-2">
          <p className="text-xs md:text-sm font-medium text-muted-foreground mb-4">
            Know someone who should be on ProsConnect? Share it with them:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("social_share_clicked", { platform: "whatsapp" })}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              WhatsApp
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("social_share_clicked", { platform: "linkedin" })}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0A66C2] text-white text-xs font-semibold hover:bg-[#084e96] transition-colors shadow-sm"
            >
              <Share2 className="w-3.5 h-3.5" />
              LinkedIn
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("social_share_clicked", { platform: "x" })}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 dark:border dark:border-neutral-700 transition-colors shadow-sm"
            >
              <span className="font-bold">𝕏</span>
              Share on X
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-secondary text-foreground text-xs font-semibold hover:bg-secondary/80 border border-border transition-colors shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setName("");
            setEmail("");
          }}
          className="mt-6 text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
        >
          Register another email or colleague
        </button>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`p-6 md:p-8 rounded-2xl bg-card border border-border/80 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Decorative subtle ambient glow */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        {!compact && (
          <div className="mb-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-accent font-semibold text-xs uppercase tracking-wider mb-2 border border-accent/20">
              <Sparkles className="w-3 h-3" />
              Be First In Line
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-display text-foreground tracking-tight">
              {headline || "Join the ProsConnect Wishlist"}
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm mt-1 leading-relaxed">
              {description ||
                "ProsConnect is launching soon. Join the wishlist to get early access, launch updates, and exclusive platform benefits."}
            </p>
          </div>
        )}

        {/* Role Selector Tabs */}
        <div className="mb-5 text-left">
          <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            I am joining as a:
          </label>
          <div className="grid grid-cols-3 gap-1.5 p-1 bg-secondary/80 rounded-xl border border-border">
            <button
              type="button"
              onClick={() => {
                setRole("client");
                trackEvent("client_cta_clicked", { source: "form_role_toggle" });
              }}
              className={`flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold rounded-lg transition-all ${
                role === "client"
                  ? "bg-background text-primary shadow-sm border border-border font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              Client
            </button>

            <button
              type="button"
              onClick={() => {
                setRole("professional");
                trackEvent("professional_cta_clicked", { source: "form_role_toggle" });
              }}
              className={`flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold rounded-lg transition-all ${
                role === "professional"
                  ? "bg-background text-primary shadow-sm border border-border font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              Professional
            </button>

            <button
              type="button"
              onClick={() => setRole("both")}
              className={`flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold rounded-lg transition-all ${
                role === "both"
                  ? "bg-background text-primary shadow-sm border border-border font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Both
            </button>
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-3.5 text-left">
          <div>
            <label htmlFor={`${id}-name`} className="block text-xs font-semibold text-foreground/80 mb-1.5">
              Full Name <span className="text-destructive">*</span>
            </label>
            <Input
              id={`${id}-name`}
              type="text"
              placeholder="e.g. Alex Morgan"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={handleFocus}
              required
              className="h-11 bg-background/90 border-border text-foreground placeholder:text-muted-foreground/60 rounded-xl focus-visible:ring-primary shadow-sm text-sm"
            />
          </div>

          <div>
            <label htmlFor={`${id}-email`} className="block text-xs font-semibold text-foreground/80 mb-1.5">
              Email Address <span className="text-destructive">*</span>
            </label>
            <Input
              id={`${id}-email`}
              type="email"
              placeholder="alex@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleFocus}
              required
              className="h-11 bg-background/90 border-border text-foreground placeholder:text-muted-foreground/60 rounded-xl focus-visible:ring-primary shadow-sm text-sm"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 mt-2 rounded-xl text-sm md:text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-200 group"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Joining Wishlist...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </Button>

          <p className="text-[11px] text-center text-muted-foreground/80 pt-1">
            🔒 No spam. Just launch updates and early-access privileges.
          </p>
        </div>
      </div>
    </form>
  );
}
