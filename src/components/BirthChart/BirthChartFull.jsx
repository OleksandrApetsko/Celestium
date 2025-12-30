import BirthChartHouses from "./BirthChartHouses.jsx";
import BirthChartAspects from "./BirthChartAspects.jsx";
import BirthChartPsychology from "./BirthChartPsychology.jsx";
import BirthChartCareerLove from "./BirthChartCareerLove.jsx";
import BirthChartTiming from "./BirthChartTiming.jsx";
// import BirthChartNatalWheel from './NatalWheel/BirthChartNatalWheel.jsx'

/**
 * BirthChartFull
 *
 * Full premium natal chart content.
 * Contains only paid sections.
 */
export default function BirthChartFull() {
  return (
    <div className="space-y-20">
      {/* VISUAL ANCHOR */}
      {/*<BirthChartNatalWheel />*/}

      {/* STRUCTURE */}
      <BirthChartHouses />

      {/* INNER MECHANICS */}
      <BirthChartAspects />

      {/* PSYCHOLOGICAL PATTERNS */}
      <BirthChartPsychology />

      {/* PRACTICAL LIFE AREAS */}
      <BirthChartCareerLove />

      {/* TIMING & CYCLES */}
      <BirthChartTiming />
    </div>
  );
}
