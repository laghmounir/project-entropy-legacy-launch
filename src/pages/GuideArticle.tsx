import { Link, useParams } from "react-router-dom";
import SiteMeta from "@/components/SiteMeta";
import EditorialShell from "@/components/EditorialShell";
import AffiliateCta from "@/components/AffiliateCta";
import { getGuideBySlug } from "@/data/guideArticles";

export default function GuideArticle() {
  const { slug = "" } = useParams();
  const article = getGuideBySlug(slug);

  if (!article) {
    return <EditorialShell><main className="site-container py-40"><h1>Guide not found</h1><Link to="/guides" className="section-link mt-6 inline-block">Back to guides →</Link></main></EditorialShell>;
  }

  return (
    <EditorialShell>
      <SiteMeta title={article.seoTitle} description={article.description} canonicalPath={`/guides/${article.slug}`} article={{ image: article.heroImage, dateModified: "2026-09-26", section: "Guides" }} />
      <main>
        <article>
          <header className="article-hero"><div className="site-container max-w-5xl"><p className="eyebrow">{article.eyebrow}</p><h1>{article.title}</h1><p className="article-dek">{article.dek}</p><div className="article-meta"><span>Updated September 2026</span><span>{article.readTime}</span><span>Windows PC</span></div></div></header>
          <div className="site-container article-grid py-12 sm:py-20">
            <div className="article-content">
              <figure className="article-cover"><img src={article.heroImage} alt={article.heroAlt} /><figcaption>{article.dek}</figcaption></figure>
              <div className="quick-answer"><p className="eyebrow">Quick answer</p><p>{article.quickAnswer}</p></div>
              <div className="article-banner"><div><p className="eyebrow">Want to check access?</p><h3>See the current route for Windows PC.</h3></div><AffiliateCta ctaId={`${article.slug}_intro_start_playing`} ctaLocation="article_intro" pageType="article" articleSlug={article.slug} className="shrink-0 px-6 py-3 text-[11px]">Start Playing</AffiliateCta></div>

              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="article-section">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && <ul className="article-list">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                  {section.image && <figure className="article-inline-image"><img src={section.image.src} alt={section.image.alt} /><figcaption>{section.image.caption}</figcaption></figure>}
                </section>
              ))}

              <div className="fact-grid">{article.facts.map((fact) => <div key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></div>)}</div>
              <div className="article-banner article-banner-strong"><div><p className="eyebrow">Next move</p><h3>Ready to explore Project Entropy?</h3><p className="mt-2 text-sm text-foreground/65">Use the current access route and verify the details for your Windows PC.</p></div><AffiliateCta ctaId={`${article.slug}_bottom_start_playing`} ctaLocation="article_bottom" pageType="article" articleSlug={article.slug} className="shrink-0 px-6 py-3 text-[11px]">Start Playing</AffiliateCta></div>

              <section className="source-notes"><p className="eyebrow">Source notes</p><p>{article.sourceNote} Read the <a href={article.sourceUrl.split(" | ")[0]} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">{article.sourceLabel}</a>.</p></section>
              <section className="related-guides"><p className="eyebrow">Continue reading</p><div className="mt-5 grid gap-3 sm:grid-cols-3">{article.relatedSlugs.map((relatedSlug) => { const related = getGuideBySlug(relatedSlug); return related ? <Link key={related.slug} to={`/guides/${related.slug}`} className="border border-cyber bg-card/30 p-4 text-sm text-foreground/75 transition hover:border-primary hover:text-primary">{related.title}</Link> : null; })}</div></section>
            </div>
            <aside className="article-aside"><div className="sticky top-28"><p className="eyebrow">On this page</p><nav className="mt-5 space-y-3 text-sm text-foreground/60">{article.sections.map((section) => <a key={section.id} href={`#${section.id}`} className="block hover:text-primary">{section.title}</a>)}</nav><div className="mt-8 border-t border-cyber pt-6"><img src={article.heroImage} alt={article.heroAlt} className="aspect-[4/3] w-full object-cover" /><p className="mt-3 text-xs leading-5 text-foreground/50">Independent field notes for players exploring Project Entropy.</p></div></div></aside>
          </div>
        </article>
      </main>
    </EditorialShell>
  );
}
