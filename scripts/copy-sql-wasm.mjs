import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "node_modules", "sql.js", "dist");
const dest = path.join(root, "public", "sql-js");

fs.mkdirSync(dest, { recursive: true });

/** Browser bundle (Next.js client) loads sql-wasm-browser.wasm; Node scripts use sql-wasm.wasm */
const files = [
  "sql-wasm-browser.js",
  "sql-wasm-browser.wasm",
  "sql-wasm.js",
  "sql-wasm.wasm",
];

for (const file of files) {
  fs.copyFileSync(path.join(src, file), path.join(dest, file));
}

console.log("Copied sql.js WASM assets to public/sql-js/:", files.join(", "));
