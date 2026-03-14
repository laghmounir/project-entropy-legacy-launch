import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

function TypeWriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    const t = setTimeout(() => {
      let i = 0;
      const iv = setInterval(() => {
        setDisplay(text.slice(0, ++i));
        if (i >= text.length) clearInterval(iv);
      }, 30);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(t);
  }, [text, delay]);
  return <>{display}<span className="animate-pulse text-primary">_</span></>;
}

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster={heroBg}>
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 scanline pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-[2px] bg-primary/30" style={{ animation: "scanMove 4s linear infinite" }} />
      </div>
      {/* HUD Frame */}
      <div className="absolute inset-8 md:inset-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary/40" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/40" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/40" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary/40" />
      </div>
      {/* Content */}
      <div className={`relative z-10 h-full flex flex-col items-center justify-center text-center px-6 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="font-display text-xs md:text-sm tracking-[0.5em] uppercase text-primary/80 mb-4">
          <TypeWriter text="INITIALIZING SYSTEM // 2387 AD" />
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-wider mb-6 text-glow-cyan leading-tight" style={{ animation: "flicker 4s infinite" }}>
          The Ultimate Sci-Fi<br />Survival War Begins
        </h1>
        <p className="font-body text-foreground/70 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
          Explore a hostile alien world, build your base, and fight for survival with your squad in Project Entropy.
        </p>
        <a href="#download" className="clip-chamfer-lg bg-accent px-10 py-5 font-display text-sm md:text-base tracking-wider uppercase text-accent-foreground box-glow-orange hover:brightness-110 transition-all mb-4">
          ⬇ Play Free on PC
        </a>
        <p className="font-display text-[10px] md:text-xs tracking-[0.3em] text-foreground/40 uppercase">
          Free to Play • Windows PC • Online Multiplayer
        </p>
      </div>
      {/* Bottom data readout */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between font-display text-[10px] tracking-[0.3em] text-primary/40 uppercase">
        <span>SYS.STATUS: ONLINE</span>
        <span>BUILD 4.7.2 // UNREAL ENGINE 5</span>
        <span className="hidden md:inline">SECTOR: ALPHA-9</span>
      </div>
    </section>
  );
}
