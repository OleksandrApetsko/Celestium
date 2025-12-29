import Container from "../UI/Container.jsx";
import { birthChartCorePlacements } from "../../data/birthChart/birthChartCorePlacements.js";

export default function BirthChartCorePlacements({ data = birthChartCorePlacements }) {
  const { header, placements, footer } = data;

  return (
    <Container>
      <section className="rounded-3xl bg-black/40 border border-white/10 p-10">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-3">
            {header.kicker}
          </p>
          <h2 className="text-3xl text-white">{header.title}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {placements.map(p => (
            <div key={p.planet} className="rounded-2xl bg-black/30 border border-white/10 p-6">
              <p className="text-xs uppercase text-yellow-300 mb-2">{p.planet}</p>
              <h3 className="text-xl text-white mb-3">{p.title}</h3>
              <p className="text-white/80 text-sm">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-white/55 text-xs">{footer}</p>
      </section>
    </Container>
  );
}
