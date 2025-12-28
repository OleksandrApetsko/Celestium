import { footerMeta } from "../../data/footer/footerMeta.js";

export default function FooterCopyright() {
  const year = new Date().getFullYear();

  return (
    <div
      className="
        mt-12 pt-6
        border-t border-white/10
        flex flex-col gap-3
        md:flex-row md:items-center md:justify-between
        text-sm text-white/55
        text-center md:text-left
      "
    >
      <p>
        {footerMeta.copyrightPrefix} {year} Celestium. {footerMeta.rights}
      </p>

      <p className="text-xs text-white/40 md:text-right">
        Designed for a premium astrology experience.
      </p>
    </div>
  );
}
