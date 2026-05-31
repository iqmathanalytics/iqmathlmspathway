# PyPath — Development Roadmap

Learn Python from zero toward Data Science. Work is delivered in **phases** so each step is deep, tested, and beginner-friendly.

---

## Phase 1 — Foundation (✅ Done)

**Goal:** Runnable platform with structure, IDE, progress, quizzes, and Module 1 content.

| Deliverable | Status |
|-------------|--------|
| Next.js app + UI shell | ✅ |
| 13-module curriculum structure | ✅ |
| Learning path + module/topic pages | ✅ |
| Browser Python IDE (Pyodide) | ✅ |
| Progress tracking (localStorage) | ✅ |
| Visual diagram components | ✅ |
| Quizzes per topic | ✅ (Module 1) |
| Module 1 full lessons (4 topics) | ✅ |

**Run locally:** `npm install` → `npm run dev` → http://localhost:3000

---

## Phase 2 — Basic syntax through lists (✅ Done)

| Deliverable | Status |
|-------------|--------|
| Fix Pyodide (CDN ESM) | ✅ |
| Module 2: I/O, comments, variables, types, casting | ✅ |
| Module 3: All operators (7 topics) | ✅ |
| Module 4: Strings (5 topics) | ✅ |
| Module 5: Lists (6 topics) | ✅ |

---

## Phase 3 — Collections & control flow (Modules 6–10) — Next

- Tuples, sets, dictionaries
- Conditionals and loops with flow diagrams
- More practice assignments (guided → semi-independent)

---

## Phase 4 — Functions & comprehensions (Modules 11–13)

- Functions, scope, recursion (gentle intro)
- List/dict comprehensions
- Lambda functions
- **Foundations complete** badge / progress milestone

---

## Phase 5 — Platform polish

- User accounts (optional) + cloud progress sync
- Search across lessons
- Dark mode
- Printable cheat sheets per module
- Assignment submission (stretch)

---

## Phase 6 — Data Science track

New modules (after foundations):

| Library | Topics (planned) |
|---------|------------------|
| NumPy | Arrays, broadcasting, vectorized math |
| Pandas | Series, DataFrame, cleaning, grouping |
| Matplotlib | Plots, subplots, styling |
| Seaborn | Statistical visuals |
| Plotly | Interactive charts |

Pyodide note: some libraries need extra wheels; we may use lighter demos or server-side execution where needed.

---

## Content principles (every phase)

1. **Baby-level language** — short sentences, analogies, no assumed jargon.
2. **Visual first** — diagram before dense text when possible.
3. **Code immediately** — example → run in IDE → small practice.
4. **Quiz to confirm** — 2–5 questions per topic, explanations included.
5. **One path** — module order is the default route; no overwhelm.

---

## How to contribute content

Lessons live in `src/data/lessons/` (per module file). Quizzes in `src/data/quizzes/`. Set `published: true` on topics in `src/data/curriculum.ts` when ready.
