import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "../components/Hero/HeroSection.jsx";
import DailyHoroscopeSection from "../components/DailyHoroscope/DailyHoroscopeSection.jsx";
import ExtendedForecastSection from "../components/ExtendedForecast/ExtendedForecastSection.jsx";
import CompatibilitySection from "../components/Compatibility/CompatibilitySection.jsx";
import BlogSection from "../components/Blog/BlogSection.jsx";
import BirthChartSection from '../components/BirthChart/BirthChartSection.jsx'
import PremiumSection from '../components/Premium/PremiumSection.jsx'

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#zodiac") {
      requestAnimationFrame(() => {
        const section = document.getElementById("zodiac");
        if (section) {
          const headerOffset = 140;
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
