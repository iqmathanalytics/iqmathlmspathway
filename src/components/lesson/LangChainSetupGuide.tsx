"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Monitor, BookOpen } from "lucide-react";
import { useLangChainCopy } from "./LangChainCopyContext";

/* ── Data ───────────────────────────────────────────────────────────────────── */

const COLAB_TEMPLATE_URL =
  "https://colab.research.google.com/#create=true";
const VSCODE_JUPYTER_URL =
  "https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter";

interface Package {
  name: string;
  desc: string;
}

interface Step {
  id: number;
  title: string;
  explanation: string;
  packages: Package[];
  code: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Install the Dependencies",
    explanation:
      "Before writing any LangChain code, install the core packages. " +
      "Run this in the first cell of your notebook. The exclamation mark (!) tells " +
      "the notebook to run it as a terminal command.",
    packages: [
      {
        name: "langchain",
        desc: "The core LangChain framework — chains, prompts, tools, memory, etc.",
      },
      {
        name: "langchain-google-genai",
        desc: "LangChain integration for accessing Google Gemini models through the Gemini API.",
      },
    ],
    code: `!pip install langchain langchain-google-genai

print("✅ Dependencies installed successfully!")`,
  },
  {
    id: 2,
    title: "Import Libraries",
    explanation:
      "Import the three components you need: a chat model class, a prompt template, " +
      "and an output parser. Each one handles a different stage of the LangChain pipeline.",
    packages: [
      {
        name: "ChatGoogleGenerativeAI",
        desc: "Enables interaction with Google Gemini models through LangChain.",
      },
      {
        name: "PromptTemplate",
        desc: "Define structured prompts with placeholders for dynamic inputs.",
      },
      {
        name: "StrOutputParser",
        desc: "Ensures the model response is returned as clean string text.",
      },
    ],
    code: `from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser

print("✅ Libraries imported successfully!")`,
  },
  {
    id: 3,
    title: "Configure API Key",
    explanation:
      "To call the Gemini API, you need an API key from Google AI Studio " +
      "(aistudio.google.com). Replace the placeholder below with your real key. " +
      "In production, always load keys from environment variables — never hardcode them.",
    packages: [],
    code: `api_key = "YOUR_GEMINI_API_KEY"   # ← Replace with your actual key

print("✅ API key configured!")
print("⚠️  Never commit real API keys to Git or shared notebooks.")`,
  },
  {
    id: 4,
    title: "Initialize the Chat Model",
    explanation:
      "Create a chat model instance. Think of this as choosing which AI brain to use " +
      "and how creative it should be. LangChain's unified interface means you can swap " +
      "Gemini for Groq or Anthropic by changing just one line.",
    packages: [
      {
        name: "model",
        desc: 'Specifies which Gemini model to use — e.g. "gemini-2.5-flash".',
      },
      {
        name: "temperature=0.7",
        desc: "Controls creativity: 0 = precise and deterministic, 1 = more creative.",
      },
      {
        name: "google_api_key",
        desc: "Authenticates your requests to the Gemini API.",
      },
    ],
    code: `llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0.7,
    google_api_key=api_key
)

print("✅ Chat model initialized!")
print("   Model : gemini-2.5-flash")
print("   Temp  : 0.7 (balanced creativity)")`,
  },
  {
    id: 5,
    title: "Run a Simple Prompt",
    explanation:
      "Use .invoke() to send a prompt to the model and receive a response. " +
      "This is the simplest way to verify your setup is working end-to-end.",
    packages: [
      {
        name: ".invoke()",
        desc: "Sends the prompt to the LLM and returns a message object. Use .content to get the text.",
      },
    ],
    code: `prompt = "Suggest me a skill that is in demand in 2025?"
response = llm.invoke(prompt)

print("✅ Response received!")
print("\\n📝 Suggested Skill:")
print(response.content)`,
  },
];


/* ── Copy hook ──────────────────────────────────────────────────────────────── */
function useCopy() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const { markCopied } = useLangChainCopy();

  function copy(id: number, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      markCopied(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }

  return { copiedId, copy };
}

/* ── Main component ─────────────────────────────────────────────────────────── */
export function LangChainSetupGuide() {
  const { copiedId, copy } = useCopy();

  return (
    <div className="space-y-8">
      {/* ── Header card ────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-teal-50 shadow-sm">
        {/* Title row */}
        <div className="border-b border-emerald-100 bg-white/60 px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">
                LangChain — Getting Started
              </p>
              <h2 className="mt-1 text-[18px] font-bold text-gray-900">
                Setup + First Chat Model
              </h2>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-gray-600">
                Install LangChain, configure a provider, and run your first prompt — step by step.
                Copy each cell into your notebook and run them in order.
              </p>
            </div>
            <BookOpen className="mt-1 h-8 w-8 shrink-0 text-emerald-400" />
          </div>

          {/* Open buttons */}
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={COLAB_TEMPLATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-4 py-2 text-[13px] font-semibold text-orange-700 shadow-sm transition-all hover:bg-orange-50 hover:shadow-md"
            >
              {/* Colab icon */}
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-gradient-to-br from-orange-400 to-yellow-400 text-[10px] font-bold text-white">
                Co
              </span>
              Open Google Colab
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <a
              href={VSCODE_JUPYTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-300 bg-white px-4 py-2 text-[13px] font-semibold text-blue-700 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md"
            >
              <Monitor className="h-4 w-4" />
              Try in VS Code
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* ── Steps ──────────────────────────────────────────────────────────── */}
      {STEPS.map((step, idx) => (
        <div key={step.id} className="relative">
          {/* Connector line between steps */}
          {idx < STEPS.length - 1 && (
            <div className="absolute left-6 top-full h-8 w-0.5 bg-gradient-to-b from-emerald-300 to-transparent" />
          )}

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* Step header */}
            <div className="flex items-center gap-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-5 py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white shadow-sm">
                {step.id}
              </div>
              <h3 className="text-[15px] font-bold text-gray-900">{step.title}</h3>
            </div>

            <div className="space-y-4 p-5">
              {/* Explanation */}
              <p className="text-[13.5px] leading-relaxed text-gray-700">
                {step.explanation}
              </p>

              {/* Package / key term badges */}
              {step.packages.length > 0 && (
                <div className="space-y-2">
                  {step.packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2.5"
                    >
                      <code className="mt-0.5 shrink-0 rounded-md bg-emerald-100 px-2 py-0.5 text-[11.5px] font-bold text-emerald-800">
                        {pkg.name}
                      </code>
                      <p className="text-[12.5px] leading-relaxed text-gray-600">
                        {pkg.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Colab-style code box */}
              <ColabCodeCell
                stepId={step.id}
                code={step.code}
                isCopied={copiedId === step.id}
                onCopy={() => copy(step.id, step.code)}
              />
            </div>
          </div>
        </div>
      ))}

      {/* ── What's next ────────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <p className="text-[13px] font-bold text-blue-900">🎉 Setup complete!</p>
        <p className="mt-1 text-[13px] leading-relaxed text-blue-800">
          You now have a working LangChain + Gemini pipeline. In the next topics you will add
          prompt templates, chain multiple steps with LCEL, and build a full agent with tools.
        </p>
      </div>
    </div>
  );
}

/* ── Colab-style code cell ───────────────────────────────────────────────────── */
function ColabCodeCell({
  stepId,
  code,
  isCopied,
  onCopy,
}: {
  stepId: number;
  code: string;
  isCopied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      {/* Cell toolbar */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-[#f8f9fa] px-3 py-1.5">
        <div className="flex items-center gap-2">
          {/* Colab-style run indicator */}
          <div className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 bg-white text-gray-400 hover:border-gray-400">
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="currentColor"
              className="text-gray-500"
            >
              <path d="M0 0l10 6-10 6V0z" />
            </svg>
          </div>
          <span className="font-mono text-[11px] text-gray-500">
            [ {stepId} ]
          </span>
          <span className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-[10px] text-gray-500">
            Python
          </span>
        </div>

        <button
          type="button"
          onClick={onCopy}
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50"
        >
          {isCopied ? (
            <>
              <Check className="h-3 w-3 text-green-500" />
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="bg-white px-4 py-3">
        <pre className="overflow-x-auto font-mono text-[12.5px] leading-[1.8] text-gray-800">
          {code}
        </pre>
      </div>
    </div>
  );
}
