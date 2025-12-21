// src/data/compatibilityFull.js
// FULL COMPATIBILITY DATA (SSOT)
// Used by <CompatibilityFull />

const SIGNS = [
  "aries","taurus","gemini","cancer","leo","virgo",
  "libra","scorpio","sagittarius","capricorn","aquarius","pisces"
];

const ELEMENTS = {
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

const BASE_ELEMENTS = ["Fire", "Earth", "Air", "Water"];

/* -------------------------
   CORE GENERATORS
------------------------- */

function computeScore(a, b) {
  if (a === b) return 82;

  const ea = ELEMENTS[a];
  const eb = ELEMENTS[b];

  if (ea === eb) return 88;

  const pair = new Set([ea, eb]);

  if (pair.has("Fire") && pair.has("Air")) return 78;
  if (pair.has("Earth") && pair.has("Water")) return 80;
  if (pair.has("Fire") && pair.has("Water")) return 62;
  if (pair.has("Air") && pair.has("Earth")) return 64;

  return 70;
}

function computeElements(a, b) {
  const ea = ELEMENTS[a];
  const eb = ELEMENTS[b];

  const map = {
    Fire: 4,
    Earth: 4,
    Air: 4,
    Water: 4
  };

  map[ea] += 3;
  map[eb] += 3;

  if (ea === eb) map[ea] += 2;

  BASE_ELEMENTS.forEach(el => {
    if (map[el] > 10) map[el] = 10;
  });

  return map;
}

function buildTraits(a, b) {
  const ea = ELEMENTS[a];
  const eb = ELEMENTS[b];

  return {
    positive: [
      `When aligned, ${a} and ${b} create mutual growth through complementary energy.`,
      `This pairing supports emotional learning and shared perspective expansion.`,
      `There is strong potential for long-term stability when communication stays clear.`
    ],
    negative: [
      `Differences in emotional pacing may lead to misunderstandings.`,
      `Unspoken expectations can build silent tension over time.`,
      `Both signs may retreat into defense instead of open dialogue during conflict.`
    ]
  };
}

function buildAdvice(a, b) {
  if (a === b) {
    return `This connection amplifies both strengths and blind spots. Create structure without rigidity, and allow space for individuality to prevent stagnation.`;
  }

  const ea = ELEMENTS[a];
  const eb = ELEMENTS[b];
  const pair = new Set([ea, eb]);

  if (pair.has("Fire") && pair.has("Air")) {
    return `This relationship thrives on movement, ideas and inspiration. Maintain grounding habits and emotional check-ins to keep momentum healthy.`;
  }

  if (pair.has("Earth") && pair.has("Water")) {
    return `Stability and emotional depth define this bond. Consistency, reassurance and patience turn this into a deeply supportive connection.`;
  }

  if (pair.has("Fire") && pair.has("Water")) {
    return `Intensity requires conscious regulation. Slow reactions, name emotions early and avoid impulsive escalation during disagreements.`;
  }

  if (pair.has("Air") && pair.has("Earth")) {
    return `Balance vision with execution. Respect different tempos and allow flexibility inside agreed structures.`;
  }

  return `Return often to shared values, speak expectations clearly, and allow the relationship to evolve without control or avoidance.`;
}

/* -------------------------
   BUILD FULL MAP
------------------------- */

const compatibilityFull = {};

for (const a of SIGNS) {
  compatibilityFull[a] = {};
  for (const b of SIGNS) {
    compatibilityFull[a][b] = {
      score: computeScore(a, b),
      elements: computeElements(a, b),
      traits: buildTraits(a, b),
      advice: buildAdvice(a, b)
    };
  }
}

export default compatibilityFull;
