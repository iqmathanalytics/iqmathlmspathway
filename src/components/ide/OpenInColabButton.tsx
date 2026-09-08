"use client";

import { useState } from "react";
import { Check, ExternalLink } from "lucide-react";
import { copyCodeAndOpenColab } from "@/lib/visualization-code";

type ColabButtonVariant = "ide" | "light" | "card";

interface OpenInColabButtonProps {
  code?: string;
  variant?: ColabButtonVariant;
  label?: string;
}

export function OpenInColabButton({
  code,
  variant = "light",
  label = "Open in Google Colab",
}: OpenInColabButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    const didCopy = await copyCodeAndOpenColab(code);
    if (didCopy) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 4000);
    }
  }

  const copiedLabel = code?.trim()
    ? "Copied — paste in Colab"
    : "Opened Colab";

  if (variant === "ide") {
    return (
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => void handleClick()}
        className="flex items-center gap-1 rounded-md bg-orange-500/15 px-2 py-1 text-xs text-orange-300 transition-colors hover:bg-orange-500/25 hover:text-orange-200"
        title="Charts do not display in this IDE. Opens Google Colab and copies this code so you can paste and run it."
      >
        <ColabMark className="h-3.5 w-3.5" />
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{copiedLabel}</span>
          </>
        ) : (
          <>
            <span className="sm:hidden">Colab</span>
            <span className="hidden sm:inline">{label}</span>
          </>
        )}
      </button>
    );
  }

  if (variant === "card") {
    return (
      <button
        type="button"
        onClick={() => void handleClick()}
        className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-4 py-2 text-[13px] font-semibold text-orange-700 shadow-sm transition-all hover:bg-orange-50 hover:shadow-md"
        title="Open a new Google Colab notebook for charts and plots"
      >
        <ColabMark className="h-5 w-5" />
        {copied ? copiedLabel : label}
        <ExternalLink className="h-3.5 w-3.5" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={() => void handleClick()}
      className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-800 transition-colors hover:bg-orange-100"
      title="Charts do not display in the course IDE. Opens Google Colab and copies this code so you can paste and run it."
    >
      <ColabMark className="h-3.5 w-3.5" />
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          {copiedLabel}
        </>
      ) : (
        <>
          {label}
          <ExternalLink className="h-3 w-3" />
        </>
      )}
    </button>
  );
}

function ColabMark({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-sm bg-gradient-to-br from-orange-400 to-yellow-400 text-[9px] font-bold text-white ${className ?? "h-4 w-4"}`}
      aria-hidden
    >
      Co
    </span>
  );
}
