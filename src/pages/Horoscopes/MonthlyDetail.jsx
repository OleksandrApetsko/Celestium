import { useParams } from "react-router-dom";
import { monthlyHoroscopeData } from "../../data/horoscope/monthlyHoroscopeData.js";
import { useAccess } from "../../hooks/useAccess.js";

import HoroscopeContent from "../../components/Horoscope/HoroscopeContent.jsx";
import ZodiacDescription from "../../components/Horoscope/ZodiacDescription.jsx";
import HoroscopeHeader from "../../components/Horoscope/HoroscopeHeader.jsx";
import HoroscopeInsight from "../../components/Horoscope/HoroscopeInsight.jsx";
import HoroscopeThemes from "../../components/Horoscope/HoroscopeThemes.jsx";
import HoroscopeContext from "../../components/Horoscope/HoroscopeContext.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";
import HoroscopePaywall from "../../components/Horoscope/HoroscopePaywall.jsx";

export default function MonthlyDetail() {
  const { sign } = useParams();
  const { hasAccess } = useAccess();

  const data = monthlyHoroscopeData[sign];
  if (!data) {
    return (
      <section className="pt-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Monthly Horoscope Not Found</h1>
      </section>
    );
  }

  const hasFullAccess = hasAccess("monthlyHoroscope", sign);

  const timelineText = `${data.timeline.early} ${data.timeline.mid} ${data.timeline.late}`;
  const areasText = `${data.areas.work} ${data.areas.relationships} ${data.areas.emotions}`;

  return (
    <section className="relative z-10 pt-16 md:pt-24">
      <HoroscopeContent>

        <ZodiacDescription sign={sign} />
        <HoroscopeHeader label="Monthly Horoscope" sign={sign} />

        <HoroscopeInsight
          kicker="Monthly Insight"
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

        {!hasFullAccess && (
          <HoroscopePaywall period="monthly" sign={sign} />
        )}

        {hasFullAccess && (
          <>
            <HoroscopeInsight
              kicker="Timeline"
              headline="Month Breakdown"
              description={timelineText}
            />
            <HoroscopeInsight
              kicker="Life Areas"
              headline="Key Focus Areas"
              description={areasText}
            />
            <HoroscopeInsight
              kicker="What to Watch"
              headline="Challenges"
              description={data.challenges.join(" • ")}
            />
            <HoroscopeInsight
              kicker="Where Growth Happens"
              headline="Opportunities"
              description={data.opportunities.join(" • ")}
            />
            <HoroscopeInsight
              kicker="Strategic Advice"
              headline="Guidance"
              description={data.advice.join(" • ")}
            />
          </>
        )}

        <HoroscopeNext sign={sign} period="monthly" />

      </HoroscopeContent>
    </section>
  );
}
