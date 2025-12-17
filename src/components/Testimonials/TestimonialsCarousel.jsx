import { useState } from "react";
import { testimonialsData } from "../../data/testimonialsData";
import TestimonialCard from "./TestimonialCard.jsx";

export default function TestimonialsCarousel() {
  const [page, setPage] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  const start = page * itemsPerPage;
  const visibleItems = testimonialsData.slice(start, start + itemsPerPage);

  const prev = () =>
    setPage((page - 1 + totalPages) % totalPages);

  const next = () =>
    setPage((page + 1) % totalPages);

  return (
    <section className="relative z-10 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.28em] text-yellow-300">
            Community Voices
          </span>

          <h2 className="text-4xl sm:text-5xl text-white font-light mt-3">
            What People Say
          </h2>
        </div>

        {/* Carousel */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <TestimonialCard
              key={item.name}
              name={item.name}
              role={item.role}
              text={item.text}
              avatar={item.avatar}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-6 mt-16">
          <button
            onClick={prev}
            className="
              px-6 py-2 rounded-full
              border border-yellow-300/40
              text-yellow-300
              hover:bg-yellow-300 hover:text-black
              transition
            "
          >
            Prev
          </button>

          <button
            onClick={next}
            className="
              px-6 py-2 rounded-full
              border border-yellow-300/40
              text-yellow-300
              hover:bg-yellow-300 hover:text-black
              transition
            "
          >
            Next
          </button>
        </div>

      </div>
    </section>
  );
}
