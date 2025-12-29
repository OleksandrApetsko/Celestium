import { useParams } from "react-router-dom";
import { weeklyHoroscopeData } from "../../data/horoscope/weeklyHoroscopeData.js";

import HoroscopeContent from "../../components/Horoscope/HoroscopeContent.jsx";
import ZodiacDescription from "../../components/Horoscope/ZodiacDescription.jsx";
import HoroscopeHeader from "../../components/Horoscope/HoroscopeHeader.jsx";
import HoroscopeInsight from "../../components/Horoscope/HoroscopeInsight.jsx";
import HoroscopeThemes from "../../components/Horoscope/HoroscopeThemes.jsx";
import HoroscopeContext from "../../components/Horoscope/HoroscopeContext.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";

export default function WeeklyDetail() {
  const { sign } = useParams();
  const data = weeklyHoroscopeData[sign];

  if (!data) {
    return (
      <section className="pt-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Weekly Horoscope Not Found</h1>
      </section>
    );
  }

  return (
    <section className="relative z-10 pt-16 md:pt-24">
      <HoroscopeContent>

        <ZodiacDescription sign={sign} />
        <HoroscopeHeader label="Weekly Horoscope" sign={sign} />

        <HoroscopeInsight
          kicker="Weekly Insight"
          headline={data.title}
          description={data.summary}
        />

        <HoroscopeThemes themes={data.themes} />

        <HoroscopeContext
          items={[
            ["Energy", data.context.energy],
            ["Focus", data.context.focus],
            ["Challenge", data.context.challenge]
          ]}
        />

        <HoroscopeNext sign={sign} period="weekly" />

      </HoroscopeContent>
    </section>
  );
}
