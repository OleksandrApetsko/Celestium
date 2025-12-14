import { useState } from "react";
import BirthChartSelect from "./BirthChartSelect.jsx";
import BirthChartLocationSelect from "./BirthChartLocationSelect.jsx";

export default function BirthChartForm({ onGenerate }) {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmpm] = useState("AM");

  const [unknownTime, setUnknownTime] = useState(false);
  const [location, setLocation] = useState("");

  const generate = (e) => {
    e.preventDefault();

    if (!month || !day || !year) return;
    if (!location) return;

    if (!unknownTime && (!hour || !minute)) return;

    const date = `${month} ${day}, ${year}`;
    const time = unknownTime ? "Unknown" : `${hour}:${minute} ${ampm}`;

    onGenerate({ date, time, location });
  };

  return (
    <form onSubmit={generate} className="max-w-xl mx-auto space-y-10">

      {/* DATE OF BIRTH */}
      <div>
        <label className="block text-white/80 mb-2">Date of Birth</label>

        <div className="grid grid-cols-3 gap-3">
          <BirthChartSelect
            value={month}
            onChange={setMonth}
            placeholder="Month"
            options={[
              "January","February","March","April","May","June",
              "July","August","September","October","November","December"
            ]}
          />

          <BirthChartSelect
            value={day}
            onChange={setDay}
            placeholder="Day"
            options={Array.from({ length: 31 }, (_, i) => String(i + 1))}
          />

          <BirthChartSelect
            value={year}
            onChange={setYear}
            placeholder="Year"
            options={Array.from({ length: 100 }, (_, i) => String(2025 - i))}
          />
        </div>
      </div>

      {/* TIME OF BIRTH */}
      <div>
        <label className="block text-white/80 mb-2">Time of Birth</label>

        {!unknownTime && (
          <div className="grid grid-cols-3 gap-3">

            <BirthChartSelect
              value={hour}
              onChange={setHour}
              placeholder="Hour"
              options={Array.from({ length: 12 }, (_, i) => String(i + 1))}
            />

            <BirthChartSelect
              value={minute}
              onChange={setMinute}
              placeholder="Minute"
              options={["00","05","10","15","20","25","30","35","40","45","50","55"]}
            />

            <BirthChartSelect
              value={ampm}
              onChange={setAmpm}
              placeholder="AM / PM"
              options={["AM", "PM"]}
            />

          </div>
        )}

        {/* Unknown time checkbox */}
        <div className="flex items-center gap-3 mt-3">
          <input
            type="checkbox"
            id="unknownTime"
            checked={unknownTime}
            onChange={() => setUnknownTime(!unknownTime)}
            className="w-5 h-5 rounded border-white/40 bg-black/40"
          />
          <label htmlFor="unknownTime" className="text-white/80 text-sm">
            I don't know my time of birth
          </label>
        </div>
      </div>

      {/* LOCATION SELECT */}
      <BirthChartLocationSelect value={location} onChange={setLocation} />

      {/* BUTTON */}
      <button
        type="submit"
        className="
          w-full py-3 rounded-full text-black text-lg font-semibold tracking-wide
          bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-300
          hover:scale-[1.04] hover:shadow-[0_0_28px_rgba(255,215,0,0.75)]
          transition-all
        "
      >
        Generate Natal Chart
      </button>

    </form>
  );
}
