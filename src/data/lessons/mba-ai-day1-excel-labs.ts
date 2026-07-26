import type { TopicLesson } from "@/lib/types";

const DOC = "https://docs.google.com/";
const CHATGPT = "https://chatgpt.com/";

const DS = {
  superstore: "/datasets/mba/day1/sample-superstore.xlsx",
  retail: "/datasets/mba/day1/online-retail-uk.csv",
  telco: "/datasets/mba/day1/telco-customer-churn.csv",
  hr: "/datasets/mba/day1/hr-employee-attrition.csv",
  hotel: "/datasets/mba/day1/hotel-bookings.csv",
} as const;

/**
 * Day 1 Excel labs — 5 real datasets × 5 questions.
 * Mix formulas, PivotTables, and charts. ChatGPT prompts only for
 * uploading Excel outputs → trends / business summary → Google Doc.
 */
export const mbaAiDay1ExcelLabs: Record<string, TopicLesson> = {
  "mba-d1-lab-t1": {
    topicId: "mba-d1-lab-t1",
    intro:
      "Lab 1 uses the classic Sample Superstore workbook. Work in Excel: clean the Orders sheet, answer five analysis questions with formulas + pivots + charts, then upload your outputs to ChatGPT for a business summary and paste it into your Google Doc.",
    blocks: [
      {
        type: "heading",
        content: "Business context",
      },
      {
        type: "paragraph",
        content:
          "You are advising a national office-products retailer. Leadership wants a clear read on where sales and profit are healthy, where discounts hurt margin, and whether returns concentrate in certain categories or regions.",
      },
      {
        type: "heading",
        content: "1) Download & open",
      },
      {
        type: "list",
        items: [
          "Download Sample Superstore (Orders, Returns, People sheets).",
          "Open in Excel (or Google Sheets). Work primarily on the Orders sheet.",
          "Create a Google Doc titled “AI Lab Notes — [Your Name]” with heading Day 1 → Superstore if you do not have one yet.",
        ],
      },
      {
        type: "tip",
        content: `Download: ${DS.superstore} · Google Doc: ${DOC}`,
      },
      {
        type: "heading",
        content: "2) Clean before you analyse",
      },
      {
        type: "list",
        items: [
          "Confirm headers: Order Date, Ship Date, Segment, Region, Category, Sub-Category, Sales, Quantity, Discount, Profit.",
          "Format Order Date / Ship Date as dates. Format Sales, Profit, Discount as numbers.",
          "Add helper columns (formulas): Profit Margin = Profit/Sales; Ship Days = Ship Date − Order Date.",
          "Quick scan: filter blanks on Region/Category; note any negative profit rows (keep them — losses matter).",
        ],
      },
      {
        type: "heading",
        content: "3) Five Excel questions (formulas + pivots + charts)",
      },
      {
        type: "paragraph",
        content:
          "Q1 — KPI strip (formulas). On a Summary sheet, use SUM / AVERAGE / COUNT formulas for: Total Sales, Total Profit, Overall Profit Margin (Total Profit ÷ Total Sales), Average Discount, Order line count. Add a bar or KPI-style chart of Sales vs Profit by Region using a small pivot or SUMIF table.",
      },
      {
        type: "paragraph",
        content:
          "Q2 — Region × Category (Pivot + chart). PivotTable: Rows = Region, Columns = Category, Values = Sum of Sales and Sum of Profit. Insert a clustered column chart for Sales by Region. Mark the weakest Region–Category cell (low profit or loss).",
      },
      {
        type: "paragraph",
        content:
          "Q3 — Segment & discount pressure (formulas + pivot). Add column Margin % if missing. Pivot: Rows = Segment, Values = Average of Discount, Sum of Sales, Sum of Profit, Average of Margin %. Chart: combo or bar — Average Discount by Segment. Which segment shows high discount with weak margin?",
      },
      {
        type: "paragraph",
        content:
          "Q4 — Sub-Category winners & losers (pivot + chart). Pivot: Rows = Sub-Category, Values = Sum of Profit and Sum of Sales. Sort by Profit ascending. Chart: horizontal bar of Top 5 and Bottom 5 Sub-Categories by Profit (two charts or one filtered view).",
      },
      {
        type: "paragraph",
        content:
          "Q5 — Returns bridge (VLOOKUP/XLOOKUP or Power Query + pivot). On Returns, join Returned = Yes to Orders via Order ID (XLOOKUP/VLOOKUP or merge). Flag returned lines. Pivot return rate by Category or Region (returned lines ÷ total lines). Chart: return rate by Category.",
      },
      {
        type: "heading",
        content: "4) Evidence pack for ChatGPT",
      },
      {
        type: "list",
        items: [
          "Copy your Summary KPI numbers (or screenshot).",
          "Paste or screenshot: Region×Category pivot, Segment discount pivot, Top/Bottom Sub-Category chart, Returns rate chart.",
          "Do not ask ChatGPT to invent the pivots — upload what you built.",
        ],
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download Superstore workbook",
            description: "Save sample-superstore.xlsx and open Orders in Excel.",
            link: { label: "Download Superstore", url: DS.superstore },
          },
          {
            title: "Complete Q1–Q5 in Excel",
            description:
              "KPI formulas, Region×Category pivot+chart, Segment discount analysis, Sub-Category ranking, Returns join + rate chart.",
          },
          {
            title: "ChatGPT — Superstore insight summary",
            description:
              "Upload screenshots or paste pivot tables. Copy the prompt below. Paste the reply under Day 1 → Superstore in Google Docs.",
            link: { label: "Open ChatGPT", url: CHATGPT },
            commands: [
              "You are a retail business analyst. I completed Excel analysis on the Sample Superstore dataset (Orders + Returns).",
              "I am pasting / uploading my Excel outputs: KPI strip, Region×Category sales & profit pivot, Segment discount vs margin table, Sub-Category profit ranking, and returns rate by category/region.",
              "Using ONLY these results (do not invent numbers not shown):",
              "1) List 5 clear trends or patterns",
              "2) List 3 risks or problem areas",
              "3) Write a 8–10 sentence business summary for leadership",
              "4) Suggest 3 follow-up Excel cuts I should run next week",
              "Tone: boardroom, concise, no jargon.",
            ],
          },
          {
            title: "Paste into Google Doc",
            description:
              "Under Day 1 → Superstore: paste your KPI numbers, note which charts you built, and paste the ChatGPT summary.",
            link: { label: "Open Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Clean dates and add margin / ship-day formulas before pivoting.",
      "Mix formulas (KPIs), PivotTables (cuts), and charts (communication).",
      "ChatGPT summarises your Excel evidence — it does not replace the analysis.",
    ],
  },

  "mba-d1-lab-t2": {
    topicId: "mba-d1-lab-t2",
    intro:
      "Lab 2 uses a real extract of UCI Online Retail (United Kingdom rows). Build invoice-level metrics with formulas, explore countries/products with pivots and charts, then get an AI summary from your Excel outputs.",
    blocks: [
      {
        type: "heading",
        content: "Business context",
      },
      {
        type: "paragraph",
        content:
          "You support an online gift retailer. Finance wants line revenue, cancelled/credit behaviour, and which products and months drive value — from invoice data, not opinions.",
      },
      {
        type: "heading",
        content: "1) Download & open",
      },
      {
        type: "list",
        items: [
          "Download online-retail-uk.csv (real UCI Online Retail rows for the UK).",
          "Data → From Text/CSV into Excel. Convert to a Table (Ctrl+T).",
        ],
      },
      {
        type: "tip",
        content: `Download: ${DS.retail}`,
      },
      {
        type: "heading",
        content: "2) Clean",
      },
      {
        type: "list",
        items: [
          "Columns: InvoiceNo, StockCode, Description, Quantity, InvoiceDate, UnitPrice, CustomerID, Country.",
          "Format InvoiceDate as date/time. Quantity and UnitPrice as numbers.",
          "Add formula LineRevenue = Quantity * UnitPrice.",
          "Flag returns/cancellations: InvoiceNo starting with “C” (formula with LEFT/IF) or Quantity < 0.",
          "Optional: remove or separately analyse rows with blank CustomerID.",
        ],
      },
      {
        type: "heading",
        content: "3) Five Excel questions",
      },
      {
        type: "paragraph",
        content:
          "Q1 — Revenue KPIs (formulas). Total LineRevenue, total Quantity, average UnitPrice, count of distinct InvoiceNo (use Pivot or UNIQUE if available). Split: revenue from positive qty vs negative qty (returns).",
      },
      {
        type: "paragraph",
        content:
          "Q2 — Monthly trend (pivot + line chart). Add helper Month = TEXT(InvoiceDate,\"YYYY-MM\") or use Pivot date grouping. Pivot: Rows = Month, Values = Sum of LineRevenue and Count of InvoiceNo. Insert a line chart of monthly revenue.",
      },
      {
        type: "paragraph",
        content:
          "Q3 — Top products (pivot + bar chart). Pivot: Rows = Description (or StockCode), Values = Sum of LineRevenue and Sum of Quantity. Sort by revenue. Chart Top 10 products by LineRevenue.",
      },
      {
        type: "paragraph",
        content:
          "Q4 — Basket / invoice size (formulas + histogram-style chart). Per InvoiceNo: SUMIF revenue and SUMIF quantity. Then AVERAGE of invoice revenue. Chart: distribution of invoice revenue (pivot buckets or chart of sample).",
      },
      {
        type: "paragraph",
        content:
          "Q5 — Returns intensity (pivot + chart). Filter or flag cancelled invoices. Pivot: share of return lines or return revenue vs gross. Chart: monthly return revenue vs sales revenue (two series).",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download Online Retail UK extract",
            link: { label: "Download CSV", url: DS.retail },
            description: "Import to Excel and create a Table.",
          },
          {
            title: "Complete Q1–Q5",
            description:
              "LineRevenue formulas, monthly pivot+line chart, top products, invoice size metrics, returns vs sales chart.",
          },
          {
            title: "ChatGPT — Online Retail insight summary",
            link: { label: "Open ChatGPT", url: CHATGPT },
            description: "Upload Excel outputs only; paste reply to Google Doc Day 1 → Online Retail.",
            commands: [
              "You are an ecommerce analyst. I analysed a real UCI Online Retail UK extract in Excel.",
              "I am sharing my outputs: KPI totals, monthly revenue trend, top products, invoice-size stats, and returns vs sales view.",
              "Using ONLY these results:",
              "1) Five trends",
              "2) Three operational or financial risks",
              "3) A short leadership summary (8–10 sentences)",
              "4) Three next Excel analyses to run",
              "Do not invent SKUs or months I did not show.",
            ],
          },
          {
            title: "Paste into Google Doc",
            link: { label: "Open Google Docs", url: DOC },
            description: "Day 1 → Online Retail: evidence notes + AI summary.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "LineRevenue = Quantity × UnitPrice is the core formula for invoice analytics.",
      "Separate cancellations/returns before celebrating revenue.",
      "Upload pivots and charts to ChatGPT for the narrative — keep Excel as the source of truth.",
    ],
  },

  "mba-d1-lab-t3": {
    topicId: "mba-d1-lab-t3",
    intro:
      "Lab 3 uses IBM Telco Customer Churn. Calculate churn rates with formulas, cut by contract and tenure with pivots/charts, then ask ChatGPT to turn your tables into a retention briefing.",
    blocks: [
      {
        type: "heading",
        content: "Business context",
      },
      {
        type: "paragraph",
        content:
          "A telecom operator is losing subscribers. You must show who churns, which contracts are fragile, and how charges relate to leaving — in Excel first.",
      },
      {
        type: "tip",
        content: `Download: ${DS.telco}`,
      },
      {
        type: "heading",
        content: "Clean",
      },
      {
        type: "list",
        items: [
          "Import telco-customer-churn.csv. Key fields: tenure, Contract, InternetService, PaymentMethod, MonthlyCharges, TotalCharges, Churn.",
          "Convert TotalCharges to number (replace blanks). Churn is Yes/No.",
          "Add ChurnFlag = IF(Churn=\"Yes\",1,0) for easier averages.",
        ],
      },
      {
        type: "heading",
        content: "Five Excel questions",
      },
      {
        type: "paragraph",
        content:
          "Q1 — Overall churn (formulas). Churn rate = AVERAGE(ChurnFlag) or COUNTIF Yes ÷ COUNTA. Average tenure, average MonthlyCharges for churners vs stayers (AVERAGEIF).",
      },
      {
        type: "paragraph",
        content:
          "Q2 — Contract risk (pivot + column chart). Pivot: Rows = Contract, Values = Count of customers, Average of ChurnFlag (churn rate), Average of MonthlyCharges. Chart churn rate by Contract.",
      },
      {
        type: "paragraph",
        content:
          "Q3 — Internet & add-ons (pivot + chart). Pivot: Rows = InternetService, Columns = OnlineSecurity (or TechSupport), Values = Average ChurnFlag. Heat-style reading + bar chart of churn by InternetService.",
      },
      {
        type: "paragraph",
        content:
          "Q4 — Tenure bands (formulas + pivot). Create TenureBand with nested IF or IFS (0–12, 13–24, 25–48, 49+). Pivot churn rate and average MonthlyCharges by TenureBand. Line or column chart.",
      },
      {
        type: "paragraph",
        content:
          "Q5 — Payment method (pivot + chart). Churn rate and average MonthlyCharges by PaymentMethod. Highlight the worst payment method for churn.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download Telco Churn",
            link: { label: "Download CSV", url: DS.telco },
            description: "Import and add ChurnFlag.",
          },
          {
            title: "Complete Q1–Q5",
            description:
              "Overall KPIs, Contract pivot+chart, Internet cuts, TenureBand analysis, PaymentMethod churn chart.",
          },
          {
            title: "ChatGPT — Telco retention summary",
            link: { label: "Open ChatGPT", url: CHATGPT },
            description: "Upload pivots/charts; paste AI brief into Google Doc.",
            commands: [
              "You are a telecom customer-success analyst. I analysed IBM Telco Customer Churn in Excel.",
              "Here are my outputs: overall churn KPIs, churn by Contract, InternetService cuts, TenureBand rates, PaymentMethod comparison.",
              "Using ONLY these results:",
              "1) Five patterns about who churns",
              "2) Three retention priorities",
              "3) An 8–10 sentence briefing for the Chief Customer Officer",
              "4) Three extra Excel slices to run next",
            ],
          },
          {
            title: "Paste into Google Doc",
            link: { label: "Open Google Docs", url: DOC },
            description: "Day 1 → Telco Churn.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "ChurnFlag lets PivotTables show rates with Average.",
      "Tenure bands turn a numeric field into a categorical story.",
      "AI writes the retention narrative from your Excel evidence.",
    ],
  },

  "mba-d1-lab-t4": {
    topicId: "mba-d1-lab-t4",
    intro:
      "Lab 4 uses IBM HR Employee Attrition. Mix formulas and pivots to find where attrition concentrates (department, overtime, income), chart the story, then generate an HR insight summary in ChatGPT.",
    blocks: [
      {
        type: "heading",
        content: "Business context",
      },
      {
        type: "paragraph",
        content:
          "CHRO asked for a fact-based attrition scan: which departments and job roles lose people, and whether overtime and pay levels correlate with leaving.",
      },
      {
        type: "tip",
        content: `Download: ${DS.hr}`,
      },
      {
        type: "heading",
        content: "Clean",
      },
      {
        type: "list",
        items: [
          "Import hr-employee-attrition.csv. Fields include Attrition, Department, JobRole, OverTime, MonthlyIncome, YearsAtCompany, JobSatisfaction.",
          "AttritionFlag = IF(Attrition=\"Yes\",1,0).",
          "Spot-check MonthlyIncome is numeric.",
        ],
      },
      {
        type: "heading",
        content: "Five Excel questions",
      },
      {
        type: "paragraph",
        content:
          "Q1 — Headcount KPIs (formulas). Headcount, attrition count, attrition rate, average MonthlyIncome overall vs leavers (AVERAGEIF).",
      },
      {
        type: "paragraph",
        content:
          "Q2 — Department & JobRole (pivot + bar chart). Pivot attrition rate by Department; second pivot by JobRole (top attrition roles). Chart Top 8 JobRoles by attrition rate.",
      },
      {
        type: "paragraph",
        content:
          "Q3 — OverTime (pivot + compare chart). Pivot: Rows = OverTime, Values = attrition rate, average MonthlyIncome, average YearsAtCompany. Column chart of attrition Yes vs No OverTime.",
      },
      {
        type: "paragraph",
        content:
          "Q4 — Income bands (formulas + pivot). Create IncomeBand (e.g. <3k, 3–5k, 5–8k, 8k+). Pivot attrition rate by IncomeBand. Chart the curve.",
      },
      {
        type: "paragraph",
        content:
          "Q5 — Satisfaction lens (pivot). Rows = JobSatisfaction (or WorkLifeBalance), Values = attrition rate and count. Optional combo chart.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download HR Attrition",
            link: { label: "Download CSV", url: DS.hr },
            description: "Add AttritionFlag; verify income fields.",
          },
          {
            title: "Complete Q1–Q5",
            description:
              "KPI strip, Department/JobRole pivots+charts, OverTime compare, IncomeBand, satisfaction cut.",
          },
          {
            title: "ChatGPT — HR attrition summary",
            link: { label: "Open ChatGPT", url: CHATGPT },
            description: "Upload tables/charts; paste into Google Doc Day 1 → HR Attrition.",
            commands: [
              "You are an HR analytics partner. I analysed IBM HR Employee Attrition in Excel.",
              "I am sharing: overall attrition KPIs, rates by Department and JobRole, OverTime comparison, IncomeBand rates, and satisfaction cuts.",
              "Using ONLY these results:",
              "1) Five workforce risk patterns",
              "2) Three actions HR should discuss with business leaders",
              "3) An 8–10 sentence CHRO briefing",
              "4) Three follow-up Excel analyses",
            ],
          },
          {
            title: "Paste into Google Doc",
            link: { label: "Open Google Docs", url: DOC },
            description: "Day 1 → HR Attrition.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Attrition rate = average of a 0/1 flag in pivots.",
      "OverTime and income bands often surface actionable HR stories.",
      "ChatGPT turns your HR pivots into a CHRO-ready brief.",
    ],
  },

  "mba-d1-lab-t5": {
    topicId: "mba-d1-lab-t5",
    intro:
      "Lab 5 uses a real hotel bookings extract. Analyse cancellations, ADR, and market segments with formulas, pivots, and charts — then close Day 1 with a ChatGPT wrap-up pasted into your Google Doc.",
    blocks: [
      {
        type: "heading",
        content: "Business context",
      },
      {
        type: "paragraph",
        content:
          "A hotel group wants to know which segments cancel, how lead time relates to cancellation, and where ADR (average daily rate) is strong or weak.",
      },
      {
        type: "tip",
        content: `Download: ${DS.hotel}`,
      },
      {
        type: "heading",
        content: "Clean",
      },
      {
        type: "list",
        items: [
          "Import hotel-bookings.csv. Useful fields: hotel, is_canceled, lead_time, arrival_date_month, market_segment, customer_type, adr, adults, children, reserved_room_type.",
          "is_canceled is 0/1 — perfect for rate averages.",
          "Check adr is numeric; filter extreme ADR outliers for a sensitivity view if needed (keep a note).",
        ],
      },
      {
        type: "heading",
        content: "Five Excel questions",
      },
      {
        type: "paragraph",
        content:
          "Q1 — Booking KPIs (formulas). Booking count, cancellation rate (AVERAGE of is_canceled), average lead_time, average adr overall and for non-canceled stays (AVERAGEIF).",
      },
      {
        type: "paragraph",
        content:
          "Q2 — Hotel type (pivot + chart). Pivot by hotel: cancel rate, average adr, average lead_time. Clustered column chart comparing the two hotel types.",
      },
      {
        type: "paragraph",
        content:
          "Q3 — Market segment (pivot + chart). Cancel rate and average adr by market_segment. Bar chart of cancellation rate by segment; call out the riskiest segment.",
      },
      {
        type: "paragraph",
        content:
          "Q4 — Lead-time bands (formulas + pivot + chart). LeadBand with IFS (0–7, 8–30, 31–90, 91–180, 181+ days). Pivot cancel rate and average adr by LeadBand. Line chart of cancel rate vs lead band.",
      },
      {
        type: "paragraph",
        content:
          "Q5 — Month seasonality (pivot + dual chart). Pivot by arrival_date_month: bookings, cancel rate, average adr. Chart bookings by month; optional second series for cancel rate.",
      },
      {
        type: "heading",
        content: "Day 1 wrap — one Google Doc synthesis",
      },
      {
        type: "paragraph",
        content:
          "After ChatGPT summarises this hotel lab, run one final prompt that combines headlines from all five Day 1 datasets (paste short bullets from each lab section in your Doc).",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download Hotel Bookings extract",
            link: { label: "Download CSV", url: DS.hotel },
            description: "Import; confirm is_canceled and adr.",
          },
          {
            title: "Complete Q1–Q5",
            description:
              "KPIs, hotel compare, market_segment, LeadBand, monthly seasonality charts.",
          },
          {
            title: "ChatGPT — Hotel bookings summary",
            link: { label: "Open ChatGPT", url: CHATGPT },
            description: "Upload Excel outputs; paste into Day 1 → Hotel Bookings.",
            commands: [
              "You are a hospitality revenue analyst. I analysed a real hotel bookings extract in Excel.",
              "Here are my outputs: KPIs, hotel-type comparison, market_segment cancel/ADR, lead-time bands, monthly seasonality.",
              "Using ONLY these results: five patterns, three commercial risks, 8–10 sentence GM summary, three next Excel cuts.",
            ],
          },
          {
            title: "ChatGPT — Day 1 cross-lab wrap",
            link: { label: "Open ChatGPT", url: CHATGPT },
            description:
              "Paste short bullets from Superstore, Online Retail, Telco, HR, and Hotel sections. Save under Day 1 → End-of-day synthesis.",
            commands: [
              "I completed five Excel + ChatGPT labs today: Superstore, Online Retail, Telco Churn, HR Attrition, Hotel Bookings.",
              "Here are bullet headlines from each lab (my Excel-based findings):",
              "[PASTE 2–4 bullets per dataset]",
              "Write a one-page Day 1 learning synthesis:",
              "1) What Excel techniques I practised (formulas, pivots, charts)",
              "2) How uploading results to ChatGPT improved the business narrative",
              "3) Three habits I will keep for the rest of the program",
              "Keep it personal and practical — no fluff.",
            ],
          },
          {
            title: "Paste everything into Google Doc",
            link: { label: "Open Google Docs", url: DOC },
            description: "Day 1 complete when all five lab summaries + wrap are in the Doc — then continue to the Power Pivot Final Project.",
          },
        ],
      },
    ],
    keyTakeaways: [
      "Cancellation rate is the average of a 0/1 field — ideal for pivots.",
      "Lead-time bands and market segments drive hotel commercial decisions.",
      "Day 1 ends with Excel evidence + AI summaries in one Google Doc.",
    ],
  },
};
