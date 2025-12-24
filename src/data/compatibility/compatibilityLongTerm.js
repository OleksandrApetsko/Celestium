// src/data/compatibility/compatibilityLongTerm.js

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
   LONG-TERM GENERATOR
========================= */

function longTermText(a, b) {
  const ea = ELEMENT[a];
  const eb = ELEMENT[b];

  if (ea === eb) {
    return [
      "This connection has strong long-term stability due to shared values and compatible life rhythms.",
      "Both partners naturally understand each other’s long-term expectations and pacing.",
      "The main challenge lies in maintaining growth and avoiding complacency over time."
    ];
  }

  if (
    (ea === "Fire" && eb === "Air") ||
    (ea === "Air" && eb === "Fire")
  ) {
    return [
      "Long-term success depends on shared goals and continuous mutual inspiration.",
      "This relationship evolves dynamically rather than settling into rigid routines.",
      "Sustainability improves when practical responsibilities are consciously addressed."
    ];
  }

  if (
    (ea === "Earth" && eb === "Water") ||
    (ea === "Water" && eb === "Earth")
  ) {
    return [
      "This bond has strong long-term potential built on trust, loyalty, and emotional grounding.",
      "One partner provides stability while the other nurtures emotional depth.",
      "Over time, this connection can mature into a deeply supportive partnership."
    ];
  }

  return [
    "Long-term potential exists but requires deliberate effort and mutual adaptation.",
    "Differences may become more noticeable with time if not consciously managed.",
    "Growth and longevity depend on shared commitment and emotional flexibility."
  ];
}

/* =========================
   FULL MAP (144 PAIRS)
========================= */

const compatibilityLongTerm = {};

SIGNS.forEach((a) => {
  SIGNS.forEach((b) => {
    const key = `${a}-${b}`;
    compatibilityLongTerm[key] = longTermText(a, b);
  });
});

export default compatibilityLongTerm;
