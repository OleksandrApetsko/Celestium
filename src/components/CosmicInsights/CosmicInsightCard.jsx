// src/components/CosmicInsights/CosmicInsightCard.jsx

import { Link } from "react-router-dom";
import { insightIcons } from "./insightIcons.jsx";

export default function CosmicInsightCard({ title, description, iconKey, link }) {
  const Icon = insightIcons[iconKey];

  return (
    <div
      className="
        group p-7 rounded-2xl
        bg-black/30 backdrop-blur-xl border border-white/10
        transition-all duration-300
        hover:border-yellow-400/60
        hover:shadow-[0_0_22px_rgba(250,204,21,0.35)]
        hover:-translate-y-1
        flex flex-col
      "
    >
      {/* ICON */}
      <div className="mb-5 flex justify-center">
        <div
          className="
            rounded-full p-4
            bg-yellow-400/10 border border-yellow-400/40
            group-hover:bg-yellow-400/15
            transition
          "
        >
          {Icon}
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-xl text-white font-medium mb-3 text-center">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-white/70 leading-relaxed text-center flex-grow">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-6 text-center">
        <Link
          to={link}
          className="
            text-sm tracking-wide text-yellow-300
            hover:text-white transition-colors
          "
        >
          Explore →
        </Link>
      </div>
    </div>
  );
}
