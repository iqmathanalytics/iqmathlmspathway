"use client";

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
}

const editorTheme = EditorView.theme({
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

export function CodeEditor({
  value,
  onChange,
  onRun,
  onCursorChange,
  readOnly = false,
  minHeight = "220px",
}: CodeEditorProps) {
  return (
    <CodeMirror
      value={value}
      height={minHeight}
      theme={[oneDark, editorTheme]}
      extensions={[
        python(),
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
  );
}
