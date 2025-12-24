import Container from "../Ui/Container.jsx";
import { useState } from "react";
import { premiumFAQ } from "../../data/premium/premiumFAQ.js";

export default function PremiumFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20">
      <Container>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
            Frequently Asked Questions
          </h2>

          <p className="text-white/60 text-center mt-3 mb-12">
            Clear answers about Premium access and content.
          </p>

          <div className="space-y-4">
            {premiumFAQ.map((item, i) => {
              const open = openIndex === i;

              return (
                <div
                  key={i}
                  className="
                    bg-white/5 backdrop-blur-xl
                    border border-white/10 rounded-xl
                    transition hover:border-yellow-300/40
                  "
                >
                  <button
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="w-full text-left p-5 flex justify-between items-center"
                  >
                    <span className="text-white font-medium text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`text-yellow-300 font-bold text-xl transition-transform ${
                        open ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {open && (
                    <p className="px-5 pb-5 text-white/75 leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
