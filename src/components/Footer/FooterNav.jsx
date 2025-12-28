import { NavLink } from "react-router-dom";
import { footerNavSections } from "../../data/footer/footerNav.js";
import { footerPolicyLinks } from "../../data/footer/footerPolicy.js";

function linkClass({ isActive }) {
  return [
    "text-sm transition",
    "text-white/75 hover:text-yellow-300",
    isActive ? "text-yellow-300" : ""
  ].join(" ");
}

export default function FooterNav() {
  return (
    <nav aria-label="Footer navigation" className="text-center md:text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {footerNavSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold tracking-wide text-white/90">
              {section.title}
            </h3>

            <ul className="mt-4 space-y-2">
              {section.links.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} className={linkClass}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white/90">
            Legal
          </h3>

          <ul className="mt-4 space-y-2">
            {footerPolicyLinks.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={linkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
