// src/data/compatibility/compatibilityChemistry.js

const SIGNS = [
  "aries", "taurus", "gemini", "cancer",
  "leo", "virgo", "libra", "scorpio",
  "sagittarius", "capricorn", "aquarius", "pisces"
];

const ELEMENT = {
  aries: "Fire",
  leo: "Fire",
  sagittarius: "Fire",

  taurus: "Earth",
  virgo: "Earth",
  capricorn: "Earth",

  gemini: "Air",
  libra: "Air",
  aquarius: "Air",

  cancer: "Water",
  scorpio: "Water",
  pisces: "Water"
};

function chemistryText(a, b) {
  const ea = ELEMENT[a];
  const eb = ELEMENT[b];

  if (ea === eb) {
    return {
      description:
        "Attraction builds steadily through familiarity and shared emotional frequency. " +
        "The chemistry feels natural and comfortable rather than explosive, creating a strong sense of ease and trust.",
      intensity: "Moderate"
    };
  }

  if (
    (ea === "Fire" && eb === "Air") ||
    (ea === "Air" && eb === "Fire")
  ) {
    return {
      description:
        "This connection sparks quickly, fueled by excitement, curiosity, and mutual stimulation. " +
        "Attraction feels lively and dynamic, often ignited through conversation and shared experiences.",
      intensity: "High"
    };
  }

  if (
    (ea === "Earth" && eb === "Water") ||
    (ea === "Water" && eb === "Earth")
  ) {
    return {
      description:
        "Attraction develops through emotional safety and physical presence. " +
        "The chemistry is deep, sensual, and rooted in trust rather than instant excitement.",
      intensity: "Strong"
    };
  }

  return {
    description:
      "Attraction exists but may feel inconsistent or unpredictable. " +
      "Chemistry strengthens when differences are approached with openness instead of resistance.",
    intensity: "Variable"
  };
}

/* FULL MAP */

const compatibilityChemistry = {};

SIGNS.forEach((a) => {
  SIGNS.forEach((b) => {
    compatibilityChemistry[`${a}-${b}`] = chemistryText(a, b);
  });
});

export default compatibilityChemistry;
