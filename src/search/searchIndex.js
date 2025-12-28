// src/search/searchIndex.js
import { zodiacData } from "../data/zodiac/zodiacData.js";

export function buildSearchIndex() {
  const index = [];

  // Core pages
  index.push(
    {
      id: "home",
      type: "page",
      title: "Home",
      subtitle: "Celestium",
      path: "/",
      keywords: ["main", "homepage", "celestium"]
    },
    {
      id: "about",
      type: "page",
      title: "About",
      subtitle: "About Celestium",
      path: "/about",
      keywords: ["mission", "story", "team", "platform"]
    },
    {
      id: "contact",
      type: "page",
      title: "Contact",
      subtitle: "Support",
      path: "/contact",
      keywords: ["email", "support", "help"]
    },
    {
      id: "blog",
      type: "page",
      title: "Blog",
      subtitle: "Articles",
      path: "/blog",
      keywords: ["articles", "guides", "news"]
    },
    {
      id: "compatibility",
      type: "page",
      title: "Compatibility",
      subtitle: "Match & relationships",
      path: "/compatibility",
      keywords: ["love", "match", "relationship"]
    },
    {
      id: "birth-chart",
      type: "page",
      title: "Birth Chart",
      subtitle: "Natal chart",
      path: "/birth-chart",
      keywords: ["natal", "chart", "planets", "birth"]
    },
    {
      id: "premium",
      type: "page",
      title: "Premium",
      subtitle: "Unlock premium content",
      path: "/premium",
      keywords: ["paid", "subscription", "upgrade"]
    }
  );

  // Horoscope entry points
  index.push(
    {
      id: "horoscope-daily",
      type: "horoscope",
      title: "Daily Horoscope",
      subtitle: "Today",
      path: "/#zodiac",
      keywords: ["daily", "today", "horoscope", "zodiac"]
    },
    {
      id: "horoscope-weekly",
      type: "horoscope",
      title: "Weekly Horoscope",
      subtitle: "This week",
      path: "/Horoscopes/weekly",
      keywords: ["weekly", "week", "horoscope"]
    },
    {
      id: "horoscope-monthly",
      type: "horoscope",
      title: "Monthly Horoscope",
      subtitle: "This month",
      path: "/Horoscopes/monthly",
      keywords: ["monthly", "month", "horoscope"]
    },
    {
      id: "horoscope-yearly",
      type: "horoscope",
      title: "Yearly Horoscope",
      subtitle: "This year",
      path: "/Horoscopes/yearly",
      keywords: ["yearly", "year", "horoscope"]
    }
  );

  // Zodiac signs — deep links to specific sign pages
  // We assume zodiacData[].sign is used in your routes (you already use it in Monthly/Weekly/Yearly pages)
  for (const z of zodiacData) {
    const sign = z.sign; // e.g. "aries"
    const label = sign.charAt(0).toUpperCase() + sign.slice(1);

    index.push(
      {
        id: `zodiac-${sign}`,
        type: "zodiac",
        title: label,
        subtitle: z.dates || "Zodiac sign",
        path: `/zodiac/${sign}/today`,
        keywords: ["zodiac", "sign", "daily", "today", label, sign]
      },
      {
        id: `weekly-${sign}`,
        type: "horoscope",
        title: `Weekly Horoscope — ${label}`,
        subtitle: "Weekly detail",
        path: `/horoscopes/weekly/${sign}`,
        keywords: ["weekly", "week", "horoscope", label, sign]
      },
      {
        id: `monthly-${sign}`,
        type: "horoscope",
        title: `Monthly Horoscope — ${label}`,
        subtitle: "Monthly detail",
        path: `/horoscopes/monthly/${sign}`,
        keywords: ["monthly", "month", "horoscope", label, sign]
      },
      {
        id: `yearly-${sign}`,
        type: "horoscope",
        title: `Yearly Horoscope — ${label}`,
        subtitle: "Yearly detail",
        path: `/horoscopes/yearly/${sign}`,
        keywords: ["yearly", "year", "horoscope", label, sign]
      }
    );
  }

  return index;
}
