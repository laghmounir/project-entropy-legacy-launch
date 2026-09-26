export const AFFILIATE_URL = "https://to.dordir.com/5J6D/2J1A0/";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export type AffiliateClickContext = {
  ctaId: string;
  ctaLocation: string;
  ctaText: string;
  pageType: string;
  articleSlug?: string;
};

export function trackAffiliateClick(context: AffiliateClickContext) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "affiliate_click",
    cta_id: context.ctaId,
    cta_location: context.ctaLocation,
    cta_text: context.ctaText,
    page_type: context.pageType,
    article_slug: context.articleSlug || undefined,
    destination: "affbooster",
    offer_id: "20110",
    eligible_platform: "windows_pc",
    page_path: window.location.pathname,
  });
}
