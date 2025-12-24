import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "../components/Hero/HeroSection.jsx";
import DailyHoroscopeSection from "../components/DailyHoroscope/DailyHoroscopeSection.jsx";
import CompatibilitySection from "../components/Compatibility/CompatibilitySection.jsx";
import MoonPhaseSection from "../components/MoonPhase/MoonPhaseSection.jsx";
import ArticlesSection from "../components/Articles/ArticlesSection.jsx";
import PremiumCTASection from "../components/Premium/PremiumCTASection.jsx";
import AppDownloadSection from "../components/AppDownload/AppDownloadSection.jsx";
import ExtendedForecastSection from "../components/ExtendedForecast/ExtendedForecastSection.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#zodiac") {
      // даємо час сторінці відрендеритись
      requestAnimationFrame(() => {
        const section = document.getElementById("zodiac");
        if (section) {
          const headerOffset = 140; // висота fixed header
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      });
    }
  }, [location]);

  return (
    <>
      <HeroSection />

      {/* DAILY HOROSCOPE / ZODIAC SECTION */}
      <section id="zodiac">
        <DailyHoroscopeSection />
      </section>

      <ExtendedForecastSection />
      <CompatibilitySection />
      <MoonPhaseSection />
      <ArticlesSection />
      <PremiumCTASection />
      {/*<AppDownloadSection />*/}
    </>
  );
}
