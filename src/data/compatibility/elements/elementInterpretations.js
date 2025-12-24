import fire from "./fire.js";
import earth from "./earth.js";
import air from "./air.js";
import water from "./water.js";

const ELEMENT_MAP = {
  Fire: fire,
  Earth: earth,
  Air: air,
  Water: water
};

function levelBand(value) {
  if (value <= 3) return "low";
  if (value <= 6) return "medium";
  return "high";
}

export function getElementText({ element, value, signA, signB }) {
  if (!element || value == null || !signA || !signB) return "";

  const band = levelBand(value);
  const key = `${String(signA).toLowerCase()}-${String(signB).toLowerCase()}`;

  const source = ELEMENT_MAP[element];
  if (!source) return "";

  const pairData = source[key];
  if (!pairData) return "";

  return pairData[band] || "";
}
