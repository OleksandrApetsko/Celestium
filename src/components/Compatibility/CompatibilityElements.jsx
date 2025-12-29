// src/components/Compatibility/CompatibilityElements.jsx

import { elementIcons } from "../../data/compatibility/elements/elementIcons.jsx";
import { getElementText } from "../../data/compatibility/elements/elementInterpretations.js";
import ElementGauge from "./ElementGauge.jsx";
import Container from "../UI/Container.jsx";

function getLevelMeta(value) {
  if (value <= 3) {
    return {
      label: "Low",
      color: "text-red-400",
      bar: "bg-red-400/80"
    };
  }

  if (value <= 6) {
    return {
      label: "Medium",
      color: "text-yellow-300",
      bar: "bg-yellow-300/80"
    };
  }

  return {
    label: "High",
    color: "text-green-400",
    bar: "bg-green-400/80"
  };
}

export default function CompatibilityElements({ elements, signA, signB }) {
  if (!elements) return null;

  const order = ["Fire", "Earth", "Air", "Water"];

  return (
    <Container>
      <section>
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl text-yellow-300">
            Elemental Balance
          </h2>

          <p className="mt-4 text-white/65">
            Elemental balance reveals how passion, stability, communication and
            emotional depth interact within this specific relationship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {order.map((element) => {
            const value = elements[element];
            if (value == null) return null;

            const level = getLevelMeta(value);
            const text = getElementText({
              element,
              value,
              signA,
              signB
            });

            return (
              <div
                key={element}
                className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-10"
              >
                {/* Header (CENTERED ICON + TITLE) */}
                <div className="flex flex-col items-center gap-4 mb-8 text-center">
                  <div className="flex items-center justify-center">
                    {elementIcons[element]}
                  </div>
                  <h3 className="text-2xl text-white tracking-wide">
                    {element}
                  </h3>
                </div>

                {/* Gauge (replaces bar/number UI) */}
                <div className="flex justify-center mb-8">
                  <ElementGauge
                    value={value}
                    label={`${level.label} intensity`}
                  />
                </div>

                {/* Text */}
                <p className="text-white/75 leading-relaxed text-center">
                  {text ||
                    "This elemental influence is subtle but still plays a role in your dynamic."}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
