/**
 * Smoke-test extractRunnableCodeFromElement whitespace rules.
 * Run: node scripts/test-extract-runnable-code.mjs
 */

function extractRunnableCodeFromElement(root) {
  const parts = [];
  const walk = (node) => {
    if (node.nodeType === 3) {
      const text = node.textContent ?? "";
      if (!text) return;
      if (/^\r?\n+$/.test(text)) {
        parts.push(text.replace(/\r\n/g, "\n"));
        return;
      }
      if (/^\s+$/.test(text)) return;
      parts.push(text);
      return;
    }
    if (node.nodeType === 1) {
      for (const child of node.childNodes) walk(child);
    }
  };
  walk(root);
  return parts.join("").replace(/^\n+/, "").replace(/\n+$/, "");
}

/** Minimal DOM-ish tree */
function text(value) {
  return { nodeType: 3, textContent: value };
}
function el(...children) {
  return { nodeType: 1, childNodes: children };
}

const pre = el(
  text("\n          "),
  el(text("print")),
  text("\n          "),
  el(text("(")),
  text("\n          "),
  el(text("10")),
  text("\n          "),
  el(text(" + ")),
  text("\n          "),
  el(text("3")),
  text("\n          "),
  el(text(")")),
  text("\n          "),
  el(text(" # 13")),
  text("\n         "),
  text("\n"),
  el(text("print(20)")),
  text("\n")
);

const code = extractRunnableCodeFromElement(pre);
const expected = "print(10 + 3) # 13\nprint(20)";
if (code !== expected) {
  console.error("FAIL\n got:", JSON.stringify(code), "\nwant:", JSON.stringify(expected));
  process.exit(1);
}
console.log("OK", JSON.stringify(code));
