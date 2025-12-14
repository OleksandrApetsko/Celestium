// src/components/BirthChart/CorePattern.jsx

export default function CorePattern({ sunSign, meta }) {
  return (
    <div className="mt-12 p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl">
      <h3 className="text-yellow-300 text-lg mb-3">
        Core Pattern Overview
      </h3>

      <p className="text-white/80 text-sm leading-relaxed">
        Your Sun sign describes how you generate energy and move through life.
        The <span className="text-yellow-200">{meta.element}</span> element
        sets your natural pace, while the{" "}
        <span className="text-yellow-200">{meta.modality}</span> modality
        explains how you initiate, stabilize or adapt to change.
      </p>

      <p className="text-white/60 text-xs mt-4">
        Full reading includes Moon, Rising, houses, aspects, personality
        architecture and relationship imprint.
      </p>
    </div>
  );
}
