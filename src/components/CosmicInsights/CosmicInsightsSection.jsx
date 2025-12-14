// src/components/CosmicInsights/CosmicInsightsSection.jsx

import { insightData } from "./insightData.js";
import InsightCard from "./InsightCard.jsx";

export default function CosmicInsightsSection() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Cosmic Insights
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mt-2">
            Today’s Cosmic Focus
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Navigate today’s emotional, relational and energetic themes.
            Each insight leads you deeper into your personal cosmic map.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightData.map((item) => (
            <InsightCard
              key={item.key}
              title={item.title}
              description={item.description}
              iconKey={item.key}
              link={item.link}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
