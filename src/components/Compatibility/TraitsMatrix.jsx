export default function TraitsMatrix({ traits }) {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <h3 className="text-yellow-300 text-xl mb-4">Strengths</h3>
        <ul className="space-y-2 text-white/80">
          {traits.positive.map((t,i)=> <li key={i}>• {t}</li>)}
        </ul>
      </div>

      <div>
        <h3 className="text-yellow-300 text-xl mb-4">Tensions</h3>
        <ul className="space-y-2 text-white/80">
          {traits.negative.map((t,i)=> <li key={i}>• {t}</li>)}
        </ul>
      </div>
    </div>
  );
}
