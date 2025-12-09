export default function TopBarDesktop() {
  return (
    <div className="hidden md:block text-sm text-white py-2 bg-transparent backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <div className="flex items-center space-x-2">
          {/*<span className="text-yellow-400 text-lg">✉</span>*/}
          {/*<span>celestium@gmail.com</span>*/}
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-yellow-400 hover:text-white transition">Log In</button>
          <button className="text-yellow-400 hover:text-white transition">Sign Up</button>

          <button className="hover:text-yellow-400 transition">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="22" y2="22" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}
