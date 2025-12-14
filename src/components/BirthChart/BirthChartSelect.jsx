import { useState } from "react";

export default function BirthChartSelect({ label, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      {/* LABEL */}
      {label && (
        <label className="block text-white/80 mb-2 text-sm">{label}</label>
      )}

      {/* SELECT BOX */}
      <div
        className="
          w-full p-3 rounded-xl bg-black/40 border border-white/15 text-white
          cursor-pointer select-none flex justify-between items-center
          hover:border-yellow-300/40 transition
        "
        onClick={() => setOpen(!open)}
      >
        <span className={value ? "text-white" : "text-white/50"}>
          {value || placeholder}
        </span>

        {/* Arrow */}
        <svg
          className={`w-4 h-4 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          className="
            absolute left-0 right-0 mt-2 max-h-60 overflow-y-auto z-20
            bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl
            shadow-[0_0_18px_rgba(250,204,21,0.15)]
          "
        >
          {options.map((opt, i) => (
            <div
              key={i}
              className="
                px-4 py-3 text-white/90 hover:bg-white/10 cursor-pointer
                transition text-sm
              "
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
