import Container from "../UI/Container.jsx";
import { birthChartHouses } from "../../data/birthChart/birthChartHouses.js";

export default function BirthChartHouses({ data = birthChartHouses }) {
  const { header, houses, footer } = data;

  return (
    <Container>
      <section
        id="birthchart-houses"
        className="rounded-3xl bg-black/40 border border-white/10 p-10 shadow-[0_0_45px_rgba(0,0,0,0.35)]"
      >
        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-3">
            {header.kicker}
          </p>

          <h2 className="text-3xl md:text-4xl font-light tracking-[0.10em] text-white">
            {header.title}
          </h2>

          <p className="mt-4 text-white/70 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            {header.intro}
          </p>
        </div>

        {/* HOUSES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house) => (
            <div
              key={house.number}
              className="rounded-2xl bg-black/30 border border-white/10 p-6"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-2">
                House {house.number}
              </p>

              <h3 className="text-xl text-white font-semibold mb-3">
                {house.title}
              </h3>

              <p className="text-white/80 text-sm leading-relaxed">
                {house.text}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-12 text-center">
          <p className="text-white/55 text-xs leading-relaxed max-w-3xl mx-auto">
            {footer}
          </p>
        </div>
      </section>
    </Container>
  );
}
