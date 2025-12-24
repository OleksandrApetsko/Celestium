import HeroSection from "../components/Hero/HeroSection.jsx";
import DailyHoroscopeSection from "../components/DailyHoroscope/DailyHoroscopeSection.jsx";
import ExtendedForecastSection from "../components/ExtendedForecast/ExtendedForecastSection.jsx";
import CompatibilitySection from "../components/Compatibility/CompatibilitySection.jsx";
import BirthChartSection from "../components/BirthChart/BirthChartSection.jsx";
import PremiumSection from "../components/Premium/PremiumSection.jsx";
import BlogSection from "../components/Blog/BlogSection.jsx";

import useHashScroll from "../hooks/useHashScroll.js";

export default function Home() {
  useHashScroll({
    hash: "#zodiac",
    offset: 140
  });

  return (
    <>
      <HeroSection />

      <section id="zodiac">
        <DailyHoroscopeSection />
      </section>

      <ExtendedForecastSection />
      <CompatibilitySection />
      <BirthChartSection />
      <PremiumSection />
      <BlogSection />
    </>
  );
}
