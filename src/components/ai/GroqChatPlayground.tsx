"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot, Send, Eye, EyeOff, ChevronDown, ChevronUp,
  Trash2, Loader2, AlertCircle, Sparkles, Settings2, Zap,
} from "lucide-react";
import {
  GROQ_API_KEY_UPDATED_EVENT,
  readStoredGroqApiKey,
  saveStoredGroqApiKey,
} from "@/lib/groq-api-key";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface GroqChatPlaygroundProps {
  defaultSystemPrompt?: string;
}

const MODELS = [
  { id: "llama3-70b-8192",    label: "LLaMA 3 70B",  tag: "Best" },
  { id: "llama3-8b-8192",     label: "LLaMA 3 8B",   tag: "Fast" },
  { id: "mixtral-8x7b-32768", label: "Mixtral 8×7B", tag: "Long ctx" },
];

const SUGGESTED_PROMPTS = [
  "Explain machine learning in one paragraph.",
  "What is the difference between a list and a tuple in Python?",
  "Write a Python function to reverse a string.",
  "How does a chatbot remember context?",
];

export function GroqChatPlayground({
  defaultSystemPrompt = "You are a helpful assistant.",
}: GroqChatPlaygroundProps) {
  const [apiKey, setApiKey]             = useState("");
  const [showKey, setShowKey]           = useState(false);
  const [systemPrompt, setSystemPrompt] = useState(defaultSystemPrompt);
  const [showSettings, setShowSettings] = useState(false);
  const [model, setModel]               = useState(MODELS[0].id);
  const [messages, setMessages]         = useState<Message[]>([]);
  const [input, setInput]               = useState("");
  const [streaming, setStreaming]       = useState(false);
  const [error, setError]               = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const sync = () => setApiKey(readStoredGroqApiKey());
    sync();
    window.addEventListener(GROQ_API_KEY_UPDATED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(GROQ_API_KEY_UPDATED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const saveApiKey = (val: string) => {
    setApiKey(val);
    saveStoredGroqApiKey(val);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || streaming) return;
    if (!apiKey.trim()) { setError("Enter your Groq API key to start chatting."); return; }
    setError(null);
    setInput("");
    const newUserMessage: Message = { role: "user", content: msg };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);
    setStreaming(true);
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const apiMessages = [
        { role: "system" as const, content: systemPrompt },
        ...updatedMessages.map((m) => ({ role: m.role, content: m.content })),
      ];
      const res = await fetch("/api/groq-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ apiKey, messages: apiMessages, model }),
      });
      if (!res.ok) {
        const json = (await res.json()) as { error?: string };
        throw new Error(json.error ?? `HTTP ${res.status}`);
      }
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error("No response body");
      let buffer = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const data = line.slice(6).trim();
          if (data === "[DONE]") break;
          try {
            const parsed = JSON.parse(data) as { content?: string; error?: string };
            if (parsed.error) throw new Error(parsed.error);
            if (parsed.content) {
              setMessages((prev) => {
                const next = [...prev];
                const last = next[next.length - 1];
                if (last?.role === "assistant") next[next.length - 1] = { ...last, content: last.content + parsed.content };
                return next;
              });
            }
          } catch (e) {
            if (e instanceof Error && e.message !== "Unexpected end of JSON input") throw e;
          }
        }
      }
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Something went wrong.";
      setError(errMsg);
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant" && last.content === "") return prev.slice(0, -1);
        return prev;
      });
    } finally {
      setStreaming(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); void sendMessage(); }
  };

  const selectedModel = MODELS.find((m) => m.id === model) ?? MODELS[0];
  const hasKey = apiKey.trim().length > 0;

  return (
    <div className="flex flex-col h-full min-h-0 rounded-2xl overflow-hidden shadow-lg border border-gray-800/60 bg-gray-950">
      {/* Gradient header */}
      <div className="relative flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-violet-900 via-indigo-900 to-violet-900 border-b border-violet-700/40">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/20 ring-1 ring-violet-400/40">
          <Bot className="h-4 w-4 text-violet-300" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white leading-tight">Groq Playground</p>
          <p className="text-[10px] text-violet-300 leading-tight truncate">
            {selectedModel.label} · {hasKey ? "Ready" : "Add API key to start"}
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          {hasKey && (
            <span className="flex items-center gap-1 rounded-full bg-green-500/20 px-2 py-0.5 text-[10px] font-semibold text-green-400 ring-1 ring-green-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          )}
          <button type="button" onClick={() => setShowSettings((s) => !s)}
            className={`rounded-lg p-1.5 transition-colors ${showSettings ? "bg-violet-500/30 text-violet-200" : "text-violet-400 hover:bg-violet-500/20 hover:text-violet-200"}`}
            title="Settings">
            <Settings2 className="h-4 w-4" />
          </button>
          {messages.length > 0 && !streaming && (
            <button type="button" onClick={() => setMessages([])}
              className="rounded-lg p-1.5 text-violet-400 hover:bg-red-500/20 hover:text-red-400 transition-colors" title="Clear chat">
              <Trash2 className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Collapsible settings */}
      {showSettings && (
        <div className="border-b border-gray-800 bg-gray-900/80 px-4 py-3 space-y-3">
          <div>
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-gray-500">Groq API Key</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input type={showKey ? "text" : "password"} value={apiKey} onChange={(e) => saveApiKey(e.target.value)}
                  placeholder="gsk_..."
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 pr-9 text-xs font-mono text-gray-200 placeholder-gray-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/50" />
                <button type="button" onClick={() => setShowKey((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors">
                  {showKey ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                </button>
              </div>
              <a href="https://console.groq.com/keys" target="_blank" rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-1 rounded-lg bg-violet-600 px-3 py-2 text-xs font-semibold text-white hover:bg-violet-500 transition-colors">
                <Zap className="h-3 w-3" />Get key
              </a>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-gray-500">Model</label>
            <div className="flex gap-1.5">
              {MODELS.map((m) => (
                <button key={m.id} type="button" onClick={() => setModel(m.id)}
                  className={`flex-1 rounded-lg border px-2 py-1.5 text-[10px] font-semibold transition-all ${model === m.id ? "border-violet-500 bg-violet-500/20 text-violet-300" : "border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600 hover:text-gray-300"}`}>
                  <span className="block truncate">{m.label}</span>
                  <span className={`block text-[9px] ${model === m.id ? "text-violet-400" : "text-gray-600"}`}>{m.tag}</span>
                </button>
              ))}
            </div>
          </div>
          <div>
            <button type="button" onClick={() => setShowSettings((s) => !s)}
              className="mb-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500 hover:text-gray-400">
              {showSettings ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              System Prompt
              {systemPrompt !== defaultSystemPrompt && <span className="ml-1 rounded-full bg-violet-500/20 px-1.5 py-0.5 text-violet-400 text-[9px]">custom</span>}
            </button>
            <textarea value={systemPrompt} onChange={(e) => setSystemPrompt(e.target.value)} rows={2}
              className="w-full rounded-lg border border-gray-700 bg-gray-800 p-2 text-xs text-gray-300 focus:border-violet-500 focus:outline-none resize-none leading-relaxed" />
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto min-h-0 px-3 py-4 space-y-4 [scrollbar-width:thin] [scrollbar-color:theme(colors.gray.700)_transparent]">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center py-6 gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 ring-1 ring-violet-500/30">
              <Sparkles className="h-6 w-6 text-violet-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-300">Groq Playground</p>
              <p className="mt-0.5 text-xs text-gray-500">{hasKey ? "Start chatting below." : "Add your API key in Settings to begin."}</p>
            </div>
            {hasKey && (
              <div className="w-full space-y-1.5 mt-2">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-600">Try a prompt</p>
                {SUGGESTED_PROMPTS.map((p) => (
                  <button key={p} type="button" onClick={() => void sendMessage(p)}
                    className="w-full rounded-xl border border-gray-700/60 bg-gray-900 px-3 py-2 text-left text-xs text-gray-400 hover:border-violet-500/50 hover:bg-violet-500/5 hover:text-violet-300 transition-all">
                    {p}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`flex items-end gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <div className="shrink-0 mb-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600">
                <Bot className="h-3 w-3 text-white" />
              </div>
            )}
            <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
              msg.role === "user"
                ? "bg-gradient-to-br from-violet-600 to-indigo-600 text-white rounded-br-sm shadow-lg shadow-violet-900/30"
                : "bg-gray-800 text-gray-100 rounded-bl-sm border border-gray-700/50"
            }`}>
              {msg.content}
              {msg.role === "assistant" && msg.content === "" && streaming && (
                <span className="inline-flex items-center gap-1.5 text-gray-400">
                  <span className="flex gap-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                  </span>
                </span>
              )}
            </div>
            {msg.role === "user" && (
              <div className="shrink-0 mb-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 text-[10px] font-bold text-gray-300">U</div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {error && (
        <div className="mx-3 mb-2 flex items-start gap-2 rounded-xl bg-red-900/30 border border-red-700/50 px-3 py-2 text-xs text-red-300">
          <AlertCircle className="h-3.5 w-3.5 mt-0.5 shrink-0 text-red-400" />
          {error}
        </div>
      )}

      {/* Input */}
      <div className="border-t border-gray-800 bg-gray-900/50 px-3 py-2.5 flex items-end gap-2">
        <textarea ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} disabled={streaming}
          placeholder={hasKey ? "Type a message… (Enter to send)" : "Add API key in Settings first"}
          rows={1}
          className="flex-1 resize-none rounded-xl border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-600 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500/30 disabled:opacity-40 max-h-28 overflow-y-auto transition-colors"
          style={{ minHeight: "38px" }} />
        <button type="button" onClick={() => void sendMessage()} disabled={streaming || !input.trim() || !hasKey}
          className="rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 p-2.5 text-white shadow-lg shadow-violet-900/30 transition-all hover:from-violet-500 hover:to-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none">
          {streaming ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
