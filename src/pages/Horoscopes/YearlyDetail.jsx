import { useParams } from "react-router-dom";
import { yearlyHoroscopeData } from "../../data/horoscope/yearlyHoroscopeData.js";
import { useAccess } from "../../hooks/useAccess.js";

import HoroscopeContent from "../../components/Horoscope/HoroscopeContent.jsx";
import ZodiacDescription from "../../components/Horoscope/ZodiacDescription.jsx";
import HoroscopeHeader from "../../components/Horoscope/HoroscopeHeader.jsx";
import HoroscopeInsight from "../../components/Horoscope/HoroscopeInsight.jsx";
import HoroscopeThemes from "../../components/Horoscope/HoroscopeThemes.jsx";
import HoroscopeContext from "../../components/Horoscope/HoroscopeContext.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";
import HoroscopePaywall from "../../components/Horoscope/HoroscopePaywall.jsx";

export default function YearlyDetail() {
  const { sign } = useParams();
  const { hasAccess } = useAccess();

  const data = yearlyHoroscopeData[sign];
  if (!data) {
    return (
      <section className="pt-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Yearly Horoscope Not Found</h1>
      </section>
    );
  }

  const hasFullAccess = hasAccess("yearlyHoroscope", sign);

  const timelineText = `${data.timeline.firstHalf} ${data.timeline.secondHalf}`;
  const areasText = `${data.areas.work} ${data.areas.relationships} ${data.areas.emotions}`;

  return (
    <section className="relative z-10 pt-16 md:pt-24">
      <HoroscopeContent>

        <ZodiacDescription sign={sign} />
        <HoroscopeHeader label="Yearly Horoscope" sign={sign} />

        <HoroscopeInsight
          kicker="Yearly Overview"
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
          <HoroscopePaywall period="yearly" sign={sign} />
        )}

        {hasFullAccess && (
          <>
            <HoroscopeInsight
              kicker="Timeline"
              headline="Year Progression"
              description={timelineText}
            />
            <HoroscopeInsight
              kicker="Life Areas"
              headline="Key Areas of Growth"
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
              kicker="Strategic Direction"
              headline="Your Long-Term Direction"
              description={data.advice.join(" • ")}
            />
            {data.premium?.message && (
              <HoroscopeInsight
                kicker="Deep Year Insight"
                headline="Premium Perspective"
                description={data.premium.message}
              />
            )}
          </>
        )}

        <HoroscopeNext sign={sign} period="yearly" />

      </HoroscopeContent>
    </section>
  );
}
