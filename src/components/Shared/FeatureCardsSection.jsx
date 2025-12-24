import Container from "../Ui/Container.jsx";
import { Link } from "react-router-dom";
import InfoCard from "./InfoCard.jsx";

export default function FeatureCardsSection({
  eyebrow,
  title,
  description,
  items,
  ctaLabel,
  ctaHref
}) {
  return (
    <section className="relative z-10 py-16 md:py-24 lg:py-28">
      <Container>
        {/* HEADER */}
        <div className="text-center mb-14">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-4">
              {eyebrow}
            </p>
          )}

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white">
            {title}
          </h2>

          {description && (
            <p className="mt-6 text-white/70 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {items.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        {/* CTA */}
        {ctaLabel && ctaHref && (
          <div className="flex justify-center">
            <Link
              to={ctaHref}
              className="
                inline-flex items-center justify-center
                rounded-xl bg-yellow-300 text-black
                px-12 py-4 font-semibold
                transition-all duration-300
                hover:brightness-110
                hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]
              "
            >
              {ctaLabel} →
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
