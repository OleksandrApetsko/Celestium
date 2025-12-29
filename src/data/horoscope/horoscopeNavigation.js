import BirthChart from '../../pages/BirthChart.jsx'

export const horoscopeNavigation = {
  daily: {
    variant: "cta",
    kicker: "Looking Ahead",
    title: "Explore Extended Horoscopes",
    links: (sign) => [
      { id: "weekly", label: "Weekly Horoscope", to: `/horoscopes/weekly/${sign}` },
      { id: "monthly", label: "Monthly Horoscope", to: `/horoscopes/monthly/${sign}` },
      { id: "yearly", label: "Yearly Horoscope", to: `/horoscopes/yearly/${sign}` }
    ]
  },

  weekly: {
    variant: "cta",
    kicker: "Keep Exploring",
    title: "Continue Your Forecast",
    links: (sign) => [
      { id: "daily", label: "Daily Horoscope", to: `/zodiac/${sign}/today` },
      { id: "monthly", label: "Monthly Horoscope", to: `/horoscopes/monthly/${sign}` },
      { id: "yearly", label: "Yearly Horoscope", to: `/horoscopes/yearly/${sign}` }
    ]
  },

  monthly: {
    variant: "cta",
    kicker: "Next Step",
    title: "Go Deeper",
    links: (sign) => [
      { id: "daily", label: "Daily Horoscope", to: `/zodiac/${sign}/today` },
      { id: "weekly", label: "Weekly Horoscope", to: `/horoscopes/weekly/${sign}` },
      { id: "yearly", label: "Yearly Horoscope", to: `/horoscopes/yearly/${sign}` }
    ]
  },

  yearly: {
    variant: "cta",
    kicker: "Keep Exploring",
    title: "Explore More Guidance",
    links: (sign) => [
      { id: "daily", label: "Daily Horoscope", to: `/zodiac/${sign}/today` },
      { id: "weekly", label: "Weekly Horoscope", to: `/horoscopes/weekly/${sign}` },
      { id: "monthly", label: "Monthly Horoscope", to: `/horoscopes/monthly/${sign}` }
    ]
  },

  /* 🔹 COMPATIBILITY — ТИХИЙ НАВІГАЦІЙНИЙ РЕЖИМ */
  compatibility: {
    variant: "quiet",
    links: () => [
      { id: "horoscope", label: "Horoscope", to: "/#zodiac" },
      { id: "birth-chart", label: "Birth Chart", to: "/birth-chart" },
      { id: "blog", label: "Blog", to: "/blog" }
    ]
  },
  /* 🔹 QUIET NAVIGATION — PREMIUM PAGE */
  premium: {
    variant: "quiet",
    links: () => [
      { id: "horoscope", label: "Horoscope", to: "/#zodiac" },
      { id: "birth-chart", label: "Birth Chart", to: "/birth-chart" },
      { id: "compatibility", label: "Compatibility", to: "/compatibility" }
    ]
  },

  birthChart: {
    variant: "quiet",
    links: () => [
      { id: "horoscope", label: "Horoscope", to: "/#zodiac" },
      { id: "compatibility", label: "Compatibility", to: "/compatibility" },
      { id: "blog", label: "Blog", to: "/blog" }
    ]
  },

  horoscopes: {
    variant: "quiet",
    links: () => [
      { id: "compatibility", label: "Compatibility", to: "/compatibility" },
      { id: "birth-chart", label: "Birth Chart", to: "/birth-chart" },
      { id: "blog", label: "Blog", to: "/blog" }
    ]
  }

};
