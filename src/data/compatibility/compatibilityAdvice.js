// src/data/compatibility/compatibilityAdvice.js

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

/* =========================
   ADVICE GENERATOR
========================= */

function adviceText(a, b) {
  const ea = ELEMENT[a];
  const eb = ELEMENT[b];

  if (ea === eb) {
    return (
      "This relationship thrives when both partners consciously encourage growth beyond their shared comfort zone. " +
      "Leaning into mutual understanding is a strength, but long-term fulfillment comes from challenging each other " +
      "to evolve rather than remaining emotionally static."
    );
  }

  if (
    (ea === "Fire" && eb === "Air") ||
    (ea === "Air" && eb === "Fire")
  ) {
    return (
      "This connection benefits from maintaining momentum through shared goals and open dialogue. " +
      "Inspiration flows easily here, but grounding ideas into consistent action will determine whether " +
      "the relationship reaches its full potential."
    );
  }

  if (
    (ea === "Earth" && eb === "Water") ||
    (ea === "Water" && eb === "Earth")
  ) {
    return (
      "This bond grows strongest when emotional sensitivity and practical stability are treated as complementary forces. " +
      "By honoring both structure and feeling, this relationship can develop into a deeply supportive and lasting partnership."
    );
  }

  if (
    (ea === "Fire" && eb === "Water") ||
    (ea === "Water" && eb === "Fire")
  ) {
    return (
      "Balancing intensity with emotional awareness is essential in this relationship. " +
      "When passion is tempered with empathy, challenges transform into opportunities for profound connection and growth."
    );
  }

  if (
    (ea === "Air" && eb === "Earth") ||
    (ea === "Earth" && eb === "Air")
  ) {
    return (
      "This relationship succeeds when ideas are supported by patience and practical follow-through. " +
      "Mutual respect for different pacing styles will allow understanding to deepen over time."
    );
  }

  return (
    "This connection requires conscious effort, clear communication, and emotional flexibility from both partners. " +
    "When differences are approached with curiosity rather than resistance, the relationship can evolve in unexpected and meaningful ways."
  );
}

/* =========================
   FULL MAP (144 PAIRS)
========================= */

const compatibilityAdvice = {};

SIGNS.forEach((a) => {
  SIGNS.forEach((b) => {
    const key = `${a}-${b}`;
    compatibilityAdvice[key] = adviceText(a, b);
  });
});

export default compatibilityAdvice;
