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
          {["Gameplay", "Features", "Factions", "Download"].map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} className="text-foreground/60 hover:text-primary transition-colors duration-200">
              {s}
            </a>
          ))}
        </div>
        <a href="https://to.wendiro.com/u?k=220e77cdef8b42929dd5c06ff71b4ae5&via=13040" target="_blank" rel="noopener noreferrer" className="clip-chamfer bg-accent px-5 py-2 font-display text-xs tracking-wider uppercase text-accent-foreground hover:brightness-110 transition-all">
          Play Free
        </a>
      </div>
    </nav>
  );
}
