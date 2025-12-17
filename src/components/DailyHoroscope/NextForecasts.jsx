import { Link, useParams } from "react-router-dom";

export default function NextForecasts() {
  const { sign } = useParams();

  const items = [
    {
      label: "Weekly Horoscope",
      description: "Key themes and emotional patterns for the week ahead",
      link: `/horoscopes/weekly/${sign}`
    },
    {
      label: "Monthly Horoscope",
      description: "Main energies, challenges, and focus of the month",
      link: `/horoscopes/monthly/${sign}`
    },
    {
      label: "Yearly Horoscope",
      description: "Long-term cycles shaping growth and direction",
      link: `/horoscopes/yearly/${sign}`
    }
  ];

  return (
    <div className="w-full mt-24">
      <div className="rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 p-10">

        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
            Looking Ahead
          </p>

          <h3 className="text-2xl sm:text-3xl font-medium text-white">
            Explore Extended Horoscopes
          </h3>
        </div>

        {/* BUTTONS */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.link}
              className="group"
            >
              <div
                className="
                  h-full
                  rounded-xl
                  border border-white/10
                  bg-black/40
                  p-6
                  transition-all duration-300
                  hover:border-yellow-300/60
                  hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]
                  hover:-translate-y-1
                "
              >
                <h4 className="text-lg font-medium text-white mb-3">
                  {item.label}
                </h4>

                <p className="text-sm text-white/65 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="text-xs uppercase tracking-wider text-yellow-300 group-hover:text-white transition-colors">
                  View Forecast →
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
