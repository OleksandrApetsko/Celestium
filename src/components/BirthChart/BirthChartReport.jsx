// src/components/BirthChart/BirthChartReport.jsx

import { sunSignMeta } from "../../data/sunSigns.js";
import { getSunSign } from "../../utils/getSunSign.js";

import SunSummary from "./SunSummary.jsx";
import CorePattern from "./CorePattern.jsx";
import NatalWheel from "./NatalWheel.jsx";
import BlurPaywall from "./BlurPaywall.jsx";

export default function BirthChartReport({ data }) {
  const { date, time, location } = data;

  const sunSign = getSunSign(date);
  const meta = sunSignMeta[sunSign];

  return (
    <div className="max-w-5xl mx-auto">

      {/* TOP INFO */}
      <div className="text-center">
        <p className="text-white/60 text-sm">
          {date} • {time} • {location}
        </p>

        <h2 className="mt-6 text-3xl md:text-4xl text-yellow-300 tracking-[0.18em]">
          BIRTH BLUEPRINT PREVIEW
        </h2>

        <p className="mt-4 text-white/70 text-sm md:text-base max-w-2xl mx-auto">
          A high-level look at your core identity. Full interpretation available in Premium.
        </p>
      </div>

      {/* SUN + WHEEL */}
      <div className="mt-14 grid md:grid-cols-2 gap-10 items-start">
        <SunSummary sunSign={sunSign} meta={meta} />

        <div className="md:pl-4">
          <NatalWheel />
          <p className="mt-5 text-white/60 text-xs text-center max-w-sm mx-auto">
            In the full Natal Chart, each sector unlocks career paths,
            emotional patterns, timing cycles and relationship dynamics.
          </p>
        </div>
      </div>

      <CorePattern sunSign={sunSign} meta={meta} />

      <BlurPaywall
        title="Deeper Natal Layers — Premium"
        description="
          Unlock planets, houses, aspects, emotional blueprint, karmic themes
          and relationship polarity patterns — all based on your exact birth chart.
        "
        height="340px"
      />
    </div>
  );
}
