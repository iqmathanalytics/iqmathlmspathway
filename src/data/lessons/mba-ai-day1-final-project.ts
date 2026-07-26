import type { TopicLesson } from "@/lib/types";

const DOC = "https://docs.google.com/";
const CHATGPT = "https://chatgpt.com/";

const DS = {
  zip: "/datasets/mba/day1/retail-sales/retail-sales-9-tables.zip",
  model: "/datasets/mba/day1/retail-sales/data-model.jpeg",
  brands: "/datasets/mba/day1/retail-sales/brands.csv",
  categories: "/datasets/mba/day1/retail-sales/categories.csv",
  customers: "/datasets/mba/day1/retail-sales/customers.csv",
  orders: "/datasets/mba/day1/retail-sales/orders.csv",
  orderItems: "/datasets/mba/day1/retail-sales/order_items.csv",
  products: "/datasets/mba/day1/retail-sales/products.csv",
  staffs: "/datasets/mba/day1/retail-sales/staffs.csv",
  stocks: "/datasets/mba/day1/retail-sales/stocks.csv",
  stores: "/datasets/mba/day1/retail-sales/stores.csv",
} as const;

/**
 * Day 1 Final Project — Excel Power Pivot retail sales dashboard
 * 9 related tables + data model diagram.
 */
export const mbaAiDay1FinalProject: Record<string, TopicLesson> = {
  "mba-d1-lab-t6": {
    topicId: "mba-d1-lab-t6",
    intro:
      "Day 1 Final Project: build a retail sales dashboard in Excel using Power Pivot. You will load nine related tables, create the data model (relationships), write KPI measures, build PivotTables and charts, and assemble one executive dashboard — then summarise insights with ChatGPT into your Google Doc.",
    blocks: [
      {
        type: "heading",
        content: "1) Project brief",
      },
      {
        type: "paragraph",
        content:
          "You are the analytics lead for a multi-store bicycle retailer. Leadership wants one Excel workbook that answers: How much are we selling? Which stores, brands, and categories win? Which staff close orders? Where is inventory sitting? Your deliverable is a Power Pivot model + a Dashboard sheet with KPIs, pivots, and charts.",
      },
      {
        type: "list",
        items: [
          "Tool: Microsoft Excel with Power Pivot / Data Model enabled (Excel for Microsoft 365 or Excel 2016+ recommended).",
          "Data: 9 CSV tables — sales side (customers, orders, order_items, stores, staffs) and production side (products, brands, categories, stocks).",
          "Output: one .xlsx workbook with a Data Model, KPI measures, PivotTables, charts, and a Dashboard sheet.",
          "Evidence: paste screenshots + ChatGPT executive summary under Day 1 → Final Project in Google Docs.",
        ],
      },
      {
        type: "heading",
        content: "2) Download the project files",
      },
      {
        type: "tip",
        content: `Download all 9 tables as one zip: ${DS.zip} · Or download CSVs individually from /datasets/mba/day1/retail-sales/`,
      },
      {
        type: "list",
        items: [
          `brands.csv — ${DS.brands}`,
          `categories.csv — ${DS.categories}`,
          `customers.csv — ${DS.customers}`,
          `orders.csv — ${DS.orders}`,
          `order_items.csv — ${DS.orderItems}`,
          `products.csv — ${DS.products}`,
          `staffs.csv — ${DS.staffs}`,
          `stocks.csv — ${DS.stocks}`,
          `stores.csv — ${DS.stores}`,
        ],
      },
      {
        type: "heading",
        content: "3) Target data model (follow this diagram)",
      },
      {
        type: "paragraph",
        content:
          "Build relationships exactly as shown. Blue area = Sales; red area = Production. Stars (*) mark primary keys. Lines show foreign-key joins you must create in Power Pivot.",
      },
      {
        type: "image",
        image: DS.model,
        imageAlt:
          "Retail sales Power Pivot data model: customers, orders, order_items, stores, staffs, products, brands, categories, and stocks with relationships",
      },
      {
        type: "heading",
        content: "4) Table map — what each table is for",
      },
      {
        type: "list",
        items: [
          "order_items — fact grain for sales lines (quantity, list_price, discount). Most revenue KPIs start here.",
          "orders — order header (dates, status, store, staff, customer).",
          "customers — who bought (city, state).",
          "stores — which location fulfilled the order.",
          "staffs — who handled the order (also links to store).",
          "products — what was sold (links to brand + category).",
          "brands / categories — product dimensions for slicing.",
          "stocks — inventory quantity by store × product (use for stock analysis; keep separate from sales measures).",
        ],
      },

      {
        type: "heading",
        content: "STEP A — Enable Power Pivot & create a blank workbook",
      },
      {
        type: "list",
        items: [
          "Open Excel → blank workbook. Save as Day1_Retail_Sales_Dashboard.xlsx.",
          "File → Options → Add-ins → Manage: COM Add-ins → Go → tick Microsoft Power Pivot for Excel (wording may vary by version).",
          "Confirm you see a Power Pivot tab (or Power Pivot window). If missing, use Data → Queries & Connections / Get Data — tables can still be added To Data Model.",
          "Optional: rename Sheet1 to Staging (you may delete staging sheets later after load).",
        ],
      },

      {
        type: "heading",
        content: "STEP B — Load all 9 CSVs into the Excel Data Model",
      },
      {
        type: "paragraph",
        content:
          "Load every file as a table into the Data Model (not only as a worksheet). Keep table names identical to the CSV names so relationships match the diagram.",
      },
      {
        type: "list",
        items: [
          "Data → Get Data → From File → From Text/CSV → select brands.csv → Transform Data (Power Query) → check types → Close & Load To… → Only Create Connection + Add this data to the Data Model → OK.",
          "Repeat for: categories, customers, orders, order_items, products, staffs, stocks, stores (9 total).",
          "In Power Query for orders / order_items: set order_date, required_date, shipped_date as Date; quantity / list_price / discount as Decimal Number; IDs as Whole Number.",
          "Open Power Pivot → Manage to confirm all 9 tables appear in the model.",
        ],
      },
      {
        type: "tip",
        content:
          "Naming: rename each model table to brands, categories, customers, orders, order_items, products, staffs, stocks, stores (no spaces) so DAX stays readable.",
      },

      {
        type: "heading",
        content: "STEP C — Create relationships (data modelling)",
      },
      {
        type: "paragraph",
        content:
          "In Power Pivot → Diagram View, drag to create these relationships (one-to-many: dimension → fact). Match the image above.",
      },
      {
        type: "list",
        items: [
          "customers[customer_id] → orders[customer_id]",
          "stores[store_id] → orders[store_id]",
          "staffs[staff_id] → orders[staff_id]",
          "orders[order_id] → order_items[order_id]",
          "products[product_id] → order_items[product_id]",
          "brands[brand_id] → products[brand_id]",
          "categories[category_id] → products[category_id]",
          "stores[store_id] → stocks[store_id]",
          "products[product_id] → stocks[product_id]",
          "Optional: stores[store_id] → staffs[store_id] (staff belong to a store). Skip staffs[manager_id] self-join unless you need org hierarchy.",
        ],
      },
      {
        type: "list",
        items: [
          "Verify: each relationship shows 1 on the dimension side and * on the fact side.",
          "If Excel warns about ambiguity, hide unused relationships or avoid connecting the same two tables twice.",
          "Screenshot Diagram View — you will paste it into Google Docs as modelling evidence.",
        ],
      },

      {
        type: "heading",
        content: "STEP D — Create KPI measures (DAX)",
      },
      {
        type: "paragraph",
        content:
          "In Power Pivot, select the order_items table → add Measures (or create a Measures table). Enter each measure exactly, then format currency / number.",
      },
      {
        type: "list",
        items: [
          "Net Sales := SUMX ( order_items , order_items[quantity] * order_items[list_price] * ( 1 - order_items[discount] ) )",
          "Gross Sales := SUMX ( order_items , order_items[quantity] * order_items[list_price] )",
          "Discount Amount := [Gross Sales] - [Net Sales]",
          "Units Sold := SUM ( order_items[quantity] )",
          "Orders := DISTINCTCOUNT ( orders[order_id] )",
          "Customers := DISTINCTCOUNT ( orders[customer_id] )",
          "Avg Order Value := DIVIDE ( [Net Sales] , [Orders] )",
          "Avg Discount % := DIVIDE ( [Discount Amount] , [Gross Sales] )",
          "Inventory Units := SUM ( stocks[quantity] )  — use only with store/product dimensions for stock views",
        ],
      },
      {
        type: "tip",
        content:
          "Format Net Sales, Gross Sales, Discount Amount, Avg Order Value as Currency. Format Avg Discount % as Percentage. Format Units Sold / Orders / Customers / Inventory Units as Whole Number.",
      },

      {
        type: "heading",
        content: "STEP E — Build analysis PivotTables (from the Data Model)",
      },
      {
        type: "paragraph",
        content:
          "Insert → PivotTable → Use this workbook’s Data Model → New Worksheet for each analysis (or place neatly on Analysis sheets). Name sheets clearly.",
      },
      {
        type: "paragraph",
        content:
          "Pivot 1 — KPI control check. Put Measures: Net Sales, Gross Sales, Discount Amount, Units Sold, Orders, Customers, Avg Order Value, Avg Discount %. No rows/columns. Confirm totals look sensible (not blank).",
      },
      {
        type: "paragraph",
        content:
          "Pivot 2 — Sales by Store. Rows: stores[store_name]. Values: Net Sales, Orders, Units Sold, Avg Order Value. Sort by Net Sales descending.",
      },
      {
        type: "paragraph",
        content:
          "Pivot 3 — Sales by Brand & Category. Rows: brands[brand_name], then categories[category_name]. Values: Net Sales, Units Sold. Expand/collapse brands.",
      },
      {
        type: "paragraph",
        content:
          "Pivot 4 — Monthly trend. Rows: orders[order_date] grouped by Months (or Years + Months). Values: Net Sales, Orders. Sort chronologically.",
      },
      {
        type: "paragraph",
        content:
          "Pivot 5 — Staff performance. Rows: staffs[first_name] & last_name (or create a Staff Name column in Power Query: first_name & \" \" & last_name). Values: Net Sales, Orders. Top performers first.",
      },
      {
        type: "paragraph",
        content:
          "Pivot 6 — Customer geography. Rows: customers[state], customers[city]. Values: Net Sales, Customers, Orders.",
      },
      {
        type: "paragraph",
        content:
          "Pivot 7 — Inventory health. Rows: stores[store_name], products[product_name] (or category). Values: Inventory Units. Filter to low stock if helpful (Value Filters).",
      },

      {
        type: "heading",
        content: "STEP F — Create charts",
      },
      {
        type: "list",
        items: [
          "From Pivot 2: Clustered column chart — Net Sales by Store. Title: Net Sales by Store.",
          "From Pivot 3: Horizontal bar — Top 8 brands by Net Sales (filter/sort). Title: Top Brands by Net Sales.",
          "From Pivot 4: Line chart — Net Sales by Month. Title: Monthly Net Sales Trend.",
          "From Pivot 5: Bar chart — Top 5 staff by Net Sales. Title: Top Staff by Net Sales.",
          "Optional combo: Orders (line) + Net Sales (columns) on the monthly pivot.",
          "Clean charts: remove clutter, add data labels sparingly, match a simple colour theme.",
        ],
      },

      {
        type: "heading",
        content: "STEP G — Assemble the Dashboard sheet",
      },
      {
        type: "list",
        items: [
          "Create a sheet named Dashboard. Set zoom ~80–90%. Freeze top row if useful.",
          "Title block (A1): “Retail Sales Executive Dashboard — Day 1 Final Project” + your name + date.",
          "KPI strip (row 3–5): insert 6–8 PivotTables or GETPIVOTDATA / cube formulas linked to measures — show Net Sales, Gross Sales, Discount Amount, Orders, Customers, Units Sold, Avg Order Value, Avg Discount % as large numbers with labels above each.",
          "Layout left: chart Net Sales by Store + small store pivot.",
          "Layout centre: Monthly Net Sales Trend chart.",
          "Layout right: Top Brands chart + Top Staff chart.",
          "Bottom: optional Inventory Units by Store pivot (compact).",
          "Add slicers (Insert → Slicer) connected to the Data Model pivots: Store, Brand, Category, Year/Month if available. Connect each slicer to all Dashboard pivots/charts (Report Connections).",
          "Protect the story: one screen should answer “how are we doing?” without opening other sheets.",
        ],
      },

      {
        type: "heading",
        content: "STEP H — Quality checks before you finish",
      },
      {
        type: "list",
        items: [
          "Diagram View shows the 9 tables with relationships matching the project image.",
          "Net Sales ≤ Gross Sales; Discount Amount = Gross − Net.",
          "Changing a Store slicer updates related pivots/charts together.",
          "No #ERROR! or blank KPI cards caused by broken measure names.",
          "Inventory Units pivot uses stocks — do not mix Inventory Units into Net Sales pivots as if it were revenue.",
        ],
      },

      {
        type: "heading",
        content: "STEP I — ChatGPT insight summary → Google Doc",
      },
      {
        type: "paragraph",
        content:
          "Screenshot: (1) Diagram View, (2) Dashboard sheet, (3) KPI strip numbers. Upload/paste into ChatGPT with the prompt below. Paste the reply under Day 1 → Final Project in Google Docs, plus your screenshots.",
      },

      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download 9 tables + open Excel",
            description:
              "Download the zip, extract CSVs, create Day1_Retail_Sales_Dashboard.xlsx, enable Power Pivot / Data Model.",
            link: { label: "Download 9-table zip", url: DS.zip },
          },
          {
            title: "STEP B — Load all 9 tables to Data Model",
            description:
              "Get Data → From Text/CSV for every file. Add to Data Model. Fix date/number types in Power Query.",
          },
          {
            title: "STEP C — Build relationships",
            description:
              "Create joins from the data-model diagram (customers/stores/staffs → orders → order_items → products → brands/categories; stocks → stores/products). Screenshot Diagram View.",
            link: { label: "View data model image", url: DS.model },
          },
          {
            title: "STEP D — Create KPI measures",
            description:
              "Add Net Sales, Gross Sales, Discount Amount, Units Sold, Orders, Customers, Avg Order Value, Avg Discount %, Inventory Units. Format correctly.",
          },
          {
            title: "STEP E — Build Pivots 1–7",
            description:
              "KPI check, Store, Brand/Category, Monthly trend, Staff, Customer geography, Inventory.",
          },
          {
            title: "STEP F — Charts",
            description:
              "Store columns, Top brands bar, Monthly line, Top staff bar (optional combo).",
          },
          {
            title: "STEP G — Dashboard sheet + slicers",
            description:
              "KPI strip, charts layout, slicers connected across Dashboard pivots.",
          },
          {
            title: "STEP H — Quality checks",
            description:
              "Relationships match diagram; Net ≤ Gross; slicers work; inventory kept separate from revenue.",
          },
          {
            title: "ChatGPT — Final Project executive brief",
            description:
              "Upload Diagram + Dashboard screenshots / paste KPI numbers. Copy the prompt. Paste reply into Google Docs.",
            link: { label: "Open ChatGPT", url: CHATGPT },
            commands: [
              "You are a retail analytics director reviewing a Power Pivot Excel dashboard built on 9 related bike-store tables (orders, order_items, products, brands, categories, customers, stores, staffs, stocks).",
              "I am sharing my dashboard evidence: data-model relationships screenshot, KPI strip (Net Sales, Gross Sales, Discount, Orders, Customers, Units, AOV, Discount %), and charts for store / brand / month / staff.",
              "Using ONLY what I provide:",
              "1) Five performance insights",
              "2) Three risks or weak spots (sales or inventory)",
              "3) A one-page CEO brief (8–12 sentences)",
              "4) Three follow-up Power Pivot cuts for next week",
              "Do not invent stores, brands, or numbers I did not show.",
            ],
          },
          {
            title: "Paste into Google Doc",
            description:
              "Day 1 → Final Project: Diagram screenshot, Dashboard screenshot, KPI numbers, ChatGPT brief. Day 1 is complete when this section is filled.",
            link: { label: "Open Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Power Pivot turns nine flat CSVs into one relational model for dashboarding.",
      "Net Sales must apply quantity × price × (1 − discount) at line grain.",
      "Relationships + measures support store, brand, staff, and time analysis without repeated VLOOKUP chains.",
      "A dashboard combines KPIs, pivots, charts, and slicers — then ChatGPT narrates the evidence.",
    ],
  },
};
