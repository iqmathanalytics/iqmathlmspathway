-- PAPC quiz attempts + certificates (practice solves reuse practice_progress).

create table if not exists public.certification_quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  certification_id text not null default 'papc',
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  score_points integer,
  score_pct numeric,
  passed boolean,
  answers jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_cert_attempts_user
  on public.certification_quiz_attempts (user_id, certification_id, started_at desc);

create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  certification_id text not null default 'papc',
  recipient_name text not null default '',
  level text not null,
  score_pct numeric not null,
  issued_at timestamptz not null default now(),
  expires_at timestamptz not null,
  verification_code text not null unique,
  unique (user_id, certification_id)
);

create unique index if not exists idx_certificates_verification_code
  on public.certificates (verification_code);

alter table public.certification_quiz_attempts enable row level security;
alter table public.certificates enable row level security;

drop policy if exists "Users read own cert attempts" on public.certification_quiz_attempts;
create policy "Users read own cert attempts"
  on public.certification_quiz_attempts for select
  using (auth.uid() = user_id);

drop policy if exists "Users insert own cert attempts" on public.certification_quiz_attempts;
create policy "Users insert own cert attempts"
  on public.certification_quiz_attempts for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users update own cert attempts" on public.certification_quiz_attempts;
create policy "Users update own cert attempts"
  on public.certification_quiz_attempts for update
  using (auth.uid() = user_id);

drop policy if exists "Admins read all cert attempts" on public.certification_quiz_attempts;
create policy "Admins read all cert attempts"
  on public.certification_quiz_attempts for select
  using (public.is_admin());

drop policy if exists "Users read own certificates" on public.certificates;
create policy "Users read own certificates"
  on public.certificates for select
  using (auth.uid() = user_id);

drop policy if exists "Users insert own certificates" on public.certificates;
create policy "Users insert own certificates"
  on public.certificates for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users update own certificates" on public.certificates;
create policy "Users update own certificates"
  on public.certificates for update
  using (auth.uid() = user_id);

drop policy if exists "Public read certificates" on public.certificates;
create policy "Public read certificates"
  on public.certificates for select
  using (true);

drop policy if exists "Admins read all certificates" on public.certificates;
create policy "Admins read all certificates"
  on public.certificates for select
  using (public.is_admin());
