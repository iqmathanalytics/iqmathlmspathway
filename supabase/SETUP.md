# Supabase project setup

Project: [zhieuuzfuazbvsuwzpzv](https://supabase.com/dashboard/project/zhieuuzfuazbvsuwzpzv)

## 1. Local env (done)

`.env.local` is configured with your project URL and anon key. It is gitignored — do not commit it.

Restart dev server after changes:

```bash
npm run dev
```

Verify connection:

```bash
node scripts/verify-supabase.mjs
```

## 2. Run database SQL (required once)

In Supabase Dashboard → **SQL Editor** → **New query**, paste and run the full contents of:

**[`RUN_IN_DASHBOARD.sql`](./RUN_IN_DASHBOARD.sql)**

This creates profiles, progress tables, RLS policies, and seeds hidden tests for all practice problems.

## 3. Auth settings (recommended for dev)

Dashboard → **Authentication** → **Providers** → Email:

- Turn **Confirm email** OFF while testing (turn ON for production).
- Set **Site URL** to `http://localhost:3000` for local dev.

Dashboard → **Authentication** → **URL configuration**:

- Redirect URLs: add `http://localhost:3000/**` and your production URL.

## 4. Edge Functions

Deploy **grade-submission** for hidden test grading (uses [Judge0 CE](https://ce.judge0.com)):

```bash
supabase login
supabase link --project-ref zhieuuzfuazbvsuwzpzv
supabase functions deploy grade-submission
```

Deploy Stripe functions when you have Stripe keys:

```bash
supabase functions deploy create-checkout
supabase functions deploy stripe-webhook
```

Set secrets in Dashboard → **Edge Functions** → secrets, or:

```bash
supabase secrets set SITE_URL=http://localhost:3000 STRIPE_SECRET_KEY=... STRIPE_PRICE_ID=... STRIPE_WEBHOOK_SECRET=... SUPABASE_SERVICE_ROLE_KEY=...
```

**Without Stripe:** free practice (problems 1–5) and auth/progress work after step 2. Premium problems stay locked until payment is wired.

## 5. Cloudflare Pages

Add the same `NEXT_PUBLIC_*` vars from `.env.local` in Pages → Settings → Environment variables.
