import { Link } from "react-router-dom";
import SiteMeta from "@/components/SiteMeta";
import EditorialShell from "@/components/EditorialShell";
import AffiliateCta from "@/components/AffiliateCta";
import heroImage from "@/assets/hero-bg.jpg";
import battleImage from "@/assets/gameplay-battle.jpg";
import exploreImage from "@/assets/gameplay-explore.jpg";

const topics = [
  { label: "Strategy", text: "Understand the systems, decisions and trade-offs before you commit your first session.", image: battleImage },
  { label: "Exploration", text: "Follow the galaxy, factions and world-building details that make the setting worth exploring.", image: exploreImage },
  { label: "Player guides", text: "Short, skimmable reads for players who want the useful answer without the filler.", image: heroImage },
];

export default function Index() {
  return (
    <EditorialShell>
      <SiteMeta title="Project Entropy Guides for Windows PC | EntropyPC" description="Original guides and comparisons for Project Entropy: sci-fi strategy, space battles, factions and Windows PC access." canonicalPath="/" />
      <main>
        <section className="editorial-hero relative overflow-hidden">
          <img src={heroImage} alt="Project Entropy sci-fi battlefield" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(222_47%_7%/.98)_0%,hsl(222_47%_7%/.82)_48%,hsl(222_47%_7%/.42)_100%)]" />
          <div className="absolute inset-0 scanline opacity-60" />
          <div className="site-container relative z-10 grid min-h-[680px] items-end gap-12 pb-20 pt-36 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:pb-28">
            <div className="max-w-3xl">
              <p className="eyebrow">Project Entropy // Field guide</p>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">Make sense of the galaxy before you enter it.</h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-foreground/75 sm:text-lg">Practical, original reads for players curious about Project Entropy: the strategy loop, the sci-fi setting and what to check before starting on Windows PC.</p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <AffiliateCta ctaId="home_hero_start_playing" ctaLocation="hero" pageType="home" className="px-7 py-4 text-xs sm:px-9 sm:text-sm">Start Playing</AffiliateCta>
                <Link to="/guides/what-is-project-entropy" className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground/75 underline decoration-primary/60 underline-offset-8 hover:text-primary">Read the first guide</Link>
              </div>
              <p className="mt-5 max-w-lg text-xs leading-6 text-foreground/55">Independent fan-made publication. Availability and requirements can change; confirm current details on the access page or official storefront.</p>
            </div>

            <aside className="hud-panel hidden max-w-sm justify-self-end lg:block">
              <div className="flex items-center justify-between border-b border-cyber pb-4 text-[10px] uppercase tracking-[0.18em] text-primary/75"><span>Command brief</span><span className="text-emerald-300">Online</span></div>
              <div className="grid grid-cols-2 gap-4 py-6 text-sm"><div><span className="block text-xs uppercase tracking-[0.14em] text-foreground/45">Platform</span><strong className="mt-2 block text-foreground">Windows PC</strong></div><div><span className="block text-xs uppercase tracking-[0.14em] text-foreground/45">Format</span><strong className="mt-2 block text-foreground">Strategy RPG</strong></div><div><span className="block text-xs uppercase tracking-[0.14em] text-foreground/45">Read time</span><strong className="mt-2 block text-foreground">5 minutes</strong></div><div><span className="block text-xs uppercase tracking-[0.14em] text-foreground/45">Edition</span><strong className="mt-2 block text-foreground">Field notes 01</strong></div></div>
              <div className="border-t border-cyber pt-4 text-xs leading-6 text-foreground/55">No hype. No copied offer text. Just useful context for players.</div>
            </aside>
          </div>
        </section>

        <section className="site-container py-20 sm:py-28" id="guides-preview">
          <div className="section-heading"><div><p className="eyebrow">Start here</p><h2>One clear answer before the next click.</h2></div><Link to="/guides" className="section-link">Browse all guides <span aria-hidden="true">↗</span></Link></div>
          <Link to="/guides/what-is-project-entropy" className="feature-card group mt-10 grid overflow-hidden lg:grid-cols-[.9fr_1.1fr]"><div className="relative min-h-[260px] overflow-hidden"><img src={battleImage} alt="Space battle scene from Project Entropy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-background/75 to-transparent" /></div><div className="flex flex-col justify-center p-7 sm:p-10"><p className="eyebrow">Guide 01 // 5 min read</p><h3 className="mt-4 text-2xl font-bold leading-tight sm:text-4xl">What is Project Entropy? A player-first overview</h3><p className="mt-5 max-w-xl text-sm leading-7 text-foreground/65">The short version of the game, its strategy loop, Windows PC availability and the details worth checking before you start.</p><span className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Open guide <span aria-hidden="true">→</span></span></div></Link>
        </section>

        <section className="border-y border-cyber bg-card/20" id="about"><div className="site-container py-20 sm:py-28"><div className="section-heading"><div><p className="eyebrow">The publication</p><h2>Built for scanning, made for players.</h2></div></div><div className="mt-10 grid gap-5 md:grid-cols-3">{topics.map((topic) => <article key={topic.label} className="topic-card"><img src={topic.image} alt="" className="h-40 w-full object-cover" /><div className="p-6"><p className="eyebrow">{topic.label}</p><p className="mt-3 text-sm leading-7 text-foreground/65">{topic.text}</p></div></article>)}</div></div></section>
      </main>
    </EditorialShell>
  );
}
