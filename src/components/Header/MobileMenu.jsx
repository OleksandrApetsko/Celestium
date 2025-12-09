import { menuItems } from '../../data/menuItems.js'
import { Link } from "react-router-dom"

export default function MobileMenu({ open, onClose }) {
  if (!open) return null

  return (
    <div className="md:hidden bg-black backdrop-blur-xl border-t border-white pb-6
                    animate-[slideDown_0.35s_ease-out]">

      {/* MENU ITEMS */}
      <ul className="flex flex-col text-center text-lg text-white space-y-4 py-4">
        {menuItems.map(item => (
          <Link
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`} // головна -> "/", інше -> /about, /blog ...
            key={item}
            onClick={onClose}
            className="hover:text-yellow-400 transition cursor-pointer"
          >
            {item}
          </Link>
        ))}
      </ul>

      {/* АВТОРИЗАЦІЯ — повернув назад як ти просив */}
      <div className="flex flex-col items-center space-y-4 border-t border-white/20 pt-4">

        <button className="text-yellow-400 hover:text-white transition">
          Log In
        </button>

        <button className="text-yellow-400 hover:text-white transition">
          Sign Up
        </button>

        {/* 🔍 Повернув також іконку пошуку */}
        <button className="hover:text-yellow-400 transition">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="16.65" y1="16.65" x2="22" y2="22"></line>
          </svg>
        </button>

      </div>
    </div>
  )
}
