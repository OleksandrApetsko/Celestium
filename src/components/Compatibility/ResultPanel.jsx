import ScoreRing from "./ScoreRing";
import ElementBalance from "./ElementBalance";
import TraitsMatrix from "./TraitsMatrix";
import AdviceBlock from "./AdviceBlock";

export default function ResultPanel({ signA, signB, result }) {
  return (
    <div className="max-w-5xl mx-auto bg-white/5 border border-yellow-400/20 backdrop-blur-xl rounded-3xl p-16
                    shadow-[0_0_45px_rgba(255,215,0,0.15)]">

      <h2 className="text-center text-5xl text-yellow-300 tracking-[0.25em] mb-14 drop-shadow-[0_0_25px_rgba(255,215,0,0.4)]">
        {signA} ✦ {signB}
      </h2>

      <div className="flex justify-center mb-24">
        <ScoreRing value={result.score} />
      </div>

      <div className="mt-20">
        <ElementBalance elements={result.elements} />
      </div>

      <div className="mt-20">
        <TraitsMatrix traits={result.traits} />
      </div>

      <div className="mt-20">
        <AdviceBlock advice={result.advice} />
      </div>

    </div>
  );
}
