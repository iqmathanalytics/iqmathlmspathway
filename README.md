# PyPath — Python Learning Platform

A beginner-friendly website to learn Python from scratch toward **Data Science**. Baby-simple lessons, visual diagrams, in-browser coding, quizzes, and progress tracking.

## Quick start

```bash
npm install
npm run dev
```

`npm run dev` clears `.next` first (prevents vendor-chunk errors). Use `npm run dev:quick` to skip cleaning.

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Cloudflare Pages)

See [DEPLOY.md](./DEPLOY.md) for GitHub + Cloudflare setup. Build output is the `out/` folder (`npm run build`).

### Homepage shows 500 or React error #418?

Usually a **stale `.next` cache** or an old dev server. Fix:

```bash
npm run dev:fresh
```

Then hard-refresh the browser (Ctrl+Shift+R).

If you see `Cannot find module './vendor-chunks/...'`, run `npm run dev:fresh` or use `npm run dev` (auto-cleans `.next` each start).

## What's included (Phase 1)

- **Home page** — overview and roadmap
- **Learning path** — all 13 modules listed (Module 1 live)
- **Module 1** — Introduction & Environment (4 topics)
- **Module 2** — Basic syntax, I/O, variables, types, typecasting (5 topics)
- **Module 3** — Operators (7 topics)
- **Module 4** — Strings (5 topics)
- **Module 5** — Lists (6 topics)
- **Python IDE** — run code in the browser via [Pyodide](https://pyodide.org/)
- **Quizzes** — after each Module 1 topic
- **Progress** — saved in your browser (`localStorage`)

## Project structure

```
src/
  app/              # Pages (Next.js App Router)
  components/       # UI, IDE, quiz, diagrams
  data/
    curriculum.ts   # All modules & topics
    lessons/        # Lesson content per module
    quizzes/        # Quiz questions per module
  lib/              # Types, progress helpers
```

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for phased plans through Python foundations and future NumPy/Pandas/Matplotlib content.

## Tech stack

- Next.js 15 · React 19 · TypeScript · Tailwind CSS
- Pyodide for in-browser Python 3
