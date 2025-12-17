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
        mt-24 pt-16 pb-10
        bg-black/40 backdrop-blur-xl
        border-t border-white/10
        text-white
      "
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center">

        <FooterLogo />
        <FooterNav />
        <FooterContacts />
        <FooterSocials />

      </div>

      <FooterCopyright />
    </footer>
  );
}
