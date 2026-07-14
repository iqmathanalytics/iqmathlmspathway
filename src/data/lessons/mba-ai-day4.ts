import type { TopicLesson } from "@/lib/types";

/**
 * Day 4 — Agentic AI & Autonomous Business Systems
 * Students download REAL public datasets, upload to Colab, set PATH_*.
 */
export const mbaAiDay4Lessons: Record<string, TopicLesson> = {
  "mba-d4-t1": {
    topicId: "mba-d4-t1",
    intro: "Day 4 starts with real marketplace data. Download Olist from Kaggle, upload to Colab, set PATH_*, then feel chatbot vs agent mode on a real category growth goal.",
    blocks: [
      {
        type: "heading",
        content: "Dataset downloads — open these direct links",
      },
      {
        type: "paragraph",
        content: "Download the real public datasets below (Kaggle account needed for Olist + IBM HR). Unzip if needed, upload CSVs into Colab /content/, then set PATH_* in the notebook.",
      },
      {
        type: "heading",
        content: "1) Olist Brazilian E-Commerce (PRIMARY — required)",
      },
      {
        type: "list",
        items: [
          "Dataset page (Download button): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce/download",
          "Orders file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_orders_dataset.csv",
          "Order items file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_items_dataset.csv",
          "Reviews file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_reviews_dataset.csv",
          "Products file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_products_dataset.csv",
          "Customers file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_customers_dataset.csv",
          "Payments file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_payments_dataset.csv",
          "Category translation file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=product_category_name_translation.csv",
        ],
      },
      {
        type: "heading",
        content: "2) IBM HR Analytics Attrition (People agent — Topics 5–6)",
      },
      {
        type: "list",
        items: [
          "Dataset page: https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset/download",
          "After download, set PATH_HR (often WA_Fn-UseC_-HR-Employee-Attrition.csv)",
        ],
      },
      {
        type: "heading",
        content: "3) Optional backup without Kaggle — UCI Online Retail",
      },
      {
        type: "list",
        items: [
          "Online Retail II page: https://archive.ics.uci.edu/dataset/502/online+retail+ii",
          "Online Retail (smaller) page: https://archive.ics.uci.edu/dataset/352/online+retail",
          "Use only if Kaggle is blocked — then set PATH_UCI_RETAIL after upload",
        ],
      },
      {
        type: "tip",
        content: "Colab: https://colab.research.google.com/#create=true | Groq keys: https://console.groq.com/keys | Flow: open a dataset link above → Download → unzip → upload CSVs to Colab → edit PATH_* in Cell 2.",
      },
      {
        type: "heading",
        content: "Why agents need your files",
      },
      {
        type: "paragraph",
        content: "An agent without uploaded tables is just a confident essay. Today\u2019s Launch Scout AI staffs AI employees using statistics from the Olist files you provide.",
      },
      {
        type: "visual",
        diagram: {
          title: "Chatbot vs agent",
          variant: "compare",
          nodes: [
            {
              id: "c",
              label: "Chatbot",
              sublabel: "Answers without completing work",
            },
            {
              id: "a",
              label: "Agent",
              sublabel: "Plans \u00b7 staffs \u00b7 executes using your CSVs",
            }
          ],
        },
      },
      {
        type: "heading",
        content: "Hands-on (Colab) — set paths, then run agents",
      },
      {
        type: "jupyter-notebook",
        installCmd: "!pip -q install groq pandas openpyxl\nprint('Installed: groq, pandas, openpyxl')",
        notebookCells: [
          {
            label: "Cell 1 — Install note + Groq boot",
            code: `import os, json, warnings
from getpass import getpass
import pandas as pd
from groq import Groq
warnings.filterwarnings("ignore")

GROQ_MODEL = "llama-3.1-8b-instant"
if not os.environ.get("GROQ_API_KEY"):
    os.environ["GROQ_API_KEY"] = getpass("Enter GROQ_API_KEY: ").strip()
client = Groq(api_key=os.environ["GROQ_API_KEY"])

def llm(system: str, user: str, temperature: float = 0.2) -> str:
    resp = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=temperature,
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
    )
    return resp.choices[0].message.content.strip()

print("Groq ready |", GROQ_MODEL)`,
          },
          {
            label: "Cell 2 — Upload + set DATA PATHS (edit PATH_*)",
            code: `# =============================================================================
# STUDENT SETUP — upload CSVs to Colab, then set paths to YOUR files
# Expected location after upload is usually /content/<filename>.csv
# =============================================================================
from google.colab import files

print("Upload Olist CSVs (+ IBM HR CSV for People/Consulting labs).")
print("You can cancel and rely on files already in /content/ if re-running.")
try:
    uploaded = files.upload()
    print("Uploaded:", list(uploaded.keys()))
except Exception as e:
    print("Upload skipped/failed:", e)

# >>> EDIT THESE PATHS to match your uploaded filenames <<<
PATH_ORDERS = "/content/olist_orders_dataset.csv"
PATH_ITEMS = "/content/olist_order_items_dataset.csv"
PATH_REVIEWS = "/content/olist_order_reviews_dataset.csv"
PATH_PRODUCTS = "/content/olist_products_dataset.csv"
PATH_CUSTOMERS = "/content/olist_customers_dataset.csv"
PATH_PAYMENTS = "/content/olist_order_payments_dataset.csv"
PATH_CAT_TRANS = "/content/product_category_name_translation.csv"
PATH_HR = "/content/WA_Fn-UseC_-HR-Employee-Attrition.csv"  # IBM HR
# Optional UCI backup (only if not using Olist):
PATH_UCI_RETAIL = "/content/online_retail_II.xlsx"

DATA_PATHS = {
    "orders": PATH_ORDERS,
    "items": PATH_ITEMS,
    "reviews": PATH_REVIEWS,
    "products": PATH_PRODUCTS,
    "customers": PATH_CUSTOMERS,
    "payments": PATH_PAYMENTS,
    "cat_trans": PATH_CAT_TRANS,
    "hr": PATH_HR,
}

print("\\\\nPath check:")
for k, p in DATA_PATHS.items():
    print(f"  [{('OK' if os.path.exists(p) else 'MISSING')}] {k}: {p}")`,
          },
          {
            label: "Cell 3 — Load Olist tables from your paths",
            code: `# Fail clearly if core Olist files are missing
required = ["orders", "items", "reviews", "products"]
missing = [k for k in required if not os.path.exists(DATA_PATHS[k])]
if missing:
    raise FileNotFoundError(
        "Missing required Olist files: " + ", ".join(missing) +
        ". Download from Kaggle olistbr/brazilian-ecommerce, upload to Colab, fix PATH_* above."
    )

orders = pd.read_csv(PATH_ORDERS)
items = pd.read_csv(PATH_ITEMS)
reviews = pd.read_csv(PATH_REVIEWS)
products = pd.read_csv(PATH_PRODUCTS)
customers = pd.read_csv(PATH_CUSTOMERS) if os.path.exists(PATH_CUSTOMERS) else None
payments = pd.read_csv(PATH_PAYMENTS) if os.path.exists(PATH_PAYMENTS) else None
cat_trans = pd.read_csv(PATH_CAT_TRANS) if os.path.exists(PATH_CAT_TRANS) else None

# Enrich category names when translation file exists
if cat_trans is not None and "product_category_name" in products.columns:
    products = products.merge(cat_trans, on="product_category_name", how="left")

print("Loaded Olist shapes:")
print(" orders", orders.shape, "| items", items.shape, "| reviews", reviews.shape, "| products", products.shape)
print("orders columns:", list(orders.columns)[:8], "...")
print("reviews columns:", list(reviews.columns))`,
          },
          {
            label: "Cell 4 — Chatbot vs Agent on a real commerce goal",
            code: `# Sample a real category from YOUR Olist products
cat_col = "product_category_name_english" if "product_category_name_english" in products.columns else "product_category_name"
top_cats = (
    items.merge(products[["product_id", cat_col]], on="product_id", how="left")
    .groupby(cat_col).size().sort_values(ascending=False).head(8)
)
print("Top categories in your file:\\\\n", top_cats)
FOCUS_CAT = top_cats.index[0]
GOAL = f"""You advise an online marketplace like Olist.
Goal: design a 60-day growth sprint for category '{FOCUS_CAT}' using ONLY evidence from the uploaded Olist tables.
Do not invent Brazilian city populations or fake competitor store counts."""
print("\\\\nGOAL:\\\\n", GOAL)

chatbot = llm(
    "You are a generic chatbot. Be witty. Do NOT plan work or use data.",
    f"Help grow {FOCUS_CAT} online.",
)
print("\\\\n===== CHATBOT =====\\\\n", chatbot)

agent = llm(
    "You are an Agentic Programme Manager. Complete work. Return JSON with keys: "
    "goal_restatement, plan_steps, ai_employees (name,mission,first_task), risks, success_metrics. "
    "Use the category stats provided.",
    GOAL + "\\\\nCATEGORY FREQUENCY HEAD:\\\\n" + top_cats.to_string(),
)
print("\\\\n===== AGENT PLAN =====\\\\n", agent)`,
          },
          {
            label: "Cell 5 — Execute AI employees on sampled evidence",
            code: `# Build compact evidence packs from real tables
rev = reviews.dropna(subset=[c for c in ["review_comment_message"] if c in reviews.columns]).copy()
if "review_score" in rev.columns:
    print(rev["review_score"].value_counts().sort_index())
sample_reviews = rev.head(20).to_dict(orient="records")
sample_orders = orders.head(20).to_dict(orient="records")

try:
    plan = json.loads(agent[agent.find("{"): agent.rfind("}")+1])
    employees = plan.get("ai_employees", [])[:5]
except Exception:
    employees = [
        {"name": "ResearchAgent", "mission": "Category demand", "first_task": "Summarise review scores"},
        {"name": "OpsAgent", "mission": "Fulfilment risk", "first_task": "Flag late delivery patterns"},
        {"name": "MarketingAgent", "mission": "Campaign angles", "first_task": "Use review language"},
        {"name": "FinanceAgent", "mission": "Payment mix", "first_task": "Comment on payment types if present"},
        {"name": "CXAgent", "mission": "Complaint themes", "first_task": "Mine negative reviews"},
    ]

executions = []
evidence = {"focus_category": FOCUS_CAT, "reviews_sample": sample_reviews, "orders_sample": sample_orders}
for emp in employees:
    out = llm(
        f"You are {emp.get('name')}. Mission: {emp.get('mission')}. Use ONLY provided evidence. Mark Judgment.",
        json.dumps({"task": emp.get("first_task"), "evidence": evidence})[:12000],
    )
    executions.append({"employee": emp.get("name"), "output": out})
    print("="*64, "\\\\n", emp.get("name"), "\\\\n", out)

synthesis = llm(
    "You are Chief of Staff. Merge employee outputs into a Go/Conditional/No-Go memo with owners and kill-criteria.",
    json.dumps({"goal": GOAL, "executions": executions})[:14000],
)
print("\\\\n===== CEO SYNTHESIS =====\\\\n", synthesis)`,
          }
        ],
      },
      {
        type: "heading",
        content: "Done when",
      },
      {
        type: "list",
        items: [
      "Real datasets downloaded from the linked sources",
      "PATH_* points to your uploaded Colab files",
      "Agent cells run with Groq against those tables",
    ],
      },
    ],
    keyTakeaways: [
      "Download real Olist data \u2014 do not invent classroom CSVs.",
      "Set PATH_* to your Colab uploads before agents run.",
      "Agents complete work; chatbots only reply.",
    ],
  },

  "mba-d4-t2": {
    topicId: "mba-d4-t2",
    intro: "Design a business agent properly (Goal \u00b7 Tools \u00b7 Memory \u00b7 Output), then code tools that read YOUR uploaded Olist reviews/items/products paths.",
    blocks: [
      {
        type: "heading",
        content: "Dataset downloads — open these direct links",
      },
      {
        type: "paragraph",
        content: "Download the real public datasets below (Kaggle account needed for Olist + IBM HR). Unzip if needed, upload CSVs into Colab /content/, then set PATH_* in the notebook.",
      },
      {
        type: "heading",
        content: "1) Olist Brazilian E-Commerce (PRIMARY — required)",
      },
      {
        type: "list",
        items: [
          "Dataset page (Download button): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce/download",
          "Orders file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_orders_dataset.csv",
          "Order items file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_items_dataset.csv",
          "Reviews file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_reviews_dataset.csv",
          "Products file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_products_dataset.csv",
          "Customers file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_customers_dataset.csv",
          "Payments file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_payments_dataset.csv",
          "Category translation file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=product_category_name_translation.csv",
        ],
      },
      {
        type: "heading",
        content: "2) IBM HR Analytics Attrition (People agent — Topics 5–6)",
      },
      {
        type: "list",
        items: [
          "Dataset page: https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset/download",
          "After download, set PATH_HR (often WA_Fn-UseC_-HR-Employee-Attrition.csv)",
        ],
      },
      {
        type: "heading",
        content: "3) Optional backup without Kaggle — UCI Online Retail",
      },
      {
        type: "list",
        items: [
          "Online Retail II page: https://archive.ics.uci.edu/dataset/502/online+retail+ii",
          "Online Retail (smaller) page: https://archive.ics.uci.edu/dataset/352/online+retail",
          "Use only if Kaggle is blocked — then set PATH_UCI_RETAIL after upload",
        ],
      },
      {
        type: "tip",
        content: "Colab: https://colab.research.google.com/#create=true | Groq keys: https://console.groq.com/keys | Flow: open a dataset link above → Download → unzip → upload CSVs to Colab → edit PATH_* in Cell 2.",
      },
      {
        type: "heading",
        content: "Design before prompting",
      },
      {
        type: "visual",
        diagram: {
          title: "Agent blueprint",
          variant: "stack",
          nodes: [
            {
              id: "g",
              label: "Goal",
              sublabel: "Business outcome",
            },
            {
              id: "t",
              label: "Tools",
              sublabel: "Functions over real CSVs",
            },
            {
              id: "m",
              label: "Memory",
              sublabel: "Audit trail of observations",
            },
            {
              id: "o",
              label: "Output",
              sublabel: "Manager artifact",
            }
          ],
        },
      },
      {
        type: "paragraph",
        content: "Use case: Growth Marketing Agent over Olist review scores and revenue proxies.",
      },
      {
        type: "heading",
        content: "Hands-on (Colab) — set paths, then run agents",
      },
      {
        type: "jupyter-notebook",
        installCmd: "!pip -q install groq pandas openpyxl\nprint('Installed: groq, pandas, openpyxl')",
        notebookCells: [
          {
            label: "Cell 1 — Install note + Groq boot",
            code: `import os, json, warnings
from getpass import getpass
import pandas as pd
from groq import Groq
warnings.filterwarnings("ignore")

GROQ_MODEL = "llama-3.1-8b-instant"
if not os.environ.get("GROQ_API_KEY"):
    os.environ["GROQ_API_KEY"] = getpass("Enter GROQ_API_KEY: ").strip()
client = Groq(api_key=os.environ["GROQ_API_KEY"])

def llm(system: str, user: str, temperature: float = 0.2) -> str:
    resp = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=temperature,
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
    )
    return resp.choices[0].message.content.strip()

print("Groq ready |", GROQ_MODEL)`,
          },
          {
            label: "Cell 2 — Upload + set DATA PATHS (edit PATH_*)",
            code: `# =============================================================================
# STUDENT SETUP — upload CSVs to Colab, then set paths to YOUR files
# Expected location after upload is usually /content/<filename>.csv
# =============================================================================
from google.colab import files

print("Upload Olist CSVs (+ IBM HR CSV for People/Consulting labs).")
print("You can cancel and rely on files already in /content/ if re-running.")
try:
    uploaded = files.upload()
    print("Uploaded:", list(uploaded.keys()))
except Exception as e:
    print("Upload skipped/failed:", e)

# >>> EDIT THESE PATHS to match your uploaded filenames <<<
PATH_ORDERS = "/content/olist_orders_dataset.csv"
PATH_ITEMS = "/content/olist_order_items_dataset.csv"
PATH_REVIEWS = "/content/olist_order_reviews_dataset.csv"
PATH_PRODUCTS = "/content/olist_products_dataset.csv"
PATH_CUSTOMERS = "/content/olist_customers_dataset.csv"
PATH_PAYMENTS = "/content/olist_order_payments_dataset.csv"
PATH_CAT_TRANS = "/content/product_category_name_translation.csv"
PATH_HR = "/content/WA_Fn-UseC_-HR-Employee-Attrition.csv"  # IBM HR
# Optional UCI backup (only if not using Olist):
PATH_UCI_RETAIL = "/content/online_retail_II.xlsx"

DATA_PATHS = {
    "orders": PATH_ORDERS,
    "items": PATH_ITEMS,
    "reviews": PATH_REVIEWS,
    "products": PATH_PRODUCTS,
    "customers": PATH_CUSTOMERS,
    "payments": PATH_PAYMENTS,
    "cat_trans": PATH_CAT_TRANS,
    "hr": PATH_HR,
}

print("\\\\nPath check:")
for k, p in DATA_PATHS.items():
    print(f"  [{('OK' if os.path.exists(p) else 'MISSING')}] {k}: {p}")`,
          },
          {
            label: "Cell 3 — Load Olist tables from your paths",
            code: `# Fail clearly if core Olist files are missing
required = ["orders", "items", "reviews", "products"]
missing = [k for k in required if not os.path.exists(DATA_PATHS[k])]
if missing:
    raise FileNotFoundError(
        "Missing required Olist files: " + ", ".join(missing) +
        ". Download from Kaggle olistbr/brazilian-ecommerce, upload to Colab, fix PATH_* above."
    )

orders = pd.read_csv(PATH_ORDERS)
items = pd.read_csv(PATH_ITEMS)
reviews = pd.read_csv(PATH_REVIEWS)
products = pd.read_csv(PATH_PRODUCTS)
customers = pd.read_csv(PATH_CUSTOMERS) if os.path.exists(PATH_CUSTOMERS) else None
payments = pd.read_csv(PATH_PAYMENTS) if os.path.exists(PATH_PAYMENTS) else None
cat_trans = pd.read_csv(PATH_CAT_TRANS) if os.path.exists(PATH_CAT_TRANS) else None

# Enrich category names when translation file exists
if cat_trans is not None and "product_category_name" in products.columns:
    products = products.merge(cat_trans, on="product_category_name", how="left")

print("Loaded Olist shapes:")
print(" orders", orders.shape, "| items", items.shape, "| reviews", reviews.shape, "| products", products.shape)
print("orders columns:", list(orders.columns)[:8], "...")
print("reviews columns:", list(reviews.columns))`,
          },
          {
            label: "Cell 4 — Agent blueprint",
            code: `blueprint = {
    "name": "Olist Growth Marketing Agent",
    "goal": "Create a 14-day campaign pack for the weakest review-score categories without inventing discounts that finance never approved",
    "knowledge": ["olist reviews", "order items", "products"],
    "tools": ["tool_review_score_by_category", "tool_negative_review_samples", "tool_revenue_proxy_by_category"],
    "memory": [],
    "output": "Campaign pack with File-supported vs Judgment labels",
}
print(json.dumps(blueprint, indent=2))`,
          },
          {
            label: "Cell 5 — Tools over YOUR uploaded Olist files",
            code: `cat_col = "product_category_name_english" if "product_category_name_english" in products.columns else "product_category_name"
item_prod = items.merge(products[["product_id", cat_col]], on="product_id", how="left")
order_cat = item_prod.merge(orders[["order_id", "order_status"]], on="order_id", how="left")
rev_score = reviews[["order_id", "review_score"] + (["review_comment_message"] if "review_comment_message" in reviews.columns else [])]

def tool_review_score_by_category(top_n=12):
    df = order_cat.merge(rev_score, on="order_id", how="left")
    g = df.groupby(cat_col)["review_score"].agg(["mean", "count"]).sort_values(["mean", "count"])
    return g.head(top_n).reset_index().to_dict(orient="records")

def tool_negative_review_samples(limit=25):
    df = reviews.copy()
    if "review_score" in df.columns:
        df = df[df["review_score"] <= 2]
    cols = [c for c in ["review_score", "review_comment_title", "review_comment_message", "order_id"] if c in df.columns]
    return df[cols].dropna().head(limit).to_dict(orient="records")

def tool_revenue_proxy_by_category(top_n=12):
    # price * freight as classroom revenue proxy when available
    df = item_prod.copy()
    if "price" in df.columns:
        df["line_value"] = df["price"].fillna(0) + df.get("freight_value", 0).fillna(0) if "freight_value" in df.columns else df["price"].fillna(0)
        g = df.groupby(cat_col)["line_value"].sum().sort_values(ascending=False).head(top_n)
        return g.reset_index().rename(columns={"line_value": "revenue_proxy"}).to_dict(orient="records")
    return [{"note": "price column not found in your items file"}]

print("Worst scored cats:", tool_review_score_by_category(5))
print("Neg samples:", len(tool_negative_review_samples()))
print("Revenue proxy head:", tool_revenue_proxy_by_category(5))`,
          },
          {
            label: "Cell 6 — Run Marketing Agent (tools → decision)",
            code: `class MarketingAgent:
    def __init__(self, bp):
        self.bp = bp
        self.memory = []
    def perceive(self):
        obs = {
            "weak_categories": tool_review_score_by_category(10),
            "negative_reviews": tool_negative_review_samples(20),
            "revenue_proxy": tool_revenue_proxy_by_category(10),
        }
        self.memory.append({"type": "observation", "data_keys": list(obs)})
        return obs
    def act(self, obs):
        pack = llm(
            f"You are {self.bp['name']}. Goal: {self.bp['goal']}. Use ONLY tool observations.",
            "Return Markdown campaign pack: Audience, OfferRules, Channels, CreativeAngles, KPI, Risks, ApprovalsNeeded.\\\\n"
            + json.dumps(obs)[:14000],
        )
        self.memory.append({"type": "decision"})
        return pack

agent = MarketingAgent(blueprint)
obs = agent.perceive()
print(agent.act(obs))
print("Memory events:", len(agent.memory))`,
          }
        ],
      },
      {
        type: "heading",
        content: "Done when",
      },
      {
        type: "list",
        items: [
      "Real datasets downloaded from the linked sources",
      "PATH_* points to your uploaded Colab files",
      "Agent cells run with Groq against those tables",
    ],
      },
    ],
    keyTakeaways: [
      "Tools must point at real uploaded paths.",
      "Memory makes the run auditable.",
      "Campaign packs must separate File-supported vs Judgment.",
    ],
  },

  "mba-d4-t3": {
    topicId: "mba-d4-t3",
    intro: "Multi-agent launch control tower on a real Olist category: Research \u2192 Pricing \u2192 Marketing \u2192 Finance \u2192 CX \u2192 CEO, all reading your uploaded files.",
    blocks: [
      {
        type: "heading",
        content: "Dataset downloads — open these direct links",
      },
      {
        type: "paragraph",
        content: "Download the real public datasets below (Kaggle account needed for Olist + IBM HR). Unzip if needed, upload CSVs into Colab /content/, then set PATH_* in the notebook.",
      },
      {
        type: "heading",
        content: "1) Olist Brazilian E-Commerce (PRIMARY — required)",
      },
      {
        type: "list",
        items: [
          "Dataset page (Download button): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce/download",
          "Orders file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_orders_dataset.csv",
          "Order items file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_items_dataset.csv",
          "Reviews file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_reviews_dataset.csv",
          "Products file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_products_dataset.csv",
          "Customers file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_customers_dataset.csv",
          "Payments file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_payments_dataset.csv",
          "Category translation file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=product_category_name_translation.csv",
        ],
      },
      {
        type: "heading",
        content: "2) IBM HR Analytics Attrition (People agent — Topics 5–6)",
      },
      {
        type: "list",
        items: [
          "Dataset page: https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset/download",
          "After download, set PATH_HR (often WA_Fn-UseC_-HR-Employee-Attrition.csv)",
        ],
      },
      {
        type: "heading",
        content: "3) Optional backup without Kaggle — UCI Online Retail",
      },
      {
        type: "list",
        items: [
          "Online Retail II page: https://archive.ics.uci.edu/dataset/502/online+retail+ii",
          "Online Retail (smaller) page: https://archive.ics.uci.edu/dataset/352/online+retail",
          "Use only if Kaggle is blocked — then set PATH_UCI_RETAIL after upload",
        ],
      },
      {
        type: "tip",
        content: "Colab: https://colab.research.google.com/#create=true | Groq keys: https://console.groq.com/keys | Flow: open a dataset link above → Download → unzip → upload CSVs to Colab → edit PATH_* in Cell 2.",
      },
      {
        type: "heading",
        content: "Why one agent is not enough",
      },
      {
        type: "paragraph",
        content: "Specialists debate; the CEO agent arbitrates. The category and prices come from your Olist upload \u2014 not invented store counts.",
      },
      {
        type: "visual",
        diagram: {
          title: "Launch swarm",
          variant: "stack",
          nodes: [
            {
              id: "r",
              label: "Research",
              sublabel: "Demand cues",
            },
            {
              id: "p",
              label: "Pricing",
              sublabel: "Offer options",
            },
            {
              id: "m",
              label: "Marketing",
              sublabel: "Story",
            },
            {
              id: "f",
              label: "Finance",
              sublabel: "Kill criteria",
            },
            {
              id: "c",
              label: "CX",
              sublabel: "Trust",
            },
            {
              id: "e",
              label: "CEO",
              sublabel: "Decision",
            }
          ],
        },
      },
      {
        type: "heading",
        content: "Hands-on (Colab) — set paths, then run agents",
      },
      {
        type: "jupyter-notebook",
        installCmd: "!pip -q install groq pandas openpyxl\nprint('Installed: groq, pandas, openpyxl')",
        notebookCells: [
          {
            label: "Cell 1 — Install note + Groq boot",
            code: `import os, json, warnings
from getpass import getpass
import pandas as pd
from groq import Groq
warnings.filterwarnings("ignore")

GROQ_MODEL = "llama-3.1-8b-instant"
if not os.environ.get("GROQ_API_KEY"):
    os.environ["GROQ_API_KEY"] = getpass("Enter GROQ_API_KEY: ").strip()
client = Groq(api_key=os.environ["GROQ_API_KEY"])

def llm(system: str, user: str, temperature: float = 0.2) -> str:
    resp = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=temperature,
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
    )
    return resp.choices[0].message.content.strip()

print("Groq ready |", GROQ_MODEL)`,
          },
          {
            label: "Cell 2 — Upload + set DATA PATHS (edit PATH_*)",
            code: `# =============================================================================
# STUDENT SETUP — upload CSVs to Colab, then set paths to YOUR files
# Expected location after upload is usually /content/<filename>.csv
# =============================================================================
from google.colab import files

print("Upload Olist CSVs (+ IBM HR CSV for People/Consulting labs).")
print("You can cancel and rely on files already in /content/ if re-running.")
try:
    uploaded = files.upload()
    print("Uploaded:", list(uploaded.keys()))
except Exception as e:
    print("Upload skipped/failed:", e)

# >>> EDIT THESE PATHS to match your uploaded filenames <<<
PATH_ORDERS = "/content/olist_orders_dataset.csv"
PATH_ITEMS = "/content/olist_order_items_dataset.csv"
PATH_REVIEWS = "/content/olist_order_reviews_dataset.csv"
PATH_PRODUCTS = "/content/olist_products_dataset.csv"
PATH_CUSTOMERS = "/content/olist_customers_dataset.csv"
PATH_PAYMENTS = "/content/olist_order_payments_dataset.csv"
PATH_CAT_TRANS = "/content/product_category_name_translation.csv"
PATH_HR = "/content/WA_Fn-UseC_-HR-Employee-Attrition.csv"  # IBM HR
# Optional UCI backup (only if not using Olist):
PATH_UCI_RETAIL = "/content/online_retail_II.xlsx"

DATA_PATHS = {
    "orders": PATH_ORDERS,
    "items": PATH_ITEMS,
    "reviews": PATH_REVIEWS,
    "products": PATH_PRODUCTS,
    "customers": PATH_CUSTOMERS,
    "payments": PATH_PAYMENTS,
    "cat_trans": PATH_CAT_TRANS,
    "hr": PATH_HR,
}

print("\\\\nPath check:")
for k, p in DATA_PATHS.items():
    print(f"  [{('OK' if os.path.exists(p) else 'MISSING')}] {k}: {p}")`,
          },
          {
            label: "Cell 3 — Load Olist tables from your paths",
            code: `# Fail clearly if core Olist files are missing
required = ["orders", "items", "reviews", "products"]
missing = [k for k in required if not os.path.exists(DATA_PATHS[k])]
if missing:
    raise FileNotFoundError(
        "Missing required Olist files: " + ", ".join(missing) +
        ". Download from Kaggle olistbr/brazilian-ecommerce, upload to Colab, fix PATH_* above."
    )

orders = pd.read_csv(PATH_ORDERS)
items = pd.read_csv(PATH_ITEMS)
reviews = pd.read_csv(PATH_REVIEWS)
products = pd.read_csv(PATH_PRODUCTS)
customers = pd.read_csv(PATH_CUSTOMERS) if os.path.exists(PATH_CUSTOMERS) else None
payments = pd.read_csv(PATH_PAYMENTS) if os.path.exists(PATH_PAYMENTS) else None
cat_trans = pd.read_csv(PATH_CAT_TRANS) if os.path.exists(PATH_CAT_TRANS) else None

# Enrich category names when translation file exists
if cat_trans is not None and "product_category_name" in products.columns:
    products = products.merge(cat_trans, on="product_category_name", how="left")

print("Loaded Olist shapes:")
print(" orders", orders.shape, "| items", items.shape, "| reviews", reviews.shape, "| products", products.shape)
print("orders columns:", list(orders.columns)[:8], "...")
print("reviews columns:", list(reviews.columns))`,
          },
          {
            label: "Cell 4 — Multi-agent launch graph on real category",
            code: `cat_col = "product_category_name_english" if "product_category_name_english" in products.columns else "product_category_name"
# Choose a solid but not always #1 category for a 'new offer' story
freq = items.merge(products[["product_id", cat_col]], on="product_id").groupby(cat_col).size().sort_values(ascending=False)
FOCUS = freq.index[min(3, len(freq)-1)]
LAUNCH_GOAL = f"Launch a 6-week premium bundle offer inside Olist-like category '{FOCUS}'. Protect review scores and delivery reliability."
GRAPH = ["ResearchAgent", "PricingAgent", "MarketingAgent", "FinanceAgent", "CXAgent", "CEOAgent"]
print("Focus category:", FOCUS)
print("Workflow:", " → ".join(GRAPH))
print(LAUNCH_GOAL)

# Evidence slices from uploaded data
joined = items.merge(products[["product_id", cat_col]], on="product_id")
joined = joined[joined[cat_col] == FOCUS]
ev = {
    "item_rows": len(joined),
    "price_describe": joined["price"].describe().to_dict() if "price" in joined.columns else {},
    "review_scores": reviews["review_score"].value_counts().sort_index().to_dict() if "review_score" in reviews.columns else {},
    "neg_review_samples": reviews[reviews.get("review_score", pd.Series()) <= 2].head(15).to_dict(orient="records") if "review_score" in reviews.columns else [],
    "order_status": orders["order_status"].value_counts().head(10).to_dict() if "order_status" in orders.columns else {},
}`,
          },
          {
            label: "Cell 5 — Run specialist handoffs",
            code: `state = {"goal": LAUNCH_GOAL, "focus": FOCUS}
state["research"] = llm("You are ResearchAgent. Return concise JSON demand_cues, threats, unknowns.", json.dumps({"goal": LAUNCH_GOAL, "evidence": ev})[:12000])
print("Research done")
state["pricing"] = llm("You are PricingAgent. Return JSON options + recommendation.", json.dumps({"goal": LAUNCH_GOAL, "research": state["research"], "price_describe": ev["price_describe"]})[:12000])
print("Pricing done")
state["marketing"] = llm("You are MarketingAgent. Return JSON positioning, weekly_plan, do_not_claim.", json.dumps({"goal": LAUNCH_GOAL, "research": state["research"], "pricing": state["pricing"], "neg_reviews": ev["neg_review_samples"]})[:12000])
print("Marketing done")
pay_ev = payments["payment_type"].value_counts().to_dict() if payments is not None and "payment_type" in payments.columns else {}
state["finance"] = llm("You are FinanceAgent. Return JSON approved_promo_logic, kill_criteria, red_flags.", json.dumps({"goal": LAUNCH_GOAL, "pricing": state["pricing"], "payments": pay_ev})[:12000])
print("Finance done")
state["cx"] = llm("You are CXAgent. Return JSON cx_risks, readiness_checklist.", json.dumps({"goal": LAUNCH_GOAL, "marketing": state["marketing"], "order_status": ev["order_status"], "scores": ev["review_scores"]})[:12000])
print("CX done")
state["ceo"] = llm(
    "You are CEOAgent. Make Go/Conditional/No-Go + sequenced roadmap + owner map.",
    json.dumps({k: state[k] for k in ["research", "pricing", "marketing", "finance", "cx"]})[:15000],
)
print("\\\\n===== CEO DECISION =====\\\\n", state["ceo"])`,
          }
        ],
      },
      {
        type: "heading",
        content: "Done when",
      },
      {
        type: "list",
        items: [
      "Real datasets downloaded from the linked sources",
      "PATH_* points to your uploaded Colab files",
      "Agent cells run with Groq against those tables",
    ],
      },
    ],
    keyTakeaways: [
      "Multi-agent handoffs beat one mega-prompt.",
      "Finance vs CX tension should be visible.",
      "Every claim should map back to uploaded columns.",
    ],
  },

  "mba-d4-t4": {
    topicId: "mba-d4-t4",
    intro: "Implement Plan \u2192 Tool \u2192 Observe \u2192 Memory on real delivery timestamps and review scores from your Olist paths.",
    blocks: [
      {
        type: "heading",
        content: "Dataset downloads — open these direct links",
      },
      {
        type: "paragraph",
        content: "Download the real public datasets below (Kaggle account needed for Olist + IBM HR). Unzip if needed, upload CSVs into Colab /content/, then set PATH_* in the notebook.",
      },
      {
        type: "heading",
        content: "1) Olist Brazilian E-Commerce (PRIMARY — required)",
      },
      {
        type: "list",
        items: [
          "Dataset page (Download button): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce/download",
          "Orders file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_orders_dataset.csv",
          "Order items file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_items_dataset.csv",
          "Reviews file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_reviews_dataset.csv",
          "Products file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_products_dataset.csv",
          "Customers file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_customers_dataset.csv",
          "Payments file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_payments_dataset.csv",
          "Category translation file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=product_category_name_translation.csv",
        ],
      },
      {
        type: "heading",
        content: "2) IBM HR Analytics Attrition (People agent — Topics 5–6)",
      },
      {
        type: "list",
        items: [
          "Dataset page: https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset/download",
          "After download, set PATH_HR (often WA_Fn-UseC_-HR-Employee-Attrition.csv)",
        ],
      },
      {
        type: "heading",
        content: "3) Optional backup without Kaggle — UCI Online Retail",
      },
      {
        type: "list",
        items: [
          "Online Retail II page: https://archive.ics.uci.edu/dataset/502/online+retail+ii",
          "Online Retail (smaller) page: https://archive.ics.uci.edu/dataset/352/online+retail",
          "Use only if Kaggle is blocked — then set PATH_UCI_RETAIL after upload",
        ],
      },
      {
        type: "tip",
        content: "Colab: https://colab.research.google.com/#create=true | Groq keys: https://console.groq.com/keys | Flow: open a dataset link above → Download → unzip → upload CSVs to Colab → edit PATH_* in Cell 2.",
      },
      {
        type: "heading",
        content: "Agent loop (MBA version)",
      },
      {
        type: "visual",
        diagram: {
          title: "Loop",
          variant: "stack",
          nodes: [
            {
              id: "p",
              label: "Plan",
              sublabel: "Pick next tool",
            },
            {
              id: "t",
              label: "Tool",
              sublabel: "Query uploaded CSVs",
            },
            {
              id: "m",
              label: "Memory",
              sublabel: "Store observations",
            },
            {
              id: "o",
              label: "Output",
              sublabel: "Action pack",
            }
          ],
        },
      },
      {
        type: "paragraph",
        content: "Incident: low scores + delivery friction in the Olist order/review tables you uploaded.",
      },
      {
        type: "heading",
        content: "Hands-on (Colab) — set paths, then run agents",
      },
      {
        type: "jupyter-notebook",
        installCmd: "!pip -q install groq pandas openpyxl\nprint('Installed: groq, pandas, openpyxl')",
        notebookCells: [
          {
            label: "Cell 1 — Install note + Groq boot",
            code: `import os, json, warnings
from getpass import getpass
import pandas as pd
from groq import Groq
warnings.filterwarnings("ignore")

GROQ_MODEL = "llama-3.1-8b-instant"
if not os.environ.get("GROQ_API_KEY"):
    os.environ["GROQ_API_KEY"] = getpass("Enter GROQ_API_KEY: ").strip()
client = Groq(api_key=os.environ["GROQ_API_KEY"])

def llm(system: str, user: str, temperature: float = 0.2) -> str:
    resp = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=temperature,
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
    )
    return resp.choices[0].message.content.strip()

print("Groq ready |", GROQ_MODEL)`,
          },
          {
            label: "Cell 2 — Upload + set DATA PATHS (edit PATH_*)",
            code: `# =============================================================================
# STUDENT SETUP — upload CSVs to Colab, then set paths to YOUR files
# Expected location after upload is usually /content/<filename>.csv
# =============================================================================
from google.colab import files

print("Upload Olist CSVs (+ IBM HR CSV for People/Consulting labs).")
print("You can cancel and rely on files already in /content/ if re-running.")
try:
    uploaded = files.upload()
    print("Uploaded:", list(uploaded.keys()))
except Exception as e:
    print("Upload skipped/failed:", e)

# >>> EDIT THESE PATHS to match your uploaded filenames <<<
PATH_ORDERS = "/content/olist_orders_dataset.csv"
PATH_ITEMS = "/content/olist_order_items_dataset.csv"
PATH_REVIEWS = "/content/olist_order_reviews_dataset.csv"
PATH_PRODUCTS = "/content/olist_products_dataset.csv"
PATH_CUSTOMERS = "/content/olist_customers_dataset.csv"
PATH_PAYMENTS = "/content/olist_order_payments_dataset.csv"
PATH_CAT_TRANS = "/content/product_category_name_translation.csv"
PATH_HR = "/content/WA_Fn-UseC_-HR-Employee-Attrition.csv"  # IBM HR
# Optional UCI backup (only if not using Olist):
PATH_UCI_RETAIL = "/content/online_retail_II.xlsx"

DATA_PATHS = {
    "orders": PATH_ORDERS,
    "items": PATH_ITEMS,
    "reviews": PATH_REVIEWS,
    "products": PATH_PRODUCTS,
    "customers": PATH_CUSTOMERS,
    "payments": PATH_PAYMENTS,
    "cat_trans": PATH_CAT_TRANS,
    "hr": PATH_HR,
}

print("\\\\nPath check:")
for k, p in DATA_PATHS.items():
    print(f"  [{('OK' if os.path.exists(p) else 'MISSING')}] {k}: {p}")`,
          },
          {
            label: "Cell 3 — Load Olist tables from your paths",
            code: `# Fail clearly if core Olist files are missing
required = ["orders", "items", "reviews", "products"]
missing = [k for k in required if not os.path.exists(DATA_PATHS[k])]
if missing:
    raise FileNotFoundError(
        "Missing required Olist files: " + ", ".join(missing) +
        ". Download from Kaggle olistbr/brazilian-ecommerce, upload to Colab, fix PATH_* above."
    )

orders = pd.read_csv(PATH_ORDERS)
items = pd.read_csv(PATH_ITEMS)
reviews = pd.read_csv(PATH_REVIEWS)
products = pd.read_csv(PATH_PRODUCTS)
customers = pd.read_csv(PATH_CUSTOMERS) if os.path.exists(PATH_CUSTOMERS) else None
payments = pd.read_csv(PATH_PAYMENTS) if os.path.exists(PATH_PAYMENTS) else None
cat_trans = pd.read_csv(PATH_CAT_TRANS) if os.path.exists(PATH_CAT_TRANS) else None

# Enrich category names when translation file exists
if cat_trans is not None and "product_category_name" in products.columns:
    products = products.merge(cat_trans, on="product_category_name", how="left")

print("Loaded Olist shapes:")
print(" orders", orders.shape, "| items", items.shape, "| reviews", reviews.shape, "| products", products.shape)
print("orders columns:", list(orders.columns)[:8], "...")
print("reviews columns:", list(reviews.columns))`,
          },
          {
            label: "Cell 4 — Incident goal + tools on real delivery/review fields",
            code: `INCIDENT = """Incident: marketplace CX is under pressure where review scores are low and orders show delivery friction.
Build an OpsIncidentAgent that PLANS, calls TOOLS over the uploaded Olist tables, stores MEMORY, then ships a store/ops action pack."""
print(INCIDENT)

def tool_score_distribution():
    if "review_score" not in reviews.columns:
        return {"error": "review_score missing"}
    return reviews["review_score"].value_counts().sort_index().to_dict()

def tool_late_delivery_sample(limit=30):
    cols = [c for c in ["order_id", "order_status", "order_purchase_timestamp", "order_delivered_customer_date", "order_estimated_delivery_date"] if c in orders.columns]
    df = orders[cols].copy()
    if {"order_delivered_customer_date", "order_estimated_delivery_date"}.issubset(df.columns):
        df["delivered"] = pd.to_datetime(df["order_delivered_customer_date"], errors="coerce")
        df["eta"] = pd.to_datetime(df["order_estimated_delivery_date"], errors="coerce")
        late = df[df["delivered"] > df["eta"]].head(limit)
        return late.to_dict(orient="records")
    return df.head(limit).to_dict(orient="records")

def tool_worst_review_text(limit=25):
    df = reviews.copy()
    if "review_score" in df.columns:
        df = df[df["review_score"] <= 2]
    cols = [c for c in ["review_score", "review_comment_message", "review_comment_title"] if c in df.columns]
    return df[cols].dropna().head(limit).to_dict(orient="records")

def tool_status_mix():
    return orders["order_status"].value_counts().to_dict() if "order_status" in orders.columns else {}

TOOLS = {
    "score_distribution": tool_score_distribution,
    "late_delivery_sample": tool_late_delivery_sample,
    "worst_review_text": tool_worst_review_text,
    "status_mix": tool_status_mix,
}
print("Tools:", list(TOOLS))
print(tool_score_distribution())`,
          },
          {
            label: "Cell 5 — Plan → Act → Observe loop",
            code: `class OpsIncidentAgent:
    def __init__(self):
        self.memory = []
    def plan(self, goal):
        plan = llm(
            "Planner for OpsIncidentAgent. Return JSON {steps:[{thought,tool,args}]} using tools: "
            + ", ".join(TOOLS.keys()),
            goal,
        )
        self.memory.append({"event": "plan", "content": plan})
        return plan
    def parse(self, plan_text):
        try:
            data = json.loads(plan_text[plan_text.find("{"): plan_text.rfind("}")+1])
            return data.get("steps", [])[:4]
        except Exception:
            return [
                {"thought": "scores", "tool": "score_distribution", "args": {}},
                {"thought": "late", "tool": "late_delivery_sample", "args": {}},
                {"thought": "voice", "tool": "worst_review_text", "args": {}},
                {"thought": "status", "tool": "status_mix", "args": {}},
            ]
    def act(self, step):
        tool = step.get("tool")
        fn = TOOLS.get(tool)
        obs = {"error": f"unknown tool {tool}"} if fn is None else fn()
        self.memory.append({"event": "act", "tool": tool, "observation_type": str(type(obs))})
        return obs
    def run(self, goal):
        plan_text = self.plan(goal)
        print("PLAN:\\\\n", plan_text)
        for step in self.parse(plan_text):
            print("THOUGHT:", step.get("thought"), "| ACTION:", step.get("tool"))
            obs = self.act(step)
            self.memory.append({"event": "obs_preview", "preview": str(obs)[:500]})
        final = llm(
            "OpsIncidentAgent. Produce Action Pack: Immediate fixes, KPI, owners, Not stated gaps. Label Judgment vs File-supported.",
            json.dumps({"goal": goal, "memory": self.memory})[:16000],
        )
        return final

print(OpsIncidentAgent().run(INCIDENT))`,
          }
        ],
      },
      {
        type: "heading",
        content: "Done when",
      },
      {
        type: "list",
        items: [
      "Real datasets downloaded from the linked sources",
      "PATH_* points to your uploaded Colab files",
      "Agent cells run with Groq against those tables",
    ],
      },
    ],
    keyTakeaways: [
      "Planning without tools is essay writing.",
      "Tools read PATH_* files \u2014 missing paths must fail loudly.",
      "Memory supports monitoring and audit.",
    ],
  },

  "mba-d4-t5": {
    topicId: "mba-d4-t5",
    intro: "Stand up an AI consulting firm on Olist marketplace digests plus IBM HR attrition (second real download). Strategy synthesizes; quality gate scores grounding.",
    blocks: [
      {
        type: "heading",
        content: "Dataset downloads — open these direct links",
      },
      {
        type: "paragraph",
        content: "Download the real public datasets below (Kaggle account needed for Olist + IBM HR). Unzip if needed, upload CSVs into Colab /content/, then set PATH_* in the notebook.",
      },
      {
        type: "heading",
        content: "1) Olist Brazilian E-Commerce (PRIMARY — required)",
      },
      {
        type: "list",
        items: [
          "Dataset page (Download button): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce/download",
          "Orders file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_orders_dataset.csv",
          "Order items file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_items_dataset.csv",
          "Reviews file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_reviews_dataset.csv",
          "Products file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_products_dataset.csv",
          "Customers file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_customers_dataset.csv",
          "Payments file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_payments_dataset.csv",
          "Category translation file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=product_category_name_translation.csv",
        ],
      },
      {
        type: "heading",
        content: "2) IBM HR Analytics Attrition (People agent — Topics 5–6)",
      },
      {
        type: "list",
        items: [
          "Dataset page: https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset/download",
          "After download, set PATH_HR (often WA_Fn-UseC_-HR-Employee-Attrition.csv)",
        ],
      },
      {
        type: "heading",
        content: "3) Optional backup without Kaggle — UCI Online Retail",
      },
      {
        type: "list",
        items: [
          "Online Retail II page: https://archive.ics.uci.edu/dataset/502/online+retail+ii",
          "Online Retail (smaller) page: https://archive.ics.uci.edu/dataset/352/online+retail",
          "Use only if Kaggle is blocked — then set PATH_UCI_RETAIL after upload",
        ],
      },
      {
        type: "tip",
        content: "Colab: https://colab.research.google.com/#create=true | Groq keys: https://console.groq.com/keys | Flow: open a dataset link above → Download → unzip → upload CSVs to Colab → edit PATH_* in Cell 2.",
      },
      {
        type: "heading",
        content: "Two real sources",
      },
      {
        type: "list",
        items: [
          "Marketplace truth — Olist download: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce/download",
          "People truth — IBM HR download: https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset/download",
          "PeopleAgent must refuse HR claims if PATH_HR is missing",
    ],
      },
      {
        type: "visual",
        diagram: {
          title: "Firm",
          variant: "stack",
          nodes: [
            {
              id: "r",
              label: "Research/Sales/Finance",
              sublabel: "Olist tables",
            },
            {
              id: "c",
              label: "CX/Marketing",
              sublabel: "Reviews",
            },
            {
              id: "p",
              label: "People",
              sublabel: "IBM HR",
            },
            {
              id: "s",
              label: "Strategy",
              sublabel: "Partner pack",
            }
          ],
        },
      },
      {
        type: "heading",
        content: "Hands-on (Colab) — set paths, then run agents",
      },
      {
        type: "jupyter-notebook",
        installCmd: "!pip -q install groq pandas openpyxl\nprint('Installed: groq, pandas, openpyxl')",
        notebookCells: [
          {
            label: "Cell 1 — Install note + Groq boot",
            code: `import os, json, warnings
from getpass import getpass
import pandas as pd
from groq import Groq
warnings.filterwarnings("ignore")

GROQ_MODEL = "llama-3.1-8b-instant"
if not os.environ.get("GROQ_API_KEY"):
    os.environ["GROQ_API_KEY"] = getpass("Enter GROQ_API_KEY: ").strip()
client = Groq(api_key=os.environ["GROQ_API_KEY"])

def llm(system: str, user: str, temperature: float = 0.2) -> str:
    resp = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=temperature,
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
    )
    return resp.choices[0].message.content.strip()

print("Groq ready |", GROQ_MODEL)`,
          },
          {
            label: "Cell 2 — Upload + set DATA PATHS (edit PATH_*)",
            code: `# =============================================================================
# STUDENT SETUP — upload CSVs to Colab, then set paths to YOUR files
# Expected location after upload is usually /content/<filename>.csv
# =============================================================================
from google.colab import files

print("Upload Olist CSVs (+ IBM HR CSV for People/Consulting labs).")
print("You can cancel and rely on files already in /content/ if re-running.")
try:
    uploaded = files.upload()
    print("Uploaded:", list(uploaded.keys()))
except Exception as e:
    print("Upload skipped/failed:", e)

# >>> EDIT THESE PATHS to match your uploaded filenames <<<
PATH_ORDERS = "/content/olist_orders_dataset.csv"
PATH_ITEMS = "/content/olist_order_items_dataset.csv"
PATH_REVIEWS = "/content/olist_order_reviews_dataset.csv"
PATH_PRODUCTS = "/content/olist_products_dataset.csv"
PATH_CUSTOMERS = "/content/olist_customers_dataset.csv"
PATH_PAYMENTS = "/content/olist_order_payments_dataset.csv"
PATH_CAT_TRANS = "/content/product_category_name_translation.csv"
PATH_HR = "/content/WA_Fn-UseC_-HR-Employee-Attrition.csv"  # IBM HR
# Optional UCI backup (only if not using Olist):
PATH_UCI_RETAIL = "/content/online_retail_II.xlsx"

DATA_PATHS = {
    "orders": PATH_ORDERS,
    "items": PATH_ITEMS,
    "reviews": PATH_REVIEWS,
    "products": PATH_PRODUCTS,
    "customers": PATH_CUSTOMERS,
    "payments": PATH_PAYMENTS,
    "cat_trans": PATH_CAT_TRANS,
    "hr": PATH_HR,
}

print("\\\\nPath check:")
for k, p in DATA_PATHS.items():
    print(f"  [{('OK' if os.path.exists(p) else 'MISSING')}] {k}: {p}")`,
          },
          {
            label: "Cell 3 — Load Olist tables from your paths",
            code: `# Fail clearly if core Olist files are missing
required = ["orders", "items", "reviews", "products"]
missing = [k for k in required if not os.path.exists(DATA_PATHS[k])]
if missing:
    raise FileNotFoundError(
        "Missing required Olist files: " + ", ".join(missing) +
        ". Download from Kaggle olistbr/brazilian-ecommerce, upload to Colab, fix PATH_* above."
    )

orders = pd.read_csv(PATH_ORDERS)
items = pd.read_csv(PATH_ITEMS)
reviews = pd.read_csv(PATH_REVIEWS)
products = pd.read_csv(PATH_PRODUCTS)
customers = pd.read_csv(PATH_CUSTOMERS) if os.path.exists(PATH_CUSTOMERS) else None
payments = pd.read_csv(PATH_PAYMENTS) if os.path.exists(PATH_PAYMENTS) else None
cat_trans = pd.read_csv(PATH_CAT_TRANS) if os.path.exists(PATH_CAT_TRANS) else None

# Enrich category names when translation file exists
if cat_trans is not None and "product_category_name" in products.columns:
    products = products.merge(cat_trans, on="product_category_name", how="left")

print("Loaded Olist shapes:")
print(" orders", orders.shape, "| items", items.shape, "| reviews", reviews.shape, "| products", products.shape)
print("orders columns:", list(orders.columns)[:8], "...")
print("reviews columns:", list(reviews.columns))`,
          },
          {
            label: "Cell 3b — Load IBM HR",
            code: `if not os.path.exists(PATH_HR):
    print("WARNING: IBM HR file not found at", PATH_HR)
    print("People-agent cells need: Kaggle pavansubhasht/ibm-hr-analytics-attrition-dataset")
    hr = None
else:
    hr = pd.read_csv(PATH_HR)
    print("Loaded IBM HR:", hr.shape, "columns sample:", list(hr.columns)[:10])`,
          },
          {
            label: "Cell 4 — Consulting case on real marketplace + HR data",
            code: `CASE = """CLIENT: an Olist-like marketplace. Pain: uneven review scores, delivery friction, and concern that internal attrition could hurt CX capacity.
ENGAGEMENT: AI consulting sprint using ONLY the uploaded Olist + IBM HR tables."""
FIRM = ["ResearchAgent", "SalesAgent", "FinanceAgent", "MarketingAgent", "CXAgent", "PeopleAgent", "StrategyAgent"]
print(CASE)
print(FIRM)

# Compact factual digests from real files
digests = {
    "review_score": reviews["review_score"].value_counts().sort_index().to_dict() if "review_score" in reviews.columns else {},
    "order_status": orders["order_status"].value_counts().head(12).to_dict() if "order_status" in orders.columns else {},
    "payments": payments["payment_type"].value_counts().to_dict() if payments is not None and "payment_type" in payments.columns else {},
    "neg_reviews": reviews[reviews["review_score"] <= 2].head(20).to_dict(orient="records") if "review_score" in reviews.columns else [],
}
if hr is not None:
    digests["hr_attrition"] = hr["Attrition"].value_counts().to_dict() if "Attrition" in hr.columns else {}
    digests["hr_sample"] = hr.head(15).to_dict(orient="records")
else:
    digests["hr_attrition"] = {"error": "PATH_HR missing — PeopleAgent will refuse HR claims"}
print({k: (str(v)[:180] + "...") for k, v in digests.items()})`,
          },
          {
            label: "Cell 5 — Run practices then Strategy + quality gate",
            code: `briefs = {}
briefs["ResearchAgent"] = llm("ResearchAgent at AI consulting firm.", CASE + "\\\\nDIGEST:\\\\n" + json.dumps(digests)[:10000])
briefs["SalesAgent"] = llm("SalesAgent. Diagnose demand/fulfililment signals from order/status digests.", CASE + "\\\\n" + json.dumps({k: digests[k] for k in ["order_status", "payments"]}) )
briefs["FinanceAgent"] = llm("FinanceAgent. Payment mix + what to stop funding.", CASE + "\\\\n" + json.dumps(digests.get("payments", {})))
briefs["MarketingAgent"] = llm("MarketingAgent. Trust-first campaigns from negative reviews.", CASE + "\\\\n" + json.dumps(digests.get("neg_reviews", []))[:10000])
briefs["CXAgent"] = llm("CXAgent. Prioritise review-score and delivery issues.", CASE + "\\\\n" + json.dumps({k: digests[k] for k in ["review_score", "order_status", "neg_reviews"]})[:12000])
briefs["PeopleAgent"] = llm(
    "PeopleAgent. Use IBM HR attrition fields only. If hr digest errors, say Not stated in the document/data.",
    CASE + "\\\\nHR DIGEST:\\\\n" + json.dumps({k: digests[k] for k in digests if k.startswith("hr")})[:12000],
)
for k, v in briefs.items():
    print("="*60, "\\\\n", k, "\\\\n", v[:650], "...\\\\n")

briefs["StrategyAgent"] = llm(
    "StrategyAgent / Engagement Partner. Merge into Markdown partner pack with File-supported vs Judgment tags.",
    json.dumps(briefs)[:16000],
)
print("\\\\n===== PARTNER PACK =====\\\\n", briefs["StrategyAgent"])
print("\\\\n===== QUALITY GATE =====\\\\n", llm(
    "Quality Risk Partner. Score 1-5 grounding/actionability/risk honesty/measurability; list suspect inventions.",
    briefs["StrategyAgent"][:8000],
))`,
          }
        ],
      },
      {
        type: "heading",
        content: "Done when",
      },
      {
        type: "list",
        items: [
      "Real datasets downloaded from the linked sources",
      "PATH_* points to your uploaded Colab files",
      "Agent cells run with Groq against those tables",
    ],
      },
    ],
    keyTakeaways: [
      "Consulting practices should disagree before synthesis.",
      "HR insights require the IBM download path.",
      "Quality gates protect clients from fluent nonsense.",
    ],
  },

  "mba-d4-t6": {
    topicId: "mba-d4-t6",
    intro: "Capstone: AI Business Consulting Platform on your uploaded Olist (+ HR) paths. Pick a case, run the pipeline, export olist_board_pack.md, pass the scorecard.",
    blocks: [
      {
        type: "heading",
        content: "Dataset downloads — open these direct links",
      },
      {
        type: "paragraph",
        content: "Download the real public datasets below (Kaggle account needed for Olist + IBM HR). Unzip if needed, upload CSVs into Colab /content/, then set PATH_* in the notebook.",
      },
      {
        type: "heading",
        content: "1) Olist Brazilian E-Commerce (PRIMARY — required)",
      },
      {
        type: "list",
        items: [
          "Dataset page (Download button): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce/download",
          "Orders file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_orders_dataset.csv",
          "Order items file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_items_dataset.csv",
          "Reviews file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_reviews_dataset.csv",
          "Products file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_products_dataset.csv",
          "Customers file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_customers_dataset.csv",
          "Payments file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=olist_order_payments_dataset.csv",
          "Category translation file page: https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce?select=product_category_name_translation.csv",
        ],
      },
      {
        type: "heading",
        content: "2) IBM HR Analytics Attrition (People agent — Topics 5–6)",
      },
      {
        type: "list",
        items: [
          "Dataset page: https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset",
          "Direct download link (Kaggle login): https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset/download",
          "After download, set PATH_HR (often WA_Fn-UseC_-HR-Employee-Attrition.csv)",
        ],
      },
      {
        type: "heading",
        content: "3) Optional backup without Kaggle — UCI Online Retail",
      },
      {
        type: "list",
        items: [
          "Online Retail II page: https://archive.ics.uci.edu/dataset/502/online+retail+ii",
          "Online Retail (smaller) page: https://archive.ics.uci.edu/dataset/352/online+retail",
          "Use only if Kaggle is blocked — then set PATH_UCI_RETAIL after upload",
        ],
      },
      {
        type: "tip",
        content: "Colab: https://colab.research.google.com/#create=true | Groq keys: https://console.groq.com/keys | Flow: open a dataset link above → Download → unzip → upload CSVs to Colab → edit PATH_* in Cell 2.",
      },
      {
        type: "heading",
        content: "Capstone rule",
      },
      {
        type: "paragraph",
        content: "No synthetic day4_*.csv from the course. If PATH_ORDERS / PATH_REVIEWS are missing, the platform is not demo-ready.",
      },
      {
        type: "visual",
        diagram: {
          title: "Platform",
          variant: "stack",
          nodes: [
            {
              id: "i",
              label: "Intake",
              sublabel: "Frame the case",
            },
            {
              id: "a",
              label: "Analyze",
              sublabel: "Market \u00b7 CX \u00b7 risk",
            },
            {
              id: "s",
              label: "Solve",
              sublabel: "Options + roadmap",
            },
            {
              id: "b",
              label: "Board pack",
              sublabel: "olist_board_pack.md",
            }
          ],
        },
      },
      {
        type: "heading",
        content: "Hands-on (Colab) — set paths, then run agents",
      },
      {
        type: "jupyter-notebook",
        installCmd: "!pip -q install groq pandas openpyxl\nprint('Installed: groq, pandas, openpyxl')",
        notebookCells: [
          {
            label: "Cell 1 — Install note + Groq boot",
            code: `import os, json, warnings
from getpass import getpass
import pandas as pd
from groq import Groq
warnings.filterwarnings("ignore")

GROQ_MODEL = "llama-3.1-8b-instant"
if not os.environ.get("GROQ_API_KEY"):
    os.environ["GROQ_API_KEY"] = getpass("Enter GROQ_API_KEY: ").strip()
client = Groq(api_key=os.environ["GROQ_API_KEY"])

def llm(system: str, user: str, temperature: float = 0.2) -> str:
    resp = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=temperature,
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
    )
    return resp.choices[0].message.content.strip()

print("Groq ready |", GROQ_MODEL)`,
          },
          {
            label: "Cell 2 — Upload + set DATA PATHS (edit PATH_*)",
            code: `# =============================================================================
# STUDENT SETUP — upload CSVs to Colab, then set paths to YOUR files
# Expected location after upload is usually /content/<filename>.csv
# =============================================================================
from google.colab import files

print("Upload Olist CSVs (+ IBM HR CSV for People/Consulting labs).")
print("You can cancel and rely on files already in /content/ if re-running.")
try:
    uploaded = files.upload()
    print("Uploaded:", list(uploaded.keys()))
except Exception as e:
    print("Upload skipped/failed:", e)

# >>> EDIT THESE PATHS to match your uploaded filenames <<<
PATH_ORDERS = "/content/olist_orders_dataset.csv"
PATH_ITEMS = "/content/olist_order_items_dataset.csv"
PATH_REVIEWS = "/content/olist_order_reviews_dataset.csv"
PATH_PRODUCTS = "/content/olist_products_dataset.csv"
PATH_CUSTOMERS = "/content/olist_customers_dataset.csv"
PATH_PAYMENTS = "/content/olist_order_payments_dataset.csv"
PATH_CAT_TRANS = "/content/product_category_name_translation.csv"
PATH_HR = "/content/WA_Fn-UseC_-HR-Employee-Attrition.csv"  # IBM HR
# Optional UCI backup (only if not using Olist):
PATH_UCI_RETAIL = "/content/online_retail_II.xlsx"

DATA_PATHS = {
    "orders": PATH_ORDERS,
    "items": PATH_ITEMS,
    "reviews": PATH_REVIEWS,
    "products": PATH_PRODUCTS,
    "customers": PATH_CUSTOMERS,
    "payments": PATH_PAYMENTS,
    "cat_trans": PATH_CAT_TRANS,
    "hr": PATH_HR,
}

print("\\\\nPath check:")
for k, p in DATA_PATHS.items():
    print(f"  [{('OK' if os.path.exists(p) else 'MISSING')}] {k}: {p}")`,
          },
          {
            label: "Cell 3 — Load Olist tables from your paths",
            code: `# Fail clearly if core Olist files are missing
required = ["orders", "items", "reviews", "products"]
missing = [k for k in required if not os.path.exists(DATA_PATHS[k])]
if missing:
    raise FileNotFoundError(
        "Missing required Olist files: " + ", ".join(missing) +
        ". Download from Kaggle olistbr/brazilian-ecommerce, upload to Colab, fix PATH_* above."
    )

orders = pd.read_csv(PATH_ORDERS)
items = pd.read_csv(PATH_ITEMS)
reviews = pd.read_csv(PATH_REVIEWS)
products = pd.read_csv(PATH_PRODUCTS)
customers = pd.read_csv(PATH_CUSTOMERS) if os.path.exists(PATH_CUSTOMERS) else None
payments = pd.read_csv(PATH_PAYMENTS) if os.path.exists(PATH_PAYMENTS) else None
cat_trans = pd.read_csv(PATH_CAT_TRANS) if os.path.exists(PATH_CAT_TRANS) else None

# Enrich category names when translation file exists
if cat_trans is not None and "product_category_name" in products.columns:
    products = products.merge(cat_trans, on="product_category_name", how="left")

print("Loaded Olist shapes:")
print(" orders", orders.shape, "| items", items.shape, "| reviews", reviews.shape, "| products", products.shape)
print("orders columns:", list(orders.columns)[:8], "...")
print("reviews columns:", list(reviews.columns))`,
          },
          {
            label: "Cell 3b — Load IBM HR",
            code: `if not os.path.exists(PATH_HR):
    print("WARNING: IBM HR file not found at", PATH_HR)
    print("People-agent cells need: Kaggle pavansubhasht/ibm-hr-analytics-attrition-dataset")
    hr = None
else:
    hr = pd.read_csv(PATH_HR)
    print("Loaded IBM HR:", hr.shape, "columns sample:", list(hr.columns)[:10])`,
          },
          {
            label: "Cell 4 — Capstone case selector (real data)",
            code: `CASES = {
    "A_delivery_cx": "Delivery friction + low review scores on the marketplace",
    "B_category_growth": "Grow a mid-tier Olist category without destroying trust",
    "C_payments_risk": "Payment-mix and cancellations risk review",
    "D_people_cx": "Attrition risk (IBM HR) linked to CX capacity",
}
SELECTED = "A_delivery_cx"  # change me
print("Selected:", SELECTED, CASES[SELECTED])
goal = f"AI Business Consulting Platform engagement: {CASES[SELECTED]} using uploaded Olist/HR files only."

context = {
    "orders_head": orders.head(25).to_dict(orient="records"),
    "reviews_head": reviews.head(25).to_dict(orient="records"),
    "order_status": orders["order_status"].value_counts().to_dict() if "order_status" in orders.columns else {},
    "review_score": reviews["review_score"].value_counts().sort_index().to_dict() if "review_score" in reviews.columns else {},
}
if payments is not None:
    context["payments"] = payments.head(20).to_dict(orient="records")
if hr is not None:
    context["hr_head"] = hr.head(20).to_dict(orient="records")
    if "Attrition" in hr.columns:
        context["hr_attrition"] = hr["Attrition"].value_counts().to_dict()
print("Context keys:", list(context))`,
          },
          {
            label: "Cell 5 — Platform pipeline on uploaded data",
            code: `PIPELINE = [
    ("IntakeAgent", "Clarify problem, stakeholders, success metrics"),
    ("IndustryAgent", "Marketplace pressures implied by the tables"),
    ("MarketAgent", "Order/review patterns"),
    ("CustomerAgent", "Voice of customer from review text/scores"),
    ("RiskAgent", "Business risks + early warnings"),
    ("PeopleSignalAgent", "HR attrition signals if PATH_HR present else Not stated"),
    ("SolutionAgent", "Options with owners + experiments"),
    ("RoadmapAgent", "30/60/90 roadmap"),
    ("BoardAgent", "Board narrative"),
]
artifacts = {"case": SELECTED, "goal": goal}
prior = ""
for name, mission in PIPELINE:
    print("Running", name)
    out = llm(
        f"You are {name}. Mission: {mission}. Use ONLY context+prior. Cite column names. Mark Judgment. If missing say Not stated in the document/data.",
        f"GOAL:{goal}\\\\nCONTEXT:{json.dumps(context)[:9000]}\\\\nPRIOR:{prior[:5000]}",
    )
    artifacts[name] = out
    prior += f"\\\\n### {name}\\\\n{out}"
print("Agents complete:", [k for k in artifacts if k.endswith("Agent")])`,
          },
          {
            label: "Cell 6 — Board pack + scorecard",
            code: `board = llm(
    "Managing Partner. Final board pack Markdown with required sections: problem, industry, market, customer, risks, recommendations, executive summary, roadmap, appendix of agents.",
    json.dumps({k: artifacts[k] for k in artifacts if k.endswith("Agent")})[:16000],
)
open("olist_board_pack.md", "w", encoding="utf-8").write(board)
print(board)
scorecard = {
    "paths_orders_ok": os.path.exists(PATH_ORDERS),
    "paths_reviews_ok": os.path.exists(PATH_REVIEWS),
    "agents_ran": sum(k.endswith("Agent") for k in artifacts) >= 8,
    "board_chars": len(board),
}
print("SCORECARD", scorecard)
print("DEMO READY:", all([scorecard["paths_orders_ok"], scorecard["paths_reviews_ok"], scorecard["agents_ran"], scorecard["board_chars"] > 800]))`,
          }
        ],
      },
      {
        type: "heading",
        content: "Done when",
      },
      {
        type: "list",
        items: [
      "Olist (+ HR if needed) downloaded from the official links",
      "PATH_* set to /content/... uploads",
      "olist_board_pack.md written and scorecard DEMO READY true",
    ],
      },
    ],
    keyTakeaways: [
      "Platform = staged agents on real uploads.",
      "Board packs must survive viva challenge.",
      "Scorecard includes path existence checks.",
    ],
  },
};
