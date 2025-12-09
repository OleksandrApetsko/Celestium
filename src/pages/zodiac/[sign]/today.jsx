import { useParams } from "react-router-dom";
import { zodiacData } from "../../../components/DailyHoroscope/zodiacData.js";
import { zodiacIcons } from "../../../components/DailyHoroscope/zodiacIcons.jsx";

export default function TodayHoroscopePage() {
  const { sign } = useParams();
  const normalized = sign?.toLowerCase();

  const zodiac = zodiacData.find(
    (z) => z.sign.toLowerCase() === normalized
  );

  if (!zodiac) {
    return (
      <section className="py-20 text-center text-white">
        <h1 className="text-3xl font-semibold">Sign Not Found</h1>
        <p className="text-white/60 mt-2">Try selecting a zodiac again.</p>
      </section>
    );
  }

  const Icon = zodiacIcons[zodiac.sign] || zodiacIcons[zodiac.sign.toLowerCase()];

  return (
    <section className="relative z-10 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-10">
          <div className="w-28 h-28 mx-auto flex items-center justify-center
                          rounded-full bg-black/40 border border-yellow-300/40
                          backdrop-blur-xl shadow-[0_0_35px_rgba(250,204,21,0.4)]">
            {Icon}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mt-6 text-white">
            {zodiac.sign} — Today
          </h1>
          <p className="text-white/60 mt-2">{zodiac.dates}</p>
        </div>

        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
          <p className="text-white/80 leading-relaxed text-lg">
            Today brings {zodiac.element.toLowerCase()} energy into your field.
            You may feel a heightened sense of intuition and clarity.
            Trust your inner voice — it guides you toward growth.
          </p>

          <p className="text-yellow-300 mt-5 font-medium text-sm">
            Personalized AI forecast coming soon — this is only the basic temporary version.
          </p>
        </div>
      </div>
    </section>
  );
}
