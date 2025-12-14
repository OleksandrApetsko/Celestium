// src/pages/BirthChart.jsx

import { useState } from "react";
import BirthChartForm from "../components/BirthChart/BirthChartForm.jsx";
import BirthChartReport from "../components/BirthChart/BirthChartReport.jsx";

export default function BirthChart() {
  const [data, setData] = useState(null);

  return (
    <section className="min-h-screen pt-40 pb-32 px-6 text-white">

      {/* TOP HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="
          text-5xl md:text-6xl font-light tracking-[0.22em]
          text-yellow-300 drop-shadow-[0_0_28px_rgba(255,215,0,0.45)]
        ">
          BIRTH CHART
        </h1>

        <p className="text-white/70 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          Your birth chart reveals the energetic architecture you were born with —
          identity, emotional patterns, intuition, timing cycles and relationship dynamics.
          Enter your details to unlock your cosmic blueprint.
        </p>
      </div>

      {/* FORM */}
      {!data && (
        <div className="max-w-xl mx-auto">
          <BirthChartForm onGenerate={setData} />
        </div>
      )}

      {/* REPORT */}
      {data && (
        <div className="max-w-5xl mx-auto mt-24">
          <BirthChartReport data={data} />
        </div>
      )}

    </section>
  );
}
