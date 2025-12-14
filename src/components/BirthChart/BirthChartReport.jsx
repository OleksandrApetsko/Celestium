// src/components/BirthChart/BirthChartReport.jsx

import { sunSignMeta } from "../../data/sunSigns.js";
import { getSunSignFromDateString } from "../../utils/getSunSignFromDateString.js";

import SunSummary from "./SunSummary.jsx";
import NatalWheel from "./NatalWheel.jsx";
import CorePatternTease from "./CorePatternTease.jsx";
import BlurPaywall from "./BlurPaywall.jsx";

export default function BirthChartReport({ data }) {
  const { date, time, location } = data;

  const sunSign = getSunSignFromDateString(date);
  const meta = sunSignMeta[sunSign];

  return (
    <div className="max-w-5xl mx-auto">
      {/* TOP LINE */}
      <div className="text-center">
        <p className="text-white/60 text-sm">
          {date} • {time} • {location}
        </p>

        <h2 className="mt-6 text-3xl md:text-4xl text-yellow-300 tracking-[0.18em]">
          BIRTH BLUEPRINT PREVIEW
        </h2>

        <p className="mt-4 text-white/70 text-sm md:text-base max-w-2xl mx-auto">
          A focused identity snapshot and chart structure preview. Full interpretation is available in the extended report.
        </p>
      </div>

      {/* SUN + WHEEL — PERFECTLY EQUAL */}
      <div className="mt-14 grid md:grid-cols-2 gap-10 items-stretch">

        {/* CARD 1 */}
        <div
          className="
      p-8 rounded-2xl
      bg-black/40 border border-white/10
      backdrop-blur-xl
      h-full flex
    "
        >
          <SunSummary sunSign={sunSign} meta={meta} />
        </div>

        {/* CARD 2 */}
        <div
          className="
      p-8 rounded-2xl
      bg-black/40 border border-white/10
      backdrop-blur-xl
      h-full flex flex-col justify-between
    "
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-4 text-center">
              Chart Structure Preview
            </p>

            <NatalWheel />
          </div>

          <p className="mt-6 text-white/60 text-xs text-center max-w-sm mx-auto">
            The extended report unlocks planetary placements, houses, aspects,
            relationship polarity and timing cycles.
          </p>
        </div>

      </div>


      <CorePatternTease />

      {/* CTA CARD → /birth-chart/full */}
      <BlurPaywall
        title="Deeper Natal Layers — Premium"
        description="Unlock planets, houses, aspects, emotional blueprint, karmic themes and long-range cycles — mapped to your birth moment."
        height="340px"
        to="/birth-chart/full"
        linkState={{ chart: data }}
        ctaLabel="See Full Natal Report"
      />
    </div>
  );
}
