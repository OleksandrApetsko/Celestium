export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-2">
      <button className="
        px-8 py-3 rounded-full text-sm font-semibold bg-yellow-300 text-black
        hover:bg-yellow-400 shadow-md hover:shadow-[0_0_25px_rgba(255,220,150,0.5)]
        transition-all
      ">
        Get Today’s Horoscope
      </button>

      <button className="
        px-8 py-3 rounded-full text-sm font-medium border border-yellow-300/60 text-yellow-300
        hover:bg-yellow-300 hover:text-black transition-all
      ">
        Explore Zodiac Signs
      </button>
    </div>
  );
}
