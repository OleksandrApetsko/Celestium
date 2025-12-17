import { zodiacIcons } from '../../data/zodiacIcons.jsx'

export default function HoroscopeHeader({ sign, label, title }) {
  return (
    <div className="text-center mb-20">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 flex items-center justify-center rounded-full bg-black/40 border border-yellow-300/40 backdrop-blur-xl shadow-[0_0_30px_rgba(250,204,21,0.35)]">
          {zodiacIcons[sign]}
        </div>
      </div>

      <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
        {label}
      </span>

      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-white capitalize">
        {title}
      </h1>
    </div>
  );
}
