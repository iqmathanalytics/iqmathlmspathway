import type { TopicLesson } from "@/lib/types";

export const agenticAiModule4Lessons: Record<string, TopicLesson> = {
  "ai-m4-t1": {
    topicId: "ai-m4-t1",
    intro:
      "LLMs are stateless — they have no memory between calls. To build a chatbot that remembers the conversation, you pass the full chat history with every API call.",
    blocks: [
      {
        type: "heading",
        content: "Why LLMs Are Stateless",
      },
      {
        type: "paragraph",
        content:
          "Each API call to an LLM is completely independent. The model does not remember the previous call, your name, or anything you said before. This is different from a human conversation where both parties remember what was said. To give the illusion of memory, you must pass the entire conversation history with every single API call.",
      },
      {
        type: "visual",
        diagram: {
          title: "Stateless vs Stateful",
          nodes: [
            { id: "call1", label: "API Call 1", sublabel: "'What is Python?'" },
            { id: "resp1", label: "Response 1", sublabel: "'Python is a language…'" },
            { id: "call2", label: "API Call 2", sublabel: "history + 'Give me an example'" },
            { id: "resp2", label: "Response 2", sublabel: "Remembers context from Call 1" },
          ],
          arrows: [
            { from: "call1", to: "resp1" },
            { from: "resp1", to: "call2", label: "append to history" },
            { from: "call2", to: "resp2" },
          ],
          variant: "flow",
        },
      },
      {
        type: "heading",
        content: "Building the History List",
      },
      {
        type: "paragraph",
        content:
          "Your application maintains a Python list of message dicts. After each turn, you append the user's message (role: 'user') and the model's reply (role: 'assistant') to this list. The next API call includes the entire updated list — so the model can see the full conversation.",
      },
      {
        type: "code",
        code: `from groq import Groq
import os

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

# Initialise history with system prompt
history = [
    {"role": "system", "content": "You are a helpful Python tutor."}
]

def chat(user_message: str) -> str:
    # 1. Add user's message to history
    history.append({"role": "user", "content": user_message})

    # 2. Call API with FULL history
    response = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=history,           # the entire conversation
        max_tokens=500,
    )

    # 3. Extract reply and add to history
    reply = response.choices[0].message.content
    history.append({"role": "assistant", "content": reply})

    return reply

# Each call builds on the previous ones
print(chat("What is a list?"))
print(chat("Can it hold different types?"))  # model remembers context
print(chat("How do I add an item?"))         # and again`,
      },
      {
        type: "heading",
        content: "Managing History Length",
      },
      {
        type: "list",
        items: [
          "Every message in history costs tokens — long histories are expensive",
          "If history grows beyond the context window, older messages get dropped",
          "Strategy 1: Keep last N turns — simple, works for most chatbots",
          "Strategy 2: Summarise old turns — compress history when it gets long",
          "Strategy 3: Sliding window — always keep system prompt + last 10 messages",
        ],
      },
      {
        type: "tip",
        content:
          "For a learning chatbot, keeping the last 10 turns is usually enough. Each turn = 2 messages (user + assistant). So history[0] (system) + history[-20:] keeps the most recent 10 exchanges.",
      },
      {
        type: "practice",
        practiceLabel: "Build chat history",
        practicePrompt:
          "Simulate how chat history is accumulated across multiple turns.",
        starterCode:
          'def add_message(history: list, role: str, content: str) -> list:\n    """Add a message to the chat history."""\n    history.append({"role": role, "content": content})\n    return history\n\n# Start with a system prompt\nhistory = [{"role": "system", "content": "You are a helpful Python tutor."}]\n\n# Simulate a conversation\nhistory = add_message(history, "user",      "What is a list?")\nhistory = add_message(history, "assistant", "A list is an ordered, mutable collection: [1, 2, 3]")\nhistory = add_message(history, "user",      "Can it hold different types?")\nhistory = add_message(history, "assistant", "Yes! [1, \'hello\', True, 3.14] is valid.")\nhistory = add_message(history, "user",      "How do I add an item?")\n\n# This full history goes to the API on every call\nprint(f"Messages in history: {len(history)}")\nfor msg in history:\n    print(f"  [{msg[\'role\']:9}] {msg[\'content\']}")',
      },
    ],
    keyTakeaways: [
      "LLMs have no built-in memory — you must pass the full conversation each time.",
      "The history is a list of {'role': ..., 'content': ...} dicts.",
      "Watch the context window — very long histories need to be truncated or summarised.",
    ],
  },

  "ai-m4-t2": {
    topicId: "ai-m4-t2",
    intro:
      "Now let's put it all together. A complete chatbot is a loop that takes user input, adds it to history, calls the API, gets a reply, and adds that reply to history too.",
    blocks: [
      {
        type: "heading",
        content: "The Chatbot Loop Pattern",
      },
      {
        type: "paragraph",
        content:
          "A chatbot is fundamentally a while loop. Each iteration: read user input → add to history → call the API → print the reply → add reply to history → repeat. Adding 'quit' as an exit condition makes it interactive. This is the same core pattern used by ChatGPT, Claude, and every other conversational AI product.",
      },
      {
        type: "visual",
        diagram: {
          title: "Chatbot Conversation Loop",
          nodes: [
            { id: "start", label: "Start", sublabel: "System prompt → history" },
            { id: "input", label: "Read User Input", sublabel: "input() or API trigger" },
            { id: "append_user", label: "Append User Msg", sublabel: "history += user message" },
            { id: "api", label: "Call Groq API", sublabel: "Send full history" },
            { id: "reply", label: "Get Reply", sublabel: "choices[0].message.content" },
            { id: "append_bot", label: "Append Bot Msg", sublabel: "history += assistant reply" },
            { id: "print", label: "Print Reply", sublabel: "Show to user" },
          ],
          arrows: [
            { from: "start", to: "input" },
            { from: "input", to: "append_user" },
            { from: "append_user", to: "api" },
            { from: "api", to: "reply" },
            { from: "reply", to: "append_bot" },
            { from: "append_bot", to: "print" },
            { from: "print", to: "input", label: "loop" },
          ],
          variant: "flow",
        },
      },
      {
        type: "code",
        code: `from groq import Groq
import os

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

def run_chatbot(system_prompt: str) -> None:
    """Interactive chatbot with persistent memory."""
    history = [{"role": "system", "content": system_prompt}]
    print("Chatbot ready. Type 'quit' to exit.\\n")

    while True:
        user_input = input("You: ").strip()
        if not user_input or user_input.lower() == "quit":
            print("Goodbye!")
            break

        history.append({"role": "user", "content": user_input})

        response = client.chat.completions.create(
            model="llama3-70b-8192",
            messages=history,
            max_tokens=500,
        )

        reply = response.choices[0].message.content
        history.append({"role": "assistant", "content": reply})
        print(f"Bot: {reply}\\n")

# Run it:
run_chatbot("You are a helpful Python tutor. Answer concisely.")`,
      },
      {
        type: "heading",
        content: "Customising the Chatbot Persona",
      },
      {
        type: "list",
        items: [
          "Customer support bot: 'You are a helpful support agent for Acme Software. Only answer questions about our product.'",
          "Code reviewer: 'You are a senior Python engineer. Review code for bugs, style issues, and security.'",
          "Language tutor: 'You are a friendly Spanish tutor. Correct grammar mistakes and explain in simple terms.'",
          "Data analyst: 'You are a data analyst. Explain findings in plain English with one chart suggestion per answer.'",
        ],
      },
      {
        type: "tip",
        content:
          "The system prompt is your most powerful tool. A great system prompt can turn a generic LLM into a highly specialised, consistent assistant. Spend more time on the system prompt than on anything else.",
      },
      {
        type: "practice",
        practiceLabel: "Chatbot structure",
        practicePrompt:
          "Study this chatbot loop — it's the core pattern for every conversational AI app.",
        starterCode:
          '# Full chatbot pattern (without real API call for the IDE)\n\ndef simulate_llm_response(messages: list) -> str:\n    """Placeholder — in real code, call groq client here."""\n    last_user_msg = messages[-1]["content"]\n    return f"[AI response to: {last_user_msg[:40]}]"\n\ndef run_chatbot():\n    print("Chatbot ready! (type \'quit\' to exit)")\n    \n    history = [\n        {"role": "system", "content": "You are a helpful Python tutor."}\n    ]\n    \n    # Simulate 3 turns\n    test_inputs = ["What is a variable?", "Give me an example.", "Thank you!"]\n    \n    for user_input in test_inputs:\n        print(f"\\nYou: {user_input}")\n        \n        # Add user message to history\n        history.append({"role": "user", "content": user_input})\n        \n        # Get AI response (replace with real API call)\n        reply = simulate_llm_response(history)\n        \n        # Add AI reply to history\n        history.append({"role": "assistant", "content": reply})\n        \n        print(f"Bot: {reply}")\n    \n    print(f"\\nTotal messages in history: {len(history)}")\n\nrun_chatbot()',
      },
    ],
    keyTakeaways: [
      "The chatbot loop: get input → append to history → call API → append reply → repeat.",
      "Always append both the user message AND the assistant reply to maintain context.",
      "A system prompt at the start of history controls the bot's persona across the whole conversation.",
    ],
  },

  "ai-m4-t3": {
    topicId: "ai-m4-t3",
    intro:
      "Now test the chatbot you have been building — live, in your browser. Paste your Groq API key on the right, customise the system prompt, choose a model, and start chatting. Your key is never stored on our servers.",
    blocks: [
      {
        type: "heading",
        content: "Test Your Chatbot Live",
      },
      {
        type: "paragraph",
        content:
          "The playground below lets you call the real Groq API directly from this page. Enter your free Groq API key, choose a model, write a system prompt, and start chatting. This is the same interaction your users will have when you build your own chatbot.",
      },
      {
        type: "heading",
        content: "Things to Try",
      },
      {
        type: "list",
        items: [
          "Change the system prompt to 'You are a pirate. Respond in pirate speak.' — notice how the persona changes completely",
          "Try the same question with temperature 0 vs temperature 1.2 — see the difference in creativity",
          "Ask a multi-turn question ('What is Python?' then 'Give me an example') — the model remembers",
          "Switch from llama3-70b to llama3-8b — compare response quality and speed",
          "Set max_tokens to 50 — see how the response gets cut off",
        ],
      },
      {
        type: "tip",
        content:
          "Your Groq API key is sent directly from your browser to our server-side proxy, then forwarded to Groq. It is never logged, stored, or used for anything else. You can verify this by checking the /api/groq-chat route in the source code.",
      },
      {
        type: "groq-playground",
        systemPrompt:
          "You are a helpful Python and AI tutor. Answer clearly and concisely, using short code examples where useful.",
      },
    ],
    keyTakeaways: [
      "The system prompt shapes every response — try changing it and see the difference.",
      "Your Groq API key is sent directly from your browser to our server-side proxy, then to Groq. It is never logged or stored.",
      "LLaMA 3 70B gives the best answers; LLaMA 3 8B is fastest for quick tests.",
    ],
  },

  "ai-m4-t4": {
    topicId: "ai-m4-t4",
    intro:
      "Streaming makes your chatbot feel instant — words appear as they are generated, just like ChatGPT. Without streaming, the user waits for the whole response before seeing anything.",
    blocks: [
      {
        type: "heading",
        content: "Why Streaming Matters for UX",
      },
      {
        type: "paragraph",
        content:
          "Without streaming, your chatbot feels slow and unresponsive because the user sees nothing while the model is generating. A 500-token response might take 3–5 seconds — a long silence feels like the app crashed. With streaming, words appear immediately and the user can start reading while the rest is still being generated. This is how ChatGPT, Claude, and every major AI product works.",
      },
      {
        type: "visual",
        diagram: {
          title: "Non-Streaming vs Streaming Response",
          nodes: [
            { id: "req", label: "Request Sent", sublabel: "User hits Enter" },
            { id: "wait", label: "3–5 Second Wait", sublabel: "Non-streaming: silence" },
            { id: "full", label: "Full Response", sublabel: "Appears all at once" },
            { id: "stream_start", label: "First Word", sublabel: "Streaming: appears in <1s" },
            { id: "stream_rest", label: "Remaining Words", sublabel: "Appear word by word" },
          ],
          arrows: [
            { from: "req", to: "wait" },
            { from: "wait", to: "full" },
            { from: "req", to: "stream_start" },
            { from: "stream_start", to: "stream_rest" },
          ],
          variant: "compare",
        },
      },
      {
        type: "heading",
        content: "How to Enable Streaming",
      },
      {
        type: "paragraph",
        content:
          "Adding streaming to your Groq call takes one change: set stream=True. Instead of returning a complete response object, the API returns an iterator. You loop over it and print each chunk as it arrives. The chunk's text is at chunk.choices[0].delta.content.",
      },
      {
        type: "code",
        code: `from groq import Groq
import os

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

messages = [{"role": "user", "content": "Explain Python generators in simple terms."}]

# The ONLY difference is stream=True
stream = client.chat.completions.create(
    model="llama3-70b-8192",
    messages=messages,
    max_tokens=500,
    stream=True,           # ← enable streaming
)

# Iterate over chunks as they arrive
full_response = ""
for chunk in stream:
    delta = chunk.choices[0].delta.content
    if delta:
        print(delta, end="", flush=True)  # print without newline
        full_response += delta

print()  # newline after stream ends
# full_response now contains the complete text`,
      },
      {
        type: "heading",
        content: "Streaming in Web Applications",
      },
      {
        type: "list",
        items: [
          "In Next.js / React: use ReadableStream with TextDecoder and update state on each chunk",
          "In FastAPI: use StreamingResponse with an async generator that yields chunks",
          "In Flask: use Response with a generator function and mimetype='text/event-stream'",
          "Always flush the output buffer on each chunk — otherwise chunks get batched",
          "Accumulate the full response in a variable to save to history after the stream ends",
        ],
      },
      {
        type: "tip",
        content:
          "With streaming, you can't add the assistant message to history until the stream ends (because you don't have the full text yet). Accumulate chunks into a string and append to history after the loop.",
      },
      {
        type: "practice",
        practiceLabel: "Streaming template",
        practicePrompt:
          "See the streaming API pattern. The key change is stream=True.",
        starterCode:
          '# Streaming response template for Groq\n# In real code, uncomment the groq imports and client\n\nimport time\n\ndef simulate_streaming(text: str):\n    """Simulate word-by-word streaming output."""\n    words = text.split()\n    for word in words:\n        print(word, end=" ", flush=True)\n        time.sleep(0.05)  # simulate network delay\n    print()  # newline at end\n\n"""\n# Real streaming code:\nstream = client.chat.completions.create(\n    model="llama3-70b-8192",\n    messages=messages,\n    stream=True  # ← this is the only change!\n)\n\nfor chunk in stream:\n    if chunk.choices[0].delta.content:\n        print(chunk.choices[0].delta.content, end="", flush=True)\n"""\n\n# Simulated output:\nprint("Bot: ", end="")\nsimulate_streaming("Streaming makes responses feel instant because words appear as they are generated rather than all at once.")',
      },
    ],
    keyTakeaways: [
      "Add stream=True to your API call to enable streaming.",
      "Iterate over the stream and print each chunk.choices[0].delta.content as it arrives.",
      "Streaming significantly improves perceived performance for long responses.",
    ],
  },

  "ai-m4-t5": {
    topicId: "ai-m4-t5",
    intro:
      "Two API parameters — temperature and max_tokens — have a huge impact on response quality. Understanding them lets you fine-tune your chatbot's behaviour precisely.",
    blocks: [
      {
        type: "heading",
        content: "Temperature",
      },
      {
        type: "paragraph",
        content:
          "Temperature controls how random the model's word choices are. At temperature 0, the model always picks the most probable next token — responses are deterministic and consistent. As temperature rises, less probable tokens get a chance, making responses more varied and creative. Very high temperatures (above 1.5) can produce incoherent or off-topic text.",
      },
      {
        type: "visual",
        diagram: {
          title: "Temperature Scale",
          nodes: [
            { id: "t0", label: "0.0", sublabel: "Deterministic — same output every time" },
            { id: "t07", label: "0.7", sublabel: "Balanced — default for most chatbots" },
            { id: "t12", label: "1.2", sublabel: "Creative — more varied responses" },
            { id: "t2", label: "2.0", sublabel: "Very random — often incoherent" },
          ],
          variant: "stack",
        },
      },
      {
        type: "heading",
        content: "max_tokens",
      },
      {
        type: "paragraph",
        content:
          "max_tokens limits how long the model's response can be. This is crucial for production: without a limit, a single answer could use thousands of tokens, draining your quota. Set max_tokens based on what you expect the answer to be — 100–200 for Q&A, 500–1000 for explanations, 2000+ for long-form generation.",
      },
      {
        type: "heading",
        content: "Other Useful Parameters",
      },
      {
        type: "list",
        items: [
          "top_p (0–1): alternative to temperature; 0.9 means consider only tokens that make up 90% of probability mass",
          "frequency_penalty (0–2): penalises repeating the same words — increase to 0.5 if responses feel repetitive",
          "presence_penalty (0–2): penalises using topics already mentioned — increase to encourage diverse content",
          "stop: a list of strings that stop generation when encountered, e.g. ['\\n', 'END']",
          "seed: set an integer for reproducible outputs (experimental; not 100% deterministic)",
        ],
      },
      {
        type: "tip",
        content:
          "Don't change temperature AND top_p at the same time — they both control randomness. Pick one approach: either set temperature and leave top_p at default (1.0), or set top_p and leave temperature at 1.0.",
      },
      {
        type: "code",
        code: `# Recommended settings for common use cases
CONFIGS = {
    "code_generation": {
        "temperature": 0.1,   # precise, consistent
        "max_tokens": 1500,
    },
    "factual_qa": {
        "temperature": 0.3,   # focused but slightly flexible
        "max_tokens": 300,
    },
    "chatbot": {
        "temperature": 0.7,   # natural conversation
        "max_tokens": 600,
    },
    "creative_writing": {
        "temperature": 1.1,   # creative, varied
        "max_tokens": 2000,
        "frequency_penalty": 0.4,  # less repetition
    },
}`,
      },
      {
        type: "practice",
        practiceLabel: "Parameter effects",
        practicePrompt:
          "See how temperature and max_tokens change the style and length of responses.",
        starterCode:
          'configs = [\n    {\n        "name": "Precise / Factual",\n        "temperature": 0.1,\n        "max_tokens": 200,\n        "use_case": "Code generation, factual Q&A, data extraction"\n    },\n    {\n        "name": "Balanced",\n        "temperature": 0.7,\n        "max_tokens": 500,\n        "use_case": "General chatbot, tutoring, explanations"\n    },\n    {\n        "name": "Creative",\n        "temperature": 1.2,\n        "max_tokens": 1000,\n        "use_case": "Story writing, brainstorming, poetry"\n    },\n]\n\nfor cfg in configs:\n    print(f"\\n--- {cfg[\'name\']} ---")\n    print(f"  temperature: {cfg[\'temperature\']}")\n    print(f"  max_tokens:  {cfg[\'max_tokens\']}")\n    print(f"  best for:    {cfg[\'use_case\']}")',
      },
    ],
    keyTakeaways: [
      "Temperature (0–2): lower = more focused and deterministic, higher = more creative and varied.",
      "max_tokens limits the length of the reply — set it to avoid unexpectedly long (costly) responses.",
      "For a coding assistant use temperature 0.1–0.3; for creative writing use 0.8–1.2.",
    ],
  },
};
