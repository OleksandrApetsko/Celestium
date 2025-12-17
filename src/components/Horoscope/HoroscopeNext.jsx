import { Link } from "react-router-dom";
import { horoscopeNavigation } from "../../data/horoscopeNavigation.js";

function CTAButton({ to, label }) {
  return (
    <Link
      to={to}
      className="
        group inline-flex items-center justify-center
        rounded-xl border border-white/10 bg-black/40
        px-5 py-3
        text-sm font-medium
        text-yellow-300
        transition-all duration-300
        hover:border-yellow-300/60
        hover:shadow-[0_0_22px_rgba(250,204,21,0.22)]
        hover:-translate-y-[1px]
        hover:text-white
      "
    >
      <span>{label}</span>
      <span className="ml-2 transition-colors group-hover:text-white">→</span>
    </Link>
  );
}

export default function HoroscopeNext({ sign, period }) {
  const config = horoscopeNavigation[period];

  if (!config) return null;

  return (
    <div className="w-full mt-24">
      <div className="rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 p-10 text-center">

        <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
          {config.kicker}
        </p>

        <h3 className="text-2xl sm:text-3xl font-medium text-white mb-8">
          {config.title}
        </h3>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          {config.links(sign).map(link => (
            <CTAButton
              key={link.id}
              to={link.to}
              label={link.label}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
