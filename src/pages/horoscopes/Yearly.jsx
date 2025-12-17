import { Link } from "react-router-dom";
import { zodiacData } from "../../data/zodiacData.js";
import HoroscopeCard from "../../components/Horoscope/HoroscopeCard.jsx";

export default function Yearly() {
  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Yearly Horoscope
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-2">
            The Bigger Picture
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Preview the themes shaping your year. Full insights are available with Premium.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {zodiacData.map(z => (
            <Link key={z.sign} to={`/horoscopes/yearly/${z.sign}`}>
              <HoroscopeCard
                sign={z.sign}
                dates={z.dates}
                variant="yearly"
              />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
