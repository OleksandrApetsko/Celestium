import FooterLogo from "./FooterLogo.jsx";
import FooterNav from "./FooterNav.jsx";
import FooterContacts from "./FooterContacts.jsx";
import FooterSocials from "./FooterSocials.jsx";
import FooterCopyright from "./FooterCopyright.jsx";

export default function Footer() {
  const sectionClasses =
    "flex flex-col items-center md:items-start text-center md:text-left";

  return (
    <footer
      className="
        w-full mt-20 pt-16 pb-10
        bg-black/40 backdrop-blur-xl
        border-t border-white/10
        text-white
        relative z-10
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className={`${sectionClasses} justify-center md:justify-start`}>
          <FooterLogo />
        </div>

        <div className={sectionClasses}>
          <FooterNav />
        </div>

        <div className={sectionClasses}>
          <FooterContacts />
        </div>

        <div className={sectionClasses}>
          <FooterSocials />
        </div>
      </div>

      <FooterCopyright />
    </footer>
  );
}
