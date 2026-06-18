"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Eye, EyeOff, KeyRound, Trash2 } from "lucide-react";
import {
  clearStoredGroqApiKey,
  GROQ_API_KEY_UPDATED_EVENT,
  readStoredGroqApiKey,
  saveStoredGroqApiKey,
} from "@/lib/groq-api-key";

export function GroqApiKeySetup() {
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const sync = () => {
      const key = readStoredGroqApiKey();
      setApiKey(key);
      setSaved(Boolean(key.trim()));
    };
    sync();
    window.addEventListener(GROQ_API_KEY_UPDATED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(GROQ_API_KEY_UPDATED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function handleSave() {
    saveStoredGroqApiKey(apiKey.trim());
    setSaved(Boolean(apiKey.trim()));
  }

  function handleClear() {
    clearStoredGroqApiKey();
    setApiKey("");
    setSaved(false);
  }

  return (
    <section className="mb-6 rounded-2xl border border-violet-200 bg-violet-50/70 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
          <KeyRound className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-violet-950">
              Groq API key for this module
            </h3>
            {saved && (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[11px] font-semibold text-green-800">
                <CheckCircle2 className="h-3 w-3" />
                Saved for all Groq lessons
              </span>
            )}
          </div>
          <p className="mt-1 text-sm leading-relaxed text-violet-900/80">
            Paste your Groq key once here. The playground and the rest of the
            Groq API module will reuse the same key from this browser.
          </p>

          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <div className="relative min-w-0 flex-1">
              <input
                type={showKey ? "text" : "password"}
                value={apiKey}
                onChange={(e) => {
                  setApiKey(e.target.value);
                  setSaved(false);
                }}
                placeholder="gsk_..."
                className="w-full rounded-xl border border-violet-200 bg-white px-3 py-2 pr-10 font-mono text-sm text-gray-900 placeholder-gray-400 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-200"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="button"
                onClick={() => setShowKey((v) => !v)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-200"
                aria-label={showKey ? "Hide API key" : "Show API key"}
              >
                {showKey ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            <button
              type="button"
              onClick={handleSave}
              disabled={!apiKey.trim()}
              className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Save key
            </button>
            {saved && (
              <button
                type="button"
                onClick={handleClear}
                className="inline-flex items-center justify-center gap-1 rounded-xl border border-violet-200 bg-white px-3 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
              >
                <Trash2 className="h-4 w-4" />
                Clear
              </button>
            )}
          </div>

          <p className="mt-2 text-xs text-violet-900/70">
            Stored only in your browser local storage. It is sent to Groq only
            when you use the chat playground.
          </p>
        </div>
      </div>
    </section>
  );
}
