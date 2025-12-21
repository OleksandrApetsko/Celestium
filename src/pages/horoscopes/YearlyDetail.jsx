// src/pages/horoscopes/YearlyDetail.jsx

import { useParams } from "react-router-dom";
import { yearlyHoroscopeData } from "../../data/yearlyHoroscopeData.js";
import useAccessGuard from "../../hooks/useAccessGuard.js";

import HoroscopeContent from "../../components/Horoscope/HoroscopeContent.jsx";
import ZodiacDescription from "../../components/ZodiacDescription/ZodiacDescription.jsx";
import HoroscopeHeader from "../../components/Horoscope/HoroscopeHeader.jsx";
import HoroscopeInsight from "../../components/Horoscope/HoroscopeInsight.jsx";
import HoroscopeThemes from "../../components/Horoscope/HoroscopeThemes.jsx";
import HoroscopeContext from "../../components/Horoscope/HoroscopeContext.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";
import HoroscopePaywall from "../../components/Horoscope/HoroscopePaywall.jsx";

export default function YearlyDetail() {
  const { sign } = useParams();
  const data = yearlyHoroscopeData[sign];

  const access = useAccessGuard({
    productKey: "yearlyHoroscope",
    sign
  });

  if (!data) {
    return (
      <section className="py-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Yearly Horoscope Not Found</h1>
      </section>
    );
  }

  const timelineText = `${data.timeline.firstHalf} ${data.timeline.secondHalf}`;
  const areasText = `${data.areas.work} ${data.areas.relationships} ${data.areas.emotions}`;

  return (
    <section className="relative z-10 py-16 md:py-24">
      <HoroscopeContent>

        {/* 1) SIGN + DESCRIPTION */}
        <ZodiacDescription sign={sign} />

        {/* 2) HEADER */}
        <HoroscopeHeader label="Yearly Horoscope" sign={sign} />

        {/* 3) CORE INSIGHT (preview, always) */}
        <HoroscopeInsight
          kicker="Yearly Overview"
          headline={data.title}
          description={data.summary}
        />

        {access.hasAccess ? (
          <>
            {/* FULL: Timeline */}
            <HoroscopeInsight
              kicker="Timeline"
              headline="Year Progression"
              description={timelineText}
            />

            {/* FULL: Life Areas */}
            <HoroscopeInsight
              kicker="Life Areas"
              headline="Key Areas of Growth"
              description={areasText}
            />

            {/* FULL: Themes */}
            <HoroscopeThemes themes={data.themes} />

            {/* FULL: Context */}
            <HoroscopeContext
              items={[
                ["Energy", data.context.energy],
                ["Focus", data.context.focus],
                ["Challenge", data.context.challenge]
              ]}
            />

            {/* FULL: Challenges & Opportunities */}
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

            {/* FULL: Strategic Advice + Premium message */}
            <HoroscopeInsight
              kicker={access.via === "subscription" ? "Premium Direction" : "Unlocked Direction"}
              headline="Strategic Direction"
              description={data.advice.join(" • ")}
            />

            <HoroscopeInsight
              kicker="Deep Year Insight"
              headline="Your Long-Term Direction"
              description={data.premium?.message}
            />
          </>
        ) : (
          <HoroscopePaywall period="yearly" sign={sign} />
        )}

        {/* 4) NEXT */}
        <HoroscopeNext sign={sign} period="yearly" />

      </HoroscopeContent>
    </section>
  );
}
