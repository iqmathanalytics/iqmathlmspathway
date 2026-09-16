"use client";

import { useEffect, useMemo, useRef } from "react";
import clsx from "clsx";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
  /** Optional Ctrl/Cmd+Shift+Enter handler (e.g. Submit). */
  onSubmit?: () => void;
  onCursorChange?: (line: number, col: number) => void;
  readOnly?: boolean;
  minHeight?: string;
  height?: string;
  className?: string;
  /** Practice studio uses light; lesson IDE keeps dark. */
  theme?: "dark" | "light";
  /** Block copy / cut / paste (certification exam). */
  restrictClipboard?: boolean;
}

const darkEditorTheme = EditorView.theme({
  "&": { fontSize: "13px", height: "100%", maxHeight: "100%" },
  ".cm-scroller": {
    fontFamily: "Consolas, Monaco, ui-monospace, monospace",
    overflow: "auto",
  },
  ".cm-content": { backgroundColor: "transparent" },
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
      height: "100%",
      maxHeight: "100%",
      backgroundColor: "#f0f7fc",
      color: "#0f172a",
    },
    ".cm-scroller": {
      fontFamily: "Consolas, Monaco, ui-monospace, monospace",
      backgroundColor: "#f0f7fc",
      overflow: "auto",
    },
    // Transparent so CodeMirror's selection layer (behind content) stays visible.
    ".cm-content": {
      caretColor: "#0f75bd",
      color: "#0f172a",
      backgroundColor: "transparent",
    },
    ".cm-gutters": {
      backgroundColor: "#e7f1fa",
      color: "#64748b",
      borderRight: "1px solid #cfe3f4",
    },
    ".cm-activeLineGutter": { backgroundColor: "#d9ebf8", color: "#0f75bd" },
    ".cm-activeLine": { backgroundColor: "rgba(15, 117, 189, 0.08)" },
    ".cm-selectionBackground": {
      backgroundColor: "rgba(15, 117, 189, 0.38) !important",
    },
    ".cm-selectionLayer .cm-selectionBackground": {
      backgroundColor: "rgba(15, 117, 189, 0.38) !important",
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": {
      backgroundColor: "rgba(15, 117, 189, 0.42) !important",
    },
    ".cm-content ::selection, .cm-line ::selection": {
      backgroundColor: "rgba(15, 117, 189, 0.38) !important",
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
  onSubmit,
  onCursorChange,
  readOnly = false,
  minHeight = "220px",
  height,
  className,
  theme = "light",
  restrictClipboard = false,
}: CodeEditorProps) {
  const isLight = theme !== "dark";
  const onRunRef = useRef(onRun);
  const onSubmitRef = useRef(onSubmit);
  const onCursorChangeRef = useRef(onCursorChange);

  useEffect(() => {
    onRunRef.current = onRun;
  }, [onRun]);

  useEffect(() => {
    onSubmitRef.current = onSubmit;
  }, [onSubmit]);

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
        {
          key: "Ctrl-Shift-Enter",
          run: () => {
            onSubmitRef.current?.();
            return Boolean(onSubmitRef.current);
          },
        },
        {
          key: "Mod-Shift-Enter",
          run: () => {
            onSubmitRef.current?.();
            return Boolean(onSubmitRef.current);
          },
        },
      ]),
      ...(restrictClipboard
        ? [
            EditorView.domEventHandlers({
              copy: (e) => {
                e.preventDefault();
                return true;
              },
              cut: (e) => {
                e.preventDefault();
                return true;
              },
              paste: (e) => {
                e.preventDefault();
                return true;
              },
              contextmenu: (e) => {
                e.preventDefault();
                return true;
              },
            }),
          ]
        : []),
      EditorView.editable.of(!readOnly),
      ...(isLight ? [lightEditorTheme] : [darkEditorTheme]),
      EditorView.updateListener.of((update) => {
        if (!update.selectionSet || !onCursorChangeRef.current) return;
        const pos = update.state.selection.main.head;
        const line = update.state.doc.lineAt(pos);
        onCursorChangeRef.current(line.number, pos - line.from + 1);
      }),
    ],
    [readOnly, isLight, restrictClipboard]
  );

  return (
    <div className={clsx("h-full min-h-0 overflow-hidden", className)}>
      <CodeMirror
        value={value}
        height={height ?? minHeight}
        minHeight={height ? "0px" : minHeight}
        maxHeight={height ? "100%" : undefined}
        className="h-full min-h-0"
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
