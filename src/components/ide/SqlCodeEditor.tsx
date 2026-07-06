"use client";

import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";
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

const editorTheme = EditorView.theme({
  "&": { fontSize: "13.5px", backgroundColor: "#0d1117" },
  ".cm-scroller": {
    fontFamily: "ui-monospace, Consolas, Monaco, monospace",
    lineHeight: "1.65",
  },
  ".cm-gutters": {
    backgroundColor: "#0a0e14",
    color: "#484f58",
    borderRight: "1px solid #21262d",
  },
  ".cm-activeLineGutter": {
    backgroundColor: "#161b22",
    color: "#8b949e",
  },
  ".cm-activeLine": { backgroundColor: "rgba(56, 189, 248, 0.06)" },
  ".cm-cursor": { borderLeftColor: "#38bdf8" },
  ".cm-selectionBackground, &.cm-focused .cm-selectionBackground": {
    backgroundColor: "rgba(56, 189, 248, 0.18) !important",
  },
  ".cm-line": { padding: "0 2px" },
});

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
    <div className={className}>
      <CodeMirror
        value={value}
        height={height ?? minHeight}
        theme={[oneDark, editorTheme]}
        extensions={[
          sql(),
          EditorView.lineWrapping,
          keymap.of([...defaultKeymap, indentWithTab]),
          runKeymap(onRun),
          EditorView.editable.of(!readOnly),
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
