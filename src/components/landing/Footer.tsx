export default function Footer() {
  return (
    <footer className="border-t border-cyber py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xs tracking-[0.3em] text-primary/60 uppercase text-center md:text-left">
            Project Entropy — Fan Page
          </div>
          <nav className="flex flex-wrap justify-center gap-6 font-display text-[11px] tracking-[0.2em] text-foreground/70 uppercase">
            <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy</a>
            <a href="/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Terms</a>
            <a href="/support.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Support</a>
          </nav>
        </div>
        <p className="font-body text-xs text-foreground/60 leading-relaxed max-w-3xl">
          Affiliate disclosure: this is an independent, fan-made informational page. It is not affiliated with, sponsored by, or endorsed by the developer or publisher of Project Entropy. All trademarks and game content belong to their respective owners. Links on this page may earn us a commission at no cost to you.
        </p>
      </div>
    </footer>
  );
}
