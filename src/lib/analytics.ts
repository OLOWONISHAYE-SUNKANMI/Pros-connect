/**
 * ProsConnect Analytics Event Dispatcher
 * Tracks specified marketing and conversion events for the landing page.
 */

export type AnalyticsEvent =
  | "landing_page_view"
  | "hero_cta_clicked"
  | "wishlist_form_started"
  | "wishlist_form_submitted"
  | "wishlist_signup_success"
  | "wishlist_signup_failed"
  | "professional_cta_clicked"
  | "client_cta_clicked"
  | "faq_opened"
  | "social_share_clicked";

export interface AnalyticsPayload {
  source?: string;
  campaign?: string;
  referrer?: string;
  device?: string;
  role?: string;
  timestamp?: string;
  [key: string]: any;
}

export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  const device =
    window.innerWidth < 768
      ? "mobile"
      : window.innerWidth < 1024
      ? "tablet"
      : "desktop";

  const fullPayload: AnalyticsPayload = {
    source: payload.source || (new URLSearchParams(window.location.search).get("utm_source") ?? "direct"),
    campaign: payload.campaign || (new URLSearchParams(window.location.search).get("utm_campaign") ?? "launch_wishlist"),
    referrer: payload.referrer || document.referrer || "direct",
    device: payload.device || device,
    timestamp: new Date().toISOString(),
    ...payload,
  };

  // Safe logging in development and integration with window dataLayer if present
  if (process.env.NODE_ENV !== "production") {
    console.log(`[ProsConnect Analytics] ${event}`, fullPayload);
  }

  try {
    // Standard dataLayer push (GTM / GA4 / Plausible)
    const windowWithDataLayer = window as unknown as { dataLayer?: any[]; gtag?: (...args: any[]) => void };
    if (Array.isArray(windowWithDataLayer.dataLayer)) {
      windowWithDataLayer.dataLayer.push({
        event,
        ...fullPayload,
      });
    }

    // Custom DOM event for external listeners
    window.dispatchEvent(
      new CustomEvent("prosconnect_analytics", {
        detail: { event, ...fullPayload },
      })
    );
  } catch (err) {
    // Silent fail so analytics never breaks user flow
  }
}
