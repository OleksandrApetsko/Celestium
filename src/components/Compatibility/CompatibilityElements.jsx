import { elementIcons } from "../../data/compatibility/elementIcons.jsx";
import { getElementText } from "../../data/compatibility/elementInterpretations.js";

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
    <section>
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl text-yellow-300">
          Elemental Balance
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-white/65">
          Elemental balance reveals how passion, stability, communication
          and emotional depth interact within this specific relationship.
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
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                {elementIcons[element]}
                <h3 className="text-2xl text-white">{element}</h3>
              </div>

              {/* Level indicator */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`uppercase text-sm tracking-wider ${level.color}`}
                >
                  {level.label} intensity
                </span>
                <span className="text-white/40 text-sm">
                  {value}/10
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-white/10 mb-6 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${level.bar}`}
                  style={{ width: `${value * 10}%` }}
                />
              </div>

              {/* Text */}
              <p className="text-white/75 leading-relaxed">
                {text || "This elemental influence is subtle but still plays a role in your dynamic."}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
