export default function BenefitItem({ title, description }) {
  return (
    <div
      className="
        grid grid-cols-[auto_1fr] gap-4 items-start
        transform transition-all duration-500
        opacity-0 translate-y-3 animate-[fadeUp_0.6s_ease-out_forwards]
        hover:scale-[1.01]
      "
    >
      {/* GOLD ICON — premium SVG */}
      <div
        className="
          w-8 h-8 flex items-center justify-center rounded-full
          bg-yellow-300/15 border border-yellow-300/40
          transition-all duration-300 group-hover:bg-yellow-300/25
          shadow-[0_0_12px_rgba(250,204,21,0.25)]
        "
      >
        {/* Line-art star check-symbol */}
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 text-yellow-300 group-hover:text-white transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>

      {/* TEXT BLOCK */}
      <div>
        <h4 className="text-white text-lg font-semibold leading-tight">
          {title}
        </h4>

        <p className="text-white/70 text-sm leading-relaxed mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}
