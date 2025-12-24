// src/components/Compatibility/CompatibilityStyles.jsx

import compatibilityStyles from "../../data/compatibility/compatibilityStyles.js";

export default function CompatibilityStyles({ signA, signB }) {
  if (!signA || !signB) return null;

  const key = `${String(signA).toLowerCase()}-${String(signB).toLowerCase()}`;
  const data = compatibilityStyles[key];

  if (!data) return null;

  const { emotional, communication } = data;

  if (!emotional?.length && !communication?.length) return null;

  return (
    <section>
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
          Interaction Expression
        </p>
        <h3 className="text-3xl sm:text-4xl text-yellow-300">
          Emotional & Communication Styles
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <StyleBlock
          title="Emotional Style"
          description="How emotions are expressed, processed, and perceived in this connection."
          items={emotional}
        />

        <StyleBlock
          title="Communication Style"
          description="How dialogue, conflict resolution, and understanding naturally unfold."
          items={communication}
        />
      </div>
    </section>
  );
}

function StyleBlock({ title, description, items }) {
  if (!items?.length) return null;

  return (
    <div className="rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-8 sm:p-10">
      <h4 className="text-xl text-yellow-300 mb-2">
        {title}
      </h4>

      <p className="text-sm text-white/50 mb-6 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-yellow-300/80 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
