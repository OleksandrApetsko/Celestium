// src/data/compatibility/compatibilityConflicts.js

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
   CONFLICT GENERATOR
========================= */

function conflictText(a, b) {
  const ea = ELEMENT[a];
  const eb = ELEMENT[b];

  if (a === b) {
    return [
      "Conflicts arise when mirrored weaknesses amplify rather than balance each other.",
      "Stubborn attachment to familiar patterns can prevent healthy compromise.",
      "Growth requires recognizing shared blind spots instead of reinforcing them."
    ];
  }

  if (ea === eb) {
    return [
      "Tension emerges when similar temperaments compete for control or validation.",
      "Conflicts often stem from mutual inflexibility rather than misunderstanding.",
      "Resolving issues requires conscious effort to avoid repetitive patterns."
    ];
  }

  if (
    (ea === "Fire" && eb === "Water") ||
    (ea === "Water" && eb === "Fire")
  ) {
    return [
      "Emotional sensitivity clashes with impulsive reactions, escalating conflicts quickly.",
      "One partner may feel overwhelmed while the other feels emotionally restricted.",
      "Balance is found when intensity is tempered with empathy."
    ];
  }

  if (
    (ea === "Air" && eb === "Earth") ||
    (ea === "Earth" && eb === "Air")
  ) {
    return [
      "Practical concerns conflict with abstract thinking and future-focused ideas.",
      "Misunderstandings arise when logic and execution fall out of sync.",
      "Patience is required to bridge differences in pacing and priorities."
    ];
  }

  if (
    (ea === "Fire" && eb === "Earth") ||
    (ea === "Earth" && eb === "Fire")
  ) {
    return [
      "Risk-taking tendencies clash with the need for stability and predictability.",
      "One partner may push forward while the other resists sudden change.",
      "Conflicts ease when ambition is grounded in realism."
    ];
  }

  if (
    (ea === "Air" && eb === "Water") ||
    (ea === "Water" && eb === "Air")
  ) {
    return [
      "Emotional depth may feel misunderstood or dismissed by rational analysis.",
      "One partner seeks emotional reassurance while the other prioritizes clarity and logic.",
      "Healthy dialogue requires validating both feelings and ideas."
    ];
  }

  return [
    "Conflicts tend to surface around unmet expectations and communication gaps.",
    "Differences become problematic when assumptions replace open dialogue.",
    "Resolution depends on willingness to adapt and listen actively."
  ];
}

/* =========================
   FULL MAP (144 PAIRS)
========================= */

const compatibilityConflicts = {};

SIGNS.forEach((a) => {
  SIGNS.forEach((b) => {
    compatibilityConflicts[`${a}-${b}`] = conflictText(a, b);
  });
});

export default compatibilityConflicts;
