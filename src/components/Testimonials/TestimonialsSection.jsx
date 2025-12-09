import { Link } from "react-router-dom";
import { testimonialsData } from "../../data/testimonialsData.js";
import TestimonialCard from "./TestimonialCard.jsx";

export default function TestimonialsSection() {
  const preview = testimonialsData.slice(0, 3); // показуємо тільки три

  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-yellow-300">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-light mt-2">
            What People Are Saying
          </h2>

          <p className="text-white/65 max-w-xl mx-auto mt-4 text-sm sm:text-base">
            A glimpse of real experiences from users who felt the Celestium effect.
          </p>
        </div>

        {/* GRID — тільки 3 картки на головній */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {preview.map((item, idx) => (
            <TestimonialCard
              key={idx}
              name={item.name}
              role={item.role}
              text={item.text}
              avatar={item.avatar}
            />
          ))}
        </div>

        {/* CTA → веде на About */}
        <div className="text-center mt-14">
          <Link
            to="/about"
            className="
              inline-block px-10 py-3 rounded-full border border-yellow-300 text-yellow-300 font-semibold
              tracking-wide hover:bg-yellow-300 hover:text-black transition
            "
          >
            View All Testimonials
          </Link>
        </div>

      </div>
    </section>
  );
}
