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
    title: "Install the Required Libraries",
    explanation:
      "Install the necessary dependencies for embedding generation (Sentence Transformers), vector similarity search (FAISS), text generation model pipeline (Hugging Face Transformers), and PyTorch backend.",
    packages: [
      {
        name: "sentence-transformers",
        desc: "Library for generating dense vector representations of text sentences.",
      },
      {
        name: "faiss-cpu",
        desc: "Facebook AI Similarity Search library for fast, memory-efficient nearest neighbor queries.",
      },
      {
        name: "transformers",
        desc: "Hugging Face library offering thousands of pre-trained models for generation tasks.",
      },
    ],
    code: `!pip install sentence-transformers faiss-cpu transformers torch

print("✅ Libraries installed successfully!")`,
  },
  {
    id: 2,
    title: "Importing Libraries",
    explanation:
      "Import the SentenceTransformer model class, NumPy for array formatting, FAISS indexer, and the text generation pipeline wrapper.",
    packages: [
      {
        name: "SentenceTransformer",
        desc: "Class to load lightweight models to convert sentences into vector representation.",
      },
      {
        name: "faiss",
        desc: "Python bindings for the FAISS library to index and query vector databases.",
      },
      {
        name: "pipeline",
        desc: "Hugging Face pipeline to abstract model execution for text-to-text generation tasks.",
      },
    ],
    code: `from sentence_transformers import SentenceTransformer
import numpy as np
import faiss
from transformers import pipeline

print("✅ Libraries imported successfully!")`,
  },
  {
    id: 3,
    title: "Documentation Setup",
    explanation:
      "Set up the raw text data collection. In this project, we create a mock knowledge base of Amazon customer support policies including shipping, cancelations, and refunds.",
    packages: [
      {
        name: "documents",
        desc: "A list of factual sentences representing our document corpus/knowledge base.",
      },
    ],
    code: `documents = [
    "To track your Amazon order, log into your account, go to 'Your Orders,' and click 'Track Package' for real-time updates.",
    "Amazon's return policy allows most items to be returned within 30 days of delivery for a full refund, provided they are in new condition with original packaging and accessories.",
    "To return an Amazon order, initiate a return through 'Your Orders,' ship the item back, and receive a refund once processed.",
    "To contact Amazon customer service, use the 'Help' section on the website or app to chat, call, or email support.",
    "Amazon Prime members receive free two-day shipping, exclusive deals, and access to Prime Video and Music.",
    "If your Amazon package is delayed, check the estimated delivery date in 'Your Orders' or contact customer service for assistance.",
    "To cancel an Amazon order, go to 'Your Orders,' select the order, and click 'Cancel Items' if it hasn't shipped yet.",
    "To purchase an Amazon gift card, visit the Amazon website, navigate to 'Gift Cards,' select a design and amount, add to cart, and complete the purchase at checkout; the gift card can be redeemed for eligible products.",
    "To update your Amazon payment method, go to 'Your Account,' select 'Your Payments,' and add or edit your card details.",
    "To log into your Amazon account, go to the Amazon website or app, click 'Sign In,' and enter your email or phone number and password."
]

print(f"✅ Loaded Amazon Support Knowledge Base with {len(documents)} documents.")`,
  },
  {
    id: 4,
    title: "Embedding Generation",
    explanation:
      "Load the lightweight 'all-MiniLM-L6-v2' model and generate dense vector embeddings for each customer support document. Convert the output to float32 NumPy arrays.",
    packages: [
      {
        name: "all-MiniLM-L6-v2",
        desc: "A fast, high-quality sentence-transformers model that maps sentences to 384-dimensional vectors.",
      },
    ],
    code: `embedding_model = SentenceTransformer('all-MiniLM-L6-v2')
doc_embeddings = embedding_model.encode(documents)
doc_embeddings = np.array(doc_embeddings).astype('float32')

print("✅ Generated document embeddings matrix:")
print(f"   Shape : {doc_embeddings.shape} (10 docs, 384 dimensions each)")`,
  },
  {
    id: 5,
    title: "FAISS Index Setup",
    explanation:
      "Build a FAISS index, normalize document embeddings so that inner-product queries measure cosine similarity, and populate the index with our document vectors.",
    packages: [
      {
        name: "IndexFlatIP",
        desc: "Flat index measuring Inner Product (cosine similarity after L2 normalization).",
      },
      {
        name: "normalize_L2",
        desc: "Normalizes the length of vectors so their dot product is equivalent to cosine similarity.",
      },
    ],
    code: `dimension = doc_embeddings.shape[1]
index = faiss.IndexFlatIP(dimension)
faiss.normalize_L2(doc_embeddings)
index.add(doc_embeddings)

print(f"✅ FAISS index created and populated. Dimension: {dimension}")`,
  },
  {
    id: 6,
    title: "Text Generation Pipeline",
    explanation:
      "Instantiate a text generation pipeline using Hugging Face. We'll use the 'flan-t5-small' model, which is an instruction-tuned model trained by Google.",
    packages: [
      {
        name: "flan-t5-small",
        desc: "A compact 80M parameter language model optimized for following instructional prompts.",
      },
    ],
    code: `# This download may take a moment on the first run
generator = pipeline(
    'text2text-generation',
    model='google/flan-t5-small',
    tokenizer='google/flan-t5-small'
)

print("✅ Loaded generator: google/flan-t5-small")`,
  },
  {
    id: 7,
    title: "RAG Answer Function",
    explanation:
      "Write a function that encodes the customer query, searches FAISS for the single most matching document, validates against a similarity threshold, and prompts FLAN-T5 to generate an answer.",
    packages: [
      {
        name: "rag_answer",
        desc: "Matches the user query against FAISS index, constructs the grounded prompt, and calls the model generator.",
      },
    ],
    code: `def rag_answer(query, top_k=1, threshold=0.3):
    # Encode user query
    query_embedding = embedding_model.encode([query]).astype('float32')
    faiss.normalize_L2(query_embedding)

    # Search FAISS index
    distances, indices = index.search(query_embedding, top_k)

    # Return fallback response if match is below the threshold
    if distances[0][0] < threshold:
        return None, "Sorry, I couldn't find a relevant document to answer your question."

    retrieved_doc = documents[indices[0][0]]

    # Format the instructional prompt
    prompt = f"Context: {retrieved_doc}\\nQuestion: {query}\\nAnswer in one sentence:"

    response = generator(
        prompt, 
        max_new_tokens=30,
        do_sample=False, 
        truncation=True
    )[0]['generated_text']

    return retrieved_doc, response

print("✅ Answer function ready!")`,
  },
  {
    id: 8,
    title: "Interactive Q&A Bot Loop",
    explanation:
      "Set up a test query to verify the HelpBot responds correctly using our retrieved context. You can also uncomment the infinite shell loop to chat interactively.",
    packages: [
      {
        name: "run_qa_bot",
        desc: "Helper function showing how to prompt user inputs inside a terminal chat loop.",
      },
    ],
    code: `def run_qa_bot():
    print("Welcome to the RAG Q&A Bot! Ask a question or type 'exit' to quit.")
    # For testing, we run a static single query. Uncomment lines below to run in terminal:
    # while True:
    #     query = input("User: ")
    #     if query.lower() == 'exit':
    #         break
    #     context, answer = rag_answer(query)
    #     print(f"HelpBot: {answer}\\n")

query = "How do I return an item on Amazon?"
context, answer = rag_answer(query)

print(f"🔍 User Query      : {query}")
print(f"📚 Retrieved Doc   : {context}")
print(f"🤖 HelpBot Response: {answer}")`,
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
export function DocumentQaGuide() {
  const { copiedId, copy } = useCopy();
  const [activeTab, setActiveTab] = useState<"overview" | "usecases" | "working">("overview");

  return (
    <div className="space-y-8">
      {/* ── Header card ────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 via-white to-emerald-50 shadow-sm">
        <div className="border-b border-teal-100 bg-white/60 px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-teal-700">
                Advanced AI Architectures
              </p>
              <h2 className="mt-1 text-[22px] font-bold text-gray-900">
                Building a Document Q&A Bot
              </h2>
              <p className="mt-1.5 text-[14px] leading-relaxed text-gray-600">
                Take the RAG framework to the next level. Build a localized customer support bot that uses FAISS similarity indexing, sentence embeddings, and a generator model to answer support queries.
              </p>
            </div>
            <BookOpen className="mt-1 h-8 w-8 shrink-0 text-teal-600" />
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
          {(["overview", "usecases", "working"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-teal-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-slate-50 hover:text-gray-900"
              }`}
            >
              {tab === "overview" && "1. Overview & Architecture"}
              {tab === "usecases" && "2. Use Cases & Benefits"}
              {tab === "working" && "3. Bot Workflow & Ingestion"}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">RAG: Information Retrieval + Generative Models</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                Retrieval-Augmented Generation (RAG) is a framework that combines the strengths of information retrieval and generative models:
              </p>
              <ul className="mt-3 space-y-2 text-[13.5px] text-gray-700">
                <li><strong>Retriever:</strong> The retriever component fetches relevant documents from a large corpus or knowledge base based on the input query.</li>
                <li><strong>Generator:</strong> The generator then takes the retrieved documents and the query to generate a coherent and contextually relevant response.</li>
              </ul>
              <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                It allows a model to retrieve relevant documents from a knowledge base and use those documents to augment the generation process, resulting in more accurate, context-aware, and insightful responses. This approach has shown promising results in various applications such as question answering, dialogue systems, and content generation.
              </p>
            </div>

            {/* Ingestion to Generation Flow */}
            <div className="rounded-xl border border-teal-100 bg-teal-50/20 p-5 space-y-3">
              <h4 className="font-bold text-sm text-teal-950">How a Customer Help Bot Operates:</h4>
              <div className="grid gap-4 sm:grid-cols-3 text-[13px] text-teal-900">
                <div className="rounded-lg border border-teal-200/50 bg-white p-3">
                  <p className="font-bold">1. Query Input</p>
                  <p className="mt-1 text-slate-500 font-normal">Customer asks: &quot;How do I return an item?&quot;</p>
                </div>
                <div className="rounded-lg border border-teal-200/50 bg-white p-3">
                  <p className="font-bold">2. Document Retrieval</p>
                  <p className="mt-1 text-slate-500 font-normal">Retriever searches vector space & pulls the Amazon Return FAQ document.</p>
                </div>
                <div className="rounded-lg border border-teal-200/50 bg-white p-3">
                  <p className="font-bold">3. Response Gen</p>
                  <p className="mt-1 text-slate-500 font-normal">FLAN-T5 model writes a natural sentence referencing the FAQ details.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Use Cases & Benefits */}
        {activeTab === "usecases" && (
          <div className="mt-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Use Cases for Help Bots</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center gap-2 text-teal-700">
                  <Cpu className="h-5 w-5 shrink-0" />
                  <h4 className="font-bold text-sm">Customer Support</h4>
                </div>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  Provide real-time support for order inquiries, shipping delays, refunds, and returns without human agent intervention.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center gap-2 text-teal-700">
                  <Layers className="h-5 w-5 shrink-0" />
                  <h4 className="font-bold text-sm">Product Recommendations</h4>
                </div>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  Help customers with product suggestions based on user profiles or purchase history retrieved dynamically.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center gap-2 text-teal-700">
                  <ShieldCheck className="h-5 w-5 shrink-0" />
                  <h4 className="font-bold text-sm">Troubleshooting & Guides</h4>
                </div>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  Assist customers with technical setups or troubleshooting steps by fetching precise manual entries.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <div className="flex items-center gap-2 text-teal-700">
                  <HelpCircle className="h-5 w-5 shrink-0" />
                  <h4 className="font-bold text-sm">Real-time Tracking</h4>
                </div>
                <p className="mt-1 text-[13px] text-gray-600 leading-relaxed">
                  Connect indexes with internal package tracking status databases to answer shipment queries instantly.
                </p>
              </div>
            </div>

            {/* Side-by-side section: Advantages and challenges */}
            <div className="grid gap-6 md:grid-cols-2 border-t border-slate-100 pt-6">
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-bold text-sm text-teal-950">
                  <ShieldCheck className="h-4.5 w-4.5 text-emerald-600" />
                  Key Advantages
                </h4>
                <ul className="space-y-2 text-[12.5px] text-gray-600">
                  <li><strong>Improved Accuracy:</strong> An external knowledge database avoids generic fallback answers.</li>
                  <li><strong>Instant Scaling:</strong> Update the vector documents list without retraining models.</li>
                  <li><strong>Architecture Flexibility:</strong> Modular parts (Retriever + Generator) can be updated independently.</li>
                  <li><strong>Fast Specialized Apps:</strong> Deploy specialized support bots quickly by uploading product FAQs.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-bold text-sm text-amber-950">
                  <AlertTriangle className="h-4.5 w-4.5 text-amber-600" />
                  RAG Challenges
                </h4>
                <ul className="space-y-2 text-[12.5px] text-gray-600">
                  <li><strong>Computation Load:</strong> Loading models (embeddings + generator) requires adequate memory.</li>
                  <li><strong>Ambiguity:</strong> Vague queries like &quot;Where is it?&quot; might match irrelevant vector indexes.</li>
                  <li><strong>Length Control:</strong> Generator models can output verbose sentences unless strict prompt constraints are used.</li>
                  <li><strong>Retrieval Precision:</strong> Bad matches in similarity indexes lead directly to bad generation.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Working */}
        {activeTab === "working" && (
          <div className="mt-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Help Bot Lifecycle</h3>
            
            <div className="space-y-6">
              {[
                { title: "Step 1 & 2: Set up Environment", desc: "Install libraries (`sentence-transformers`, `faiss-cpu`, `transformers`, `torch`) and import components." },
                { title: "Step 3 & 4: Ingestion & Embeddings", desc: "Format the Knowledge Base sentences and encode them into 384-dimensional vector embeddings using MiniLM." },
                { title: "Step 5: FAISS Vector Indexing", desc: "L2-normalize the vector embeddings and load them into a FAISS Inner Product index for fast similarity search." },
                { title: "Step 6: Generator Loading", desc: "Load Google's FLAN-T5-Small model pipeline for conditional text-to-text generation." },
                { title: "Step 7: RAG Execution", desc: "When queries arrive, search FAISS, extract matching document context, compile prompt instructions, and generate the final answer." },
                { title: "Step 8: Interactive Test", desc: "Test the answer generation using sample customer questions and verify context retrieval accuracy." },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white">
                      {idx + 1}
                    </div>
                    {idx < 5 && <div className="w-0.5 flex-1 bg-teal-100" />}
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-[14.5px] text-gray-900">{step.title}</h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── Notebook Steps ─────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-bold text-gray-900 flex items-center gap-2">
          <Code className="h-5 w-5 text-teal-600" />
          Interactive Notebook Code steps
        </h3>
        <p className="text-sm text-gray-600">
          Run these code cells in order in your notebook to build the FAISS + Hugging Face RAG HelpBot.
        </p>
      </div>

      {STEPS.map((step, idx) => (
        <div key={step.id} className="relative">
          {/* Connector line between steps */}
          {idx < STEPS.length - 1 && (
            <div className="absolute left-6 top-full h-8 w-0.5 bg-gradient-to-b from-teal-300 to-transparent" />
          )}

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* Step header */}
            <div className="flex items-center gap-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-5 py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white shadow-sm">
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
                      <code className="mt-0.5 shrink-0 rounded-md bg-teal-100 px-2 py-0.5 text-[11.5px] font-bold text-teal-800">
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
        <p className="text-[13px] font-bold text-blue-900">🎉 RAG Application complete!</p>
        <p className="mt-1 text-[13px] leading-relaxed text-blue-800">
          You have successfully built a customer support HelpBot. Next, we will explore multi-agent coordination systems!
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
