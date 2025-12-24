import Container from "../Ui/Container.jsx";

export default function PremiumHero() {
  return (
    <section className="pt-24 pb-20">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
            A Deeper Astrological Perspective
          </h1>

          <p className="text-white/70 text-lg md:text-xl mt-6 leading-relaxed">
            Celestium Premium opens access to full monthly and yearly horoscopes,
            complete compatibility, and the full birth chart.
          </p>

          <p className="text-white/60 text-base mt-4">
            Built for users who want a broader and more continuous
            astrological overview beyond daily and weekly horoscopes.
          </p>
        </div>
      </Container>
    </section>
  );
}
