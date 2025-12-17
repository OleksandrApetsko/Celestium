import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ open, onClose }) {
  const [horoscopeOpen, setHoroscopeOpen] = useState(false);

  if (!open) return null;

  return (
    <div
      className="
        fixed top-[140px] left-0 w-full
        md:hidden
        bg-black/95 backdrop-blur-xl
        border-t border-white/10
        z-[60]
      "
    >
      <ul className="flex flex-col text-center text-lg space-y-4 py-6">

        <NavLink
          to="/"
          onClick={onClose}
          className="text-white hover:text-yellow-400 transition"
        >
          Home
        </NavLink>

        {/* HOROSCOPE */}
        <button
          onClick={() => setHoroscopeOpen(!horoscopeOpen)}
          className="text-white hover:text-yellow-400 transition"
        >
          Horoscope
        </button>

        {horoscopeOpen && (
          <div className="space-y-3 text-sm">
            <NavLink
              to="/#zodiac"
              onClick={onClose}
              className="block text-white/80 hover:text-yellow-400"
            >
              Daily
            </NavLink>

            <NavLink
              to="/horoscopes/weekly"
              onClick={onClose}
              className="block text-white/80 hover:text-yellow-400"
            >
              Weekly
            </NavLink>

            <NavLink
              to="/horoscopes/monthly"
              onClick={onClose}
              className="block text-white/80 hover:text-yellow-400"
            >
              Monthly
            </NavLink>

            <NavLink
              to="/horoscopes/yearly"
              onClick={onClose}
              className="block text-white/80 hover:text-yellow-400"
            >
              Yearly
            </NavLink>
          </div>
        )}

        <NavLink
          to="/compatibility"
          onClick={onClose}
          className="text-white hover:text-yellow-400"
        >
          Compatibility
        </NavLink>

        <NavLink
          to="/birth-chart"
          onClick={onClose}
          className="text-white hover:text-yellow-400"
        >
          Birth Chart
        </NavLink>

        <NavLink
          to="/blog"
          onClick={onClose}
          className="text-white hover:text-yellow-400"
        >
          Blog
        </NavLink>

        <NavLink
          to="/about"
          onClick={onClose}
          className="text-white hover:text-yellow-400"
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          onClick={onClose}
          className="text-white hover:text-yellow-400"
        >
          Contact
        </NavLink>
      </ul>
    </div>
  );
}
