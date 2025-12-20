import { NavLink, useLocation } from "react-router-dom";
import { menuItems } from "../../data/menuItems.js";

const horoscopeLinks = [
  { label: "Daily", path: "/#zodiac" },
  { label: "Weekly", path: "/horoscopes/weekly" },
  { label: "Monthly", path: "/horoscopes/monthly" },
  { label: "Yearly", path: "/horoscopes/yearly" }
];

export default function DesktopMenu() {
  const location = useLocation();

  // Horoscope active if we are on any horoscope-related page
  const isHoroscopeActive =
    location.pathname.startsWith("/horoscopes") ||
    location.hash === "#zodiac";

  return (
    <ul className="hidden md:flex space-x-10 text-lg font-light items-center">
      {menuItems.map((item) => {
        if (item === "Horoscope") {
          return (
            <li
              key="Horoscope"
              className="relative group"
            >
              {/* TRIGGER */}
              <NavLink
                to="/#zodiac"
                className={`
                  transition cursor-pointer
                  ${isHoroscopeActive
                  ? "text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1"
                  : "text-white hover:text-yellow-400"}
                `}
              >
                Horoscope
              </NavLink>

              {/* DROPDOWN */}
              <div
                className="
                  absolute left-1/2 top-full -translate-x-1/2 pt-3
                  hidden group-hover:block
                  z-50
                "
              >
                <div
                  className="
                    bg-black/90 backdrop-blur-xl border border-white/10
                    rounded-xl px-6 py-4 space-y-3 text-sm min-w-[180px]
                    shadow-lg
                  "
                >
                  {horoscopeLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className="block text-white/80 hover:text-yellow-400 transition whitespace-nowrap"
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </li>
          );
        }

        return (
          <li key={item}>
            <NavLink
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `transition cursor-pointer ${
                  isActive
                    ? "text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1"
                    : "text-white hover:text-yellow-400"
                }`
              }
            >
              {item}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
