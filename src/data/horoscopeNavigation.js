// src/data/horoscopeNavigation.js

export const horoscopeNavigation = {
  daily: {
    kicker: "Looking Ahead",
    title: "Explore Extended Horoscopes",
    links: (sign) => [
      { id: "weekly", label: "Weekly Horoscope", to: `/horoscopes/weekly/${sign}` },
      { id: "monthly", label: "Monthly Horoscope", to: `/horoscopes/monthly/${sign}` },
      { id: "yearly", label: "Yearly Horoscope", to: `/horoscopes/yearly/${sign}` }
    ]
  },
  weekly: {
    kicker: "Keep Exploring",
    title: "Continue Your Forecast",
    links: (sign) => [
      { id: "daily", label: "Daily Horoscope", to: `/zodiac/${sign}/today` },
      { id: "monthly", label: "Monthly Horoscope", to: `/horoscopes/monthly/${sign}` },
      { id: "yearly", label: "Yearly Horoscope", to: `/horoscopes/yearly/${sign}` }
    ]
  },
  monthly: {
    kicker: "Next Step",
    title: "Go Deeper",
    links: (sign) => [
      { id: "daily", label: "Daily Horoscope", to: `/zodiac/${sign}/today` },
      { id: "weekly", label: "Weekly Horoscope", to: `/horoscopes/weekly/${sign}` },
      { id: "yearly", label: "Yearly Horoscope", to: `/horoscopes/yearly/${sign}` }
    ]
  },
  yearly: {
    kicker: "Keep Exploring",
    title: "Explore More Guidance",
    links: (sign) => [
      { id: "daily", label: "Daily Horoscope", to: `/zodiac/${sign}/today` },
      { id: "weekly", label: "Weekly Horoscope", to: `/horoscopes/weekly/${sign}` },
      { id: "monthly", label: "Monthly Horoscope", to: `/horoscopes/monthly/${sign}` }
    ]
  }
};
