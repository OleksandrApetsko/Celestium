import { insightIcons } from "./insightIcons.jsx";

export default function InsightCard({ title, description, iconKey }) {
  const Icon = insightIcons[iconKey];

  return (
    <div
      className="
        group p-6 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10
        transition-all duration-300
        hover:border-yellow-400/60 hover:shadow-[0_0_18px_rgba(250,204,21,0.3)]
        hover:-translate-y-1
      "
    >
      {/* ICON */}
      <div className="mb-4 flex justify-center">
        <div className="rounded-full bg-yellow-400/10 border border-yellow-400/40 p-3 group-hover:border-yellow-300 group-hover:bg-yellow-400/15 transition-colors">
          {Icon}
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-xl text-white font-medium mb-2 text-center">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-white/70 leading-relaxed text-center">
        {description}
      </p>

      {/* BUTTON */}
      <div className="mt-4 text-center">
        <button
          className="
            text-sm text-yellow-300 hover:text-white transition-colors
          "
        >
          Explore →
        </button>
      </div>
    </div>
  );
}
