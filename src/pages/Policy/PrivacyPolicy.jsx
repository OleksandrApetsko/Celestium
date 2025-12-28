import { privacyPolicy } from "../../data/policy/privacyPolicy";

export default function PrivacyPolicy() {
  const { title, sections, updated } = privacyPolicy;

  return (
    <section className="relative z-10 pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-neutral-300 space-y-6">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>

        {sections.map((item, index) => (
          <div key={index} className="space-y-2">
            {item.title && (
              <h2 className="text-xl font-semibold text-white">
                {item.title}
              </h2>
            )}
            <p>{item.text}</p>
          </div>
        ))}

        <p className="text-sm text-neutral-400">Last updated: {updated}</p>
      </div>
    </section>
  );
}
