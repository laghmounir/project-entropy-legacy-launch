import Nav from "@/components/landing/Nav";
import HeroSection from "@/components/landing/HeroSection";
import GameplayVideoSection from "@/components/landing/GameplayVideoSection";
import KeyFeaturesSection from "@/components/landing/KeyFeaturesSection";
import FactionsSection from "@/components/landing/FactionsSection";
import WhatYouFindSection from "@/components/landing/WhatYouFindSection";
import DownloadCTASection from "@/components/landing/DownloadCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <HeroSection />
        <GameplayVideoSection />
        <KeyFeaturesSection />
        <FactionsSection />
        <WhatYouFindSection />
        <DownloadCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
