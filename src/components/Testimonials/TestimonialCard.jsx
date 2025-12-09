export default function TestimonialCard({ name, role, text, avatar }) {
  return (
    <div
      className="
        group p-9 rounded-3xl bg-white/5 backdrop-blur-xl border border-yellow-400/10
        hover:border-yellow-300/50 transition-all duration-500
        hover:shadow-[0_0_35px_rgba(255,215,0,0.35)] hover:-translate-y-1
      "
    >
      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-yellow-300/40 shadow-lg">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Review text */}
      <p className="text-white/85 text-[15px] leading-relaxed italic mb-6">
        “{text}”
      </p>

      {/* User */}
      <h4 className="text-white text-lg font-medium text-center tracking-wide">
        {name}
      </h4>
      <p className="text-yellow-300 text-xs tracking-wider text-center mt-1">
        {role}
      </p>
    </div>
  );
}
