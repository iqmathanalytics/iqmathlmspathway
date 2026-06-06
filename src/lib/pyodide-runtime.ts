const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";

export interface PyodideRuntime {
  runPythonAsync: (code: string) => Promise<unknown>;
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
      installPyodideStreamHandlers(pyodide, {});
      return pyodide;
    })();
  }
  return pyodidePromise;
}

/** Pyodide allows only one of raw/batched/write — always use write for reliable newlines. */
export function installPyodideStreamHandlers(
  pyodide: PyodideRuntime,
  handlers: {
    onStdout?: (chunk: string) => void;
    onStderr?: (chunk: string) => void;
  }
): void {
  pyodide.setStdout({
    write: (buffer: Uint8Array) => {
      try {
        handlers.onStdout?.(new TextDecoder().decode(buffer));
      } catch {
        /* ignore handler errors */
      }
      return buffer.length;
    },
  });
  pyodide.setStderr({
    write: (buffer: Uint8Array) => {
      try {
        handlers.onStderr?.(new TextDecoder().decode(buffer));
      } catch {
        /* ignore handler errors */
      }
      return buffer.length;
    },
  });
}

/** Serialize Python runs — shared Pyodide breaks if stdout handlers race. */
export async function runPythonWithLock(
  pyodide: PyodideRuntime,
  code: string,
  handlers: {
    onStdout?: (chunk: string) => void;
    onStderr?: (chunk: string) => void;
  }
): Promise<void> {
  const task = pyodideRunChain.then(async () => {
    installPyodideStreamHandlers(pyodide, handlers);
    await pyodide.runPythonAsync(code);
  });

  pyodideRunChain = task.catch(() => {});
  await task;
}
