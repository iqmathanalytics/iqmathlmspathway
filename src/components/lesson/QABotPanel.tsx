"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";

interface BuildStep {
  id: number;
  title: string;
  filename: string;
  description: string;
  language: string;
  code: string;
}

const BUILD_STEPS: BuildStep[] = [
  {
    id: 1,
    title: "Install dependencies",
    filename: "terminal",
    description: "Install Flask and the Google Generative AI Python SDK.",
    language: "bash",
    code: `pip install flask
pip install google-generativeai`,
  },
  {
    id: 2,
    title: "Set up file structure",
    filename: "project layout",
    description: "Create the following folder and file structure before writing any code.",
    language: "text",
    code: `qna_chatbot/
├── app.py
├── templates/
│   └── index.html
└── static/
    └── main.js`,
  },
  {
    id: 3,
    title: "Create app.py",
    filename: "app.py",
    description: "Flask entry point. Registers the root route and renders the chat UI template.",
    language: "python",
    code: `from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)`,
  },
  {
    id: 4,
    title: "Create index.html",
    filename: "templates/index.html",
    description: "The chat UI. Loads Tailwind CSS, Showdown (markdown→HTML), and the Gemini SDK via CDN.",
    language: "html",
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chatbot using Gemini</title>
    <script src="https://cdn.tailwindcss.com/3.4.16"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js"></script>
    <style type="text/tailwindcss">
      @layer base {
        ul { list-style-type: circle; }
        ol { list-style-type: decimal; }
      }
    </style>
  </head>
  <body class="flex flex-col justify-between h-screen">
    <div>
      <p class="text-xl font-bold text-center text-green-500">
        QnA ChatBot - Gemini
      </p>
      <div class="overflow-y-auto" style="max-height: 80vh">
        <div id="messageHolder" class="flex flex-col m-4"></div>
      </div>
    </div>
    <div class="flex flex-row m-4">
      <input type="text"
        class="flex-1 border rounded-md m-2 border-green-600 p-2
               outline-none ring-2 ring-green-600 border-transparent"
        placeholder="Chat..." name="chat" id="chat" />
      <button id="btn" class="m-2 bg-blue-500 p-2 rounded-md text-white">
        Send
      </button>
    </div>
    <script type="importmap">
      { "imports": { "@google/generative-ai":
        "https://cdn.jsdelivr.net/npm/@google/generative-ai/+esm" } }
    </script>
    <script type="module"
      src="{{ url_for('static', filename='main.js') }}">
    </script>
  </body>
</html>`,
  },
  {
    id: 5,
    title: "Create main.js",
    filename: "static/main.js",
    description: "Initialises the Gemini chat session, handles sending messages, and renders responses as HTML.",
    language: "javascript",
    code: `import { GoogleGenerativeAI } from "@google/generative-ai";
const conv = new showdown.Converter();

const genAI = new GoogleGenerativeAI("YOUR_API_KEY_HERE");
const gen_model = genAI.getGenerativeModel({ model: "gemini-pro" });
const chat = gen_model.startChat({
    generationConfig: { maxOutputTokens: 1000 },
});

const chatGemini = async (message) => {
    addMessage(message, "end");
    let res = await chat.sendMessage(message);
    res = await res.response;
    let html = conv.makeHtml(res.text());
    addMessage(html, "start");
};

const addMessage = (msg, direction) => {
    const messageHolder = document.getElementById("messageHolder");
    const message = document.createElement("div");
    const colour = direction !== "start" ? "blue" : "green";
    message.innerHTML = \`
      <div class="flex flex-col items-\${direction}">
        <div class="bg-\${colour}-500 px-4 py-2 rounded-md text-white
             w-fit max-w-4xl mb-1">\${msg}</div>
      </div>\`;
    messageHolder.appendChild(message);
};

const messageInput = document.getElementById("chat");
const sendBtn = document.getElementById("btn");

sendBtn.addEventListener("click", function () {
    const message = messageInput.value;
    chatGemini(message);
    messageInput.value = "";
});`,
  },
  {
    id: 6,
    title: "Run the application",
    filename: "terminal",
    description: "Start the Flask dev server, then open the chatbot in your browser.",
    language: "bash",
    code: `python app.py
# Then open: http://127.0.0.1:5000`,
  },
];

const FLOW_STEPS = [
  { label: "Install\ndeps", color: "bg-violet-100 border-violet-300 text-violet-800" },
  { label: "File\nstructure", color: "bg-blue-100 border-blue-300 text-blue-800" },
  { label: "app.py", color: "bg-green-100 border-green-300 text-green-800" },
  { label: "index\n.html", color: "bg-orange-100 border-orange-300 text-orange-800" },
  { label: "main\n.js", color: "bg-yellow-100 border-yellow-300 text-yellow-800" },
  { label: "Run &\ntest", color: "bg-teal-100 border-teal-300 text-teal-800" },
];

export function QABotPanel() {
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState<Set<number>>(new Set());
  const [expanded, setExpanded] = useState<Set<number>>(new Set([1]));

  const handleCopy = (step: BuildStep) => {
    navigator.clipboard.writeText(step.code).then(() => {
      setCopied((prev) => new Set(prev).add(step.id));
      setChecked((prev) => new Set(prev).add(step.id));
      setTimeout(() => {
        setCopied((prev) => {
          const next = new Set(prev);
          next.delete(step.id);
          return next;
        });
      }, 2000);
    });
  };

  const toggleExpand = (id: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const completedCount = checked.size;
  const totalCount = BUILD_STEPS.length;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
          Build Steps — Copy code to tick off
        </p>
        <p className="mt-1 text-sm text-indigo-900">
          Copy each code block to mark the step as complete.
        </p>
        <div className="mt-2 h-1.5 w-full rounded-full bg-indigo-200">
          <div
            className="h-1.5 rounded-full bg-indigo-500 transition-all duration-500"
            style={{ width: `${(completedCount / totalCount) * 100}%` }}
          />
        </div>
        <p className="mt-1 text-xs text-indigo-700">
          {completedCount} / {totalCount} steps completed
        </p>
      </div>

      {/* Horizontal flow */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Build pipeline
        </p>
        <div className="flex items-center gap-1 overflow-x-auto pb-1">
          {FLOW_STEPS.map((step, i) => (
            <div key={step.label} className="flex shrink-0 items-center gap-1">
              <div
                className={`flex h-14 w-16 items-center justify-center rounded-lg border text-center text-[10px] font-semibold leading-tight ${step.color} ${
                  checked.has(i + 1) ? "opacity-60 line-through" : ""
                }`}
              >
                {step.label.split("\n").map((line, j) => (
                  <span key={j} className="block">{line}</span>
                ))}
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <span className="text-gray-400 text-xs font-bold">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step checklist */}
      <div className="space-y-2">
        {BUILD_STEPS.map((step) => {
          const done = checked.has(step.id);
          const open = expanded.has(step.id);
          const isCopied = copied.has(step.id);

          return (
            <div
              key={step.id}
              className={`rounded-xl border transition-colors ${
                done ? "border-green-300 bg-green-50" : "border-gray-200 bg-white"
              }`}
            >
              {/* Row header */}
              <button
                type="button"
                className="flex w-full items-start gap-2 px-3 py-2.5 text-left"
                onClick={() => toggleExpand(step.id)}
              >
                <span className="mt-0.5 shrink-0">
                  {done ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-gray-300" />
                  )}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wide text-gray-400">
                        Step {step.id}
                      </span>
                      <p className={`text-sm font-semibold ${done ? "text-green-800" : "text-gray-900"}`}>
                        {step.title}
                      </p>
                      <p className="text-[10px] text-gray-400 font-mono">{step.filename}</p>
                    </div>
                    {open ? (
                      <ChevronUp className="h-4 w-4 shrink-0 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 shrink-0 text-gray-400" />
                    )}
                  </div>
                </div>
              </button>

              {/* Expanded content */}
              {open && (
                <div className="border-t border-gray-100 px-3 pb-3 pt-2 space-y-2">
                  <p className="text-xs text-gray-600">{step.description}</p>

                  {/* Code block with copy button */}
                  <div className="relative rounded-lg bg-gray-900 overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-gray-800">
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                        {step.language} · {step.filename}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(step)}
                        className={`flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-semibold transition-colors ${
                          isCopied
                            ? "bg-green-600 text-white"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                        }`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="h-3 w-3" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="overflow-x-auto px-3 py-2.5 text-[11px] leading-relaxed text-green-300 font-mono whitespace-pre">
                      {step.code}
                    </pre>
                  </div>

                  {/* Tip for step 5 */}
                  {step.id === 5 && (
                    <div className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                        Important
                      </p>
                      <p className="text-xs text-amber-800 mt-0.5">
                        Replace <code className="font-mono bg-amber-100 px-0.5 rounded">YOUR_API_KEY_HERE</code> with your actual Gemini API key from Google AI Studio.
                      </p>
                    </div>
                  )}

                  {/* Tip for step 4 */}
                  {step.id === 4 && (
                    <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2">
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-700">
                        Note
                      </p>
                      <p className="text-xs text-blue-800 mt-0.5">
                        Save this file inside the <code className="font-mono bg-blue-100 px-0.5 rounded">templates/</code> folder — Flask looks there automatically for HTML templates.
                      </p>
                    </div>
                  )}

                  <p className="text-[10px] text-gray-400 italic">
                    Copy the code above to mark this step as complete ✓
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {completedCount === totalCount && (
        <div className="rounded-xl border border-green-300 bg-green-50 px-4 py-3 text-center">
          <p className="text-sm font-bold text-green-800">All steps complete!</p>
          <p className="text-xs text-green-700 mt-1">
            Your QnA ChatBot is ready. Visit <code className="font-mono bg-green-100 px-1 rounded">http://127.0.0.1:5000</code> to test it.
          </p>
        </div>
      )}
    </div>
  );
}
