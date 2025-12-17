import { useParams } from "react-router-dom";
import { weeklyHoroscopeData } from "../../data/weeklyHoroscopeData.js";

import PeriodHeader from "./PeriodHeader.jsx";
import InsightCard from "./InsightCard.jsx";
import ThemesList from "./ThemesList.jsx";
import ContextGrid from "./ContextGrid.jsx";

export default function HoroscopePeriodPage() {
  const { sign } = useParams();
  const data = weeklyHoroscopeData[sign];

  if (!data) {
    return (
      <section className="py-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Sign Not Found</h1>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <PeriodHeader
          sign={sign}
          label="Weekly Horoscope"
          subtitle="This Week"
        />

        <InsightCard
          label="Weekly Insight"
          headline={data.headline}
          summary={data.summary}
        />

        <ThemesList themes={data.themes} />

        <ContextGrid
          energy={data.energy}
          emotions={data.emotions}
          challenge={data.challenge}
        />

      </div>
    </section>
  );
}
