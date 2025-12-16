import { zodiacData } from "../../data/zodiacData.js";
import DailyHoroscopeCard from "./DailyHoroscopeCard.jsx";
import { Link } from "react-router-dom";

export default function DailyHoroscopeSection() {
  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Daily Horoscope
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mt-3">
            Today’s Energy for Each Zodiac Sign
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            A quick snapshot of how today’s planetary movements influence your mood, focus, and flow.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {zodiacData.map((z) => (
            <Link to={`/horoscope/${z.sign}/today`}>
              <DailyHoroscopeCard sign={z.sign} dates={z.dates} element={z.element} />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
