import { NavLink } from "react-router-dom";
import { menuItems } from "../../data/menuItems.js";
import { useState, useEffect } from "react";
import SearchInput from "../Search/SearchInput.jsx";

const horoscopeLinks = [
  { label: "Daily", path: "/#zodiac" },
  { label: "Weekly", path: "/horoscopes/weekly" },
  { label: "Monthly", path: "/horoscopes/monthly" },
  { label: "Yearly", path: "/horoscopes/yearly" }
];

export default function MobileMenu({ open, onClose }) {
  const [openHoroscope, setOpenHoroscope] = useState(false);

  useEffect(() => {
    if (!open) setOpenHoroscope(false);
  }, [open]);

  if (!open) return null;

  return (
    <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-xl">
      {/* TOP BAR — CLEAN */}
      <div className="relative h-14 border-b border-white/10">
        <button
          onClick={onClose}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-300 text-2xl hover:text-white transition"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* SEARCH — real */}
      <div className="px-6 pt-6">
        <SearchInput onNavigate={onClose} />
      </div>

      {/* NAVIGATION */}
      <nav className="py-8 px-6 space-y-6 text-center">
        {menuItems.map((item) => {
          if (item === "Horoscope") {
            return (
              <div key="Horoscope" className="space-y-4">
                <button
                  onClick={() => setOpenHoroscope((v) => !v)}
                  className="w-full text-lg text-white hover:text-yellow-400 transition"
                >
                  Horoscope
                </button>

                {openHoroscope && (
                  <div className="space-y-3">
                    {horoscopeLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={onClose}
                        className="block text-white/70 hover:text-yellow-400 transition"
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={onClose}
              className="block text-lg text-white hover:text-yellow-400 transition"
            >
              {item}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
