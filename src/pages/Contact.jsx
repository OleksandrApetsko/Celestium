import { ContactForm, ContactDirectInfo, ContactSocials, ContactCTA }
  from "../components/Contact";

export default function Contact() {
  return (
    <section className="relative z-10 py-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">

        <ContactForm />

        <div className="space-y-10">
          <ContactDirectInfo />
          <ContactSocials />
          <ContactCTA />
        </div>

      </div>
    </section>
  );
}
