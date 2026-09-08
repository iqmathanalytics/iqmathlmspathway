import type { TopicLesson } from "@/lib/types";

export const module1Lessons: Record<string, TopicLesson> = {
  "m1-t1": {
    topicId: "m1-t1",
    intro: "Programming means writing precise instructions a computer can follow — sequence, selection, and iteration are the building blocks.",
    blocks: [
      {
        type: "infographic",
        infographic: "intro-programming",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Programming is the process of giving a computer a precise set of instructions (code) to perform a task. Computers only understand machine code (0s and 1s), so we write in a \"high-level language\" like Python, which is then translated (interpreted) into machine instructions. Core ideas: instructions run in order (sequence), decisions are made (selection), and steps repeat (iteration)." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "# A program is just a sequence of instructions\nprint(\"Step 1: Start program\")\nprint(\"Step 2: Do a calculation\")\nresult = 5 + 3\nprint(\"Step 3: Show result:\", result)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a 3-line program that prints your name, then your age, then the phrase \"Learning Python!\"",
        starterCode: "# TODO: Write a 3-line program that prints your name,\n# then prints your age, then prints \"Learning Python!\"\n",
      },
    ],
    keyTakeaways: [
      "Programming = precise step-by-step instructions.",
      "Programs use sequence, selection, and iteration.",
      "High-level languages like Python are translated into machine instructions.",
    ],
  },
  "m1-t2": {
    topicId: "m1-t2",
    intro: "Python is the go-to language for data science: readable syntax plus a rich ecosystem of libraries.",
    blocks: [
      {
        type: "infographic",
        infographic: "choosing-python",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Python is popular in data science because of its simple, readable syntax and its rich ecosystem of libraries: NumPy (numeric arrays), Pandas (tabular data), Matplotlib/Seaborn (visualization), and Scikit-learn (machine learning). It's also general-purpose, so the same language handles data cleaning, modeling, and deployment." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "# Demonstrating Python's readability vs pseudocode\nnumbers = [1, 2, 3, 4, 5]\naverage = sum(numbers) / len(numbers)\nprint(\"Average:\", average)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Create a list of 5 exam scores and print their average.",
        starterCode: "# TODO: Create a list of 5 exam scores and print their average\nscores = []\n# average = ...\n# print(...)\n",
      },
    ],
    keyTakeaways: [
      "Python's readable syntax speeds up learning and collaboration.",
      "NumPy, Pandas, Matplotlib, and scikit-learn power data science workflows.",
      "Simple list math is a first step toward real data analysis.",
    ],
  },
  "m1-t3": {
    topicId: "m1-t3",
    intro: "A clean Python environment keeps projects isolated. Anaconda and venv are the two common setups.",
    blocks: [
      {
        type: "infographic",
        infographic: "setting-up-python",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "You need Python installed plus a way to manage packages/environments. Anaconda is a bundled distribution with Python + common data science libraries pre-installed, ideal for beginners. `venv` is Python's built-in lightweight virtual environment tool, useful for isolating project dependencies." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "# Environment setup commands (run in a terminal on your machine).\n# In this browser IDE, print the steps so you remember them:\nprint(\"python -m venv myenv\")\nprint(\"myenv\\\\Scripts\\\\activate  # Windows\")\nprint(\"source myenv/bin/activate  # Mac/Linux\")\nprint(\"pip install numpy pandas matplotlib\")" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Print the setup steps to create a virtual environment named ds_env and install pandas (browser IDE-friendly notes).",
        starterCode: "# TODO: Print comments/steps for creating \"ds_env\" and installing pandas\n# Example: print the commands you would run in a terminal\n",
      },
    ],
    keyTakeaways: [
      "Anaconda bundles Python plus common data science packages.",
      "venv creates lightweight isolated environments per project.",
      "You can practice print-based setup notes in the browser IDE anytime.",
    ],
  },
  "m1-t4": {
    topicId: "m1-t4",
    intro: "An IDE is where you write, run, and debug code. Jupyter, VS Code, and PyCharm are popular choices.",
    blocks: [
      {
        type: "infographic",
        infographic: "python-ides",
      },
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "An IDE (Integrated Development Environment) helps you write, run, and debug code. This course uses a built-in IDE for most lessons. Jupyter Notebook and Google Colab are ideal for data science because they show charts inline. Use Google Colab when you reach visualization modules — the browser IDE cannot display plots. VS Code is a lightweight, extensible editor. PyCharm is a full-featured IDE great for larger projects." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "x = 10\ny = 20\nprint(x + y)  # 30" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Compute 15 * 4 and print the result.",
        starterCode: "# TODO: Compute 15 * 4 and print the result\n",
      },
    ],
    keyTakeaways: [
      "Jupyter and Google Colab show charts inline — use Colab for visualizations.",
      "VS Code and PyCharm are full-featured editors for larger projects.",
      "This course includes a built-in IDE beside every lesson for text output.",
    ],
  },
  "m1-t5": {
    topicId: "m1-t5",
    intro: "Jupyter Notebooks mix code, results, and notes in cells — ideal for exploring data interactively.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "A Jupyter Notebook (.ipynb) consists of cells: code cells (execute Python) and markdown cells (formatted text/notes). You run cells with Shift+Enter. This format is the standard for exploratory data science because you can iterate and visualize inline." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "# Typical Jupyter code cell (pandas may not be available in the browser IDE):\n# import pandas as pd\n# data = {\"name\": [\"Amit\", \"Riya\"], \"age\": [25, 30]}\n# df = pd.DataFrame(data)\n# df\n\n# Equivalent stdlib preview you can run here:\ndata = {\"name\": [\"Amit\", \"Riya\"], \"age\": [25, 30]}\nprint(data)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Build a small table of 3 names and cities (a dict is fine if pandas is unavailable) and print it.",
        starterCode: "# Browser IDE may not have pandas — use a dict instead\n# TODO: Create a dict with 3 names mapped to cities and print it\npeople = {\n    # \"Alice\": \"Mumbai\",\n    # \"Bob\": \"Delhi\",\n    # \"Cara\": \"Bengaluru\",\n}\nprint(people)\n",
      },
    ],
    keyTakeaways: [
      "Notebooks are made of cells that run code or display markdown.",
      "Results appear under the cell that produced them.",
      "Use a dict print here if pandas is not available in the browser.",
    ],
  },
};
