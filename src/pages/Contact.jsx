import { ContactForm, ContactDirectInfo } from "../components/Contact";

export default function Contact() {
  return (
    <section className="relative z-10 py-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-16">

        <ContactForm />

        <ContactDirectInfo />

      </div>
    </section>
  );
}
