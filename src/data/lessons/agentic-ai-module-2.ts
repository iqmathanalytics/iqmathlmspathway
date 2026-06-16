import type { TopicLesson } from "@/lib/types";

export const agenticAiModule2Lessons: Record<string, TopicLesson> = {
  "ai-m2-t1": {
    topicId: "ai-m2-t1",
    intro:
      "A prompt is the text you send to an LLM. The quality of your prompt directly determines the quality of the response — this skill is called prompt engineering.",
    blocks: [
      {
        type: "heading",
        content: "What is a Prompt?",
      },
      {
        type: "paragraph",
        content:
          "A prompt is every piece of text you send to a language model before it generates a response. It can be a question, an instruction, background context, examples of what you want, or any combination. The model has no memory between separate conversations — so everything the model needs to know must be in the prompt.",
      },
      {
        type: "heading",
        content: "The Three Ingredients of a Good Prompt",
      },
      {
        type: "visual",
        diagram: {
          title: "Anatomy of a Good Prompt",
          nodes: [
            { id: "context", label: "Context", sublabel: "Who is the AI? What situation are we in?" },
            { id: "task", label: "Task", sublabel: "What exactly should the AI do?" },
            { id: "format", label: "Format", sublabel: "How should the output look?" },
            { id: "result", label: "Great Response", sublabel: "Predictable, useful output" },
          ],
          arrows: [
            { from: "context", to: "result" },
            { from: "task", to: "result" },
            { from: "format", to: "result" },
          ],
          variant: "flow",
        },
      },
      {
        type: "heading",
        content: "Vague vs Specific Prompts",
      },
      {
        type: "list",
        items: [
          "Vague: 'Tell me about Python' → long, generic answer covering everything",
          "Specific: 'Explain Python list slicing in 3 bullet points for a beginner' → focused, useful",
          "Vague: 'Write an email' → you get a random email to nobody about nothing",
          "Specific: 'Write a 3-sentence follow-up email to a client who missed our meeting' → perfect",
        ],
      },
      {
        type: "tip",
        content:
          "Treat the LLM like a very smart but very literal assistant. It will do exactly what you ask — so ask precisely. If you want bullet points, say 'respond with bullet points'. If you want 3 examples, say '3 examples'.",
      },
      {
        type: "code",
        code: `# Building a structured prompt in Python
def build_prompt(context: str, task: str, format_: str) -> str:
    return f"""{context}

Task: {task}

Format: {format_}"""

prompt = build_prompt(
    context="You are a helpful Python tutor for beginners.",
    task="Explain what a variable is.",
    format_="Use simple language and one short code example."
)

print(prompt)`,
      },
      {
        type: "practice",
        practiceLabel: "Build a prompt",
        practicePrompt:
          "A good prompt is clear, specific, and gives context. Practice constructing one.",
        starterCode:
          '# A prompt has three key ingredients:\n# 1. Context  – what situation is the AI in?\n# 2. Task     – what do you want it to do?\n# 3. Format   – how should the answer look?\n\ncontext = "You are a helpful Python tutor for beginners."\ntask    = "Explain what a variable is."\nformat_ = "Use simple language and one short example."\n\nprompt = f"{context}\\n\\nTask: {task}\\n\\nFormat: {format_}"\nprint(prompt)',
      },
    ],
    keyTakeaways: [
      "A prompt is your only way to communicate intent to an LLM.",
      "Clear, specific prompts get better results than vague ones.",
      "Context, task, and format are the three key ingredients of a good prompt.",
    ],
  },

  "ai-m2-t2": {
    topicId: "ai-m2-t2",
    intro:
      "When you call an LLM API, there are two types of messages: the system prompt (persistent instructions) and user messages (the conversation). Mastering both gives you full control.",
    blocks: [
      {
        type: "heading",
        content: "The Message Role System",
      },
      {
        type: "paragraph",
        content:
          "Every API call to an LLM takes a list of messages. Each message has a role (who is speaking) and content (what they said). There are three roles: system (your instructions to the AI), user (the human's message), and assistant (the AI's previous replies). The model reads them in order and continues the conversation.",
      },
      {
        type: "visual",
        diagram: {
          title: "Message Roles",
          nodes: [
            { id: "system", label: "system", sublabel: "Your backstage instructions — the AI's persona, rules, and constraints" },
            { id: "user", label: "user", sublabel: "The human's message in the conversation" },
            { id: "assistant", label: "assistant", sublabel: "The AI's previous reply (used for multi-turn)" },
          ],
          variant: "stack",
        },
      },
      {
        type: "heading",
        content: "The System Prompt",
      },
      {
        type: "paragraph",
        content:
          "The system prompt is the most powerful part of your prompt. It sets the AI's persona, defines rules it must follow, specifies the output format, and gives it background knowledge. Users typically never see the system prompt — it runs invisibly behind the scenes. ChatGPT's 'Custom Instructions' feature is essentially a user-visible system prompt.",
      },
      {
        type: "list",
        items: [
          "Give the AI a persona: 'You are a senior software engineer who reviews code for security vulnerabilities'",
          "Set hard rules: 'Never recommend third-party libraries. Always use Python's standard library'",
          "Define the output format: 'Always respond in valid JSON with keys: answer, confidence, sources'",
          "Provide domain context: 'The user is a medical professional. Use clinical terminology'",
        ],
      },
      {
        type: "tip",
        content:
          "A well-crafted system prompt eliminates the need to repeat instructions in every user message. Write your system prompt once and it applies to every turn in the conversation.",
      },
      {
        type: "code",
        code: `messages = [
    {
        "role": "system",
        "content": (
            "You are a concise Python tutor. "
            "Always give one code example. "
            "Never exceed 100 words per response."
        )
    },
    {
        "role": "user",
        "content": "What is a list in Python?"
    },
    # After the AI replies, its response gets added as:
    # {"role": "assistant", "content": "A list is ..."}
    # Then the next user message continues the thread.
]`,
      },
      {
        type: "practice",
        practiceLabel: "Message structure",
        practicePrompt:
          "This is how a Groq/OpenAI API call is structured as a Python dict.",
        starterCode:
          'messages = [\n    {\n        "role": "system",\n        "content": "You are a concise Python tutor. Always give code examples."\n    },\n    {\n        "role": "user",\n        "content": "What is a list in Python?"\n    }\n]\n\nfor msg in messages:\n    print(f"[{msg[\'role\'].upper()}]")\n    print(msg[\'content\'])\n    print()',
      },
    ],
    keyTakeaways: [
      "The system prompt sets the AI's persona and rules — the user never sees it.",
      "User messages are the conversation turns from the human.",
      "Assistant messages are the AI's previous replies (used for multi-turn chat).",
    ],
  },

  "ai-m2-t3": {
    topicId: "ai-m2-t3",
    intro:
      "Few-shot prompting means showing the model a few examples of what you want before asking your question. It's one of the most powerful techniques in prompt engineering.",
    blocks: [
      {
        type: "heading",
        content: "Zero-Shot vs Few-Shot",
      },
      {
        type: "paragraph",
        content:
          "Zero-shot prompting means asking the model to do something with no examples — just an instruction. This works well for straightforward tasks. Few-shot prompting means providing 2–5 examples of input→output pairs before your actual request. The model sees the pattern and replicates it for the new input.",
      },
      {
        type: "visual",
        diagram: {
          title: "Zero-Shot vs Few-Shot",
          nodes: [
            { id: "zs_prompt", label: "Zero-Shot", sublabel: "Instruction only → model guesses format" },
            { id: "fs_prompt", label: "Few-Shot", sublabel: "2–5 examples → model learns exact format" },
            { id: "zs_out", label: "Variable Output", sublabel: "Format may differ each time" },
            { id: "fs_out", label: "Consistent Output", sublabel: "Matches your examples every time" },
          ],
          arrows: [
            { from: "zs_prompt", to: "zs_out" },
            { from: "fs_prompt", to: "fs_out" },
          ],
          variant: "compare",
        },
      },
      {
        type: "heading",
        content: "When to Use Few-Shot Prompting",
      },
      {
        type: "list",
        items: [
          "Classification tasks — spam detection, sentiment analysis, intent recognition",
          "Extraction tasks — pulling structured data (names, dates, prices) from unstructured text",
          "Translation or transformation — converting one format to another consistently",
          "Tone matching — when you need the AI to match your brand voice exactly",
          "Edge-case coverage — when you need to show the model how to handle tricky inputs",
        ],
      },
      {
        type: "heading",
        content: "Tips for Writing Good Examples",
      },
      {
        type: "list",
        items: [
          "Use 2–5 examples — more than 5 rarely helps and wastes tokens",
          "Cover diverse cases — don't use 3 nearly identical examples",
          "Include edge cases — show what to do when input is ambiguous",
          "Make the format explicit — if you want JSON, all examples should be JSON",
          "Keep examples short — the LLM learns the pattern, not every detail",
        ],
      },
      {
        type: "tip",
        content:
          "Few-shot prompting is essentially 'teaching by example'. Think of it like showing a new colleague 2–3 examples of how to fill in a form, rather than writing a 10-page instruction manual.",
      },
      {
        type: "code",
        code: `# Few-shot email classifier
few_shot_prompt = """
Classify each email as SPAM or NOT SPAM.

Email: "Congratulations! You've won £1,000,000!"
Label: SPAM

Email: "Hi Sarah, the team meeting is at 3pm tomorrow."
Label: NOT SPAM

Email: "URGENT: Your account will be suspended! Click here!"
Label: SPAM

Email: "Your order #12345 has been dispatched."
Label: NOT SPAM

Email: "Make £5,000 a week working from home — no experience needed!"
Label:
"""
# The LLM will continue: SPAM`,
      },
      {
        type: "practice",
        practiceLabel: "Build a few-shot prompt",
        practicePrompt:
          "Create a few-shot prompt that teaches the model to classify emails.",
        starterCode:
          'few_shot_prompt = """\nClassify each email as SPAM or NOT SPAM.\n\nEmail: "Congratulations! You won $1,000,000! Click here!"\nLabel: SPAM\n\nEmail: "Hi, your package will arrive tomorrow between 2-4pm."\nLabel: NOT SPAM\n\nEmail: "URGENT: Your account has been compromised! Reset now!"\nLabel: SPAM\n\nEmail: "Meeting rescheduled to 3pm on Thursday."\nLabel:\n"""\n\nprint(few_shot_prompt)\nprint("(An LLM would continue with: NOT SPAM)")',
      },
    ],
    keyTakeaways: [
      "Few-shot prompting teaches the model the pattern you want by example.",
      "Use 2–5 examples — more is not always better.",
      "Make sure your examples cover edge cases relevant to your use case.",
    ],
  },

  "ai-m2-t4": {
    topicId: "ai-m2-t4",
    intro:
      "Chain-of-thought prompting asks the model to think step by step before giving a final answer. This dramatically improves accuracy on complex tasks.",
    blocks: [
      {
        type: "heading",
        content: "Why Thinking Step by Step Helps",
      },
      {
        type: "paragraph",
        content:
          "LLMs generate text token by token. When you ask for a direct answer, the model commits to a response immediately — before it has 'worked through' the problem. When you ask it to reason step by step, it effectively uses its own output as scratch paper, which gives it more 'thinking space' and dramatically improves accuracy on math, logic, and multi-step problems.",
      },
      {
        type: "visual",
        diagram: {
          title: "Direct vs Chain-of-Thought",
          nodes: [
            { id: "q", label: "Question", sublabel: "Complex multi-step problem" },
            { id: "direct", label: "Direct Answer", sublabel: "Often wrong on hard problems" },
            { id: "cot", label: "Step-by-Step Reasoning", sublabel: "Work through each part" },
            { id: "cot_ans", label: "Correct Answer", sublabel: "Higher accuracy" },
          ],
          arrows: [
            { from: "q", to: "direct" },
            { from: "q", to: "cot" },
            { from: "cot", to: "cot_ans" },
          ],
          variant: "compare",
        },
      },
      {
        type: "heading",
        content: "How to Trigger Chain-of-Thought",
      },
      {
        type: "list",
        items: [
          "'Think step by step.' — the simplest and most effective trigger",
          "'Let's work through this carefully.' — encourages methodical reasoning",
          "'First, ... Then, ... Finally, ...' — give the model a structure to follow",
          "'Show your reasoning before giving the final answer.' — explicit instruction",
          "Zero-shot CoT: just append 'Think step by step.' to any prompt",
        ],
      },
      {
        type: "heading",
        content: "When to Use Chain-of-Thought",
      },
      {
        type: "list",
        items: [
          "Maths and calculations — percentage, compound interest, unit conversions",
          "Logic puzzles — who owns the zebra, knights and knaves problems",
          "Multi-step planning — 'How do I deploy a Python app to the cloud?'",
          "Debugging code — 'Walk through this function and find the bug'",
          "Ethical / nuanced decisions — 'Should I use a NoSQL or SQL database? Reason through the tradeoffs'",
        ],
      },
      {
        type: "tip",
        content:
          "Chain-of-thought is mostly NOT needed for simple tasks like translation, summarisation, or basic Q&A. Overusing it wastes tokens. Reserve it for tasks where the model genuinely needs to reason.",
      },
      {
        type: "code",
        code: `# Without chain-of-thought (often wrong on harder problems):
direct = "What is 15% of 240? Answer with just the number."
# Model answers: 36  ✓ (easy enough to get right directly)

# With chain-of-thought (reliable on any difficulty):
cot = """
What is 15% of 240? Think step by step.

Step 1: 10% of 240 = 240 × 0.10 = 24
Step 2: 5% of 240 = 24 ÷ 2 = 12
Step 3: 15% = 10% + 5% = 24 + 12 = 36

Answer: 36
"""
# For a harder problem like 17.5% of 843, CoT prevents mistakes.`,
      },
      {
        type: "practice",
        practiceLabel: "Chain-of-thought example",
        practicePrompt:
          "See the difference between a direct prompt and a chain-of-thought prompt.",
        starterCode:
          '# Without chain-of-thought:\ndirect_prompt = "Is 97 a prime number? Answer yes or no."\n\n# With chain-of-thought:\ncot_prompt = """\nIs 97 a prime number? Think step by step.\n\n1. Check if 97 is divisible by 2 → 97 / 2 = 48.5 (no)\n2. Check if 97 is divisible by 3 → 97 / 3 = 32.3 (no)\n3. Check if 97 is divisible by 5 → 97 / 5 = 19.4 (no)\n4. Check if 97 is divisible by 7 → 97 / 7 = 13.9 (no)\n5. √97 ≈ 9.8, so we only need to check primes up to 9.\n6. No divisors found. Therefore 97 IS prime.\n"""\n\nprint("Direct prompt:")\nprint(direct_prompt)\nprint()\nprint("Chain-of-thought prompt:")\nprint(cot_prompt)',
      },
    ],
    keyTakeaways: [
      "Adding 'think step by step' or 'let's think this through' improves reasoning.",
      "Chain-of-thought works especially well for maths, logic, and multi-step problems.",
      "The model's reasoning steps also help you debug when it goes wrong.",
    ],
  },

  "ai-m2-t5": {
    topicId: "ai-m2-t5",
    intro:
      "Great prompt engineers follow a set of proven patterns. These best practices will save you hours of trial and error when building AI applications.",
    blocks: [
      {
        type: "heading",
        content: "The 5 Golden Rules of Prompt Engineering",
      },
      {
        type: "list",
        items: [
          "Be specific — vague prompts get vague answers. State exactly what you want",
          "Give context — tell the model who it is and what the situation is",
          "Specify the format — JSON, bullet list, paragraph, table, code block",
          "Use positive instructions — say what TO do, not what NOT to do",
          "Iterate — test, evaluate the output, identify what's wrong, improve the prompt",
        ],
      },
      {
        type: "heading",
        content: "Common Prompt Engineering Mistakes",
      },
      {
        type: "list",
        items: [
          "Too vague: 'Summarise this' → instead: 'Summarise this in 3 bullet points for a non-technical audience'",
          "Negative framing: 'Don't use jargon' → instead: 'Use simple, everyday language'",
          "Missing format: 'List the steps' → instead: 'List the steps as numbered items, one per line'",
          "No persona: sending bare questions → instead: always start with a system prompt",
          "Prompt too long: stuffing 10 requirements in one prompt → break into smaller tasks",
        ],
      },
      {
        type: "heading",
        content: "The Prompt Engineering Iteration Loop",
      },
      {
        type: "visual",
        diagram: {
          title: "Prompt Improvement Cycle",
          nodes: [
            { id: "write", label: "Write Prompt", sublabel: "Start with your best guess" },
            { id: "test", label: "Test It", sublabel: "Run it 3–5 times" },
            { id: "evaluate", label: "Evaluate", sublabel: "What went wrong?" },
            { id: "improve", label: "Improve", sublabel: "Fix the weakest part" },
          ],
          arrows: [
            { from: "write", to: "test" },
            { from: "test", to: "evaluate" },
            { from: "evaluate", to: "improve" },
            { from: "improve", to: "write" },
          ],
          variant: "flow",
        },
      },
      {
        type: "tip",
        content:
          "Run your prompt 3–5 times before concluding it works. LLMs are probabilistic — a prompt that works once might fail on slightly different inputs. Test with edge cases.",
      },
      {
        type: "code",
        code: `def evaluate_prompt(prompt: str) -> dict:
    """Score a prompt against best practices."""
    issues = []
    if len(prompt) < 20:
        issues.append("Too short — add more context")
    if not any(w in prompt.lower() for w in ["you are", "your role", "as a"]):
        issues.append("Missing persona — add a system role")
    if not any(w in prompt.lower() for w in ["format", "bullet", "json", "list", "short", "brief", "paragraph"]):
        issues.append("Missing format instruction")
    if "don't" in prompt.lower() or "never" in prompt.lower():
        issues.append("Consider rephrasing negatives as positives")

    score = max(0, 10 - len(issues) * 2)
    return {"score": f"{score}/10", "issues": issues}

prompt = "You are a Python tutor. Explain f-strings briefly with one example in 2 sentences."
result = evaluate_prompt(prompt)
print(f"Score: {result['score']}")
for issue in result["issues"] or ["No issues found ✓"]:
    print(f"  • {issue}")`,
      },
      {
        type: "practice",
        practiceLabel: "Prompt checklist",
        practicePrompt: "Run this checklist against any prompt you write.",
        starterCode:
          'def evaluate_prompt(prompt: str) -> None:\n    checks = {\n        "Is specific (not vague)": len(prompt) > 20,\n        "Has context": any(w in prompt.lower() for w in ["you are", "your role", "context"]),\n        "States the task clearly": "?" in prompt or any(w in prompt.lower() for w in ["write", "explain", "list", "create", "summarise"]),\n        "Specifies output format": any(w in prompt.lower() for w in ["format", "bullet", "paragraph", "json", "table", "short", "brief"]),\n    }\n    \n    print("Prompt evaluation:")\n    for check, passed in checks.items():\n        status = "✅" if passed else "❌"\n        print(f"  {status}  {check}")\n\nprompt = "You are a Python tutor. Explain f-strings briefly with one example."\nevaluate_prompt(prompt)',
      },
    ],
    keyTakeaways: [
      "Be specific: vague prompts get vague answers.",
      "Specify the output format (bullet list, JSON, paragraph, code block).",
      "Iterate: test your prompt, see where it fails, and improve it.",
      "Avoid negatives ('don't do X') — tell the model what TO do instead.",
    ],
  },
};
