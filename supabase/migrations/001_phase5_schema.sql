-- Phase 5: Auth profiles, progress, practice hidden tests, entitlements

-- Profiles (extends auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null default '',
  mobile text not null default '',
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users read own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, mobile)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'mobile', '')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Lesson progress
create table if not exists public.lesson_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  topic_id text not null,
  completed boolean not null default false,
  quiz_score integer not null default 0,
  last_visited_at timestamptz,
  primary key (user_id, topic_id)
);

alter table public.lesson_progress enable row level security;

create policy "Users read own lesson progress"
  on public.lesson_progress for select
  using (auth.uid() = user_id);

create policy "Users insert own lesson progress"
  on public.lesson_progress for insert
  with check (auth.uid() = user_id);

create policy "Users update own lesson progress"
  on public.lesson_progress for update
  using (auth.uid() = user_id);

-- Practice progress
create type public.practice_status as enum ('not_started', 'attempted', 'solved');

create table if not exists public.practice_progress (
  user_id uuid not null references auth.users (id) on delete cascade,
  problem_id text not null,
  status public.practice_status not null default 'not_started',
  code_draft text not null default '',
  public_passed boolean not null default false,
  hidden_passed boolean not null default false,
  submitted_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, problem_id)
);

alter table public.practice_progress enable row level security;

create policy "Users read own practice progress"
  on public.practice_progress for select
  using (auth.uid() = user_id);

create policy "Users insert own practice progress"
  on public.practice_progress for insert
  with check (auth.uid() = user_id);

create policy "Users update own practice progress"
  on public.practice_progress for update
  using (auth.uid() = user_id);

-- Hidden tests (service role / edge functions only — no client policies)
create table if not exists public.practice_hidden_tests (
  problem_id text primary key,
  tests_json jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.practice_hidden_tests enable row level security;
-- No policies: anon/authenticated cannot read

-- Entitlements (Stripe one-time unlock)
create table if not exists public.entitlements (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  product text not null default 'practice_premium',
  stripe_payment_intent text,
  purchased_at timestamptz not null default now(),
  unique (user_id, product)
);

alter table public.entitlements enable row level security;

create policy "Users read own entitlements"
  on public.entitlements for select
  using (auth.uid() = user_id);

-- Inserts only via service role (webhook)

create index if not exists idx_lesson_progress_user on public.lesson_progress (user_id);
create index if not exists idx_practice_progress_user on public.practice_progress (user_id);
create index if not exists idx_entitlements_user on public.entitlements (user_id);
