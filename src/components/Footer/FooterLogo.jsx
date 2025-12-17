import Logo from "../Header/Logo.jsx";

export default function FooterLogo() {
  return (
    <div className="flex flex-col items-center text-center">
      <Logo />

      <p className="text-sm text-white/70 mt-4 leading-relaxed max-w-xs">
        Celestium is a next-generation astrology platform blending cosmic wisdom
        with immersive digital design.
      </p>
    </div>
  );
}
