import { zodiacData } from "../DailyHoroscope/zodiacData.js"
import ZodiacCard from "./ZodiacCard.jsx";
import { Link } from "react-router-dom";

export default function ZodiacGridSection() {
  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Zodiac Signs
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mt-2">
            Explore the Zodiac
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Learn the unique traits, energies, and cosmic purpose of each zodiac sign.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {Object.values(zodiacData).map((z) => (
            <Link key={z.sign} to={`/zodiac/${z.sign}`}>
              <ZodiacCard
                sign={z.sign}      // ✔ значки повернуться
                dates={z.dates}
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
