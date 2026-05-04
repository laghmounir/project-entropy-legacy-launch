import { useEffect, useRef, useState } from "react";

export default function DownloadCTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [checking, setChecking] = useState(false);
  const [checkStep, setCheckStep] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const steps = [
    "Checking system compatibility...",
    "Downloading launcher...",
    "Preparing Steam installation...",
  ];

  const handleDownload = () => {
    window.open("https://to.wendiro.com/5J6D/2J1A0/", "_blank");
  };

  return (
    <section id="download" className="relative py-24 md:py-32 bg-secondary/30" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="font-display text-xs tracking-[0.4em] uppercase text-primary mb-3">// Deploy Now</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground text-glow-cyan mb-6">
            Join the Entropy
          </h2>
          <p className="font-body text-foreground/60 mb-10 max-w-lg mx-auto">
            Free to play. No boundaries. Command the dying universe from your desktop.
          </p>

          <>
            <button
              onClick={handleDownload}
              className="clip-chamfer-lg bg-accent px-12 py-5 font-display text-base tracking-wider uppercase text-accent-foreground box-glow-orange hover:brightness-110 transition-all mb-4"
            >
              ⬇ Download Free
            </button>
            <div className="font-display text-[10px] tracking-[0.3em] text-foreground/30 uppercase mb-4">
              Available for Windows PC Only
            </div>
            <div className="font-display text-[10px] tracking-[0.2em] text-foreground/20 uppercase">
              No subscription • Free download • Play instantly
            </div>
          </>
        </div>
      </div>
    </section>
  );
}
