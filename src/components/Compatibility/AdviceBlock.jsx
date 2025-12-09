export default function AdviceBlock({ advice }) {
  return (
    <div className="bg-white/5 p-10 rounded-2xl text-white/90">
      <h3 className="text-yellow-300 text-xl mb-4">Celestial Insight</h3>
      <p className="leading-relaxed">{advice}</p>
    </div>
  );
}
