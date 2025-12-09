export const insightIcons = {
  love: (
    <svg viewBox="0 0 48 48" className="w-10 h-10 text-yellow-300">
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="opacity-70"
      />
      <path
        d="M17.5 19a4 4 0 0 1 6.5-3 4 4 0 0 1 6.5 3c0 4-7 8-7 8s-7-4-7-8z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  career: (
    <svg viewBox="0 0 48 48" className="w-10 h-10 text-yellow-300">
      <rect
        x="10"
        y="16"
        width="28"
        height="18"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M19 16v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M10 22h10l2 3h4l2-3h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  energy: (
    <svg viewBox="0 0 48 48" className="w-10 h-10 text-yellow-300">
      {/* Місяць */}
      <path
        d="M30 10a10 10 0 1 0 8 16 11 11 0 1 1-8-16z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Маленькі "іскри" */}
      <path
        d="M12 14l2 2M14 10v3M18 12l-2 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M34 32l1.5 2M36 29v2.5M39 31l-1.5 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
};
