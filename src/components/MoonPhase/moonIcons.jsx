export const moonIcons = {
  "New Moon": (
    <svg viewBox="0 0 48 48" className="w-20 h-20 text-yellow-300">
      <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),

  "Waxing Crescent": (
    <svg viewBox="0 0 48 48" className="w-20 h-20 text-yellow-300">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M24 6a12 18 0 1 1 0 36"
        fill="currentColor"
        className="opacity-30"
      />
    </svg>
  ),

  "First Quarter": (
    <svg viewBox="0 0 48 48" className="w-20 h-20 text-yellow-300">
      <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="24" y="6" width="18" height="36" fill="currentColor" className="opacity-30"/>
    </svg>
  ),

  "Waxing Gibbous": (
    <svg viewBox="0 0 48 48" className="w-20 h-20 text-yellow-300">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M24 6a14 18 0 1 1 0 36"
        fill="currentColor"
        className="opacity-30"
      />
    </svg>
  ),

  "Full Moon": (
    <svg viewBox="0 0 48 48" className="w-20 h-20 text-yellow-300">
      <circle cx="24" cy="24" r="18" fill="currentColor" className="opacity-40" />
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
};
