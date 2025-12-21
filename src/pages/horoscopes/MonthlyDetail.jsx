import { useParams } from "react-router-dom";
import { monthlyHoroscopeData } from "../../data/monthlyHoroscopeData.js";

import HoroscopeContent from "../../components/Horoscope/HoroscopeContent.jsx";
import ZodiacDescription from "../../components/ZodiacDescription/ZodiacDescription.jsx";
import HoroscopeHeader from "../../components/Horoscope/HoroscopeHeader.jsx";
import HoroscopeInsight from "../../components/Horoscope/HoroscopeInsight.jsx";
import HoroscopeThemes from "../../components/Horoscope/HoroscopeThemes.jsx";
import HoroscopeContext from "../../components/Horoscope/HoroscopeContext.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";

import HoroscopePaywall from "../../components/Horoscope/HoroscopePaywall.jsx";
import HoroscopeFocusCards from "../../components/Horoscope/HoroscopeFocusCards.jsx";

import useAccessGuard from "../../hooks/useAccessGuard.js";

export default function MonthlyDetail() {
  const { sign } = useParams();
  const data = monthlyHoroscopeData[sign];

  const access = useAccessGuard({
    productKey: "monthlyHoroscope",
    sign,
  });

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

        {/* 1. SIGN */}
        <ZodiacDescription sign={sign} />

        {/* 2. HEADER */}
        <HoroscopeHeader label="Monthly Horoscope" sign={sign} />

        {/* 3. PREVIEW INSIGHT (ЗАВЖДИ Є) */}
        <HoroscopeInsight
          kicker="Monthly Insight"
          headline={data.title}
          description={data.summary}
        />

        {/* 4. THEMES (ЗАВЖДИ Є) */}
        {data.themes && <HoroscopeThemes themes={data.themes} />}

        {/* 5. CONTEXT (ЗАВЖДИ Є) */}
        <HoroscopeContext
          items={[
            ["Mood", data.context.mood],
            ["Focus", data.context.focusLevel],
            ["Risk", data.context.riskLevel],
          ]}
        />

        {/* 6. АБО PAYWALL, АБО FULL CONTENT */}
        {access.hasAccess ? (
          <>
            <HoroscopeInsight
              kicker={
                access.via === "subscription"
                  ? "Premium Monthly Guidance"
                  : "Monthly Horoscope Unlocked"
              }
              headline="How to Work With This Month"
              description="Below is your detailed monthly guidance — what to prioritize and what to avoid."
            />

            <HoroscopeFocusCards focus={data.focus} />
          </>
        ) : (
          <HoroscopePaywall period="monthly" sign={sign} />
        )}

        {/* 7. NEXT */}
        <HoroscopeNext sign={sign} period="monthly" />

      </HoroscopeContent>
    </section>
  );
}
