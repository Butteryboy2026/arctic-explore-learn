import ArcticHeader from "@/components/ArcticHeader";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import IceDataSection from "@/components/IceDataSection";
import WildlifeSection from "@/components/WildlifeSection";
import ImpactSection from "@/components/ImpactSection";
import ArcticFooter from "@/components/ArcticFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ArcticHeader />
      <HeroSection />
      <StatsSection />
      <IceDataSection />
      <WildlifeSection />
      <ImpactSection />
      <ArcticFooter />
    </div>
  );
};

export default Index;
