import { useParams } from "react-router-dom";
import { yearlyHoroscopeData } from "../../data/yearlyHoroscopeData.js";

import HoroscopeContent from "../../components/Horoscope/HoroscopeContent.jsx";
import ZodiacDescription from "../../components/ZodiacDescription/ZodiacDescription.jsx";
import HoroscopeHeader from "../../components/Horoscope/HoroscopeHeader.jsx";
import HoroscopeInsight from "../../components/Horoscope/HoroscopeInsight.jsx";
import HoroscopeThemes from "../../components/Horoscope/HoroscopeThemes.jsx";
import HoroscopeContext from "../../components/Horoscope/HoroscopeContext.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";
import HoroscopePaywall from "../../components/Horoscope/HoroscopePaywall.jsx";

import useAccessGuard from "../../hooks/useAccessGuard.js";

export default function YearlyDetail() {
  const { sign } = useParams();
  const data = yearlyHoroscopeData[sign];

  const access = useAccessGuard({
    productKey: "yearlyHoroscope",
    sign,
  });

  if (!data) {
    return (
      <section className="py-20 text-center text-white">
        <h1 className="text-3xl font-semibold">
          Yearly Horoscope Not Found
        </h1>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-16 md:py-24">
      <HoroscopeContent>

        {/* 1. SIGN */}
        <ZodiacDescription sign={sign} />

        {/* 2. HEADER */}
        <HoroscopeHeader label="Yearly Horoscope" sign={sign} />

        {/* 3. PREVIEW INSIGHT */}
        <HoroscopeInsight
          kicker="Yearly Insight"
          headline={data.title}
          description={data.summary}
        />

        {/* 4. THEMES */}
        {data.themes && <HoroscopeThemes themes={data.themes} />}

        {/* 5. CONTEXT */}
        <HoroscopeContext
          items={[
            ["Energy", data.context.energy],
            ["Focus", data.context.focus],
            ["Challenge", data.context.challenge],
          ]}
        />

        {/* 6. PAYWALL або FULL */}
        {access.hasAccess ? (
          <HoroscopeInsight
            kicker={
              access.via === "subscription"
                ? "Premium Yearly Overview"
                : "Yearly Horoscope Unlocked"
            }
            headline="Your Long-Term Direction"
            description={data.premium.message}
          />
        ) : (
          <HoroscopePaywall period="yearly" sign={sign} />
        )}

        {/* 7. NEXT */}
        <HoroscopeNext sign={sign} period="yearly" />

      </HoroscopeContent>
    </section>
  );
}
