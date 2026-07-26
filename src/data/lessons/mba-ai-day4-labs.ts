import type { TopicLesson } from "@/lib/types";

const COLAB = "https://colab.research.google.com/#create=true";
const GROQ_KEYS = "https://console.groq.com/keys";
const DOC = "https://docs.google.com/";

const FB = {
  overview: "/datasets/mba/day3-freshbasket-company-overview.txt",
  hr: "/datasets/mba/day3-freshbasket-hr-policy.txt",
  promo: "/datasets/mba/day3-freshbasket-promo-governance.txt",
  fy: "/datasets/mba/day3-freshbasket-fy-highlights.txt",
} as const;

const DOC_PDF = {
  itc:
    "/datasets/mba/real/" +
    encodeURIComponent(
      "ITC code-of-conduct-for-suppliers-and-service-providers (4 Pages).pdf",
    ),
  hulQ:
    "/datasets/mba/real/" +
    encodeURIComponent("HUL March 2026 Quarterly Results (47 Pages).pdf"),
  dmart:
    "/datasets/mba/real/" +
    encodeURIComponent("Dmart Annual Report 2024-25 (272 Pages).pdf"),
} as const;

const CSV = {
  fin: "/datasets/mba/day2/financial-sample-prompt-slice.csv",
  finFull: "/datasets/mba/day2/financial-sample.csv",
} as const;

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
 * Day 4 labs — Topics 6–10 (PDFs → multi-doc → analysis → insights → capstone)
 */
export const mbaAiDay4Labs: Record<string, TopicLesson> = {
  "mba-d4-t6": {
    topicId: "mba-d4-t6",
    intro:
      "Apply FAISS RAG to a short public PDF—ITC’s Supplier Code of Conduct (4 pages). Produce a grounded answer with page metadata so reviewers can verify the source.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will load a real PDF with PyPDFLoader, split pages into chunks, build a FAISS index, and answer an ethics/integrity question using only retrieved context. You should cite page numbers from metadata and refuse when the PDF is silent.",
      },
      {
        type: "heading",
        content: "2) Why start with a short PDF?",
      },
      {
        type: "paragraph",
        content:
          "Four pages load quickly and still represent a real filing: headers, multi-column layout quirks, and page metadata. Completing PDF → chunks → FAISS → Groq on a small file proves the loader path before you attempt larger quarterly packs or annual reports.",
      },
      {
        type: "heading",
        content: "3) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "Supplier and ethics questions must track policy language. Page-aware answers let compliance and procurement check the claim against the PDF. The same pattern later scales to earnings releases and multi-file desks.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Download the ITC Supplier Code PDF from the LMS; upload it in Colab.",
          "PyPDFLoader → RecursiveCharacterTextSplitter (e.g. 800 / 120) → FAISS.from_documents.",
          "similarity_search for an ethics/integrity question (k=4).",
          "Print retrieved excerpts with page metadata; prompt Groq to answer only from CONTEXT and cite pages.",
          "If the PDF does not cover the ask, expect NOT IN DOCUMENT.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "A question about supplier integrity should retrieve passages that mention ethics, honesty, or related obligations. Your printed RETRIEVED block should show page numbers. The answer should summarise those passages in bullets—not invent certification schemes or penalties that never appear in the four-page code.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Asking questions the PDF never covers and treating a guess as success.",
          "Forgetting to install pypdf as part of the RAG stack.",
          "Uploading the wrong file or skipping files.upload().",
          "Omitting page citations from the system instruction.",
        ],
      },
      {
        type: "heading",
        content: "Downloads for this topic",
      },
      {
        type: "paragraph",
        content:
          "Download the ITC Supplier Code PDF, then upload it in Colab Cell 2.",
      },
      {
        type: "list",
        items: [
          `ITC Supplier Code of Conduct (4 pages, required): ${DOC_PDF.itc}`,
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | Keys: ${GROQ_KEYS}`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — ITC PDF RAG",
      },
      {
        type: "paragraph",
        content:
          "Build the PDF index, run the grounded Q&A cell, and paste RETRIEVED + ANSWER into Google Doc Day 4.",
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
            label: "Cell 2 — Upload PDF + FAISS",
            code: `from google.colab import files
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

print("Upload the ITC Supplier Code PDF")
uploaded = files.upload()
pdf_path = list(uploaded.keys())[0]

loader = PyPDFLoader(pdf_path)
pages = loader.load()
splitter = RecursiveCharacterTextSplitter(chunk_size=800, chunk_overlap=120)
docs = splitter.split_documents(pages)
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
db = FAISS.from_documents(docs, embeddings)
print("Pages:", len(pages), "| Chunks:", len(docs))`,
          },
          {
            label: "Cell 3 — Practice: grounded PDF Q&A",
            code: `q = "What does the code expect from suppliers regarding ethics or integrity? Summarise in 4 bullets."

hits = db.similarity_search(q, k=4)
print("=== ITC PDF RAG ===")
print("=== RETRIEVED ===")
parts = []
for d in hits:
    page = d.metadata.get("page", "?")
    print(f"[page {page}] {d.page_content[:220].replace(chr(10),' ')}...\\n")
    parts.append(f"PAGE={page}\\n{d.page_content}")
context = "\\n\\n---\\n\\n".join(parts)

r = client.chat.completions.create(
    model=GROQ_MODEL,
    temperature=0,
    messages=[
        {"role": "system", "content": "Answer ONLY from CONTEXT. Cite page numbers. If missing: NOT IN DOCUMENT."},
        {"role": "user", "content": f"CONTEXT:\\n{context}\\n\\nQUESTION:\\n{q}"},
    ],
)
print("=== ANSWER ===")
print(r.choices[0].message.content.strip())
print("\\n>>> Paste RETRIEVED + ANSWER into Google Doc Day 4")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 6 checklist",
        setupSteps: [
          {
            title: "Downloaded ITC Supplier Code PDF",
            link: { label: "Download ITC PDF", url: DOC_PDF.itc },
          },
          { title: "Uploaded PDF and built FAISS index" },
          {
            title: "Pasted ITC RAG results into Google Doc Day 4",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "PDF loaders plus FAISS unlock grounded Q&A on real filings.",
      "Cite page metadata when answering from PDFs.",
      "Refuse with NOT IN DOCUMENT when the PDF does not support the claim.",
    ],
  },

  "mba-d4-t7": {
    topicId: "mba-d4-t7",
    intro:
      "Build a multi-document desk: index ITC and HUL Quarterly (DMart optional stretch). Every answer should tag which file supplied the evidence.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will load multiple PDFs into one FAISS index with source_file metadata, ask cross-corpus questions, and require SOURCE_FILE tags in answers. Optional stretch: add the large DMart annual report only if time and runtime allow.",
      },
      {
        type: "heading",
        content: "2) What is multi-document RAG?",
      },
      {
        type: "paragraph",
        content:
          "Business questions often span more than one file—supplier policy in one PDF, quantitative highlights in another. A single index with per-chunk source tags keeps retrieval honest about origin. Without tags, reviewers cannot tell whether a number came from an earnings pack or from a code of conduct.",
      },
      {
        type: "heading",
        content: "3) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "Leaders ask questions that mix policy and results. Tagged sources reduce confusion and support audit. Separating files only in folders—but merging them anonymously in the index—defeats that purpose.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Download ITC and HUL Quarterly PDFs (required); DMart AR is optional stretch.",
          "Upload files in Colab; for each page set metadata[\"source_file\"] = filename.",
          "Split and merge into one FAISS index.",
          "Ask one policy-oriented and one results-oriented question.",
          "Print RETRIEVED with source_file and page; instruct Groq to tag SOURCE_FILE or reply NOT IN DOCUMENT.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "An ethics question should retrieve primarily from the ITC code. A quantitative highlight question should retrieve from the HUL quarterly pack—or correctly refuse if the retrieved text does not contain a usable figure. Mixing answers without tags is a failure even if the prose sounds right.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Mixing files without source_file metadata.",
          "Indexing a 272-page annual report on a slow session when it is not required.",
          "Asking only one type of question (policy-only) and skipping the results check.",
          "Forgetting to re-upload both PDFs after a Colab runtime restart.",
        ],
      },
      {
        type: "heading",
        content: "Downloads for this topic",
      },
      {
        type: "paragraph",
        content:
          "Download ITC + HUL Quarterly (required). DMart Annual Report is an optional stretch file.",
      },
      {
        type: "list",
        items: [
          `ITC Supplier Code (required): ${DOC_PDF.itc}`,
          `HUL March 2026 Quarterly Results (required): ${DOC_PDF.hulQ}`,
          `DMart Annual Report 2024-25 (optional stretch): ${DOC_PDF.dmart}`,
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | Upload ITC then HUL Q in Cell 2 (add DMart only if stretching).`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — tagged multi-doc answers",
      },
      {
        type: "paragraph",
        content:
          "Build the multi-doc index, run both questions, and paste the tagged Q&A blocks into Google Doc Day 4.",
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
            label: "Cell 2 — Upload ITC + HUL Q (+ optional DMart)",
            code: `from google.colab import files
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

print("Upload ITC PDF, then HUL Quarterly PDF (optional: DMart AR)")
uploaded = files.upload()

splitter = RecursiveCharacterTextSplitter(chunk_size=900, chunk_overlap=120)
all_docs = []
for fname in uploaded.keys():
    pages = PyPDFLoader(fname).load()
    for p in pages:
        p.metadata["source_file"] = fname
    all_docs.extend(splitter.split_documents(pages))
    print(fname, "→ chunks so far", len(all_docs))

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
db = FAISS.from_documents(all_docs, embeddings)
print("Multi-doc FAISS ready | total chunks:", len(all_docs))`,
          },
          {
            label: "Cell 3 — Practice: tagged sources",
            code: `questions = [
    "From the supplier code: mention one ethics / integrity expectation.",
    "From the quarterly results PDF: state one quantitative highlight that appears in retrieved text (or NOT IN DOCUMENT).",
]

print("=== MULTI-DOC TAGGED DESK ===")

for q in questions:
    hits = db.similarity_search(q, k=4)
    print("\\nQ:", q)
    print("=== RETRIEVED ===")
    parts = []
    for d in hits:
        src = d.metadata.get("source_file", "?")
        page = d.metadata.get("page", "?")
        print(f"[{src} p.{page}] {d.page_content[:160].replace(chr(10),' ')}...")
        parts.append(f"SOURCE_FILE={src} PAGE={page}\\n{d.page_content}")
    context = "\\n\\n---\\n\\n".join(parts)
    r = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=0,
        messages=[
            {"role": "system", "content": "Answer ONLY from CONTEXT. Tag SOURCE_FILE. If missing: NOT IN DOCUMENT."},
            {"role": "user", "content": f"CONTEXT:\\n{context}\\n\\nQUESTION:\\n{q}"},
        ],
    )
    print("=== ANSWER ===")
    print(r.choices[0].message.content.strip())

print("\\n>>> Paste both Q&A blocks into Google Doc Day 4")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 7 checklist",
        setupSteps: [
          {
            title: "Downloaded ITC + HUL Quarterly PDFs",
            link: { label: "HUL Quarterly", url: DOC_PDF.hulQ },
          },
          { title: "Built multi-doc FAISS index" },
          {
            title: "Pasted tagged multi-doc answers into Google Doc Day 4",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "One index can hold many files when metadata carries source_file.",
      "Tag sources in every answer for auditability.",
      "Large annual reports are optional stretch; start with mid-size PDFs.",
    ],
  },

  "mba-d4-t8": {
    topicId: "mba-d4-t8",
    intro:
      "AI-powered data analysis: compute KPIs in pandas first, then ask Groq for an insight brief. Numbers stay owned by code; narrative stays bound to the KPI block.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will load a Financial Sample CSV, compute totals and top segments in pandas, print a KPI board, and generate a short Groq brief that may use only those printed numbers—no invented row values.",
      },
      {
        type: "heading",
        content: "2) Analysis pattern",
      },
      {
        type: "paragraph",
        content:
          "Document RAG grounds text. Analysis grounds numbers. The reliable pattern is: (1) load CSV, (2) compute KPIs with pandas, (3) pass the KPI table text to the LLM, (4) ask for risks and next questions rather than fabricated figures. The model narrates; the spreadsheet remains the source of truth.",
      },
      {
        type: "heading",
        content: "3) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "Board and management discussions mix charts with commentary. If the commentary invents sales totals, trust collapses. Separating computation from narration is a practical control that pairs well with grounded document Q&A later in the capstone.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Download the Financial Sample prompt-slice CSV (full sample optional).",
          "Upload to Colab; read with pandas.",
          "Detect sales/profit/segment-style columns flexibly (column names vary).",
          "Print row count, totals, and top groupbys as a KPI board.",
          "Prompt Groq with ONLY the KPI block: insights, risks/questions, recommended next analysis.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "If pandas reports total sales and a top segment ranking, the brief should refer to those figures and rankings. It should not invent a margin that never appeared in the KPI block. A good next-analysis suggestion might be “break sales by country” only if that dimension exists in the columns you printed—or phrase it as a question to run next in pandas.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Asking the LLM to invent sales figures without showing the table.",
          "Skipping pandas and hoping the model “knows” the CSV.",
          "Pasting the entire raw CSV into the prompt instead of summarised KPIs.",
          "Using high temperature so the brief drifts from the numbers.",
        ],
      },
      {
        type: "heading",
        content: "Downloads for this topic",
      },
      {
        type: "paragraph",
        content:
          "Download the Financial Sample CSV slice (small). Full sample is optional if you want more rows.",
      },
      {
        type: "list",
        items: [
          `Financial Sample prompt slice (required): ${CSV.fin}`,
          `Financial Sample full CSV (optional): ${CSV.finFull}`,
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | Keys: ${GROQ_KEYS} | Upload the CSV in Cell 2.`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — KPI board + insight brief",
      },
      {
        type: "paragraph",
        content:
          "Print the pandas KPI board, generate the Groq brief, and paste both into Google Doc Day 4.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL_RAG,
        notebookCells: [
          {
            label: "Cell 1 — Install + key",
            code: `${INSTALL_RAG}\n\n${KEY_BOOT}\n\nfrom groq import Groq\nimport pandas as pd\nclient = Groq(api_key=os.environ["GROQ_API_KEY"])`,
          },
          {
            label: "Cell 2 — Upload CSV + KPI board",
            code: `from google.colab import files
print("Upload financial-sample-prompt-slice.csv (or financial-sample.csv)")
uploaded = files.upload()
path = list(uploaded.keys())[0]
df = pd.read_csv(path)
print(df.head())
print("\\nColumns:", list(df.columns))

# Flexible column detection for Microsoft Financial Sample variants
sales_col = next((c for c in df.columns if c.lower() in {"sales", "gross sales", "revenue"}), None)
profit_col = next((c for c in df.columns if "profit" in c.lower()), None)
seg_col = next((c for c in df.columns if c.lower() in {"segment", "country", "product"}), df.columns[0])

kpi = []
kpi.append(f"rows={len(df)}")
if sales_col:
    kpi.append(f"total_{sales_col}={df[sales_col].sum():,.2f}")
if profit_col:
    kpi.append(f"total_{profit_col}={df[profit_col].sum():,.2f}")
by = df.groupby(seg_col)[sales_col].sum().sort_values(ascending=False).head(5) if sales_col else None

print("=== KPI BOARD (pandas) ===")
print("\\n".join(kpi))
if by is not None:
    print("\\nTop segments/products by sales:")
    print(by.to_string())
kpi_text = "\\n".join(kpi) + ("\\n" + by.to_string() if by is not None else "")`,
          },
          {
            label: "Cell 3 — Groq insight brief from KPIs only",
            code: `prompt = f"""You are a finance analyst. Use ONLY the KPI block. Do not invent numbers.
KPI BLOCK:
{kpi_text}

Write:
1) 4 bullet insights
2) 3 risks / questions for the next meeting
3) 1 recommended next analysis
Keep under 160 words."""

r = client.chat.completions.create(
    model=GROQ_MODEL,
    temperature=0.2,
    messages=[
        {"role": "system", "content": "Numbers only from the KPI block."},
        {"role": "user", "content": prompt},
    ],
)
print("=== INSIGHT BRIEF ===")
print(r.choices[0].message.content.strip())
print("\\n>>> Paste KPI board + brief into Google Doc Day 4")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 8 checklist",
        setupSteps: [
          {
            title: "Downloaded Financial Sample CSV slice",
            link: { label: "Download CSV", url: CSV.fin },
          },
          { title: "Printed pandas KPI board" },
          {
            title: "Pasted KPI board + Groq brief into Google Doc Day 4",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Compute KPIs in pandas; narrate with the LLM from the printed block only.",
      "Never let the model invent spreadsheet numbers.",
      "This pattern pairs with RAG: documents and data with separate evidence trails.",
    ],
  },

  "mba-d4-t9": {
    topicId: "mba-d4-t9",
    intro:
      "Summarisation and insight generation: turn FreshBasket FY highlights (and optional overview text) into a structured CEO one-pager—short, evidence-bound, and explicit about what was refused.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will load FY highlights (plus recommended overview), apply a fixed output template (Snapshot / Risks / Asks / NOT IN SOURCE), and generate a faithful one-pager with low temperature and no invented metrics.",
      },
      {
        type: "heading",
        content: "2) What good summaries do",
      },
      {
        type: "paragraph",
        content:
          "Effective executive summaries lead with decisions and risks, separate facts from assumptions, and stay inside the source text. Free-form “AI summaries” that add plausible KPIs or soft claims without evidence are not acceptable for this course—or for most board packs.",
      },
      {
        type: "heading",
        content: "3) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "Executives will not re-read forty pages in a stand-up. The analyst’s job is a faithful one-pager with clear next asks. Structure makes review faster: Snapshot for orientation, Risks for vigilance, Asks for decisions, and an explicit list of what the model refused to invent.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Download FY highlights (required) and company overview (recommended).",
          "Paste both into a single SOURCE string in Colab.",
          "Prompt Groq with a fixed markdown template and anti-invention rules.",
          "Keep temperature low; verify that every metric in the output appears in SOURCE.",
          "Paste the one-pager into Google Doc Day 4.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "If FY highlights mention revenue growth and a cost pressure, Snapshot and Risks should reflect those points. If a margin target is never stated, it belongs under NOT IN SOURCE—not as a fabricated headline. The Asks section should propose decisions that follow from the text (for example, review a named initiative), not generic consulting slogans.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Generic unstructured essays with no Snapshot / Risks / Asks sections.",
          "Adding numbers that never appeared in the source.",
          "Omitting the NOT IN SOURCE section.",
          "Using only overview text and skipping FY highlights.",
        ],
      },
      {
        type: "heading",
        content: "Downloads for this topic",
      },
      {
        type: "paragraph",
        content:
          "Download FY highlights (required) and company overview (recommended) for the CEO one-pager.",
      },
      {
        type: "list",
        items: [
          `FreshBasket FY highlights (required): ${FB.fy}`,
          `FreshBasket company overview (recommended): ${FB.overview}`,
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | Keys: ${GROQ_KEYS}`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — CEO one-pager",
      },
      {
        type: "paragraph",
        content:
          "Generate the structured one-pager from source text only and paste it into Google Doc Day 4.",
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
            label: "Cell 2 — Load FY / overview extracts",
            code: `fy = """PASTE FY highlights"""
overview = """PASTE company overview (optional but recommended)"""
source = (fy + "\\n\\n" + overview).strip()
assert len(source) > 80, "Paste FY highlights (and overview)"
print("Source chars:", len(source))`,
          },
          {
            label: "Cell 3 — Practice: CEO one-pager",
            code: `prompt = f"""Create a CEO one-pager ONLY from SOURCE.
SOURCE:
{source}

Format exactly:
## Snapshot (5 bullets)
## Risks (3 bullets)
## Decisions / Asks (3 bullets)
## NOT IN SOURCE (list anything you refused to invent)

Rules: no invented KPIs; calm executive tone; max ~180 words in the three sections combined."""

r = client.chat.completions.create(
    model=GROQ_MODEL,
    temperature=0.2,
    messages=[
        {"role": "system", "content": "Faithful executive writer. Never invent metrics."},
        {"role": "user", "content": prompt},
    ],
)
print("=== CEO ONE-PAGER ===")
print(r.choices[0].message.content.strip())
print("\\n>>> Paste one-pager into Google Doc Day 4")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 9 checklist",
        setupSteps: [
          {
            title: "Downloaded FY highlights extract",
            link: { label: "Download FY highlights", url: FB.fy },
          },
          { title: "Generated CEO one-pager from source only" },
          {
            title: "Pasted one-pager into Google Doc Day 4",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Structured summaries beat free-form essays for executive use.",
      "Separate Snapshot, Risks, and Asks; keep metrics inside the source.",
      "Call out what was NOT IN SOURCE instead of inventing gaps.",
    ],
  },

  "mba-d4-t10": {
    topicId: "mba-d4-t10",
    intro:
      "Capstone: FreshBasket Intelligence Desk — RAG over company extracts, grounded Q&A on one real PDF, a short CSV insight memo, and an explicit NOT IN DOCUMENT refusal when sources are silent. Submit a full evidence pack.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives / deliverables",
      },
      {
        type: "paragraph",
        content:
          "Ship a complete desk that combines text RAG, PDF grounding, and KPI narration. Your Google Doc pack must include RETRIEVED panels, answers (including a trap question that refuses), a PDF answer, and a CSV insight memo with a printed KPI board.",
      },
      {
        type: "heading",
        content: "2) What you must ship",
      },
      {
        type: "list",
        items: [
          "FAISS (or TF-IDF) RAG over FreshBasket HR + promo + overview (+ FY)",
          "At least one grounded question on the ITC or HUL Quarterly PDF",
          "One pandas KPI → Groq insight brief from the Financial Sample CSV",
          "Google Doc pack: RETRIEVED panels + answers + insight memo",
          "Trap question that correctly returns NOT IN DOCUMENT",
        ],
      },
      {
        type: "heading",
        content: "3) Why this wraps the day",
      },
      {
        type: "paragraph",
        content:
          "The capstone combines Day 1–2 data habits, Day 3 LLM fluency, and Day 4 grounding. Documents and numbers both need evidence trails: retrieved passages for text, printed KPI boards for figures, and refusal when neither supports the claim.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Build one FAISS index for FreshBasket texts with source metadata.",
          "Run leave and promo questions; print RETRIEVED then ANSWER.",
          "Ask a trap question (for example, a fictional moon-base staffing policy) and confirm NOT IN DOCUMENT.",
          "Upload ITC (or HUL Quarterly); build a PDF FAISS index; ask one ethics/results question.",
          "Upload the Financial Sample CSV; print KPI board; generate a short insight memo from KPIs only.",
          "Paste the full evidence pack under Google Doc Day 4 Capstone.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Leave and promo questions should retrieve from hr and promo sources respectively. The trap question should not invent a policy. The PDF cell should cite page or source_file. The memo should not invent spreadsheet totals. Reviewers grade the pack as a whole: missing refusal or missing KPI board is incomplete work.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Skipping the trap question (refusal is part of the requirement).",
          "Insight memo without a printed KPI board.",
          "PDF answer without a RETRIEVED panel.",
          "Submitting only narrative slides with no Colab evidence.",
        ],
      },
      {
        type: "heading",
        content: "Downloads for this topic (full pack)",
      },
      {
        type: "paragraph",
        content:
          "Download every file below before starting the capstone cells. Upload texts/PDFs/CSV into Colab as directed.",
      },
      {
        type: "list",
        items: [
          `FreshBasket HR policy: ${FB.hr}`,
          `FreshBasket promo governance: ${FB.promo}`,
          `FreshBasket company overview: ${FB.overview}`,
          `FreshBasket FY highlights: ${FB.fy}`,
          `ITC Supplier Code PDF: ${DOC_PDF.itc}`,
          `HUL Quarterly PDF (optional alternate): ${DOC_PDF.hulQ}`,
          `Financial Sample CSV slice: ${CSV.fin}`,
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | Keys: ${GROQ_KEYS} | Capstone paste goes under Google Doc Day 4 Capstone.`,
      },
      {
        type: "heading",
        content: "7) Hands-on exercise — Intelligence Desk pack",
      },
      {
        type: "paragraph",
        content:
          "Run all five cells. Confirm leave, promo, trap refusal, PDF grounding, and CSV memo. Paste the full pack into your lab notes.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL_RAG,
        notebookCells: [
          {
            label: "Cell 1 — Install + key",
            code: `${INSTALL_RAG}\n\n${KEY_BOOT}\n\nfrom groq import Groq\nclient = Groq(api_key=os.environ["GROQ_API_KEY"])\nprint("Capstone boot OK")`,
          },
          {
            label: "Cell 2 — FreshBasket FAISS desk",
            code: `from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS

hr = """PASTE HR"""
promo = """PASTE promo"""
overview = """PASTE overview"""
fy = """PASTE FY"""

splitter = RecursiveCharacterTextSplitter(chunk_size=400, chunk_overlap=60)
texts, metas = [], []
for src, raw in [("hr", hr), ("promo", promo), ("overview", overview), ("fy", fy)]:
    raw = raw.strip()
    assert len(raw) > 40, src
    for c in splitter.split_text(raw):
        texts.append(c)
        metas.append({"source": src})

embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
fb_db = FAISS.from_texts(texts, embeddings, metadatas=metas)
print("FreshBasket index chunks:", len(texts))`,
          },
          {
            label: "Cell 3 — Desk Q&A helper (inline calls)",
            code: `def desk_ask(db, question, k=3):
    hits = db.similarity_search(question, k=k)
    print("=== RETRIEVED ===")
    parts = []
    for d in hits:
        src = d.metadata.get("source") or d.metadata.get("source_file") or d.metadata.get("page")
        print(f"[{src}] {d.page_content[:200].replace(chr(10),' ')}...")
        parts.append(f"SOURCE={src}\\n{d.page_content}")
    context = "\\n\\n---\\n\\n".join(parts)
    r = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=0,
        messages=[
            {"role": "system", "content": "Answer ONLY from CONTEXT. Else NOT IN DOCUMENT. Tag sources."},
            {"role": "user", "content": f"CONTEXT:\\n{context}\\n\\nQUESTION:\\n{question}"},
        ],
    )
    print("=== ANSWER ===")
    print(r.choices[0].message.content.strip())

print("=== CAPSTONE — FRESHBASKET DESK ===")
desk_ask(fb_db, "How many casual leave days per FY?")
print()
desk_ask(fb_db, "Who approves discounts above 12%?")
print()
desk_ask(fb_db, "What is our secret moon-base staffing policy?")  # trap`,
          },
          {
            label: "Cell 4 — PDF question (reuse ITC upload)",
            code: `from google.colab import files
from langchain_community.document_loaders import PyPDFLoader

print("Upload ITC PDF (or HUL Quarterly)")
uploaded = files.upload()
pdf_path = list(uploaded.keys())[0]
pages = PyPDFLoader(pdf_path).load()
for p in pages:
    p.metadata["source_file"] = pdf_path
pdf_docs = RecursiveCharacterTextSplitter(chunk_size=800, chunk_overlap=100).split_documents(pages)
pdf_db = FAISS.from_documents(pdf_docs, embeddings)
desk_ask(pdf_db, "State one supplier ethics expectation from the document.")`,
          },
          {
            label: "Cell 5 — CSV insight memo",
            code: `import pandas as pd
from google.colab import files
print("Upload financial-sample-prompt-slice.csv")
up = files.upload()
df = pd.read_csv(list(up.keys())[0])
sales_col = next((c for c in df.columns if c.lower() in {"sales", "gross sales", "revenue"}), None)
seg_col = next((c for c in df.columns if c.lower() in {"segment", "country", "product"}), df.columns[0])
kpi = [f"rows={len(df)}"]
if sales_col:
    kpi.append(f"total_{sales_col}={df[sales_col].sum():,.2f}")
    top = df.groupby(seg_col)[sales_col].sum().sort_values(ascending=False).head(5)
    kpi.append(top.to_string())
kpi_text = "\\n".join(kpi)
print("=== KPI BOARD ===\\n", kpi_text)
r = client.chat.completions.create(
    model=GROQ_MODEL,
    temperature=0.2,
    messages=[
        {"role": "system", "content": "Use ONLY KPI block numbers."},
        {"role": "user", "content": f"KPI BLOCK:\\n{kpi_text}\\n\\nWrite a 120-word insight memo: 3 insights, 2 risks, 1 next analysis."},
    ],
)
print("=== INSIGHT MEMO ===")
print(r.choices[0].message.content.strip())
print("\\n>>> Paste FULL capstone pack (RAG + trap + PDF + memo) into Google Doc Day 4 Capstone")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Capstone checklist",
        setupSteps: [
          { title: "FreshBasket FAISS desk answered leave + promo" },
          { title: "Trap question returned NOT IN DOCUMENT" },
          { title: "PDF grounded answer completed" },
          { title: "CSV KPI board + insight memo completed" },
          {
            title: "Pasted full evidence pack into Google Doc Day 4 Capstone",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Capstone = FreshBasket RAG desk + PDF grounding + data insight memo.",
      "Refusal when sources are silent is a required behaviour, not an error.",
      "Evidence packs (RETRIEVED panels + KPI boards) support review better than unsupported claims.",
    ],
  },
};
