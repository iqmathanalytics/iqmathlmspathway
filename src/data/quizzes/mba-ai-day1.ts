import type { TopicQuiz } from "@/lib/types";

export const mbaAiDay1Quizzes: Record<string, TopicQuiz> = {
  "mba-d1-h1-t1": {
    topicId: "mba-d1-h1-t1",
    title: "Quick check: Program roadmap",
    questions: [
      {
        id: "q1",
        question: "In this program, which role should Generative AI mainly play?",
        options: [
          "The final decision maker with no human review",
          "A drafting assistant while you remain responsible for judgment",
          "A replacement for finance controls and audits",
          "Only a drawing tool for logos",
        ],
        correctIndex: 1,
        explanation:
          "AI accelerates analysis and drafting; you own judgment and recommendations.",
      },
      {
        id: "q2",
        question: "What is the main Day 1 practice focus?",
        options: [
          "Writing only Python agents with no Excel",
          "25 Excel questions on real datasets, then ChatGPT summaries in Google Docs",
          "Power BI dashboards only",
          "Skipping all data work",
        ],
        correctIndex: 1,
        explanation:
          "Theory topics are for reading; Excel labs are where you analyse and then use ChatGPT on your outputs.",
      },
      {
        id: "q3",
        question: "Why keep a Google Doc (Lab Notes) on Day 1?",
        options: [
          "Because AI outputs are useless forever",
          "To capture Excel findings and ChatGPT summaries as portfolio evidence",
          "Only for printing a certificate",
          "It replaces attendance",
        ],
        correctIndex: 1,
        explanation:
          "Your Doc becomes the evidence trail across labs and later days.",
      },
      {
        id: "q4",
        question: "Why do theory topics use FreshBasket examples?",
        options: [
          "Replace the Excel datasets",
          "Teach analytics concepts with one clear retail story before the Excel labs",
          "So you avoid all business examples",
          "Finance concepts are never discussed",
        ],
        correctIndex: 1,
        explanation:
          "Teaching examples can use FreshBasket; practice uses real Superstore and other public datasets.",
      },
    ],
  },
  "mba-d1-h1-t2": {
    topicId: "mba-d1-h1-t2",
    title: "Quick check: What is Business Analytics?",
    questions: [
      {
        id: "q1",
        question: "When does analytics create the most organisational value?",
        options: [
          "Charts look colourful",
          "A managerial decision changes because of the evidence",
          "Every employee receives a longer PDF",
          "AI writes the longest possible paragraph",
        ],
        correctIndex: 1,
        explanation:
          "Value appears when decisions improve — not when slides multiply.",
      },
      {
        id: "q2",
        question: "Which best captures BI vs BA?",
        options: [
          "BI = why/what next/what to do; BA = only historical dashboards",
          "BI monitors what happened; BA investigates causes, outlook, and actions",
          "They are identical and interchangeable labels",
          "BA replaces all human managers automatically",
        ],
        correctIndex: 1,
        explanation:
          "BI emphasises reporting/monitoring; BA emphasises explanation, prediction, and recommended action.",
      },
      {
        id: "q3",
        question: "What is the correct analytics value chain?",
        options: [
          "Decision → Insight → Data → Information",
          "Data → Information → Insight → Decision",
          "Insight → Data → Decision → Information",
          "Information → Decision → Data → Insight",
        ],
        correctIndex: 1,
        explanation:
          "Raw data becomes organised information, then insight, then an owned decision.",
      },
      {
        id: "q4",
        question: "In this pathway, what is the Business Analyst’s role with Generative AI?",
        options: [
          "Accept every fluent AI claim without checking evidence",
          "Own problem framing and judgment while using AI to accelerate drafts",
          "Delete all dashboards permanently",
          "Only format fonts and colours",
        ],
        correctIndex: 1,
        explanation:
          "AI accelerates analysis drafts; BA still owns framing, verification, and recommendations.",
      },
    ],
  },
  "mba-d1-h1-t3": {
    topicId: "mba-d1-h1-t3",
    title: "Quick check: Four types of analytics",
    questions: [
      {
        id: "q1",
        question: "Which analytics type best matches: “Dairy sales fell 8% MoM; South stores weakest”?",
        options: ["Prescriptive", "Descriptive", "A legal opinion", "Deep learning training"],
        correctIndex: 1,
        explanation: "Summarising what happened is descriptive analytics.",
      },
      {
        id: "q2",
        question: "Which analytics type best matches testing whether Sunday stockouts caused the sales drop?",
        options: ["Descriptive reporting only", "Diagnostic analytics", "Logo redesign", "Payroll processing"],
        correctIndex: 1,
        explanation: "Explaining why something happened is diagnostic analytics.",
      },
      {
        id: "q3",
        question: "Which analytics type best matches: “If stockouts continue, dairy may fall another 5–7% next month”?",
        options: ["Prescriptive only", "Predictive (scenario/outlook)", "A warehouse blueprint", "HR policy drafting"],
        correctIndex: 1,
        explanation: "Estimating what might happen next is predictive analytics.",
      },
      {
        id: "q4",
        question: "Which analytics type best matches: “Restock Sundays; run a targeted weekend offer; review in 14 days”?",
        options: ["Descriptive", "Prescriptive", "A database backup", "A branding colour test"],
        correctIndex: 1,
        explanation: "Recommending owned actions is prescriptive analytics.",
      },
      {
        id: "q5",
        question: "Why is jumping straight to prescriptions risky?",
        options: [
          "Because actions never matter in business",
          "Because you may spend money without understanding what happened or why",
          "Because Excel cannot store numbers",
          "Because CEOs dislike recommendations",
        ],
        correctIndex: 1,
        explanation:
          "Responsible practice builds at least light descriptive + diagnostic evidence before acting.",
      },
    ],
  },
  "mba-d1-h1-t4": {
    topicId: "mba-d1-h1-t4",
    title: "Quick check: Analytics across functions",
    questions: [
      {
        id: "q1",
        question: "What should a strong departmental analytics question always connect to?",
        options: [
          "A decision owner and a KPI",
          "A random hashtag",
          "Only the IT helpdesk password",
          "A stock ticker you follow for fun",
        ],
        correctIndex: 0,
        explanation:
          "Questions without owners and KPIs stall as slide decorations.",
      },
      {
        id: "q2",
        question: "When Marketing, Finance, and Supply Chain disagree on declining sales, what should BA do first?",
        options: [
          "Pick the loudest department",
          "Establish shared facts and a common scorecard before debating solutions",
          "Delete all data",
          "Ignore finance permanently",
        ],
        correctIndex: 1,
        explanation:
          "Shared facts stop teams from arguing about whose spreadsheet is “true.”",
      },
      {
        id: "q3",
        question: "Which is the best example of a Finance analytics question for FreshBasket?",
        options: [
          "Which wallpaper looks nicest in the cafe?",
          "Which categories destroy margin after discounts and wastage?",
          "What time do staff prefer pizza?",
          "Which font should the logo use?",
        ],
        correctIndex: 1,
        explanation:
          "Finance questions centre on profitability, cost, and margin trade-offs.",
      },
      {
        id: "q4",
        question: "Where should a customer complaint about “items missing on Sunday shelves” primarily route?",
        options: [
          "Only the branding agency",
          "Operations / Supply Chain with Stores in support",
          "Only the legal department forever",
          "Nobody — ignore customers",
        ],
        correctIndex: 1,
        explanation:
          "Shelf availability is primarily an operations/supply and store execution issue.",
      },
      {
        id: "q5",
        question: "Why should recommendations include a “do not do yet” item in cross-functional plans?",
        options: [
          "To waste meeting time",
          "To force restraint and prevent unsafe shortcuts like blind cost cuts",
          "Because CEOs dislike all actions",
          "Because KPIs are unrelated to decisions",
        ],
        correctIndex: 1,
        explanation:
          "Naming paused actions protects the company from premature, high-harm moves.",
      },
    ],
  },
  "mba-d1-h1-t5": {
    topicId: "mba-d1-h1-t5",
    title: "Quick check: AI vocabulary for leaders",
    questions: [
      {
        id: "q1",
        question: "How is Machine Learning best described for business leaders?",
        options: [
          "Systems that learn patterns from historical data",
          "Only robots that walk in warehouses",
          "A type of printer ink",
          "A spreadsheet formula that never changes",
        ],
        correctIndex: 0,
        explanation:
          "ML learns patterns from data for tasks like forecasting or scoring.",
      },
      {
        id: "q2",
        question: "Detecting empty shelves from store camera images is closest to which AI category?",
        options: [
          "Only payroll processing",
          "A deep learning / computer-vision style use case",
          "A logo colour preference survey",
          "Income-tax filing",
        ],
        correctIndex: 1,
        explanation:
          "Image-heavy shelf checks are a classic deep-learning style business application.",
      },
      {
        id: "q3",
        question: "What do Large Language Models primarily power?",
        options: [
          "Only factory motors",
          "Text assistants that draft, summarise, and dialogue (like ChatGPT)",
          "Petrol pumps",
          "CCTV cables themselves",
        ],
        correctIndex: 1,
        explanation:
          "LLMs underpin generative text assistants used for drafting and summarising.",
      },
      {
        id: "q4",
        question: "Which attitude toward Generative AI is professionally safest?",
        options: [
          "Accept every fluent answer as audit-ready truth",
          "Treat outputs as drafts that need verification and judgment",
          "Ban all dashboards forever",
          "Replace all humans in payroll immediately",
        ],
        correctIndex: 1,
        explanation:
          "Fluency is not truth — managers must verify before acting.",
      },
      {
        id: "q5",
        question: "Before approving an AI pilot, what should a leader clarify?",
        options: [
          "Only the logo redesign budget",
          "Decision improved, data owner, risk if wrong, and success KPI",
          "Whether employees like pizza",
          "Nothing — approve all AI ideas instantly",
        ],
        correctIndex: 1,
        explanation:
          "Sponsorship needs decision clarity, data ownership, risk thinking, and measurable success.",
      },
    ],
  },
  "mba-d1-h1-t6": {
    topicId: "mba-d1-h1-t6",
    title: "Quick check: AI roles in the enterprise",
    questions: [
      {
        id: "q1",
        question: "Who should make final hiring decisions when an AI HR Recruiter is used?",
        options: [
          "A random chatbot",
          "Human managers accountable for fairness",
          "Social media polls",
          "Coin flips",
        ],
        correctIndex: 1,
        explanation:
          "Sensitive HR outcomes require human accountability.",
      },
      {
        id: "q2",
        question: "What should every useful AI role card include?",
        options: [
          "Only the logo colour",
          "Goal, inputs, outputs, risks, human approval rule, and a KPI",
          "A list of office snacks",
          "Nothing — cards are optional decoration",
        ],
        correctIndex: 1,
        explanation:
          "Scoped AI roles need clear goals, inputs, outputs, risks, approvals, and success measures.",
      },
      {
        id: "q3",
        question: "Why is an AI Financial Analyst especially risky without human controls?",
        options: [
          "Finance numbers can affect boards, audits, and compliance",
          "Finance is unrelated to business",
          "AI cannot write paragraphs",
          "Supermarkets do not use money",
        ],
        correctIndex: 0,
        explanation:
          "Financial outputs touch governance and compliance — humans must stay in the loop.",
      },
      {
        id: "q4",
        question: "When Marketing, Finance, and Ops AI drafts conflict, what should the human leader do?",
        options: [
          "Automatically accept the longest draft",
          "Establish shared facts, then sequence a plan that manages trade-offs",
          "Delete all three functions",
          "Ignore data forever",
        ],
        correctIndex: 1,
        explanation:
          "Humans resolve trade-offs; they do not rubber-stamp conflicting AI proposals.",
      },
      {
        id: "q5",
        question: "Which best matches the AI-as-assistant working rule?",
        options: [
          "AI makes irreversible decisions; humans only watch",
          "AI drafts and prepares options; humans set goals, verify, and own outcomes",
          "Humans must never use AI",
          "AI replaces the board of directors",
        ],
        correctIndex: 1,
        explanation:
          "AI accelerates drafting; humans retain goal-setting, verification, and accountability.",
      },
    ],
  },
  "mba-d1-h1-t7": {
    topicId: "mba-d1-h1-t7",
    title: "Quick check: AI as business analyst (live demo)",
    questions: [
      {
        id: "q1",
        question: "What typically improves when you upgrade from a weak to a strong business prompt?",
        options: [
          "Structure, hypotheses, evidence needs, ownership, and restraint",
          "Only font size",
          "The café Wi-Fi password",
          "Nothing — prompts never matter",
        ],
        correctIndex: 0,
        explanation:
          "Strong prompts force analytical structure rather than generic tips.",
      },
      {
        id: "q2",
        question: "Why does asking “what would you NOT do yet” help?",
        options: [
          "It trains AI (and you) to avoid reckless recommendations",
          "It deletes the spreadsheet",
          "It guarantees perfect forecasts forever",
          "It removes the need for managers",
        ],
        correctIndex: 0,
        explanation:
          "Restraint and missing-data awareness improve consulting quality.",
      },
      {
        id: "q3",
        question: "In the UrbanSpice demo, revenue roughly flat while profit falls suggests you investigate what?",
        options: [
          "Only logo redesign",
          "Cost, mix, discounts, wastage, and labour — not only marketing spend",
          "Nothing at all",
          "Only the music playlist",
        ],
        correctIndex: 1,
        explanation:
          "Profit pressure with soft revenue points to cost and mix issues, not ads alone.",
      },
      {
        id: "q4",
        question: "Why should weak and strong prompts be run in separate chats?",
        options: [
          "Because ChatGPT charges more for one chat",
          "To avoid weak-chat memory polluting the strong analysis",
          "Because restaurants forbid long chats",
          "It is never necessary",
        ],
        correctIndex: 1,
        explanation:
          "Separate chats keep the strong prompt from inheriting vague prior context.",
      },
      {
        id: "q5",
        question: "What is the main bridge from UrbanSpice to FreshBasket?",
        options: [
          "They sell identical menus",
          "Same analyst method: hypotheses → data → owners → NOT-YET → decision",
          "They share the same building",
          "No connection exists",
        ],
        correctIndex: 1,
        explanation:
          "The prompting and investigation method transfers across retail cases.",
      },
    ],
  },
  "mba-d1-lab-t1": {
    topicId: "mba-d1-lab-t1",
    title: "Quick check: Superstore Excel lab",
    questions: [
      {
        id: "q1",
        question: "What should you do before asking ChatGPT for Superstore insights?",
        options: [
          "Build formulas, pivots, and charts in Excel first",
          "Only paste the raw 10,000-row file with “find insights”",
          "Skip cleaning dates and margins",
          "Invent region totals without a pivot",
        ],
        correctIndex: 0,
        explanation:
          "ChatGPT summarises your Excel evidence — it does not replace the analysis.",
      },
      {
        id: "q2",
        question: "How is Profit Margin best created in Excel?",
        options: [
          "A helper formula such as Profit ÷ Sales",
          "A random text label",
          "Deleting the Profit column",
          "Only a pie chart with no numbers",
        ],
        correctIndex: 0,
        explanation: "Formulas create reusable fields for pivots and KPIs.",
      },
      {
        id: "q3",
        question: "What does a good Region × Category cut use?",
        options: [
          "A PivotTable (and usually a chart)",
          "One cell typed by hand with no filter",
          "AI guessing without your pivot",
          "Hiding the Category column forever",
        ],
        correctIndex: 0,
        explanation: "Pivots are the standard Excel tool for categorical cuts.",
      },
      {
        id: "q4",
        question: "Where should the ChatGPT Superstore summary go?",
        options: [
          "Google Doc under Day 1 → Superstore",
          "Nowhere — delete it after reading",
          "Only in a private chat with no record",
          "In the Returns sheet as a formula",
        ],
        correctIndex: 0,
        explanation: "Lab evidence lives in your Day 1 Google Doc.",
      },
    ],
  },
  "mba-d1-lab-t2": {
    topicId: "mba-d1-lab-t2",
    title: "Quick check: Online Retail Excel lab",
    questions: [
      {
        id: "q1",
        question: "How is line revenue on invoice data usually calculated?",
        options: [
          "Quantity × UnitPrice",
          "CustomerID ÷ Country",
          "StockCode only",
          "InvoiceDate as text",
        ],
        correctIndex: 0,
        explanation: "LineRevenue is the core transactional formula.",
      },
      {
        id: "q2",
        question: "How can you often recognise cancelled invoices in Online Retail data?",
        options: [
          "Start with “C” or show negative quantities",
          "Have no InvoiceNo ever",
          "Are always blank Description only",
          "Cannot be flagged in Excel",
        ],
        correctIndex: 0,
        explanation: "Flag returns before celebrating gross revenue.",
      },
      {
        id: "q3",
        question: "How are monthly revenue trends best shown in Excel?",
        options: [
          "A PivotTable by month plus a line chart",
          "A single AVERAGE of UnitPrice only",
          "Deleting InvoiceDate",
          "Asking ChatGPT without Excel",
        ],
        correctIndex: 0,
        explanation: "Pivot + line chart communicates seasonality clearly.",
      },
    ],
  },
  "mba-d1-lab-t3": {
    topicId: "mba-d1-lab-t3",
    title: "Quick check: Telco Churn Excel lab",
    questions: [
      {
        id: "q1",
        question: "Why does a ChurnFlag of 1/0 help in Excel analysis?",
        options: [
          "Pivot Average of ChurnFlag equals churn rate",
          "Excel cannot count Yes/No another way",
          "It deletes stayers automatically",
          "It replaces MonthlyCharges",
        ],
        correctIndex: 0,
        explanation: "0/1 flags make rates easy in PivotTables.",
      },
      {
        id: "q2",
        question: "What is TenureBand an example of?",
        options: [
          "Turning a numeric field into categories with IF/IFS formulas",
          "A Power BI-only feature unavailable in Excel",
          "Deleting tenure",
          "A ChatGPT hallucination requirement",
        ],
        correctIndex: 0,
        explanation: "Banding is a classic Excel formula technique.",
      },
      {
        id: "q3",
        question: "What should ChatGPT do in this Telco lab?",
        options: [
          "Summarise your pivots/charts into a retention brief",
          "Invent churn rates you never calculated",
          "Replace Contract with random text",
          "Ignore PaymentMethod findings",
        ],
        correctIndex: 0,
        explanation: "AI narrative follows Excel evidence.",
      },
    ],
  },
  "mba-d1-lab-t4": {
    topicId: "mba-d1-lab-t4",
    title: "Quick check: HR Attrition Excel lab",
    questions: [
      {
        id: "q1",
        question: "How is attrition by JobRole typically built in Excel?",
        options: [
          "A PivotTable and a ranking chart",
          "Only a pie of EmployeeNumber",
          "Deleting Department",
          "No formulas ever",
        ],
        correctIndex: 0,
        explanation: "Role-level pivots surface where people leave.",
      },
      {
        id: "q2",
        question: "What Excel approach compares OverTime Yes vs No attrition?",
        options: [
          "Pivot churn/attrition rate by OverTime plus a compare chart",
          "Hiding OverTime",
          "Average of EmployeeCount only",
          "AI inventing overtime hours",
        ],
        correctIndex: 0,
        explanation: "OverTime is a high-signal categorical cut.",
      },
    ],
  },
  "mba-d1-lab-t5": {
    topicId: "mba-d1-lab-t5",
    title: "Quick check: Hotel Bookings & Day 1 wrap",
    questions: [
      {
        id: "q1",
        question: "How do you calculate cancellation rate when is_canceled is 0/1?",
        options: [
          "The average of is_canceled",
          "Always equal to ADR",
          "Impossible in Excel",
          "lead_time ÷ adults",
        ],
        correctIndex: 0,
        explanation: "Average of a binary field is the rate.",
      },
      {
        id: "q2",
        question: "Which Excel techniques does LeadBand analysis mix?",
        options: [
          "IFS/IF formulas, a PivotTable, and a chart",
          "Only ChatGPT with no Excel",
          "Deleting lead_time",
          "A single SUM of hotel names",
        ],
        correctIndex: 0,
        explanation: "Day 1 labs deliberately mix formulas, pivots, and charts.",
      },
      {
        id: "q3",
        question: "What should the Day 1 wrap prompt use as input?",
        options: [
          "Use short bullets from all five Excel labs you actually completed",
          "Invent five datasets you never opened",
          "Skip the Google Doc",
          "Replace Excel with only screenshots of websites",
        ],
        correctIndex: 0,
        explanation: "Synthesis is grounded in your lab evidence pack.",
      },
    ],
  },
  "mba-d1-lab-t6": {
    topicId: "mba-d1-lab-t6",
    title: "Quick check: Retail Power Pivot final project",
    questions: [
      {
        id: "q1",
        question: "In this final project, which table is the main sales-line fact for Net Sales?",
        options: [
          "order_items",
          "brands only",
          "stocks only",
          "categories only",
        ],
        correctIndex: 0,
        explanation:
          "Net Sales is calculated at order_items grain: quantity × list_price × (1 − discount).",
      },
      {
        id: "q2",
        question: "What is the correct Power Pivot relationship direction for products and order_items?",
        options: [
          "products[product_id] → order_items[product_id] (one product, many line items)",
          "order_items → products as many-to-many with no keys",
          "brands → stocks only",
          "No relationship is needed if you use VLOOKUP everywhere",
        ],
        correctIndex: 0,
        explanation: "Product is the dimension; order_items is the fact.",
      },
      {
        id: "q3",
        question: "How should Net Sales be defined in DAX for this model?",
        options: [
          "SUMX of quantity × list_price × (1 − discount) on order_items",
          "SUM of stocks[quantity] only",
          "COUNT of brand_name",
          "AVERAGE of zip_code",
        ],
        correctIndex: 0,
        explanation: "Line net sales applies discount at the item level.",
      },
      {
        id: "q4",
        question: "Why keep Inventory Units separate from Net Sales pivots?",
        options: [
          "stocks is inventory quantity, not revenue — mixing them confuses the dashboard story",
          "Inventory is always equal to Net Sales",
          "Power Pivot cannot store stocks",
          "Stores have no stock rows",
        ],
        correctIndex: 0,
        explanation: "Inventory and sales answer different questions.",
      },
      {
        id: "q5",
        question: "What belongs on the final Dashboard sheet?",
        options: [
          "KPI strip, key charts/pivots, and slicers connected to the Data Model",
          "Only the raw CSV text with no visuals",
          "A single cell with the word Dashboard",
          "Passwords for the ERP system",
        ],
        correctIndex: 0,
        explanation: "An executive dashboard combines KPIs, visuals, and interactive filters.",
      },
    ],
  },
  "mba-d1-h2-t1": {
    topicId: "mba-d1-h2-t1",
    title: "Quick check: How AI reads prompts",
    questions: [
      {
        id: "q1",
        question: "How does Generative AI mainly respond to a prompt?",
        options: [
          "Logging into your company’s ERP automatically",
          "Following the role, facts, deliverable shape, and constraints in your brief",
          "Always choosing the largest ad budget",
          "Ignoring context and only counting words",
        ],
        correctIndex: 1,
        explanation:
          "AI uses what you specify — role, context, format, and guardrails — not secret store systems.",
      },
      {
        id: "q2",
        question: "Which is the weakest workplace prompt?",
        options: [
          "A role + FreshBasket context + numbered output + NOT-YET constraints",
          "“Sales are down. What should we do?”",
          "A request for hypotheses with data needs and owners",
          "A CEO memo outline with sections named in advance",
        ],
        correctIndex: 1,
        explanation:
          "Vague one-liners produce generic advice with no ownership or evidence discipline.",
      },
      {
        id: "q3",
        question: "Which of these is a reliable warning sign in an AI answer?",
        options: [
          "It asks what data is still missing",
          "It invents precise numbers you never provided",
          "It lists competing hypotheses",
          "It separates facts from assumptions",
        ],
        correctIndex: 1,
        explanation:
          "Fake precision without source data is a classic hallucination risk.",
      },
      {
        id: "q4",
        question: "Why run weak and strong prompts in separate chats?",
        options: [
          "So chat history from the weak run does not bias the strong run",
          "Because AI only works once per day",
          "To delete Excel afterwards",
          "Because strong prompts must be handwritten on paper only",
        ],
        correctIndex: 0,
        explanation:
          "Prior weak answers can stick in context and dilute a better brief.",
      },
    ],
  },
  "mba-d1-h2-t2": {
    topicId: "mba-d1-h2-t2",
    title: "Quick check: Business Prompt Framework",
    questions: [
      {
        id: "q1",
        question: "What are the five blocks of the business prompt framework?",
        options: [
          "Fonts · Colours · Emojis · Hashtags · GIFs",
          "Role · Context · Goal · Format · Constraints",
          "Python · Excel · SQL · PowerPoint · Email",
          "Revenue · Cost · Profit · Tax · Dividend",
        ],
        correctIndex: 1,
        explanation:
          "R-C-G-F-C is the reusable brief structure for business prompting.",
      },
      {
        id: "q2",
        question: "What does changing only the Role (while keeping facts fixed) mainly affect?",
        options: [
          "Which lens and trade-offs AI emphasises",
          "Whether the CSV file deletes itself",
          "The company’s legal entity name",
          "Internet Wi-Fi speed",
        ],
        correctIndex: 0,
        explanation:
          "Role sets stance — Marketing optimism vs Finance caution vs skeptical analyst.",
      },
      {
        id: "q3",
        question: "Which line best belongs in Constraints?",
        options: [
          "“Act as a retail category manager.”",
          "“Do not invent margin figures; include a NOT-YET list.”",
          "“Prepare a Friday category-review pack.”",
          "“FreshBasket is a grocery retailer in India.”",
        ],
        correctIndex: 1,
        explanation:
          "Constraints block invention and reckless actions; the other lines are Role, Goal, or Context.",
      },
      {
        id: "q4",
        question: "Why is “Help with promotions” a weak Goal?",
        options: [
          "It names a clear Friday decision and owners",
          "It does not specify the decision or deliverable needed",
          "It is too long for ChatGPT",
          "It includes too many constraints already",
        ],
        correctIndex: 1,
        explanation:
          "Goals should name a decision or document — not a vague hope.",
      },
    ],
  },
  "mba-d1-h2-t3": {
    topicId: "mba-d1-h2-t3",
    title: "Quick check: Live prompt demos",
    questions: [
      {
        id: "q1",
        question: "What should a strong Marketing campaign prompt mainly produce?",
        options: [
          "Only random taglines with no KPIs",
          "A usable brief: objective, offer options, channels, KPIs, and do-nots",
          "Invented competitor market-share charts",
          "A permanent store closure plan",
        ],
        correctIndex: 1,
        explanation:
          "Campaign prompts succeed when they create a reviewable brief, not vibe lists.",
      },
      {
        id: "q2",
        question: "In an HR policy prompt, what is often the most important Constraint?",
        options: [
          "Invent detailed labour-law sections confidently",
          "Do not invent legal clauses — mark items to verify with counsel",
          "Recommend firing 20% of staff immediately",
          "Skip escalation paths to keep the draft short",
        ],
        correctIndex: 1,
        explanation:
          "Legal humility prevents overconfident fabricated policy text.",
      },
      {
        id: "q3",
        question: "What should a useful SWOT cell do?",
        options: [
          "Use only buzzwords with no evidence labels",
          "Tag bullets as Evidence / Assumption / Unknown",
          "Always invent precise market-share percentages",
          "Avoid listing strategic questions still open",
        ],
        correctIndex: 1,
        explanation:
          "Evidence tags turn SWOT from slogan soup into decision support.",
      },
      {
        id: "q4",
        question: "What does a strong strategy prompt force the model to produce?",
        options: [
          "One vague vision paragraph with no trade-offs",
          "Multiple options with risks, 90-day moves, and a NOT-YET list",
          "Only a mobile-app recommendation",
          "Deletion of all KPIs",
        ],
        correctIndex: 1,
        explanation:
          "Strategy work is option design and restraint — not a single slogan.",
      },
    ],
  },
  "mba-d1-h2-t4": {
    topicId: "mba-d1-h2-t4",
    title: "Quick check: Prompt improvement workshop",
    questions: [
      {
        id: "q1",
        question: "How does the prompt improvement loop start?",
        options: [
          "Drafting the vague ask, then scoring which R-C-G-F-C blocks are missing",
          "Deleting ChatGPT forever",
          "Only using emojis as prompts",
          "Skipping Constraints because they slow people down",
        ],
        correctIndex: 0,
        explanation:
          "Honest weak drafts reveal gaps; then you rewrite with all five blocks.",
      },
      {
        id: "q2",
        question: "What does a prompt usually lack if it is not ready for decisions?",
        options: [
          "Constraints (what not to invent / not to recommend yet)",
          "At least twelve hashtags",
          "A demand to invent precise market-share figures",
          "A request to skip owners and KPIs",
        ],
        correctIndex: 0,
        explanation:
          "Constraints protect the business from confident hallucination and reckless action.",
      },
      {
        id: "q3",
        question: "Why keep a Prompt Upgrade Library?",
        options: [
          "Winning prompts compound and speed later work",
          "Libraries replace all business judgment",
          "So you never need Format sections again",
          "Because weak prompts should be reused forever unchanged",
        ],
        correctIndex: 0,
        explanation:
          "Saved strong prompts become reusable assets across days and functions.",
      },
    ],
  }
};
