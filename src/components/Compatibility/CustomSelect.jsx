import { useState } from "react";
import { zodiacOptions } from "../../data/zodiacOptions.js";
import { zodiacIconsLite } from "./zodiacIconsLite.jsx";

export default function CustomSelect({ label, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <label className="block text-white/80 mb-1">{label}</label>

      {/* BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full px-4 py-3 rounded-xl bg-black/40 border border-white/20
          text-white text-left flex justify-between items-center
          hover:border-yellow-400/40 transition
        "
      >
        <div className="flex items-center space-x-2">
          {value && zodiacIconsLite[value]}
          <span>{value || "Select a sign"}</span>
        </div>
        <span className="text-yellow-300">▾</span>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute left-0 right-0 mt-2 rounded-xl bg-black/80 backdrop-blur-xl
            border border-white/10 shadow-xl z-50 max-h-60 overflow-auto
          "
        >
          {zodiacOptions.map((sign) => (
            <div
              key={sign}
              onClick={() => {
                onChange(sign);
                setOpen(false);
              }}
              className="
                px-4 py-3 text-white cursor-pointer flex items-center space-x-3
                hover:bg-yellow-400/20 hover:text-yellow-300
                transition-colors
              "
            >
              {zodiacIconsLite[sign]}
              <span>{sign}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
