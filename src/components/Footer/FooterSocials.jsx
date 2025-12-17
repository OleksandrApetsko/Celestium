export default function FooterSocials() {
  const iconClass =
    "w-6 h-6 text-white/80 hover:text-yellow-400 transition";

  return (
    <div>
      <h3 className="text-lg font-semibold text-yellow-400 mb-4">
        Follow Us
      </h3>

      <div className="flex justify-center space-x-6">

        {/* Twitter / X */}
        <a href="#" aria-label="Twitter">
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" aria-label="Instagram">
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A4.5 4.5 0 1016.5 12 4.51 4.51 0 0012 7.5zm0 7.4A2.9 2.9 0 119.1 12 2.9 2.9 0 0112 14.9zm4.8-7.9a1.1 1.1 0 11-1.1-1.1 1.1 1.1 0 011.1 1.1z"/>
          </svg>
        </a>

        {/* YouTube */}
        <a href="#" aria-label="YouTube">
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M23.5 6.2s-.2-1.7-.8-2.4a3 3 0 00-2.1-.8C17.8 2.8 12 2.8 12 2.8h0s-5.8 0-8.6.2a3 3 0 00-2.1.8c-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.7.8 2.4a3.6 3.6 0 002.3.9c1.7.2 7.2.2 7.2.2s5.8 0 8.6-.2a3 3 0 002.1-.8c.6-.7.8-2.4.8-2.4s.5-1.9.5-3.8v-2c0-1.9-.5-3.8-.5-3.8zM9.7 14.6V7.4l6.2 3.6-6.2 3.6z"/>
          </svg>
        </a>

        {/* TikTok */}
        <a href="#" aria-label="TikTok">
          <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
            <path d="M21 8.1a7.5 7.5 0 01-4.3-1.4v7.8a6.3 6.3 0 11-5.4-6.2v3.2a3.1 3.1 0 103.1 3.1V2h3.2a4.3 4.3 0 004.4 4.1v2z"/>
          </svg>
        </a>

      </div>
    </div>
  );
}
