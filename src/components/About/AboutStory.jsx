import Container from "../Ui/Container.jsx";
import { aboutStoryData } from "../../data/about/aboutStoryData.js";

export default function AboutStory() {
  return (
    <section className="py-20">
      <Container>
        <div
          className="
            bg-white/5 backdrop-blur-xl
            border border-yellow-400/10
            rounded-2xl p-12
            transition
            hover:border-yellow-300/50
            hover:shadow-[0_0_35px_rgba(250,204,21,0.35)]
          "
        >
          <h2 className="text-2xl md:text-3xl font-medium text-yellow-300 mb-8 text-center">
            {aboutStoryData.title}
          </h2>

          <div className="space-y-6 text-white/70 leading-relaxed text-base md:text-lg max-w-4xl mx-auto">
            {aboutStoryData.paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
