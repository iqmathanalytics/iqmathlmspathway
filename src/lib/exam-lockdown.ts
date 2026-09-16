function fullscreenElement(): Element | null {
  const doc = document as Document & { webkitFullscreenElement?: Element | null };
  return document.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}

export async function enterExamFullscreen(el: HTMLElement): Promise<boolean> {
  try {
    const anyEl = el as HTMLElement & {
      webkitRequestFullscreen?: () => Promise<void> | void;
    };
    if (el.requestFullscreen) await el.requestFullscreen();
    else if (anyEl.webkitRequestFullscreen) await anyEl.webkitRequestFullscreen();
    return Boolean(fullscreenElement());
  } catch {
    return false;
  }
}

export function isExamFullscreen(): boolean {
  return Boolean(fullscreenElement());
}

export async function exitExamFullscreen(): Promise<void> {
  const doc = document as Document & { webkitExitFullscreen?: () => Promise<void> | void };
  try {
    if (document.fullscreenElement && document.exitFullscreen) {
      await document.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      await doc.webkitExitFullscreen();
    }
  } catch {
    /* ignore */
  }
}

/** Copy, cut, paste, print, save, view-source, and common DevTools chords. */
export function isRestrictedExamKey(e: KeyboardEvent): boolean {
  if (e.key === "F12") return true;
  const mod = e.ctrlKey || e.metaKey;
  if (!mod) return false;
  const key = e.key.toLowerCase();
  if (e.shiftKey && (key === "i" || key === "j" || key === "c")) return true;
  return key === "c" || key === "v" || key === "x" || key === "p" || key === "s" || key === "u";
}

export function preventExamClipboard(e: { preventDefault(): void }): void {
  e.preventDefault();
}
