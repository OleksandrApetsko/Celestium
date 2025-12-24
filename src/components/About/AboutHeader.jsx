import Container from "../Ui/Container.jsx";
import { aboutHeaderData } from "../../data/about/aboutHeaderData.js";

export default function AboutHeader() {
  return (
    <section className="pt-24 pb-20">
      <Container>
        <div className="text-center">
          <h1 className="
            text-6xl md:text-7xl font-light tracking-[0.22em]
            text-yellow-300
            drop-shadow-[0_0_40px_rgba(255,215,0,0.30)]
          ">
            {aboutHeaderData.title}
          </h1>

          <h2 className="text-3xl md:text-4xl text-white/90 mt-4 font-semibold">
            {aboutHeaderData.subtitle}
          </h2>
        </div>
      </Container>
    </section>
  );
}
