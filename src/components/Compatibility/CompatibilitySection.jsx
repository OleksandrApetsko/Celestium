// src/components/Home/CompatibilitySection.jsx

import { Link } from "react-router-dom";
import { compatibilityHighlights } from "../../data/compatibilityHighlights.js";
import CompatibilityHighlightCard from "./CompatibilityHighlightCard.jsx";

export default function CompatibilitySection() {
  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-4">
            Compatibility
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-wide">
            Discover Your Cosmic Match
          </h2>

          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore how zodiac energies interact in relationships — from emotional
            dynamics to long-term potential.
          </p>
        </div>

        {/* VALUE BLOCKS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {compatibilityHighlights.map((item) => (
            <CompatibilityHighlightCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            to="/compatibility"
            className="
              inline-flex items-center justify-center
              rounded-xl
              bg-yellow-300 text-black
              px-12 py-4
              text-base font-semibold
              transition-all duration-300
              hover:brightness-110
              hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]
            "
          >
            Check Compatibility →
          </Link>
        </div>

      </div>
    </section>
  );
}
