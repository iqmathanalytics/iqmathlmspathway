import type { TopicLesson } from "@/lib/types";
import { mbaAiDay4Labs } from "./mba-ai-day4-labs";

const COLAB = "https://colab.research.google.com/#create=true";
const GROQ_KEYS = "https://console.groq.com/keys";
const DOC = "https://docs.google.com/";

const FB = {
  overview: "/datasets/mba/day3-freshbasket-company-overview.txt",
  hr: "/datasets/mba/day3-freshbasket-hr-policy.txt",
  promo: "/datasets/mba/day3-freshbasket-promo-governance.txt",
  fy: "/datasets/mba/day3-freshbasket-fy-highlights.txt",
} as const;

const INSTALL_BASE =
  "!pip install -q groq scikit-learn pandas\nprint('OK — groq, sklearn, pandas')";

const INSTALL_RAG =
  "!pip install -q groq langchain langchain-groq langchain-community langchain-text-splitters faiss-cpu sentence-transformers pypdf scikit-learn pandas\nprint('OK — RAG stack installed')";

const KEY_BOOT = `import os
from getpass import getpass

GROQ_MODEL = "llama-3.1-8b-instant"
if not os.environ.get("GROQ_API_KEY"):
    os.environ["GROQ_API_KEY"] = getpass("Paste GROQ_API_KEY (hidden): ").strip()
print("=" * 40)
print("  KEY LOADED  |  model:", GROQ_MODEL)
print("=" * 40)`;

/**
 * Day 4 — RAG & AI-Powered Data Analysis (topics 1–5)
 */
export const mbaAiDay4Lessons: Record<string, TopicLesson> = {
  ...mbaAiDay4Labs,

  "mba-d4-t1": {
    topicId: "mba-d4-t1",
    intro:
      "Day 4 covers Retrieval-Augmented Generation (RAG) and LLM-assisted data analysis. This topic is reading only: you will learn the architecture, when to use RAG, and the grounding rule that protects answers from invented company facts.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "By the end of this topic you should be able to explain what RAG is, contrast it with unaided chat, describe the four pipeline stages (Query → Retrieve → Augment → Generate), and state why embeddings differ from simple keyword search. You will also learn the grounding rule used in every lab today: if the source does not contain the answer, the model must say so.",
      },
      {
        type: "heading",
        content: "2) The business problem",
      },
      {
        type: "paragraph",
        content:
          "Managers routinely ask questions whose answers live in approved internal files: leave policy, promotion approval rules, supplier codes of conduct, quarterly results. A general-purpose language model has not been trained on your company’s latest HR extract or promo governance note. When those facts are missing, the model may still produce fluent prose. Fluency is not accuracy. For compliance, audit, and decision support, an answer that invents a policy number is worse than a clear refusal.",
      },
      {
        type: "paragraph",
        content:
          "RAG addresses this by inserting a retrieval step before generation. The system searches a knowledge base built from your documents, pulls the most relevant passages, and places those passages into the prompt. The language model then writes using that evidence—not from open-ended memory alone.",
      },
      {
        type: "visual",
        diagram: {
          title: "Unaided chat vs RAG",
          variant: "compare",
          nodes: [
            {
              id: "u",
              label: "Unaided LLM",
              sublabel: "May invent company-specific facts",
            },
            {
              id: "r",
              label: "RAG pipeline",
              sublabel: "Retrieve passages → answer only from them",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "3) What is RAG?",
      },
      {
        type: "paragraph",
        content:
          "Retrieval-Augmented Generation combines information retrieval with text generation. Retrieval finds relevant text from a corpus you control (policies, PDFs, notes). Generation uses a large language model to turn that text into a readable answer. The “augmented” part means the prompt is enriched with retrieved context so the model does not have to rely solely on parameters learned during pre-training.",
      },
      {
        type: "heading",
        content: "4) Architecture: Query → Retrieve → Augment → Generate",
      },
      {
        type: "visual",
        diagram: {
          title: "Query → Retrieve → Augment → Generate",
          variant: "flow",
          nodes: [
            { id: "q", label: "Query", sublabel: "User question" },
            { id: "ret", label: "Retrieve", sublabel: "Find useful chunks" },
            { id: "aug", label: "Augment", sublabel: "Stuff context into prompt" },
            { id: "gen", label: "Generate", sublabel: "LLM answers from context" },
          ],
          arrows: [
            { from: "q", to: "ret" },
            { from: "ret", to: "aug" },
            { from: "aug", to: "gen" },
          ],
        },
      },
      {
        type: "paragraph",
        content:
          "Query. The user asks a natural-language question (for example, how many casual leave days full-time staff receive per financial year). The query is the input to retrieval; later it is also passed to the generator so the answer stays on topic.",
      },
      {
        type: "paragraph",
        content:
          "Retrieve. Documents are stored as shorter passages (chunks). A retriever scores those chunks against the query and returns the top-k matches. Early labs use TF-IDF and cosine similarity; later labs use dense embeddings and FAISS. Both approaches serve the same purpose: narrow a large corpus to a handful of relevant excerpts.",
      },
      {
        type: "paragraph",
        content:
          "Augment. The selected passages are inserted into the prompt under a clear label such as CONTEXT. System instructions tell the model to use only that context. This step is where grounding is enforced: the model is not asked to “know” the company; it is asked to read the evidence you provided.",
      },
      {
        type: "paragraph",
        content:
          "Generate. The LLM produces the final answer. Temperature is typically set low for policy and compliance work so wording stays stable. If the context does not support an answer, the correct output is an explicit refusal (in our labs: NOT IN DOCUMENT), not a plausible guess.",
      },
      {
        type: "heading",
        content: "5) Embeddings versus keywords (brief)",
      },
      {
        type: "paragraph",
        content:
          "Keyword and TF-IDF retrieval rank chunks by overlapping terms. They are fast, transparent, and sufficient for many policy lookups where wording is consistent. Dense embeddings map text into vectors so that related meanings can match even when the exact words differ—for example, “casual leave allowance” aligning with “12 casual leave days.” Vector search (FAISS in this course) usually improves recall on messy PDFs and paraphrased questions, at the cost of downloading an embedding model and building an index.",
      },
      {
        type: "heading",
        content: "6) The grounding rule",
      },
      {
        type: "paragraph",
        content:
          "Grounding means the answer must be supported by retrieved (or pasted) source text. If support is missing, say NOT IN DOCUMENT. Prefer a short refusal over a confident invention. In every Day 4 exercise you will print retrieved passages before the answer so reviewers can verify the evidence trail.",
      },
      {
        type: "heading",
        content: "7) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "Grounded systems reduce policy and compliance risk because answers can be checked against source passages. Stakeholders can inspect what was retrieved. The same pattern extends beyond Q&A: later topics use LLMs to narrate KPI tables and summarise report extracts, always with source-bound rules so numbers and claims stay auditable.",
      },
      {
        type: "heading",
        content: "8) Day 4 learning path",
      },
      {
        type: "list",
        items: [
          "Feel the gap (unaided vs grounded) → chunking → TF-IDF mini RAG → FAISS vectors",
          "Real PDFs → multi-document index → CSV analysis → structured summarisation",
          "Capstone: FreshBasket Intelligence Desk (text RAG + PDF + CSV insight + refusal)",
        ],
      },
      {
        type: "tip",
        content:
          "Lab notes: create a Google Doc titled “AI Lab Notes — Day 4”. From Topic 2 onward each lesson includes Downloads with LMS file links. After every practice exercise, paste the retrieved panels and answers into that document.",
      },
    ],
    keyTakeaways: [
      "RAG retrieves passages from your documents, then generates an answer from that evidence.",
      "Unaided LLMs can invent company-specific facts; grounding reduces that risk.",
      "Prefer “NOT IN DOCUMENT” over a confident answer that the source does not support.",
    ],
  },

  "mba-d4-t2": {
    topicId: "mba-d4-t2",
    intro:
      "Compare the same FreshBasket leave question twice: once with no policy text, once with the HR extract in the prompt. The contrast shows why grounding matters before you build retrieval machinery.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will run two Groq calls with identical questions and different evidence. After this topic you should be able to explain why an unaided answer can look polished yet fail a policy check, and how a grounding instruction plus source extract changes the result.",
      },
      {
        type: "heading",
        content: "2) What you will compare",
      },
      {
        type: "paragraph",
        content:
          "Unaided call: the model receives only the question (and a weak system message that encourages it to try anyway). Grounded call: the model receives the FreshBasket HR extract and a strict rule—answer only from the extract; if the fact is absent, reply NOT IN DOCUMENT. Same question, different evidence, side-by-side output.",
      },
      {
        type: "heading",
        content: "3) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "Before investing in chunkers and vector indexes, decision-makers need a clear demonstration that company text changes answers. This exercise is that demonstration. It also trains the habit of judging answers by match to the file, not by how natural the prose sounds.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Download the FreshBasket HR policy text from the LMS Downloads list.",
          "In Colab, install groq and load GROQ_API_KEY with getpass; set GROQ_MODEL to llama-3.1-8b-instant.",
          "Paste or upload the HR extract into a variable.",
          "Call Groq once with only the question (unaided).",
          "Call Groq again with system/user messages that include the extract and the grounding rule.",
          "Print both answers under a clear header and paste them into your Day 4 Google Doc.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Suppose the question asks for casual leave days and Sunday overtime rules. The HR extract states those policies explicitly. The grounded call should quote or paraphrase those numbers. The unaided call may invent different figures, hedge vaguely, or mix general labour norms with FreshBasket rules. Your lab notes should record both outputs so the difference is visible later when you automate retrieval.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Judging quality by “sounds professional” instead of “matches the extract.”",
          "Forgetting to paste or upload the HR file into Colab before the grounded call.",
          "Using a high temperature, which makes comparisons less stable.",
          "Omitting the NOT IN DOCUMENT instruction on the grounded call.",
        ],
      },
      {
        type: "heading",
        content: "Downloads for this topic",
      },
      {
        type: "paragraph",
        content:
          "Click each link to download, then paste or upload the file into Colab.",
      },
      {
        type: "list",
        items: [
          `FreshBasket HR policy (required): ${FB.hr}`,
          `FreshBasket promo governance (optional peek): ${FB.promo}`,
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | Groq keys: ${GROQ_KEYS}`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — unaided vs grounded",
      },
      {
        type: "paragraph",
        content:
          "Run the cells below. Confirm the HR extract loaded (character count > 50), then compare the two answers. Paste both into Google Doc Day 4.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL_BASE,
        notebookCells: [
          {
            label: "Cell 1 — Install + key",
            code: `${INSTALL_BASE}\n\n${KEY_BOOT}\n\nfrom groq import Groq\nclient = Groq(api_key=os.environ["GROQ_API_KEY"])`,
          },
          {
            label: "Cell 2 — Load HR extract (paste or upload)",
            code: `# Option A: paste the downloaded HR text between the triple quotes
hr_text = """
PASTE FreshBasket HR policy extract here
"""

# Option B (Colab upload): uncomment
# from google.colab import files
# uploaded = files.upload()
# path = list(uploaded.keys())[0]
# hr_text = open(path, encoding="utf-8", errors="ignore").read()

print("HR chars:", len(hr_text.strip()))
assert len(hr_text.strip()) > 50, "Paste or upload the HR extract first"`,
          },
          {
            label: "Cell 3 — Practice: unaided vs grounded",
            code: `q = "How many casual leave days do full-time FreshBasket staff get per FY? What about Sunday overtime?"

def ask(system, user):
    r = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=0,
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
    )
    return r.choices[0].message.content.strip()

unaided = ask(
    "Answer in 3 sentences. If you are unsure, still try.",
    q,
)
grounded = ask(
    "Answer ONLY using the company extract. If not stated, say NOT IN DOCUMENT.",
    f"EXTRACT:\\n{hr_text}\\n\\nQUESTION:\\n{q}",
)

print("=== UNAIDED vs GROUNDED ===")
print("\\n### UNAIDED (no file)\\n", unaided)
print("\\n### GROUNDED (HR extract)\\n", grounded)
print("\\n>>> Paste both into Google Doc Day 4")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 2 checklist",
        setupSteps: [
          {
            title: "Downloaded FreshBasket HR extract",
            link: { label: "Download HR policy", url: FB.hr },
          },
          { title: "Ran Cell 3 — unaided vs grounded printed" },
          {
            title: "Pasted both answers into Google Doc Day 4",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "The same question with a company extract produces more reliable answers than an unaided call.",
      "Grounding rule: if the fact is not in the extract, say NOT IN DOCUMENT.",
      "Later topics automate retrieval so you do not paste entire files into every prompt.",
    ],
  },

  "mba-d4-t3": {
    topicId: "mba-d4-t3",
    intro:
      "Long documents cannot fit into every prompt. Chunking splits text into overlapping passages that a retriever can score. This topic builds a chunk preview table from FreshBasket extracts.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will load multiple FreshBasket text extracts, split them with RecursiveCharacterTextSplitter, and inspect chunk counts and previews. You should leave able to explain why chunk size and overlap are design choices, not afterthoughts.",
      },
      {
        type: "heading",
        content: "2) What is a chunk?",
      },
      {
        type: "paragraph",
        content:
          "A chunk is a short passage cut from a longer document—often a few hundred characters—optionally overlapping neighbouring chunks so that sentences or policy clauses are not sliced awkwardly at the boundary. Retrieval ranks chunks, not entire multi-page files, because scoring and prompt stuffing both work better on smaller units.",
      },
      {
        type: "heading",
        content: "3) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "Policy and governance documents are long. If you stuff an entire file into every question, you waste context window space and bury the relevant paragraph. If you chunk poorly—huge blocks or zero overlap—you retrieve the wrong passage and the generator faithfully explains the wrong rule. Chunk quality is an upstream control on answer quality.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Download FreshBasket HR, promo governance, and FY highlights texts.",
          "Paste or upload them into Colab and store them in a small dictionary keyed by source name.",
          "Create RecursiveCharacterTextSplitter(chunk_size=400, chunk_overlap=60).",
          "Split each document; collect (source, index, length, preview) rows.",
          "Print total chunk count and a preview table; paste into your lab notes.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "With chunk_size around 400 and overlap 60, a short HR extract might yield a handful of chunks; a longer promo note yields more. Previews should show readable policy fragments, not empty strings. If every chunk is nearly the full document, size is too large. If adjacent chunks share no context and mid-sentence cuts are common, increase overlap or adjust size.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Chunks so large they consume most of the context window by themselves.",
          "Zero overlap when a rule spans two paragraphs.",
          "Loading only one file when the exercise asks for three sources.",
          "Not checking character counts before splitting (empty paste → zero useful chunks).",
        ],
      },
      {
        type: "heading",
        content: "Downloads for this topic",
      },
      {
        type: "paragraph",
        content:
          "Download all three text extracts. Paste them into Cell 2 (or upload the .txt files in Colab).",
      },
      {
        type: "list",
        items: [
          `FreshBasket HR policy: ${FB.hr}`,
          `FreshBasket promo governance: ${FB.promo}`,
          `FreshBasket FY highlights: ${FB.fy}`,
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | Groq keys: ${GROQ_KEYS}`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — chunk preview table",
      },
      {
        type: "paragraph",
        content:
          "Install the RAG stack, load the three extracts, and print the chunk board. Record total chunks and at least three previews in Google Doc Day 4.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL_RAG,
        notebookCells: [
          {
            label: "Cell 1 — Install",
            code: INSTALL_RAG,
          },
          {
            label: "Cell 2 — Load texts (paste or upload)",
            code: `hr = """PASTE HR extract"""
promo = """PASTE promo governance extract"""
fy = """PASTE FY highlights extract"""

# Or upload .txt files in Colab and read them with open(...)
docs = {
    "hr-policy": hr.strip(),
    "promo-governance": promo.strip(),
    "fy-highlights": fy.strip(),
}
for k, v in docs.items():
    print(k, "chars:", len(v))
    assert len(v) > 40, f"Paste/upload {k}"`,
          },
          {
            label: "Cell 3 — Practice: chunk table",
            code: `from langchain_text_splitters import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(chunk_size=400, chunk_overlap=60)

rows = []
for name, text in docs.items():
    chunks = splitter.split_text(text)
    for i, c in enumerate(chunks):
        rows.append((name, i, len(c), c[:90].replace("\\n", " ") + "..."))

print("=== CHUNK PREVIEW ===")
print(f"Total chunks: {len(rows)}")
print(f"{'SOURCE':<18}{'#':>4}{'LEN':>6}  PREVIEW")
print("-" * 70)
for name, i, n, prev in rows[:12]:
    print(f"{name:<18}{i:>4}{n:>6}  {prev}")
print("\\n>>> Paste chunk count + 3 previews into Google Doc Day 4")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 3 checklist",
        setupSteps: [
          { title: "Loaded HR + promo (+ FY) extracts into Cell 2" },
          { title: "Ran Cell 3 — saw total chunks and preview table" },
          {
            title: "Pasted chunk board into Google Doc Day 4",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Chunking makes long documents searchable as ranked passages.",
      "Chunk size and overlap are design choices; start near 400/60 for policy text.",
      "Next topic scores chunks with TF-IDF retrieval and generates grounded answers.",
    ],
  },

  "mba-d4-t4": {
    topicId: "mba-d4-t4",
    intro:
      "Build a mini RAG loop without dense vectors: TF-IDF ranks the most relevant chunks, then Groq answers using only those chunks. Always print RETRIEVED before ANSWER.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will assemble chunks from FreshBasket texts, retrieve top-k with TF-IDF and cosine similarity, and generate grounded answers with Groq (llama-3.1-8b-instant). You will practice printing an audit trail of retrieved passages before each answer.",
      },
      {
        type: "heading",
        content: "2) What is TF-IDF retrieval?",
      },
      {
        type: "paragraph",
        content:
          "TF-IDF (term frequency–inverse document frequency) weights how distinctive a word is in a chunk relative to the whole collection. After vectorising chunks and the question, cosine similarity ranks chunks by overlap of important terms. It is fast in Colab with scikit-learn and does not require downloading an embedding model—ideal for learning the full RAG loop first.",
      },
      {
        type: "heading",
        content: "3) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "A retriever that surfaces the wrong paragraph will still produce a fluent wrong answer if the generator trusts the context. Showing RETRIEVED before ANSWER creates an audit trail reviewers can check. TF-IDF also clarifies that “RAG” is a pipeline, not a single magic API call.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Load HR, promo, and company overview extracts; split into chunks with source labels.",
          "Fit TfidfVectorizer on the chunk list.",
          "For each question, transform the query, compute cosine similarity, take top-k.",
          "Print each hit (source, score, excerpt); build a CONTEXT string.",
          "Prompt Groq to answer only from CONTEXT; on weak or missing evidence reply NOT IN DOCUMENT.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Ask how many casual leave days full-time staff get. High-scoring chunks should come from the HR source and mention leave. Ask who must approve discounts above 12%. Hits should lean toward promo governance. If top scores are near zero or passages are unrelated, the honest answer is NOT IN DOCUMENT—not a guess filled from general knowledge.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Sending the whole document instead of top-k chunks.",
          "Letting the model ignore retrieved context (missing grounding instruction).",
          "Forgetting to print RETRIEVED panels in lab notes.",
          "Building chunks from only one file when leave and promo questions need different sources.",
        ],
      },
      {
        type: "heading",
        content: "Downloads for this topic",
      },
      {
        type: "paragraph",
        content:
          "Reuse the same FreshBasket extracts (download again if needed). Overview is required for this mini RAG.",
      },
      {
        type: "list",
        items: [
          `FreshBasket HR policy: ${FB.hr}`,
          `FreshBasket promo governance: ${FB.promo}`,
          `FreshBasket company overview: ${FB.overview}`,
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | Keys: ${GROQ_KEYS} | Paste or upload all three into Cell 2.`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — RETRIEVED then ANSWER",
      },
      {
        type: "paragraph",
        content:
          "Build the chunk list, run TF-IDF retrieval for leave and promo questions, and paste both RETRIEVED + ANSWER traces into Google Doc Day 4.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL_RAG,
        notebookCells: [
          {
            label: "Cell 1 — Install + key",
            code: `${INSTALL_RAG}\n\n${KEY_BOOT}\n\nfrom groq import Groq\nclient = Groq(api_key=os.environ["GROQ_API_KEY"])`,
          },
          {
            label: "Cell 2 — Chunks from FreshBasket texts",
            code: `from langchain_text_splitters import RecursiveCharacterTextSplitter

# Paste the same extracts from Topic 3 (or re-upload)
hr = """PASTE HR"""
promo = """PASTE promo"""
overview = """PASTE company overview"""

splitter = RecursiveCharacterTextSplitter(chunk_size=400, chunk_overlap=60)
chunks, sources = [], []
for name, text in [("hr", hr), ("promo", promo), ("overview", overview)]:
    text = text.strip()
    assert len(text) > 40, f"Paste {name}"
    for c in splitter.split_text(text):
        chunks.append(c)
        sources.append(name)
print("Chunks:", len(chunks))`,
          },
          {
            label: "Cell 3 — Practice: TF-IDF RAG",
            code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

vectorizer = TfidfVectorizer(stop_words="english")
X = vectorizer.fit_transform(chunks)

def retrieve(question, k=3):
    qv = vectorizer.transform([question])
    scores = cosine_similarity(qv, X).ravel()
    idx = np.argsort(scores)[::-1][:k]
    return [(float(scores[i]), sources[i], chunks[i]) for i in idx]

def answer(question):
    hits = retrieve(question, k=3)
    print("=== RETRIEVED ===")
    context_parts = []
    for score, src, text in hits:
        print(f"[{src}] score={score:.3f}\\n{text[:280]}...\\n")
        context_parts.append(f"SOURCE={src}\\n{text}")
    context = "\\n\\n---\\n\\n".join(context_parts)
    prompt = (
        "Answer ONLY using CONTEXT. If missing, reply exactly: NOT IN DOCUMENT.\\n\\n"
        f"CONTEXT:\\n{context}\\n\\nQUESTION:\\n{question}"
    )
    r = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=0,
        messages=[
            {"role": "system", "content": "Grounded policy desk. No invention."},
            {"role": "user", "content": prompt},
        ],
    )
    print("=== ANSWER ===")
    print(r.choices[0].message.content.strip())

print("=== TF-IDF MINI RAG ===")
answer("How many casual leave days per FY for full-time staff?")
print("\\n")
answer("Who must approve discounts above 12%?")
print("\\n>>> Paste RETRIEVED + ANSWER for both questions into Google Doc Day 4")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 4 checklist",
        setupSteps: [
          { title: "Built chunks in Cell 2" },
          { title: "Ran Cell 3 — leave + promo questions with RETRIEVED panels" },
          {
            title: "Pasted both RAG traces into Google Doc Day 4",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "RAG retrieves top chunks, then generates from those chunks only.",
      "Always show RETRIEVED before ANSWER for an audit trail.",
      "TF-IDF is a practical first retriever before introducing dense vectors.",
    ],
  },

  "mba-d4-t5": {
    topicId: "mba-d4-t5",
    intro:
      "Upgrade retrieval to embeddings and FAISS—a vector store. Ask the same style of policy question with semantic similarity instead of TF-IDF keyword overlap.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will embed FreshBasket chunks with a small Hugging Face sentence-transformers model, index them in FAISS, run similarity_search, and generate a grounded Groq answer. You should understand when semantic retrieval helps over pure keyword matching.",
      },
      {
        type: "heading",
        content: "2) What is a vector store?",
      },
      {
        type: "paragraph",
        content:
          "An embedding model turns each chunk into a fixed-length list of numbers (a vector) that encodes meaning. FAISS stores those vectors and finds nearest neighbours to the question vector. Similarity is semantic: related wording can match even when exact tokens differ. The rest of the pipeline—augment and generate—stays the same as Topic 4.",
      },
      {
        type: "heading",
        content: "3) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "Users rarely copy policy phrasing word-for-word. “What approval do we need for deep discounts?” should still find the promo governance clause about thresholds above 12%. Vector retrieval improves recall on paraphrases and on PDFs with uneven wording, which is why production RAG systems commonly use embeddings.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Split HR and promo texts into chunks with source metadata.",
          "Create HuggingFaceEmbeddings(model_name=\"sentence-transformers/all-MiniLM-L6-v2\").",
          "Build FAISS.from_texts(...) (first run downloads the embedding model—wait for it).",
          "Call similarity_search(question, k=3).",
          "Print retrieved passages; prompt Groq with the same grounding rule as TF-IDF RAG.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "For a discount-approval question, FAISS should return promo chunks even if the query uses synonyms. Compare mentally with Topic 4: if TF-IDF missed a paraphrase, embeddings often recover it. If the corpus truly lacks the fact, both retrievers return weak context—and the correct generator behaviour remains NOT IN DOCUMENT.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Abandoning the cell during the first embedding-model download.",
          "Forgetting to rebuild the FAISS index after changing chunk text.",
          "Using a different grounding prompt than Topic 4 (keep the rule consistent).",
          "Indexing empty strings because paste/upload was skipped.",
        ],
      },
      {
        type: "heading",
        content: "Downloads for this topic",
      },
      {
        type: "paragraph",
        content:
          "Same FreshBasket extracts as the TF-IDF topic. Download if you do not already have them locally.",
      },
      {
        type: "list",
        items: [
          `FreshBasket HR policy: ${FB.hr}`,
          `FreshBasket promo governance: ${FB.promo}`,
          `FreshBasket company overview (optional extra chunks): ${FB.overview}`,
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | First run of sentence-transformers may take a few minutes.`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — FAISS retrieval and answer",
      },
      {
        type: "paragraph",
        content:
          "Build the FAISS index, retrieve for a promo-approval question, and paste RETRIEVED + ANSWER into Google Doc Day 4.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL_RAG,
        notebookCells: [
          {
            label: "Cell 1 — Install + key",
            code: `${INSTALL_RAG}\n\n${KEY_BOOT}\n\nfrom groq import Groq\nclient = Groq(api_key=os.environ["GROQ_API_KEY"])`,
          },
          {
            label: "Cell 2 — Build FAISS index",
            code: `from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

hr = """PASTE HR"""
promo = """PASTE promo"""
# reuse your Topic 4 texts
splitter = RecursiveCharacterTextSplitter(chunk_size=400, chunk_overlap=60)
texts, metas = [], []
for src, raw in [("hr", hr), ("promo", promo)]:
    raw = raw.strip()
    assert len(raw) > 40
    for c in splitter.split_text(raw):
        texts.append(c)
        metas.append({"source": src})

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
db = FAISS.from_texts(texts, embeddings, metadatas=metas)
print("FAISS ready | vectors:", len(texts))`,
          },
          {
            label: "Cell 3 — Practice: FAISS retrieve + answer",
            code: `q = "What approval is needed for discounts above 12%?"

hits = db.similarity_search(q, k=3)
print("=== FAISS VECTOR RETRIEVAL ===")
print("=== RETRIEVED ===")
parts = []
for i, d in enumerate(hits, 1):
    src = d.metadata.get("source", "?")
    print(f"{i}. [{src}] {d.page_content[:260]}...\\n")
    parts.append(f"SOURCE={src}\\n{d.page_content}")
context = "\\n\\n---\\n\\n".join(parts)

r = client.chat.completions.create(
    model=GROQ_MODEL,
    temperature=0,
    messages=[
        {"role": "system", "content": "Answer ONLY from CONTEXT. Else: NOT IN DOCUMENT."},
        {"role": "user", "content": f"CONTEXT:\\n{context}\\n\\nQUESTION:\\n{q}"},
    ],
)
print("=== ANSWER ===")
print(r.choices[0].message.content.strip())
print("\\n>>> Paste FAISS RETRIEVED + ANSWER into Google Doc Day 4")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 5 checklist",
        setupSteps: [
          { title: "Built FAISS index in Cell 2" },
          { title: "Ran Cell 3 — FAISS RETRIEVED + ANSWER" },
          {
            title: "Pasted FAISS results into Google Doc Day 4",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Embeddings plus FAISS enable semantic vector retrieval.",
      "The grounded prompt pattern matches TF-IDF RAG; only the retriever changes.",
      "Next topics apply the same pipeline to real PDFs.",
    ],
  },
};
