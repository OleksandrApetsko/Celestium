import Logo from "../Header/Logo.jsx";

export default function FooterLogo() {
  return (
    <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
      <div className="flex justify-center md:justify-start w-full">
        <Logo />
      </div>

      <p className="text-sm text-white/70 mt-4 leading-relaxed max-w-xs">
        Celestium is a next-generation astrology platform blending cosmic wisdom with
        immersive digital design.
      </p>
    </div>
  );
}
