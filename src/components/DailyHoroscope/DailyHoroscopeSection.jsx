import { zodiacData } from "./zodiacData.js";
import HoroscopeCard from "./HoroscopeCard.jsx";
import { Link } from "react-router-dom";

export default function DailyHoroscopeSection() {
  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Daily Horoscope
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mt-2">
            Today's Zodiac Insights
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Understand how the planetary movements influence your sign today.
          </p>
        </div>

        {/* GRID → NOW LINKS TO /zodiac/NAME/today */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {zodiacData.map((z) => (
            <Link key={z.sign} to={`/zodiac/${z.sign.toLowerCase()}/today`}>
              <HoroscopeCard
                sign={z.sign}
                dates={z.dates}
                element={z.element}
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
