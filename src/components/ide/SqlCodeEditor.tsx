"use client";

import clsx from "clsx";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";

interface SqlCodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  onRun: () => void;
  onCursorChange?: (line: number, col: number) => void;
  readOnly?: boolean;
  minHeight?: string;
  height?: string;
  className?: string;
}

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
      fontFamily: "ui-monospace, Consolas, Monaco, monospace",
      lineHeight: "1.65",
      backgroundColor: "#f0f7fc",
      overflow: "auto",
    },
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
    ".cm-cursor, .cm-cursor-primary": { borderLeftColor: "#0f75bd" },
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
    ".cm-line": { padding: "0 2px", color: "#0f172a" },
  },
  { dark: false }
);

const runKeymap = (onRun: () => void) =>
  keymap.of([
    {
      key: "Ctrl-Enter",
      run: () => {
        onRun();
        return true;
      },
    },
    {
      key: "Mod-Enter",
      run: () => {
        onRun();
        return true;
      },
    },
  ]);

export function SqlCodeEditor({
  value,
  onChange,
  onRun,
  onCursorChange,
  readOnly = false,
  minHeight = "220px",
  height,
  className,
}: SqlCodeEditorProps) {
  return (
    <div className={clsx("h-full min-h-0 overflow-hidden", className)}>
      <CodeMirror
        value={value}
        height={height ?? minHeight}
        minHeight={height ? "0px" : minHeight}
        maxHeight={height ? "100%" : undefined}
        className="h-full min-h-0"
        theme="light"
        extensions={[
          sql(),
          EditorView.lineWrapping,
          keymap.of([...defaultKeymap, indentWithTab]),
          runKeymap(onRun),
          EditorView.editable.of(!readOnly),
          lightEditorTheme,
          EditorView.updateListener.of((update) => {
            if (update.selectionSet && onCursorChange) {
              const pos = update.state.selection.main.head;
              const line = update.state.doc.lineAt(pos);
              onCursorChange(line.number, pos - line.from + 1);
            }
          }),
        ]}
        onChange={onChange}
        basicSetup={{
          lineNumbers: true,
          foldGutter: false,
          highlightActiveLine: true,
        }}
      />
    </div>
  );
}
