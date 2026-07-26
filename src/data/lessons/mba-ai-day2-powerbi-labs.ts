import type { TopicLesson } from "@/lib/types";

const DOC = "https://docs.google.com/";
const CHATGPT = "https://chatgpt.com/";

const RETAIL = {
  zip: "/datasets/mba/day1/retail-sales/retail-sales-9-tables.zip",
  model: "/datasets/mba/day1/retail-sales/data-model.jpeg",
} as const;

const FIN = {
  xlsx: "/datasets/mba/day2/financial-sample.xlsx",
  csv: "/datasets/mba/day2/financial-sample.csv",
} as const;

/**
 * Day 2 Power BI labs:
 * Labs 1–2 = bike retail 9-table model (skill building)
 * Lab 3 final = Microsoft Financial Sample (separate dataset for transfer practice)
 */
export const mbaAiDay2PowerBiLabs: Record<string, TopicLesson> = {
  "mba-d2-lab-t1": {
    topicId: "mba-d2-lab-t1",
    intro:
      "Lab 1 — Load & Model: import all nine bike-retail CSVs into Power BI Desktop, fix types, and create relationships matching the data-model diagram. Save as Day2_Retail_Model.pbix.",
    blocks: [
      {
        type: "heading",
        content: "Lab objective",
      },
      {
        type: "paragraph",
        content:
          "Finish with a correct Model view (9 tables + relationships). Complete the model before building dashboard visuals.",
      },
      {
        type: "tip",
        content: `Download zip: ${RETAIL.zip}`,
      },
      {
        type: "heading",
        content: "Target relationships",
      },
      {
        type: "image",
        image: RETAIL.model,
        imageAlt: "Nine-table retail data model for Power BI Lab 1",
      },
      {
        type: "list",
        items: [
          "customers → orders (customer_id)",
          "stores → orders (store_id)",
          "staffs → orders (staff_id)",
          "orders → order_items (order_id)",
          "products → order_items (product_id)",
          "brands → products (brand_id)",
          "categories → products (category_id)",
          "stores → stocks (store_id)",
          "products → stocks (product_id)",
        ],
      },
      {
        type: "heading",
        content: "Steps",
      },
      {
        type: "list",
        items: [
          "Get Data → Text/CSV for each of the 9 files (or Folder combine if comfortable).",
          "Power Query: Whole Number for IDs; Date for order/ship dates; Decimal for prices/discounts/qty where needed.",
          "Rename tables exactly: brands, categories, customers, orders, order_items, products, staffs, stocks, stores.",
          "Model view: create the relationships above; delete wrong auto-detects.",
          "Screenshot Model view for Google Docs.",
        ],
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download 9-table zip",
            link: { label: "Download zip", url: RETAIL.zip },
            description: "Extract locally.",
          },
          {
            title: "Load all 9 tables + fix types",
            description: "Close & Apply into Day2_Retail_Model.pbix.",
          },
          {
            title: "Create all relationships",
            description: "Match the data-model image. Screenshot Model view.",
            link: { label: "View diagram", url: RETAIL.model },
          },
          {
            title: "Paste Lab 1 evidence",
            link: { label: "Open Google Docs", url: DOC },
            description: "Day 2 → Lab 1: Model screenshot + note “9 tables loaded”.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Load every table before visualising.",
      "Types protect relationships.",
      "ERD is the relationship checklist.",
      "Model proof comes before measures.",
    ],
  },

  "mba-d2-lab-t2": {
    topicId: "mba-d2-lab-t2",
    intro:
      "Lab 2 — Measures, Visuals & Slicers: add DAX KPIs on the bike retail model, build a sandbox page, and prove slicers update cards and charts together.",
    blocks: [
      {
        type: "heading",
        content: "Prerequisite",
      },
      {
        type: "paragraph",
        content: "Lab 1 complete (9 tables + relationships). Continue in Day2_Retail_Model.pbix.",
      },
      {
        type: "heading",
        content: "Measures to create",
      },
      {
        type: "list",
        items: [
          "Net Sales = SUMX(order_items, quantity * list_price * (1 - discount))",
          "Gross Sales = SUMX(order_items, quantity * list_price)",
          "Discount Amount = [Gross Sales] - [Net Sales]",
          "Units Sold = SUM(order_items[quantity])",
          "Orders = DISTINCTCOUNT(orders[order_id])",
          "Customers = DISTINCTCOUNT(orders[customer_id])",
          "Avg Order Value = DIVIDE([Net Sales], [Orders])",
          "Avg Discount % = DIVIDE([Discount Amount], [Gross Sales])",
          "Inventory Units = SUM(stocks[quantity])",
        ],
      },
      {
        type: "heading",
        content: "Sandbox visuals",
      },
      {
        type: "list",
        items: [
          "KPI cards for the sales measures.",
          "Bar: Net Sales by store_name.",
          "Line: Net Sales by Month (order_date).",
          "Bar: Net Sales by brand_name.",
          "Matrix: brand × category Net Sales.",
          "Inventory matrix: store × Inventory Units.",
          "Slicers: Store, Brand, Category, Year — test interactions.",
        ],
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Create all measures + format",
            description: "Currency / % / whole number as appropriate.",
          },
          {
            title: "Build sandbox page visuals",
            description: "Cards, store, month, brand, matrix, inventory.",
          },
          {
            title: "Add & test slicers",
            description: "Selecting one store must shrink Net Sales and Orders.",
          },
          {
            title: "Optional ChatGPT mid-check",
            link: { label: "Open ChatGPT", url: CHATGPT },
            commands: [
              "ROLE: Retail BI analyst.",
              "CONTEXT: I paste Power BI KPI totals and a store ranking from my bike-retail model.",
              "[PASTE]",
              "GOAL: 5 evidence-only observations + 2 slicer questions to explore next.",
              "CONSTRAINTS: Do not invent stores or amounts.",
            ],
          },
          {
            title: "Paste Lab 2 screenshots",
            link: { label: "Open Google Docs", url: DOC },
            description: "Day 2 → Lab 2.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Measures define KPIs once for the report.",
      "Sandbox confirms the model before final layout polish.",
      "Slicers must change cards and charts.",
      "Inventory stays off revenue cards.",
    ],
  },

  "mba-d2-lab-t3": {
    topicId: "mba-d2-lab-t3",
    intro:
      "Final Project — Interactive Financial Dashboard: build a new Power BI report on Microsoft’s Financial Sample (different from the bike-retail tables). Create executive pages, slicers, and a ChatGPT CEO brief from your screenshots.",
    blocks: [
      {
        type: "heading",
        content: "Why a new dataset?",
      },
      {
        type: "paragraph",
        content:
          "Labs 1–2 practised modeling on the 9-table bike store. The final project applies the same Power BI discipline to a different business dataset: Microsoft’s Financial Sample (Segment, Country, Product, Sales, Profit, discounts, dates).",
      },
      {
        type: "heading",
        content: "1) Download the Financial Sample",
      },
      {
        type: "tip",
        content: `Excel: ${FIN.xlsx} · CSV: ${FIN.csv}`,
      },
      {
        type: "list",
        items: [
          "Fields include: Segment, Country, Product, Discount_Band, Units_Sold, Manufacturing_Price, Sale_Price, Gross_Sales, Discounts, Sales, COGS, Profit, Date, Month_Name, Year.",
          "Create a new file: Day2_Financial_Dashboard.pbix (do not overwrite the bike model).",
        ],
      },
      {
        type: "heading",
        content: "STEP A — Load & shape",
      },
      {
        type: "list",
        items: [
          "Get Data → Excel workbook or Text/CSV → Financial Sample.",
          "Power Query: set Date → Date; Year/Month_Number → Whole Number; Units_Sold, prices, Sales, Profit, COGS, Discounts, Gross_Sales → Decimal/Fixed Decimal.",
          "Rename the table FinancialSales. Close & Apply.",
          "Optional: mark Date as date hierarchy (Year / Quarter / Month / Day).",
        ],
      },
      {
        type: "heading",
        content: "STEP B — Create measures (even on a flat table)",
      },
      {
        type: "list",
        items: [
          "Total Sales = SUM(FinancialSales[Sales])",
          "Total Profit = SUM(FinancialSales[Profit])",
          "Total Units = SUM(FinancialSales[Units_Sold])",
          "Total COGS = SUM(FinancialSales[COGS])",
          "Total Discounts = SUM(FinancialSales[Discounts])",
          "Profit Margin % = DIVIDE([Total Profit], [Total Sales])",
          "Avg Sale Price = DIVIDE([Total Sales], [Total Units])",
        ],
      },
      {
        type: "heading",
        content: "STEP C — Page 1: Executive Performance",
      },
      {
        type: "list",
        items: [
          "Title: “Financial Performance Dashboard” + your name + date.",
          "KPI cards: Total Sales, Total Profit, Profit Margin %, Total Units, Total Discounts.",
          "Bar: Sales by Country.",
          "Bar/column: Sales by Segment.",
          "Line: Sales (and optional Profit) by Month/Date.",
          "Treemap or bar: Sales by Product (Top N if crowded).",
          "Slicers: Year, Segment, Country, Discount_Band — sync across the page.",
        ],
      },
      {
        type: "heading",
        content: "STEP D — Page 2: Profitability Deep Dive",
      },
      {
        type: "list",
        items: [
          "Matrix: Country × Segment with Sales, Profit, Profit Margin %.",
          "Scatter (optional): Sales vs Profit by Product (size = Units).",
          "Bar: Profit by Discount_Band — does heavy discount destroy profit?",
          "Slicers: Year, Country.",
          "Keep layout clean; one story = profitability drivers.",
        ],
      },
      {
        type: "heading",
        content: "STEP E — Quality checks",
      },
      {
        type: "list",
        items: [
          "Profit Margin % formats as percentage.",
          "Year slicer changes cards and charts together.",
          "Totals roughly match a quick Excel pivot on the same CSV (spot-check).",
          "No blank cards when All is selected.",
        ],
      },
      {
        type: "heading",
        content: "STEP F — ChatGPT CEO brief",
      },
      {
        type: "paragraph",
        content:
          "Screenshot both pages (with a specific Year/Country filter applied). Upload to ChatGPT using the checklist prompt. Paste into Google Docs Day 2 → Final Project.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download Financial Sample",
            link: { label: "Download CSV", url: FIN.csv },
            description: "Or use the xlsx. Create Day2_Financial_Dashboard.pbix.",
          },
          {
            title: "STEP A–B — Load, types, measures",
            description: "FinancialSales table + all KPI measures formatted.",
            link: { label: "Download XLSX", url: FIN.xlsx },
          },
          {
            title: "STEP C — Executive Performance page",
            description: "KPI strip + Country/Segment/Month/Product visuals + slicers.",
          },
          {
            title: "STEP D — Profitability Deep Dive page",
            description: "Matrix, discount-band profit, optional scatter.",
          },
          {
            title: "STEP E — Pass quality checks",
            description: "Margins, slicers, Excel spot-check.",
          },
          {
            title: "ChatGPT — Final CEO brief",
            link: { label: "Open ChatGPT", url: CHATGPT },
            commands: [
              "ROLE: Act as a CFO advisor.",
              "CONTEXT: Power BI dashboard on Microsoft Financial Sample (Segment, Country, Product, Sales, Profit, Discounts, Dates). Screenshots attached.",
              "GOAL: Board-ready performance brief.",
              "FORMAT:",
              "1) 5 insights (evidence-only)",
              "2) 3 profitability risks",
              "3) 8–12 sentence CEO brief",
              "4) NOT-YET list (3)",
              "5) 3 follow-up Power BI cuts",
              "CONSTRAINTS: Do not invent countries, products, or amounts not visible in my screenshots.",
            ],
          },
          {
            title: "Paste Final Project pack",
            link: { label: "Open Google Docs", url: DOC },
            description:
              "Day 2 → Final Project: both page screenshots + ChatGPT brief. Day 2 complete when filled.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Capstone uses a new dataset to prove transfer of skill.",
      "Flat tables still need measures, layout, and slicer discipline.",
      "Two pages: performance overview + profitability deep dive.",
      "ChatGPT narrates screenshots — Power BI remains the source of truth.",
    ],
  },
};
