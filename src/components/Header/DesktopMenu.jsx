import { menuItems } from "../../data/menuItems.js";
import { Link } from "react-router-dom";

export default function DesktopMenu() {
  return (
    <ul className="hidden md:flex space-x-10 text-lg font-light text-white">
      {menuItems.map(item => (
        <li key={item}>
          <Link
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="hover:text-yellow-400 transition cursor-pointer"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}
