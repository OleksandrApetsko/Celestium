import { menuItems } from "../../data/menuItems.js";

export default function FooterNav() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-yellow-400 mb-4">Navigation</h3>
      <ul className="space-y-2 text-white/80">
        {menuItems.map((item) => (
          <li key={item} className="hover:text-yellow-400 transition cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
