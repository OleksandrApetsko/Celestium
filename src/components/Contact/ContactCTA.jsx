export default function ContactCTA() {
  return (
    <div className="
      p-8 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-yellow-200/10
      border border-yellow-300/40 backdrop-blur-xl shadow-[0_0_40px_rgba(255,210,90,0.25)]
    ">
      <h2 className="text-3xl text-yellow-300 font-semibold mb-4">
        Request Personal Reading
      </h2>

      <p className="text-white/80 mb-6">
        Receive a detailed, AI-enhanced cosmic analysis tailored to you.
      </p>

      <button className="
        px-8 py-3 border border-yellow-300 rounded-lg text-yellow-300 w-full
        hover:bg-yellow-400 hover:text-black transition font-medium">
        Get Astrology Reading →
      </button>
    </div>
  );
}
