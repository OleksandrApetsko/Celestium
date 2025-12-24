// src/data/compatibility/compatibilityAdvice.js

/**
 * Compatibility Advice
 * --------------------
 * • Single source of truth
 * • No UI logic required
 * • Case-insensitive keys handled in component
 * • Text stored ONCE, mirrored automatically
 * • Production-ready
 */

const baseAdvice = {
  "aries-taurus":
    "Balance momentum with patience. Aries must slow impulsive pushes, while Taurus benefits from staying open to change.",

  "aries-gemini":
    "Channel energy into shared ideas. Aries initiates action, Gemini keeps movement flexible through communication.",

  "aries-cancer":
    "Respect emotional pacing. Direct action works best when softened by emotional awareness and reassurance.",

  "aries-leo":
    "Share leadership instead of competing for dominance. Mutual respect keeps passion constructive rather than ego-driven.",

  "aries-virgo":
    "Act with intention, not pressure. Initiative thrives when supported by structure and refinement.",

  "aries-libra":
    "Decisions improve when speed meets balance. Pause to align before pushing forward.",

  "aries-scorpio":
    "Intensity requires trust. Avoid power struggles and focus on honest, grounded connection.",

  "aries-sagittarius":
    "Direction matters more than speed. Shared vision keeps momentum focused and sustainable.",

  "aries-capricorn":
    "Respect different tempos. One drives momentum, the other builds durability. Coordination is key.",

  "aries-aquarius":
    "Innovation thrives when action meets originality. Stay flexible and avoid rigid control.",

  "aries-pisces":
    "Sensitivity needs protection. Lead gently and anchor intuition in practical reality.",

  "taurus-gemini":
    "Stability benefits from flexibility. Avoid stubborn loops and scattered attention.",

  "taurus-cancer":
    "Security strengthens emotional trust. Build reliable routines that support vulnerability.",

  "taurus-leo":
    "Consistency matters more than recognition. Appreciation must be mutual and steady.",

  "taurus-virgo":
    "Shared values create reliability. Avoid over-focusing on flaws and perfection.",

  "taurus-libra":
    "Harmony deepens through shared effort. Comfort grows when fairness is maintained.",

  "taurus-scorpio":
    "Trust develops through patience and steady commitment. Control weakens connection.",

  "taurus-sagittarius":
    "Freedom and stability must coexist. Allow exploration without abandoning structure.",

  "taurus-capricorn":
    "Long-term foundations thrive here. Mutual respect and discipline create lasting strength.",

  "taurus-aquarius":
    "Change must feel purposeful. Innovation works best when grounded in reality.",

  "taurus-pisces":
    "Gentleness strengthens trust. Emotional safety and consistency are essential.",

  "gemini-cancer":
    "Communication must honor emotion. Speak clearly without dismissing sensitivity.",

  "gemini-leo":
    "Creative exchange fuels connection. Stay focused to avoid scattered momentum.",

  "gemini-virgo":
    "Ideas gain power through structure. Refine before expanding further.",

  "gemini-libra":
    "Dialogue is your strength. Avoid indecision loops by choosing clarity.",

  "gemini-scorpio":
    "Depth challenges surface thinking. Honest communication prevents misunderstanding.",

  "gemini-sagittarius":
    "Curiosity thrives with direction. Shared learning deepens the bond.",

  "gemini-capricorn":
    "Balance flexibility with responsibility. Clear roles prevent frustration.",

  "gemini-aquarius":
    "Innovation flows naturally. Anchor ideas to avoid mental overload.",

  "gemini-pisces":
    "Align intuition with logic. Gentle conversation clarifies emotions.",

  "cancer-leo":
    "Warmth grows through emotional validation. Safety matters more than praise.",

  "cancer-virgo":
    "Practical care strengthens emotional trust. Reliability builds comfort.",

  "cancer-libra":
    "Balance emotion with fairness. Gentle honesty keeps harmony intact.",

  "cancer-scorpio":
    "Depth builds powerful intimacy. Mutual trust prevents emotional overwhelm.",

  "cancer-sagittarius":
    "Emotional security allows freedom. Reassurance supports exploration.",

  "cancer-capricorn":
    "Structure supports vulnerability. Stability enables emotional growth.",

  "cancer-aquarius":
    "Connection needs presence. Emotional clarity bridges distance.",

  "cancer-pisces":
    "Empathy strengthens bonding. Boundaries keep sensitivity balanced.",

  "leo-virgo":
    "Confidence improves with humility. Shared effort builds respect.",

  "leo-libra":
    "Harmony enhances visibility. Share the spotlight consciously.",

  "leo-scorpio":
    "Intensity requires mutual respect. Avoid power games.",

  "leo-sagittarius":
    "Adventure thrives with loyalty. Shared optimism fuels growth.",

  "leo-capricorn":
    "Recognition meets discipline. Respect different authority styles.",

  "leo-aquarius":
    "Originality flourishes with freedom. Avoid emotional detachment.",

  "leo-pisces":
    "Sensitivity needs reassurance. Creativity deepens connection.",

  "virgo-libra":
    "Balance precision with diplomacy. Clarity improves understanding.",

  "virgo-scorpio":
    "Depth sharpens insight. Focus on trust, not control.",

  "virgo-sagittarius":
    "Vision benefits from detail. Planning supports expansion.",

  "virgo-capricorn":
    "Shared discipline creates stability. Avoid rigidity.",

  "virgo-aquarius":
    "Innovation improves with structure. Allow flexibility.",

  "virgo-pisces":
    "Compassion balances analysis. Gentle grounding supports intuition.",

  "libra-scorpio":
    "Honesty strengthens harmony. Avoid emotional avoidance.",

  "libra-sagittarius":
    "Balance ideals with action. Direction enhances freedom.",

  "libra-capricorn":
    "Fairness meets responsibility. Agreements must be clear.",

  "libra-aquarius":
    "Shared vision benefits from dialogue. Stay emotionally present.",

  "libra-pisces":
    "Sensitivity requires clarity. Boundaries protect harmony.",

  "scorpio-sagittarius":
    "Truth deepens trust. Avoid emotional extremes.",

  "scorpio-capricorn":
    "Power stabilizes with respect. Shared goals reduce tension.",

  "scorpio-aquarius":
    "Intensity meets detachment. Emotional honesty is essential.",

  "scorpio-pisces":
    "Deep empathy fuels transformation. Trust is the foundation.",

  "sagittarius-capricorn":
    "Vision thrives with structure. Balance ambition and freedom.",

  "sagittarius-aquarius":
    "Innovation supports exploration. Ground ideas.",

  "sagittarius-pisces":
    "Meaning grows through compassion. Direction prevents drift.",

  "capricorn-aquarius":
    "Change needs structure. Collaboration strengthens impact.",

  "capricorn-pisces":
    "Discipline protects sensitivity. Stability supports creativity.",

  "aquarius-pisces":
    "Imagination needs grounding. Presence deepens connection."
};

/* -------------------------------------------------- */
/* MIRROR KEYS (data-layer only, no UI logic required) */
/* -------------------------------------------------- */

const compatibilityAdvice = {};

Object.entries(baseAdvice).forEach(([key, text]) => {
  const [a, b] = key.split("-");
  compatibilityAdvice[`${a}-${b}`] = text;
  compatibilityAdvice[`${b}-${a}`] = text;
});

export default compatibilityAdvice;
