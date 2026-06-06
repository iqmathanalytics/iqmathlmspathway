/** Bridges async console input to Python input() via pyodide.ffi.run_sync. */

type LineResolver = (value: string | null) => void;

class ConsoleStdin {
  private scripted: string[] = [];
  private scriptedIndex = 0;
  private interactive = false;
  private resolvers: LineResolver[] = [];

  onInputRequested?: () => void;

  configure(options: { lines?: string[]; interactive?: boolean }) {
    this.scripted = options.lines ?? [];
    this.scriptedIndex = 0;
    this.interactive = options.interactive ?? false;
  }

  readLine(): Promise<string | null> {
    if (this.scriptedIndex < this.scripted.length) {
      const line = this.scripted[this.scriptedIndex];
      this.scriptedIndex += 1;
      return Promise.resolve(line);
    }

    if (!this.interactive) {
      return Promise.resolve(null);
    }

    this.onInputRequested?.();
    return new Promise((resolve) => {
      this.resolvers.push(resolve);
    });
  }

  submit(line: string) {
    const resolve = this.resolvers.shift();
    resolve?.(line);
  }

  cancelPending() {
    while (this.resolvers.length > 0) {
      const resolve = this.resolvers.shift();
      resolve?.(null);
    }
  }
}

export const consoleStdin = new ConsoleStdin();
