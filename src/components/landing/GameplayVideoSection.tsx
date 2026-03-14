import { useEffect, useRef, useState } from "react";

export default function GameplayVideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="gameplay" className="relative py-20 md:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`mb-10 text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-3">// Gameplay Footage</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-glow-cyan">
            See It In Action
          </h2>
        </div>
        <div className={`relative clip-chamfer-lg border-cyber overflow-hidden transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <video
            autoPlay muted loop playsInline
            className="w-full h-[300px] md:h-[500px] object-cover"
          >
            <source src="/gameplay.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/20 scanline pointer-events-none" />
          <div className="absolute bottom-4 left-4 font-display text-[10px] tracking-[0.3em] text-primary/50 uppercase">
            // Live gameplay footage
          </div>
        </div>
      </div>
    </section>
  );
}
