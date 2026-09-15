const items = [
  { title: "Exploration", desc: "Chart distant worlds and expand beyond your starting sector." },
  { title: "Base Building", desc: "Construct and upgrade your outpost, module by module." },
  { title: "Fleets", desc: "Assemble ships and organise them into working formations." },
  { title: "Mechas", desc: "Field heavy mecha units alongside your ground forces." },
  { title: "Heroes", desc: "Recruit commanders and assign them to your operations." },
  { title: "Multiplayer", desc: "Play alongside other commanders in shared online sectors." },
];

export default function WhatYouFindSection() {
  return (
    <section id="overview" className="relative py-20 md:py-28 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 md:mb-14 text-center">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-3">// Overview</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What You'll Find
          </h2>
          <p className="font-body text-base md:text-lg text-foreground/70 mt-4 max-w-xl mx-auto leading-relaxed">
            A sci-fi strategy experience for Windows PC, built around these systems.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <li key={it.title} className="clip-chamfer border-cyber bg-card/60 p-6">
              <h3 className="font-display text-sm tracking-[0.2em] uppercase text-primary mb-2">{it.title}</h3>
              <p className="font-body text-base text-foreground/70 leading-relaxed">{it.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
