export default function ContactSocials() {
  return (
    <div className="p-8 rounded-2xl bg-black/20 border border-white/10 backdrop-blur-xl">
      <h2 className="text-2xl text-yellow-300 font-medium mb-4">Find Us Online</h2>

      <div className="flex gap-6 text-xl text-white/80">
        <a className="hover:text-yellow-300 transition">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
               className="w-6 h-6">
            <path d="M18 2L11 9M22 6l-6 6 6 6m-4 4l-6-6-6 6m4-18L2 12l6 6" />
          </svg>
        </a>

        <a className="hover:text-yellow-300 transition">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
               className="w-6 h-6">
            <rect x="3" y="3" width="18" height="18" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <path d="M17.5 6.5h.01"/>
          </svg>
        </a>

        <a className="hover:text-yellow-300 transition">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
               className="w-6 h-6">
            <path d="M14 3a5 5 0 0 0 5 5"/>
            <path d="M14 3v10a4 4 0 1 1-4-4h2"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
