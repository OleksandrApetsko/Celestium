import { disclaimer } from "../../data/policy/disclaimer";

export default function Disclaimer() {
  const { title, sections, updated } = disclaimer;

  return (
    <section className="relative z-10 pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-neutral-300 space-y-6">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>

        {sections.map((item, index) => (
          <p key={index}>{item.text}</p>
        ))}

        <p className="text-sm text-neutral-400">
          Last updated: {updated}
        </p>
      </div>
    </section>
  );
}
