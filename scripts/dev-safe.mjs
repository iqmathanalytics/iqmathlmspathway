/**
 * Safe dev startup: free ports, then start Next.js (preserves .next cache).
 * Use npm run clean / npm run dev:fresh when you need a wiped cache.
 */
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { killPorts, DEV_PORTS } from "./dev-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

async function main() {
  const fresh = process.argv.includes("--fresh");

  console.log("[dev] Stopping anything on ports", DEV_PORTS.join(", "), "…");
  await killPorts();

  if (fresh) {
    const { cleanNextDir } = await import("./dev-utils.mjs");
    console.log("[dev] Removing .next cache (--fresh) …");
    await cleanNextDir();
  }

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
