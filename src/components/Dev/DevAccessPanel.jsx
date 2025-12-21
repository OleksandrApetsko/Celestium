// src/components/Dev/DevAccessPanel.jsx

import { useMemo, useState } from "react";
import {
  getCookie,
  setCookie,
  clearCookie,
  safeJsonParse
} from "../../utils/cookies.js";

const SUB_COOKIE = "celestium_sub";
const OT_COOKIE = "celestium_ot";

const SIGNS = [
  "aries","taurus","gemini","cancer","leo","virgo",
  "libra","scorpio","sagittarius","capricorn","aquarius","pisces"
];

function mergeOneTime(productKey, scope) {
  const raw = getCookie(OT_COOKIE);
  const current = safeJsonParse(raw, {});
  const key = `${productKey}:${scope}`;

  return {
    ...current,
    [key]: { exp: null }
  };
}

export default function DevAccessPanel() {
  if (!import.meta.env.DEV) return null;

  const [signA, setSignA] = useState("aries");
  const [signB, setSignB] = useState("taurus");

  const pairKey = useMemo(
    () => `${signA}-${signB}`,
    [signA, signB]
  );

  return (
    <div className="fixed bottom-6 right-6 z-[9999] w-[360px]
      rounded-2xl bg-black/80 backdrop-blur-xl
      border border-yellow-300/40 p-5 text-white">

      <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-4">
        Dev Access
      </p>

      {/* PAIR */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <select value={signA} onChange={e => setSignA(e.target.value)}
                className="bg-black/60 border border-white/10 rounded px-2 py-1">
          {SIGNS.map(s => <option key={s}>{s}</option>)}
        </select>

        <select value={signB} onChange={e => setSignB(e.target.value)}
                className="bg-black/60 border border-white/10 rounded px-2 py-1">
          {SIGNS.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      {/* SUBS */}
      <button
        onClick={() => setCookie(SUB_COOKIE, { type: "monthly", exp: null })}
        className="w-full mb-2 bg-yellow-300 text-black rounded py-2 font-semibold">
        Grant Subscription
      </button>

      {/* ONE-TIME COMPATIBILITY */}
      <button
        onClick={() => {
          const next = mergeOneTime("premiumCompatibility", pairKey);
          setCookie(OT_COOKIE, next);
        }}
        className="w-full bg-white/20 border border-yellow-300/40 rounded py-2 text-sm">
        Grant One-Time Compatibility ({pairKey})
      </button>

      <button
        onClick={() => {
          clearCookie(SUB_COOKIE);
          clearCookie(OT_COOKIE);
        }}
        className="w-full mt-2 bg-red-500 rounded py-2 text-sm">
        Clear All Access
      </button>
    </div>
  );
}
