export const menuItems = [
  { type: "link", label: "Home", path: "/" },

  {
    type: "dropdown",
    label: "Horoscope",
    items: [
      { label: "Daily", path: "/zodiac/aries/today" },
      { label: "Weekly", path: "/horoscopes/weekly" },
      { label: "Monthly", path: "/horoscopes/monthly" },
      { label: "Yearly", path: "/horoscopes/yearly" }
    ]
  },

  { type: "link", label: "Compatibility", path: "/compatibility" },
  { type: "link", label: "Birth Chart", path: "/birth-chart" },
  { type: "link", label: "Blog", path: "/blog" },
  { type: "link", label: "About", path: "/about" },
  { type: "link", label: "Contact", path: "/contact" }
];
