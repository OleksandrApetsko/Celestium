export default function ZodiacHeader({ zodiac, icon }) {
  return (
    <>
      <div className="flex justify-center mb-10">
        <div className="p-8 rounded-full bg-yellow-300/10 border border-yellow-400/30
          backdrop-blur-xl shadow-[0_0_25px_rgba(255,200,100,0.35)] hover:scale-105 transition-transform">
          {icon}
        </div>
      </div>

      <h1 className="text-6xl font-semibold text-white text-center drop-shadow-lg">{zodiac.name}</h1>
      <p className="text-white/60 text-lg text-center mt-2">{zodiac.dates}</p>

      <p className="text-white/80 text-xl leading-relaxed max-w-3xl mx-auto text-center mt-10">
        {zodiac.description}
      </p>
    </>
  );
}
