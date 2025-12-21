// src/hooks/useAccessGuard.js

import { useMemo } from "react";
import { getCookie, safeJsonParse } from "../utils/cookies.js";

const SUB_COOKIE = "celestium_sub";
const OT_COOKIE = "celestium_ot";

function isActiveByExp(exp) {
  if (!exp) return true; // null/undefined => безстроково
  const t = Date.parse(exp);
  if (Number.isNaN(t)) return false;
  return t > Date.now();
}

export default function useAccessGuard({ productKey, sign }) {
  return useMemo(() => {
    const normalizedSign = String(sign || "").toLowerCase().trim();

    // 1) Subscription
    const subRaw = getCookie(SUB_COOKIE);
    const sub = safeJsonParse(subRaw, null);

    const hasSubscription =
      sub &&
      (sub.type === "monthly" || sub.type === "yearly" || sub.type === "lifetime") &&
      isActiveByExp(sub.exp);

    if (hasSubscription) {
      return { hasAccess: true, via: "subscription" };
    }

    // 2) One-time
    const otRaw = getCookie(OT_COOKIE);
    const ot = safeJsonParse(otRaw, {});

    const key = `${productKey}:${normalizedSign}`;
    const entry = ot?.[key];

    const hasOneTime = !!entry && isActiveByExp(entry.exp);

    return {
      hasAccess: hasOneTime,
      via: hasOneTime ? "one-time" : "none",
    };
  }, [productKey, sign]);
}
