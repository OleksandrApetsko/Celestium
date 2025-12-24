// src/components/Compatibility/CompatibilityScoreRing.jsx

export default function CompatibilityScoreRing({ value }) {
  const safeValue =
    typeof value === "number" && !Number.isNaN(value)
      ? Math.min(100, Math.max(0, value))
      : 0;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (circumference * safeValue) / 100;

  return (
    <div className="relative h-40 w-40 flex items-center justify-center">
      <svg width="160" height="160">
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#222"
          strokeWidth="10"
          fill="none"
        />

        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#FFD447"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute text-yellow-300 text-3xl font-light">
        {safeValue}%
      </span>
    </div>
  );
}
