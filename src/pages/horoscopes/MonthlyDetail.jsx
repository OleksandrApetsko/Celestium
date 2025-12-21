// src/pages/horoscopes/MonthlyDetail.jsx

import { useParams } from "react-router-dom";
import { monthlyHoroscopeData } from "../../data/monthlyHoroscopeData.js";
import useAccessGuard from "../../hooks/useAccessGuard.js";

import HoroscopeContent from "../../components/Horoscope/HoroscopeContent.jsx";
import ZodiacDescription from "../../components/ZodiacDescription/ZodiacDescription.jsx";
import HoroscopeHeader from "../../components/Horoscope/HoroscopeHeader.jsx";
import HoroscopeInsight from "../../components/Horoscope/HoroscopeInsight.jsx";
import HoroscopeThemes from "../../components/Horoscope/HoroscopeThemes.jsx";
import HoroscopeContext from "../../components/Horoscope/HoroscopeContext.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";
import HoroscopePaywall from "../../components/Horoscope/HoroscopePaywall.jsx";

export default function MonthlyDetail() {
  const { sign } = useParams();
  const data = monthlyHoroscopeData[sign];

  const access = useAccessGuard({
    productKey: "monthlyHoroscope",
    sign
  });

  if (!data) {
    return (
      <section className="py-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Monthly Horoscope Not Found</h1>
      </section>
    );
  }

  const timelineText = `${data.timeline.early} ${data.timeline.mid} ${data.timeline.late}`;
  const areasText = `${data.areas.work} ${data.areas.relationships} ${data.areas.emotions}`;

  return (
    <section className="relative z-10 py-16 md:py-24">
      <HoroscopeContent>

        {/* 1) SIGN + DESCRIPTION */}
        <ZodiacDescription sign={sign} />

        {/* 2) HEADER */}
        <HoroscopeHeader label="Monthly Horoscope" sign={sign} />

        {/* 3) CORE INSIGHT (preview, always) */}
        <HoroscopeInsight
          kicker="Monthly Insight"
          headline={data.title}
          description={data.summary}
        />

        {access.hasAccess ? (
          <>
            {/* FULL: Timeline */}
            <HoroscopeInsight
              kicker="Timeline"
              headline="Month Breakdown"
              description={timelineText}
            />

            {/* FULL: Life Areas */}
            <HoroscopeInsight
              kicker="Life Areas"
              headline="Key Focus Areas"
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

            {/* FULL: Strategic Advice */}
            <HoroscopeInsight
              kicker={access.via === "subscription" ? "Premium Guidance" : "Unlocked Guidance"}
              headline="Strategic Advice"
              description={data.advice.join(" • ")}
            />
          </>
        ) : (
          <HoroscopePaywall period="monthly" sign={sign} />
        )}

        {/* 4) NEXT */}
        <HoroscopeNext sign={sign} period="monthly" />

      </HoroscopeContent>
    </section>
  );
}
