import { Link } from "react-router-dom";
import SiteMeta from "@/components/SiteMeta";
import EditorialShell from "@/components/EditorialShell";
import AffiliateCta from "@/components/AffiliateCta";
import techImage from "@/assets/gameplay-tech.jpg";

export default function Comparisons() {
  return (
    <EditorialShell>
      <SiteMeta title="Project Entropy Comparisons | EntropyPC" description="A transparent comparison desk for sci-fi strategy games, built around player-relevant criteria instead of copied claims." canonicalPath="/comparisons" />
      <main><section className="page-hero"><div className="site-container"><p className="eyebrow">Comparison desk</p><h1>Compare the loop, not the hype.</h1><p>Every comparison will use the same player-first criteria: platform, strategy depth, multiplayer, progression and current access.</p></div></section><section className="site-container py-16 sm:py-24"><div className="comparison-feature overflow-hidden"><div className="grid gap-0 lg:grid-cols-[.85fr_1.15fr]"><img src={techImage} alt="Project Entropy technology and strategy concept" className="h-full min-h-[280px] w-full object-cover" /><div className="p-7 sm:p-10"><p className="eyebrow">Template // Project Entropy baseline</p><h2 className="mt-4 text-3xl font-bold">How we will compare sci-fi strategy games</h2><p className="mt-5 text-sm leading-7 text-foreground/65">A fair comparison needs more than a list of features. We will separate verified facts from our interpretation, show who each game is for and include a current-access check.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Platform & requirements", "Strategy loop", "PvP / co-op", "Progression", "Visual identity", "Current access"].map((item, index) => <div key={item} className="border border-cyber bg-background/40 p-4"><span className="scan-index">0{index + 1}</span><p className="mt-2 text-sm text-foreground/75">{item}</p></div>)}</div><div className="mt-8 flex flex-wrap gap-4"><Link to="/guides/what-is-project-entropy" className="section-link">Read the baseline guide →</Link><AffiliateCta ctaId="comparisons_start_playing" ctaLocation="comparison_hub" pageType="comparisons" className="px-6 py-3 text-[11px]">Start Playing</AffiliateCta></div></div></div></div></section></main>
    </EditorialShell>
  );
}
