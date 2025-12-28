import Logo from "../Header/Logo.jsx";
import { footerBrand } from "../../data/footer/footerBrand.js";

export default function FooterLogo() {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <Logo />

      <p className="mt-4 text-sm leading-relaxed text-white/75 max-w-sm">
        {footerBrand.description}
      </p>

      <p className="mt-4 text-xs leading-relaxed text-white/45 max-w-sm">
        {footerBrand.note}
      </p>
    </div>
  );
}
