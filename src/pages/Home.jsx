import HeroSection from "../components/Hero/HeroSection.jsx";
import DailyHoroscopeSection from "../components/DailyHoroscope/DailyHoroscopeSection.jsx";
import CosmicInsightsSection from "../components/CosmicInsights/CosmicInsightsSection.jsx";
import ZodiacGridSection from "../components/ZodiacGrid/ZodiacGridSection.jsx";
import CompatibilitySection from "../components/Compatibility/CompatibilitySection.jsx";
import MoonPhaseSection from "../components/MoonPhase/MoonPhaseSection.jsx";
import ArticlesSection from "../components/Articles/ArticlesSection.jsx";
import PremiumCTASection from "../components/PremiumCTA/PremiumCTASection.jsx";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection.jsx";
import FinalCTASection from "../components/FinalCTA/FinalCTASection.jsx";
import AppDownloadSection from '../components/AppDownload/AppDownloadSection.jsx'

export default function Home() {
  return (
    <>
      <HeroSection />
      <DailyHoroscopeSection />
      <CosmicInsightsSection />
      <ZodiacGridSection />
      <CompatibilitySection />
      <MoonPhaseSection />
      <ArticlesSection />
      <PremiumCTASection />
      <TestimonialsSection />
      <AppDownloadSection />
      <FinalCTASection />
    </>
  );
}
