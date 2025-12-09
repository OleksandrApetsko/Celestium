export default function ElementBalance({ elements }) {
  const colors = {
    Fire: "text-red-400",
    Water: "text-blue-400",
    Air: "text-purple-300",
    Earth: "text-green-400",
  };

  return (
    <div className="grid grid-cols-2 gap-6 text-center">
      {Object.entries(elements).map(([element, val]) => (
        <div key={element} className="p-6 bg-white/5 rounded-xl">
          <p className={`text-2xl ${colors[element]} font-medium`}>{element}</p>
          <p className="text-3xl mt-2 text-yellow-300">{val}/10</p>
        </div>
      ))}
    </div>
  );
}
