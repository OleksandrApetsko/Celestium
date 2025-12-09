export default function CompatibilityResult({ sign1, sign2 }) {
  if (!sign1 || !sign2) return null;

  return (
    <div
      className="
        mt-10 p-6 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10
        text-center text-white max-w-2xl mx-auto
        animate-[fadeIn_0.4s_ease-out]
      "
    >
      <h3 className="text-2xl font-semibold mb-3">
        {sign1} + {sign2}
      </h3>

      <p className="text-white/80 text-sm leading-relaxed">
        This is a placeholder compatibility result.
        In the future, this will be replaced with a real AI-based interpretation
        including relationship dynamics, emotional synergy, communication style,
        long-term potential, and planetary interactions.
      </p>

      <p className="text-yellow-300 mt-3 text-sm">
        Personalized compatibility reports are coming soon.
      </p>
    </div>
  );
}
