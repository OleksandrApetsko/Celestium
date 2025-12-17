export default function ActionList({
  label,
  title,
  items,
  bulletColor,
  textColor
}) {
  return (
    <div className="rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 p-8">
      <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2">
        {label}
      </p>

      <h3 className="text-xl font-medium text-yellow-300 mb-6">
        {title}
      </h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-3 ${textColor} text-base leading-relaxed`}
          >
            <span
              className={`mt-1 w-2 h-2 rounded-full shrink-0 ${bulletColor}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
