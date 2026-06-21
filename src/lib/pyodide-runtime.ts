import { consoleStdin } from "@/lib/console-stdin";

const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";

const INPUT_BOOTSTRAP = `
import builtins
from pyodide.ffi import run_sync
from js import __py_console_stdin

def __py_input(prompt=""):
    if prompt:
        print(prompt, end="", flush=True)
    result = run_sync(__py_console_stdin())
    if result is None:
        raise EOFError("EOF when reading a line")
    return result

builtins.input = __py_input
`;

export interface PyodideRuntime {
  loadPackage: (
    packages: string | string[],
    options?: { messageCallback?: (message: string) => void }
  ) => Promise<void>;
  loadPackagesFromImports: (
    code: string,
    options?: {
      messageCallback?: (message: string) => void;
      errorCallback?: (message: string) => void;
    }
  ) => Promise<void>;
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdin: (options: {
    stdin?: () => string | null | undefined;
    read?: (buffer: Uint8Array) => number;
    error?: boolean;
    isatty?: boolean;
  }) => void;
  setStdout: (options: {
    batched?: (msg: string) => void;
    write?: (buffer: Uint8Array) => number;
  }) => void;
  setStderr: (options: {
    batched?: (msg: string) => void;
    write?: (buffer: Uint8Array) => number;
  }) => void;
}

let pyodidePromise: Promise<PyodideRuntime> | null = null;
let pyodideRunChain: Promise<unknown> = Promise.resolve();
const loadedPackages = new Set<string>();

const ALIAS_PACKAGE_MAP: Record<string, string> = {
  pd: "pandas",
  np: "numpy",
};

function registerStdinBridge(): void {
  if (typeof globalThis === "undefined") return;
  const g = globalThis as typeof globalThis & {
    __py_console_stdin?: () => Promise<string | null>;
  };
  if (g.__py_console_stdin) return;
  g.__py_console_stdin = () => consoleStdin.readLine();
}

/** Arrow methods keep the correct \`this\` for Pyodide stream callbacks. */
class PyodideStreamBridge {
  private readonly decoder = new TextDecoder();
  onStdout?: (chunk: string) => void;
  onStderr?: (chunk: string) => void;

  writeStdout = (buffer: Uint8Array): number => {
    const chunk = this.decoder.decode(buffer);
    this.onStdout?.(chunk);
    return buffer.length;
  };

  writeStderr = (buffer: Uint8Array): number => {
    const chunk = this.decoder.decode(buffer);
    this.onStderr?.(chunk);
    return buffer.length;
  };

  apply(pyodide: PyodideRuntime): void {
    pyodide.setStdin({ stdin: () => null });
    pyodide.setStdout({ write: this.writeStdout });
    pyodide.setStderr({ write: this.writeStderr });
  }
}

function usesInput(code: string): boolean {
  return /\binput\s*\(/.test(code);
}

function needsStdinBridge(code: string, options: PyodideRunOptions): boolean {
  return (
    options.interactiveStdin === true ||
    (options.stdinLines?.length ?? 0) > 0 ||
    usesInput(code)
  );
}

function stripCommentsAndStrings(code: string): string {
  return code
    .replace(/("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"\n]*(?:\\.[^"\n]*)*"|'[^'\n]*(?:\\.[^'\n]*)*')/g, "")
    .replace(/#.*$/gm, "");
}

function hasImports(code: string): boolean {
  const cleaned = stripCommentsAndStrings(code);
  return /^\s*(import|from)\s+/m.test(cleaned);
}

function detectAliasPackages(code: string): string[] {
  const cleaned = stripCommentsAndStrings(code);
  const packages = new Set<string>();

  for (const [alias, packageName] of Object.entries(ALIAS_PACKAGE_MAP)) {
    if (new RegExp(`\\b${alias}\\.`).test(cleaned)) {
      packages.add(packageName);
    }
  }

  return [...packages].filter((name) => !loadedPackages.has(name));
}

async function loadRequiredPackages(
  pyodide: PyodideRuntime,
  code: string,
  onStdout?: (chunk: string) => void
): Promise<void> {
  if (hasImports(code)) {
    onStdout?.("Checking Python imports...\n");
    await pyodide.loadPackagesFromImports(code, {
      messageCallback: (message) => onStdout?.(`${message}\n`),
      errorCallback: (message) => onStdout?.(`${message}\n`),
    });
  }

  // Pyodide detects real import statements. This fallback helps if a learner
  // edits out the import but still uses common aliases like pd.DataFrame().
  const aliasPackages = detectAliasPackages(code);
  if (aliasPackages.length > 0) {
    onStdout?.(
      `Loading Python package${aliasPackages.length > 1 ? "s" : ""}: ${aliasPackages.join(", ")}...\n`
    );
    await pyodide.loadPackage(aliasPackages, {
      messageCallback: (message) => onStdout?.(`${message}\n`),
    });
    aliasPackages.forEach((name) => loadedPackages.add(name));
  }
}

/** Load Pyodide once from CDN (browser ESM — avoids webpack/node issues). */
export function loadPyodideRuntime(): Promise<PyodideRuntime> {
  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      const mod = await import(
        /* webpackIgnore: true */
        `${PYODIDE_CDN}pyodide.mjs`
      );
      const loadPyodide = mod.loadPyodide as (config: {
        indexURL: string;
      }) => Promise<PyodideRuntime>;
      const pyodide = await loadPyodide({ indexURL: PYODIDE_CDN });
      registerStdinBridge();
      return pyodide;
    })();
  }
  return pyodidePromise;
}

export interface PyodideRunOptions {
  onStdout?: (chunk: string) => void;
  onStderr?: (chunk: string) => void;
  /** Pre-scripted answers for input() — one entry per call (practice tests). */
  stdinLines?: string[];
  /** Read input from the IDE console (lesson editor). */
  interactiveStdin?: boolean;
  /** Fired when Python is waiting for a console line. */
  onStdinRequest?: () => void;
}

/** Serialize Python runs — shared Pyodide breaks if stdout handlers race. */
export async function runPythonWithLock(
  pyodide: PyodideRuntime,
  code: string,
  options: PyodideRunOptions = {}
): Promise<void> {
  const task = pyodideRunChain.then(async () => {
    const bridge = new PyodideStreamBridge();
    bridge.onStdout = options.onStdout;
    bridge.onStderr = options.onStderr;
    bridge.apply(pyodide);

    consoleStdin.configure({
      lines: options.stdinLines,
      interactive: options.interactiveStdin ?? false,
    });
    consoleStdin.onInputRequested = options.onStdinRequest;

    const withStdin = needsStdinBridge(code, options);
    const python = withStdin ? `${INPUT_BOOTSTRAP}\n\n${code}` : code;

    try {
      await loadRequiredPackages(pyodide, code, options.onStdout);
      await pyodide.runPythonAsync(python);
    } finally {
      consoleStdin.cancelPending();
      consoleStdin.onInputRequested = undefined;
    }
  });

  pyodideRunChain = task.catch(() => {});
  await task;
}
