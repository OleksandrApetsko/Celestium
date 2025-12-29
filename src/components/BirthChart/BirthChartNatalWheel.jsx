import { useState } from "react";
import Container from "../UI/Container.jsx";

import { birthChartNatalWheel } from "../../data/birthChart/birthChartNatalWheel.js";
import { birthChartPlanetMeta } from "../../data/birthChart/birthChartPlanetMeta.js";
import { birthChartAspectColors } from "../../data/birthChart/birthChartAspectColors.js";

export default function BirthChartNatalWheel({ data = birthChartNatalWheel }) {
  const [activePlanet, setActivePlanet] = useState(null);

  const size = 560;
  const center = size / 2;

  const polarToXY = (deg, radius) => {
    const angle = (deg - 90) * (Math.PI / 180);
    return {
      x: center + Math.cos(angle) * radius,
      y: center + Math.sin(angle) * radius
    };
  };

  const planetPositions = Object.fromEntries(
    data.planets.map(p => [p.name, polarToXY(p.degree, 150)])
  );

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Container>
      <section className="rounded-3xl bg-black/40 border border-white/10 p-6 sm:p-10 md:p-12">
        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-3">
            Natal Chart
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white">
            Interactive Natal Wheel
          </h2>

          <p className="mt-4 text-white/70 text-sm max-w-2xl mx-auto">
            Explore planetary dynamics and navigate directly to detailed
            interpretations below.
          </p>
        </div>

        {/* WHEEL */}
        <div className="flex justify-center overflow-x-auto">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="w-[320px] sm:w-[420px] md:w-[560px] h-auto"
          >
            {/* Rings */}
            {[240, 180, 115].map((r, i) => (
              <circle
                key={i}
                cx={center}
                cy={center}
                r={r}
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth={i === 0 ? 2.5 : 1.5}
              />
            ))}

            {/* Houses */}
            {Array.from({ length: 12 }).map((_, i) => {
              const { x, y } = polarToXY(i * 30, 240);
              return (
                <line
                  key={i}
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke="rgba(255,255,255,0.3)"
                />
              );
            })}

            {/* Aspects */}
            {data.aspects.map((a, i) => {
              const from = planetPositions[a.from];
              const to = planetPositions[a.to];
              if (!from || !to) return null;

              return (
                <line
                  key={i}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={birthChartAspectColors[a.type]}
                  strokeWidth="1.8"
                />
              );
            })}

            {/* Planets */}
            {data.planets.map(p => {
              const { x, y } = planetPositions[p.name];
              return (
                <g
                  key={p.name}
                  className="cursor-pointer"
                  onMouseEnter={() => setActivePlanet(p.name)}
                  onMouseLeave={() => setActivePlanet(null)}
                  onClick={() =>
                    birthChartPlanetMeta[p.name] &&
                    scrollTo(birthChartPlanetMeta[p.name].target)
                  }
                >
                  <circle cx={x} cy={y} r="8" fill="rgba(250,204,21,0.95)" />
                  <text
                    x={x}
                    y={y + 22}
                    textAnchor="middle"
                    fontSize="13"
                    fill="rgba(250,204,21,0.95)"
                  >
                    {p.symbol}
                  </text>
                </g>
              );
            })}

            {/* Center */}
            <text
              x={center}
              y={center + 6}
              textAnchor="middle"
              fontSize="12"
              fill="rgba(250,204,21,0.9)"
              letterSpacing="4"
            >
              NATAL MAP
            </text>
          </svg>
        </div>

        {/* TOOLTIP */}
        {activePlanet && birthChartPlanetMeta[activePlanet] && (
          <div className="mt-8 text-center">
            <p className="text-yellow-300 font-semibold text-sm">
              {activePlanet} — {birthChartPlanetMeta[activePlanet].label}
            </p>
            <p className="text-white/70 text-xs mt-1 max-w-md mx-auto">
              {birthChartPlanetMeta[activePlanet].description}
            </p>
            <p className="mt-2 text-white/40 text-xs">
              Click to jump to detailed interpretation ↓
            </p>
          </div>
        )}
      </section>
    </Container>
  );
}
