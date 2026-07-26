import type { TopicLesson } from "@/lib/types";
import { mbaAiDay2PowerBiLabs } from "./mba-ai-day2-powerbi-labs";

const CHATGPT = "https://chatgpt.com/";
const DOC = "https://docs.google.com/";
const MODEL = "/datasets/mba/day1/retail-sales/data-model.jpeg";
const STORES = "/datasets/mba/day1/retail-sales/stores.csv";
const ORDERS = "/datasets/mba/day1/retail-sales/orders.csv";
const CUSTOMERS = "/datasets/mba/day1/retail-sales/customers.csv";
const ORDER_ITEMS = "/datasets/mba/day1/retail-sales/order_items.csv";
const PRODUCTS = "/datasets/mba/day1/retail-sales/products.csv";
const BRANDS = "/datasets/mba/day1/retail-sales/brands.csv";
const FIN_SLICE = "/datasets/mba/day2/financial-sample-prompt-slice.csv";
const FIN_FULL = "/datasets/mba/day2/financial-sample.csv";

/**
 * Day 2 — Power BI + Prompt Engineering
 * Every topic includes readable theory plus a hands-on task with a real dataset.
 */
export const mbaAiDay2Lessons: Record<string, TopicLesson> = {
  ...mbaAiDay2PowerBiLabs,

  "mba-d2-t1": {
    topicId: "mba-d2-t1",
    intro:
      "Day 2 moves from Excel Power Pivot to Power BI Desktop. This topic defines what Power BI is, when interactive dashboards are useful, and confirms your install with a short first visual on stores.csv.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "By the end of this topic you should be able to define Power BI Desktop in plain language, contrast an interactive dashboard with a static slide pack, and complete a Get Data → Card visual workflow on a real store table.",
      },
      {
        type: "heading",
        content: "2) Definitions",
      },
      {
        type: "paragraph",
        content:
          "Power BI Desktop is the authoring tool where you load data, build a relational model, write measures, and design interactive report pages. A dashboard (report page) is a set of visuals that share the same model filters. Unlike a static Excel printout or slide screenshot, one slicer can refresh every visual on the page from the same trusted definitions.",
      },
      {
        type: "list",
        items: [
          "Power BI Desktop — build and design tool on your PC.",
          "Model — tables, relationships, and measures that define KPIs once.",
          "Report page — interactive visuals and slicers for exploration.",
          "Card visual — a single KPI value (useful for install checks).",
        ],
      },
      {
        type: "heading",
        content: "3) How it works",
      },
      {
        type: "paragraph",
        content:
          "You import tables (CSV/Excel), clean types in Power Query, relate tables in Model view, define measures, then place visuals on a Report page. Filters and slicers change the filter context; measures recalculate. That is why KPI definitions should live as measures rather than one-off spreadsheet cells.",
      },
      {
        type: "heading",
        content: "4) Why it matters in business",
      },
      {
        type: "list",
        items: [
          "Filters update KPIs and charts together — less re-exporting of pivots for every question.",
          "KPI definitions live as measures (one Net Sales, reused everywhere).",
          "Leaders can explore store / brand / time without waiting for a new file.",
          "You still own judgment: the dashboard answers “what”; you decide “so what.”",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "Day 1 vs Day 2",
          variant: "compare",
          nodes: [
            {
              id: "d1",
              label: "Day 1 — Excel / Power Pivot",
              sublabel: "Formulas · pivots · workbook dashboard",
            },
            {
              id: "d2",
              label: "Day 2 — Power BI Desktop",
              sublabel: "Interactive pages · slicers · DAX measures",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "5) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Skipping Get Data practice and jumping straight to a complex model.",
          "Treating a screenshot of Excel as equivalent to an interactive model.",
          "Building visuals before confirming the file loaded (row counts / sample values).",
        ],
      },
      {
        type: "heading",
        content: "6) Practice exercise — your first Power BI visual",
      },
      {
        type: "paragraph",
        content:
          "Download stores.csv (3 bike stores). Load it into Power BI Desktop and create one Card visual that shows the count of stores. This confirms Desktop is installed and you can Get Data.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download stores.csv",
            description: "Save the file locally.",
            link: { label: "Download stores.csv", url: STORES },
          },
          {
            title: "Open Power BI Desktop → Get Data → Text/CSV",
            description: "Load stores.csv → Transform Data briefly → Close & Apply. Save as Day2_Practice.pbix.",
          },
          {
            title: "Create a Card visual",
            description:
              "Insert a Card. Field: store_id (Count) or store_name (Count). Title it “Store Count”. You should see 3.",
          },
          {
            title: "Screenshot into Google Doc",
            description: "Day 2 → Topic 1: paste the Card screenshot.",
            link: { label: "Open Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Power BI Desktop is the build tool for interactive dashboards.",
      "One model feeds many visuals when filters change.",
      "Day 2 continues Day 1’s retail data story in a new tool.",
      "Always verify install with a small Get Data + Card task.",
    ],
  },

  "mba-d2-t2": {
    topicId: "mba-d2-t2",
    intro:
      "Every Power BI project follows the same loop: Get Data → Power Query → Model → Report. This topic explains the four Desktop views and why column types must be fixed before you visualise.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "By the end of this topic you should be able to name the four Desktop views, describe the standard workflow in order, explain why date and numeric types matter, and shape orders.csv so order_date is a true Date.",
      },
      {
        type: "heading",
        content: "2) Definitions — four views",
      },
      {
        type: "list",
        items: [
          "Report — pages, visuals, slicers.",
          "Data — browse columns and rows.",
          "Model — tables and relationships.",
          "Power Query Editor — clean types and names before the model.",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "Desktop workflow",
          variant: "flow",
          nodes: [
            { id: "a", label: "Get Data", sublabel: "CSV / Excel" },
            { id: "b", label: "Power Query", sublabel: "Types · clean" },
            { id: "c", label: "Model", sublabel: "Relationships" },
            { id: "d", label: "Report", sublabel: "Visuals · slicers" },
          ],
          arrows: [
            { from: "a", to: "b" },
            { from: "b", to: "c" },
            { from: "c", to: "d" },
          ],
        },
      },
      {
        type: "heading",
        content: "3) How it works",
      },
      {
        type: "paragraph",
        content:
          "Get Data loads raw files. Power Query records Applied Steps that set types, rename columns, and filter bad rows. Close & Apply pushes the shaped tables into the model. Model view defines relationships. Report view is for storytelling only after types and joins are correct.",
      },
      {
        type: "heading",
        content: "4) Why types matter",
      },
      {
        type: "paragraph",
        content:
          "If order_date stays as Text, you cannot build a reliable date hierarchy or monthly trend. Numeric IDs stored as text also break relationships. Fix types in Power Query before Close & Apply — Report view will not correct them for you.",
      },
      {
        type: "heading",
        content: "5) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Close & Apply with Text dates, then trying to build Month hierarchies.",
          "Renaming columns in Report view instead of Power Query (breaks later refreshes).",
          "Skipping Data view checks after load.",
        ],
      },
      {
        type: "heading",
        content: "6) Practice exercise — shape orders.csv",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download orders.csv",
            link: { label: "Download orders.csv", url: ORDERS },
            description: "1615 order headers with dates and store/staff IDs.",
          },
          {
            title: "Get Data → Transform Data",
            description:
              "In Power Query set: order_id, customer_id, store_id, staff_id, order_status → Whole Number; order_date, required_date, shipped_date → Date. Close & Apply into Day2_Practice.pbix (or a new file).",
          },
          {
            title: "Data view check",
            description:
              "Open Data view → orders. Confirm order_date shows as a date (calendar icon). Create a simple Table visual with order_date and Count of order_id.",
          },
          {
            title: "Paste evidence",
            description: "Day 2 → Topic 2: screenshot of Power Query Applied Steps or Data view date column.",
            link: { label: "Open Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Workflow: Get Data → Power Query → Model → Report.",
      "Fix types before Close & Apply.",
      "Report view is for storytelling; Query and Model protect data quality.",
      "Practise the loop on one real table before the full model.",
    ],
  },

  "mba-d2-t3": {
    topicId: "mba-d2-t3",
    intro:
      "Dashboards fail when relationships are wrong. This topic covers fact vs dimension thinking, the retail ERD, and a three-table mini-model you build and test in Power BI.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "By the end of this topic you should be able to classify tables as facts or dimensions, read the retail data-model diagram, create two relationships in Model view, and prove them with a store × order-count matrix.",
      },
      {
        type: "heading",
        content: "2) Definitions — fact vs dimension",
      },
      {
        type: "list",
        items: [
          "Facts = events (order_items lines, orders headers, stocks).",
          "Dimensions = descriptions (stores, customers, products, brands, categories, staffs).",
          "Keys = shared columns used to relate dimension rows to fact rows.",
          "Filter from dimensions into facts using keys — do not invent joins.",
        ],
      },
      {
        type: "heading",
        content: "3) How it works",
      },
      {
        type: "paragraph",
        content:
          "In Model view you drag a key from the dimension to the matching key on the fact (or set the relationship in the dialog). Cardinality is usually one-to-many (one store → many orders). Cross-filter direction is typically single (dimension filters fact). Wrong relationships produce blank visuals or inflated totals.",
      },
      {
        type: "heading",
        content: "4) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "A correct model lets one Net Sales measure answer store, brand, and time questions without copying VLOOKUPs into every sheet. An incorrect model quietly misleads: store filters stop working, or double-counting inflates revenue. The ERD is the checklist that prevents that.",
      },
      {
        type: "heading",
        content: "5) Full retail model (reference)",
      },
      {
        type: "image",
        image: MODEL,
        imageAlt: "Nine-table retail sales data model diagram",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Auto-detect relationships that join the wrong columns.",
          "Many-to-many joins created by accident on non-unique keys.",
          "Skipping a proof visual after creating relationships.",
        ],
      },
      {
        type: "heading",
        content: "7) Practice exercise — build a 3-table mini-model",
      },
      {
        type: "paragraph",
        content:
          "Load customers, orders, and stores. Create relationships customers→orders and stores→orders. Prove them with a matrix: store_name × Count of order_id.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download three CSVs",
            description: "customers, orders, stores.",
            link: { label: "customers.csv", url: CUSTOMERS },
          },
          {
            title: "Also download",
            link: { label: "orders.csv", url: ORDERS },
            description: "And stores.csv from the retail-sales folder.",
          },
          {
            title: "Load all three → Model view",
            description:
              "Create: customers[customer_id]→orders[customer_id] and stores[store_id]→orders[store_id]. Match the diagram’s sales side.",
            link: { label: "View full data model", url: MODEL },
          },
          {
            title: "Prove with a visual",
            description:
              "Matrix: Rows = store_name, Values = Count of order_id. Each store should show an order count (not blank).",
          },
          {
            title: "Paste Model + matrix screenshots",
            description: "Day 2 → Topic 3 in Google Docs.",
            link: { label: "Open Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Facts record events; dimensions describe them.",
      "The ERD is your relationship checklist.",
      "Test relationships with a simple matrix immediately.",
      "Wrong cardinality produces blank or inflated visuals.",
    ],
  },

  "mba-d2-t4": {
    topicId: "mba-d2-t4",
    intro:
      "DAX measures define trusted KPIs. This topic contrasts columns and measures, lists retail KPI patterns, and has you create Net Sales on order_items and pin it to a Card.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "By the end of this topic you should be able to distinguish a calculated column from a measure, write a Net Sales measure that applies discount at line grain, format it as currency, and verify it on a Card.",
      },
      {
        type: "heading",
        content: "2) Definitions — column vs measure",
      },
      {
        type: "list",
        items: [
          "Calculated column — stored per row; evaluated at refresh.",
          "Measure — calculated from the current filters (preferred for KPIs).",
          "Filter context — the set of filters from slicers, rows, and columns that a measure sees.",
          "SUMX — row-by-row expression then sum; useful for quantity × price × (1 − discount).",
        ],
      },
      {
        type: "heading",
        content: "3) How it works",
      },
      {
        type: "paragraph",
        content:
          "When you place a measure on a Card or bar chart, Power BI evaluates it under the current filters. That is why one Net Sales definition can show company total on a Card and store totals on a bar — without rewriting the formula. Columns are better for static attributes; measures are better for aggregations that must respond to slicers.",
      },
      {
        type: "heading",
        content: "4) Retail KPI patterns",
      },
      {
        type: "list",
        items: [
          "Net Sales = SUMX(order_items, quantity * list_price * (1 - discount))",
          "Gross Sales = SUMX(order_items, quantity * list_price)",
          "Orders = DISTINCTCOUNT(orders[order_id])",
          "Avg Order Value = DIVIDE([Net Sales], [Orders])",
        ],
      },
      {
        type: "heading",
        content: "5) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "Leaders need one agreed definition of Net Sales. If every analyst recalculates discounts differently, reviews become arguments about arithmetic. Measures encode the definition once so dashboards and briefs stay consistent.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Using SUM(list_price) without quantity or discount.",
          "Forgetting to format currency / percent.",
          "Skipping a Net vs Gross sanity check (Net should be ≤ Gross).",
        ],
      },
      {
        type: "heading",
        content: "7) Practice exercise — create Net Sales",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download order_items.csv (+ orders if needed)",
            link: { label: "Download order_items.csv", url: ORDER_ITEMS },
            description: "Load into Power BI. Fix quantity, list_price, discount types.",
          },
          {
            title: "New measure: Net Sales",
            description:
              "Net Sales = SUMX ( order_items , order_items[quantity] * order_items[list_price] * ( 1 - order_items[discount] ) ). Format as Currency.",
          },
          {
            title: "Card visual",
            description: "Place Net Sales on a Card. Note the total. Optionally add Gross Sales and compare (Net ≤ Gross).",
          },
          {
            title: "Paste Card screenshot + measure formula",
            description: "Day 2 → Topic 4 in Google Docs.",
            link: { label: "Open Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Measures are reusable KPI definitions.",
      "Net Sales applies discount at line grain.",
      "Format currency/percent so cards read correctly.",
      "Always sanity-check Net vs Gross.",
    ],
  },

  "mba-d2-t5": {
    topicId: "mba-d2-t5",
    intro:
      "Good dashboards match visuals to questions and keep layouts scannable. This topic covers visual choice, layout rules, and a three-visual page with a slicer on the retail mini-model.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "By the end of this topic you should be able to match common visuals to business questions, apply a simple layout pattern (KPI row → charts → slicers), and prove that a slicer updates both a Card and a bar chart.",
      },
      {
        type: "heading",
        content: "2) Definitions — match visual to question",
      },
      {
        type: "list",
        items: [
          "Cards → headline KPIs.",
          "Bars → compare stores/brands.",
          "Lines → trends over months.",
          "Matrices → detail breakdowns.",
          "Slicers → interactive filters controlled by the reader.",
        ],
      },
      {
        type: "heading",
        content: "3) How it works — layout rules",
      },
      {
        type: "list",
        items: [
          "Top: title + KPI row.",
          "Middle: 2–4 primary charts.",
          "Edge: slicers that actually filter the page.",
          "One page = one story (for example, store performance).",
        ],
      },
      {
        type: "heading",
        content: "4) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "Readers scan top-left first. A clear KPI row answers “are we okay?” before charts answer “where?”. Interaction testing catches broken filters before a review meeting. Decoration that look busy but do not respond to slicers waste time.",
      },
      {
        type: "heading",
        content: "5) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Choosing visuals for decoration rather than the question.",
          "Too many charts on one page with no single story.",
          "Slicers that do not filter the visuals (edit interactions not checked).",
        ],
      },
      {
        type: "heading",
        content: "6) Practice exercise — 3 visuals + 1 slicer",
      },
      {
        type: "paragraph",
        content:
          "Using stores + orders + order_items (and your Net Sales measure), build: (1) Net Sales card, (2) bar of Net Sales by store_name, (3) slicer on store_name. Click a store and confirm both card and bar update.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Ensure mini-model is ready",
            description:
              "stores, orders, order_items related; Net Sales measure exists (Topics 3–4).",
            link: { label: "stores.csv", url: STORES },
          },
          {
            title: "Build Card + Bar + Slicer",
            description:
              "Card: Net Sales. Bar: store_name vs Net Sales. Slicer: store_name. Title the page “Store Pulse”.",
          },
          {
            title: "Test interaction",
            description: "Select one store — Card and Bar must change. Screenshot before/after.",
          },
          {
            title: "Paste into Google Doc",
            description: "Day 2 → Topic 5.",
            link: { label: "Open Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Pick visuals for questions, not decoration.",
      "KPI row first; charts second.",
      "Slicers must drive the page.",
      "Test interactions before calling the page complete.",
    ],
  },

  "mba-d2-t6": {
    topicId: "mba-d2-t6",
    intro:
      "Prompt engineering is briefing AI with role, evidence, format, and constraints. This topic contrasts weak and strong prompts on a real financial slice.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "By the end of this topic you should be able to explain why vague prompts fail, describe the parts of a strong analysis brief, run weak vs strong prompts on the same evidence, and score which answer a finance leader could use.",
      },
      {
        type: "heading",
        content: "2) Definitions",
      },
      {
        type: "paragraph",
        content:
          "A prompt is a work brief for a language model. Evidence is the data you paste or upload (rows, totals, screenshots). Constraints tell the model what not to invent. AI does not open your .pbix by itself — you must supply the numbers.",
      },
      {
        type: "visual",
        diagram: {
          title: "Weak vs strong",
          variant: "compare",
          nodes: [
            { id: "w", label: "Weak", sublabel: "“Give insights on this data”" },
            {
              id: "s",
              label: "Strong",
              sublabel: "Role + pasted rows + sections + do-not-invent",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "3) How it works",
      },
      {
        type: "paragraph",
        content:
          "Vague asks (“analyse sales”) produce generic tips because the model fills missing context with common patterns. Strong asks force structure (sections, tables, owners) and forbid invented numbers. You still verify every figure against the file you provided.",
      },
      {
        type: "heading",
        content: "4) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "In reviews, a usable memo beats a long list of plausible-sounding advice. Structured prompts save rework and reduce the risk of fabricated competitors, regions, or amounts appearing in a brief.",
      },
      {
        type: "heading",
        content: "5) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Asking for insights without attaching evidence.",
          "Accepting confident language without checking numbers.",
          "Running only one prompt and not comparing quality.",
        ],
      },
      {
        type: "heading",
        content: "6) Practice exercise — weak vs strong on Financial Sample slice",
      },
      {
        type: "paragraph",
        content:
          "Download the 40-row financial prompt slice (Segment, Country, Product, Sales, Profit, Date). Upload or paste into ChatGPT. Run both prompts below in separate chats. Score which answer a CFO could use.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download financial-sample-prompt-slice.csv",
            link: { label: "Download slice (40 rows)", url: FIN_SLICE },
            description: "Microsoft Financial Sample extract for prompting practice.",
          },
          {
            title: "Weak prompt (Chat 1)",
            link: { label: "Open ChatGPT", url: CHATGPT },
            commands: [
              "Analyse this sales data and give insights.",
              "[Upload / paste the CSV]",
            ],
            description: "Save the reply under Day 2 → Topic 6 → Weak.",
          },
          {
            title: "Strong prompt (Chat 2)",
            link: { label: "Open ChatGPT", url: CHATGPT },
            commands: [
              "ROLE: Act as a commercial finance analyst.",
              "CONTEXT: I uploaded a 40-row extract from a financial sales sample (Segment, Country, Product, Sales, Profit, Date).",
              "GOAL: Prepare a decision memo for the CFO.",
              "FORMAT:",
              "1) 5 descriptive facts (numbers only from the file)",
              "2) 3 diagnostic hypotheses",
              "3) 3 chart ideas for Power BI",
              "4) NOT-YET actions (3) with reasons",
              "CONSTRAINTS: Do not invent countries/products/amounts not in the file. Mark assumptions clearly.",
            ],
            description: "Save under Day 2 → Topic 6 → Strong.",
          },
          {
            title: "Score both (1–5)",
            description:
              "Score Specificity, Evidence discipline, Structure, Restraint. Paste scores + one paragraph: which memo you would send and why.",
            link: { label: "Open Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Prompts brief AI; data must be attached.",
      "Weak asks produce generic advice.",
      "Strong asks produce usable decision memos.",
      "You still verify every number.",
    ],
  },

  "mba-d2-t7": {
    topicId: "mba-d2-t7",
    intro:
      "Use the R-C-G-F-C framework on real retail tables. Build one complete analytics prompt that turns brand/category evidence into a Power BI-ready brief.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "By the end of this topic you should be able to list the five R-C-G-F-C blocks, write a complete assortment prompt with evidence attached, and annotate your prompt so each block is visible.",
      },
      {
        type: "heading",
        content: "2) Definitions — R-C-G-F-C blocks",
      },
      {
        type: "list",
        items: [
          "Role — who AI should act as.",
          "Context — business situation + attached evidence.",
          "Goal — decision or deliverable.",
          "Format — exact sections.",
          "Constraints — do-not-invent, NOT-YET, tone.",
        ],
      },
      {
        type: "heading",
        content: "3) How it works",
      },
      {
        type: "paragraph",
        content:
          "Write the five blocks in order. Attach a real table (brand × product count × average list price) before asking for strategy. Format forces a usable output; constraints stop hallucinated prices or volumes. Label the blocks in your lab notes so the pattern becomes reusable.",
      },
      {
        type: "heading",
        content: "4) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "Incomplete briefs produce incomplete answers. A category review needs owners, risks, and a NOT-YET list — not a generic “focus on bestsellers” paragraph. The framework makes those requirements explicit every time.",
      },
      {
        type: "heading",
        content: "5) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Skipping Context or Constraints.",
          "Asking for strategy without pasting evidence.",
          "Leaving Format vague (“give insights”).",
        ],
      },
      {
        type: "heading",
        content: "6) Practice exercise — brand performance prompt pack",
      },
      {
        type: "paragraph",
        content:
          "Download products.csv and brands.csv. In Excel or Power BI, create a simple pivot/table: brand_name × average list_price and count of products (or paste headers + 30 product rows into ChatGPT). Write one R-C-G-F-C prompt asking for category strategy implications.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download products + brands",
            link: { label: "products.csv", url: PRODUCTS },
            description: "Also download brands.csv from the same folder.",
          },
          {
            title: "Make a tiny evidence table",
            description:
              "In Excel/Power BI: brand_name, Count of product_id, Average of list_price. Screenshot or copy the table.",
            link: { label: "brands.csv", url: BRANDS },
          },
          {
            title: "Run R-C-G-F-C prompt in ChatGPT",
            link: { label: "Open ChatGPT", url: CHATGPT },
            commands: [
              "ROLE: Act as a bicycle retail category manager.",
              "CONTEXT: Multi-store bike retailer. Evidence table (brand × product count × avg list_price) is attached/pasted below.",
              "[PASTE TABLE]",
              "GOAL: Recommend how to prioritise brands for a Q3 assortment review.",
              "FORMAT:",
              "1) Snapshot (5 bullets from evidence only)",
              "2) Table: Brand | Observation | Risk | Opportunity",
              "3) Top 3 actions with owners (Marketing / Buying / Stores)",
              "4) NOT-YET list (3)",
              "CONSTRAINTS: No invented prices or volumes beyond the table. Calm professional tone.",
            ],
          },
          {
            title: "Label the five blocks",
            description:
              "In Google Docs, paste your prompt and highlight/annotate Role, Context, Goal, Format, Constraints.",
            link: { label: "Open Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "R-C-G-F-C keeps prompts complete.",
      "Attach a real table before asking for strategy.",
      "Format forces usable outputs.",
      "Constraints stop unsupported assortment claims.",
    ],
  },

  "mba-d2-t8": {
    topicId: "mba-d2-t8",
    intro:
      "Advanced prompting techniques: evidence-only rules, critique loops, and NOT-YET lists. Practise on the full Financial Sample CSV before the Power BI final project.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "By the end of this topic you should be able to apply evidence-only rules, run a critique loop (draft → challenge → rewrite), produce a NOT-YET list, and tag remaining bullets as Fact / Assumption / Unknown.",
      },
      {
        type: "heading",
        content: "2) Definitions — techniques that raise quality",
      },
      {
        type: "list",
        items: [
          "Evidence-only — “Using ONLY these results…”",
          "Critique loop — draft → challenge unsupported claims → rewrite.",
          "NOT-YET list — actions blocked until more evidence exists.",
          "Facts / Assumptions / Unknowns tags — separate certainty levels.",
        ],
      },
      {
        type: "heading",
        content: "3) How it works",
      },
      {
        type: "paragraph",
        content:
          "First, attach a country-level pivot (Sales, Profit, Units). Ask for a structured memo. Then ask the model to list unsupported claims, rewrite without them, add a NOT-YET list, and tag remaining bullets. The second draft is usually safer for leadership review.",
      },
      {
        type: "heading",
        content: "4) Why it matters in business",
      },
      {
        type: "paragraph",
        content:
          "First drafts often overreach. Critique loops and NOT-YET lists add restraint — useful when numbers are incomplete or when actions would be costly to reverse. These habits carry into the Day 2 final project CEO brief.",
      },
      {
        type: "heading",
        content: "5) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Stopping after Draft 1.",
          "Allowing claims that are not in the pivot.",
          "Skipping Fact / Assumption / Unknown tags.",
        ],
      },
      {
        type: "heading",
        content: "6) Practice exercise — critique loop on Financial Sample",
      },
      {
        type: "paragraph",
        content:
          "Download financial-sample.csv (700 rows). Either (a) paste Country × Sum of Profit from Excel/Power BI, or (b) upload the CSV if your ChatGPT plan allows. Run Draft 1, then a critique prompt, then save Draft 2.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download financial-sample.csv",
            link: { label: "Download full Financial Sample CSV", url: FIN_FULL },
            description: "Microsoft sample: Segment, Country, Product, Sales, Profit, dates.",
          },
          {
            title: "Create evidence (Excel or Power BI)",
            description:
              "Pivot: Country × Sum of Sales, Sum of Profit, Sum of Units_Sold. Screenshot or paste totals.",
          },
          {
            title: "Draft 1 — insight memo",
            link: { label: "Open ChatGPT", url: CHATGPT },
            commands: [
              "ROLE: FP&A partner.",
              "CONTEXT: Country-level Sales/Profit/Units from Microsoft Financial Sample (pasted/uploaded).",
              "GOAL: 1-page performance memo.",
              "FORMAT: 5 insights · 3 risks · 3 Power BI visuals to build next.",
              "CONSTRAINTS: Evidence-only. No invented countries.",
              "[PASTE EVIDENCE]",
            ],
          },
          {
            title: "Critique → Draft 2",
            link: { label: "Open ChatGPT", url: CHATGPT },
            commands: [
              "Critique your previous memo:",
              "1) List any claim not supported by my evidence",
              "2) Rewrite the memo removing those claims",
              "3) Add a NOT-YET list (3 actions)",
              "4) Tag remaining bullets as Fact / Assumption / Unknown",
            ],
            description: "Paste Draft 1, critique, and Draft 2 into Day 2 → Topic 8.",
          },
          {
            title: "Google Doc pack",
            link: { label: "Open Google Docs", url: DOC },
            description: "Evidence pivot + Draft 2 only (final). Note one lesson for the Final Project prompts.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Evidence-only stops invented precision.",
      "Critique loops upgrade first drafts.",
      "NOT-YET lists add restraint.",
      "These techniques support the Final Project CEO brief.",
    ],
  },
};
