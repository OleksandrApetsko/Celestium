export default function NatalWheel() {
  const labels = [
    "Identity",
    "Resources",
    "Mind",
    "Home",
    "Creativity",
    "Work",
    "Relationships",
    "Transformation",
    "Beliefs",
    "Career",
    "Community",
    "Inner World",
  ];

  return (
    <div className="relative w-80 h-80 mx-auto">
      <div className="absolute inset-0 rounded-full border border-yellow-300/50 bg-black/60 shadow-[0_0_45px_rgba(255,215,0,0.25)]" />
      <div className="absolute inset-8 rounded-full border border-yellow-300/30" />

      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 w-px h-[50%] bg-yellow-300/25 origin-top"
          style={{ transform: `rotate(${i * 30}deg)` }}
        />
      ))}

      {labels.map((label, i) => (
        <div
          key={label}
          className="absolute text-[10px] text-yellow-200/80 tracking-wide whitespace-nowrap"
          style={{
            left: "50%",
            top: "50%",
            transform: `
              rotate(${i * 30}deg)
              translateY(-132px)
              rotate(-${i * 30}deg)
              translateX(-50%)
            `,
          }}
        >
          {label}
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs tracking-[0.3em] uppercase text-yellow-300">
          Chart Structure
        </span>
      </div>
    </div>
  );
}
