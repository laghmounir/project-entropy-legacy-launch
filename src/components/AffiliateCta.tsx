import { ReactNode } from "react";
import { AFFILIATE_URL, trackAffiliateClick } from "@/lib/tracking";

type AffiliateCtaProps = {
  children: ReactNode;
  ctaId: string;
  ctaLocation: string;
  pageType: string;
  articleSlug?: string;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function AffiliateCta({
  children,
  ctaId,
  ctaLocation,
  pageType,
  articleSlug,
  className = "",
  variant = "primary",
}: AffiliateCtaProps) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`${variant === "primary" ? "cta-primary" : "cta-secondary"} clip-chamfer inline-flex items-center justify-center ${className}`}
      onClick={(event) => {
        trackAffiliateClick({
          ctaId,
          ctaLocation,
          ctaText: (event.currentTarget.textContent || "").trim(),
          pageType,
          articleSlug,
        });
      }}
    >
      {children}
    </a>
  );
}
