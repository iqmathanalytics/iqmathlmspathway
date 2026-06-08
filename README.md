# Introduction to Python — Python Learning Platform

A structured Python learning platform toward **Data Science** — clear lessons, visual diagrams, in-browser IDE, quizzes, and progress tracking.

## Quick start

```bash
npm install
npm run dev
```

`npm run dev` always clears a stale cache and frees port 3000 before starting (prevents `/_next/static/...` 404 errors).

- **Preview production build:** `npm run preview:static` → http://localhost:8788 (not port 3000)
- **Faster restart** (only if dev was working): `npm run dev:quick`
- **Stop dev servers:** `npm run dev:kill`

**Never run `npm run build` while `npm run dev` is running** — the build script now blocks this automatically.

Open [http://localhost:3000](http://localhost:3000) — use that URL exactly, not `http://localhost:3000/**`.

## Deploy (Cloudflare Pages)

See [DEPLOY.md](./DEPLOY.md) for GitHub + Cloudflare setup. Build output is the `out/` folder (`npm run build`).

### Still seeing 404 on `/_next/static/...`?

1. Stop all dev terminals (or `npm run dev:kill`)
2. Run `npm run dev` again
3. Hard-refresh: **Ctrl+Shift+R** (or use an Incognito window)
4. Confirm the address bar is `http://localhost:3000` with no extra path

## What's included (Phase 1)

- **Home page** — overview and roadmap
- **Learning path** — all 13 modules listed (Module 1 live)
- **Module 1** — Introduction & Environment (4 topics)
- **Module 2** — Basic syntax, I/O, variables, types, typecasting (5 topics)
- **Module 3** — Operators (7 topics)
- **Module 4** — Strings (5 topics)
- **Module 5** — Lists (6 topics)
- **Module 6** — Tuples (5 topics)
- **Module 7** — Sets (4 topics)
- **Module 8** — Dictionaries (4 topics)
- **Module 9** — Conditionals (3 topics)
- **Module 10** — Loops (5 topics)
- **Module 11** — Comprehensions (3 topics)
- **Module 12** — Functions (5 topics)
- **Module 13** — Lambda (1 topic)

**Foundations track complete** — 57 topics across 13 modules.

## Phase 5 — Accounts, practice, premium

- **Register / login** — Name, email, mobile, password (Supabase Auth)
- **Cloud progress** — lessons, quizzes, and practice sync when signed in
- **399 practice problems** — 6–7 per topic across all 13 modules
- **Practice workspace** — dedicated code space with public tests + hidden submit grading
- **Freemium** — first 5 problems per topic free; Stripe one-time unlock for all premium
- **Dashboard** — `/dashboard` for lesson and practice stats

Configure `.env.local` from [`.env.example`](./.env.example). See [DEPLOY.md](./DEPLOY.md) for Supabase + Stripe setup.

- **Python IDE** — run code in the browser via [Pyodide](https://pyodide.org/)
- **Quizzes** — after each topic
- **Progress** — local cache + Supabase sync when logged in

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
