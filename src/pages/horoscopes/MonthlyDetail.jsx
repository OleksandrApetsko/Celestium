import { useParams } from "react-router-dom";
import { monthlyHoroscopeData } from "../../data/monthlyHoroscopeData.js";

import HoroscopeContent from "../../components/Horoscope/HoroscopeContent.jsx";
import HoroscopeHeader from "../../components/Horoscope/HoroscopeHeader.jsx";
import HoroscopeInsight from "../../components/Horoscope/HoroscopeInsight.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";
import PremiumGate from "../../components/Premium/PremiumGate.jsx";

export default function MonthlyDetail() {
  const { sign } = useParams();
  const data = monthlyHoroscopeData[sign];

  if (!data) {
    return (
      <section className="py-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Monthly Horoscope Not Found</h1>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16 md:py-24">
      <HoroscopeContent>

        <HoroscopeHeader
          sign={sign}
          label="Monthly Horoscope"
          title={`${sign} — This Month`}
        />

        <HoroscopeInsight
          headline={data.title}
          description={data.summary}
        />

        <PremiumGate
          title="Unlock Your Full Monthly Horoscope"
          description="Get detailed monthly focus areas, emotional patterns, and timing insights for your zodiac sign."
          primaryCta="Unlock Monthly Horoscope"
        />

        <HoroscopeNext sign={sign} period="monthly" />

      </HoroscopeContent>
    </section>
  );
}
