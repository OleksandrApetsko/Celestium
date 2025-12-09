import { insightData } from "./insightData.js";
import InsightCard from "./InsightCard.jsx";

export default function CosmicInsightsSection() {
  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Cosmic Insights
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mt-2">
            Discover Today’s Energies
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            A deeper understanding of how the stars shape your love life, career path,
            and personal energy.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insightData.map((item) => (
            <InsightCard
              key={item.key}
              title={item.title}
              description={item.description}
              iconKey={item.key}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
