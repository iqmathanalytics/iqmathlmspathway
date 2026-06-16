import type { PracticeProblem } from "@/lib/types";

export const module14Practice: PracticeProblem[] = [
  {
    "id": "m14-t1-p01",
    "topicId": "m14-t1",
    "slug": "fp-preview",
    "title": "Project Overview: Preview Report",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "Print \"=== Class Report ===\" on one line.",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# print header",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Preview the capstone report header."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "=== Class Report ===",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "=== Class Report ==="
      }
    ],
    "constraints": [
      "Output must be exactly: === Class Report ==="
    ],
    "hints": [
      "print(\"=== Class Report ===\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t1-p01-t1",
        "label": "Sample test",
        "expectedStdout": "=== Class Report ===",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t1-p02",
    "topicId": "m14-t1",
    "slug": "fp-shape",
    "title": "Project Overview: Data Shape",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "Create students = {\"Alice\": [85, 92]}, print students[\"Alice\"][0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresDictKey": "Alice",
      "introSegments": [
        {
          "type": "text",
          "value": "Dict maps names to grade lists."
        }
      ],
      "editorPlaceholder": "# students dict",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "85"
      }
    ],
    "constraints": [
      "Output: 85"
    ],
    "hints": [
      "students = {\"Alice\": [85, 92]}\\nprint(students[\"Alice\"][0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t1-p02-t1",
        "label": "Sample test",
        "expectedStdout": "85",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t1-p03",
    "topicId": "m14-t1",
    "slug": "fp-concepts",
    "title": "Project Overview: Module Map",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "Print len([\"dict\",\"list\",\"set\",\"tuple\"]).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# collections",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Four core collection types in the project."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "4",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "4"
      }
    ],
    "constraints": [
      "Output must be exactly: 4"
    ],
    "hints": [
      "print(len([\"dict\",\"list\",\"set\",\"tuple\"]))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t1-p03-t1",
        "label": "Sample test",
        "expectedStdout": "4",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t1-p04",
    "topicId": "m14-t1",
    "slug": "fp-subjects",
    "title": "Project Overview: Subject Set",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "Create s = {\"Math\",\"Science\",\"Math\"}, print len(s).",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Sets keep unique subjects only."
        }
      ],
      "editorPlaceholder": "# set of subjects",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Output: 2"
    ],
    "hints": [
      "s = {\"Math\",\"Science\",\"Math\"}\\nprint(len(s))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t1-p04-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t1-p05",
    "topicId": "m14-t1",
    "slug": "fp-plan",
    "title": "Project Overview: Build Order",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "Print \"data,logic,functions,capstone\" (comma-separated steps).",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# steps",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Print the four build steps in order."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "data,logic,functions,capstone",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "data,logic,functions,capstone"
      }
    ],
    "constraints": [
      "Output must be exactly: data,logic,functions,capstone"
    ],
    "hints": [
      "print(\"data,logic,functions,capstone\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t1-p05-t1",
        "label": "Sample test",
        "expectedStdout": "data,logic,functions,capstone",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p01",
    "topicId": "m14-t2",
    "slug": "fp-dict",
    "title": "Step 1: Data Model: Student Dict",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "students = {\"Alice\": [85], \"Bob\": [70]}, print len(students).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "students"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Main database is a dict of names → grade lists."
        }
      ],
      "editorPlaceholder": "# students = {}",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Output: 2"
    ],
    "hints": [
      "students = {\"Alice\": [85], \"Bob\": [70]}\\nprint(len(students))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t2-p01-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p02",
    "topicId": "m14-t2",
    "slug": "fp-set",
    "title": "Step 1: Data Model: Subject Set",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "subjects = set(); subjects.add(\"Math\"); print \"Math\" in subjects.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "subjects"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use a set for unique subject names."
        }
      ],
      "editorPlaceholder": "# subjects = set()",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "True"
      }
    ],
    "constraints": [
      "Output: True"
    ],
    "hints": [
      "subjects = set()\\nsubjects.add(\"Math\")\\nprint(\"Math\" in subjects)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t2-p02-t1",
        "label": "Sample test",
        "expectedStdout": "True",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p03",
    "topicId": "m14-t2",
    "slug": "fp-tuple",
    "title": "Step 1: Data Model: Grade Record",
    "difficulty": "easy",
    "order": 3,
    "layout": "challenge",
    "description": "record = (\"Science\", 88); subject, score = record; print score.",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "record"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Unpack a (subject, score) tuple."
        }
      ],
      "editorPlaceholder": "# tuple unpack",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "88"
      }
    ],
    "constraints": [
      "Output: 88"
    ],
    "hints": [
      "record = (\"Science\", 88)\\nsubject, score = record\\nprint(score)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t2-p03-t1",
        "label": "Sample test",
        "expectedStdout": "88",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p04",
    "topicId": "m14-t2",
    "slug": "fp-append",
    "title": "Step 1: Data Model: Append Grade",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "students = {\"Alice\": [85]}; students[\"Alice\"].append(92); print students[\"Alice\"][-1].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "students"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".append()"
        },
        {
          "type": "text",
          "value": " to add a score."
        }
      ],
      "editorPlaceholder": "# append grade",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "92"
      }
    ],
    "constraints": [
      "Output: 92"
    ],
    "hints": [
      "students = {\"Alice\": [85]}\\nstudents[\"Alice\"].append(92)\\nprint(students[\"Alice\"][-1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t2-p04-t1",
        "label": "Sample test",
        "expectedStdout": "92",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p05",
    "topicId": "m14-t2",
    "slug": "fp-add-student",
    "title": "Step 1: Data Model: Add Student",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "students = {}; students[\"Cara\"] = [55, 48]; print students[\"Cara\"][1].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "students"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Add a new student key with a grade list."
        }
      ],
      "editorPlaceholder": "# add Cara",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "48"
      }
    ],
    "constraints": [
      "Output: 48"
    ],
    "hints": [
      "students = {}\\nstudents[\"Cara\"] = [55, 48]\\nprint(students[\"Cara\"][1])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t2-p05-t1",
        "label": "Sample test",
        "expectedStdout": "48",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t2-p06",
    "topicId": "m14-t2",
    "slug": "fp-challenge-data",
    "title": "Step 1: Data Model: Merge Grades",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "students = {\"Bob\": [70]}; students[\"Bob\"].extend([88, 91]); print sum(students[\"Bob\"]).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "students"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use "
        },
        {
          "type": "code",
          "value": ".extend()"
        },
        {
          "type": "text",
          "value": " then sum the list."
        }
      ],
      "editorPlaceholder": "# extend grades",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "249"
      }
    ],
    "constraints": [
      "Output: 249"
    ],
    "hints": [
      "students = {\"Bob\": [70]}\\nstudents[\"Bob\"].extend([88, 91])\\nprint(sum(students[\"Bob\"]))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t2-p06-t1",
        "label": "Sample test",
        "expectedStdout": "249",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p01",
    "topicId": "m14-t3",
    "slug": "fp-avg",
    "title": "Step 2: Logic & Loops: Average Loop",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "grades = [85, 92, 78]; print sum(grades) / len(grades).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "grades"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Average = sum / len."
        }
      ],
      "editorPlaceholder": "# average",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "85.0"
      }
    ],
    "constraints": [
      "Output: 85.0"
    ],
    "hints": [
      "grades = [85, 92, 78]\\nprint(sum(grades) / len(grades))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t3-p01-t1",
        "label": "Sample test",
        "expectedStdout": "85.0",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p02",
    "topicId": "m14-t3",
    "slug": "fp-pass",
    "title": "Step 2: Logic & Loops: Pass or Fail",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "avg = 75; print \"PASS\" if avg >= 60 else \"FAIL\".",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Compare average to 60."
        }
      ],
      "editorPlaceholder": "# if avg >= 60",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "PASS"
      }
    ],
    "constraints": [
      "Output: PASS"
    ],
    "hints": [
      "avg = 75\\nprint(\"PASS\" if avg >= 60 else \"FAIL\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t3-p02-t1",
        "label": "Sample test",
        "expectedStdout": "PASS",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p03",
    "topicId": "m14-t3",
    "slug": "fp-dict-loop",
    "title": "Step 2: Logic & Loops: Loop Students",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "students = {\"Alice\": [90]}; print list(students.keys())[0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "students"
      ],
      "requiresForLoop": false,
      "introSegments": [
        {
          "type": "text",
          "value": "Access the first student name from the dict."
        }
      ],
      "editorPlaceholder": "# students.keys()",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Alice"
      }
    ],
    "constraints": [
      "Output: Alice"
    ],
    "hints": [
      "students = {\"Alice\": [90]}\\nprint(list(students.keys())[0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t3-p03-t1",
        "label": "Sample test",
        "expectedStdout": "Alice",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p04",
    "topicId": "m14-t3",
    "slug": "fp-comp",
    "title": "Step 2: Logic & Loops: Passing List",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "averages = {\"Alice\": 85, \"Bob\": 55}; print [n for n,a in averages.items() if a >= 60][0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "averages"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "List comprehension filters passing students."
        }
      ],
      "editorPlaceholder": "# comprehension",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Alice"
      }
    ],
    "constraints": [
      "Output: Alice"
    ],
    "hints": [
      "averages = {\"Alice\": 85, \"Bob\": 55}\\nprint([n for n,a in averages.items() if a >= 60][0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t3-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Alice",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p05",
    "topicId": "m14-t3",
    "slug": "fp-elif",
    "title": "Step 2: Logic & Loops: Letter Band",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "avg = 55; print RETAKE if 50 <= avg < 60 else PASS.",
    "challengeContent": {
      "outputOnly": true,
      "requiresIfCondition": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Use elif bands for retake vs pass."
        }
      ],
      "editorPlaceholder": "# elif bands",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "RETAKE"
      }
    ],
    "constraints": [
      "Output: RETAKE"
    ],
    "hints": [
      "avg = 55\\nif avg >= 60: print(\"PASS\")\\nelif avg >= 50: print(\"RETAKE\")\\nelse: print(\"FAIL\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t3-p05-t1",
        "label": "Sample test",
        "expectedStdout": "RETAKE",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t3-p06",
    "topicId": "m14-t3",
    "slug": "fp-challenge-logic",
    "title": "Step 2: Logic & Loops: Class Average",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "students = {\"A\": [80, 90], \"B\": [70, 70]}; print sum(sum(g) for g in students.values()) / sum(len(g) for g in students.values()).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "students"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Compute overall class average across all grades."
        }
      ],
      "editorPlaceholder": "# class average",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "77.5"
      }
    ],
    "constraints": [
      "Output: 77.5"
    ],
    "hints": [
      "students = {\"A\": [80, 90], \"B\": [70, 70]}\\ntotal = sum(sum(g) for g in students.values())\\ncount = sum(len(g) for g in students.values())\\nprint(total / count)"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t3-p06-t1",
        "label": "Sample test",
        "expectedStdout": "77.5",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p01",
    "topicId": "m14-t4",
    "slug": "fp-fn-avg",
    "title": "Step 3: Functions & Report: average()",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "def average(s): return sum(s)/len(s)\nprint average([85, 92, 78]).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "average",
      "introSegments": [
        {
          "type": "text",
          "value": "Define "
        },
        {
          "type": "code",
          "value": "average(scores)"
        },
        {
          "type": "text",
          "value": " with return."
        }
      ],
      "editorPlaceholder": "# def average",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "85.0"
      }
    ],
    "constraints": [
      "Output: 85.0"
    ],
    "hints": [
      "def average(s):\\n    return sum(s)/len(s)\\nprint(average([85, 92, 78]))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t4-p01-t1",
        "label": "Sample test",
        "expectedStdout": "85.0",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p02",
    "topicId": "m14-t4",
    "slug": "fp-fn-grade",
    "title": "Step 3: Functions & Report: letter_grade()",
    "difficulty": "easy",
    "order": 2,
    "layout": "challenge",
    "description": "def letter_grade(a):\n    if a >= 80: return \"B\"\n    return \"F\"\nprint letter_grade(85).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "letter_grade",
      "introSegments": [
        {
          "type": "text",
          "value": "Map numeric average to a letter."
        }
      ],
      "editorPlaceholder": "# def letter_grade",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "B"
      }
    ],
    "constraints": [
      "Output: B"
    ],
    "hints": [
      "def letter_grade(a):\\n    if a >= 80: return \"B\"\\n    return \"F\"\\nprint(letter_grade(85))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t4-p02-t1",
        "label": "Sample test",
        "expectedStdout": "B",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p03",
    "topicId": "m14-t4",
    "slug": "fp-fstring",
    "title": "Step 3: Functions & Report: Report Line",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "name=\"Alice\"; avg=85.333; print f\"{name}: avg {avg:.1f}\".",
    "challengeContent": {
      "outputOnly": true,
      "introSegments": [
        {
          "type": "text",
          "value": "Format report lines with f-strings."
        }
      ],
      "editorPlaceholder": "# f-string",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Alice: avg 85.3"
      }
    ],
    "constraints": [
      "Output: Alice: avg 85.3"
    ],
    "hints": [
      "name = \"Alice\"\\navg = 85.333\\nprint(f\"{name}: avg {avg:.1f}\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t4-p03-t1",
        "label": "Sample test",
        "expectedStdout": "Alice: avg 85.3",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p04",
    "topicId": "m14-t4",
    "slug": "fp-lambda-sort",
    "title": "Step 3: Functions & Report: Top Student",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "ranking = [(\"Alice\", 85), (\"Bob\", 91)]; ranking.sort(key=lambda x: x[1], reverse=True); print ranking[0][0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "ranking"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Sort by average with "
        },
        {
          "type": "code",
          "value": "key=lambda"
        },
        {
          "type": "text",
          "value": "."
        }
      ],
      "editorPlaceholder": "# lambda sort",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Bob"
      }
    ],
    "constraints": [
      "Output: Bob"
    ],
    "hints": [
      "ranking = [(\"Alice\", 85), (\"Bob\", 91)]\\nranking.sort(key=lambda x: x[1], reverse=True)\\nprint(ranking[0][0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t4-p04-t1",
        "label": "Sample test",
        "expectedStdout": "Bob",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p05",
    "topicId": "m14-t4",
    "slug": "fp-status",
    "title": "Step 3: Functions & Report: status()",
    "difficulty": "medium",
    "order": 5,
    "layout": "challenge",
    "description": "def status(a): return \"PASS\" if a >= 60 else \"FAIL\"\nprint status(72).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "status",
      "introSegments": [
        {
          "type": "text",
          "value": "Return PASS or FAIL from a function."
        }
      ],
      "editorPlaceholder": "# def status",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "PASS"
      }
    ],
    "constraints": [
      "Output: PASS"
    ],
    "hints": [
      "def status(a):\\n    return \"PASS\" if a >= 60 else \"FAIL\"\\nprint(status(72))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t4-p05-t1",
        "label": "Sample test",
        "expectedStdout": "PASS",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t4-p06",
    "topicId": "m14-t4",
    "slug": "fp-challenge-fn",
    "title": "Step 3: Functions & Report: Full Line",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "def line(n,a): return f\"{n}: avg {a:.1f}\"\nprint line(\"Cara\", 72.5).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "line",
      "introSegments": [
        {
          "type": "text",
          "value": "Combine function + f-string for one report line."
        }
      ],
      "editorPlaceholder": "# def line",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Cara: avg 72.5"
      }
    ],
    "constraints": [
      "Output: Cara: avg 72.5"
    ],
    "hints": [
      "def line(n,a):\\n    return f\"{n}: avg {a:.1f}\"\\nprint(line(\"Cara\", 72.5))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t4-p06-t1",
        "label": "Sample test",
        "expectedStdout": "Cara: avg 72.5",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p01",
    "topicId": "m14-t5",
    "slug": "fp-cap-header",
    "title": "Capstone Build: Report Header",
    "difficulty": "easy",
    "order": 1,
    "layout": "challenge",
    "description": "print \"=== Class Report ===\"",
    "challengeContent": {
      "outputOnly": true,
      "editorPlaceholder": "# header",
      "emptyMessage": "Use print() to show the result.",
      "successDetail": "Correct!",
      "introSegments": [
        {
          "type": "text",
          "value": "Start the capstone with the report header."
        }
      ],
      "liveCheckRules": [
        {
          "id": "out",
          "kind": "print-value",
          "index": 0,
          "expected": "=== Class Report ===",
          "label": "output"
        }
      ]
    },
    "examples": [
      {
        "output": "=== Class Report ==="
      }
    ],
    "constraints": [
      "Output must be exactly: === Class Report ==="
    ],
    "hints": [
      "print(\"=== Class Report ===\")"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t5-p01-t1",
        "label": "Sample test",
        "expectedStdout": "=== Class Report ===",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p02",
    "topicId": "m14-t5",
    "slug": "fp-cap-avg",
    "title": "Capstone Build: One Student Line",
    "difficulty": "medium",
    "order": 2,
    "layout": "challenge",
    "description": "def average(s): return sum(s)/len(s)\ngrades=[85,92,78]; print round(average(grades),1).",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "average",
      "introSegments": [
        {
          "type": "text",
          "value": "Compute one student's average."
        }
      ],
      "editorPlaceholder": "# average + print",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "85.0"
      }
    ],
    "constraints": [
      "Output: 85.0"
    ],
    "hints": [
      "def average(s): return sum(s)/len(s)\\ngrades = [85,92,78]\\nprint(round(average(grades),1))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t5-p02-t1",
        "label": "Sample test",
        "expectedStdout": "85.0",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p03",
    "topicId": "m14-t5",
    "slug": "fp-cap-top",
    "title": "Capstone Build: Find Top",
    "difficulty": "medium",
    "order": 3,
    "layout": "challenge",
    "description": "averages={\"Alice\":85,\"Bob\":91}; print max(averages.items(), key=lambda x:x[1])[0].",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "averages"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Use max + lambda to find top student."
        }
      ],
      "editorPlaceholder": "# max lambda",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "Bob"
      }
    ],
    "constraints": [
      "Output: Bob"
    ],
    "hints": [
      "averages = {\"Alice\": 85, \"Bob\": 91}\\nprint(max(averages.items(), key=lambda x: x[1])[0])"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t5-p03-t1",
        "label": "Sample test",
        "expectedStdout": "Bob",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p04",
    "topicId": "m14-t5",
    "slug": "fp-cap-extend",
    "title": "Capstone Build: Add Dan",
    "difficulty": "medium",
    "order": 4,
    "layout": "challenge",
    "description": "students={\"Alice\":[85]}; students[\"Dan\"]=[88,76,94]; print len(students).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "students"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Extend the project with a new student."
        }
      ],
      "editorPlaceholder": "# add Dan",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Output: 2"
    ],
    "hints": [
      "students = {\"Alice\": [85]}\\nstudents[\"Dan\"] = [88, 76, 94]\\nprint(len(students))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t5-p04-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p05",
    "topicId": "m14-t5",
    "slug": "fp-cap-passing",
    "title": "Capstone Build: Passing Count",
    "difficulty": "hard",
    "order": 5,
    "layout": "challenge",
    "description": "averages={\"Alice\":85,\"Bob\":55,\"Cara\":72}; print len([a for a in averages.values() if a>=60]).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "averages"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Count how many students passed."
        }
      ],
      "editorPlaceholder": "# passing count",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "2"
      }
    ],
    "constraints": [
      "Output: 2"
    ],
    "hints": [
      "averages = {\"Alice\": 85, \"Bob\": 55, \"Cara\": 72}\\nprint(len([a for a in averages.values() if a >= 60]))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t5-p05-t1",
        "label": "Sample test",
        "expectedStdout": "2",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p06",
    "topicId": "m14-t5",
    "slug": "fp-cap-grade-count",
    "title": "Capstone Build: Grade Histogram",
    "difficulty": "hard",
    "order": 6,
    "layout": "challenge",
    "description": "def lg(a):\n    if a>=90: return \"A\"\n    if a>=80: return \"B\"\n    return \"F\"\naverages={\"Alice\":85,\"Cara\":92}; print sum(1 for v in averages.values() if lg(v)==\"B\").",
    "challengeContent": {
      "outputOnly": true,
      "requiresFunction": "lg",
      "introSegments": [
        {
          "type": "text",
          "value": "Count students with grade B using a helper function."
        }
      ],
      "editorPlaceholder": "# grade count",
      "successDetail": "Correct!"
    },
    "examples": [
      {
        "output": "1"
      }
    ],
    "constraints": [
      "Output: 1"
    ],
    "hints": [
      "def lg(a):\\n    if a >= 90: return \"A\"\\n    if a >= 80: return \"B\"\\n    return \"F\"\\naverages = {\"Alice\": 85, \"Cara\": 92}\\nprint(sum(1 for v in averages.values() if lg(v) == \"B\"))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t5-p06-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
  },
  {
    "id": "m14-t5-p07",
    "topicId": "m14-t5",
    "slug": "fp-cap-challenge",
    "title": "Capstone Build: Mini Capstone",
    "difficulty": "hard",
    "order": 7,
    "layout": "challenge",
    "description": "students={\"A\":[90],\"B\":[50]}; print sum(1 for g in students.values() if sum(g)/len(g)>=60).",
    "challengeContent": {
      "outputOnly": true,
      "requiresVariables": [
        "students"
      ],
      "introSegments": [
        {
          "type": "text",
          "value": "Count passing students from raw grade lists."
        }
      ],
      "editorPlaceholder": "# mini capstone",
      "successDetail": "Correct! You built a mini grade manager."
    },
    "examples": [
      {
        "output": "1"
      }
    ],
    "constraints": [
      "Output: 1"
    ],
    "hints": [
      "students = {\"A\": [90], \"B\": [50]}\\nprint(sum(1 for g in students.values() if sum(g)/len(g) >= 60))"
    ],
    "starterCode": "",
    "publicTests": [
      {
        "id": "m14-t5-p07-t1",
        "label": "Sample test",
        "expectedStdout": "1",
        "visibility": "public"
      }
    ]
  }
];
