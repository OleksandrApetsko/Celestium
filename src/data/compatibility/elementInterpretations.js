/**
 * Element interpretations are resolved from static data
 * based on:
 *  - element
 *  - value (1–10)
 *  - signA + signB
 */

import fire from "./elementTexts/fire";
import earth from "./elementTexts/earth";
import air from "./elementTexts/air";
import water from "./elementTexts/water";

function levelBand(value) {
  if (value <= 3) return "low";
  if (value <= 6) return "medium";
  return "high";
}

function normalize(sign) {
  return String(sign || "").toLowerCase().trim();
}

function pairKey(signA, signB) {
  return [normalize(signA), normalize(signB)]
    .sort()
    .join("-");
}

const ELEMENT_MAP = {
  Fire: fire,
  Earth: earth,
  Air: air,
  Water: water
};

export function getElementText({ element, value, signA, signB }) {
  const band = levelBand(value);
  const key = pairKey(signA, signB);

  return ELEMENT_MAP[element]?.[key]?.[band] ?? "";
}
