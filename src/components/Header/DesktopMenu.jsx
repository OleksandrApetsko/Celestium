import { NavLink } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <ul className="hidden md:flex space-x-10 text-lg font-light">

      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition cursor-pointer ${
              isActive
                ? "text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1"
                : "text-white hover:text-yellow-400"
            }`
          }
        >
          Home
        </NavLink>
      </li>

      {/* HOROSCOPE */}
      <li className="relative group">
        <span className="text-white hover:text-yellow-400 transition cursor-pointer">
          Horoscope
        </span>

        <ul className="absolute left-0 mt-3 min-w-[180px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

          <NavLink
            to="/#zodiac"
            className="block px-4 py-3 text-sm text-white hover:text-yellow-400 hover:bg-white/5 transition"
          >
            Daily
          </NavLink>

          <NavLink to="/horoscopes/weekly" className="block px-4 py-3 text-sm text-white hover:text-yellow-400 hover:bg-white/5 transition">
            Weekly
          </NavLink>

          <NavLink to="/horoscopes/monthly" className="block px-4 py-3 text-sm text-white hover:text-yellow-400 hover:bg-white/5 transition">
            Monthly
          </NavLink>

          <NavLink to="/horoscopes/yearly" className="block px-4 py-3 text-sm text-white hover:text-yellow-400 hover:bg-white/5 transition">
            Yearly
          </NavLink>

        </ul>
      </li>

      {[
        { label: "Compatibility", path: "/compatibility" },
        { label: "Birth Chart", path: "/birth-chart" },
        { label: "Blog", path: "/blog" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
      ].map(link => (
        <li key={link.path}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `transition cursor-pointer ${
                isActive
                  ? "text-yellow-400 font-medium border-b-2 border-yellow-400 pb-1"
                  : "text-white hover:text-yellow-400"
              }`
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
