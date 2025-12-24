import FeatureCardsSection from "../Shared/FeatureCardsSection.jsx";
import { featureSectionsData } from "../../data/featureSectionsData.js";

export default function PremiumSection() {
  return <FeatureCardsSection {...featureSectionsData.premium} />;
}
