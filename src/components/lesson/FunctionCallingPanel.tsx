"use client";

import { useState } from "react";
import { Check, CheckCircle2, Circle, ClipboardList, Copy, ExternalLink } from "lucide-react";

const COLAB_URL = "https://colab.research.google.com/#create=true";

type Step = {
  id: number;
  title: string;
  desc: string;
  code: string;
  language: string;
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Install dependencies and import libraries",
    desc: "Install LangChain and the Google GenAI integration, then import the chat model wrapper.",
    language: "python",
    code: `!pip install langchain langchain-google-genai

from langchain_google_genai import ChatGoogleGenerativeAI

secret_key = "YOUR_GOOGLE_GEMINI_API_KEY"
print("Dependencies installed and library imported.")`,
  },
  {
    id: 2,
    title: "Initialize the Gemini chat model",
    desc: "Create the LangChain chat model and test it with a simple prompt before adding tools.",
    language: "python",
    code: `llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    temperature=0,
    api_key=secret_key
)

resp = llm.invoke("hello google")
print("Model response:", resp.content)`,
  },
  {
    id: 3,
    title: "Define a function and bind it as a tool",
    desc: "Create a simple stock-price function and bind it so the model knows the function exists.",
    language: "python",
    code: `def get_stock_price(name: str) -> float:
    """Gives stock prices of some stocks."""
    if name == "TCS":
        return 3718.0
    if name == "infy":
        return 4210.0
    return 1000.00

tools = [get_stock_price]
llm_with_tools = llm.bind_tools(tools)

print("Tool bound successfully:", get_stock_price.__name__)`,
  },
  {
    id: 4,
    title: "Ask a stock-price query",
    desc: "The model reasons whether a tool should be called and returns the tool call request.",
    language: "python",
    code: `user_query = "What is the current TCS stock price"

resp_with_tool_call = llm_with_tools.invoke(user_query)
print("Tool calls:")
print(resp_with_tool_call.tool_calls)`,
  },
  {
    id: 5,
    title: "Execute the tool with model-selected arguments",
    desc: "Your application reads the tool name and arguments, validates them, and executes the function.",
    language: "python",
    code: `def format_result(stock_name: str, stock_price: float):
    """Formats the result for easier LLM processing."""
    return f"price of {stock_name} is {stock_price}"

for tool_call in resp_with_tool_call.tool_calls:
    if tool_call["name"] == "get_stock_price":
        stock_name = tool_call["args"]["name"]
        stock_price = get_stock_price(**tool_call["args"])

tool_final_output = format_result(stock_name, stock_price)
print("Tool output:", tool_final_output)`,
  },
  {
    id: 6,
    title: "Construct the final prompt",
    desc: "Pass the original query and tool result back to the LLM so it can generate a final grounded answer.",
    language: "python",
    code: `final_informed_output = llm.invoke([
    user_query + "\\n" + tool_final_output
])

print("Final informed response:")
print(final_informed_output.content)`,
  },
];

const TOOL_SCHEMA = `tools = [
    {
        "type": "function",
        "function": {
            "name": "get_stock_price",
            "parameters": {
                "type": "object",
                "properties": {
                    "name": { "type": "string" }
                },
                "required": ["name"]
            }
        }
    }
]`;

export function FunctionCallingPanel() {
  const [copiedId, setCopiedId] = useState<number | "schema" | null>(null);
  const [doneSteps, setDoneSteps] = useState<Set<number | "schema">>(new Set());

  function copyCode(id: number | "schema", code: string) {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(id);
      setDoneSteps((prev) => new Set([...prev, id]));
      setTimeout(() => setCopiedId(null), 1800);
    });
  }

  const completed = STEPS.filter((step) => doneSteps.has(step.id)).length;

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-white shadow-sm">
        <div className="border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-emerald-600" />
              <p className="text-base font-bold text-slate-900">Try in Jupyter</p>
            </div>
            <a
              href={COLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-orange-300 bg-white px-3 py-1.5 text-xs font-semibold text-orange-700 shadow-sm hover:bg-orange-50"
            >
              Open Colab
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Copy each cell into Colab/Jupyter. The checklist is only a progress helper.
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-emerald-100">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all"
              style={{ width: `${Math.round((completed / STEPS.length) * 100)}%` }}
            />
          </div>
          <p className="mt-1 text-xs font-semibold text-emerald-700">
            {completed} of {STEPS.length} implementation steps copied
          </p>
        </div>

        <div className="bg-white p-4">
          <img
            src="/images/function-calling-sequence.png"
            alt="Function calling sequence diagram showing user, model and tools interaction for stock price lookup"
            className="h-auto w-full rounded-xl border border-slate-100 object-contain"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm">
        <div className="border-b border-blue-100 bg-blue-50 px-4 py-3">
          <p className="text-sm font-bold text-blue-900">Tool Definition JSON</p>
          <p className="mt-1 text-sm leading-6 text-blue-800">
            This is the structure the application gives to the LLM so it knows the tool name and required arguments.
          </p>
        </div>
        <CodeCell
          id="schema"
          code={TOOL_SCHEMA}
          copied={copiedId === "schema"}
          done={doneSteps.has("schema")}
          onCopy={() => copyCode("schema", TOOL_SCHEMA)}
        />
      </div>

      {STEPS.map((step) => (
        <div key={step.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-start gap-3 border-b border-slate-100 bg-slate-50 px-4 py-3">
            {doneSteps.has(step.id) ? (
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
            ) : (
              <Circle className="mt-1 h-5 w-5 shrink-0 text-slate-300" />
            )}
            <div>
              <p className="text-[15px] font-bold text-gray-900">
                Step {step.id}: {step.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600">{step.desc}</p>
            </div>
          </div>
          <CodeCell
            id={step.id}
            code={step.code}
            copied={copiedId === step.id}
            done={doneSteps.has(step.id)}
            onCopy={() => copyCode(step.id, step.code)}
          />
        </div>
      ))}
    </div>
  );
}

function CodeCell({
  id,
  code,
  copied,
  done,
  onCopy,
}: {
  id: number | "schema";
  code: string;
  copied: boolean;
  done: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="overflow-hidden">
      <div className="flex items-center justify-between border-b border-gray-200 bg-[#f8f9fa] px-3 py-2">
        <span className="font-mono text-[11px] text-gray-500">[ {id} ] Python</span>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-500" />
              <span className="text-green-600">Copied</span>
            </>
          ) : done ? (
            <>
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Copy again
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto bg-white px-4 py-3 font-mono text-xs leading-6 text-gray-800">
        {code}
      </pre>
    </div>
  );
}
