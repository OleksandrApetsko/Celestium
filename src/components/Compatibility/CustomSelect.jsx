import { useMemo, useState } from "react";
import { zodiacIconsLite } from "../../data/zodiac/zodiacIconsLite.jsx";

const OPTIONS = [
  { slug: "aries", label: "Aries" },
  { slug: "taurus", label: "Taurus" },
  { slug: "gemini", label: "Gemini" },
  { slug: "cancer", label: "Cancer" },
  { slug: "leo", label: "Leo" },
  { slug: "virgo", label: "Virgo" },
  { slug: "libra", label: "Libra" },
  { slug: "scorpio", label: "Scorpio" },
  { slug: "sagittarius", label: "Sagittarius" },
  { slug: "capricorn", label: "Capricorn" },
  { slug: "aquarius", label: "Aquarius" },
  { slug: "pisces", label: "Pisces" }
];

export default function CustomSelect({ label, value, onChange }) {
  const [open, setOpen] = useState(false);

  const current = useMemo(
    () => OPTIONS.find((o) => o.slug === value) || null,
    [value]
  );

  return (
    <div className="relative">
      <label className="block text-white/80 mb-2 text-sm">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          w-full px-4 py-4 rounded-2xl
          bg-black/40 border border-white/15
          text-white text-left
          flex justify-between items-center
          hover:border-yellow-300/35 transition
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          {current ? zodiacIconsLite?.[current.label] : null}
          <span className="text-white/90">
            {current ? current.label : "Select a sign"}
          </span>
        </div>

        <span className="text-yellow-300">▾</span>
      </button>

      {open && (
        <div
          className="
            absolute left-0 right-0 mt-2
            rounded-2xl bg-black/90 backdrop-blur-xl
            border border-white/10
            shadow-xl z-50
            max-h-72 overflow-auto
          "
        >
          {OPTIONS.map((opt) => (
            <button
              key={opt.slug}
              type="button"
              onClick={() => {
                onChange(opt.slug); // IMPORTANT: slug!
                setOpen(false);
              }}
              className="
                w-full text-left px-4 py-3
                flex items-center gap-3
                text-white/85
                hover:bg-yellow-300/10 hover:text-yellow-300
                transition-colors
              "
            >
              {zodiacIconsLite?.[opt.label]}
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
