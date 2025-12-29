// src/data/horoscopePaywallConfig.js
// Single Source of Truth for horoscope & compatibility paywalls
// Used by <HoroscopePaywall />

export const horoscopePaywallConfig = {
  /* ===========================
     MONTHLY HOROSCOPE
     =========================== */
  monthly: {
    productKey: "monthlyHoroscope",

    title: "Unlock Your Full Monthly Horoscope",

    description:
      "Get a complete monthly timeline, key life areas focus, emotional patterns, challenges & opportunities, and strategic guidance for your zodiac sign.",

    premiumCta: "Unlock with Premium →",

    oneTime: {
      title: "One-time purchase",
      cta: "Buy Monthly Horoscope →",
      helper:
        "Permanent access to this Monthly Horoscope for the selected zodiac sign."
    }
  },

  /* ===========================
     YEARLY HOROSCOPE
     =========================== */
  yearly: {
    productKey: "yearlyHoroscope",

    title: "Unlock Your Full Yearly Horoscope",

    description:
      "Access long-term cycles, a detailed yearly timeline, major turning points, life areas focus, challenges & opportunities, and strategic direction for the year ahead.",

    premiumCta: "Unlock with Premium →",

    oneTime: {
      title: "One-time purchase",
      cta: "Buy Yearly Horoscope →",
      helper:
        "Permanent access to this Yearly Horoscope for the selected zodiac sign."
    }
  },

  /* ===========================
     COMPATIBILITY (v1)
     =========================== */
  compatibility: {
    productKey: "premiumCompatibility",

    title: "Unlock Full Compatibility Report",

    description:
      "Explore emotional dynamics, strengths & challenges, communication patterns, conflict style, and long-term relationship potential between two zodiac signs.",

    premiumCta: "Go Premium →",

    oneTime: {
      title: "One-time purchase",
      cta: "Buy Compatibility Report →",
      helper:
        "Permanent access to the full compatibility report for this zodiac pair."
    }
  },

  birthChart: {
    productKey: "premiumBirthChart",

    title: "Unlock Your Full Natal Chart",

    description:
      "Access your complete birth chart interpretation — including planetary placements, houses, aspects, psychological patterns, relationship dynamics and timing cycles.",

    premiumCta: "Unlock with Premium →",

    oneTime: {
      title: "One-time purchase",
      cta: "Buy Full Natal Chart →",
      helper:
        "Permanent access to your complete natal chart interpretation."
    }
  }
};
