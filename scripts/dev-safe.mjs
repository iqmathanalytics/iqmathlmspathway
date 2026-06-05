/**
 * Safe dev startup: free ports, delete stale .next, then start Next.js dev.
 * Use: npm run dev
 */
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { killPorts, cleanNextDir, DEV_PORTS } from "./dev-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

async function main() {
  console.log("[dev] Stopping anything on ports", DEV_PORTS.join(", "), "…");
  await killPorts();

  console.log("[dev] Removing stale .next cache …");
  await cleanNextDir();

  console.log("[dev] Starting Next.js at http://localhost:3000");
  console.log("[dev] Tip: hard-refresh browser once (Ctrl+Shift+R) if assets look stuck.\n");

  const nextBin = path.join(
    root,
    "node_modules",
    "next",
    "dist",
    "bin",
    "next"
  );

  const child = spawn(process.execPath, [nextBin, "dev", "-p", "3000"], {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, FORCE_COLOR: "1" },
  });

  child.on("exit", (code, signal) => {
    if (signal) process.kill(process.pid, signal);
    process.exit(code ?? 0);
  });
}

main().catch((err) => {
  console.error("[dev] Failed to start:", err);
  process.exit(1);
});
