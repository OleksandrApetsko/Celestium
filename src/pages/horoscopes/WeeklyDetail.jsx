import { useParams } from "react-router-dom";

import HoroscopeContent from "../../components/Horoscope/HoroscopeContent.jsx";
import HoroscopeHeader from "../../components/Horoscope/HoroscopeHeader.jsx";
import HoroscopeInsight from "../../components/Horoscope/HoroscopeInsight.jsx";
import HoroscopeThemes from "../../components/Horoscope/HoroscopeThemes.jsx";
import HoroscopeContext from "../../components/Horoscope/HoroscopeContext.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";

import { weeklyHoroscopeData } from "../../data/weeklyHoroscopeData.js";

export default function WeeklyDetail() {
  const { sign } = useParams();
  const data = weeklyHoroscopeData[sign];

  if (!data) {
    return (
      <section className="py-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Weekly Horoscope Not Found</h1>
      </section>
    );
  }

  const { title, summary, themes, context } = data;

  return (
    <section className="relative z-10 py-16 md:py-24">
      <HoroscopeContent>

        <HoroscopeHeader
          sign={sign}
          label="Weekly Horoscope"
          title={`${sign} — This Week`}
        />

        <HoroscopeInsight headline={title} description={summary} />

        <HoroscopeThemes themes={themes} />

        <HoroscopeContext
          energy={context.energy}
          focus={context.focus}
          challenge={context.challenge}
        />

        <HoroscopeNext sign={sign} period="weekly" />

      </HoroscopeContent>
    </section>
  );
}
