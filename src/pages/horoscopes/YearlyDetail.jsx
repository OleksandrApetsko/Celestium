import { useParams } from "react-router-dom";
import { yearlyHoroscopeData } from "../../data/yearlyHoroscopeData.js";

import HoroscopeContent from "../../components/Horoscope/HoroscopeContent.jsx";
import ZodiacDescription from "../../components/ZodiacDescription/ZodiacDescription.jsx";
import HoroscopeHeader from "../../components/Horoscope/HoroscopeHeader.jsx";
import HoroscopeInsight from "../../components/Horoscope/HoroscopeInsight.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";
import PremiumGate from "../../components/Premium/PremiumGate.jsx";

export default function YearlyDetail() {
  const { sign } = useParams();
  const data = yearlyHoroscopeData[sign];

  if (!data) {
    return (
      <section className="py-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Yearly Horoscope Not Found</h1>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16 md:py-24">
      <HoroscopeContent>

        <ZodiacDescription sign={sign} />

        <HoroscopeHeader label="Yearly Horoscope" sign={sign} />

        <HoroscopeInsight
          kicker="Yearly Insight"
          headline={data.title}
          description={data.summary}
        />

        <PremiumGate
          title="Unlock Your Full Yearly Horoscope"
          description="Access long-term cycles, major turning points, and strategic life guidance."
          primaryCta="Unlock Yearly Horoscope"
        />

        <HoroscopeNext sign={sign} period="yearly" />

      </HoroscopeContent>
    </section>
  );
}
