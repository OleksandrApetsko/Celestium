import { useParams } from "react-router-dom";
import { dailyHoroscopeData } from "../../../data/dailyHoroscopeData.js";
import DayHeader from '../../../components/DailyHoroscope/DayHeader.jsx'
import DailyInsightCard from '../../../components/DailyHoroscope/DailyInsightCard.jsx'
import ActionCards from '../../../components/DailyHoroscope/ActionCards.jsx'
import ContextGrid from '../../../components/DailyHoroscope/ContextGrid.jsx'

export default function TodayHoroscopePage() {
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
      <div className="max-w-7xl mx-auto px-6">

        <DayHeader sign={sign} />

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

      </div>
    </section>
  );
}
