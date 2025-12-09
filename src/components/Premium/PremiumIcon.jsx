export default function PremiumIcon({ type }) {
  const icons = {
    forecast: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-yellow-300">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M24 10v14l8 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),

    moon: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-yellow-300">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M24 6a10 18 0 1 1 0 36" fill="currentColor" className="opacity-30"/>
      </svg>
    ),

    compatibility: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-yellow-300">
        <path d="M16 16a6 6 0 1 1 12 0c0 7-12 14-12 14S4 23 4 16a6 6 0 1 1 12 0"
              stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M36 16a6 6 0 1 0-12 0c0 7 12 14 12 14s12-7 12-14a6 6 0 1 0-12 0"
              stroke="currentColor" strokeWidth="2.5" fill="none"/>
      </svg>
    ),

    ai: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-yellow-300">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M18 24h12M24 18v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),

    planning: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-yellow-300">
        <path d="M8 30c4-7 12-12 16-12s12 5 16 12"
              stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <circle cx="24" cy="24" r="3" fill="currentColor" className="opacity-70"/>
      </svg>
    ),

    rituals: (
      <svg viewBox="0 0 48 48" className="w-10 h-10 text-yellow-300">
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <path d="M24 4v8M24 36v8M8 24h8M32 24h8"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  };

  return icons[type] || null;
}
