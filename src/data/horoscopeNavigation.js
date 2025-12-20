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
    kicker: "Continue",
    title: "Explore Other Timeframes",
    links: (sign) => [
      { id: "daily", label: "Daily Horoscope", to: `/horoscopes/${sign}` },
      { id: "monthly", label: "Monthly Horoscope", to: `/horoscopes/monthly/${sign}` },
      { id: "yearly", label: "Yearly Horoscope", to: `/horoscopes/yearly/${sign}` }
    ]
  },

  monthly: {
    kicker: "Continue",
    title: "Explore Other Timeframes",
    links: (sign) => [
      { id: "daily", label: "Daily Horoscope", to: `/horoscopes/${sign}` },
      { id: "weekly", label: "Weekly Horoscope", to: `/horoscopes/weekly/${sign}` },
      { id: "yearly", label: "Yearly Horoscope", to: `/horoscopes/yearly/${sign}` }
    ]
  },

  yearly: {
    kicker: "Continue",
    title: "Explore Other Timeframes",
    links: (sign) => [
      { id: "daily", label: "Daily Horoscope", to: `/horoscopes/${sign}` },
      { id: "weekly", label: "Weekly Horoscope", to: `/horoscopes/weekly/${sign}` },
      { id: "monthly", label: "Monthly Horoscope", to: `/horoscopes/monthly/${sign}` }
    ]
  }
};
