import { execSync } from "child_process";
import fs from "fs";
import net from "net";
import path from "path";
import { fileURLToPath } from "url";

export const DEV_PORTS = [3000, 3001];

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nextDir = path.join(__dirname, "..", ".next");

export function isPortInUse(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once("error", () => resolve(true));
    server.once("listening", () => {
      server.close(() => resolve(false));
    });
    server.listen(port, "127.0.0.1");
  });
}

export async function killPorts(ports = DEV_PORTS) {
  try {
    execSync(`npx --yes kill-port ${ports.join(" ")}`, {
      stdio: "ignore",
      windowsHide: true,
    });
  } catch {
    /* ports may already be free */
  }
  // Give Windows time to release .next file locks after killing node processes.
  await new Promise((r) => setTimeout(r, 500));
}

export async function cleanNextDir() {
  if (!fs.existsSync(nextDir)) return;

  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      fs.rmSync(nextDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
      return;
    } catch (err) {
      if (attempt === 4) throw err;
      await new Promise((r) => setTimeout(r, 300));
    }
  }
}
