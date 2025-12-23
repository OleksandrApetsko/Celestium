// src/data/compatibilityElements.js
// SSOT — Premium elemental analysis for ALL zodiac pairs

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
  pisces: "Water",
};

// 🔑 базові тексти для комбінацій елементів
const ELEMENT_PAIR_TEXT = {
  "Fire-Fire": {
    Fire: [8, "High passion and drive. Energy feeds energy, but ego clashes are possible."],
    Earth: [4, "Grounding is weak. Stability must be consciously built."],
    Air: [6, "Ideas flow, but execution can lack consistency."],
    Water: [3, "Emotional depth is often overlooked in favor of action."]
  },

  "Fire-Earth": {
    Fire: [5, "Drive meets resistance. Momentum depends on shared priorities."],
    Earth: [7, "Earth stabilizes Fire when respect for pace exists."],
    Air: [4, "Communication can feel blocked or one-sided."],
    Water: [6, "Emotions surface gradually through trust."]
  },

  "Fire-Air": {
    Fire: [7, "Action is inspired by ideas and vision."],
    Earth: [4, "Practical structure needs effort."],
    Air: [8, "Strong mental and motivational synergy."],
    Water: [3, "Emotional processing may be skipped."]
  },

  "Fire-Water": {
    Fire: [6, "Intensity is high but volatile."],
    Earth: [5, "Grounding is possible through shared routines."],
    Air: [4, "Misunderstandings arise without clarity."],
    Water: [7, "Deep emotional pull, but moods fluctuate."]
  },

  "Earth-Earth": {
    Fire: [3, "Low spontaneity unless consciously cultivated."],
    Earth: [9, "Strong stability and long-term potential."],
    Air: [4, "Communication is practical, not expressive."],
    Water: [6, "Emotional safety grows over time."]
  },

  "Earth-Air": {
    Fire: [4, "Motivation fluctuates."],
    Earth: [6, "Structure exists but may feel rigid."],
    Air: [7, "Ideas meet execution when aligned."],
    Water: [4, "Emotional topics can be avoided."]
  },

  "Earth-Water": {
    Fire: [3, "Low impulsive energy."],
    Earth: [8, "Security and trust are strong."],
    Air: [4, "Communication is subtle rather than verbal."],
    Water: [8, "Deep emotional bonding potential."]
  },

  "Air-Air": {
    Fire: [5, "Energy comes from ideas, not action."],
    Earth: [4, "Consistency must be developed."],
    Air: [9, "Excellent communication and mental flow."],
    Water: [3, "Emotional depth may feel abstract."]
  },

  "Air-Water": {
    Fire: [4, "Motivation varies with mood."],
    Earth: [4, "Practical matters need attention."],
    Air: [7, "Imagination and ideas blend well."],
    Water: [7, "Emotional sensitivity enhances connection."]
  },

  "Water-Water": {
    Fire: [3, "Low external drive."],
    Earth: [6, "Stability grows through emotional safety."],
    Air: [4, "Feelings may replace words."],
    Water: [9, "Very deep emotional resonance."]
  }
};

// 🔨 генерація всіх пар
function buildPair(a, b) {
  const elA = ELEMENTS[a];
  const elB = ELEMENTS[b];
  const key =
    elA === elB
      ? `${elA}-${elB}`
      : `${elA}-${elB}` in ELEMENT_PAIR_TEXT
        ? `${elA}-${elB}`
        : `${elB}-${elA}`;

  const base = ELEMENT_PAIR_TEXT[key];

  return {
    Fire: { score: base.Fire[0], text: base.Fire[1] },
    Earth: { score: base.Earth[0], text: base.Earth[1] },
    Air: { score: base.Air[0], text: base.Air[1] },
    Water: { score: base.Water[0], text: base.Water[1] },
  };
}

// ✅ ФІНАЛЬНИЙ SSOT
export const compatibilityElements = {};

for (const a of SIGNS) {
  for (const b of SIGNS) {
    compatibilityElements[`${a}-${b}`] = buildPair(a, b);
  }
}
