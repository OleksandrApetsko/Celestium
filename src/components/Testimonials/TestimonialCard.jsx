export default function TestimonialCard({ name, role, text }) {
  return (
    <div
      className="
        h-full flex flex-col
        p-8 rounded-3xl
        bg-white/5 backdrop-blur-xl
        border border-yellow-400/10
        transition-all duration-500
        hover:border-yellow-300/50
        hover:shadow-[0_0_35px_rgba(255,215,0,0.35)]
      "
    >
      {/* Quote */}
      <p className="text-white/85 text-sm leading-relaxed italic mb-8 line-clamp-6">
        “{text}”
      </p>

      {/* Spacer to equalize height */}
      <div className="flex-grow" />

      {/* Author */}
      <div className="text-center">
        <h4 className="text-white text-base font-medium">
          {name}
        </h4>
        <p className="text-yellow-300 text-xs tracking-wider mt-1">
          {role}
        </p>
      </div>
    </div>
  );
}
