import HoroscopeCard from "./HoroscopeCard.jsx";

export default function HoroscopeDaily() {
  const blocks = [
    { title: "Love", text: "Today emotions open easier — trust your intuition." },
    { title: "Career", text: "Momentum accelerates — take initiative boldly." },
    { title: "Health", text: "Stay balanced, avoid stress and mental overload." },
    { title: "Money", text: "Unexpected opportunities may grow finances." }
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {blocks.map((b,i) => <HoroscopeCard key={i} {...b} />)}
    </div>
  );
}
