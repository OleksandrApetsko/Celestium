import Container from "../Ui/Container.jsx";
import { extendedForecasts } from "../../data/horoscope/extendedForecasts.js";
import ExtendedForecastHeader from "./ExtendedForecastHeader.jsx";
import ExtendedForecastCard from "./ExtendedForecastCard.jsx";

export default function ExtendedForecastSection() {
  return (
    <section className="relative z-10 py-16 md:py-24 lg:py-28">
      <Container>
        <ExtendedForecastHeader />

        <div className="grid md:grid-cols-3 gap-8">
          {extendedForecasts.map((item) => (
            <ExtendedForecastCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
