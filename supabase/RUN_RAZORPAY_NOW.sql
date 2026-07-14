-- IQmath LMS: run this once in Supabase → SQL Editor
-- Safe to re-run (IF NOT EXISTS / drop+create policies)

-- ========== Razorpay entitlement columns ==========
alter table public.entitlements
  add column if not exists razorpay_payment_id text,
  add column if not exists razorpay_order_id text;

comment on column public.entitlements.stripe_payment_intent is
  'Legacy Stripe payment intent (deprecated; use razorpay_payment_id)';

-- ========== Progress delete policies (optional but recommended) ==========
drop policy if exists "Users delete own lesson progress" on public.lesson_progress;
create policy "Users delete own lesson progress"
  on public.lesson_progress for delete
  using (auth.uid() = user_id);

drop policy if exists "Users delete own practice progress" on public.practice_progress;
create policy "Users delete own practice progress"
  on public.practice_progress for delete
  using (auth.uid() = user_id);
