import { useEffect, useRef, useState } from "react";
import featureBase from "@/assets/feature-base.jpg";
import featureCombat from "@/assets/feature-combat.jpg";
import featureSquad from "@/assets/feature-squad.jpg";

export default function KeyFeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const features = [
    { img: featureBase, title: "Build Your Base", desc: "Construct and upgrade your outpost as you expand across new worlds." },
    { img: featureCombat, title: "Command Fleets & Mechas", desc: "Deploy ships, mecha units and heroes in strategic battles." },
    { img: featureSquad, title: "Play With Others", desc: "Join other commanders online and coordinate in shared sectors." },
  ];

  return (
    <section id="features" className="relative py-20 md:py-28 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-3">// Core Features</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-glow-cyan">
            What Awaits You
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`relative group clip-chamfer-lg border-cyber bg-card overflow-hidden transition-all duration-700 hover:animate-pulse-glow ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative">
                <img src={f.img} alt={f.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-display text-sm tracking-wider uppercase text-primary mb-2">{f.title}</h3>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
