import AccordionSection from "./LandingPage/AccordionSection";
import { FactSection } from "./LandingPage/FactSection";
import { FeatureSection } from "./LandingPage/FeatureSection";
import { GlobeSection } from "./LandingPage/GlobeSection";
import StatsSection from "./LandingPage/StatsSection";
import GeminiChatbot from "@/components/common/GeminiChatbot";

const LandingPage = () => {
  return (
    <main className="w-screen relative">
      <GlobeSection />
      <FactSection />
      <StatsSection />
      <FeatureSection />
      <AccordionSection />
      {/* <GeminiChatbot /> */}
      <GeminiChatbot />
    </main>
  );
};

export default LandingPage;
