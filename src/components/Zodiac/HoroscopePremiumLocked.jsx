export default function HoroscopePremiumLocked({ text }) {
  return (
    <div className="py-16 text-center text-white/70">
      <p className="text-lg mb-6">{text}</p>
      <button className="
        px-8 py-3 rounded-full bg-yellow-400 text-black font-medium
        hover:scale-105 transition shadow-md">
        Upgrade to Premium →
      </button>
    </div>
  );
}
