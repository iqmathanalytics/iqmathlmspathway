/**
 * Safe production build: refuse to run while dev server is active (prevents .next corruption).
 * Use: npm run build
 */
import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { isPortInUse, DEV_PORTS } from "./dev-utils.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

async function main() {
  for (const port of DEV_PORTS) {
    if (await isPortInUse(port)) {
      console.error(
        `\n[build] Port ${port} is in use (dev server still running).\n` +
          `[build] Stop dev first: close the terminal running "npm run dev", or run:\n` +
          `        npm run dev:kill\n` +
          `[build] Then run "npm run build" again.\n`
      );
      process.exit(1);
    }
  }

  console.log("[build] Running next build …\n");

  const nextBin = path.join(root, "node_modules", "next", "dist", "bin", "next");
  const child = spawn(process.execPath, [nextBin, "build"], {
    cwd: root,
    stdio: "inherit",
    env: process.env,
  });

  child.on("exit", (code) => process.exit(code ?? 0));
}

main().catch((err) => {
  console.error("[build] Failed:", err);
  process.exit(1);
});
