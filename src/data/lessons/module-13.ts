import type { TopicLesson } from "@/lib/types";

export const module13Lessons: Record<string, TopicLesson> = {
  "m13-t1": {
    topicId: "m13-t1",
    intro: "Real data science work involves reading and writing text and JSON. Prefer with open(...) so files close automatically; in the browser IDE we often practice with json.dumps/loads in memory.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Use `open()` with modes `'r'` (read), `'w'` (write), `'a'` (append). Use the `json` module for structured data. Always prefer `with open(...) as f:` so files close automatically. When the filesystem is limited (browser IDE), practice JSON with `json.dumps` / `json.loads` in memory." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import json\n\n# File-style pattern (desktop / Jupyter):\n# with open(\"notes.txt\", \"w\") as f:\n#     f.write(\"Hello Data Science\")\n# with open(\"notes.txt\", \"r\") as f:\n#     print(f.read())\n\n# In-memory JSON (works everywhere):\ndata = {\"name\": \"Ravi\", \"age\": 25}\ntext = json.dumps(data)\nprint(text)\nloaded = json.loads(text)\nprint(loaded)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Serialize {\"city\": \"Bangalore\", \"pincode\": 560001} with json.dumps, then json.loads it back and print the city.",
        starterCode: "# TODO: dumps then loads; print the city\nimport json\n\ndata = {\"city\": \"Bangalore\", \"pincode\": 560001}\ntext = json.dumps(data)\nloaded = json.loads(text)\nprint(loaded[\"city\"])",
      },
    ],
    keyTakeaways: [
      "Modes: 'r' read, 'w' write (overwrite), 'a' append.",
      "with open(...) as f: closes the file automatically.",
      "json.dumps / json.loads move between dicts and JSON strings.",
    ],
  },
  "m13-t2": {
    topicId: "m13-t2",
    intro: "os and pathlib help build cross-platform paths and check whether files exist.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "The `os` and `pathlib` modules help build cross-platform file paths and check file existence. Practice printing joined paths even when you cannot touch the real disk." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "import os\nfrom pathlib import Path\n\nprint(os.getcwd())  # current directory when available\nprint(os.path.join(\"data\", \"sales.csv\"))\nprint(os.path.exists(\"data.json\"))  # True/False\n\np = Path(\"folder\") / \"file.csv\"\nprint(p)\nprint(p.name, p.suffix)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write code that builds the path for \"sales.csv\" with pathlib, prints it, and prints \"File not found\" if Path.exists() is False (or always print the path check result).",
        starterCode: "# TODO: Build a path and check existence\nfrom pathlib import Path\n\npath = Path(\"sales.csv\")\nprint(path)\nif path.exists():\n    print(\"Found\")\nelse:\n    print(\"File not found\")",
      },
    ],
    keyTakeaways: [
      "os.path.join and Path / build portable paths.",
      "exists() checks whether a path is present.",
      "pathlib.Path is the modern, object-oriented style.",
    ],
  },
  "m13-t3": {
    topicId: "m13-t3",
    intro: "try wraps risky code; except catches errors; finally always runs for cleanup.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "`try` wraps risky code; `except` catches specific errors; `finally` always runs (cleanup), regardless of whether an error occurred." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "try:\n    num = int(\"abc\")\nexcept ValueError as e:\n    print(\"Error:\", e)\nfinally:\n    print(\"This always runs\")" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write code that tries to divide 10 by a number (use divisor = 0), catching ZeroDivisionError and printing \"Cannot divide by zero\".",
        starterCode: "# TODO: Catch ZeroDivisionError\ndivisor = 0\ntry:\n    result = 10 / divisor\n    print(result)\nexcept ZeroDivisionError:\n    print(\"Cannot divide by zero\")\nfinally:\n    print(\"Done\")",
      },
    ],
    keyTakeaways: [
      "try runs code that might fail.",
      "except catches specific exception types.",
      "finally always runs — great for cleanup.",
    ],
  },
  "m13-t4": {
    topicId: "m13-t4",
    intro: "raise triggers exceptions. Custom exception classes inherit from Exception for domain-specific errors.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "Use `raise` to trigger an exception manually, and define custom exception classes by inheriting from `Exception` for domain-specific errors." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "class NegativeValueError(Exception):\n    pass\n\ndef check_positive(n):\n    if n < 0:\n        raise NegativeValueError(\"Value cannot be negative\")\n    return n\n\ntry:\n    check_positive(-5)\nexcept NegativeValueError as e:\n    print(e)" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Write a function validate_score(score) that raises a ValueError if the score is not between 0 and 100.",
        starterCode: "# TODO: Raise ValueError for invalid scores\ndef validate_score(score):\n    if score < 0 or score > 100:\n        raise ValueError(\"Score must be between 0 and 100\")\n    return score\n\nprint(validate_score(50))\ntry:\n    validate_score(101)\nexcept ValueError as e:\n    print(e)",
      },
    ],
    keyTakeaways: [
      "raise Exception(...) triggers an error.",
      "Subclass Exception for custom error types.",
      "Catch your custom type with except YourError.",
    ],
  },
  "m13-t5": {
    topicId: "m13-t5",
    intro: "APIs return JSON over HTTP. The requests pattern is response = requests.get(url); data = response.json(). In the browser IDE, mock with a dict response.",
    blocks: [
      { type: "heading", content: "Explanation" },
      { type: "paragraph", content: "The `requests` library fetches data from web APIs — a common way to pull live datasets. `.get(url)` retrieves data; `.json()` parses a JSON response. When network access is unavailable, practice the same logic with a mock dict response." },
      { type: "heading", content: "Example Code" },
      { type: "code", code: "# Pattern with requests (when network is available):\n# import requests\n# response = requests.get(\"https://api.github.com\")\n# print(response.status_code)\n# data = response.json()\n\n# Mock response (browser-safe practice):\nresponse = {\"status_code\": 200, \"json\": {\"message\": \"Hello API\", \"ok\": True}}\nprint(response[\"status_code\"])\ndata = response[\"json\"]\nprint(data.keys())\nprint(data[\"message\"])" },
      { type: "heading", content: "Practice" },
      {
        type: "practice",
        practicePrompt: "Using a mock response dict with status_code and json keys, print \"Success\" if status_code is 200, else print \"Failed\". Also print one field from the JSON body.",
        starterCode: "# TODO: Mock API response — Success vs Failed\nresponse = {\n    \"status_code\": 200,\n    \"json\": {\"city\": \"Bangalore\", \"temp\": 28},\n}\nif response[\"status_code\"] == 200:\n    print(\"Success\")\n    print(response[\"json\"][\"city\"])\nelse:\n    print(\"Failed\")",
      },
    ],
    keyTakeaways: [
      "requests.get(url) fetches a response.",
      "response.json() parses JSON into a dict.",
      "Check status_code (200 means success) before trusting the body.",
    ],
  },
};
