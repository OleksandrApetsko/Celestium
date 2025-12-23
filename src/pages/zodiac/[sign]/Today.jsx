import { useParams } from "react-router-dom";
import { dailyHoroscopeData } from "../../../data/horoscope/dailyHoroscopeData.js";

import HoroscopeContent from "../../../components/Horoscope/HoroscopeContent.jsx";
import ZodiacDescription from "../../../components/ZodiacDescription/ZodiacDescription.jsx";
import HoroscopeHeader from "../../../components/Horoscope/HoroscopeHeader.jsx";
import HoroscopeInsight from "../../../components/Horoscope/HoroscopeInsight.jsx";
import HoroscopeThemes from "../../../components/Horoscope/HoroscopeThemes.jsx";
import HoroscopeContext from "../../../components/Horoscope/HoroscopeContext.jsx";
import HoroscopeNext from "../../../components/Horoscope/HoroscopeNext.jsx";

export default function Today() {
  const { sign } = useParams();
  const data = dailyHoroscopeData[sign];

  if (!data) {
    return (
      <section className="py-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Daily Horoscope Not Found</h1>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16 md:py-24">
      <HoroscopeContent>

        {/* 1. SIGN CONTEXT */}
        <ZodiacDescription sign={sign} />

        {/* 2. PAGE HEADER */}
        <HoroscopeHeader label="Daily Horoscope" sign={sign} />

        {/* 3. CORE INSIGHT */}
        <HoroscopeInsight
          kicker="Daily Insight"
          headline={data.title}
          description={data.summary}
        />

        {/* 4. THEMES (IDENTICAL TO WEEKLY) */}
        <HoroscopeThemes themes={data.themes} />

        {/* 5. CONTEXT GRID (IDENTICAL STRUCTURE) */}
        <HoroscopeContext
          items={[
            ["Energy", data.context.energy],
            ["Focus", data.context.focus],
            ["Challenge", data.context.challenge]
          ]}
        />

        {/* 6. NEXT NAVIGATION */}
        <HoroscopeNext sign={sign} period="daily" />

      </HoroscopeContent>
    </section>
  );
}
