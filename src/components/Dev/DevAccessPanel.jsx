// src/components/Dev/DevAccessPanel.jsx

import { useMemo, useState } from "react";
import { getCookie, setCookie, clearCookie, safeJsonParse } from "../../utils/cookies.js";

const SUB_COOKIE = "celestium_sub";
const OT_COOKIE = "celestium_ot";

const SIGNS = [
  "aries","taurus","gemini","cancer","leo","virgo",
  "libra","scorpio","sagittarius","capricorn","aquarius","pisces"
];

function mergeOneTimeEntry(productKey, sign) {
  const raw = getCookie(OT_COOKIE);
  const current = safeJsonParse(raw, {});
  const key = `${productKey}:${sign}`;

  return {
    ...current,
    [key]: { exp: null }, // безстроково (як SSOT: завершений продукт)
  };
}

export default function DevAccessPanel() {
  // В PROD цього взагалі не має існувати для юзера
  if (!import.meta.env.DEV) return null;

  const [sign, setSign] = useState("aries");
  const normalizedSign = useMemo(() => String(sign).toLowerCase().trim(), [sign]);

  return (
    <div
      className="
        fixed bottom-6 right-6 z-[9999]
        w-[340px]
        rounded-2xl
        bg-black/80 backdrop-blur-xl
        border border-yellow-300/40
        p-5
        text-white
        shadow-[0_0_40px_rgba(250,204,21,0.35)]
      "
    >
      <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-4">
        Dev Access
      </p>

      <div className="mb-4">
        <label className="block text-xs text-white/60 mb-2">
          Sign (for one-time)
        </label>

        <select
          value={normalizedSign}
          onChange={(e) => setSign(e.target.value)}
          className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-sm"
        >
          {SIGNS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        {/* SUBSCRIPTIONS */}
        <button
          onClick={() => setCookie(SUB_COOKIE, { type: "monthly", exp: null })}
          className="w-full rounded-xl bg-yellow-300 text-black py-2.5 font-semibold hover:brightness-110 transition"
        >
          Grant Monthly Subscription
        </button>

        <button
          onClick={() => setCookie(SUB_COOKIE, { type: "yearly", exp: null })}
          className="w-full rounded-xl bg-yellow-300 text-black py-2.5 font-semibold hover:brightness-110 transition"
        >
          Grant Yearly Subscription
        </button>

        <button
          onClick={() => setCookie(SUB_COOKIE, { type: "lifetime", exp: null })}
          className="w-full rounded-xl bg-yellow-300 text-black py-2.5 font-semibold hover:brightness-110 transition"
        >
          Grant Lifetime Access
        </button>

        <div className="h-px bg-white/10 my-2" />

        {/* ONE-TIME */}
        <button
          onClick={() => {
            const next = mergeOneTimeEntry("monthlyHoroscope", normalizedSign);
            setCookie(OT_COOKIE, next);
          }}
          className="w-full rounded-xl bg-white/15 border border-white/10 py-2.5 text-sm hover:bg-white/20 transition"
        >
          Grant One-Time: Monthly Horoscope ({normalizedSign})
        </button>

        <button
          onClick={() => {
            const next = mergeOneTimeEntry("yearlyHoroscope", normalizedSign);
            setCookie(OT_COOKIE, next);
          }}
          className="w-full rounded-xl bg-white/15 border border-white/10 py-2.5 text-sm hover:bg-white/20 transition"
        >
          Grant One-Time: Yearly Horoscope ({normalizedSign})
        </button>

        <div className="h-px bg-white/10 my-2" />

        {/* CLEAR */}
        <button
          onClick={() => {
            clearCookie(SUB_COOKIE);
            clearCookie(OT_COOKIE);
          }}
          className="w-full rounded-xl bg-red-500/80 py-2.5 text-sm font-medium hover:bg-red-500 transition"
        >
          Clear All Access
        </button>
      </div>

      <p className="mt-4 text-[11px] text-white/45 leading-relaxed">
        Dev-only panel. Uses the same cookies format as v1 access control.
      </p>
    </div>
  );
}
