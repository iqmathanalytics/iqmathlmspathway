/**
 * Recover runnable Python from a lesson code panel.
 * Syntax-highlighted JSX puts each token in a <span>; source newlines/indentation
 * between spans become text nodes inside <pre> and would break Python if kept.
 * Intentional line breaks come from explicit {"\\n"} text nodes.
 */
export function extractRunnableCodeFromElement(root: HTMLElement): string {
  const parts: string[] = [];

  const walk = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent ?? "";
      if (!text) return;
      // Pure newlines from {"\n"} / {"\n\n"} — keep.
      if (/^\r?\n+$/.test(text)) {
        parts.push(text.replace(/\r\n/g, "\n"));
        return;
      }
      // JSX formatting whitespace between tags (e.g. "\n          ") — drop.
      if (/^\s+$/.test(text)) return;
      parts.push(text);
      return;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      node.childNodes.forEach(walk);
    }
  };

  walk(root);
  return parts.join("").replace(/^\n+/, "").replace(/\n+$/, "");
}
