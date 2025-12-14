// src/components/BirthChart/BirthChartForm.jsx

import { useMemo, useState } from "react";
import BirthChartSelect from "./BirthChartSelect.jsx";
import BirthChartLocationSelect from "./BirthChartLocationSelect.jsx";
import {
  birthMonths,
  birthDays,
  birthYears,
  birthHours,
  birthMinutes,
  ampmOptions,
} from "../../data/birthChartOptions.js";

export default function BirthChartForm({ onGenerate }) {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmpm] = useState("AM");

  const [unknownTime, setUnknownTime] = useState(false);
  const [location, setLocation] = useState("");

  const canSubmit = useMemo(() => {
    if (!month || !day || !year) return false;
    if (!location) return false;
    if (unknownTime) return true;
    return Boolean(hour && minute && ampm);
  }, [month, day, year, hour, minute, ampm, unknownTime, location]);

  const generate = (e) => {
    e.preventDefault();
    if (!canSubmit) return;

    const date = `${month} ${day}, ${year}`;
    const time = unknownTime ? "Unknown time" : `${hour}:${minute} ${ampm}`;

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
            options={birthMonths}
          />

          <BirthChartSelect
            value={day}
            onChange={setDay}
            placeholder="Day"
            options={birthDays}
          />

          <BirthChartSelect
            value={year}
            onChange={setYear}
            placeholder="Year"
            options={birthYears}
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
              options={birthHours}
            />

            <BirthChartSelect
              value={minute}
              onChange={setMinute}
              placeholder="Minute"
              options={birthMinutes}
            />

            <BirthChartSelect
              value={ampm}
              onChange={setAmpm}
              placeholder="AM / PM"
              options={ampmOptions}
            />
          </div>
        )}

        <div className="flex items-center gap-3 mt-3">
          <input
            type="checkbox"
            id="unknownTime"
            checked={unknownTime}
            onChange={() => setUnknownTime((v) => !v)}
            className="w-5 h-5 rounded border-white/40 bg-black/40"
          />
          <label htmlFor="unknownTime" className="text-white/80 text-sm">
            I don&apos;t know my time of birth
          </label>
        </div>

        {unknownTime && (
          <p className="mt-2 text-white/55 text-xs leading-relaxed">
            We can still generate a reliable identity snapshot and chart structure. Exact house positions may be limited
            until time is provided.
          </p>
        )}
      </div>

      {/* LOCATION */}
      <BirthChartLocationSelect value={location} onChange={setLocation} />

      {/* CTA */}
      <button
        type="submit"
        disabled={!canSubmit}
        className={`
          w-full py-3 rounded-full text-black text-lg font-semibold tracking-wide
          bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-300
          hover:shadow-[0_0_28px_rgba(255,215,0,0.75)]
          transition-all
          ${canSubmit ? "hover:scale-[1.03]" : "opacity-60 cursor-not-allowed"}
        `}
      >
        Generate Natal Chart
      </button>
    </form>
  );
}
