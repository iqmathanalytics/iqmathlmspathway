"use client";

import { useEffect, useMemo, useRef } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
  onCursorChange?: (line: number, col: number) => void;
  readOnly?: boolean;
  minHeight?: string;
  height?: string;
  className?: string;
  /** Practice studio uses light; lesson IDE keeps dark. */
  theme?: "dark" | "light";
}

const darkEditorTheme = EditorView.theme({
  "&": { fontSize: "13px" },
  ".cm-scroller": { fontFamily: "Consolas, Monaco, ui-monospace, monospace" },
  ".cm-gutters": {
    backgroundColor: "#0d1117",
    color: "#6e7681",
    borderRight: "1px solid #30363d",
  },
  ".cm-activeLineGutter": { backgroundColor: "#161b22" },
  ".cm-activeLine": { backgroundColor: "#161b22" },
});

const lightEditorTheme = EditorView.theme(
  {
    "&": {
      fontSize: "13.5px",
      backgroundColor: "#f0f7fc",
      color: "#0f172a",
    },
    ".cm-scroller": {
      fontFamily: "Consolas, Monaco, ui-monospace, monospace",
      backgroundColor: "#f0f7fc",
    },
    ".cm-content": {
      caretColor: "#0f75bd",
      color: "#0f172a",
      backgroundColor: "#f0f7fc",
    },
    ".cm-gutters": {
      backgroundColor: "#e7f1fa",
      color: "#64748b",
      borderRight: "1px solid #cfe3f4",
    },
    ".cm-activeLineGutter": { backgroundColor: "#d9ebf8", color: "#0f75bd" },
    ".cm-activeLine": { backgroundColor: "rgba(15, 117, 189, 0.08)" },
    ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
      backgroundColor: "rgba(15, 117, 189, 0.2) !important",
    },
    ".cm-cursor, .cm-cursor-primary": { borderLeftColor: "#0f75bd" },
    ".cm-line": { color: "#0f172a" },
    "&.cm-focused .cm-matchingBracket": {
      backgroundColor: "rgba(140, 198, 62, 0.28)",
      outline: "1px solid rgba(140, 198, 62, 0.55)",
    },
  },
  { dark: false }
);

const baseLanguageExtensions = [
  python(),
  EditorView.lineWrapping,
  keymap.of([...defaultKeymap, indentWithTab]),
];

export function CodeEditor({
  value,
  onChange,
  onRun,
  onCursorChange,
  readOnly = false,
  minHeight = "220px",
  height,
  className,
  theme = "dark",
}: CodeEditorProps) {
  const isLight = theme === "light";
  const onRunRef = useRef(onRun);
  const onCursorChangeRef = useRef(onCursorChange);

  useEffect(() => {
    onRunRef.current = onRun;
  }, [onRun]);

  useEffect(() => {
    onCursorChangeRef.current = onCursorChange;
  }, [onCursorChange]);

  const extensions = useMemo(
    () => [
      ...baseLanguageExtensions,
      keymap.of([
        {
          key: "Ctrl-Enter",
          run: () => {
            onRunRef.current();
            return true;
          },
        },
        {
          key: "Mod-Enter",
          run: () => {
            onRunRef.current();
            return true;
          },
        },
      ]),
      EditorView.editable.of(!readOnly),
      ...(isLight ? [lightEditorTheme] : [darkEditorTheme]),
      EditorView.updateListener.of((update) => {
        if (!update.selectionSet || !onCursorChangeRef.current) return;
        const pos = update.state.selection.main.head;
        const line = update.state.doc.lineAt(pos);
        onCursorChangeRef.current(line.number, pos - line.from + 1);
      }),
    ],
    [readOnly, isLight]
  );

  return (
    <div className={className}>
      <CodeMirror
        value={value}
        height={height ?? minHeight}
        theme={isLight ? "light" : oneDark}
        extensions={extensions}
        onChange={onChange}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightActiveLine: true,
          foldGutter: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: false,
          indentOnInput: true,
        }}
        aria-label="Python code editor"
      />
    </div>
  );
}
