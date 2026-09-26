import { useEffect } from "react";

type SiteMetaProps = {
  title: string;
  description: string;
  canonicalPath?: string;
};

export default function SiteMeta({ title, description, canonicalPath }: SiteMetaProps) {
  useEffect(() => {
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);

    if (canonicalPath) {
      const canonicalUrl = new URL(canonicalPath, window.location.origin).toString();
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (!canonicalTag) {
        canonicalTag = document.createElement("link");
        canonicalTag.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.setAttribute("href", canonicalUrl);
    }
  }, [title, description, canonicalPath]);

  return null;
}
