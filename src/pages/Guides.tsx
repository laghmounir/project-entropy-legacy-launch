import { Link } from "react-router-dom";
import SiteMeta from "@/components/SiteMeta";
import EditorialShell from "@/components/EditorialShell";
import AffiliateCta from "@/components/AffiliateCta";
import battleImage from "@/assets/gameplay-battle.jpg";

export default function Guides() {
  return (
    <EditorialShell>
      <SiteMeta title="Project Entropy Guides | EntropyPC" description="Skimmable, original Project Entropy guides for Windows PC players." canonicalPath="/guides" />
      <main>
        <section className="page-hero"><div className="site-container"><p className="eyebrow">Field notes // Guides</p><h1>Useful answers, without the filler.</h1><p>Start with the overview, then follow the topics that match the way you play.</p></div></section>
        <section className="site-container py-16 sm:py-24"><div className="grid gap-6 lg:grid-cols-2">
          <Link to="/guides/what-is-project-entropy" className="feature-card group overflow-hidden"><div className="relative h-60 overflow-hidden"><img src={battleImage} alt="Project Entropy space battle" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><div className="p-7 sm:p-9"><p className="eyebrow">Guide 01 // Overview</p><h2 className="mt-4 text-2xl font-bold">What is Project Entropy?</h2><p className="mt-4 text-sm leading-7 text-foreground/65">A concise overview of the sci-fi strategy game, what the official listing confirms and what Windows PC players should check first.</p><span className="mt-6 block text-xs font-semibold uppercase tracking-[0.18em] text-primary">Read the guide →</span></div></Link>
          <article className="topic-card flex flex-col justify-between p-7 sm:p-9"><div><p className="eyebrow">Next field notes</p><h2 className="mt-4 text-2xl font-bold">Beginner strategy and faction notes</h2><p className="mt-4 text-sm leading-7 text-foreground/65">We are building these guides from verified game information and player questions, not copied affiliate descriptions.</p></div><AffiliateCta ctaId="guides_preview_start_playing" ctaLocation="guides_card" pageType="guides" className="mt-8 w-fit px-6 py-3 text-[11px]">Start Playing</AffiliateCta></article>
        </div></section>
      </main>
    </EditorialShell>
  );
}
