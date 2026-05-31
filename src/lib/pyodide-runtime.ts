const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";

export interface PyodideRuntime {
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (options: { batched: (msg: string) => void }) => void;
  setStderr: (options: { batched: (msg: string) => void }) => void;
}

let pyodidePromise: Promise<PyodideRuntime> | null = null;

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
      return loadPyodide({ indexURL: PYODIDE_CDN });
    })();
  }
  return pyodidePromise;
}
