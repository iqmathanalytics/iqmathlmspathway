import type { TopicLesson } from "@/lib/types";

export const agenticAiModule6Lessons: Record<string, TopicLesson> = {
  "ai-m6-t1": {
    topicId: "ai-m6-t1",
    intro:
      "Retrieval-Augmented Generation (RAG) lets your AI answer questions from your own documents — a PDF, a website, a database. Instead of relying on training data, the bot retrieves relevant text first, then answers.",
    blocks: [
      {
        type: "heading",
        content: "The Problem RAG Solves",
      },
      {
        type: "paragraph",
        content:
          "LLMs are trained on data up to a certain date (the 'knowledge cutoff'). They know nothing about your company's internal documents, last week's news, or your customer's data. RAG solves this by adding a retrieval step: before generating a response, the system fetches relevant text from your own sources and includes it in the prompt.",
      },
      {
        type: "visual",
        diagram: {
          title: "RAG vs Standard LLM",
          nodes: [
            { id: "query", label: "User Query", sublabel: "What does our refund policy say?" },
            { id: "standard", label: "Standard LLM", sublabel: "Only knows training data" },
            { id: "standard_out", label: "Hallucinated Answer", sublabel: "Guesses or says 'I don't know'" },
            { id: "retrieve", label: "RAG: Retrieve", sublabel: "Searches your documents" },
            { id: "augment", label: "RAG: Augment Prompt", sublabel: "Adds retrieved text to prompt" },
            { id: "generate", label: "RAG: Generate", sublabel: "Answers from your actual policy" },
          ],
          arrows: [
            { from: "query", to: "standard" },
            { from: "standard", to: "standard_out" },
            { from: "query", to: "retrieve" },
            { from: "retrieve", to: "augment" },
            { from: "augment", to: "generate" },
          ],
          variant: "compare",
        },
      },
      {
        type: "heading",
        content: "The Three Phases of RAG",
      },
      {
        type: "list",
        items: [
          "Phase 1 — Indexing (done once): load documents → split into chunks → embed each chunk → store in vector database",
          "Phase 2 — Retrieval (on each query): embed the query → find most similar chunks → return top-k chunks",
          "Phase 3 — Generation (on each query): build prompt with query + retrieved chunks → call LLM → return answer",
        ],
      },
      {
        type: "heading",
        content: "Vector Embeddings",
      },
      {
        type: "paragraph",
        content:
          "The key technology behind RAG is vector embeddings. An embedding model converts text into a list of numbers (a vector) that captures its semantic meaning. Similar texts get similar vectors. To find relevant chunks, you compute the 'distance' between the query vector and all chunk vectors, and return the closest ones — even if they use completely different words.",
      },
      {
        type: "tip",
        content:
          "For a quick RAG prototype, you don't need a vector database. Store chunks in a Python list and use keyword matching or cosine similarity with a library like sentence-transformers. Use a proper vector DB (ChromaDB, Pinecone, Qdrant) only for production.",
      },
      {
        type: "code",
        code: `# Minimal RAG pipeline (no vector DB required for prototyping)
from groq import Groq
import os

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

def chunk_text(text: str, chunk_size: int = 200) -> list[str]:
    words = text.split()
    return [
        " ".join(words[i:i + chunk_size])
        for i in range(0, len(words), chunk_size // 2)  # 50% overlap
    ]

def retrieve(query: str, chunks: list[str], top_k: int = 3) -> list[str]:
    """Keyword-based retrieval (replace with vector search in production)."""
    query_words = set(query.lower().split())
    scored = [(c, len(query_words & set(c.lower().split()))) for c in chunks]
    scored.sort(key=lambda x: x[1], reverse=True)
    return [c for c, score in scored[:top_k] if score > 0]

def rag_answer(document: str, question: str) -> str:
    chunks = chunk_text(document)
    context = retrieve(question, chunks)
    if not context:
        return "No relevant information found in the document."

    prompt = f"""Answer the question based ONLY on the provided context.
If the answer is not in the context, say "I don't know".

Context:
{chr(10).join(f"- {c}" for c in context)}

Question: {question}"""

    response = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=[{"role": "user", "content": prompt}],
        max_tokens=300,
    )
    return response.choices[0].message.content`,
      },
      {
        type: "practice",
        practiceLabel: "RAG pipeline",
        practicePrompt:
          "Trace the steps of a RAG pipeline for a document Q&A system.",
        starterCode:
          '# RAG Pipeline: 3 phases\n\n# PHASE 1: Indexing (done once)\ndef index_documents(docs: list[str]) -> list[dict]:\n    """Split docs into chunks and store them."""\n    chunks = []\n    for doc in docs:\n        # In real RAG: chunk by paragraph, then embed with an embedding model\n        sentences = doc.split(". ")\n        for sentence in sentences:\n            if sentence.strip():\n                chunks.append({"text": sentence, "embedding": None})\n    return chunks\n\n# PHASE 2: Retrieval (on every query)\ndef retrieve(query: str, chunks: list[dict], top_k: int = 2) -> list[str]:\n    """Find the most relevant chunks for a query."""\n    # In real RAG: compute cosine similarity between query embedding and chunk embeddings\n    # Simplified: keyword matching\n    scored = [(c["text"], sum(w in c["text"].lower() for w in query.lower().split())) for c in chunks]\n    scored.sort(key=lambda x: x[1], reverse=True)\n    return [text for text, _ in scored[:top_k]]\n\n# PHASE 3: Generation\ndef generate_answer(query: str, context_chunks: list[str]) -> str:\n    context = " ".join(context_chunks)\n    return f"[LLM would answer \'{query}\' using context: {context[:80]}...]"\n\n# Demo\ndocs = [\n    "Python was created by Guido van Rossum. It was released in 1991.",\n    "Python is widely used in data science, web development, and AI.",\n    "The Groq API provides fast inference for open-source LLMs like LLaMA.",\n]\n\nchunks = index_documents(docs)\nquery = "When was Python created?"\nrelevant = retrieve(query, chunks)\nanswer = generate_answer(query, relevant)\n\nprint(f"Query: {query}")\nprint(f"Retrieved: {relevant}")\nprint(f"Answer: {answer}")',
      },
    ],
    keyTakeaways: [
      "RAG = Retrieve relevant document chunks → Augment the prompt with them → Generate an answer.",
      "This lets your chatbot answer questions from any document without retraining the model.",
      "The quality of your chunking and retrieval directly determines answer quality.",
    ],
  },

  "ai-m6-t2": {
    topicId: "ai-m6-t2",
    intro:
      "Now let's build a complete document Q&A bot. You'll load text, chunk it, retrieve relevant chunks, and feed them to the LLM to answer questions accurately from the source material.",
    blocks: [
      {
        type: "heading",
        content: "Project: Document Q&A Bot",
      },
      {
        type: "paragraph",
        content:
          "In this project you'll build a self-contained Q&A bot that can answer questions from any text you give it. The production version of this uses real embedding models and a vector database — but the Python logic is exactly what you'll build here, just with more sophisticated retrieval.",
      },
      {
        type: "heading",
        content: "Architecture",
      },
      {
        type: "visual",
        diagram: {
          title: "Document Q&A Bot Architecture",
          nodes: [
            { id: "pdf", label: "Source Document", sublabel: "PDF, TXT, web page, database" },
            { id: "chunk", label: "Chunker", sublabel: "Split into overlapping 200-word chunks" },
            { id: "store", label: "Chunk Store", sublabel: "List or vector database" },
            { id: "query", label: "User Question", sublabel: "" },
            { id: "retriever", label: "Retriever", sublabel: "Find top-3 relevant chunks" },
            { id: "prompt", label: "Augmented Prompt", sublabel: "Question + context chunks" },
            { id: "llm", label: "LLM", sublabel: "Groq llama3-70b" },
            { id: "answer", label: "Grounded Answer", sublabel: "Based only on your document" },
          ],
          arrows: [
            { from: "pdf", to: "chunk" },
            { from: "chunk", to: "store" },
            { from: "query", to: "retriever" },
            { from: "store", to: "retriever" },
            { from: "retriever", to: "prompt" },
            { from: "query", to: "prompt" },
            { from: "prompt", to: "llm" },
            { from: "llm", to: "answer" },
          ],
          variant: "flow",
        },
      },
      {
        type: "heading",
        content: "Production Improvements",
      },
      {
        type: "list",
        items: [
          "Replace keyword retrieval with sentence-transformers + cosine similarity for semantic search",
          "Use ChromaDB or Pinecone to store and query embeddings at scale",
          "Add chunk overlap (50%) so answers near chunk boundaries are not missed",
          "Cite sources in the answer: include document name and page number in metadata",
          "Add conversation history so users can ask follow-up questions",
          "Use nomic-embed-text or OpenAI text-embedding-3-small as the embedding model",
        ],
      },
      {
        type: "tip",
        content:
          "The magic instruction is: 'Answer the question based ONLY on the provided context. If the answer is not in the context, say I don't know.' This prevents the LLM from hallucinating answers from its training data.",
      },
      {
        type: "practice",
        practiceLabel: "Document Q&A bot",
        practicePrompt: "Build the full document Q&A pipeline in Python.",
        starterCode:
          '# Minimal Document Q&A Bot\n# In production: use ChromaDB/Pinecone for vector storage + sentence-transformers for embeddings\n\nclass SimpleDocumentQA:\n    def __init__(self, system_prompt: str = "Answer based only on the provided context."):\n        self.chunks: list[str] = []\n        self.system_prompt = system_prompt\n    \n    def load_text(self, text: str, chunk_size: int = 200):\n        """Split text into overlapping chunks."""\n        words = text.split()\n        step = chunk_size // 2  # 50% overlap\n        self.chunks = [\n            " ".join(words[i:i+chunk_size])\n            for i in range(0, len(words), step)\n            if words[i:i+chunk_size]\n        ]\n        print(f"Loaded {len(self.chunks)} chunks")\n    \n    def retrieve(self, query: str, top_k: int = 3) -> list[str]:\n        """Simple keyword-based retrieval (replace with vector search in production)."""\n        query_words = set(query.lower().split())\n        scored = [(chunk, len(query_words & set(chunk.lower().split()))) for chunk in self.chunks]\n        scored.sort(key=lambda x: x[1], reverse=True)\n        return [c for c, _ in scored[:top_k] if _ > 0]\n    \n    def answer(self, question: str) -> str:\n        context = self.retrieve(question)\n        if not context:\n            return "I could not find relevant information in the document."\n        context_text = "\\n".join(f"- {c}" for c in context)\n        # In real code: call groq API here with context_text in the system prompt\n        return f"[Based on document context]\\nContext found: {context_text[:150]}..."\n\n# Demo\nbot = SimpleDocumentQA()\nbot.load_text(\n    "Python is a high-level programming language. "\n    "It was created by Guido van Rossum and released in 1991. "\n    "Python emphasises code readability. "\n    "It supports multiple programming paradigms. "\n    "Python is widely used in data science and machine learning. "\n    "The Groq API provides fast inference for LLMs. "\n    "LLaMA and Mixtral are popular open-source models available on Groq."\n)\n\nprint(bot.answer("Who created Python?"))\nprint()\nprint(bot.answer("What is Groq used for?"))',
      },
    ],
    keyTakeaways: [
      "The full pipeline: load → chunk → embed → store → retrieve → augment prompt → generate.",
      "For production, use a vector database (ChromaDB, Pinecone) and embedding model (e.g. nomic-embed-text).",
      "Always cite your sources in the answer so users can verify the information.",
    ],
  },

  "ai-m6-t3": {
    topicId: "ai-m6-t3",
    intro:
      "Multi-agent systems use multiple specialised AI agents that work together — one agent researches, another writes, another fact-checks. Together they solve problems that are too complex for a single agent.",
    blocks: [
      {
        type: "heading",
        content: "Why Multiple Agents?",
      },
      {
        type: "paragraph",
        content:
          "A single LLM has a finite context window and can lose focus on complex, multi-step tasks. Multiple specialised agents solve this by dividing responsibility: each agent has a clear role, its own system prompt, and only sees the context relevant to its task. The output of one agent becomes the input to the next.",
      },
      {
        type: "visual",
        diagram: {
          title: "Multi-Agent Pipeline",
          nodes: [
            { id: "user", label: "User Request", sublabel: "Write a blog post about RAG" },
            { id: "planner", label: "Planner Agent", sublabel: "Breaks task into subtasks" },
            { id: "researcher", label: "Researcher Agent", sublabel: "Gathers information and sources" },
            { id: "writer", label: "Writer Agent", sublabel: "Writes the draft" },
            { id: "reviewer", label: "Reviewer Agent", sublabel: "Checks quality and accuracy" },
            { id: "output", label: "Final Output", sublabel: "Polished blog post" },
          ],
          arrows: [
            { from: "user", to: "planner" },
            { from: "planner", to: "researcher" },
            { from: "researcher", to: "writer" },
            { from: "writer", to: "reviewer" },
            { from: "reviewer", to: "output" },
          ],
          variant: "flow",
        },
      },
      {
        type: "heading",
        content: "Agent Communication Patterns",
      },
      {
        type: "list",
        items: [
          "Sequential pipeline — agent 1 → agent 2 → agent 3 (most common, easy to debug)",
          "Supervisor pattern — one orchestrator agent delegates tasks to specialist agents",
          "Parallel execution — multiple agents run simultaneously and results are merged",
          "Hierarchical — agents can spawn sub-agents for complex sub-tasks",
          "Debate — two agents argue opposite positions; a judge agent picks the winner",
        ],
      },
      {
        type: "heading",
        content: "Popular Multi-Agent Frameworks",
      },
      {
        type: "list",
        items: [
          "LangGraph — graph-based agent orchestration; stateful, cyclical workflows; most production-ready",
          "CrewAI — high-level framework for role-based agent teams; easiest to get started",
          "AutoGen (Microsoft) — conversation-based multi-agent system; great for research",
          "LlamaIndex Workflows — event-driven agent pipelines integrated with LlamaIndex RAG",
          "Building from scratch (this course) — best for learning; use frameworks once you understand the concepts",
        ],
      },
      {
        type: "tip",
        content:
          "Start with a sequential pipeline before adding complexity. A Planner → Researcher → Writer → Reviewer pipeline solves 80% of content generation use cases without needing a complex orchestration framework.",
      },
      {
        type: "code",
        code: `from groq import Groq
import os

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

def run_agent(role: str, task: str, context: str = "") -> str:
    """Run a single specialised agent."""
    system = f"You are a {role}. {context}"
    messages = [
        {"role": "system", "content": system},
        {"role": "user", "content": task},
    ]
    response = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=messages,
        max_tokens=800,
    )
    return response.choices[0].message.content

def multi_agent_blog_pipeline(topic: str) -> str:
    """Sequential multi-agent pipeline for blog writing."""
    print(f"📋 Topic: {topic}\\n")

    # Agent 1: Research
    print("🔍 Researching...")
    research = run_agent(
        role="research analyst",
        task=f"Research the key facts, use cases, and benefits of: {topic}. Provide 5 bullet points.",
    )

    # Agent 2: Write (using research as context)
    print("✍️  Writing...")
    draft = run_agent(
        role="technical writer",
        task=f"Write a 300-word blog introduction about: {topic}",
        context=f"Use this research: {research}",
    )

    # Agent 3: Review and improve
    print("✅ Reviewing...")
    final = run_agent(
        role="editor",
        task="Improve this draft for clarity and engagement. Keep it under 300 words.",
        context=f"Draft to improve: {draft}",
    )

    return final`,
      },
      {
        type: "practice",
        practiceLabel: "Multi-agent design",
        practicePrompt:
          "Design a two-agent system where one researches and one writes.",
        starterCode:
          'class Agent:\n    def __init__(self, name: str, role: str):\n        self.name = name\n        self.role = role\n    \n    def run(self, task: str, context: str = "") -> str:\n        """Simulate agent execution (replace with real LLM call)."""\n        return f"[{self.name}] Completed: {task[:50]} | Used context: {bool(context)}"\n\nclass MultiAgentPipeline:\n    def __init__(self):\n        self.researcher = Agent("Researcher", "Find and summarise relevant information")\n        self.writer     = Agent("Writer",     "Write clear, engaging content from research")\n        self.reviewer   = Agent("Reviewer",   "Check facts and improve clarity")\n    \n    def run(self, topic: str) -> str:\n        print(f"Topic: {topic}\\n")\n        \n        # Step 1: Research\n        print("Step 1: Research")\n        research = self.researcher.run(f"Research: {topic}")\n        print(f"  {research}\\n")\n        \n        # Step 2: Write using research\n        print("Step 2: Write")\n        draft = self.writer.run(f"Write about: {topic}", context=research)\n        print(f"  {draft}\\n")\n        \n        # Step 3: Review\n        print("Step 3: Review")\n        final = self.reviewer.run("Review and improve the draft", context=draft)\n        print(f"  {final}\\n")\n        \n        return final\n\npipeline = MultiAgentPipeline()\nresult = pipeline.run("The benefits of learning Python for beginners")',
      },
    ],
    keyTakeaways: [
      "Specialised agents outperform a single generalist agent on complex multi-step tasks.",
      "Agents communicate by passing their outputs as context to the next agent.",
      "Popular frameworks for multi-agent systems: LangGraph, CrewAI, AutoGen.",
    ],
  },

  "ai-m6-t4": {
    topicId: "ai-m6-t4",
    intro:
      "You have completed the Agentic AI course! You now know how LLMs work, how to engineer prompts, how to use the Groq API, how to build chatbots and agents, and how to apply these skills to real projects.",
    blocks: [
      {
        type: "heading",
        content: "What You Have Built",
      },
      {
        type: "list",
        items: [
          "Module 1: Foundational knowledge of AI, LLMs, tokens, context windows, and providers",
          "Module 2: Prompt engineering skills — few-shot, chain-of-thought, system prompts",
          "Module 3: Groq API calls, response parsing, model selection, and error handling",
          "Module 4: A full chatbot with memory, streaming, and fine-tuned parameters",
          "Module 5: AI agents with tool calling and the ReAct pattern",
          "Module 6: RAG for document Q&A and multi-agent pipelines",
        ],
      },
      {
        type: "heading",
        content: "Your Next Project Ideas",
      },
      {
        type: "list",
        items: [
          "Personal assistant: RAG chatbot that answers questions from your own notes or documents",
          "Code reviewer: agent that reads your Python files and suggests improvements",
          "Research bot: agent that searches the web, reads pages, and summarises findings",
          "Customer support: chatbot trained on your product FAQ that escalates complex issues",
          "Data analyst: agent that reads CSV files, runs Python code, and explains results",
          "Email assistant: reads your inbox, drafts replies, and summarises threads",
        ],
      },
      {
        type: "heading",
        content: "Frameworks and Tools to Explore Next",
      },
      {
        type: "list",
        items: [
          "LangChain / LangGraph — production agent orchestration with built-in tools and RAG",
          "LlamaIndex — specialised for RAG; easier to set up than LangChain for document Q&A",
          "ChromaDB — simple local vector database for RAG projects",
          "Sentence Transformers — free, local embedding models for semantic search",
          "FastAPI — build an API around your chatbot so other apps can use it",
          "Gradio or Streamlit — build a simple web UI for your AI app in minutes",
        ],
      },
      {
        type: "heading",
        content: "Communities to Join",
      },
      {
        type: "list",
        items: [
          "Hugging Face Discord — the largest AI/ML community; great for questions and model releases",
          "LangChain Discord — active community for agents and RAG help",
          "r/MachineLearning and r/LocalLLaMA — Reddit communities for AI news and discussion",
          "Groq Discord — Groq-specific help and announcements",
          "AI Engineer Discord — community for people building AI-powered products",
        ],
      },
      {
        type: "tip",
        content:
          "The best way to learn is to build something real. Pick one project from the list above, start with the simplest possible version, get it working, and iterate. Every expert started by building a bad first version.",
      },
      {
        type: "practice",
        practiceLabel: "Your learning summary",
        practicePrompt:
          "Print a summary of everything you have learned in this course.",
        starterCode:
          'course_summary = {\n    "Module 1: AI Fundamentals": [\n        "What AI and LLMs are",\n        "How tokens and context windows work",\n        "Major LLM providers and their strengths",\n    ],\n    "Module 2: Prompt Engineering": [\n        "System prompts vs user messages",\n        "Few-shot and chain-of-thought prompting",\n        "Prompt best practices",\n    ],\n    "Module 3: Groq API": [\n        "Setting up API keys securely",\n        "Making API calls and parsing responses",\n        "Model selection and error handling",\n    ],\n    "Module 4: Chatbots": [\n        "Chat history and memory management",\n        "Building a full chatbot loop",\n        "Streaming and parameter tuning",\n    ],\n    "Module 5: Agents": [\n        "Tool calling and function calling",\n        "The agent loop",\n        "The ReAct pattern",\n    ],\n    "Module 6: Real-World Applications": [\n        "RAG for document Q&A",\n        "Multi-agent systems",\n    ],\n}\n\nprint("🎓 Agentic AI Course — Complete!\\n")\nfor module, topics in course_summary.items():\n    print(f"✅ {module}")\n    for topic in topics:\n        print(f"   • {topic}")\n\nprint("\\n🚀 Next steps:")\nnext_steps = [\n    "Build a project: personal assistant, RAG chatbot, or automation agent",\n    "Explore LangChain or LangGraph for production agent frameworks",\n    "Try Groq\'s free tier to build and deploy your first AI app",\n    "Join AI communities: Hugging Face, LangChain Discord, r/LocalLLaMA",\n]\nfor step in next_steps:\n    print(f"  → {step}")',
      },
    ],
    keyTakeaways: [
      "You can now build real AI applications using LLMs and the Groq API.",
      "Prompt engineering, tool calling, and RAG are the three core skills of agentic AI.",
      "The best way to learn is to build — start with a project that solves a real problem for you.",
    ],
  },
};
