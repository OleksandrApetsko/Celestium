import { NavLink } from "react-router-dom";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Daily Horoscope", path: "/#zodiac" },
  { label: "Weekly Horoscope", path: "/horoscopes/weekly" },
  { label: "Monthly Horoscope", path: "/horoscopes/monthly" },
  { label: "Yearly Horoscope", path: "/horoscopes/yearly" },
  { label: "Compatibility", path: "/compatibility" },
  { label: "Birth Chart", path: "/birth-chart" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
];

export default function FooterNav() {
  return (
    <nav>
      <h3 className="text-lg font-semibold text-yellow-400 mb-4">
        Navigation
      </h3>

      <ul className="space-y-2 text-white/80">
        {footerLinks.map(link => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className="hover:text-yellow-400 transition"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
