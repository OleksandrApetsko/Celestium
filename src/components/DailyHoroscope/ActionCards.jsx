export default function ActionCards({ focus }) {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">

      <div
        className="
          rounded-2xl bg-black/30 backdrop-blur-xl
          border border-white/10
          p-8
        "
      >
        <h3 className="text-lg font-medium text-yellow-300 mb-5">
          Focus On
        </h3>

        <ul className="space-y-3 text-white/70 text-base">
          {focus.do.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>

      <div
        className="
          rounded-2xl bg-black/30 backdrop-blur-xl
          border border-white/10
          p-8
        "
      >
        <h3 className="text-lg font-medium text-yellow-300 mb-5">
          Avoid
        </h3>

        <ul className="space-y-3 text-white/70 text-base">
          {focus.avoid.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}
