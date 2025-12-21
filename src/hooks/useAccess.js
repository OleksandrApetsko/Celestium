import { useEffect, useState, useCallback } from "react";
import { getCookie, safeJsonParse } from "../utils/cookies.js";

/**
 * SSOT:
 * - subscription => доступ до всього
 * - one-time => доступ до завершеного продукту (scoped)
 *
 * Cookies:
 *  SUB: celestium_sub = { type, exp }
 *  OT:  celestium_ot  = { [productKey:scope]: { exp } }
 */

const SUB_COOKIE = "celestium_sub";
const OT_COOKIE = "celestium_ot";

function normalize(str) {
  return String(str || "").toLowerCase().trim();
}

export function useAccess() {
  const [subscription, setSubscription] = useState(null);
  const [oneTime, setOneTime] = useState({});

  // 🔁 sync with cookies
  const readCookies = useCallback(() => {
    setSubscription(safeJsonParse(getCookie(SUB_COOKIE), null));
    setOneTime(safeJsonParse(getCookie(OT_COOKIE), {}));
  }, []);

  useEffect(() => {
    readCookies();

    // 🔔 реагуємо на зміни cookie з DevAccessPanel
    const onFocus = () => readCookies();
    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("focus", onFocus);
    };
  }, [readCookies]);

  function hasAccess(productKey, scope = null) {
    const key = normalize(productKey);

    // 1️⃣ SUBSCRIPTION = FULL ACCESS
    if (subscription?.type) return true;

    // 2️⃣ ONE-TIME (SCOPED)
    if (scope) {
      const scopedKey = `${key}:${normalize(scope)}`;
      return Boolean(oneTime?.[scopedKey]);
    }

    // 3️⃣ ONE-TIME (UNSCOPED)
    return Boolean(oneTime?.[key]);
  }

  return {
    hasAccess,
    subscription,
    oneTime,
    hasSubscription: Boolean(subscription?.type),
    subscriptionType: subscription?.type || null
  };
}
