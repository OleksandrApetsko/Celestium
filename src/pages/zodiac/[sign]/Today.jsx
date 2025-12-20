import { useParams } from "react-router-dom";
import { dailyHoroscopeData } from "../../../data/dailyHoroscopeData.js";

import HoroscopeContent from "../../../components/Horoscope/HoroscopeContent.jsx";
import ZodiacDescription from "../../../components/ZodiacDescription/ZodiacDescription.jsx";
import DayHeader from "../../../components/DailyHoroscope/DayHeader.jsx";
import DailyInsightCard from "../../../components/DailyHoroscope/DailyInsightCard.jsx";
import ActionCards from "../../../components/DailyHoroscope/ActionCards.jsx";
import ContextGrid from "../../../components/DailyHoroscope/ContextGrid.jsx";
import NextForecasts from "../../../components/DailyHoroscope/NextForecasts.jsx";

export default function Today() {
  const { sign } = useParams();
  const data = dailyHoroscopeData[sign];

  if (!data) {
    return (
      <section className="py-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Sign Not Found</h1>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16 md:py-24">
      <HoroscopeContent>

        {/* 1. ЗНАК + ОПИС */}
        <ZodiacDescription sign={sign} />

        {/* 2. DAILY HEADER */}
        <DayHeader sign={sign} />

        {/* 3. DAILY CONTENT */}
        <DailyInsightCard
          headline={data.headline}
          coreEnergy={data.coreEnergy}
        />

        <ActionCards focus={data.focus} />

        <ContextGrid
          mood={data.mood}
          focusLevel={data.focusLevel}
          riskLevel={data.riskLevel}
        />

        <NextForecasts />

      </HoroscopeContent>
    </section>
  );
}
