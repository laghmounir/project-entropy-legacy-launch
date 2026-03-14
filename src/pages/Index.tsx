import { useEffect, useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import battleImg from "@/assets/gameplay-battle.jpg";
import techImg from "@/assets/gameplay-tech.jpg";
import exploreImg from "@/assets/gameplay-explore.jpg";
import cityImg from "@/assets/gameplay-city.jpg";
import factionNexus from "@/assets/faction-nexus.jpg";
import factionIron from "@/assets/faction-iron.jpg";
import factionVoid from "@/assets/faction-void.jpg";

/* ─── Intersection Observer Hook ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Typing Effect ─── */
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

/* ─── Nav ─── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-cyber" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-display text-primary text-glow-cyan text-lg tracking-[0.3em] uppercase">
          Project Entropy
        </div>
        <div className="hidden md:flex gap-8 font-display text-xs tracking-[0.2em] uppercase">
          {["Gameplay", "Factions", "Strategy", "Download"].map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} className="text-foreground/60 hover:text-primary transition-colors duration-200">
              {s}
            </a>
          ))}
        </div>
        <a href="#download" className="clip-chamfer bg-accent px-5 py-2 font-display text-xs tracking-wider uppercase text-accent-foreground hover:brightness-110 transition-all">
          Download
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);
  return (
    <section className="relative h-screen w-full overflow-hidden">
<video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" poster={heroBg}>
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 scanline pointer-events-none" />
      {/* Scan line animation */}
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
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-wider mb-6 text-glow-cyan" style={{ animation: "flicker 4s infinite" }}>
          PROJECT<br />ENTROPY
        </h1>
        <p className="font-body text-foreground/70 max-w-xl text-lg md:text-xl leading-relaxed mb-10">
          Command fleets across dying galaxies. Forge alliances with ancient factions. The entropy of the universe is your battlefield.
        </p>
        <div className="flex gap-4">
          <a href="#download" className="clip-chamfer-lg bg-accent px-8 py-4 font-display text-sm tracking-wider uppercase text-accent-foreground box-glow-orange hover:brightness-110 transition-all">
            Download for Windows
          </a>
          <a href="#gameplay" className="clip-chamfer-lg border-cyber bg-primary/5 px-8 py-4 font-display text-sm tracking-wider uppercase text-primary hover:bg-primary/10 transition-all">
            Explore
          </a>
        </div>
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

/* ─── Gameplay Gallery ─── */
function GameplaySection() {
  const { ref, visible } = useInView();
  const images = [
    { src: battleImg, title: "Carrier Fleet", desc: "Command massive carrier ships across hostile star systems in epic fleet battles." },
    { src: exploreImg, title: "Lunar Colonies", desc: "Establish research outposts on barren moons and harvest rare resources." },
    { src: techImg, title: "Space Ecosystems", desc: "Engineer orbital habitats with self-sustaining biomes and advanced agriculture." },
    { src: cityImg, title: "Bio-Spheres", desc: "Construct gravity-defying eco-spheres harboring entire civilizations in deep space." },
  ];
  return (
    <section id="gameplay" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-3">// Gameplay Overview</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-glow-cyan">
            Experience the Future
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
          {images.map((img, i) => (
            <div
              key={i}
              className={`flex-shrink-0 w-[340px] md:w-[420px] snap-center group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative overflow-hidden clip-chamfer-lg border-cyber">
                <img src={img.src} alt={img.title} className="w-full h-60 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-sm tracking-wider uppercase text-primary mb-1">{img.title}</h3>
                  <p className="font-body text-sm text-foreground/60">{img.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Factions ─── */
function FactionsSection() {
  const { ref, visible } = useInView();
  const factions = [
    { img: factionNexus, name: "The Star Navigators", desc: "Elite cosmic explorers who chart unknown galaxies. Their courage and agility make them humanity's vanguard.", color: "text-primary" },
    { img: factionIron, name: "The Architects", desc: "Ancient builders of colossal ring-world structures. They reshape planets and bend gravity to their will.", color: "text-accent" },
    { img: factionVoid, name: "The Vanguard Pilots", desc: "Battle-hardened fighter pilots who defend the frontier. Scarred by war, driven by unwavering resolve.", color: "text-primary" },
  ];
  return (
    <section id="factions" className="relative py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
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

/* ─── Mechanics ─── */
function MechanicsSection() {
  const { ref, visible } = useInView();
  const mechanics = [
    { icon: "⬡", title: "Dynamic Entropy System", desc: "Every decision accelerates universal decay. Manage resources as stars collapse around you." },
    { icon: "◈", title: "Fleet Command", desc: "Build and customize capital ships. Assign AI commanders with unique tactical doctrines." },
    { icon: "⊡", title: "Diplomatic Web", desc: "Forge alliances, betray rivals, or become a shadow broker. Every relationship shapes the galaxy." },
    { icon: "◎", title: "Procedural Worlds", desc: "No two playthroughs are the same. Billions of unique star systems await discovery." },
  ];
  return (
    <section id="strategy" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-3">// Strategic Mechanics</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-glow-cyan">
            Master the Chaos
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {mechanics.map((m, i) => (
            <div
              key={i}
              className={`relative clip-chamfer border-cyber bg-card/50 p-8 group hover:bg-card transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start gap-5">
                <span className="text-3xl text-primary text-glow-cyan">{m.icon}</span>
                <div>
                  <h3 className="font-display text-sm tracking-wider uppercase text-foreground mb-2">{m.title}</h3>
                  <p className="font-body text-sm text-foreground/50 leading-relaxed">{m.desc}</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 font-display text-[10px] tracking-[0.3em] text-primary/20 p-3">
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
        {/* Full width cinematic */}
        <div className="mt-12 relative clip-chamfer-lg overflow-hidden border-cyber">
          <img src={cityImg} alt="Project Entropy sprawling metropolis" className="w-full h-64 md:h-96 object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/40 scanline" />
          <div className="absolute bottom-6 left-6 font-display text-xs tracking-[0.3em] text-primary/60 uppercase">
            // In-game footage — Sector Meridian-7
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Download ─── */
function DownloadSection() {
  const [showSpecs, setShowSpecs] = useState(false);
  const { ref, visible } = useInView();
  return (
    <section id="download" className="relative py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center" style={{ maxWidth: "48rem", margin: "0 auto" }}>
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-3">// Deploy Now</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-glow-cyan mb-6">
            Join the Entropy
          </h2>
          <p className="font-body text-foreground/60 mb-10 max-w-lg mx-auto">
            Free to play. No boundaries. Command the dying universe from your desktop.
          </p>

          <a href="#" className="inline-block clip-chamfer-lg bg-accent px-12 py-5 font-display text-base tracking-wider uppercase text-accent-foreground box-glow-orange hover:brightness-110 transition-all mb-8">
            ⬇ Download for Windows
          </a>

          <div className="font-display text-[10px] tracking-[0.3em] text-foreground/30 uppercase mb-8">
            Windows 10/11 • 64-bit • 85 GB Free Space
          </div>

          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="font-display text-xs tracking-[0.2em] uppercase text-primary/60 hover:text-primary transition-colors border-b border-primary/20 pb-1"
          >
            {showSpecs ? "Hide" : "Show"} System Requirements
          </button>

          {showSpecs && (
            <div className="mt-8 clip-chamfer border-cyber bg-card/50 p-8 text-left max-w-lg mx-auto" style={{ animation: "fadeSlideUp 0.3s ease-out" }}>
              <div className="grid grid-cols-2 gap-6 font-body text-sm">
                <div>
                  <h4 className="font-display text-xs text-primary tracking-wider mb-3 uppercase">Minimum</h4>
                  <ul className="space-y-2 text-foreground/50">
                    <li>OS: Windows 10 64-bit</li>
                    <li>CPU: Intel i5-10400</li>
                    <li>RAM: 16 GB</li>
                    <li>GPU: RTX 2060</li>
                    <li>Storage: 85 GB SSD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-xs text-accent tracking-wider mb-3 uppercase">Recommended</h4>
                  <ul className="space-y-2 text-foreground/50">
                    <li>OS: Windows 11 64-bit</li>
                    <li>CPU: Intel i7-12700K</li>
                    <li>RAM: 32 GB</li>
                    <li>GPU: RTX 4070 Ti</li>
                    <li>Storage: 120 GB NVMe</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="border-t border-cyber py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xs tracking-[0.3em] text-primary/40 uppercase">
          © 2387 Project Entropy. All rights reserved.
        </div>
        <div className="flex gap-6 font-display text-[10px] tracking-[0.2em] text-foreground/30 uppercase">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <GameplaySection />
      <FactionsSection />
      <MechanicsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
