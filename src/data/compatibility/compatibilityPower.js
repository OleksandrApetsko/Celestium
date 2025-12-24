// src/data/compatibility/compatibilityPower.js

const SIGNS = [
  "aries", "taurus", "gemini", "cancer",
  "leo", "virgo", "libra", "scorpio",
  "sagittarius", "capricorn", "aquarius", "pisces"
];

const ELEMENT = {
  aries: "Fire", leo: "Fire", sagittarius: "Fire",
  taurus: "Earth", virgo: "Earth", capricorn: "Earth",
  gemini: "Air", libra: "Air", aquarius: "Air",
  cancer: "Water", scorpio: "Water", pisces: "Water"
};

function powerDynamics(a, b) {
  const ea = ELEMENT[a];
  const eb = ELEMENT[b];

  // Same sign
  if (a === b) {
    return [
      "Both partners tend to seek influence in similar ways, which can strengthen mutual respect or intensify rivalry.",
      "Power struggles arise when neither wants to step back or change approach.",
      "Balance improves when leadership is consciously shared rather than assumed."
    ];
  }

  // Same element
  if (ea === eb) {
    return [
      "Both partners express authority through familiar patterns and shared instincts.",
      "Tension may appear when neither wants to уступати or compromise easily.",
      "Healthy balance requires flexibility and willingness to alternate leadership."
    ];
  }

  // Fire dominant
  if (ea === "Fire" && eb !== "Fire") {
    return [
      "One partner naturally takes initiative and pushes the relationship forward.",
      "The other may adapt or react rather than lead directly.",
      "Balance grows when initiative is paired with genuine consideration of the partner’s pace."
    ];
  }

  // Earth dominant
  if (ea === "Earth" && eb !== "Earth") {
    return [
      "One partner tends to set boundaries, routines, and expectations early on.",
      "Tension arises when consistency begins to feel restrictive to the other.",
      "Balance improves when stability leaves room for flexibility and change."
    ];
  }

  // Air dominant
  if (ea === "Air" && eb !== "Air") {
    return [
      "Influence is expressed through ideas, discussion, and framing decisions logically.",
      "The other partner may feel unheard if emotional context is overlooked.",
      "Power balances out when listening becomes as important as explaining."
    ];
  }

  // Water dominant (default emotional influence)
  return [
    "Leadership shifts subtly based on emotional closeness and reassurance.",
    "One partner may guide the relationship indirectly through emotional responses.",
    "Balance forms when emotional needs are acknowledged openly rather than implied."
  ];
}

const compatibilityPower = {};

SIGNS.forEach((a) => {
  SIGNS.forEach((b) => {
    compatibilityPower[`${a}-${b}`] = {
      dynamics: powerDynamics(a, b)
    };
  });
});

export default compatibilityPower;
