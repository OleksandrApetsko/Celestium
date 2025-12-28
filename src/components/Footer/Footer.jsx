import FooterLogo from "./FooterLogo.jsx";
import FooterNav from "./FooterNav.jsx";
import FooterContacts from "./FooterContacts.jsx";
import FooterSocials from "./FooterSocials.jsx";
import FooterCopyright from "./FooterCopyright.jsx";

export default function Footer() {
  return (
    <footer
      className="
        relative z-10
        mt-20
        bg-black/45 backdrop-blur-xl
        border-t border-white/10
        text-white
      "
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div
          className="
            grid grid-cols-1 gap-12
            md:grid-cols-12 md:gap-10
          "
        >
          <div className="md:col-span-4">
            <FooterLogo />
          </div>

          <div className="md:col-span-5">
            <FooterNav />
          </div>

          <div className="md:col-span-3 space-y-10">
            <FooterContacts />
            <FooterSocials />
          </div>
        </div>

        <FooterCopyright />
      </div>
    </footer>
  );
}
