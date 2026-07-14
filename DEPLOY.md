# Deploy IQmath Technologies LMS to Cloudflare Pages

Repository: [github.com/iqmathanalytics/iqmathlmspathway](https://github.com/iqmathanalytics/iqmathlmspathway)

This app uses **Next.js static export** (`out/`) — ideal for Cloudflare Pages. Python runs in the browser via Pyodide. **Auth, progress sync, hidden test grading, and Razorpay** run on **Supabase** (Auth + Postgres + Edge Functions).

## 1. Supabase setup

1. Create a project at [supabase.com](https://supabase.com)
2. Run migrations in `supabase/migrations/` (SQL editor or CLI):
   - `001_phase5_schema.sql` — tables + RLS
   - `002_seed_hidden_tests.sql` — hidden tests for all practice problems
   - `003_razorpay_entitlements.sql` / `004_razorpay_entitlements.sql` — Razorpay payment columns
3. Deploy Edge Functions (`grade-submission`, `create-checkout`, `verify-payment`, `razorpay-webhook`) and set secrets:

| Secret | Purpose |
|--------|---------|
| `SUPABASE_SERVICE_ROLE_KEY` | Grading + payment entitlement writes |
| `RAZORPAY_KEY_ID` | Razorpay Key Id (Dashboard → API Keys) |
| `RAZORPAY_KEY_SECRET` | Razorpay Key Secret |
| `RAZORPAY_WEBHOOK_SECRET` | Webhook signing secret (Dashboard → Webhooks) |
| `RAZORPAY_AMOUNT_INR` | One-time price in rupees (e.g. `999`) — or use `RAZORPAY_AMOUNT_PAISE` |
| `SITE_URL` | e.g. `https://iqmathlmspathway.pages.dev` |

4. Enable Email auth in Supabase → Authentication → Providers

## 2. Razorpay setup (INR)

1. Create a [Razorpay](https://razorpay.com) account and activate **Test** or **Live** mode
2. Copy **Key Id** + **Key Secret** → Edge Function secrets above
3. Set amount with `RAZORPAY_AMOUNT_INR=999` (currency is always **INR**)
4. Add webhook endpoint: `https://<project>.supabase.co/functions/v1/razorpay-webhook`
5. Subscribe to events: `payment.captured` and `order.paid`
6. Copy the webhook secret → `RAZORPAY_WEBHOOK_SECRET`

## 3. Cloudflare Pages

### Option A — Connect GitHub in the Cloudflare dashboard (simplest)

1. Ensure code is on GitHub: [iqmathanalytics/iqmathlmspathway](https://github.com/iqmathanalytics/iqmathlmspathway)
2. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Authorize GitHub if asked, then select **`iqmathanalytics/iqmathlmspathway`**
4. Configure the build:

| Setting | Value |
|---------|--------|
| **Project name** | `iqmathlmspathway` (or your choice) |
| **Production branch** | `main` |
| **Framework preset** | None |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | `/` (leave default) |

5. **Environment variables** (Settings → Environment variables → Production, and Preview if you want):

| Variable | Value |
|----------|--------|
| `NODE_VERSION` | `20` |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `NEXT_PUBLIC_RAZORPAY_PRICE_LABEL` | e.g. `₹999 — one-time unlock` |

6. Click **Save and Deploy**. Wait for the build. Open the `*.pages.dev` URL.
7. Optional: **Custom domains** → add `lms.yourdomain.com` and follow DNS instructions.

### Option B — GitHub Actions (this repo’s workflow)

File: `.github/workflows/cloudflare-production.yml` (deploys on push to `main`).

1. Create a Cloudflare Pages project named **`iqmathlmspathway`** (can be empty initially)
2. In GitHub → **Settings** → **Secrets and variables** → **Actions**, add:

| Secret | Source |
|--------|--------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare → My Profile → API Tokens → **Edit Cloudflare Workers** (Pages access) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare dashboard / Workers & Pages overview |
| `NEXT_PUBLIC_SUPABASE_URL` | From `.env.local` / Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | From `.env.local` / Supabase |
| `NEXT_PUBLIC_RAZORPAY_PRICE_LABEL` | Optional INR label |

3. Push to `main` — Actions builds and publishes `out/` to Pages.

Do **not** run two competing production deploy systems on the same project unless you intend that.

## 4. Local development

```bash
cp .env.example .env.local
# Fill in Supabase keys
npm install
npm run dev
```

## 5. Local preview of production build

```bash
npm run build
npm run preview:static
```

Open http://localhost:8788

## Notes

- Static export = Cloudflare Pages-friendly; no Node server on Pages.
- Supabase Edge Functions stay on Supabase (not Cloudflare Workers) in this setup.
- Day 3 PDFs under `public/datasets/mba/real/` ship with the static build.
- Day 4 Olist/IBM HR datasets are downloaded by students from Kaggle (links in topics).
