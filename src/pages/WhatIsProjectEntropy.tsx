import SiteMeta from "@/components/SiteMeta";
import EditorialShell from "@/components/EditorialShell";
import AffiliateCta from "@/components/AffiliateCta";
import battleImage from "@/assets/gameplay-battle.jpg";
import exploreImage from "@/assets/gameplay-explore.jpg";
import mechaImage from "@/assets/feature-combat.jpg";

const articleSlug = "what-is-project-entropy";

export default function WhatIsProjectEntropy() {
  return (
    <EditorialShell>
      <SiteMeta title="What Is Project Entropy? Windows PC Overview | EntropyPC" description="A player-first overview of Project Entropy: its sci-fi strategy loop, online modes, Windows PC availability and what to check before starting." canonicalPath={`/guides/${articleSlug}`} />
      <main><article>
        <header className="article-hero"><div className="site-container max-w-5xl"><p className="eyebrow">Guide 01 // Project Entropy basics</p><h1>What is Project Entropy? A player-first overview</h1><p className="article-dek">A quick, useful briefing on the sci-fi strategy game for Windows PC — what the official listing confirms, what the core loop looks like, and what to check before your first session.</p><div className="article-meta"><span>Updated September 2026</span><span>5 min read</span><span>Windows PC</span></div></div></header>
        <div className="site-container article-grid py-12 sm:py-20"><div className="article-content">
          <figure className="article-cover"><img src={battleImage} alt="Project Entropy space battle" /><figcaption>Project Entropy presents a sci-fi strategy experience built around space battles, exploration and hero fleets.</figcaption></figure>
          <div className="quick-answer"><p className="eyebrow">Quick answer</p><p>Project Entropy is a free-to-play sci-fi strategy and role-playing game with online multiplayer elements. The official Steam listing describes a loop built around alien civilizations, planetary expansion, hero fleets, mechs and high-tech weapons.</p></div>

          <h2 id="short-version">The short version</h2>
          <p>Think of Project Entropy as a space-command game with several layers competing for your attention: you explore, grow a base or territory, assemble a fleet and make decisions about how your forces develop. The game is not presented as a single-player story only; its store listing also highlights online PvP and co-op features.</p>
          <p>That mix is why the first useful question is not just “is it sci-fi?” It is whether you enjoy a game where planning, upgrades and long-term choices matter as much as the next battle.</p>

          <div className="article-banner"><div><p className="eyebrow">Want to check access?</p><h3>See the current route for Windows PC.</h3></div><AffiliateCta ctaId="article_intro_start_playing" ctaLocation="article_intro" pageType="article" articleSlug={articleSlug} className="shrink-0 px-6 py-3 text-[11px]">Start Playing</AffiliateCta></div>

          <h2 id="what-can-you-do">What can you do in the game?</h2>
          <div className="article-scan-grid"><div><span className="scan-index">01</span><h3>Command civilizations</h3><p>The official description frames different alien civilizations as part of the strategy layer, with their own technologies and units.</p></div><div><span className="scan-index">02</span><h3>Explore and expand</h3><p>Planetary exploration and expansion are part of the advertised loop, giving the map a role beyond the next fight.</p></div><div><span className="scan-index">03</span><h3>Build hero fleets</h3><p>Fleet composition matters: the listing highlights hero ships with different abilities and attributes that can be shaped around your play style.</p></div><div><span className="scan-index">04</span><h3>Upgrade mechs and weapons</h3><p>Mechs and high-tech weapons add a customisation layer for players who like to tune their forces before a battle.</p></div></div>
          <figure className="article-inline-image"><img src={exploreImage} alt="Project Entropy exploration scene" /><figcaption>Exploration is one of the pillars described in the official store listing.</figcaption></figure>

          <h2 id="windows-pc">Is it a Windows PC game?</h2>
          <p>Yes. The official Steam page lists Project Entropy for Windows and specifies a 64-bit operating system. It also lists online multiplayer, PvP and co-op features. System requirements and access conditions can change, so confirm the current details before installing.</p>
          <div className="fact-grid"><div><span>Platform</span><strong>Windows PC</strong></div><div><span>Model listed</span><strong>Free to Play</strong></div><div><span>Multiplayer</span><strong>Online PvP &amp; co-op</strong></div><div><span>Check first</span><strong>Current requirements</strong></div></div>

          <h2 id="check-first">What should a new player check first?</h2>
          <ol className="article-list"><li><strong>Confirm the current access page.</strong> Availability and install flow are the practical first step.</li><li><strong>Check your Windows setup.</strong> Pay attention to 64-bit support, storage and network requirements.</li><li><strong>Choose your first goal.</strong> Decide whether you want to explore, build, optimise a fleet or play with others.</li><li><strong>Read the current rules.</strong> Online games change; check the latest store and access information before committing time or money.</li></ol>

          <div className="article-banner article-banner-strong"><div><p className="eyebrow">Next move</p><h3>Ready to explore Project Entropy?</h3><p className="mt-2 text-sm text-foreground/65">Use the current access route and verify the details for your Windows PC.</p></div><AffiliateCta ctaId="article_bottom_start_playing" ctaLocation="article_bottom" pageType="article" articleSlug={articleSlug} className="shrink-0 px-6 py-3 text-[11px]">Start Playing</AffiliateCta></div>
          <section className="source-notes"><p className="eyebrow">Source notes</p><p>This guide is an independent editorial summary. Game facts were checked against the <a href="https://store.steampowered.com/app/2806410/Project_Entropy/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Project Entropy Steam listing</a>. We paraphrase the source and do not reproduce affiliate-network copy. Availability, requirements and access details should be rechecked before each visit.</p></section>
        </div><aside className="article-aside"><div className="sticky top-28"><p className="eyebrow">On this page</p><nav className="mt-5 space-y-3 text-sm text-foreground/60"><a href="#short-version" className="block hover:text-primary">The short version</a><a href="#what-can-you-do" className="block hover:text-primary">What can you do?</a><a href="#windows-pc" className="block hover:text-primary">Windows PC details</a><a href="#check-first" className="block hover:text-primary">What to check first</a></nav><div className="mt-8 border-t border-cyber pt-6"><img src={mechaImage} alt="Mecha in Project Entropy" className="aspect-[4/3] w-full object-cover" /><p className="mt-3 text-xs leading-5 text-foreground/50">A visual reference from the independent field guide.</p></div></div></aside></div>
      </article></main>
    </EditorialShell>
  );
}
