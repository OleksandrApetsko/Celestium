import FeatureCardsSection from "../Shared/FeatureCardsSection.jsx";
import { featureSectionsData } from "../../data/featureSectionsData.js";

export default function BirthChartSection() {
  return <FeatureCardsSection {...featureSectionsData.birthChart} />;
}
