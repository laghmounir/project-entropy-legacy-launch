import { useEffect, useState } from "react";

export default function Nav() {
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
          {[
            { label: "Gameplay", href: "#gameplay" },
            { label: "Features", href: "#features" },
            { label: "Alliances", href: "#factions" },
            { label: "Overview", href: "#overview" },
          ].map((s) => (
            <a key={s.label} href={s.href} className="text-foreground/70 hover:text-primary transition-colors duration-200">
              {s.label}
            </a>
          ))}
        </div>
        <a href="https://to.dordir.com/5J6D/2J1A0/" target="_blank" rel="noopener noreferrer sponsored" className="cta-secondary clip-chamfer px-5 py-2.5 font-display text-[11px] md:text-xs">
          Discover Project Entropy
        </a>
      </div>
    </nav>
  );
}
