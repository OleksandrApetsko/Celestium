export default function ScoreRing({ value }) {
  return (
    <div className="relative h-40 w-40 flex items-center justify-center">
      <svg width="160" height="160">
        <circle cx="80" cy="80" r="70" stroke="#222" strokeWidth="10" fill="none" />
        <circle
          cx="80"
          cy="80" r="70"
          stroke="#FFD447" strokeWidth="10"
          strokeDasharray="440"
          strokeDashoffset={440 - (440 * value) / 100}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-yellow-300 text-3xl font-light">{value}%</span>
    </div>
  );
}
