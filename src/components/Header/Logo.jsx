import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 select-none cursor-pointer">

      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-yellow-300 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <circle cx="50" cy="50" r="30" />
        <line x1="50" y1="15" x2="50" y2="5" />
        <line x1="50" y1="95" x2="50" y2="85" />
        <line x1="15" y1="50" x2="5" y2="50" />
        <line x1="95" y1="50" x2="85" y2="50" />
      </svg>

      <span className="text-yellow-300 font-astro tracking-wide text-3xl sm:text-4xl drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">
        Celestium
      </span>
    </Link>
  );
}
