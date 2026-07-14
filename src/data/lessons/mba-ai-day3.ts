import type { TopicLesson } from "@/lib/types";

const CHAT_URL = "https://chatgpt.com/";

/** Small FreshBasket training extracts (Topic 1) */
const FB = {
  overview: "/datasets/mba/day3-freshbasket-company-overview.txt",
  hr: "/datasets/mba/day3-freshbasket-hr-policy.txt",
  promo: "/datasets/mba/day3-freshbasket-promo-governance.txt",
  fy: "/datasets/mba/day3-freshbasket-fy-highlights.txt",
} as const;

/** Real public PDFs — introduced gradually from Topic 2 onward */
const DOC = {
  itcCoc:
    "/datasets/mba/real/" +
    encodeURIComponent(
      "ITC code-of-conduct-for-suppliers-and-service-providers (4 Pages).pdf",
    ),
  hulQ:
    "/datasets/mba/real/" +
    encodeURIComponent("HUL March 2026 Quarterly Results (47 Pages).pdf"),
  dmartAR:
    "/datasets/mba/real/" +
    encodeURIComponent("Dmart Annual Report 2024-25 (272 Pages).pdf"),
  hulAR:
    "/datasets/mba/real/" +
    encodeURIComponent(
      "Hindustan Unilever Limited annual report 2025-26 (486 Pages).pdf",
    ),
} as const;

/**
 * Day 3 — Enterprise Knowledge Intelligence (RAG)
 * Document ladder: small FreshBasket texts → mid-size public PDFs → large annual reports.
 */
export const mbaAiDay3Lessons: Record<string, TopicLesson> = {
  "mba-d3-t1": {
    topicId: "mba-d3-t1",
    intro:
      "Day 3 starts with a simple idea: a public chat tool does not know FreshBasket’s policies. You feel that gap first with short company extracts, then ground answers in those files.",
    blocks: [
      {
        type: "heading",
        content: "1) The everyday business problem",
      },
      {
        type: "paragraph",
        content:
          "Managers ask: “How many casual leave days?” “Who approves a 10% promo?” “How many stores do we run?” Those answers live in approved company documents — not in a chat tool’s memory.",
      },
      {
        type: "visual",
        diagram: {
          title: "Two different answer paths",
          variant: "compare",
          nodes: [
            {
              id: "public",
              label: "Chat tool with no file",
              sublabel: "May sound confident · often invents company-specific facts",
            },
            {
              id: "grounded",
              label: "Chat tool + your document",
              sublabel: "Read the extract · answer from it · say when silent",
            },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Classroom test: Can a public chat tool recite FreshBasket’s Sunday overtime rule alone? No — unless you upload the HR extract and demand grounding.",
      },
      {
        type: "heading",
        content: "2) What counts as enterprise knowledge",
      },
      {
        type: "visual",
        diagram: {
          title: "Knowledge map (examples)",
          variant: "stack",
          nodes: [
            {
              id: "pol",
              label: "Policies & SOPs",
              sublabel: "HR rules, promo governance, leave approvals",
            },
            {
              id: "corp",
              label: "Company overview packs",
              sublabel: "Who we are, formats, categories, strategy notes",
            },
            {
              id: "fin",
              label: "Results & highlights",
              sublabel: "FY notes, quarterly packs (larger PDFs come later today)",
            },
            {
              id: "ext",
              label: "External filings / codes",
              sublabel: "Supplier codes, annual reports — Topics 2–3",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "3) Document-grounded answering (simple RAG)",
      },
      {
        type: "paragraph",
        content:
          "Industry name: RAG — Retrieval-Augmented Generation. For now, only this pipeline matters:",
      },
      {
        type: "visual",
        diagram: {
          title: "Retrieve → Read → Answer",
          variant: "stack",
          nodes: [
            {
              id: "r1",
              label: "Step 1 — Retrieve",
              sublabel: "Open / upload the right company file",
            },
            {
              id: "r2",
              label: "Step 2 — Read useful parts",
              sublabel: "Find the section that actually answers",
            },
            {
              id: "r3",
              label: "Step 3 — Answer from passages",
              sublabel: "Quote or paraphrase · if missing: Not stated in the document",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "4) Documents for this topic (small extracts only)",
      },
      {
        type: "list",
        items: [
          "FreshBasket Company Overview — who we are, stores, categories",
          "FreshBasket HR Policy extract — leave, hours, Sunday OT",
          "FreshBasket Promo Governance — approval ladder for price cuts",
          "FreshBasket FY Highlights — short performance note",
        ],
      },
      {
        type: "tip",
        content:
          "Keep it light here. Longer public PDFs (ITC, HUL, DMart) arrive in Topics 2 and 3 once grounding habits are solid.",
      },
      {
        type: "heading",
        content: "5) Live practice — guessing vs grounding",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download Company Overview",
            description: "Short training extract — company identity.",
            link: {
              label: "FreshBasket Company Overview (.txt)",
              url: FB.overview,
            },
          },
          {
            title: "Download HR Policy extract",
            description: "Leave, hours, Sunday OT rules.",
            link: {
              label: "FreshBasket HR Policy (.txt)",
              url: FB.hr,
            },
          },
          {
            title: "Download Promo Governance",
            description: "Who approves which discount depth.",
            link: {
              label: "FreshBasket Promo Governance (.txt)",
              url: FB.promo,
            },
          },
          {
            title: "Download FY Highlights",
            description: "Short performance note for finance-style asks.",
            link: {
              label: "FreshBasket FY Highlights (.txt)",
              url: FB.fy,
            },
          },
          {
            title: "Lab A — Blind guess (no file)",
            description: "Fresh chat. No upload. Feel confident invention.",
            link: { label: "Open chat tool", url: CHAT_URL },
            commands: [
              "Answer without any uploaded file:",
              "1) How many casual leave days does FreshBasket give each year?",
              "2) Who approves a temporary 10% price cut?",
              "3) How many stores does FreshBasket operate?",
              "If unsure, invent plausible retail answers confidently.",
            ],
            note: "You should get smooth guesses — that is the failure mode we fix next.",
          },
          {
            title: "Lab B — HR desk (upload HR extract)",
            description: "Ground every answer in the HR file only.",
            commands: [
              "You are FreshBasket’s HR knowledge desk.",
              "I uploaded the FreshBasket HR Policy extract.",
              "Rules: answer ONLY from this file; quote a short line; if missing say Not stated in the document.",
              "1) How many CL / SL / EL days?",
              "2) Who approves store leave over 3 days?",
              "3) What is the Sunday overtime rule?",
              "4) Build an 8-line FAQ for new store managers using only file facts.",
            ],
          },
          {
            title: "Lab C — Promo desk (upload promo brief)",
            description: "Approval ladder and hard stops from the file.",
            commands: [
              "New chat. Upload the FreshBasket Promo Governance brief.",
              "You are the Category Ops desk. ONLY this file.",
              "Produce:",
              "A) Approval ladder table: Depth band | Approver",
              "B) 5 hard stops / red flags from the brief",
              "C) Answer: Can a cashier alone launch a 15% weekend cut? (quote evidence)",
              "D) 3 Not stated in the document gaps a manager might still need from Finance",
            ],
          },
          {
            title: "Lab D — Overview + FY quick pack",
            description: "Two short extracts — still no large public PDFs.",
            commands: [
              "Upload Company Overview + FY Highlights.",
              "Write a 120-word manager brief:",
              "- Who FreshBasket is (from Overview)",
              "- What the FY note stresses (from Highlights)",
              "- Tag every fact with (Overview) or (FY)",
              "- End with 3 questions these short files still do not answer",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "Company-specific answers need company documents.",
      "RAG in plain English: retrieve the file → find passages → answer from them.",
      "Prefer Not stated in the document over confident invention.",
      "Start with short extracts; larger published PDFs come in later topics.",
    ],
  },

  "mba-d3-t2": {
    topicId: "mba-d3-t2",
    intro:
      "Now step up from FreshBasket training extracts to real published PDFs — still manageable size: ITC’s 4-page supplier code and HUL’s 47-page quarterly results pack.",
    blocks: [
      {
        type: "heading",
        content: "1) Document session workflow",
      },
      {
        type: "visual",
        diagram: {
          title: "Upload → Ask → Ground → Pack",
          variant: "stack",
          nodes: [
            {
              id: "u",
              label: "1 · Upload the approved PDF",
              sublabel: "Supplier code · quarterly results",
            },
            {
              id: "q",
              label: "2 · Ask business questions",
              sublabel: "Obligations, metrics, risks — not “be creative”",
            },
            {
              id: "g",
              label: "3 · Ground every answer",
              sublabel: "Quote / page · or Not stated in the document",
            },
            {
              id: "p",
              label: "4 · Manager pack",
              sublabel: "Summary · findings · risks · labelled recommendations",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "2) Which file for which job (this topic)",
      },
      {
        type: "list",
        items: [
          "ITC Supplier Code (4 pages) → vendor onboarding / compliance FAQ desk",
          "HUL Quarterly Results (47 pages) → near-term performance & commentary desk",
          "Large annual reports (272 / 486 pages) wait until Topic 3",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "Question quality",
          variant: "compare",
          nodes: [
            {
              id: "weak",
              label: "Weak",
              sublabel: "“Summarise the whole quarterly pack creatively”",
            },
            {
              id: "strong",
              label: "Strong",
              sublabel: "“List 8 management emphases with page/section anchors”",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "3) Live labs — mid-size public PDFs",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download ITC Supplier Code",
            description: "4 pages — full-read compliance desk.",
            link: {
              label: "ITC Supplier Code (4 pages)",
              url: DOC.itcCoc,
            },
          },
          {
            title: "Download HUL Quarterly Results",
            description: "47 pages — IR / performance desk.",
            link: {
              label: "HUL March 2026 Quarterly (47 pages)",
              url: DOC.hulQ,
            },
          },
          {
            title: "Lab A — Compliance desk (ITC)",
            description: "Vendor-manager FAQ from the code only.",
            link: { label: "Open chat tool", url: CHAT_URL },
            commands: [
              "Upload ITC code-of-conduct-for-suppliers-and-service-providers.pdf.",
              "You are a Vendor Compliance desk using ITC’s published supplier code as the reference standard.",
              "Rules: ONLY this PDF; quote lines; Not stated in the document if missing.",
              "Deliver:",
              "1) Executive Summary (80 words)",
              "2) Key Findings (8 bullets)",
              "3) Table: Vendor question | Answer from PDF | Quote",
              "4) Hard stops — behaviours that must trigger escalation",
              "5) Recommendations for FreshBasket vendor onboarding (label Judgment vs File-supported)",
            ],
          },
          {
            title: "Lab B — Quarterly IR desk (HUL Q)",
            description: "Analyst pack from the 47-page results PDF.",
            commands: [
              "New chat. Upload HUL March 2026 Quarterly Results.pdf.",
              "Produce a Document Intelligence Pack:",
              "A) Executive Summary (≤120 words)",
              "B) Key Findings (10 bullets — facts only)",
              "C) Risks / watchouts table: Item | Evidence from PDF | Owner function (Finance/Category/Ops/Brand)",
              "D) Recommendations (5) with File-supported vs Judgment labels",
              "E) Trap test: rewrite this bad claim using the PDF: “HUL guaranteed double revenue next quarter with no risks.”",
            ],
          },
          {
            title: "Lab C — Speed tickets (right file)",
            description: "Urgent tickets — pick ITC or HUL Q; refuse if wrong file.",
            commands: [
              "You may upload ITC Supplier Code + HUL Quarterly.",
              "Reply to each ticket in ≤6 lines, name which PDF you used:",
              "Ticket 1: “Can a supplier ignore integrity rules if volumes are huge?” (ITC)",
              "Ticket 2: “What narrative priorities did HUL stress this quarter?” (HUL Q)",
              "Ticket 3: “Does the ITC supplier code state FreshBasket Sunday OT payroll?” (refuse — wrong document)",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "Match the PDF to the job: code → compliance; quarterly → IR.",
      "Manager packs separate findings from judgment.",
      "Wrong-document questions must be refused cleanly.",
      "47 pages is still workable end-to-end; 270+ page annuals need a different tactic next.",
    ],
  },

  "mba-d3-t3": {
    topicId: "mba-d3-t3",
    intro:
      "Now the large filings: DMart’s 272-page annual report, with HUL’s 486-page annual as an optional stretch. Multi-document work means source tags — and never blending a supplier code into a retail expansion number.",
    blocks: [
      {
        type: "heading",
        content: "1) Why multi-document (and large-PDF) work is harder",
      },
      {
        type: "visual",
        diagram: {
          title: "Short extract vs annual report",
          variant: "compare",
          nodes: [
            {
              id: "small",
              label: "Short file (Topics 1–2)",
              sublabel: "Often readable end-to-end in one lab",
            },
            {
              id: "large",
              label: "Annual report (this topic)",
              sublabel: "Section map first · then anchored questions",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Never ask a 272-page PDF for one creative essay covering every page.",
          "Map sections / contents, then drill named chapters (risks, model, financials).",
          "If you also keep Topic 2 PDFs open, tag every fact: (DMart AR) / (HUL Q) / (ITC Code).",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "Safe multi-doc answer",
          variant: "stack",
          nodes: [
            { id: "q", label: "Question", sublabel: "What should retail leadership watch?" },
            { id: "e", label: "Evidence per PDF", sublabel: "Short tagged bullets" },
            { id: "s", label: "Synthesis", sublabel: "Supported story + unknowns" },
            { id: "a", label: "Actions", sublabel: "Owners · NOT-YET · extra file needed" },
          ],
        },
      },
      {
        type: "heading",
        content: "2) Documents for this topic",
      },
      {
        type: "list",
        items: [
          "Primary: DMart Annual Report 2024–25 (272 pages)",
          "Optional stretch: HUL Annual Report 2025–26 (486 pages)",
          "Reusable from Topic 2 if your session allows: HUL Quarterly + ITC Code (for tagged synthesis only)",
        ],
      },
      {
        type: "heading",
        content: "3) Live labs — large PDF + multi-source synthesis",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download DMart Annual Report",
            description: "272 pages — section-anchored retail pack.",
            link: {
              label: "DMart AR 2024-25 (272 pages)",
              url: DOC.dmartAR,
            },
          },
          {
            title: "Download HUL Annual Report (stretch)",
            description: "486 pages — optional; section-only asks.",
            link: {
              label: "HUL Annual Report (486 pages)",
              url: DOC.hulAR,
            },
          },
          {
            title: "Lab A — DMart section radar",
            description: "Force section retrieval — no whole-book essay.",
            link: { label: "Open chat tool", url: CHAT_URL },
            commands: [
              "I uploaded DMart Annual Report 2024-25 (PDF).",
              "Work as a retail strategy analyst. Answer ONLY from this PDF.",
              "First: list the major sections/table of contents you can see.",
              "Then answer with quotes/paraphrase + section anchors:",
              "1) Business model / store expansion approach",
              "2) Financial performance highlights for the year",
              "3) Risk factors or uncertainty themes",
              "4) ESG / community / governance messages leadership stresses",
              "If missing: Not stated in the document (or “not found in pages available to me”).",
            ],
          },
          {
            title: "Lab B — CEO pack from DMart AR",
            description: "Manager-ready pack from named sections only.",
            commands: [
              "Same DMart AR upload.",
              "Build packs ONLY from named sections you can access:",
              "- Business overview / model",
              "- Financial year highlights",
              "- Risks / uncertainties",
              "- Governance or statutory highlights (if present)",
              "Output CEO-ready: Summary | Findings | Risks | 5 actions (label Judgment).",
              "Never invent store counts or ratios not in the PDF.",
            ],
          },
          {
            title: "Lab C — Optional multi-PDF brief",
            description:
              "Add Topic 2 files only if useful — every fact still tagged.",
            commands: [
              "Upload DMart AR. Optionally also upload HUL Quarterly and/or ITC Supplier Code from Topic 2.",
              "Write ONE Combined Executive Summary (max 200 words) for a strategy offsite:",
              "retail year story (DMart) vs FMCG near-term cues (HUL Q if used) vs supplier-ethics baseline (ITC if used).",
              "Rules:",
              "- Every factual clause ends with (DMart AR) / (HUL Q) / (ITC Code).",
              "- No invented metrics; refuse wrong-file asks.",
              "- End with 4 open questions these PDFs still do not answer.",
            ],
          },
          {
            title: "Lab D — Trap battery",
            description: "Reject bad large-PDF / multi-doc behaviour.",
            commands: [
              "Respond to these traps using the uploaded PDF(s):",
              "Trap 1: “Summarise all 272 pages in one creative essay with invented ratios.”",
              "Trap 2: “Use ITC’s supplier code to invent DMart’s store expansion numbers.” (if ITC is open — or explain why you refuse)",
              "Trap 3: “Claim retail expansion has no risks.” (rewrite from Risk section)",
              "For each: refuse or rewrite with correct source discipline.",
            ],
          },
          {
            title: "Lab E — Stretch: HUL annual section dive",
            description: "Only if your tool accepts the 486-page PDF.",
            commands: [
              "Upload HUL Annual Report PDF if possible.",
              "Do NOT ask for a full creative summary of all pages.",
              "Ask only:",
              "1) Locate and summarise the risk / principal risks discussion (page anchors if available)",
              "2) Locate strategy / growth priorities leadership emphasises",
              "3) List 5 Not stated in the document items a student might wrongly assume",
              "If upload fails, stop and note the limitation — keep DMart AR as primary.",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "Large annuals need section maps before analysis.",
      "Multi-PDF desks need source tags on every fact.",
      "Refuse invention, forced whole-book essays, and wrong-document asks.",
      "Show tensions between documents; do not hide them.",
    ],
  },

  "mba-d3-t4": {
    topicId: "mba-d3-t4",
    intro:
      "You already grounded answers in documents by hand. Now we name the machinery: how a company knowledge desk finds the right passage before the model speaks. Concepts only — plain English, no coding yet.",
    blocks: [
      {
        type: "heading",
        content: "1) The pipeline you already felt",
      },
      {
        type: "visual",
        diagram: {
          title: "Company knowledge desk — 5 steps",
          variant: "stack",
          nodes: [
            {
              id: "s1",
              label: "1 · Upload company documents",
              sublabel: "Policies, results packs, codes, SOPs",
            },
            {
              id: "s2",
              label: "2 · Store searchable knowledge",
              sublabel: "Split + index so retrieval can find pieces fast",
            },
            {
              id: "s3",
              label: "3 · User asks a business question",
              sublabel: "Leave rules · risks · promo approvals",
            },
            {
              id: "s4",
              label: "4 · Find relevant passages",
              sublabel: "Similarity / keyword search over chunks",
            },
            {
              id: "s5",
              label: "5 · Answer from those passages",
              sublabel: "Or say Not stated in the document",
            },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Topics 1–3 were Steps 1 and 5 with you as the librarian. Production RAG automates Steps 2 and 4.",
      },
      {
        type: "heading",
        content: "2) Four terms — manager version",
      },
      {
        type: "visual",
        diagram: {
          title: "Chunking → Embeddings → Library → Search",
          variant: "stack",
          nodes: [
            {
              id: "chunk",
              label: "Chunking",
              sublabel: "Split a long PDF into short, usable sections (paragraphs / pages)",
            },
            {
              id: "emb",
              label: "Embeddings",
              sublabel: "Turn each chunk’s meaning into a searchable fingerprint",
            },
            {
              id: "vdb",
              label: "Vector database",
              sublabel: "A smart library of those fingerprints (e.g. FAISS, Chroma)",
            },
            {
              id: "sim",
              label: "Similarity search",
              sublabel: "Given a question, pull the closest chunks — not the whole file",
            },
          ],
        },
      },
      {
        type: "paragraph",
        content:
          "You do not need the maths. Remember the job: large company files become small findable pieces; the desk pulls the few pieces that matter; the model answers from those only.",
      },
      {
        type: "heading",
        content: "3) Why chunking exists (MBA intuition)",
      },
      {
        type: "list",
        items: [
          "A 272-page annual report is too big to shove into every answer.",
          "Managers ask narrow questions (“Sunday OT rule”) — those live in one section.",
          "Bad chunking = wrong section retrieved = confident wrong answer with a fake quote.",
          "Good grounding habit still applies: if the retrieved chunk is silent, say Not stated.",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "Without retrieval vs with retrieval",
          variant: "compare",
          nodes: [
            {
              id: "bad",
              label: "Guess from memory",
              sublabel: "Sounds fluent · may invent policy numbers",
            },
            {
              id: "good",
              label: "Retrieve then answer",
              sublabel: "Fluent + tied to approved passages",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "4) Names you will hear in vendor decks",
      },
      {
        type: "list",
        items: [
          "LangChain / LlamaIndex — glue that connects models to document loaders and retrievers",
          "FAISS / ChromaDB — common libraries that hold and search embeddings",
          "You already practised the business behaviour; these are plumbing labels",
        ],
      },
      {
        type: "tip",
        content:
          "Syllabus rule for this topic: conceptual only. Topic 5 puts a tiny version of retrieve → answer into Colab with FreshBasket short texts.",
      },
      {
        type: "heading",
        content: "5) Live practice — teach the stack",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Explain RAG to a CFO (no code)",
            description: "Plain-language briefing — prove you own the pipeline.",
            link: { label: "Open chat tool", url: CHAT_URL },
            commands: [
              "You are briefing a CFO who hates jargon.",
              "Explain in ≤180 words how a company knowledge assistant answers “What is our Sunday OT rule?” using: upload → chunk → search → answer.",
              "Use a supermarket (FreshBasket) example.",
              "Forbid: fake vector maths, fake vendor product pitches, inventing leave days.",
              "End with one sentence on when the desk must say Not stated in the document.",
            ],
          },
          {
            title: "Lab B — Spot the failure mode",
            description: "Diagnose bad RAG behaviour in business language.",
            commands: [
              "Diagnose each failure in 4 lines (cause → fix):",
              "1) Desk answers leave policy from general internet HR blogs.",
              "2) Desk quotes a risk section when asked about casual leave days.",
              "3) Desk invents a precise CAGR not in the annual report.",
              "4) Desk merges two companies’ PDFs into one fake narrative.",
              "For each, name which pipeline step broke (upload / chunk-retrieve / ground-answer).",
            ],
          },
          {
            title: "Lab C — Architecture one-pager",
            description: "Draw the stack in text for a vendor review.",
            commands: [
              "Create a text architecture one-pager for FreshBasket Knowledge Desk v1:",
              "Boxes: Documents | Chunker | Search library | LLM answer | Human audit",
              "For each box: one job sentence + one risk if that box fails.",
              "Audience: CIO + CHRO. No code. No tool lock-in claims.",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "RAG = retrieve useful company passages, then answer from them.",
      "Chunking makes large filings searchable section-by-section.",
      "Embeddings + vector libraries are the “smart filing cabinet” — concept is enough for now.",
      "Grounding rules still beat fancy plumbing.",
    ],
  },

  "mba-d3-t5": {
    topicId: "mba-d3-t5",
    intro:
      "Put the pipeline into a Colab notebook. You will load short FreshBasket extracts, split them into chunks, retrieve by simple keyword scoring, and build a grounded prompt — no huge PDFs and no mandatory API key.",
    blocks: [
      {
        type: "heading",
        content: "1) What you will build",
      },
      {
        type: "visual",
        diagram: {
          title: "Mini knowledge desk (notebook)",
          variant: "stack",
          nodes: [
            {
              id: "load",
              label: "Load short company texts",
              sublabel: "HR · Promo · Overview (already downloaded in Topic 1)",
            },
            {
              id: "chunk",
              label: "Chunk into small pieces",
              sublabel: "Simulates splitting a longer policy pack",
            },
            {
              id: "ret",
              label: "Retrieve top chunks for a question",
              sublabel: "Keyword score — the MBA-friendly stand-in for similarity search",
            },
            {
              id: "ask",
              label: "Build a grounded prompt",
              sublabel: "Paste into ChatGPT — or call an LLM API if you have a key",
            },
          ],
        },
      },
      {
        type: "paragraph",
        content:
          "Right panel = copy-ready Colab cells. Run them in order. Each cell prints a clear check message so you know what worked.",
      },
      {
        type: "list",
        items: [
          "Core path uses only Python — no pip install required",
          "Documents stay short (FreshBasket extracts) so Colab stays classroom-friendly",
          "Large public PDFs stay in Topics 2–3 ChatGPT labs — not this notebook",
        ],
      },
      {
        type: "heading",
        content: "2) Documents + how to run",
      },
      {
        type: "list",
        items: [
          "FreshBasket HR Policy, Promo Governance, Company Overview (Topic 1 downloads — optional upload to Colab Files)",
          "The notebook also embeds short sample text so you can run without uploads",
          "Open a blank Colab → copy cells from the right panel in order → after Cell 4, paste the grounded prompt into ChatGPT",
        ],
      },
      {
        type: "tip",
        content:
          "Downloads: /datasets/mba/day3-freshbasket-hr-policy.txt · day3-freshbasket-promo-governance.txt · day3-freshbasket-company-overview.txt. Blank Colab: https://colab.research.google.com/#create=true",
      },
      {
        type: "paragraph",
        content:
          "After retrieve works: paste the printed GROUNDED PROMPT into ChatGPT, confirm quotes stay inside retrieved chunks, then ask the trap “How many DMart stores does FreshBasket operate?” — the desk must refuse.",
      },
      {
        type: "jupyter-notebook",
        installCmd:
          "# Core path: no pip install needed.\nprint('Ready — run the code cells in order.')",
        notebookCells: [
          {
            label: "Cell 1 — Document store (short extracts)",
            code: `documents = {
  "hr_policy": """
FreshBasket HR Policy Extract.
Casual Leave (CL): 8 days per calendar year.
Sick Leave (SL): 10 days per calendar year (medical note after 2 consecutive days).
Earned Leave (EL): 15 days after 12 months continuous service.
Sunday overtime: Store Manager written approval in the roster system BEFORE the shift starts.
Unauthorised overtime will not be compensated.
Store leave > 3 days needs Area Manager approval.
""",
  "promo_governance": """
FreshBasket Promo Governance.
Temporary price cut max 14 days unless Category Head extends.
Depth 0-5% off list: Category Manager.
Depth 6-12% off list: Category Head.
Depth >12% or private-label launch promo: Category Head + Finance Partner.
Flash below-cost promises need Finance + Category dual sign-off.
Cashiers cannot approve new promos alone.
""",
  "company_overview": """
FreshBasket Company Overview.
Multi-store grocery retailer founded 2014, HQ Mumbai.
Store count (FY2025/26 operating view): 48 stores.
Formats: Supermarket and Express.
Categories: Dairy, Fresh Produce, Grocery staples, Beverages, Personal Care.
Private-label pilot: FreshBasket Farm Dairy Milk 1L (West and South clusters).
""",
}

print(f"Loaded {len(documents)} source documents:")
for name in documents:
    print(" -", name)`,
          },
          {
            label: "Cell 2 — Chunking (split long text)",
            code: `def chunk_text(text: str, chunk_size: int = 180) -> list[str]:
    """Split text into overlapping-ish pieces by character length (simple classroom chunker)."""
    text = " ".join(text.split())
    chunks = []
    start = 0
    while start < len(text):
        end = min(start + chunk_size, len(text))
        chunks.append(text[start:end])
        start = end
    return [c for c in chunks if c.strip()]

chunks = []
for source, text in documents.items():
    for i, piece in enumerate(chunk_text(text)):
        chunks.append({"source": source, "id": f"{source}#{i+1}", "text": piece})

print(f"Created {len(chunks)} chunks from {len(documents)} documents")
print("Sample chunk:", chunks[0]["id"], "→", chunks[0]["text"][:90], "...")`,
          },
          {
            label: "Cell 3 — Keyword retrieve (stand-in for similarity search)",
            code: `def retrieve(question: str, top_k: int = 3) -> list[dict]:
    words = [w for w in question.lower().split() if len(w) > 2]
    scored = []
    for ch in chunks:
        hay = ch["text"].lower()
        score = sum(1 for w in words if w in hay)
        if score > 0:
            scored.append((score, ch))
    scored.sort(key=lambda x: x[0], reverse=True)
    return [ch for score, ch in scored[:top_k]]

question = "Who approves Sunday overtime at FreshBasket?"
hits = retrieve(question)
print("Question:", question)
print(f"Retrieved {len(hits)} chunks:")
for h in hits:
    print(f"[{h['id']}] (source={h['source']})")
    print(" ", h["text"][:120], "...")`,
          },
          {
            label: "Cell 4 — Build grounded prompt for ChatGPT",
            code: `def build_grounded_prompt(question: str) -> str:
    hits = retrieve(question, top_k=3)
    if not hits:
        return (
            "No relevant company chunks found.\\n"
            "Reply exactly: Not stated in the document"
        )
    context = "\\n\\n".join(
        f"SOURCE {h['id']} ({h['source']}):\\n{h['text']}" for h in hits
    )
    return f"""You are FreshBasket's knowledge desk.
Answer ONLY using the SOURCES below.
If missing, say: Not stated in the document.
Quote a short line and name the SOURCE id.

SOURCES:
{context}

QUESTION: {question}
"""

prompt = build_grounded_prompt(question)
print("===== GROUNDED PROMPT (copy into ChatGPT) =====")
print(prompt)`,
          },
          {
            label: "Cell 5 — Try three manager questions",
            code: `test_questions = [
    "How many casual leave days does FreshBasket give?",
    "Who approves a 10% temporary price cut?",
    "How many stores does FreshBasket operate?",
]

for q in test_questions:
    print("\\n" + "=" * 60)
    print(build_grounded_prompt(q))`,
          },
          {
            label: "Cell 6 — Trap test (wrong company / missing fact)",
            code: `traps = [
    "What is DMart's exact FY revenue in FreshBasket HR policy?",
    "List HUL quarterly headline numbers from the promo governance brief.",
]

for q in traps:
    hits = retrieve(q, top_k=2)
    print("\\nTRAP:", q)
    print("Hits:", len(hits))
    print(build_grounded_prompt(q)[:400], "...")
    print("→ Expected behaviour in ChatGPT: Not stated in the document / refuse wrong file.")`,
          },
        ],
      },
      {
        type: "heading",
        content: "3) What this notebook proves",
      },
      {
        type: "list",
        items: [
          "Chunking turns long notes into findable pieces",
          "Retrieval selects passages before the model speaks",
          "A grounded prompt forces Not stated when the library is silent",
          "Production systems replace keyword scoring with embeddings + a vector library — same job",
        ],
      },
    ],
    keyTakeaways: [
      "A mini RAG desk = load → chunk → retrieve → grounded prompt.",
      "Keyword retrieve teaches the idea; vectors are an upgrade, not a different goal.",
      "Short FreshBasket texts keep Colab practical for classroom time.",
      "Always test traps: wrong company, missing facts, invented numbers.",
    ],
  },

  "mba-d3-t6": {
    topicId: "mba-d3-t6",
    intro:
      "Capstone: build a real RAG knowledge desk in Colab over all four Day-3 PDFs — ITC Supplier Code, HUL Quarterly, DMart Annual Report, and HUL Annual Report — with Python retrieval and Groq for grounded answers.",
    blocks: [
      {
        type: "heading",
        content: "1) Consulting brief",
      },
      {
        type: "paragraph",
        content:
          "FreshBasket hired your team to ship Knowledge Desk v1: a RAG system that answers leadership questions only from approved public filings (retail peer annual report, FMCG quarterly + annual, supplier code). This topic is Colab + Python + Groq — not a ChatGPT upload lab.",
      },
      {
        type: "visual",
        diagram: {
          title: "Capstone RAG architecture",
          variant: "stack",
          nodes: [
            {
              id: "pdfs",
              label: "1 · Load all 4 PDFs",
              sublabel: "ITC · HUL Q · DMart AR · HUL AR",
            },
            {
              id: "chunk",
              label: "2 · Chunk + index",
              sublabel: "Page-tagged chunks · TF-IDF search library",
            },
            {
              id: "ret",
              label: "3 · Retrieve top passages",
              sublabel: "Similarity search over the chunk library",
            },
            {
              id: "groq",
              label: "4 · Groq grounded answer",
              sublabel: "Answer ONLY from context · else Not stated",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "2) Download all 4 PDFs, then build in Colab",
      },
      {
        type: "list",
        items: [
          "ITC Supplier Code (4 pages)",
          "HUL March 2026 Quarterly Results (47 pages)",
          "DMart Annual Report 2024–25 (272 pages)",
          "HUL Annual Report 2025–26 (486 pages — raise MAX_PAGES / set None for fuller coverage)",
          "Open blank Colab · paste cells from the right panel in order",
          "Create a Groq API key at console.groq.com (never commit the key)",
        ],
      },
      {
        type: "tip",
        content:
          "Direct downloads — ITC: " +
          DOC.itcCoc +
          " · HUL Q: " +
          DOC.hulQ +
          " · DMart: " +
          DOC.dmartAR +
          " · HUL AR: " +
          DOC.hulAR +
          " · Colab: https://colab.research.google.com/#create=true",
      },
      {
        type: "jupyter-notebook",
        installCmd:
          "!pip -q install groq pypdf scikit-learn\nprint('Installed: groq, pypdf, scikit-learn')",
        notebookCells: [
          {
            label: "Cell 1 — Imports + config",
            code: `import os, re
from getpass import getpass

from pypdf import PdfReader
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from groq import Groq

# Classroom speed knobs (set value to None for full PDF)
MAX_PAGES = {
    "ITC_Code": None,       # full 4 pages
    "HUL_Quarterly": None,  # full 47 pages
    "DMart_AR": 80,         # sample of 272 — set None for full
    "HUL_AR": 60,           # sample of 486 — set None for full
}
CHUNK_SIZE = 900
CHUNK_OVERLAP = 120
TOP_K = 5
GROQ_MODEL = "llama-3.1-8b-instant"

EXPECTED = {
    "ITC_Code": "ITC code-of-conduct-for-suppliers-and-service-providers (4 Pages).pdf",
    "HUL_Quarterly": "HUL March 2026 Quarterly Results (47 Pages).pdf",
    "DMart_AR": "Dmart Annual Report 2024-25 (272 Pages).pdf",
    "HUL_AR": "Hindustan Unilever Limited annual report 2025-26 (486 Pages).pdf",
}
print("Config ready. Sources:", list(EXPECTED.keys()))`,
          },
          {
            label: "Cell 2 — Groq API key",
            code: `# Paste your Groq key when prompted (https://console.groq.com)
if not os.environ.get("GROQ_API_KEY"):
    os.environ["GROQ_API_KEY"] = getpass("Enter GROQ_API_KEY: ").strip()

client = Groq(api_key=os.environ["GROQ_API_KEY"])
print("Groq client ready | model:", GROQ_MODEL)`,
          },
          {
            label: "Cell 3 — Upload all 4 PDFs",
            code: `from google.colab import files

print("Upload ALL four PDFs now.")
uploaded = files.upload()
print("Uploaded:", list(uploaded.keys()))

def map_uploads(filenames):
    mapping = {}
    lower = {f: f.lower() for f in filenames}
    rules = [
        ("ITC_Code", ["itc", "supplier", "code-of-conduct", "code of conduct"]),
        ("HUL_Quarterly", ["quarterly", "march 2026", "results"]),
        ("DMart_AR", ["dmart", "d-mart"]),
        ("HUL_AR", ["hindustan", "unilever", "annual report"]),
    ]
    for src, keys in rules:
        for fname, low in lower.items():
            if src == "HUL_AR" and "quarterly" in low:
                continue
            if any(k in low for k in keys):
                mapping[src] = fname
                break
    return mapping

PDF_MAP = map_uploads(list(uploaded.keys()))
missing = [s for s in EXPECTED if s not in PDF_MAP]
print("Mapped:", PDF_MAP)
if missing:
    raise SystemExit(f"Missing sources after upload: {missing}. Re-run and upload all 4 PDFs.")
print("All 4 PDFs mapped.")`,
          },
          {
            label: "Cell 4 — Extract text from every PDF",
            code: `def extract_pdf(path, max_pages=None):
    reader = PdfReader(path)
    n = len(reader.pages)
    limit = n if max_pages is None else min(n, max_pages)
    pages = []
    for i in range(limit):
        raw = reader.pages[i].extract_text() or ""
        clean = re.sub(r"\\s+", " ", raw).strip()
        if clean:
            pages.append({"page": i + 1, "text": clean})
    return pages, n

PAGE_DOCS = {}
for source, fname in PDF_MAP.items():
    pages, total = extract_pdf(fname, MAX_PAGES.get(source))
    PAGE_DOCS[source] = pages
    print(f"{source}: extracted {len(pages)} pages (PDF has {total}) from {fname}")

print("Total page-units:", sum(len(v) for v in PAGE_DOCS.values()))`,
          },
          {
            label: "Cell 5 — Chunk with source + page tags",
            code: `def chunk_page(text, chunk_size=CHUNK_SIZE, overlap=CHUNK_OVERLAP):
    chunks, start = [], 0
    while start < len(text):
        end = min(start + chunk_size, len(text))
        piece = text[start:end].strip()
        if piece:
            chunks.append(piece)
        if end == len(text):
            break
        start = max(0, end - overlap)
    return chunks

CHUNKS = []
for source, pages in PAGE_DOCS.items():
    for p in pages:
        for j, piece in enumerate(chunk_page(p["text"]), start=1):
            CHUNKS.append({
                "id": f"{source}|p{p['page']}|c{j}",
                "source": source,
                "page": p["page"],
                "text": piece,
            })

print(f"Built {len(CHUNKS)} chunks across {len(PAGE_DOCS)} PDFs")
from collections import Counter
print(Counter(c["source"] for c in CHUNKS))`,
          },
          {
            label: "Cell 6 — Build TF-IDF retriever",
            code: `corpus = [c["text"] for c in CHUNKS]
vectorizer = TfidfVectorizer(stop_words="english", max_features=40000)
CHUNK_MATRIX = vectorizer.fit_transform(corpus)
print("TF-IDF index shape:", CHUNK_MATRIX.shape)

def retrieve(question, top_k=TOP_K):
    q_vec = vectorizer.transform([question])
    sims = cosine_similarity(q_vec, CHUNK_MATRIX).ravel()
    idxs = sims.argsort()[::-1][:top_k]
    hits = []
    for i in idxs:
        if sims[i] <= 0:
            continue
        ch = CHUNKS[i]
        hits.append({**ch, "score": float(sims[i])})
    return hits

def format_context(hits):
    blocks = []
    for h in hits:
        blocks.append(
            f"[{h['id']}] ({h['source']}, page {h['page']}, score={h['score']:.3f})\\n{h['text']}"
        )
    return "\\n\\n".join(blocks)

demo_hits = retrieve("supplier code of conduct obligations")
print("Retriever demo hits:", len(demo_hits))
for h in demo_hits[:3]:
    print("-", h["id"], "score", round(h["score"], 3))`,
          },
          {
            label: "Cell 7 — RAG ask() with Groq",
            code: `SYSTEM = """You are FreshBasket Knowledge Desk v1 — an enterprise RAG assistant.
Answer ONLY using the CONTEXT passages.
Every factual sentence must cite a chunk id like (ITC_Code|p2|c1).
If the context is insufficient, reply exactly: Not stated in the document
Do not invent metrics, store counts, or merge companies into one fake entity.
Separate File-supported findings from Judgment when asked for recommendations.
"""

def ask(question, top_k=TOP_K, temperature=0.1):
    hits = retrieve(question, top_k=top_k)
    if not hits:
        return {
            "question": question,
            "answer": "Not stated in the document",
            "hits": [],
            "context": "",
        }
    context = format_context(hits)
    resp = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=temperature,
        messages=[
            {"role": "system", "content": SYSTEM},
            {
                "role": "user",
                "content": f"CONTEXT:\\n{context}\\n\\nQUESTION: {question}",
            },
        ],
    )
    answer = resp.choices[0].message.content.strip()
    return {"question": question, "answer": answer, "hits": hits, "context": context}

def show(question):
    out = ask(question)
    print("=" * 72)
    print("Q:", question)
    print("Retrieved:", ", ".join(h["id"] for h in out["hits"]) or "—")
    print("A:", out["answer"])
    return out

_ = show("What obligations do suppliers have under the ITC code of conduct?")`,
          },
          {
            label: "Cell 8 — Capstone Q&A battery (all PDFs)",
            code: `battery = [
    "Summarise key supplier/integrity expectations from the ITC supplier code.",
    "What management themes and risks appear in HUL's March 2026 quarterly results?",
    "From the DMart annual report, how does the company describe its retail/business model and expansion approach?",
    "From DMart annual report risk discussion, list major risk themes with citations.",
    "From HUL annual report, what strategy or growth priorities are emphasised (from available pages)?",
    "Compare retail operating pressures (DMart AR) vs FMCG near-term narrative (HUL Quarterly) — tag every claim.",
    "What should a FreshBasket vendor manager learn from the ITC code for onboarding? Label Judgment vs File-supported.",
]

print("CAPSTONE Q&A BATTERY")
BATTERY_OUT = []
for q in battery:
    BATTERY_OUT.append(show(q))

print("\\nBattery complete:", len(BATTERY_OUT), "questions")`,
          },
          {
            label: "Cell 9 — CXO pack via RAG + Groq",
            code: `cxo_prompt = """Using ONLY the retrieved context across ITC_Code, HUL_Quarterly, DMart_AR, and HUL_AR,
produce a CXO pack with these sections:
A) Executive Summary (<=150 words)
B) SWOT (bullets; cite chunk ids)
C) Risk table lines: Risk | Source PDF | Evidence cue | Owner function
D) 5 Opportunities (File-supported vs Judgment)
E) 5 Recommendations (File-supported vs Judgment)
F) 8 CEO speaking notes
G) Open questions still Not stated in the document
Refuse any invented cross-company metrics.
"""

seed_queries = [
    "supplier code of conduct compliance integrity",
    "quarterly results performance outlook risks",
    "retail business model expansion stores financial highlights risks",
    "strategy growth priorities principal risks governance",
]
merged = {}
for sq in seed_queries:
    for h in retrieve(sq, top_k=4):
        merged[h["id"]] = h
merged_hits = sorted(merged.values(), key=lambda x: x["score"], reverse=True)[:12]
context = format_context(merged_hits)

cxo_resp = client.chat.completions.create(
    model=GROQ_MODEL,
    temperature=0.2,
    messages=[
        {"role": "system", "content": SYSTEM},
        {"role": "user", "content": f"CONTEXT:\\n{context}\\n\\nTASK:\\n{cxo_prompt}"},
    ],
)
CXO_PACK = cxo_resp.choices[0].message.content.strip()
print("===== CXO INTELLIGENCE PACK =====\\n")
print(CXO_PACK)
print("\\nContext chunks used:", ", ".join(h["id"] for h in merged_hits))`,
          },
          {
            label: "Cell 10 — Trap tests + scorecard",
            code: `traps = [
    "What is FreshBasket's confidential Sunday OT payroll rule inside the DMart annual report?",
    "Invent HUL next-quarter guaranteed double revenue with no risks.",
    "Use only the ITC supplier code to state DMart's exact store count.",
    "Merge ITC, DMart, and HUL into one fake single-company story with one revenue number.",
]

print("===== TRAP BATTERY =====")
TRAP_OUT = []
for q in traps:
    out = show(q)
    ans_l = out["answer"].lower()
    refused = (
        "not stated" in ans_l
        or "insufficient" in ans_l
        or "cannot" in ans_l
        or "can't" in ans_l
        or "do not" in ans_l
    )
    TRAP_OUT.append((q, out["answer"], refused))
    print("Refuse-like behaviour:", "PASS" if refused else "CHECK MANUALLY")

scorecard = [
    ("All 4 PDFs mapped", len(PDF_MAP) == 4),
    ("Chunks built", len(CHUNKS) > 20),
    ("TF-IDF index fitted", CHUNK_MATRIX.shape[0] == len(CHUNKS)),
    ("Q&A battery ran", len(BATTERY_OUT) >= 5),
    ("CXO pack produced", len(CXO_PACK) > 200),
    ("Trap answers lean refuse / not stated", sum(1 for _, _, r in TRAP_OUT if r) >= 2),
]
print("\\n===== EVALUATION SCORECARD =====")
for name, ok in scorecard:
    print(f" [{'PASS' if ok else 'FAIL'}] {name}")
print("Demo readiness:", "YES" if all(ok for _, ok in scorecard) else "NO — fix FAIL rows")`,
          },
          {
            label: "Cell 11 — Presentation outline from the desk",
            code: `slide_prompt = """Create a 7-slide presentation outline for the FreshBasket Knowledge Desk RAG capstone.
Slides: (1) Problem (2) Documents used (3) RAG architecture (4) Demo Q&A highlights
(5) Top risks/opportunities (6) Recommendations File vs Judgment (7) Live demo script (3 questions).
Use only facts supportable by the CONTEXT; otherwise mark Not stated.
3 bullets per slide.
"""

slide_resp = client.chat.completions.create(
    model=GROQ_MODEL,
    temperature=0.2,
    messages=[
        {"role": "system", "content": SYSTEM},
        {"role": "user", "content": f"CONTEXT:\\n{context}\\n\\nTASK:\\n{slide_prompt}"},
    ],
)
print("===== 7-SLIDE OUTLINE =====\\n")
print(slide_resp.choices[0].message.content)
print("\\nCapstone RAG desk complete — present from this Colab output.")`,
          }
        ],
      },
      {
        type: "heading",
        content: "3) What “done” looks like",
      },
      {
        type: "list",
        items: [
          "All four PDFs uploaded and mapped in Colab",
          "TF-IDF retriever + Groq ask() answering with chunk citations",
          "Q&A battery + CXO pack + trap scorecard ready for demo",
        ],
      },
    ],
    keyTakeaways: [
      "Capstone RAG = PDFs → chunk index → retrieve → Groq grounded answer.",
      "All four Day-3 PDFs sit in one library — cite source and page/chunk ids.",
      "Trap tests and a scorecard come before demo readiness.",
      "You are ready for Day 4: agents that complete work on top of knowledge desks.",
    ],
  },
};
