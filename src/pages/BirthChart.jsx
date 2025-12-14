// src/pages/BirthChart.jsx

import { useEffect, useState } from "react";
import BirthChartForm from "../components/BirthChart/BirthChartForm.jsx";
import BirthChartReport from "../components/BirthChart/BirthChartReport.jsx";

export default function BirthChart() {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onGenerate = (payload) => {
    setChart(payload);
  };

  return (
    <section className="min-h-screen pt-40 pb-32 px-6 text-white relative">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1
          className="
            text-5xl md:text-6xl font-light tracking-[0.22em]
            text-yellow-300 drop-shadow-[0_0_28px_rgba(255,215,0,0.45)]
          "
        >
          BIRTH CHART
        </h1>

        <p className="mt-6 text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Enter your birth details to generate an identity preview and chart structure.
          Extended interpretation is available through Premium access.
        </p>

        <p className="mt-3 text-yellow-300/90 text-xs tracking-[0.35em] uppercase">
          Data-enhanced astrological insights • Crafted for clarity
        </p>
      </div>

      {/* FORM */}
      <BirthChartForm onGenerate={onGenerate} />

      {/* REPORT PREVIEW */}
      {chart && (
        <div className="mt-20">
          <BirthChartReport data={chart} />
        </div>
      )}
    </section>
  );
}
