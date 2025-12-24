// src/components/Compatibility/ElementGauge.jsx

export default function ElementGauge({ value, label }) {
  const safeValue =
    typeof value === "number" && !Number.isNaN(value)
      ? Math.min(10, Math.max(0, value))
      : 0;

  const radius = 48;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = 2 * Math.PI * normalizedRadius;
  const progress = (safeValue / 10) * circumference;
  const offset = circumference - progress;

  let color = "#4ade80"; // green (High)
  if (safeValue <= 3) color = "#f87171"; // red (Low)
  else if (safeValue <= 6) color = "#facc15"; // yellow (Medium)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-28 h-28">
        <svg
          width="112"
          height="112"
          className="rotate-[-90deg]"
        >
          {/* background */}
          <circle
            cx="56"
            cy="56"
            r={normalizedRadius}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={stroke}
            fill="none"
          />

          {/* progress */}
          <circle
            cx="56"
            cy="56"
            r={normalizedRadius}
            stroke={color}
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-700"
          />
        </svg>

        {/* center value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-yellow-300 text-xl font-light">
            {safeValue}/10
          </span>
        </div>
      </div>

      {/* label */}
      <p className="text-xs uppercase tracking-[0.25em] text-white/50">
        {label}
      </p>
    </div>
  );
}
