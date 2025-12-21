// src/utils/cookies.js

export function setCookie(name, value, options = {}) {
  if (typeof document === "undefined") return;

  const {
    path = "/",
    maxAge, // seconds
    sameSite = "Lax",
  } = options;

  const encoded = encodeURIComponent(
    typeof value === "string" ? value : JSON.stringify(value)
  );

  let cookie = `${encodeURIComponent(name)}=${encoded}; path=${path}; SameSite=${sameSite}`;

  if (typeof maxAge === "number") {
    cookie += `; Max-Age=${maxAge}`;
  }

  // У DEV НЕ ставимо Secure (бо http://localhost).
  // У PROD, якщо треба, можна додати Secure на рівні Paddle/серверної відповіді.
  document.cookie = cookie;
}

export function clearCookie(name, options = {}) {
  if (typeof document === "undefined") return;

  const { path = "/", sameSite = "Lax" } = options;

  document.cookie = `${encodeURIComponent(name)}=; Max-Age=0; path=${path}; SameSite=${sameSite}`;
}

export function getCookie(name) {
  if (typeof document === "undefined") return null;

  const target = encodeURIComponent(name) + "=";
  const parts = document.cookie ? document.cookie.split("; ") : [];

  for (const part of parts) {
    if (part.startsWith(target)) {
      return decodeURIComponent(part.slice(target.length));
    }
  }
  return null;
}

export function safeJsonParse(value, fallback = null) {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}
