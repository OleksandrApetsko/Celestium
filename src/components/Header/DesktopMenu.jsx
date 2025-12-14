import { menuItems } from "../../data/menuItems.js";
import { NavLink } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <ul className="hidden md:flex space-x-10 text-lg font-light">
      {menuItems.map(item => {
        const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

        return (
          <li key={item}>
            <NavLink
              to={path}
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
