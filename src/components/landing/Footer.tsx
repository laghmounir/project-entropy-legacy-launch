export default function Footer() {
  return (
    <footer className="border-t border-cyber py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xs tracking-[0.3em] text-primary/40 uppercase">
          © 2387 Project Entropy. All rights reserved.
        </div>
        <div className="flex gap-6 font-display text-[10px] tracking-[0.2em] text-foreground/30 uppercase">
          <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy</a>
          <a href="/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Terms</a>
          <a href="/support.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}
