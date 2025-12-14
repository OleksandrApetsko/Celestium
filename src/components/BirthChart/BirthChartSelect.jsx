// src/components/BirthChart/BirthChartSelect.jsx

import { useEffect, useRef, useState } from "react";

export default function BirthChartSelect({
  value,
  onChange,
  options = [],
  placeholder = "Select",
  disabled = false,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
        className={`
          w-full px-4 py-3 rounded-xl
          bg-black/40 border border-white/15
          text-left flex justify-between items-center
          transition select-none
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:border-yellow-300/40"}
        `}
      >
        <span className={value ? "text-white" : "text-white/50"}>
          {value || placeholder}
        </span>

        <svg
          className={`w-4 h-4 text-white/70 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          className="
            absolute z-50 left-0 right-0 mt-2
            max-h-64 overflow-auto rounded-xl
            bg-black/90 backdrop-blur-xl border border-white/10
            shadow-[0_0_24px_rgba(0,0,0,0.45)]
          "
        >
          {options.map((opt, i) => (
            <div
              key={i}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="
                px-4 py-3 text-sm text-white/90 cursor-pointer
                hover:bg-yellow-300/20 hover:text-yellow-300
                transition
              "
            >
              {opt}
            </div>
          ))}

          {options.length === 0 && (
            <div className="px-4 py-3 text-sm text-white/55">No options</div>
          )}
        </div>
      )}
    </div>
  );
}
