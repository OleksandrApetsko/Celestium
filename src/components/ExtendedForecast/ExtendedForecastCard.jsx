import { Link } from "react-router-dom";

export default function ExtendedForecastCard({ title, description, cta, link }) {
  return (
    <Link to={link} className="group">
      <div
        className="
          h-full rounded-2xl
          bg-black/30 backdrop-blur-xl
          border border-white/10
          p-8 flex flex-col
          transition-all duration-300 ease-out
          group-hover:border-yellow-400/60
          group-hover:shadow-[0_0_28px_rgba(250,204,21,0.35)]
          group-hover:-translate-y-1
        "
      >
        <h3 className="text-xl font-medium text-white mb-4">
          {title}
        </h3>

        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8">
          {description}
        </p>

        <span
          className="
            mt-auto text-sm font-medium
            text-yellow-300
            transition-colors duration-300
            group-hover:text-white
          "
        >
          {cta} →
        </span>
      </div>
    </Link>
  );
}
