import Nav from "@/components/landing/Nav";
import HeroSection from "@/components/landing/HeroSection";
import GameplayVideoSection from "@/components/landing/GameplayVideoSection";
import KeyFeaturesSection from "@/components/landing/KeyFeaturesSection";
import FactionsSection from "@/components/landing/FactionsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import DownloadCTASection from "@/components/landing/DownloadCTASection";
import Footer from "@/components/landing/Footer";
import PopupOverlay from "@/components/landing/PopupOverlay";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <HeroSection />
      <GameplayVideoSection />
      <KeyFeaturesSection />
      <FactionsSection />
      <SocialProofSection />
      <DownloadCTASection />
      <Footer />
      <PopupOverlay />
    </div>
  );
};

export default Index;
