import type { TopicLesson } from "@/lib/types";

const CHATGPT_URL = "https://chatgpt.com/";

/**
 * Day 2 lessons — Market Intelligence & Automated Insights
 * Content quality aligned with Day 1. Checklist only when real practice is needed.
 * No note-copying tasks. ChatGPT steps use direct copy-ready prompts.
 */
export const mbaAiDay2Lessons: Record<string, TopicLesson> = {
  "mba-d2-t1": {
    topicId: "mba-d2-t1",
    intro:
      "Day 1 taught you to analyse FreshBasket’s own sales tables. Day 2 opens the wider battlefield: reviews, competitor prices, category trends, and business news. Leaders who only watch internal dashboards discover damage late — after customers and rivals have already moved.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Why internal dashboards are not enough",
      },
      {
        type: "paragraph",
        content:
          "A POS report can say “Sunday revenue is stable” while Google reviews scream “no milk by noon.” The dashboard did not lie — it measured sales. It simply cannot see trust collapsing in public. That signal lives outside the company.",
      },
      {
        type: "paragraph",
        content:
          "Same story on pricing: margin sheets look “healthy” while Blinkit or a local chain undercuts Personal Care by ₹20–40. Shoppers compare on their phones. Share erodes before your weekly review catches the cliff.",
      },
      {
        type: "visual",
        diagram: {
          title: "What each view can and cannot see",
          variant: "compare",
          nodes: [
            {
              id: "in",
              label: "Internal view",
              sublabel: "Sales · margin · stock · roster — excellent for what happened inside",
            },
            {
              id: "ex",
              label: "External view",
              sublabel: "Reviews · rival prices · news · social — early warnings of why customers leave",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "2) Why businesses need external market data",
      },
      {
        type: "list",
        items: [
          "Customers talk publicly long before they appear as “lost sales” in Excel.",
          "Competitors change prices and offers weekly — sometimes daily on quick-commerce apps.",
          "Category tastes shift (healthy snacks, private label, smaller packs) faster than annual plans.",
          "Policy and macro news (GST, labour, inflation) reshape cost and demand assumptions.",
          "Brand reputation compounds: one viral complaint can outrun a month of ads.",
        ],
      },
      {
        type: "tip",
        content:
          "Market intelligence is not “random Googling.” It is a managed habit: pick sources → capture regularly → theme the signal → assign an owner → change a decision.",
      },
      {
        type: "heading",
        content: "3) The external radar (five signal types)",
      },
      {
        type: "visual",
        diagram: {
          title: "FreshBasket external radar",
          variant: "stack",
          nodes: [
            {
              id: "rev",
              label: "Customer reviews",
              sublabel: "Google / app reviews — pain points, praise, delivery and quality heat",
            },
            {
              id: "price",
              label: "Competitor prices & offers",
              sublabel: "Blinkit, BigBasket, local chains — basket gaps and promo wars",
            },
            {
              id: "trend",
              label: "Category & market trends",
              sublabel: "What demand is rising: organic, ready-to-cook, private label…",
            },
            {
              id: "news",
              label: "Industry & policy news",
              sublabel: "Regulation, inflation, new dark stores, supply shocks",
            },
            {
              id: "social",
              label: "Social / web chatter",
              sublabel: "Campaign reactions and brand talk — use as signal, not as gospel",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "4) FreshBasket blind spots (keep these stories)",
      },
      {
        type: "list",
        items: [
          "Dairy sales look fine + reviews mention spoilage → quality risk Finance has not priced.",
          "South same-store soft + rival dark store nearby → share loss, not “lazy staff.”",
          "Heavy promos + public posts call discounts “fake” → trust damage Marketing must fix.",
          "Inflation / rate headlines → private-label and pack-size opportunities Category can test.",
        ],
      },
      {
        type: "heading",
        content: "5) From signal to ownership",
      },
      {
        type: "paragraph",
        content:
          "A review pile with no owner is entertainment. A competitor price cut with no Category owner becomes a panic discount later. For every important external signal, name: who captures it, who judges quality, and who can change a decision within 30 days.",
      },
      {
        type: "visual",
        diagram: {
          title: "Healthy market-intel loop",
          variant: "stack",
          nodes: [
            {
              id: "s1",
              label: "Capture",
              sublabel: "Reviews · prices · news on a fixed cadence",
            },
            {
              id: "s2",
              label: "Theme",
              sublabel: "What is the pattern — not one angry comment",
            },
            {
              id: "s3",
              label: "Own",
              sublabel: "Marketing / Ops / Category / Finance / Store",
            },
            {
              id: "s4",
              label: "Decide",
              sublabel: "Test, match, ignore, or escalate — with a review date",
            },
          ],
        },
      },
    ],
    keyTakeaways: [
      "Internal dashboards miss public and competitive warnings.",
      "Five external signals: reviews, competitor prices, trends, news, social.",
      "Market intelligence needs cadence, themes, owners, and decisions — not browsing.",
    ],
  },

  "mba-d2-t2": {
    topicId: "mba-d2-t2",
    intro:
      "Internal and external data answer different questions. Mix them up and you assign the wrong owner, ask the wrong system, or wait for a report that will never contain the answer. This topic locks the split — then you practise classifying live FreshBasket scenarios in ChatGPT.",
    blocks: [
      {
        type: "heading",
        content: "1) Internal data — company systems",
      },
      {
        type: "paragraph",
        content:
          "Internal data is produced and stored by FreshBasket. If your IT / Ops / Finance systems are the source of truth, it is internal.",
      },
      {
        type: "list",
        items: [
          "Sales / POS sell-out and bills",
          "App orders, loyalty, CRM",
          "Finance P&L, margin, expenses",
          "Inventory, PO, supplier fill rates",
          "HR roster, overtime, attendance",
          "Store ops logs: waste, shrink, queue notes entered by staff",
        ],
      },
      {
        type: "heading",
        content: "2) External data — outside the four walls",
      },
      {
        type: "paragraph",
        content:
          "External data is created by customers, competitors, media, regulators, or the broader market. FreshBasket can collect it — but does not “own” the original generation.",
      },
      {
        type: "list",
        items: [
          "Google / Play Store / social reviews and ratings",
          "Competitor price lists, leaflets, app prices",
          "Syndicated market / category research",
          "Business news, RBI / policy updates",
          "Public festive calendars and weather (demand drivers)",
          "Influencer or community chatter (noisy — handle with care)",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "Same business pain · different data world",
          variant: "compare",
          nodes: [
            {
              id: "q1",
              label: "Internal question",
              sublabel: "“What did South sell last Sunday?” → POS / sales tables",
            },
            {
              id: "q2",
              label: "External question",
              sublabel: "“Why are South shoppers angry online?” → reviews + rival offers",
            },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Classification rule: If FreshBasket’s own system created the record → Internal. If a customer, competitor, newspaper, government feed, or public site created it → External.",
      },
      {
        type: "heading",
        content: "3) Ownership & quality risks",
      },
      {
        type: "list",
        items: [
          "Internal quality risks: missing SKUs, late posting, wrong store codes.",
          "External quality risks: fake reviews, stale scraped prices, clickbait news.",
          "Capture owner ≠ Decision owner. Marketing may monitor reviews; Ops may fix queues.",
          "Weekly ritual beats heroic one-off searches before a board panic.",
        ],
      },
      {
        type: "heading",
        content: "4) Practice — classify with ChatGPT",
      },
      {
        type: "paragraph",
        content:
          "Use the checklist on the right. Copy each prompt as written. You are training classification judgment — not writing notes.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Sort 12 FreshBasket sources",
            description:
              "Force a clean Internal vs External sort with owners.",
            link: { label: "Open ChatGPT", url: CHATGPT_URL },
            commands: [
              "Act as a retail data governance lead for FreshBasket SuperMarket (India grocery).",
              "Classify each item as Internal or External. Then add: Capture owner | Decision owner | One quality risk.",
              "Items:",
              "1) POS daily sales",
              "2) Google review: “empty milk aisle Sunday”",
              "3) Staff overtime from payroll",
              "4) Blinkit price for Full Cream Milk 1L",
              "5) GST rate-change news article",
              "6) Loyalty CRM purchase history",
              "7) Instagram comments calling a FreshBasket promo “fake discount”",
              "8) Purchase order to a dairy supplier",
              "9) Competitor weekend leaflet PDF found outside a rival store",
              "10) Store waste log entered by the manager",
              "11) Nielsen-style category growth report for snacks",
              "12) Weather forecast used for ice-cream demand planning",
              "Output as a table. Do not invent extra sources.",
            ],
          },
          {
            title: "Lab B — Catch misclassification",
            description:
              "Train yourself to spot wrong Internal/External labels.",
            commands: [
              "Here is a junior analyst’s classification for FreshBasket. Find every mistake and correct it:",
              "- Google reviews = Internal (because the store manager screenshots them)",
              "- Competitor app prices = Internal (because Category downloads them into Excel)",
              "- POS sales = External (because customers create the demand)",
              "- RBI news = Internal Finance data",
              "- Payroll OT = External labour market data",
              "For each mistake: why it is wrong + the correct label + one sentence on why the label matters for ownership.",
            ],
          },
          {
            title: "Lab C — Monday review agenda",
            description:
              "Turn classification into an operating rhythm.",
            commands: [
              "Design a 20-minute Monday market-check for FreshBasket’s weekly business review.",
              "Include exactly 5 external checks.",
              "For each check: source type | who presents (2 minutes) | decision question it supports | what “good enough data” means.",
              "Exclude internal POS deep-dives (those belong elsewhere).",
              "Keep it practical for grocery retail India. No buzzwords.",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "Internal = company systems; External = market / public / competitor / customer-generated.",
      "Downloading an external signal into Excel does not make it “internal.”",
      "Classification exists so capture owners and decision owners stay clear.",
    ],
  },

  "mba-d2-t3": {
    topicId: "mba-d2-t3",
    intro:
      "External facts create value only when they travel the full path: Data → Information → Insight → Decision. The same chain you used on Day 1 now runs on reviews, rival prices, and news — with famous retail/consumer patterns mapped onto FreshBasket.",
    blocks: [
      {
        type: "heading",
        content: "1) The market-intelligence chain",
      },
      {
        type: "paragraph",
        content:
          "Raw reviews are not a strategy. A CEO quote is not an insight. A slogan is not a decision. Force every market signal through four stages before you spend money or change pricing.",
      },
      {
        type: "visual",
        diagram: {
          title: "Data → Information → Insight → Decision",
          variant: "stack",
          nodes: [
            {
              id: "d",
              label: "Data",
              sublabel: "Raw texts, price points, headlines — messy",
            },
            {
              id: "inf",
              label: "Information",
              sublabel: "Organised fact: “Most evening reviews at Store X mention queues”",
            },
            {
              id: "ins",
              label: "Insight",
              sublabel: "Meaning: peak-hour staffing is damaging ratings and repeat visits",
            },
            {
              id: "dec",
              label: "Decision",
              sublabel: "Owned action: 7-day extra billing-lane pilot — Ops owns — review Friday",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Data without organisation is noise.",
          "Information without meaning is a spreadsheet.",
          "Insight without an owner is a slide.",
          "Decision without a review date is hope.",
        ],
      },
      {
        type: "heading",
        content: "2) How well-known patterns map to FreshBasket",
      },
      {
        type: "list",
        items: [
          "Amazon-style: review themes → product/ops fix → conversion protects itself.",
          "Swiggy-style: partner/store rating pressure → coaching or assortment change.",
          "Flipkart-style: competitor price watch → match, bundle, or private-label move.",
          "Bank-style: macro news → risk and product stance shift.",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "Wrong stop vs right finish",
          variant: "compare",
          nodes: [
            {
              id: "wrong",
              label: "Stops too early",
              sublabel: "“Customers are unhappy” → vague ads / blame → no owner",
            },
            {
              id: "right",
              label: "Finishes the chain",
              sublabel: "Fact → meaning → testable decision with owner and review date",
            },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Boardroom test: Can you name the decision owner and what you will measure in 14–30 days? If not, you are still in the insight theatre.",
      },
      {
        type: "heading",
        content: "3) Practice — run the chain in ChatGPT",
      },
      {
        type: "paragraph",
        content:
          "Copy the prompts on the right. Build full chains for market cases, then stress-test them. Do not stop at slogans.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Queue complaint chain",
            description:
              "Turn a review theme into an owned decision.",
            link: { label: "Open ChatGPT", url: CHATGPT_URL },
            commands: [
              "Act as a FreshBasket store operations analyst (India grocery).",
              "Signal: Multiple Google reviews at FreshBasket Koramangala say “billing slow after 6pm.”",
              "Produce a strict chain:",
              "Data: ...",
              "Information: ...",
              "Insight: ...",
              "Decision: ... (must include owner role + 7–14 day test + success KPI)",
              "NOT-YET: one action you refuse until more evidence arrives",
              "Rules: no invented review percentages; mark assumptions clearly; calm executive tone.",
            ],
          },
          {
            title: "Lab B — Competitor price chain",
            description:
              "Respond to a price attack without panic.",
            commands: [
              "Act as a FreshBasket category manager for Dairy.",
              "Signal: A competitor sells Full Cream Milk 1L ₹5 cheaper across West for 10 days.",
              "Build Data → Information → Insight → Decision.",
              "Decision must include: owner | 14-day test options (match / bundle / ignore / private-label push) | KPI | review date.",
              "Add NOT-YET: block a nationwide permanent price cut until evidence arrives.",
              "Separate facts vs assumptions. No fake market-share %.",
            ],
          },
          {
            title: "Lab C — News / entry threat chain",
            description:
              "Translate a headline into a 30-day strategic test.",
            commands: [
              "Act as strategy advisor to FreshBasket’s CEO.",
              "Signal: News that a quick-commerce player is opening three dark stores within 3 km of your densest South cluster.",
              "Build Data → Information → Insight → Decision for the next 30 days.",
              "Include 3 decision options with trade-offs, then pick one primary path.",
              "Add board questions still open. No buzzword transformation talk. No invented financials.",
            ],
          },
          {
            title: "Lab D — Break weak chains",
            description:
              "Critique incomplete market “insights.”",
            commands: [
              "Critique these three FreshBasket statements. For each, say which chain stage is missing and rewrite a complete Data→Information→Insight→Decision:",
              "1) “Customers are unhappy so we should advertise more.”",
              "2) “Competitors are everywhere so cut all prices 10% tomorrow.”",
              "3) “There is news about inflation so launch an app redesign.”",
              "Be blunt. Demand owners and review dates in every rewrite.",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "Market signals must finish Data → Information → Insight → Decision.",
      "Famous brand patterns still need FreshBasket owners and test windows.",
      "If there is no owner and no review date, you only have a slide.",
    ],
  },

  "mba-d2-t4": {
    topicId: "mba-d2-t4",
    intro:
      "This is Day 2’s live demonstration: ask AI what market intelligence a company must collect before a big launch — then force the same discipline onto FreshBasket. Weak asks get tourist brochures. Strong asks get a collection plan leaders can run.",
    blocks: [
      {
        type: "heading",
        content: "1) What “market intelligence brief” means",
      },
      {
        type: "paragraph",
        content:
          "Before a launch (phone, private-label snack, new city cluster), leadership should know customers, rivals, channels, regulations, and risks. Generative AI can draft the checklist fast — but only if your prompt demands sources, owners, and decisions, not a generic essay.",
      },
      {
        type: "visual",
        diagram: {
          title: "Weak brief vs strong brief",
          variant: "compare",
          nodes: [
            {
              id: "w",
              label: "Weak ask",
              sublabel: "“Tell me about the smartphone market” → vague trends speech",
            },
            {
              id: "s",
              label: "Strong ask",
              sublabel: "What to collect · why · source · owner · decision it unlocks",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "2) Syllabus demo shape (Samsung-style launch)",
      },
      {
        type: "list",
        items: [
          "Customer: needs, unmet pain, willingness to pay signals",
          "Competitor: specs, price bands, offers, review heat",
          "Channel: retail / online / carrier deals",
          "Market: category growth, substitutes, regulation",
          "Risk: supply, brand, pricing war, launch timing",
        ],
      },
      {
        type: "tip",
        content:
          "Transfer rule: whatever you would collect for a smartphone launch, you can collect for a FreshBasket private-label launch or a South-cluster defensive plan — change the nouns, keep the discipline.",
      },
      {
        type: "heading",
        content: "3) Practice — run the live demo in ChatGPT",
      },
      {
        type: "paragraph",
        content:
          "Copy each prompt into ChatGPT. Prefer a new chat for the weak vs strong comparison.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Weak vs strong launch brief",
            description:
              "Feel the difference, then keep the strong structure.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "CHAT 1 — Weak:",
              "What information should Samsung collect before launching a new smartphone?",
              "",
              "CHAT 2 — Strong (new chat):",
              "Act as a market intelligence lead advising Samsung’s India launch team for a new mid-premium smartphone.",
              "Produce a collection brief with a table:",
              "Columns: Intelligence needed | Why it matters | Best source type | Capture owner | Decision it unlocks | Freshness (how often to refresh)",
              "Cover: customers, competitors, pricing, channels, regulation, supply risk, brand/social sentiment.",
              "Add a NOT-YET list: 3 decisions Samsung should not take until named data arrives.",
              "No invented survey percentages. Mark assumptions.",
            ],
            note: "Use two chats so the weak answer does not pollute the strong run.",
          },
          {
            title: "Lab B — Transfer to FreshBasket",
            description:
              "Same method, grocery private-label launch.",
            commands: [
              "Rewrite the strong launch-intelligence brief for FreshBasket SuperMarket (India).",
              "Scenario: launching a private-label Full Cream Milk 1L in West + South in 60 days.",
              "Keep the same table columns: Intelligence needed | Why | Source type | Owner | Decision unlocked | Freshness.",
              "Add competitors to watch: BigBasket, Blinkit, JioMart, strong local kirana.",
              "End with a 120-word CEO note: what we must know in week 1 vs week 4.",
              "No fake market shares.",
            ],
          },
          {
            title: "Lab C — Score & fix gaps",
            description:
              "Force quality control on the FreshBasket brief.",
            commands: [
              "Score the FreshBasket brief you just wrote 1–5 on: Coverage, Actionability, Ownership clarity, Evidence discipline, Restraint.",
              "Then rewrite only the weakest two rows of the table.",
              "Finally list 5 data items still missing before any national ad spend on the private-label milk.",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "A market intelligence brief is a collection plan — not a trend essay.",
      "Strong prompts demand sources, owners, decisions, and NOT-YET restraint.",
      "The same brief method transfers from electronics launches to FreshBasket grocery moves.",
    ],
  },

  "mba-d2-t5": {
    topicId: "mba-d2-t5",
    intro:
      "Competitor intelligence is comparative, not gossipy. FreshBasket must watch price, offers, ratings, and delivery promises against BigBasket, Blinkit, and JioMart — then decide: match, bundle, ignore, or differentiate. You will use a sample price sheet plus direct ChatGPT prompts.",
    blocks: [
      {
        type: "heading",
        content: "1) Why companies monitor competitors",
      },
      {
        type: "list",
        items: [
          "Price gaps silently move baskets — especially milk, atta, beverages.",
          "Offer design (bundles, lightning deals) can beat a flat “₹X off.”",
          "Ratings and delivery promises shape convenience expectations.",
          "Strengths/weaknesses tell you where NOT to fight (e.g. 10-minute delivery) and where to win (freshness, trust, store experience).",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "Compare on purpose",
          variant: "stack",
          nodes: [
            { id: "p", label: "Price", sublabel: "Same SKU, same city cluster" },
            { id: "o", label: "Offers", sublabel: "Bundles, wallet cashback, lightning deals" },
            { id: "r", label: "Ratings", sublabel: "App/store perception — noisy but directional" },
            { id: "d", label: "Delivery / availability promise", sublabel: "Speed vs in-store certainty" },
            { id: "s", label: "SWOT + recommendation", sublabel: "Where to fight / where to refuse" },
          ],
        },
      },
      {
        type: "heading",
        content: "2) Download the sample competitor sheet",
      },
      {
        type: "paragraph",
        content:
          "Open the CSV in Sheets/Excel first. Skim milk, shampoo, tomatoes, atta, cola across FreshBasket vs rivals. Then upload (or paste) into ChatGPT for structured comparison.",
      },
      {
        type: "list",
        items: [
          "Columns: competitor, city_cluster, category, product, pack_size, price_inr, offer_flag, offer_text, rating_app, delivery_promise",
          "Treat ratings as directional — not audited science.",
          "Blank offer_text with offer_flag=No means no promo called out on that row.",
        ],
      },
      {
        type: "heading",
        content: "3) Practice — competitor pack with AI",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download competitor prices",
            description: "Save the sample sheet, then open it once in Excel/Sheets.",
            link: {
              label: "day2-competitor-prices.csv",
              url: "/datasets/mba/day2-competitor-prices.csv",
            },
          },
          {
            title: "Lab A — Price gap table",
            description:
              "Build an executive comparison from the file.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "Act as a FreshBasket commercial analyst.",
              "I will provide a competitor price CSV (upload or paste).",
              "[UPLOAD day2-competitor-prices.csv]",
              "Create a table: Product | FreshBasket price | Cheapest rival | Gap (₹) | Rival with best offer | Risk to FreshBasket (High/Med/Low)",
              "Rank the top 5 risks. Do not invent rows not in the file.",
            ],
          },
          {
            title: "Lab B — Feature / promise comparison",
            description:
              "Go beyond price: offers, ratings, delivery.",
            commands: [
              "Using the same competitor file for FreshBasket:",
              "Build a comparison covering Price, Offers, App rating, Delivery promise for Dairy milk and Personal Care shampoo in West-Mumbai.",
              "Then write 8 bullets: where FreshBasket should compete vs refuse to compete (e.g. 10-minute delivery).",
              "Separate facts in the file from assumptions.",
            ],
          },
          {
            title: "Lab C — SWOT + recommendations",
            description:
              "Consultant deliverable against named rivals.",
            commands: [
              "Create a SWOT for FreshBasket versus BigBasket + Blinkit using only signals supported by the price sheet plus obvious grocery retail logic.",
              "Tag each SWOT bullet Evidence / Assumption.",
              "Then prescribe exactly 5 actions for 30 days with Owner | KPI | review date.",
              "Add 3 NOT-YET actions (include: no across-the-board permanent price cut).",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "Compare price, offers, ratings, and promise — not vibes.",
      "Use the sample sheet before asking AI for “insights.”",
      "Recommendations need owners and a NOT-YET list — especially on price wars.",
    ],
  },

  "mba-d2-t6": {
    topicId: "mba-d2-t6",
    intro:
      "Customer review intelligence is one of the highest-ROI Day 2 skills. Reviews reveal pain points, quality issues, promo trust breaks, and staff brightness — if you theme them and route each theme to a function that can act.",
    blocks: [
      {
        type: "heading",
        content: "1) What businesses learn from reviews",
      },
      {
        type: "list",
        items: [
          "Pain points: queues, stockouts, confusing offers",
          "Product / freshness quality",
          "Expectations vs delivery promise",
          "Brand perception: helpful staff vs “fake discount” anger",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "Review → function routing",
          variant: "stack",
          nodes: [
            { id: "q", label: "Queue / billing complaints", sublabel: "→ Store Ops / HR staffing" },
            { id: "s", label: "Stockout / empty fridge", sublabel: "→ Supply Chain / Store Ops" },
            { id: "pr", label: "Promo not applied / fake offer", sublabel: "→ Marketing + Store Ops" },
            { id: "p", label: "Price vs rival / kirana", sublabel: "→ Category / Finance view" },
            { id: "f", label: "Freshness praise or blame", sublabel: "→ Category + Store Ops" },
          ],
        },
      },
      {
        type: "tip",
        content:
          "One angry review is an anecdote. A repeated theme across stores is an operating signal. Always ask: frequency, severity, owner.",
      },
      {
        type: "heading",
        content: "2) Download the review sample",
      },
      {
        type: "paragraph",
        content:
          "24 FreshBasket reviews across regions and channels. Skim 5 rows manually, then run the AI labs.",
      },
      {
        type: "heading",
        content: "3) Practice — review intelligence pack",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download customer reviews",
            description: "Save the CSV and open it once to skim ratings + themes.",
            link: {
              label: "day2-customer-reviews.csv",
              url: "/datasets/mba/day2-customer-reviews.csv",
            },
          },
          {
            title: "Lab A — Summarise & theme",
            description:
              "Build the core review dashboard in words.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "Act as a FreshBasket customer insights analyst.",
              "Upload or paste day2-customer-reviews.csv.",
              "Produce:",
              "1) Overall rating snapshot (avg if possible; else distribution)",
              "2) Top 5 positive themes with example quotes",
              "3) Top 5 complaint themes with example quotes",
              "4) Which stores/regions look hottest for complaints",
              "Do not invent reviews not in the file.",
            ],
          },
          {
            title: "Lab B — Function routing",
            description:
              "Connect complaints to owners.",
            commands: [
              "Using the FreshBasket review analysis:",
              "Create a table: Complaint theme | Evidence (quote ids or short quotes) | Function owner | First check this week | 30-day KPI",
              "Cover at least Queue, Stockout, Promo trust, Price, Staff.",
              "No theme without an owner.",
            ],
          },
          {
            title: "Lab C — Improvement recommendations",
            description:
              "Move from listening to action.",
            commands: [
              "Based only on the review file themes:",
              "Write 5 improvement recommendations with Owner | Effort (S/M/L) | Expected rating or complaint KPI move | Review date.",
              "Add 3 NOT-YET actions (include: do not spend on a brand-image campaign until stockout/queue evidence is checked).",
              "End with a 150-word note to the CEO titled “What shoppers are telling us.”",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "Reviews teach pain points, quality, expectations, and brand trust.",
      "Themes need function owners — or nothing changes.",
      "Fix evidence-backed ops issues before cosmetic brand campaigns.",
    ],
  },
  "mba-d2-t7": {
    topicId: "mba-d2-t7",
    intro:
      "Sentiment work is customer emotion analysis for managers — not academic NLP jargon. You classify positive, negative, and neutral themes, find root causes, and turn emotion into owned fixes. Reuse the Day 2 review file.",
    blocks: [
      {
        type: "heading",
        content: "1) Positive · Negative · Neutral (business meaning)",
      },
      {
        type: "list",
        items: [
          "Positive: praise you can protect and amplify (freshness, helpful staff).",
          "Negative: pain that will churn customers if ignored (queues, stockouts, fake offers).",
          "Neutral: mixed or mild comments — useful context, not an emergency.",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "Emotion → action path",
          variant: "stack",
          nodes: [
            {
              id: "c",
              label: "Categorise reviews",
              sublabel: "Positive / Negative / Neutral + theme tags",
            },
            {
              id: "e",
              label: "Read the emotion",
              sublabel: "Frustration · trust break · delight · price anxiety",
            },
            {
              id: "r",
              label: "Root cause hypothesis",
              sublabel: "Staffing · replenishment · promo clarity · pricing",
            },
            {
              id: "a",
              label: "Recommendation",
              sublabel: "Owner · KPI · review date · NOT-YET list",
            },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Do not call this “running NLP.” Call it: Customer Emotion Analysis. Boards understand emotion → risk → action.",
      },
      {
        type: "heading",
        content: "2) Practice — emotion & satisfaction pack",
      },
      {
        type: "paragraph",
        content:
          "Upload the same review CSV from Topic 6 (or download again). Copy prompts directly.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Get the review file",
            description: "Download if you do not already have it open.",
            link: {
              label: "day2-customer-reviews.csv",
              url: "/datasets/mba/day2-customer-reviews.csv",
            },
          },
          {
            title: "Lab A — Categorise + emotions",
            description:
              "Build the emotion dashboard from the file.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "Act as a FreshBasket customer experience analyst.",
              "Upload day2-customer-reviews.csv.",
              "For each review, label: Sentiment (Positive/Negative/Neutral) | Primary emotion | Theme.",
              "Then summarise counts by sentiment and by emotion.",
              "List the top 5 emotions driving negative reviews with example quotes.",
              "Do not invent reviews.",
            ],
          },
          {
            title: "Lab B — Root causes",
            description:
              "Move from emotion to operating causes.",
            commands: [
              "Using the FreshBasket sentiment labels:",
              "For each top negative theme (Queue, Stockout, Promo trust, Price):",
              "give 2 plausible root causes | evidence from reviews | function owner | early KPI.",
              "Rank which cause to investigate first this week and why.",
              "No nationwide ad recommendation in this lab.",
            ],
          },
          {
            title: "Lab C — Customer satisfaction report",
            description:
              "Executive deliverable from emotion analysis.",
            commands: [
              "Write a Customer Satisfaction Report for FreshBasket based only on this review file.",
              "Sections: Snapshot | What delights shoppers | What frustrates shoppers | Root-cause hypotheses | 5 actions with owners | NOT-YET list | Open questions.",
              "Add a simple visual plan AI can describe in words: sentiment mix + top complaint frequency table.",
              "Max ~400 words excluding tables. Calm CEO tone.",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "Sentiment is Positive / Negative / Neutral plus emotion — for decisions, not jargon.",
      "Emotion without root-cause ownership stays theatrical.",
      "A satisfaction report must end in actions, owners, and restraint.",
    ],
  },

  "mba-d2-t8": {
    topicId: "mba-d2-t8",
    intro:
      "Executives monitor business news because policy, rivals, inflation, and labour rules change the playing field overnight. This topic trains a CEO-ready news scan for FreshBasket — risks, opportunities, and actions — using a sample headline pack.",
    blocks: [
      {
        type: "heading",
        content: "1) Why leaders watch news",
      },
      {
        type: "list",
        items: [
          "Inflation and rates reshape value-seeking behaviour.",
          "Competitor expansion (dark stores) hits catchment share.",
          "Policy / GST / labour rules create cost and compliance risk.",
          "Supply shocks (heat, fuel) move fresh margins and delivery economics.",
          "Public promo-trust stories can amplify your own review problems.",
        ],
      },
      {
        type: "visual",
        diagram: {
          title: "News → FreshBasket decision",
          variant: "compare",
          nodes: [
            {
              id: "raw",
              label: "Headline",
              sublabel: "Interesting but incomplete",
            },
            {
              id: "use",
              label: "Intelligence",
              sublabel: "Risk / Opportunity · owner · 30-day test · NOT-YET",
            },
          ],
        },
      },
      {
        type: "tip",
        content:
          "A headline is Data. Your job is Information + Insight + Decision — same chain as Topic 3.",
      },
      {
        type: "heading",
        content: "2) Practice — news & industry pack",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Download news pack",
            description: "12 FreshBasket-relevant headlines for practice.",
            link: {
              label: "day2-business-news.csv",
              url: "/datasets/mba/day2-business-news.csv",
            },
          },
          {
            title: "Lab A — CEO weekly news brief",
            description:
              "Scan headlines into an executive brief.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "Act as chief of staff preparing FreshBasket’s CEO weekly pack.",
              "Upload day2-business-news.csv.",
              "Produce a brief with sections:",
              "Must-know this week (5 bullets)",
              "Risks (table: Headline | Risk to FreshBasket | Owner | Severity)",
              "Opportunities (table: Headline | Opportunity | Owner | First test)",
              "Recommended actions (5 max) with review dates",
              "Do not invent headlines. Mark assumptions.",
            ],
          },
          {
            title: "Lab B — Industry trend card (Retail grocery)",
            description:
              "Trend synthesis for India grocery retail.",
            commands: [
              "Using the news pack plus grocery retail logic for India:",
              "Create an Industry Trend Card covering: Trends | Opportunities | Threats | Recommendations for FreshBasket.",
              "Each trend bullet must cite at least one headline_id from the file OR be labelled Assumption.",
              "Keep to one page equivalent. No buzzword stacking.",
            ],
          },
          {
            title: "Lab C — Stress-test one headline",
            description:
              "Force the decision chain on a single story.",
            commands: [
              "Pick headline N02 (quick-commerce dark stores in South).",
              "Build Data → Information → Insight → Decision for FreshBasket South.",
              "Give 3 strategic options with trade-offs, pick one primary 30-day path, add NOT-YET list.",
              "No invented financials.",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "News matters when translated into risks, opportunities, owners, and tests.",
      "Industry trend cards need citations or clear assumption labels.",
      "One critical headline deserves a full decision chain — not a shrug.",
    ],
  },

  "mba-d2-t9": {
    topicId: "mba-d2-t9",
    intro:
      "Day 2 finale: you are the consultant FreshBasket hired for a Market Intelligence Pack. Combine competitor prices, customer reviews, and business news into one executive deliverable — SWOT, sentiment, comparison, risks, opportunities, and recommendations.",
    blocks: [
      {
        type: "heading",
        content: "1) Client brief",
      },
      {
        type: "paragraph",
        content:
          "FreshBasket’s CEO wants an outside-in picture before locking next month’s commercial plan. You already have three files from Day 2. Your job is integration — not three separate essays.",
      },
      {
        type: "visual",
        diagram: {
          title: "Final pack inputs",
          variant: "stack",
          nodes: [
            {
              id: "c",
              label: "Competitor prices",
              sublabel: "day2-competitor-prices.csv",
            },
            {
              id: "r",
              label: "Customer reviews",
              sublabel: "day2-customer-reviews.csv",
            },
            {
              id: "n",
              label: "Business news",
              sublabel: "day2-business-news.csv",
            },
            {
              id: "o",
              label: "Output",
              sublabel: "One Market Intelligence Pack for the CEO",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "2) Required deliverables",
      },
      {
        type: "list",
        items: [
          "Industry / competitive snapshot",
          "Competitor comparison (price + promise)",
          "Customer sentiment summary",
          "Market / news risks & opportunities",
          "SWOT (evidence-tagged)",
          "Three strategic recommendations with owners",
          "Executive summary (≤250 words)",
        ],
      },
      {
        type: "tip",
        content:
          "Quality bar: every major claim should point to a file (prices / reviews / news). If AI invents a number, reject it.",
      },
      {
        type: "heading",
        content: "3) Practice — build the pack",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Gather the three Day 2 files",
            description: "Download any file you are missing.",
            link: {
              label: "day2-competitor-prices.csv",
              url: "/datasets/mba/day2-competitor-prices.csv",
            },
          },
          {
            title: "Reviews file",
            description: "Confirm you have the review sample.",
            link: {
              label: "day2-customer-reviews.csv",
              url: "/datasets/mba/day2-customer-reviews.csv",
            },
          },
          {
            title: "News file",
            description: "Confirm you have the news pack.",
            link: {
              label: "day2-business-news.csv",
              url: "/datasets/mba/day2-business-news.csv",
            },
          },
          {
            title: "Lab A — Integrated analysis",
            description:
              "One ChatGPT chat with all three uploads if possible.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "Act as consulting engagement manager for FreshBasket SuperMarket (India).",
              "Client ask: Market Intelligence Pack for next month’s commercial plan.",
              "I will upload three files: competitor prices, customer reviews, business news.",
              "[UPLOAD all three CSVs]",
              "Produce:",
              "1) Competitive snapshot (facts only from price file)",
              "2) Sentiment snapshot (facts only from reviews)",
              "3) News risks & opportunities (cite headline_id)",
              "4) Evidence-tagged SWOT",
              "5) Exactly 3 strategic recommendations: Owner | 30-day KPI | first move this week",
              "6) NOT-YET list (min 3)",
              "Rules: no invented financials; separate facts/assumptions; calm executive tone.",
            ],
          },
          {
            title: "Lab B — Executive summary",
            description:
              "Compress for the CEO meeting.",
            commands: [
              "Using only the Market Intelligence Pack findings already produced:",
              "Write a 220–250 word Executive Summary titled “FreshBasket Outside-In Monthly Pack”.",
              "Structure: Situation | What the market is saying | What rivals are doing | Decisions needed | Watchouts.",
              "No new claims that were not in the prior analysis.",
            ],
          },
          {
            title: "Lab C — Red-team the pack",
            description:
              "Attack before you present.",
            commands: [
              "Red-team the FreshBasket Market Intelligence Pack.",
              "List 8 ways this advice could fail.",
              "For each: early warning signal | who watches | kill/adapt trigger.",
              "Rewrite the weakest recommendation into a safer 30-day test.",
            ],
          },
        ],
      },
    ],
    keyTakeaways: [
      "Day 2 ends when competitor + review + news intelligence become one pack.",
      "Cite the files — do not let AI invent the market.",
      "Three owned recommendations beat ten vague ideas; always keep a NOT-YET list.",
    ],
  },
};

