export default function getCompatibilityNextActions(signA) {
  return [
    {
      title: "Horoscope",
      to: signA ? `/zodiac/${signA}/today` : "/"
    },
    {
      title: "Birth Chart",
      to: "/birth-chart"
    },
    {
      title: "Blog",
      to: "/blog"
    }
  ];
}
