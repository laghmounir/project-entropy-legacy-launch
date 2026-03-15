import { useEffect, useState } from "react";
import popupBg from "@/assets/popup-bg.jpg";

export default function PopupOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ animation: "fadeSlideUp 0.4s ease-out" }}>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setShow(false)} />
      <div className="relative clip-chamfer-lg border-cyber overflow-hidden max-w-lg w-full text-center z-10">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={popupBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-card/85" />
        </div>
        {/* Content */}
        <div className="relative z-10 p-8 md:p-10">
          {/* Close button */}
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 right-4 font-display text-xs text-foreground/40 hover:text-primary transition-colors"
          >
            ✕
          </button>

          <div className="text-4xl mb-4">🚀</div>
        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground text-glow-cyan mb-3">
          Ready to Join the Fight?
        </h3>
        <p className="font-body text-sm text-foreground/60 mb-6 leading-relaxed">
          Over 1,000,000 players are already battling for survival. Download Project Entropy now and claim your territory before it's too late.
        </p>
        <a
          href="https://to.wendiro.com/u?k=220e77cdef8b42929dd5c06ff71b4ae5&via=13040"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setShow(false)}
          className="inline-block clip-chamfer-lg bg-accent px-10 py-4 font-display text-sm tracking-wider uppercase text-accent-foreground box-glow-orange hover:brightness-110 transition-all mb-3"
        >
          ⬇ Play Free Now
        </a>
        <p className="font-display text-[10px] tracking-[0.2em] text-foreground/30 uppercase">
          Free to Play • No Credit Card Required
        </p>
        </div>
      </div>
    </div>
  );
}
