# Supabase project setup

Project: [vbeewvtfytaxesfpoqpx](https://supabase.com/dashboard/project/vbeewvtfytaxesfpoqpx)

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

## 3. Auth settings (fix “email rate limit exceeded” / 429 on signup)

Supabase’s **built-in email** allows only a few signup/reset emails per hour. Repeated signups hit `429 email rate limit exceeded`.

**Recommended (production):** deploy the `register-user` Edge Function — it creates confirmed accounts **without sending email**:

```bash
supabase functions deploy register-user
```

`SUPABASE_SERVICE_ROLE_KEY` is injected automatically when deployed via CLI. After deploy, registration signs users in immediately (no confirmation email).

**Alternative A — Dashboard (quick test):** Authentication → **Providers** → Email → turn **Confirm email** OFF. Signup then returns a session without sending mail.

**Alternative B — Custom SMTP:** Authentication → **SMTP** → connect Resend, SendGrid, or similar. Raises email limits for confirmation/reset flows.

Dashboard → **Authentication** → **URL configuration**:

- **Site URL:** your production URL (and `http://localhost:3000` for local dev).
- **Redirect URLs:** add `http://localhost:3000/**` and your production URL.

## 4. Edge Functions

Link the project once:

```bash
supabase login
supabase link --project-ref vbeewvtfytaxesfpoqpx
```

Deploy **register-user** (signup without email rate limits):

```bash
supabase functions deploy register-user
```

Deploy **grade-submission** for hidden test grading (uses [Judge0 CE](https://ce.judge0.com)):

```bash
supabase functions deploy grade-submission
```

Deploy Razorpay functions when you have Razorpay keys:

```bash
supabase functions deploy create-checkout
supabase functions deploy verify-payment
supabase functions deploy razorpay-webhook
```

Set secrets in Dashboard → **Edge Functions** → secrets, or:

```bash
supabase secrets set SITE_URL=http://localhost:3000 RAZORPAY_KEY_ID=... RAZORPAY_KEY_SECRET=... RAZORPAY_WEBHOOK_SECRET=... RAZORPAY_AMOUNT_INR=999 SUPABASE_SERVICE_ROLE_KEY=...
```

**Without Razorpay:** free practice (problems 1–5) and auth/progress work after step 2. Premium problems stay locked until payment is wired.

## 5. Cloudflare Pages

Add the same `NEXT_PUBLIC_*` vars from `.env.local` in Pages → Settings → Environment variables.
