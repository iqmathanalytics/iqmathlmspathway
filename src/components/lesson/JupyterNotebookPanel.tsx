"use client";

import { useState } from "react";
import { BookOpen, Copy, Check, ExternalLink, Terminal, ChevronDown, ChevronUp } from "lucide-react";
import type { NotebookCell } from "@/lib/types";

interface JupyterNotebookPanelProps {
  installCmd: string;
  cells: NotebookCell[];
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
      title="Copy to clipboard"
    >
      {copied ? (
        <><Check className="h-3.5 w-3.5 text-green-400" /><span className="text-green-400">Copied</span></>
      ) : (
        <><Copy className="h-3.5 w-3.5" /><span>Copy</span></>
      )}
    </button>
  );
}

function CodeBlock({ cell }: { cell: NotebookCell }) {
  const isInstall = cell.cellType === "install";

  return (
    <div className={`rounded-xl border overflow-hidden ${
      isInstall
        ? "border-violet-700/40 bg-[#1a1035]"
        : "border-gray-700 bg-[#0d1117]"
    }`}>
      <div className={`flex items-center justify-between border-b px-3 py-1.5 ${
        isInstall ? "border-violet-700/30 bg-[#221545]" : "border-gray-800 bg-[#161b22]"
      }`}>
        <span className={`text-xs font-medium ${isInstall ? "text-violet-300" : "text-gray-400"}`}>
          {isInstall
            ? <span className="flex items-center gap-1.5"><Terminal className="h-3 w-3" />{cell.label ?? "Install"}</span>
            : cell.label ?? "Code cell"}
        </span>
        <CopyButton text={cell.code} />
      </div>
      <pre className="overflow-x-auto p-3 text-xs leading-relaxed text-gray-200 [scrollbar-width:thin]">
        <code>{cell.code}</code>
      </pre>
    </div>
  );
}

export function JupyterNotebookPanel({ installCmd, cells }: JupyterNotebookPanelProps) {
  const [showInstructions, setShowInstructions] = useState(true);

  const codeCells = cells.filter((c) => c.cellType !== "install");

  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3">
        <BookOpen className="h-4 w-4 shrink-0 text-violet-600" />
        <div>
          <p className="text-sm font-semibold text-violet-900">Try in Jupyter Notebook</p>
          <p className="text-xs text-violet-600">Copy the cells below and run them locally or in Google Colab.</p>
        </div>
        <a
          href="https://colab.research.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex shrink-0 items-center gap-1 rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-violet-700"
        >
          Open Colab
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {/* How to run — collapsible */}
      <div className="rounded-xl border border-gray-200 bg-white">
        <button
          type="button"
          onClick={() => setShowInstructions((s) => !s)}
          className="flex w-full items-center justify-between px-4 py-3 text-left"
        >
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-600">
            How to run this code
          </span>
          {showInstructions
            ? <ChevronUp className="h-4 w-4 text-gray-400" />
            : <ChevronDown className="h-4 w-4 text-gray-400" />}
        </button>

        {showInstructions && (
          <ol className="border-t border-gray-100 px-4 pb-4 pt-3 space-y-2">
            {[
              "Open Jupyter Notebook, JupyterLab, or Google Colab.",
              "Run the install cell once to set up packages.",
              "Replace the API key placeholder with your real key.",
              "Run each cell in order — read the output before moving on.",
              "Edit and experiment — change values and see what happens.",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[10px] font-bold text-violet-700">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        )}
      </div>

      {/* Install command */}
      <div>
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Install packages
        </p>
        <CodeBlock cell={{ code: installCmd, cellType: "install", label: "Run once in terminal or notebook" }} />
      </div>

      {/* Code cells */}
      {codeCells.length > 0 && (
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Notebook cells
          </p>
          {codeCells.map((cell, i) => (
            <CodeBlock key={i} cell={cell} />
          ))}
        </div>
      )}

      {/* API key reminder */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
        <p className="text-xs font-semibold text-amber-800">Before you run</p>
        <p className="mt-0.5 text-xs text-amber-700">
          Replace <code className="rounded bg-amber-100 px-1 font-mono">your-groq-api-key-here</code> with
          your real key from{" "}
          <a
            href="https://console.groq.com/keys"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            console.groq.com
          </a>
          . Never commit real keys to Git.
        </p>
      </div>
    </div>
  );
}
