import { useEffect, useMemo, useState } from "react";

import BirthChartHeader from "../components/BirthChart/BirthChartHeader.jsx";
import BirthChartForm from "../components/BirthChart/BirthChartForm.jsx";
import BirthChartSunSummary from "../components/BirthChart/BirthChartSunSummary.jsx";
import BirthChartIdentityBlock from "../components/BirthChart/BirthChartIdentityBlock.jsx";
import BirthChartCorePlacements from "../components/BirthChart/BirthChartCorePlacements.jsx";
import BirthChartFull from "../components/BirthChart/BirthChartFull.jsx";

import HoroscopePaywall from "../components/Horoscope/HoroscopePaywall.jsx";
import HoroscopeNext from "../components/Horoscope/HoroscopeNext.jsx";

import { useAccess } from "../hooks/useAccess.js";

export default function BirthChart() {
  const [chart, setChart] = useState(null);
  const { hasAccess } = useAccess();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onGenerate = (payload) => {
    setChart(payload);
  };

  /**
   * Тимчасовий scope.
   * Використовується ТІЛЬКИ для access check.
   * На рендер paywall НЕ впливає.
   */
  const scope = useMemo(() => {
    if (!chart) return null;
    return "birth-chart";
  }, [chart]);

  const hasFullAccess = useMemo(() => {
    if (!scope) return false;
    return hasAccess("premiumBirthChart", scope);
  }, [hasAccess, scope]);

  return (
    <section className="min-h-screen pt-40 pb-32 text-white relative">
      {/* PAGE HEADER */}
      <BirthChartHeader />

      {/* FORM */}
      <BirthChartForm onGenerate={onGenerate} />

      {/* FREE CONTENT */}
      {chart && (
        <>
          <div className="mt-20">
            <BirthChartSunSummary data={chart} />
          </div>

          <div className="mt-20">
            <BirthChartIdentityBlock />
          </div>

          <div className="mt-20">
            <BirthChartCorePlacements />
          </div>
        </>
      )}

      {/* PAYWALL — ВАЖЛИВО: БЕЗ scope */}
      {chart && !hasFullAccess && (
        <div className="mt-20">
          <HoroscopePaywall period="birthChart" />
        </div>
      )}

      {/* PREMIUM */}
      {chart && hasFullAccess && (
        <div className="mt-20">
          <BirthChartFull />
        </div>
      )}

      {/* NAVIGATION */}
      <HoroscopeNext period="birthChart" />
    </section>
  );
}
