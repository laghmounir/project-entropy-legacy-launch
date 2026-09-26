import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AffiliateCta from "@/components/AffiliateCta";

type EditorialShellProps = { children: ReactNode };

const navigation = [
  { label: "Home", href: "/" },
  { label: "Guides", href: "/guides" },
  { label: "Comparisons", href: "/comparisons" },
];

export default function EditorialShell({ children }: EditorialShellProps) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (href: string) => href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="site-header">
        <div className="site-container flex h-20 items-center justify-between gap-6">
          <Link to="/" className="font-display text-sm font-bold uppercase tracking-[0.28em] text-primary text-glow-cyan" onClick={() => setMenuOpen(false)}>
            Entropy<span className="text-foreground/50">PC</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            {navigation.map((item) => <Link key={item.href} to={item.href} className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}>{item.label}</Link>)}
            <a href="/#about" className="nav-link">About</a>
          </nav>

          <div className="flex items-center gap-3">
            <AffiliateCta ctaId="nav_start_playing" ctaLocation="nav" pageType="site_shell" className="px-4 py-2 text-[10px] sm:px-5 sm:text-xs">Start Playing</AffiliateCta>
            <button type="button" className="menu-toggle md:hidden" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
          </div>
        </div>

        {menuOpen && <nav className="mobile-nav md:hidden" aria-label="Mobile navigation">
          {navigation.map((item) => <Link key={item.href} to={item.href} className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
          <a href="/#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
        </nav>}
      </header>

      {children}

      <footer className="border-t border-cyber bg-background/80">
        <div className="site-container grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-start">
          <div><p className="font-display text-xs uppercase tracking-[0.24em] text-primary/80">EntropyPC field notes</p><p className="mt-4 max-w-xl text-sm leading-7 text-foreground/60">An independent fan-made guide for players exploring Project Entropy on Windows PC. We publish original explainers and comparisons; we are not affiliated with the developer or publisher.</p></div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.16em] text-foreground/60" aria-label="Footer navigation"><Link to="/guides" className="hover:text-primary">Guides</Link><Link to="/comparisons" className="hover:text-primary">Comparisons</Link><a href="/privacy.html" className="hover:text-primary">Privacy</a><a href="/terms.html" className="hover:text-primary">Terms</a><a href="/support.html" className="hover:text-primary">Support</a></nav>
        </div>
        <div className="site-container border-t border-cyber py-5 text-xs leading-6 text-foreground/45">Affiliate disclosure: some links may earn us a commission at no extra cost to you. Project Entropy and related trademarks belong to their respective owners.</div>
      </footer>
    </div>
  );
}
