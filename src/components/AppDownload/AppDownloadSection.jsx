export default function AppDownloadSection() {
  return (
    <section className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* LABEL */}
        <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
          Mobile App
        </span>

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mt-3">
          Celestium App — Coming Soon
        </h2>

        {/* SUBTEXT */}
        <p className="text-white/70 max-w-xl mx-auto mt-4 text-sm sm:text-base">
          Experience daily horoscopes, cosmic insights and personalized astrology in your pocket.
        </p>

        {/* BADGES */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">

          {/* APP STORE BADGE */}
          <a
            href="#"
            className="
              group flex items-center gap-4 px-7 py-4 rounded-2xl
              bg-black/40 backdrop-blur-xl border border-white/10
              hover:border-yellow-400/70 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]
              transition-all
            "
          >
            {/* Icon */}
            <div className="text-yellow-300 text-4xl group-hover:text-yellow-200 transition">
              
            </div>

            {/* Text */}
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Download on the
              </div>
              <div className="text-lg font-semibold text-white -mt-1">
                App Store
              </div>
            </div>
          </a>

          {/* GOOGLE PLAY BADGE */}
          <a
            href="#"
            className="
              group flex items-center gap-4 px-7 py-4 rounded-2xl
              bg-black/40 backdrop-blur-xl border border-white/10
              hover:border-yellow-400/70 hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]
              transition-all
            "
          >
            {/* Icon */}
            <svg
              className="w-7 h-7 text-yellow-300 group-hover:text-yellow-200 transition"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path d="M325.3 234.3L104.6 13.6C95.5 4.5 82.3 0 69.4 0 49.8 0 32 16.8 32 36.4v439.2c0 19.6 17.8 36.4 37.4 36.4 12.9 0 26.1-4.5 35.2-13.6l220.7-220.7c16.7-16.7 16.7-44 0-60.8zM393 147.3l-33.9-33.9c-3.4-3.4-7.3-6.1-11.4-8.1l-48.5-24.3-95.1-47.6 173.7 173.7 15.2-30.1c3.5-7.1 1.9-15.7-3.9-21.4zM393 323l-40.6-40.6-173.7 173.7 95.1-47.6 48.5-24.3c4.2-2.1 8.1-4.8 11.4-8.1l33.9-33.9c5.8-5.7 7.4-14.3 3.9-21.4L393 323z"/>
            </svg>

            {/* Text */}
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider text-white/60">
                Get it on
              </div>
              <div className="text-lg font-semibold text-white -mt-1">
                Google Play
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
