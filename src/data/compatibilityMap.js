// src/data/compatibilityMap.js
// Full 12x12 compatibility matrix generated at module load.
// Interface: compatibilityMap[signA][signB] -> { score, elements, traits, advice }

const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

const signElements = {
  Aries: "Fire",
  Leo: "Fire",
  Sagittarius: "Fire",

  Taurus: "Earth",
  Virgo: "Earth",
  Capricorn: "Earth",

  Gemini: "Air",
  Libra: "Air",
  Aquarius: "Air",

  Cancer: "Water",
  Scorpio: "Water",
  Pisces: "Water",
};

const elementOrder = ["Fire", "Earth", "Air", "Water"];

/**
 * Simple helper: returns a numeric score 50–95
 * based on elements and whether signs are identical, same element, etc.
 */
function computeScore(signA, signB) {
  const elA = signElements[signA];
  const elB = signElements[signB];

  // базовий діапазон
  let score = 72;

  if (signA === signB) {
    score = 82; // однакові знаки — сильна резонансна сумісність
  } else if (elA === elB) {
    score = 88; // один і той самий елемент
  } else {
    const pair = new Set([elA, elB]);

    // класична компліментарність
    const isFireAir =
      pair.has("Fire") && pair.has("Air");
    const isEarthWater =
      pair.has("Earth") && pair.has("Water");

    const isFireWater =
      pair.has("Fire") && pair.has("Water");
    const isAirEarth =
      pair.has("Air") && pair.has("Earth");

    if (isFireAir || isEarthWater) {
      score += 6; // природна підтримка одна одної
    }

    if (isFireWater || isAirEarth) {
      score -= 6; // більше напруги
    }
  }

  // обмежуємо в діапазоні
  if (score < 50) score = 50;
  if (score > 95) score = 95;

  return score;
}

/**
 * Element distribution: базовий баланс + підсилення елементів двох знаків.
 * Користується тим, що кожен знак має один домінуючий елемент.
 */
function computeElements(signA, signB) {
  const elA = signElements[signA];
  const elB = signElements[signB];

  // стартовий базовий фон
  const base = {
    Fire: 4,
    Earth: 4,
    Air: 4,
    Water: 4,
  };

  // підсилюємо елементи обох знаків
  base[elA] += 3;
  base[elB] += 3;

  // якщо один і той самий елемент — ще трошки зверху
  if (elA === elB) {
    base[elA] += 2;
  }

  // обмежуємо значення 1–10
  elementOrder.forEach((el) => {
    if (base[el] < 1) base[el] = 1;
    if (base[el] > 10) base[el] = 10;
  });

  return base;
}

/**
 * Short helper phrases by element type — дає “тон голосу”.
 */
function elementTone(element) {
  switch (element) {
    case "Fire":
      return "driven, direct and passionate";
    case "Earth":
      return "steady, grounded and pragmatic";
    case "Air":
      return "curious, communicative and mentally agile";
    case "Water":
      return "intuitive, emotional and deeply receptive";
    default:
      return "complementary and evolving";
  }
}

/**
 * Positive & negative trait templates.
 */
function buildTraits(signA, signB) {
  const elA = signElements[signA];
  const elB = signElements[signB];

  const toneA = elementTone(elA);
  const toneB = elementTone(elB);

  const positive = [
    `${signA} brings a ${toneA} approach, while ${signB} adds a ${toneB} rhythm.`,
    `Together they activate mutual growth through shared experiences and evolving perspectives.`,
    `There is solid potential for attraction, motivation and long-term alignment when intentions are transparent.`,
  ];

  const negative = [
    `Different emotional pacing may create moments of friction if feelings are not verbalized clearly.`,
    `Habits or expectations formed early in the connection can become rigid if neither is willing to adjust.`,
    `Both may occasionally slip into self-protective patterns instead of addressing what truly matters.`,
  ];

  return { positive, negative };
}

/**
 * Advice line: коротка, структурна рекомендація,
 * базується на тому, що елементи різні/однакові.
 */
function buildAdvice(signA, signB) {
  const elA = signElements[signA];
  const elB = signElements[signB];

  if (signA === signB) {
    return `When two ${signA} energies meet, the connection amplifies both strengths and blind spots. Agree on shared priorities, give each other room to express individuality, and build routines that keep the bond dynamic rather than repetitive.`;
  }

  if (elA === elB) {
    return `Sharing the same elemental nature, ${signA} and ${signB} intuitively understand each other's motives. Use this built-in recognition to support, not compete. When both commit to mutual respect and honest dialogue, the relationship becomes a stable yet evolving alliance.`;
  }

  const pair = new Set([elA, elB]);

  if (pair.has("Fire") && pair.has("Air")) {
    return `This connection thrives on inspiration, movement and ideas. Keep exploring, learning and creating together. Occasional grounding — clear plans, gentle check-ins and rest — helps prevent burnout and keeps the spark sustainable.`;
  }

  if (pair.has("Earth") && pair.has("Water")) {
    return `This bond favors emotional depth and practical stability. Honor both feelings and structure: talk about needs, build rituals of care, and give the relationship time to mature. Consistency becomes the main language of love here.`;
  }

  if (pair.has("Fire") && pair.has("Water")) {
    return `Intensity runs high between these two. Protect the connection by slowing down during conflicts and naming emotions instead of reacting impulsively. When passion is guided with empathy, it turns into powerful emotional protection rather than volatility.`;
  }

  if (pair.has("Air") && pair.has("Earth")) {
    return `Mind and structure meet here. ${signA} and ${signB} benefit from combining planning with flexibility. Stay open to experimentation while still following through on commitments — that balance keeps the relationship both alive and reliable.`;
  }

  return `The key for ${signA} and ${signB} is conscious balance: make space for each person's rhythms, speak honestly about expectations, and return regularly to shared values. When both choose collaboration over control, the connection steadily strengthens.`;
}

/**
 * Constructs a single compatibility object for signA + signB.
 */
function buildCompatibility(signA, signB) {
  const score = computeScore(signA, signB);
  const elements = computeElements(signA, signB);
  const traits = buildTraits(signA, signB);
  const advice = buildAdvice(signA, signB);

  return {
    score,
    elements,
    traits,
    advice,
  };
}

/**
 * Build the 12x12 map:
 * compatibilityMap[signA][signB] = { score, elements, traits, advice }
 */
const compatibilityMap = {};

for (const signA of zodiacSigns) {
  compatibilityMap[signA] = {};
  for (const signB of zodiacSigns) {
    compatibilityMap[signA][signB] = buildCompatibility(signA, signB);
  }
}

export default compatibilityMap;
