export const COLAB_NEW_NOTEBOOK_URL =
  "https://colab.research.google.com/#create=true";

/** True when the snippet actually plots (not just mentions matplotlib in a string). */
export function isVisualizationCode(code?: string | null): boolean {
  if (!code) return false;

  if (/^\s*import\s+matplotlib\b/m.test(code)) return true;
  if (/^\s*from\s+matplotlib\b/m.test(code)) return true;
  if (/^\s*import\s+seaborn\b/m.test(code)) return true;
  if (/^\s*from\s+seaborn\b/m.test(code)) return true;
  if (
    /\bplt\.(show|plot|bar|scatter|hist|title|xlabel|ylabel|legend|style|figure|subplot|subplots|tight_layout|savefig|pie|boxplot|imshow|grid)\s*\(/m.test(
      code
    )
  ) {
    return true;
  }
  if (/\bsns\.\w+\s*\(/m.test(code)) return true;
  if (/\.plot\s*\(/.test(code)) return true;

  return false;
}

export async function copyCodeAndOpenColab(code?: string | null): Promise<boolean> {
  // Open first, before any await, so the browser still treats this as a click.
  if (typeof window !== "undefined") {
    window.open(COLAB_NEW_NOTEBOOK_URL, "_blank", "noopener,noreferrer");
  }

  const source = code?.trim() ?? "";
  if (source && typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(source);
      return true;
    } catch {
      return false;
    }
  }

  return false;
}
