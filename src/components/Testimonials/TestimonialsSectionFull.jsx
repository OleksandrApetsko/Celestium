import { testimonialsData } from "../../data/testimonialsData.js";
import TestimonialCard from "./TestimonialCard.jsx";

export default function TestimonialsSectionFull() {
  return (
    <section className="relative z-10 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.28em] text-yellow-300">
            Community Voices
          </span>

          <h2 className="text-4xl sm:text-5xl text-white font-light mt-3">
            Full Testimonials
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-5 text-base">
            Here is the complete constellation of feedback from our users.
          </p>
        </div>

        {/* FULL GRID — без slice */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonialsData.map((item, idx) => (
            <TestimonialCard
              key={idx}
              name={item.name}
              role={item.role}
              text={item.text}
              avatar={item.avatar}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
