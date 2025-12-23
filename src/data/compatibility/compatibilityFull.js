// src/data/compatibility/compatibilityFull.js
// SSOT — Full Compatibility Data (v1)

const SIGNS = [
  "aries","taurus","gemini","cancer","leo","virgo",
  "libra","scorpio","sagittarius","capricorn","aquarius","pisces"
];

function buildPair(signA, signB, score, elementBias) {
  return {
    score,

    elements: {
      Fire: elementBias.fire,
      Earth: elementBias.earth,
      Air: elementBias.air,
      Water: elementBias.water
    },

    traits: {
      positive: [
        `${capitalize(signA)} contributes initiative and perspective`,
        `${capitalize(signB)} adds complementary energy and depth`,
        "Mutual growth is possible through conscious alignment"
      ],
      negative: [
        "Different emotional pacing may cause misunderstandings",
        "Expectations can clash if left unspoken",
        "Stubborn patterns may appear under stress"
      ]
    },

    emotionalStyle: [
      `${capitalize(signA)} expresses emotions in a direct, instinctive way`,
      `${capitalize(signB)} processes feelings through their dominant element`,
      "Emotional trust develops through patience and consistency"
    ],

    communicationStyle: [
      "Clear communication reduces unnecessary tension",
      "Listening matters more than winning arguments",
      "Timing conversations improves mutual understanding"
    ],

    longTerm: [
      "Long-term success depends on respecting differences",
      "Shared values strengthen commitment over time",
      "This pairing matures with experience and honesty"
    ],

    advice:
      "Respect each other’s rhythm, communicate expectations early, and return to shared values during conflict. Conscious effort transforms differences into long-term strength."
  };
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const compatibilityFull = {};

SIGNS.forEach((a) => {
  compatibilityFull[a] = {};
  SIGNS.forEach((b) => {
    // базовий скоринг (v1 логіка)
    const same = a === b;
    const score = same ? 82 : 60 + ((SIGNS.indexOf(a) + SIGNS.indexOf(b)) % 25);

    compatibilityFull[a][b] = buildPair(
      a,
      b,
      Math.min(score, 95),
      {
        fire: 5 + (a === "aries" || b === "aries" ? 2 : 0),
        earth: 5 + (a === "taurus" || b === "capricorn" || a === "virgo" ? 2 : 0),
        air: 5 + (a === "gemini" || a === "libra" || a === "aquarius" ? 2 : 0),
        water: 5 + (a === "cancer" || a === "scorpio" || a === "pisces" ? 2 : 0)
      }
    );
  });
});

export default compatibilityFull;
