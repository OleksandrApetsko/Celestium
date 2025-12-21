// src/components/Compatibility/ElementBalance.jsx

export default function ElementBalance({ elements }) {
  // 🔒 HARD GUARD
  if (!elements || typeof elements !== "object") {
    return null;
  }

  const colors = {
    Fire: "text-red-400",
    Water: "text-blue-400",
    Air: "text-purple-300",
    Earth: "text-green-400",
  };

  return (
    <div className="grid grid-cols-2 gap-6 text-center">
      {Object.entries(elements).map(([element, value]) => (
        <div
          key={element}
          className="p-6 bg-white/5 rounded-xl border border-white/10"
        >
          <p className={`text-xl font-medium ${colors[element] || "text-white"}`}>
            {element}
          </p>

          <p className="text-3xl mt-2 text-yellow-300">
            {value}/10
          </p>
        </div>
      ))}
    </div>
  );
}
