# Deploy PyPath to Cloudflare Pages

Repository: [github.com/iqmathanalytics/python-lms](https://github.com/iqmathanalytics/python-lms)

This app uses **Next.js static export** (`out/`) — ideal for Cloudflare Pages. Python runs in the browser via Pyodide. **Auth, progress sync, hidden test grading, and Stripe** run on **Supabase** (Auth + Postgres + Edge Functions).

## 1. Supabase setup

1. Create a project at [supabase.com](https://supabase.com)
2. Run migrations in `supabase/migrations/` (SQL editor or CLI):
   - `001_phase5_schema.sql` — tables + RLS
   - `002_seed_hidden_tests.sql` — hidden tests for all practice problems
3. Deploy Edge Functions (`grade-submission`, `create-checkout`, `stripe-webhook`) and set secrets:

| Secret | Purpose |
|--------|---------|
| `SUPABASE_SERVICE_ROLE_KEY` | Grading + webhook writes |
| `STRIPE_SECRET_KEY` | Checkout sessions |
| `STRIPE_PRICE_ID` | One-time Practice Premium price |
| `STRIPE_WEBHOOK_SECRET` | Verify Stripe webhooks |
| `SITE_URL` | e.g. `https://your-site.pages.dev` |

4. Enable Email auth in Supabase → Authentication → Providers

## 2. Stripe setup

1. Create product **PyPath Practice Premium** (one-time payment)
2. Copy **Price ID** → `STRIPE_PRICE_ID` in Edge Function secrets
3. Add webhook endpoint: `https://<project>.supabase.co/functions/v1/stripe-webhook`
4. Listen for `checkout.session.completed`

## 3. Cloudflare Pages

| Setting | Value |
|---------|--------|
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Framework preset** | None |

**Environment variables** (Cloudflare Pages → Settings → Environment variables):

| Variable | Value |
|----------|--------|
| `NODE_VERSION` | `20` |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `NEXT_PUBLIC_STRIPE_PRICE_LABEL` | e.g. `$29 — one-time unlock` |

Copy from [`.env.example`](.env.example).

## 4. Local development

```bash
cp .env.example .env.local
# Fill in Supabase keys
npm install
npm run dev
```

`npm run dev` clears `.next` and frees port 3000 automatically. Use `http://localhost:8788` only for `npm run preview:static` — not while developing.

## 5. Local preview of production build

```bash
npm run build
npm run preview:static
```

Open http://localhost:8788

**Do not run `npm run build` while `npm run dev` is running** — `npm run build` now exits with an error if ports 3000/3001 are in use.

## 6. Regenerate practice content

After editing `scripts/generate-practice-content.mjs`:

```bash
node scripts/generate-practice-content.mjs
```

Then re-run migration `002_seed_hidden_tests.sql` if hidden tests change.

## Notes

- Lesson/quiz progress syncs to Supabase when logged in; localStorage is used as cache.
- First **5 problems per topic** are free; problem 6+ requires Stripe one-time unlock.
- Public tests run in Pyodide; hidden tests run server-side via Piston API in Edge Functions.
- Push to GitHub; Cloudflare rebuilds automatically.
