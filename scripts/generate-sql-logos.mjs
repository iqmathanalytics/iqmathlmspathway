import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "logos");
fs.mkdirSync(outDir, { recursive: true });

function courseLogo() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" role="img" aria-label="SQL and Databases logo">
  <defs>
    <linearGradient id="sql-core" x1="48" y1="32" x2="208" y2="224" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#0ea5e9"/>
      <stop offset="0.55" stop-color="#0284c7"/>
      <stop offset="1" stop-color="#0369a1"/>
    </linearGradient>
    <linearGradient id="sql-disk" x1="72" y1="88" x2="184" y2="196" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#e0f2fe"/>
      <stop offset="1" stop-color="#7dd3fc"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect x="24" y="24" width="208" height="208" rx="48" fill="url(#sql-core)" filter="url(#shadow)"/>
  <ellipse cx="128" cy="92" rx="56" ry="18" fill="url(#sql-disk)" opacity="0.95"/>
  <path d="M72 92v64c0 14 25 26 56 26s56-12 56-26V92" fill="none" stroke="#e0f2fe" stroke-width="10"/>
  <ellipse cx="128" cy="156" rx="56" ry="18" fill="none" stroke="#bae6fd" stroke-width="8" opacity="0.9"/>
  <ellipse cx="128" cy="124" rx="56" ry="18" fill="none" stroke="#bae6fd" stroke-width="8" opacity="0.55"/>
  <path d="M98 178h60M110 194h36" stroke="#ffffff" stroke-width="10" stroke-linecap="round" opacity="0.9"/>
  <text x="128" y="82" text-anchor="middle" font-family="Consolas, monospace" font-size="28" font-weight="800" fill="#0369a1">SQL</text>
</svg>`;
}

function moduleLogo(label, subtitle, accent = "#0284c7") {
  const safeId = label.replace(/[^a-z0-9]/gi, "");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" role="img" aria-label="${subtitle} module logo">
  <defs>
    <linearGradient id="g-${safeId}" x1="40" y1="24" x2="216" y2="232" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#38bdf8"/>
      <stop offset="1" stop-color="${accent}"/>
    </linearGradient>
    <filter id="shadow-${safeId}" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect x="24" y="24" width="208" height="208" rx="48" fill="url(#g-${safeId})" filter="url(#shadow-${safeId})"/>
  <ellipse cx="128" cy="88" rx="44" ry="14" fill="white" opacity="0.28"/>
  <path d="M84 88v48c0 11 20 20 44 20s44-9 44-20V88" fill="none" stroke="white" stroke-width="8" opacity="0.85"/>
  <ellipse cx="128" cy="136" rx="44" ry="14" fill="none" stroke="white" stroke-width="6" opacity="0.55"/>
  <text x="128" y="108" text-anchor="middle" font-family="Consolas, monospace" font-size="42" font-weight="800" fill="white">${label}</text>
  <rect x="44" y="164" width="168" height="42" rx="21" fill="white" opacity="0.92"/>
  <text x="128" y="192" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="800" fill="#0f172a">${subtitle}</text>
</svg>`;
}

const modules = [
  ["sql-m1-foundations", "DB", "Foundations", "#0369a1"],
  ["sql-m2-select", "SEL", "SELECT", "#0284c7"],
  ["sql-m3-filtering", "FLT", "Filter", "#0891b2"],
  ["sql-m4-joins", "JOIN", "JOINs", "#0e7490"],
  ["sql-m5-aggregates", "SUM", "GROUP BY", "#155e75"],
  ["sql-m6-functions", "fn()", "Functions", "#0369a1"],
  ["sql-m7-subqueries", "SUB", "Subquery", "#0284c7"],
  ["sql-m8-views", "UNI", "Views", "#0891b2"],
  ["sql-m9-ctes", "CTE", "CTEs", "#0c4a6e"],
];

fs.writeFileSync(path.join(outDir, "sql-course.svg"), courseLogo());
console.log("Wrote sql-course.svg");

for (const [file, label, subtitle, accent] of modules) {
  const filename = `${file}.svg`;
  fs.writeFileSync(path.join(outDir, filename), moduleLogo(label, subtitle, accent));
  console.log(`Wrote ${filename}`);
}
