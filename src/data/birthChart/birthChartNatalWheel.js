/**
 * Natal Wheel data
 * Temporary structure — will be replaced by real API data
 */

export const birthChartNatalWheel = {
  planets: [
    { name: "Sun", symbol: "☉", degree: 342.5 },
    { name: "Moon", symbol: "☽", degree: 128.2 },
    { name: "Mercury", symbol: "☿", degree: 356.1 },
    { name: "Venus", symbol: "♀", degree: 15.4 },
    { name: "Mars", symbol: "♂", degree: 74.9 },
    { name: "Jupiter", symbol: "♃", degree: 22.3 },
    { name: "Saturn", symbol: "♄", degree: 312.7 }
  ],

  aspects: [
    { from: "Sun", to: "Moon", type: "Trine" },
    { from: "Sun", to: "Saturn", type: "Conjunction" },
    { from: "Venus", to: "Mars", type: "Square" },
    { from: "Moon", to: "Jupiter", type: "Opposition" }
  ]
};
