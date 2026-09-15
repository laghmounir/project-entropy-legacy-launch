import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster={heroBg}>
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 scanline pointer-events-none" />
      {/* HUD Frame */}
      <div className="absolute inset-6 md:inset-16 pointer-events-none">
        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary/40" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-primary/40" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-primary/40" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary/40" />
      </div>
      {/* Content */}
      <div className={`relative z-10 w-full flex flex-col items-center justify-center text-center px-6 py-28 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="font-display text-[11px] md:text-sm tracking-[0.4em] uppercase text-primary mb-5">
          Sci-Fi Strategy // Windows PC
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-wide mb-6 text-glow-cyan leading-[1.15] max-w-4xl">
          The Sci-Fi Strategy War Begins
        </h1>
        <p className="font-body text-foreground/80 max-w-2xl text-lg md:text-xl leading-relaxed mb-10">
          Explore distant worlds, build your base and command your forces in a Windows PC sci-fi experience.
        </p>
        <a
          href="https://to.dordir.com/5J6D/2J1A0/"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="cta-primary clip-chamfer-lg px-10 md:px-14 py-5 md:py-6 font-display text-base md:text-xl inline-block"
        >
          Discover Project Entropy
        </a>
        <p className="font-body text-sm text-foreground/70 mt-5 max-w-md">
          Continues to the game's access page in a new tab, where you can see availability and install details.
        </p>
        <p className="font-body text-xs text-foreground/55 mt-3 max-w-md leading-relaxed">
          Independent fan-made page. Not affiliated with or endorsed by the game's developer or publisher. Links may earn a commission.
        </p>
      </div>
      {/* Bottom data readout */}
      <div className="absolute bottom-5 left-6 right-6 hidden sm:flex justify-between font-display text-[10px] tracking-[0.3em] text-primary/40 uppercase">
        <span>Exploration</span>
        <span>Base Building</span>
        <span>Fleets &amp; Mechas</span>
      </div>
    </section>
  );
}
