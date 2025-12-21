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

export const oneTimeProducts = {
  monthlyHoroscope: {
    id: "ot_monthly_horoscope",
    name: "Premium Monthly Horoscope",
    price: "$9.99",
  },
  yearlyHoroscope: {
    id: "ot_yearly_horoscope",
    name: "Premium Yearly Horoscope",
    price: "$19.99",
  },
  premiumBirthChart: {
    id: "ot_birth_chart",
    name: "Premium Birth Chart",
    price: "$14.99",
  },
  premiumCompatibility: {
    id: "ot_compatibility",
    name: "Premium Compatibility",
    price: "$9.99",
  },
};
