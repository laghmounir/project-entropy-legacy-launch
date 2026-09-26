import { useEffect } from "react";

type ArticleMeta = {
  image?: string;
  dateModified: string;
  section?: string;
};

type SiteMetaProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  article?: ArticleMeta;
  noindex?: boolean;
};

function upsertMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function SiteMeta({ title, description, canonicalPath, article, noindex = false }: SiteMetaProps) {
  useEffect(() => {
    const isProductionHost = ["entropypc.com", "www.entropypc.com"].includes(window.location.hostname);
    const siteOrigin = isProductionHost ? "https://entropypc.com" : window.location.origin;
    const resolvedPath = canonicalPath || window.location.pathname;
    const canonicalUrl = new URL(resolvedPath, siteOrigin).toString();
    const absoluteImageUrl = new URL(article?.image || "/og-image.jpg", siteOrigin).toString();

    document.title = title;
    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="robots"]', "name", "robots", noindex || !isProductionHost ? "noindex, follow" : "index, follow");
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:type"]', "property", "og:type", article ? "article" : "website");
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[property="og:image"]', "property", "og:image", absoluteImageUrl);
    upsertMeta('meta[property="og:image:alt"]', "property", "og:image:alt", title);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", absoluteImageUrl);

    if (canonicalPath) {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute("href", canonicalUrl);
    }

    const existingStructuredData = document.querySelector('script[data-entropy-structured-data="true"]');
    existingStructuredData?.remove();

    if (article) {
      const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            headline: title,
            description,
            image: [absoluteImageUrl],
            dateModified: article.dateModified,
            articleSection: article.section || "Guides",
            author: { "@type": "Organization", name: "EntropyPC", url: siteOrigin },
            publisher: {
              "@type": "Organization",
              name: "EntropyPC",
              url: siteOrigin,
              logo: { "@type": "ImageObject", url: new URL("/favicon.png", siteOrigin).toString() },
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteOrigin },
              { "@type": "ListItem", position: 2, name: "Guides", item: new URL("/guides", siteOrigin).toString() },
              { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
            ],
          },
        ],
      };
      const structuredDataTag = document.createElement("script");
      structuredDataTag.type = "application/ld+json";
      structuredDataTag.dataset.entropyStructuredData = "true";
      structuredDataTag.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataTag);
    }
  }, [title, description, canonicalPath, article, noindex]);

  return null;
}
