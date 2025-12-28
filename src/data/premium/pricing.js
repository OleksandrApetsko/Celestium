// src/data/pricing.js

export const subscriptionPricing = {
  monthly: {
    id: "sub_monthly",
    name: "Monthly Subscription",
    price: "$9.99",
    period: "per month",
  },
  yearly: {
    id: "sub_yearly",
    name: "Yearly Subscription",
    price: "$59.99",
    period: "per year",
  },
  lifetime: {
    id: "sub_lifetime",
    name: "Lifetime Access",
    price: "$149",
    period: "pay once — access forever",
  },
};

// src/data/pricing.js

export const oneTimeProducts = {
  // Horoscopes
  monthlyHoroscope: { id: "monthlyHoroscope", price: "$9.99" }, // <-- ЗМІНИ ТУТ, якщо у вас інша ціна
  yearlyHoroscope: { id: "yearlyHoroscope", price: "$19.99" },

  // SSOT one-time
  premiumBirthChart: { id: "premiumBirthChart", price: "$14.99" },
  premiumCompatibility: { id: "premiumCompatibility", price: "$9.99" }
};

