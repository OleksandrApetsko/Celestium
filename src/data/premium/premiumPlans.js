// src/data/premiumPlans.js

export const premiumPlans = [
  {
    id: "monthly",
    name: "Monthly Access",
    price: "$9.99",
    period: "per month",
    features: [
      "Full daily & weekly guidance",
      "Full monthly horoscopes included",
      "Premium birth chart & compatibility",
      "Planetary timing & emotional cycles"
    ],
    highlight: false,
    badge: null,
    buttonText: "Start Monthly →",
    style: "basic"
  },
  {
    id: "yearly",
    name: "Yearly Access",
    price: "$59.99",
    period: "billed yearly",
    save: null,
    features: [
      "Everything in Monthly",
      "Full yearly horoscopes included",
      "Premium birth chart & compatibility",
      "Advanced interpretation & timing"
    ],
    highlight: true,
    badge: "MOST POPULAR",
    buttonText: "Get Yearly Premium →",
    style: "best"
  },
  {
    id: "lifetime",
    name: "Lifetime Premium",
    price: "$149",
    period: "pay once — access forever",
    features: [
      "Permanent full access",
      "All premium features forever",
      "Future updates included",
      "One payment — lifetime use"
    ],
    highlight: false,
    badge: "ONE PAYMENT",
    buttonText: "Get Lifetime Premium →",
    style: "lifetime"
  }
];
