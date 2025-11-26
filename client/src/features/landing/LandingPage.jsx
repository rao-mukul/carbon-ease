import AccordionSection from "./sections/AccordionSection";
import { FactSection } from "./sections/FactSection";
import { FeatureSection } from "./sections/FeatureSection";
import { GlobeSection } from "./sections/GlobeSection";
import StatsSection from "./sections/StatsSection";
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
