import { Link } from "react-router-dom";
import { zodiacData } from "../../data/zodiac/zodiacData.js";
import HoroscopeCard from "../../components/Horoscope/HoroscopeCard.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";

export default function Monthly() {
  return (
    <section className="relative z-10 pt-16 md:pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Monthly Horoscope
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-2">
            Your Month in Perspective
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Select your zodiac sign to explore the main themes of the month.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {zodiacData.map((z) => (
            <Link key={z.sign} to={`/horoscopes/monthly/${z.sign}`}>
              <HoroscopeCard sign={z.sign} dates={z.dates} variant="monthly" />
            </Link>
          ))}
        </div>
      </div>

      <HoroscopeNext period="horoscopes" />
    </section>
  );
}
