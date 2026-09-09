import fs from "fs";
import path from "path";

function sizeDir(d) {
  let t = 0;
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    t += e.isDirectory() ? sizeDir(p) : fs.statSync(p).size;
  }
  return t;
}

function countHtml(d) {
  let n = 0;
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) n += countHtml(p);
    else if (e.name.endsWith(".html")) n++;
  }
  return n;
}

const dirs = [
  "src/data/practice",
  "src/data/lessons",
  "src/data/quizzes",
  "src/data/python-basics",
  "src/components/lesson",
  "public",
];
for (const d of dirs) {
  if (fs.existsSync(d)) console.log((sizeDir(d) / 1024 / 1024).toFixed(2) + " MB", d);
}
if (fs.existsSync("out")) {
  console.log("out/ total MB", (sizeDir("out") / 1024 / 1024).toFixed(1));
  console.log("HTML pages", countHtml("out"));
}
const jsChunks = [];
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".js")) jsChunks.push(fs.statSync(p).size);
  }
}
if (fs.existsSync("out/_next/static/chunks")) {
  walk("out/_next/static/chunks");
  const total = jsChunks.reduce((a, b) => a + b, 0);
  console.log("JS chunks count", jsChunks.length);
  console.log("JS chunks total MB", (total / 1024 / 1024).toFixed(2));
}
