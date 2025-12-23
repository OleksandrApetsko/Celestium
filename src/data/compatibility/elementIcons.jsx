// src/data/elementIcons.jsx

export const elementIcons = {
  Fire: (
    <svg viewBox="0 0 48 48" className="w-8 h-8 text-red-400">
      <path
        d="M24 6c6 8-2 10-2 16 0 4 3 6 6 6s6-3 6-7c0-6-6-8-10-15z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Earth: (
    <svg viewBox="0 0 48 48" className="w-8 h-8 text-green-400">
      <rect
        x="10"
        y="14"
        width="28"
        height="20"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      <path
        d="M16 20h16M16 26h10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  Air: (
    <svg viewBox="0 0 48 48" className="w-8 h-8 text-purple-300">
      <path
        d="M8 20h24a6 6 0 1 0-6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M8 28h20a4 4 0 1 1-4 4"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),

  Water: (
    <svg viewBox="0 0 48 48" className="w-8 h-8 text-blue-400">
      <path
        d="M24 8c6 8 10 12 10 18a10 10 0 1 1-20 0c0-6 4-10 10-18z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  )
};
