import { useEffect, useRef, useState } from "react";
import factionNexus from "@/assets/faction-nexus.jpg";
import factionIron from "@/assets/faction-iron.jpg";
import factionVoid from "@/assets/faction-void.jpg";

export default function FactionsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const factions = [
    { img: factionNexus, name: "The Star Navigators", desc: "Elite cosmic explorers who chart unknown galaxies. Their courage and agility make them humanity's vanguard.", color: "text-primary" },
    { img: factionIron, name: "The Architects", desc: "Ancient builders of colossal ring-world structures. They reshape planets and bend gravity to their will.", color: "text-accent" },
    { img: factionVoid, name: "The Vanguard Pilots", desc: "Battle-hardened fighter pilots who defend the frontier. Scarred by war, driven by unwavering resolve.", color: "text-primary" },
  ];

  return (
    <section id="factions" className="relative py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-3">// Technology & Factions</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-glow-cyan">
            Choose Your Alliance
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {factions.map((f, i) => (
            <div
              key={i}
              className={`relative group clip-chamfer-lg border-cyber bg-card overflow-hidden transition-all duration-700 hover:animate-pulse-glow ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative crosshair-corner">
                <img src={f.img} alt={f.name} className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-6 right-6 h-px bg-primary/20" />
                <h3 className={`font-display text-lg tracking-wider uppercase ${f.color} mb-3`}>{f.name}</h3>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
