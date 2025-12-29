import BirthChartHeader from "../components/BirthChart/BirthChartHeader.jsx";
import BirthChartForm from "../components/BirthChart/BirthChartForm.jsx";
import BirthChartSunSummary from "../components/BirthChart/BirthChartSunSummary.jsx";
import BirthChartIdentityBlock from "../components/BirthChart/BirthChartIdentityBlock.jsx";
import BirthChartCorePlacements from "../components/BirthChart/BirthChartCorePlacements.jsx";
import BirthChartFull from "../components/BirthChart/BirthChartFull.jsx";

import HoroscopePaywall from "../components/Horoscope/HoroscopePaywall.jsx";
import HoroscopeNext from "../components/Horoscope/HoroscopeNext.jsx";

import useBirthChartPage from "../hooks/useBirthChartPage.js";

export default function BirthChart() {
  const { chart, onGenerate, hasFullAccess } = useBirthChartPage();

  return (
    <section className="pt-40 text-white relative">
      {/* HEADER */}
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

      {/* PAYWALL */}
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

      <HoroscopeNext period="birthChart" />
    </section>
  );
}
