// src/data/compatibility/compatibilityStyles.js

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
   TEXT GENERATORS (SSOT)
========================= */

function emotionalText(a, b) {
  const ea = ELEMENT[a];
  const eb = ELEMENT[b];

  if (ea === eb) {
    return [
      "Emotional expression feels familiar and instinctive, creating a sense of mutual understanding.",
      "Both partners process feelings in similar ways, which reduces emotional friction.",
      "The challenge lies in avoiding emotional stagnation or mirrored weaknesses."
    ];
  }

  if (
    (ea === "Fire" && eb === "Air") ||
    (ea === "Air" && eb === "Fire")
  ) {
    return [
      "Emotions are fueled by excitement, ideas, and shared momentum.",
      "Feelings are often stimulated through conversation and shared experiences.",
      "Emotional connection thrives when enthusiasm is balanced with sensitivity."
    ];
  }

  if (
    (ea === "Earth" && eb === "Water") ||
    (ea === "Water" && eb === "Earth")
  ) {
    return [
      "Emotions develop steadily through trust, care, and emotional security.",
      "One partner stabilizes while the other deepens emotional awareness.",
      "This bond strengthens when emotional needs are acknowledged without pressure."
    ];
  }

  return [
    "Emotional expression differs significantly, requiring conscious adaptation.",
    "Misalignment may occur when emotional signals are interpreted differently.",
    "Growth happens when emotional patience replaces instinctive reactions."
  ];
}

function communicationText(a, b) {
  const ea = ELEMENT[a];
  const eb = ELEMENT[b];

  if (ea === eb) {
    return [
      "Communication flows naturally with shared rhythms and expectations.",
      "Both partners rely on similar logic, tone, and pacing in dialogue.",
      "Blind spots arise when assumptions replace explicit communication."
    ];
  }

  if (ea === "Air" || eb === "Air") {
    return [
      "Dialogue is mentally stimulating and idea-driven.",
      "Conversations often explore concepts, possibilities, and future plans.",
      "Misunderstandings occur when emotional context is overlooked."
    ];
  }

  if (ea === "Water") {
    return [
      "Communication relies heavily on emotional cues and unspoken understanding.",
      "Tone and timing matter more than exact wording.",
      "Clarity improves when emotions are verbalized instead of assumed."
    ];
  }

  return [
    "Communication is practical but may lack emotional nuance.",
    "Both partners value clarity, yet may avoid deeper emotional discussions.",
    "Growth comes through balancing efficiency with emotional openness."
  ];
}

/* =========================
   FULL DATA MAP (ALL PAIRS)
========================= */

const compatibilityStyles = {};

SIGNS.forEach((a) => {
  SIGNS.forEach((b) => {
    const key = `${a}-${b}`;

    compatibilityStyles[key] = {
      emotional: emotionalText(a, b),
      communication: communicationText(a, b)
    };
  });
});

export default compatibilityStyles;
