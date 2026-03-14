import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const iv = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(iv);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function SocialProofSection() {
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
    <section className="relative py-20 md:py-28" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-3">// Community Stats</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-glow-cyan">
            Join the Movement
          </h2>
        </div>
        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="clip-chamfer border-cyber bg-card/50 p-8 text-center group hover:bg-card transition-all duration-300">
            <div className="text-4xl mb-3">⭐</div>
            <div className="font-display text-3xl md:text-4xl font-bold text-primary text-glow-cyan mb-2">
              4.7 / 5
            </div>
            <p className="font-display text-xs tracking-wider uppercase text-foreground/50">Player Rating</p>
          </div>
          <div className="clip-chamfer border-cyber bg-card/50 p-8 text-center group hover:bg-card transition-all duration-300">
            <div className="text-4xl mb-3">🚀</div>
            <div className="font-display text-3xl md:text-4xl font-bold text-primary text-glow-cyan mb-2">
              <AnimatedCounter target={1000000} suffix="+" />
            </div>
            <p className="font-display text-xs tracking-wider uppercase text-foreground/50">Players Joined</p>
          </div>
          <div className="clip-chamfer border-cyber bg-card/50 p-8 text-center group hover:bg-card transition-all duration-300">
            <div className="text-4xl mb-3">🔥</div>
            <div className="font-display text-sm md:text-base font-bold text-accent text-glow-orange mb-2">
              Fastest Growing
            </div>
            <p className="font-display text-xs tracking-wider uppercase text-foreground/50">Sci-Fi Survival Game</p>
          </div>
        </div>
        <p className="text-center font-body text-sm text-foreground/40 mt-8">
          Thousands of new players join every day.
        </p>
      </div>
    </section>
  );
}
