# Deploy Introduction to Python to Cloudflare Pages

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

1. Create product **Introduction to Python Practice Premium** (one-time payment)
2. Copy **Price ID** → `STRIPE_PRICE_ID` in Edge Function secrets
3. Add webhook endpoint: `https://<project>.supabase.co/functions/v1/stripe-webhook`
4. Listen for `checkout.session.completed`

## 3. Cloudflare Pages

### Production branch must be `main`

If **Vyas** (or another branch) deploys as preview but **main** does not update production, the project is using the wrong production branch.

1. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → your **python-lms** project
2. Go to **Settings** → **Builds & deployments**
3. Set **Production branch** to **`main`** (not `Vyas`)
4. Keep **Preview deployments** enabled so `Vyas` and other branches still get preview URLs
5. Click **Retry deployment** on the latest **main** build, or push to `main` again

| Setting | Value |
|---------|--------|
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Framework preset** | None |
| **Node version** | `20` (environment variable `NODE_VERSION`) |

### GitHub Actions production deploy (recommended)

This repo includes [`.github/workflows/cloudflare-production.yml`](.github/workflows/cloudflare-production.yml). It deploys **only when `main` is pushed**, so production stays on `main` even if Cloudflare preview builds use other branches.

Add these **GitHub repository secrets** (Settings → Secrets and variables → Actions):

| Secret | Where to get it |
|--------|-----------------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare → My Profile → API Tokens → Create Token → **Edit Cloudflare Workers** template (include Account / Pages) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard URL or Workers & Pages overview |
| `NEXT_PUBLIC_SUPABASE_URL` | Same as local `.env.local` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Same as local `.env.local` |
| `NEXT_PUBLIC_STRIPE_PRICE_LABEL` | Optional display label |

After secrets are set, every push to **`main`** runs the workflow and publishes to production.

**Environment variables** (also set in Cloudflare Pages → Settings → Environment variables for Git-based builds):

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
