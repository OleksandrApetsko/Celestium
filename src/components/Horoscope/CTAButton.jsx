import { Link } from "react-router-dom";

export default function CTAButton({ to, label, variant }) {
  if (variant === "quiet") {
    return (
      <Link
        to={to}
        className="
          group flex items-center justify-center gap-2
          min-w-[180px]
          rounded-xl
          border border-yellow-300/40
          bg-black/40 backdrop-blur-xl
          px-5 py-3
          text-sm font-medium
          text-yellow-300
          transition-all duration-300
          hover:border-yellow-300/70
          hover:shadow-[0_0_18px_rgba(250,204,21,0.25)]
          hover:text-white
        "
      >
        <span>{label}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className="
        group inline-flex items-center justify-center
        rounded-xl
        border border-white/10
        bg-black/40
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
