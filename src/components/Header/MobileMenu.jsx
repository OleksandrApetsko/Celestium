import { menuItems } from "../../data/menuItems.js";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="md:hidden bg-black backdrop-blur-xl border-t border-white pb-6 animate-[slideDown_0.35s_ease-out]">

      <ul className="flex flex-col text-center text-lg space-y-4 py-4">
        {menuItems.map(item => {
          const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

          return (
            <NavLink
              key={item}
              to={path}
              onClick={onClose}
              className={({ isActive }) =>
                `transition cursor-pointer ${
                  isActive
                    ? "text-yellow-400 font-medium"
                    : "text-white hover:text-yellow-400"
                }`
              }
            >
              {item}
            </NavLink>
          );
        })}
      </ul>

      {/* нижній блок без змін */}
      <div className="flex flex-col items-center space-y-4 border-t border-white/20 pt-4">

        <button className="text-yellow-400 hover:text-white transition">
          Log In
        </button>

        <button className="text-yellow-400 hover:text-white transition">
          Sign Up
        </button>

        <button className="hover:text-yellow-400 transition">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="16.65" y1="16.65" x2="22" y2="22"></line>
          </svg>
        </button>

      </div>
    </div>
  );
}
