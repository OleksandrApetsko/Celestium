// src/utils/getSunSignFromDateString.js

// Очікує формат: "January 15, 1998"
export function getSunSignFromDateString(dateStr) {
  if (!dateStr) return "Aries";

  const cleaned = String(dateStr).trim();
  const match = cleaned.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);

  if (!match) return "Aries";

  const monthName = match[1];
  const day = parseInt(match[2], 10);

  const monthIndex = monthToIndex(monthName);
  if (monthIndex === null || Number.isNaN(day)) return "Aries";

  return getSunSign(monthIndex + 1, day);
}

function monthToIndex(name) {
  const m = String(name).toLowerCase();
  const map = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };
  return map[m] ?? null;
}

// month: 1-12, day: 1-31
function getSunSign(month, day) {
  // Діапазони класичні (тропічна астрологія)
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Capricorn";
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
  return "Pisces"; // Feb 19 - Mar 20
}
