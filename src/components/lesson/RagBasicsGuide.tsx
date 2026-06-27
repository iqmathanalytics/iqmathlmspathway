"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Monitor, BookOpen, Layers, ShieldCheck, HelpCircle, Code, ListFilter, AlertTriangle, Cpu } from "lucide-react";
import { useLangChainCopy } from "./LangChainCopyContext";

/* ── Data ───────────────────────────────────────────────────────────────────── */

const COLAB_TEMPLATE_URL = "https://colab.research.google.com/#create=true";
const VSCODE_JUPYTER_URL = "https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter";

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
      "Before writing any RAG code, install the official Groq client library to make API requests.",
    packages: [
      {
        name: "groq",
        desc: "The official python SDK for requesting ultra-fast LLM inference on Groq's LPUs.",
      },
    ],
    code: `!pip install groq

print("✅ Groq SDK installed successfully!")`,
  },
  {
    id: 2,
    title: "Define Document Store",
    explanation:
      "Create a collection of documents. In a production RAG application, you'd use a vector database, but a simple list of sentences is ideal for understanding the concept.",
    packages: [
      {
        name: "documents",
        desc: "A list of strings containing the factual information that our LLM will search and reference.",
      },
    ],
    code: `documents = [
    "Python lists are ordered, mutable collections that store mixed data types.",
    "Python dictionaries store key-value pairs for fast lookups by key.",
    "Python functions are defined with 'def' and return values using 'return'.",
    "LangChain is a framework for composing LLM applications from reusable parts.",
    "Groq provides fast LLM inference using a simple REST API.",
]

print(f"✅ Initialized document store with {len(documents)} source documents.")`,
  },
  {
    id: 3,
    title: "Create Keyword Retriever",
    explanation:
      "Define a simple retrieval function. It scans documents for matching query terms and ranks them by count to return the top most relevant chunks.",
    packages: [
      {
        name: "simple_retrieve",
        desc: "Extracts terms from the user query, scores each document, and returns the highest-scoring text passages.",
      },
    ],
    code: `def simple_retrieve(query: str, docs: list, top_k: int = 2) -> str:
    # Split query into words to match against document contents
    query_words = query.lower().split()
    scored = []
    
    for doc in docs:
        score = sum(word in doc.lower() for word in query_words)
        scored.append((score, doc))
        
    # Sort by score descending and return the top match
    top = sorted(scored, reverse=True)[:top_k]
    return "\\n".join(d for score, d in top if score > 0) or "No relevant documents found."

print("✅ Retrieval function loaded successfully!")`,
  },
  {
    id: 4,
    title: "Configure Groq client",
    explanation:
      "Set your Groq API key and instantiate the client. Make sure to replace the placeholder with your actual key.",
    packages: [
      {
        name: "os.environ['GROQ_API_KEY']",
        desc: "Standard environment variable used by SDKs to authenticate requests.",
      },
    ],
    code: `import os
from groq import Groq

# Replace the placeholder with your actual Groq key
os.environ["GROQ_API_KEY"] = "YOUR_GROQ_API_KEY"

client = Groq()
print("✅ Groq client initialized successfully!")`,
  },
  {
    id: 5,
    title: "Run Grounded Response Generation",
    explanation:
      "Retrieve the context for your query first, then inject it into the system instructions for the LLM. The model is forced to rely *only* on the provided context.",
    packages: [
      {
        name: "System Prompt Context",
        desc: "Injects retrieved text passages directly into the model's instructions so it is grounded on verified data.",
      },
    ],
    code: `query = "How do Python dictionaries work?"
context = simple_retrieve(query, documents)

print("🔍 Retrieved Context:")
print(context)
print("-" * 50)

response = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {
            "role": "system",
            "content": f"Answer using ONLY the context below. If the answer is not in the context, say so.\\n\\nContext:\\n{context}"
        },
        {"role": "user", "content": query},
    ],
)

print("📝 Grounded Answer:")
print(response.choices[0].message.content)`,
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
export function RagBasicsGuide() {
  const { copiedId, copy } = useCopy();
  const [activeTab, setActiveTab] = useState<"overview" | "components" | "working" | "comparison">("overview");

  return (
    <div className="space-y-8">
      {/* ── Header card ────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-violet-50 shadow-sm">
        <div className="border-b border-indigo-100 bg-white/60 px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-indigo-600">
                Advanced AI Architectures
              </p>
              <h2 className="mt-1 text-[22px] font-bold text-gray-900">
                Retrieval-Augmented Generation (RAG)
              </h2>
              <p className="mt-1.5 text-[14px] leading-relaxed text-gray-600">
                Learn how RAG builds a bridge between static LLM training data and your live, external knowledge bases to eliminate hallucinations and secure accurate facts.
              </p>
            </div>
            <BookOpen className="mt-1 h-8 w-8 shrink-0 text-indigo-500" />
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={COLAB_TEMPLATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-4 py-2 text-[13px] font-semibold text-orange-700 shadow-sm transition-all hover:bg-orange-50 hover:shadow-md"
            >
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

      {/* ── Theoretical Overview & Interactive Tabs ────────────────────────── */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 pb-3 flex-wrap gap-2">
          {(["overview", "components", "working", "comparison"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-slate-50 hover:text-gray-900"
              }`}
            >
              {tab === "overview" && "1. Overview & Benefits"}
              {tab === "components" && "2. RAG Components"}
              {tab === "working" && "3. Step-by-Step Flow"}
              {tab === "comparison" && "4. Comparison Table"}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">What is Retrieval-Augmented Generation?</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                Retrieval-Augmented Generation (RAG) is a way to make AI answers more reliable by combining searching for relevant information and then generating a response. Instead of guessing based only on old training data, it first finds useful data from external sources (like documents or databases) and then uses it to give a better answer.
              </p>
            </div>

            {/* Core Benefits */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center gap-2 text-indigo-700">
                  <ShieldCheck className="h-5 w-5 shrink-0" />
                  <h4 className="font-bold text-sm">Reduced Hallucinations</h4>
                </div>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  Fetches up-to-date data and reduces incorrect or made-up answers by grounding the LLM in verified reference material.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Cpu className="h-5 w-5 shrink-0" />
                  <h4 className="font-bold text-sm">Domain Specialization</h4>
                </div>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  Works well with specialized data like medical, legal, or company-internal codebases and documents.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center gap-2 text-indigo-700">
                  <Layers className="h-5 w-5 shrink-0" />
                  <h4 className="font-bold text-sm">No Retraining Required</h4>
                </div>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  No need to retrain or fine-tune the model every time new data comes in. Update the vector database, and the model instantly accesses the new facts.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center gap-2 text-indigo-700">
                  <HelpCircle className="h-5 w-5 shrink-0" />
                  <h4 className="font-bold text-sm">Personalized Responses</h4>
                </div>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  Can use user-specific records or session data to provide highly contextualized responses.
                </p>
              </div>
            </div>

            {/* GeeksforGeeks Analogy */}
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/30 p-5">
              <h4 className="font-bold text-sm text-indigo-950">A Practical Example: Documentation Search</h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-indigo-900">
                Consider a coding tutorial platform like GeeksforGeeks. Instead of relying on a model&apos;s general knowledge which might suggest outdated library methods, a RAG system will:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 text-[13px] text-indigo-900 font-medium">
                <li>Search relevant articles matching the query.</li>
                <li>Pick the most useful code block/explanations.</li>
                <li>Generate an answer fully aligned with the platform’s latest tutorials.</li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Components of RAG */}
        {activeTab === "components" && (
          <div className="mt-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">The 9 Main Components of RAG</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "External Knowledge Source", desc: "Stores domain specific or general information like documents, APIs or databases." },
                { title: "Text Chunking & Preprocessing", desc: "Breaks large text into smaller, manageable chunks and cleans it for consistency." },
                { title: "Embedding Model", desc: "Converts text chunks into numerical vectors that capture semantic meaning." },
                { title: "Vector Database", desc: "Stores embeddings and enables similarity search for fast information retrieval." },
                { title: "Query Encoder", desc: "Transforms the user’s query into a vector for comparison with stored embeddings." },
                { title: "Retriever", desc: "Finds and returns the most relevant chunks from the database based on query similarity." },
                { title: "Prompt Augmentation Layer", desc: "Combines retrieved chunks with the user’s query to provide context to the LLM." },
                { title: "LLM (Generator)", desc: "Generates a grounded response using both the query and retrieved knowledge." },
                { title: "Updater (Optional)", desc: "Regularly refreshes and re-embeds data to keep the knowledge base up to date." },
              ].map((comp, idx) => (
                <div key={idx} className="rounded-xl border border-slate-100 p-4 hover:shadow-sm transition-shadow">
                  <div className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded bg-indigo-50 text-[11px] font-bold text-indigo-700">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm text-slate-800">{comp.title}</h4>
                  </div>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-gray-500">{comp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Working of RAG */}
        {activeTab === "working" && (
          <div className="mt-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">How RAG Works in Production</h3>
            
            <div className="space-y-6">
              {[
                { title: "1. Creating External Data (Ingestion/Training)", desc: "External data from APIs, databases or documents is chunked, converted into embeddings using an embedding model, and stored in a vector database to build a library." },
                { title: "2. Retrieving Relevant Information", desc: "The user query is converted into a vector by the query encoder and matched against stored database embeddings to retrieve the most similar chunks." },
                { title: "3. Augmenting the LLM Prompt", desc: "The retrieved context chunks are inserted directly into the prompt template alongside the user's original query." },
                { title: "4. Answer Generation", desc: "The LLM reads the augmented prompt and generates a factually accurate, context-aware response based on the fetched documents." },
                { title: "5. Keeping Data Updated (Updater)", desc: "External data and embeddings are refreshed regularly in real time or on a schedule so the system always retrieves the latest information." },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                      {idx + 1}
                    </div>
                    {idx < 4 && <div className="w-0.5 flex-1 bg-indigo-100" />}
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-[14.5px] text-gray-900">{step.title}</h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Side-by-side section: Problems solved and challenges */}
            <div className="grid gap-6 md:grid-cols-2 border-t border-slate-100 pt-6">
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-bold text-sm text-indigo-950">
                  <ShieldCheck className="h-4.5 w-4.5 text-emerald-600" />
                  Problems RAG Solves
                </h4>
                <ul className="space-y-2 text-[12.5px] text-gray-600">
                  <li><strong>Hallucinations:</strong> Reduces risk by verifying facts from external database documents.</li>
                  <li><strong>Outdated Info:</strong> Resolves limitations of static model cutoff dates by retrieving real-time data.</li>
                  <li><strong>Contextual Relevance:</strong> Enriches user conversation histories with specific documentation passages.</li>
                  <li><strong>Cost & Efficiency:</strong> Skips expensive model fine-tuning by modifying the prompt context dynamically.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-bold text-sm text-amber-950">
                  <AlertTriangle className="h-4.5 w-4.5 text-amber-600" />
                  Core Challenges of RAG
                </h4>
                <ul className="space-y-2 text-[12.5px] text-gray-600">
                  <li><strong>Complexity:</strong> Requires syncing database embedding indexes with ingestion pipelines.</li>
                  <li><strong>Latency:</strong> The database search adds time compared to a standard model request.</li>
                  <li><strong>Quality of Retrieval:</strong> Bad or missing database chunks produce poor or irrelevant answers.</li>
                  <li><strong>Bias/Fairness:</strong> Can inherit biases from the documents stored in the database.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Comparison Table */}
        {activeTab === "comparison" && (
          <div className="mt-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Comparing RAG with Other Methodologies</h3>
            
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left text-[13px]">
                <thead className="bg-slate-50 font-semibold text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Method</th>
                    <th className="px-4 py-3">Description</th>
                    <th className="px-4 py-3">When to Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-gray-600">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Prompt Engineering</td>
                    <td className="px-4 py-3">Adjusts instructions or formats without modifying internal model weights.</td>
                    <td className="px-4 py-3">Quick, low-cost tasks; formatting; defining style constraints.</td>
                  </tr>
                  <tr className="bg-indigo-50/20">
                    <td className="px-4 py-3 font-semibold text-indigo-900">RAG</td>
                    <td className="px-4 py-3 font-semibold text-indigo-900">Combines external knowledge base queries with prompt generation.</td>
                    <td className="px-4 py-3 font-semibold text-indigo-900">Retrieving real-time or dynamic facts from databases/documents.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Fine-Tuning</td>
                    <td className="px-4 py-3">Retrains model weights on a small specialized dataset.</td>
                    <td className="px-4 py-3">Learning specific styles, output formats, or complex specialized jargon.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Pre-Training</td>
                    <td className="px-4 py-3">Trains the model from scratch on enormous unstructured datasets.</td>
                    <td className="px-4 py-3">Building a base model with raw linguistic capabilities (highly resource intensive).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ── Notebook Steps ─────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-bold text-gray-900 flex items-center gap-2">
          <Code className="h-5 w-5 text-indigo-600" />
          Interactive Notebook Code steps
        </h3>
        <p className="text-sm text-gray-600">
          Run these code cells in order in your notebook to build a simple keyword-based RAG client.
        </p>
      </div>

      {STEPS.map((step, idx) => (
        <div key={step.id} className="relative">
          {/* Connector line between steps */}
          {idx < STEPS.length - 1 && (
            <div className="absolute left-6 top-full h-8 w-0.5 bg-gradient-to-b from-indigo-300 to-transparent" />
          )}

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* Step header */}
            <div className="flex items-center gap-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-5 py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white shadow-sm">
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
                      <code className="mt-0.5 shrink-0 rounded-md bg-indigo-100 px-2 py-0.5 text-[11.5px] font-bold text-indigo-800">
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
        <p className="text-[13px] font-bold text-blue-900">🎉 RAG concept completed!</p>
        <p className="mt-1 text-[13px] leading-relaxed text-blue-800">
          You now understand how the RAG pattern retrieves facts to augment the context and generate grounded answers. In the next project, you will build a complete document Q&A bot that reads raw files!
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
