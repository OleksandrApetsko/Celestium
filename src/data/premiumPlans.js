export const premiumPlans = [
  {
    id: "monthly",
    name: "Monthly Access",
    price: "$11.99",
    period: "per month",
    features: [
      "Full daily & weekly guidance",
      "Monthly forecasts included",
      "Love & compatibility insights",
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
    price: "$89",
    period: "billed yearly",
    save: "Save 38%",
    features: [
      "Everything in Monthly",
      "Full Year planetary vision",
      "Emotional season breakdown",
      "Advanced interpretation & timing"
    ],
    highlight: true, // виділений центральний тариф
    badge: "MOST POPULAR",
    buttonText: "Get Yearly Premium →",
    style: "best"
  },
  {
    id: "lifetime",
    name: "Lifetime Premium",
    price: "$199",
    period: "pay once — access forever",
    features: [
      "Permanent full access",
      "All yearly features forever",
      "Future updates included",
      "One payment — lifetime use"
    ],
    highlight: false,
    badge: "ONE PAYMENT",
    buttonText: "Get Lifetime Premium →",
    style: "lifetime"
  }
];
