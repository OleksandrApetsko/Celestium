export default function HoroscopeCard({ title, text }) {
  return (
    <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl">
      <h3 className="text-xl text-yellow-300 font-medium">{title}</h3>
      <p className="text-white/70 mt-2 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
