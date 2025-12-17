import AboutHeader from "../components/About/AboutHeader";
import AboutCards from "../components/About/AboutCards";
import AboutStory from "../components/About/AboutStory";
import TestimonialsCarousel from "../components/Testimonials/TestimonialsCarousel";

export default function About() {
  return (
    <section className="relative z-10 pt-32 pb-28 px-6">

      <AboutHeader />

      <AboutCards />

      <AboutStory />

      <TestimonialsCarousel />

    </section>
  );
}
