import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <div className="text-center mt-32">

      <h3 className="text-3xl text-yellow-300 mb-6">
        Continue Your Journey
      </h3>

      <p className="text-white/60 max-w-xl mx-auto mb-10">
        Explore compatibility, discover zodiac patterns and experience
        Celestium the way it was meant to be — immersive and intuitive.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">

        <Link
          to="/compatibility"
          className="
            px-8 py-3 rounded-full bg-yellow-300 text-black font-semibold
            shadow-[0_0_25px_rgba(255,215,0,0.45)] hover:shadow-[0_0_40px_rgba(255,215,0,0.75)]
            transition
          "
        >
          Check Compatibility
        </Link>

        <Link
          to="/zodiac"
          className="
            px-8 py-3 rounded-full border border-yellow-300 text-yellow-300 font-semibold
            hover:bg-yellow-300 hover:text-black transition
          "
        >
          Explore Zodiac Signs
        </Link>

      </div>
    </div>
  );
}
