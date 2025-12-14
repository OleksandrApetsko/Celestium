export function getMoonPhaseInfo() {
  const now = new Date();
  const lunarCycle = 2551443; // довжина місячного циклу у секундах
  const newMoonReference = Date.UTC(2000, 0, 6, 18, 14);
  const phaseTime = ((now.getTime() - newMoonReference) / 1000) % lunarCycle;

  const percent = Math.round((phaseTime / lunarCycle) * 100);
  const index = Math.floor((phaseTime / lunarCycle) * 8);

  const phases = [
    "New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous",
    "Full Moon", "Waning Gibbous", "Last Quarter", "Waning Crescent"
  ];

  const keywords = {
    "New Moon":        ["rebirth", "new cycle", "silence", "seed"],
    "Waxing Crescent": ["growth", "momentum", "curiosity", "activation"],
    "First Quarter":   ["action", "resistance", "challenge", "push forward"],
    "Waxing Gibbous":  ["focus", "refinement", "sharpening", "alignment"],
    "Full Moon":       ["emotion", "illumination", "release", "truth"],
    "Waning Gibbous":  ["gratitude", "reflection", "integration"],
    "Last Quarter":    ["detox", "closure", "cutting cords"],
    "Waning Crescent": ["surrender", "rest", "reset"]
  };

  const descriptions = {
    "New Moon":        "Energy zeroed. Perfect for setting intentions.",
    "Waxing Crescent": "Fresh growth. Ideas sprout. A good day to start habits.",
    "First Quarter":   "Action meets resistance. Push — but stay conscious.",
    "Waxing Gibbous":  "Momentum builds. Tune details, refine direction.",
    "Full Moon":       "Emotions peak. Truth is illuminated — clarity or chaos.",
    "Waning Gibbous":  "Absorb lessons. Integrate experiences with gratitude.",
    "Last Quarter":    "Release what doesn't serve. Clean emotional space.",
    "Waning Crescent": "Deep rest. Dreams speak loud. Prepare for reboot."
  };

  // база + опція для Premium деталізації
  return {
    phase: phases[index],
    illumination: percent,
    keywords: keywords[phases[index]],
    summary: descriptions[phases[index]],
    premiumInsights: {
      ritual: `Guided ritual aligned with ${phases[index]} phase.`,
      emotionalForecast: "Available in Premium",
      manifestationWindow: "Unlock timing insights — Premium required"
    }
  };
}
