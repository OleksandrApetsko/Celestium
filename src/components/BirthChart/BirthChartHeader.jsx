import Container from "../UI/Container.jsx";
import { birthChartHeaderData } from "../../data/birthChart/birthChartHeaderData.js";

export default function BirthChartHeader({ data = birthChartHeaderData }) {
  const { title, description, kicker } = data;

  return (
    <Container>
      <div className="text-center mb-14">
        <h1
          className="
            text-5xl md:text-6xl
            font-light
            tracking-[0.22em]
            text-yellow-300
            drop-shadow-[0_0_28px_rgba(255,215,0,0.45)]
          "
        >
          {title}
        </h1>

        <p className="mt-6 text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>

        <p className="mt-3 text-yellow-300/90 text-xs tracking-[0.35em] uppercase">
          {kicker}
        </p>
      </div>
    </Container>
  );
}
