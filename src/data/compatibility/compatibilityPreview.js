const SIGNS = [
  "aries","taurus","gemini","cancer","leo","virgo",
  "libra","scorpio","sagittarius","capricorn","aquarius","pisces"
];

const ELEMENT = {
  aries: "Fire", leo: "Fire", sagittarius: "Fire",
  taurus: "Earth", virgo: "Earth", capricorn: "Earth",
  gemini: "Air", libra: "Air", aquarius: "Air",
  cancer: "Water", scorpio: "Water", pisces: "Water"
};

function scoreFor(a, b) {
  const elA = ELEMENT[a];
  const elB = ELEMENT[b];

  let score = 72;
  if (a === b) score = 82;
  else if (elA === elB) score = 88;
  else {
    const set = new Set([elA, elB]);
    const fireAir = set.has("Fire") && set.has("Air");
    const earthWater = set.has("Earth") && set.has("Water");
    const fireWater = set.has("Fire") && set.has("Water");
    const airEarth = set.has("Air") && set.has("Earth");

    if (fireAir || earthWater) score += 6;
    if (fireWater || airEarth) score -= 6;
  }

  if (score < 50) score = 50;
  if (score > 95) score = 95;
  return score;
}

function summaryFor(a, b) {
  const elA = ELEMENT[a];
  const elB = ELEMENT[b];
  const set = new Set([elA, elB]);

  if (a === b) {
    return "A resonant match that amplifies both strengths and blind spots. Powerful, familiar, and intense.";
  }
  if (elA === elB) {
    return "Same-element synergy: natural understanding, similar motivations, and strong alignment when goals are shared.";
  }
  if (set.has("Fire") && set.has("Air")) {
    return "High chemistry and fast momentum. Inspiration and curiosity fuel the connection when communication stays clear.";
  }
  if (set.has("Earth") && set.has("Water")) {
    return "Supportive and stabilizing. Emotional depth pairs well with practical commitment when needs are voiced openly.";
  }
  if (set.has("Fire") && set.has("Water")) {
    return "Intense attraction with reactive undertones. Works best with emotional regulation and slower pacing during conflict.";
  }
  if (set.has("Air") && set.has("Earth")) {
    return "Mind meets structure. Works best when plans stay flexible and expectations are explicit.";
  }
  return "A balanced and evolving connection that grows through respect for different rhythms and honest dialogue.";
}

function highlightsFor(a, b) {
  const elA = ELEMENT[a];
  const elB = ELEMENT[b];
  const set = new Set([elA, elB]);

  if (a === b) return [
    "Strong recognition and resonance",
    "Shared instincts intensify patterns",
    "Best with variety and boundaries"
  ];

  if (elA === elB) return [
    "Natural understanding and alignment",
    "Increased loyalty and consistency",
    "Needs novelty to avoid routine fatigue"
  ];

  if (set.has("Fire") && set.has("Air")) return [
    "Chemistry, playfulness and momentum",
    "Fast communication and shared enthusiasm",
    "Risk: burnout without grounding"
  ];

  if (set.has("Earth") && set.has("Water")) return [
    "Security + emotional attunement",
    "Good for long-term building",
    "Risk: emotional heaviness if unspoken"
  ];

  if (set.has("Fire") && set.has("Water")) return [
    "Deep bond potential",
    "Powerful attraction",
    "Risk: reactive conflict and pacing mismatch"
  ];

  if (set.has("Air") && set.has("Earth")) return [
    "Ideas + structure synergy",
    "Reliable progress when aligned",
    "Risk: criticism vs detachment"
  ];

  return [
    "Complementary growth potential",
    "Balanced long-term alignment possible",
    "Works best with clear expectations"
  ];
}

const compatibilityPreview = {};
for (const a of SIGNS) {
  compatibilityPreview[a] = {};
  for (const b of SIGNS) {
    compatibilityPreview[a][b] = {
      score: scoreFor(a, b),
      summary: summaryFor(a, b),
      highlights: highlightsFor(a, b)
    };
  }
}

export default compatibilityPreview;
