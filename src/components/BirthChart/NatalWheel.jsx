// src/components/BirthChart/NatalWheel.jsx

export default function NatalWheel() {
  return (
    <div className="flex justify-center mt-12">
      <div
        className="
          relative w-64 h-64 md:w-80 md:h-80
          rounded-full border border-yellow-300/60
          shadow-[0_0_45px_rgba(255,215,0,0.35)]
          bg-gradient-to-br from-black via-black to-yellow-900/10
        "
      >
        {/* inner rings */}
        <div className="absolute inset-5 rounded-full border border-yellow-300/40"></div>
        <div className="absolute inset-10 rounded-full border border-yellow-300/25"></div>

        {/* radial lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 w-[1px] h-[40%] bg-yellow-300/25 origin-top"
            style={{ transform: `rotate(${i * 30}deg)` }}
          />
        ))}

        {/* center point */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-yellow-300/80"></div>

        {/* label */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[11px] tracking-[0.2em] uppercase text-yellow-200/80">
            Natal Chart Preview
          </span>
        </div>
      </div>
    </div>
  );
}
