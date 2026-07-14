-- Razorpay entitlements (replaces Stripe payment refs)
alter table public.entitlements
  add column if not exists razorpay_payment_id text,
  add column if not exists razorpay_order_id text;

comment on column public.entitlements.stripe_payment_intent is
  'Legacy Stripe payment intent (deprecated; use razorpay_payment_id)';
