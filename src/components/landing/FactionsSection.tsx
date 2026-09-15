import { useEffect, useRef, useState } from "react";
import allianceCompetitive from "@/assets/alliance-competitive.jpg";
import allianceMilitary from "@/assets/alliance-military.jpg";
import allianceCasual from "@/assets/alliance-casual.jpg";

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

  const alliances = [
    {
      img: allianceCompetitive,
      name: "Competitive Alliances",
      desc: "Groups organised around territory control and long-term sector campaigns.",
      color: "text-primary",
      traits: ["Experienced commanders", "Large fleets", "Sector control focus"],
      examples: ["Entropy Legion", "Nova Empire", "Galactic Dominion", "Stellar Vanguard"],
    },
    {
      img: allianceMilitary,
      name: "Military / PvP Alliances",
      desc: "Built around large battles, coordinated attacks and alliance wars.",
      color: "text-accent",
      traits: ["Active players", "Organised attacks", "Alliance wars"],
      examples: ["Void Armada", "Iron Fleet", "Omega Command", "Shadow Armada"],
    },
    {
      img: allianceCasual,
      name: "Casual / Growth Alliances",
      desc: "Friendlier groups that help newer commanders find their footing.",
      color: "text-primary",
      traits: ["Resource sharing", "Help with missions", "Defense support"],
      examples: ["Star Alliance", "Cosmic Traders", "New Frontier", "Unity Fleet"],
    },
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
          {alliances.map((a, i) => (
            <div
              key={i}
              className={`relative group clip-chamfer-lg border-cyber bg-card overflow-hidden transition-all duration-700 hover:animate-pulse-glow ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative crosshair-corner">
                <img src={a.img} alt={a.name} className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-6 right-6 h-px bg-primary/20" />
                <h3 className={`font-display text-lg tracking-wider uppercase ${a.color} mb-2`}>{a.name}</h3>
                <p className="font-body text-sm text-foreground/60 leading-relaxed mb-4">{a.desc}</p>

                <h4 className="font-display text-xs tracking-widest uppercase text-foreground/40 mb-2">Characteristics</h4>
                <ul className="space-y-1 mb-4">
                  {a.traits.map((t, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 rounded-full bg-primary/60" />
                      {t}
                    </li>
                  ))}
                </ul>

                <h4 className="font-display text-xs tracking-widest uppercase text-foreground/40 mb-2">Example Names</h4>
                <div className="flex flex-wrap gap-2">
                  {a.examples.map((ex, j) => (
                    <span key={j} className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary/80 border border-primary/20">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
