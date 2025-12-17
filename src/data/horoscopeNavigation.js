export const horoscopeNavigation = {
  today: {
    kicker: "Looking Ahead",
    title: "Explore other perspectives",
    links: (sign) => [
      { id: "weekly", label: "Weekly Overview", to: `/horoscopes/weekly/${sign}` },
      { id: "monthly", label: "Monthly Perspective", to: `/horoscopes/monthly/${sign}` },
      { id: "yearly", label: "Yearly Outlook", to: `/horoscopes/yearly/${sign}` }
    ]
  },

  weekly: {
    kicker: "Zoom In & Out",
    title: "See this energy across time",
    links: (sign) => [
      { id: "daily", label: "Today’s Focus", to: `/zodiac/${sign}/today` },
      { id: "monthly", label: "Monthly Perspective", to: `/horoscopes/monthly/${sign}` },
      { id: "yearly", label: "Yearly Outlook", to: `/horoscopes/yearly/${sign}` }
    ]
  },

  monthly: {
    kicker: "Different Angles",
    title: "Explore this energy deeper",
    links: (sign) => [
      { id: "daily", label: "Today’s Focus", to: `/zodiac/${sign}/today` },
      { id: "weekly", label: "Weekly Overview", to: `/horoscopes/weekly/${sign}` },
      { id: "yearly", label: "Yearly Outlook", to: `/horoscopes/yearly/${sign}` }
    ]
  },

  yearly: {
    kicker: "Full Cycle",
    title: "Navigate shorter timeframes",
    links: (sign) => [
      { id: "daily", label: "Today’s Focus", to: `/zodiac/${sign}/today` },
      { id: "weekly", label: "Weekly Overview", to: `/horoscopes/weekly/${sign}` },
      { id: "monthly", label: "Monthly Perspective", to: `/horoscopes/monthly/${sign}` }
    ]
  }
};
