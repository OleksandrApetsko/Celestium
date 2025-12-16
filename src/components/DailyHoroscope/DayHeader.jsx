import { zodiacIcons } from './zodiacIcons.jsx'

export default function DayHeader({ sign }) {
  return (
    <div className="text-center mb-14">
      <div className="flex justify-center mb-6">
        <div
          className="
            w-24 h-24 flex items-center justify-center
            rounded-full bg-black/40
            border border-yellow-300/40
            backdrop-blur-xl
            shadow-[0_0_30px_rgba(250,204,21,0.35)]
          "
        >
          {zodiacIcons[sign]}
        </div>
      </div>

      <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
        Daily Horoscope
      </span>

      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold text-white capitalize">
        {sign} — Today
      </h1>
    </div>
  );
}
