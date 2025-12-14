// src/data/birthChartOptions.js

export const birthMonths = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

export const birthDays = Array.from({ length: 31 }, (_, i) => String(i + 1));

// 100 років назад від поточного “продуктового” року; можна змінити пізніше
export const birthYears = Array.from({ length: 100 }, (_, i) => String(2025 - i));

export const birthHours = Array.from({ length: 12 }, (_, i) => String(i + 1));

export const birthMinutes = ["00","05","10","15","20","25","30","35","40","45","50","55"];

export const ampmOptions = ["AM", "PM"];
