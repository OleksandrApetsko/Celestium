import ContactForm from "../components/Contact/ContactForm.jsx";
import HoroscopeNext from "../components/Horoscope/HoroscopeNext.jsx";

export default function Contact() {
  return (
    <section className="relative z-10 pt-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <ContactForm />
      </div>

      <HoroscopeNext period="premium" />
    </section>
  );
}
