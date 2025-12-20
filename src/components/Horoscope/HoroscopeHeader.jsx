export default function HoroscopeHeader({ label, sign }) {
  return (
    <div className="text-center mb-16">
      <span className="block text-xs uppercase tracking-[0.3em] text-yellow-300/90">
        {label}
      </span>

      <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-white capitalize">
        {sign}
      </h1>
    </div>
  );
}
