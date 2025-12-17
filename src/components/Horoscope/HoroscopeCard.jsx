import { zodiacIcons } from "../../data/zodiacIcons.jsx";

const VARIANT_CONFIG = {
  daily: {
    description: (element) => (
      <>
        Today carries a strong{" "}
        <span className="text-yellow-300">{element}</span> influence.
        Stay aware of emotional signals and subtle shifts.
      </>
    ),
    cta: "Explore Today →"
  },
  weekly: {
    description: () => (
      <>
        Discover the key themes and emotional patterns shaping your week ahead.
      </>
    ),
    cta: "Explore This Week →"
  },
  monthly: {
    description: () => (
      <>
        Explore the dominant energies, challenges, and opportunities of the month.
      </>
    ),
    cta: "Explore This Month →"
  },
  yearly: {
    description: () => (
      <>
        Uncover long-term cycles influencing growth, purpose, and life direction.
      </>
    ),
    cta: "Explore This Year →"
  }
};

export default function HoroscopeCard({
  sign,
  dates,
  element,
  variant = "daily"
}) {
  const config = VARIANT_CONFIG[variant] || VARIANT_CONFIG.daily;

  return (
    <div
      className="
        group rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl
        p-6 transition-all duration-300
        hover:border-yellow-400/60
        hover:shadow-[0_0_25px_rgba(250,204,21,0.35)]
        hover:-translate-y-1
      "
    >
      {/* ICON */}
      <div className="flex justify-center mb-4">
        {zodiacIcons[sign]}
      </div>

      {/* SIGN */}
      <h3 className="text-lg font-medium text-white text-center capitalize">
        {sign}
      </h3>

      {/* DATES */}
      {dates && (
        <p className="text-white/50 text-xs text-center mt-1">
          {dates}
        </p>
      )}

      {/* DESCRIPTION */}
      <p className="mt-4 text-sm text-white/70 text-center leading-relaxed">
        {config.description(element)}
      </p>

      {/* CTA */}
      <div className="mt-5 text-center text-xs text-yellow-300 uppercase tracking-wider group-hover:text-white transition-colors">
        {config.cta}
      </div>
    </div>
  );
}
