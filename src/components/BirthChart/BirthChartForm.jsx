import { useMemo, useState } from "react";
import Container from "../UI/Container.jsx";

import BirthChartSelect from "./BirthChartSelect.jsx";
import BirthChartLocationSelect from "./BirthChartLocationSelect.jsx";
import {
  birthMonths,
  birthDays,
  birthYears,
  birthHours,
  birthMinutes,
  ampmOptions,
} from "../../data/birthChart/birthChartOptions.js";

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
    <Container>
      <form onSubmit={generate} className="max-w-xl mx-auto space-y-10">
        {/* DATE */}
        <div>
          <label className="block text-white/80 mb-2">Date of Birth</label>
          <div className="grid grid-cols-3 gap-3">
            <BirthChartSelect value={month} onChange={setMonth} placeholder="Month" options={birthMonths} />
            <BirthChartSelect value={day} onChange={setDay} placeholder="Day" options={birthDays} />
            <BirthChartSelect value={year} onChange={setYear} placeholder="Year" options={birthYears} />
          </div>
        </div>

        {/* TIME */}
        <div>
          <label className="block text-white/80 mb-2">Time of Birth</label>

          {!unknownTime && (
            <div className="grid grid-cols-3 gap-3">
              <BirthChartSelect value={hour} onChange={setHour} placeholder="Hour" options={birthHours} />
              <BirthChartSelect value={minute} onChange={setMinute} placeholder="Minute" options={birthMinutes} />
              <BirthChartSelect value={ampm} onChange={setAmpm} placeholder="AM / PM" options={ampmOptions} />
            </div>
          )}

          {/* ✅ CHECKBOX — FINAL, GUARANTEED */}
          <div
            className="flex items-center gap-3 mt-3 cursor-pointer select-none"
            onClick={() => setUnknownTime(v => !v)}
          >
            <div className="w-5 h-5 rounded bg-black/50 border border-white/40 flex items-center justify-center">
              {unknownTime && (
                <svg
                  className="w-3 h-3 text-yellow-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>

            <span className="text-white/80 text-sm">
              I don’t know my time of birth
            </span>
          </div>
        </div>

        {/* LOCATION */}
        <BirthChartLocationSelect value={location} onChange={setLocation} />

        {/* CTA */}
        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full py-3 rounded-full bg-yellow-300 text-black font-semibold transition disabled:opacity-60"
        >
          Generate Natal Chart
        </button>
      </form>
    </Container>
  );
}
