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

-- Hidden tests (service role / edge functions only â€” no client policies)
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
-- Auto-generated hidden tests seed
insert into public.practice_hidden_tests (problem_id, tests_json) values
  ('m1-t1-p01', '{"tests":[{"expectedStdout":"Hello, World!"},{"setup":"# hidden check","expectedStdout":"Hello, World!"}]}'::jsonb),
  ('m1-t1-p02', '{"tests":[{"expectedStdout":"Alex\nData Science"},{"setup":"# hidden check","expectedStdout":"Alex\nData Science"}]}'::jsonb),
  ('m1-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3"},{"setup":"# hidden check","expectedStdout":"1\n2\n3"}]}'::jsonb),
  ('m1-t1-p04', '{"tests":[{"expectedStdout":"Python is fun"},{"setup":"# hidden check","expectedStdout":"Python is fun"}]}'::jsonb),
  ('m1-t1-p05', '{"tests":[{"expectedStdout":"====\nWelcome to Python\n===="},{"setup":"# hidden check","expectedStdout":"====\nWelcome to Python\n===="}]}'::jsonb),
  ('m1-t1-p06', '{"tests":[{"expectedStdout":"I am Sam learning Python"},{"setup":"# hidden check","expectedStdout":"I am Sam learning Python"}]}'::jsonb),
  ('m1-t1-p07', '{"tests":[{"expectedStdout":"42"},{"setup":"# hidden check","expectedStdout":"42"}]}'::jsonb),
  ('m1-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m1-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m1-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m1-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m1-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m1-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m1-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m1-t3-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m1-t3-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m1-t3-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m1-t3-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m1-t3-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m1-t3-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m1-t3-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m1-t4-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m1-t4-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m1-t4-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m1-t4-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m1-t4-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m1-t4-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m1-t4-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m2-t1-p01', '{"tests":[{"expectedStdout":"Jordan"},{"setup":"# hidden check","expectedStdout":"Jordan"}]}'::jsonb),
  ('m2-t1-p02', '{"tests":[{"expectedStdout":"15"},{"setup":"# hidden check","expectedStdout":"15"}]}'::jsonb),
  ('m2-t1-p03', '{"tests":[{"expectedStdout":"Hello\nPython"},{"setup":"# hidden check","expectedStdout":"Hello\nPython"}]}'::jsonb),
  ('m2-t1-p04', '{"tests":[{"expectedStdout":"Hello, Mia"},{"setup":"# hidden check","expectedStdout":"Hello, Mia"}]}'::jsonb),
  ('m2-t1-p05', '{"tests":[{"expectedStdout":"Name: Leo, Age: 20"},{"setup":"# hidden check","expectedStdout":"Name: Leo, Age: 20"}]}'::jsonb),
  ('m2-t1-p06', '{"tests":[{"expectedStdout":"1 2 3"},{"setup":"# hidden check","expectedStdout":"1 2 3"}]}'::jsonb),
  ('m2-t1-p07', '{"tests":[{"expectedStdout":"a-b-c"},{"setup":"# hidden check","expectedStdout":"a-b-c"}]}'::jsonb),
  ('m2-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m2-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m2-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m2-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m2-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m2-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m2-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m2-t3-p01', '{"tests":[{"expectedStdout":"21"},{"setup":"# hidden check","expectedStdout":"21"}]}'::jsonb),
  ('m2-t3-p02', '{"tests":[{"expectedStdout":"Pune"},{"setup":"# hidden check","expectedStdout":"Pune"}]}'::jsonb),
  ('m2-t3-p03', '{"tests":[{"expectedStdout":"2"},{"setup":"# hidden check","expectedStdout":"2"}]}'::jsonb),
  ('m2-t3-p04', '{"tests":[{"expectedStdout":"15"},{"setup":"# hidden check","expectedStdout":"15"}]}'::jsonb),
  ('m2-t3-p05', '{"tests":[{"expectedStdout":"2\n1"},{"setup":"# hidden check","expectedStdout":"2\n1"}]}'::jsonb),
  ('m2-t3-p06', '{"tests":[{"expectedStdout":"88"},{"setup":"# hidden check","expectedStdout":"88"}]}'::jsonb),
  ('m2-t3-p07', '{"tests":[{"expectedStdout":"6"},{"setup":"# hidden check","expectedStdout":"6"}]}'::jsonb),
  ('m2-t4-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m2-t4-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m2-t4-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m2-t4-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m2-t4-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m2-t4-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m2-t4-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m2-t5-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m2-t5-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m2-t5-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m2-t5-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m2-t5-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m2-t5-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m2-t5-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m3-t1-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m3-t1-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m3-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m3-t1-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m3-t1-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m3-t1-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m3-t1-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m3-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m3-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m3-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m3-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m3-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m3-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m3-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m3-t3-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m3-t3-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m3-t3-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m3-t3-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m3-t3-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m3-t3-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m3-t3-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m3-t4-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m3-t4-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m3-t4-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m3-t4-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m3-t4-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m3-t4-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m3-t4-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m3-t5-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m3-t5-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m3-t5-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m3-t5-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m3-t5-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m3-t5-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m3-t5-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m3-t6-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m3-t6-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m3-t6-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m3-t6-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m3-t6-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m3-t6-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m3-t6-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m3-t7-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m3-t7-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m3-t7-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m3-t7-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m3-t7-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m3-t7-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m3-t7-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m4-t1-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m4-t1-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m4-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m4-t1-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m4-t1-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m4-t1-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m4-t1-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m4-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m4-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m4-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m4-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m4-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m4-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m4-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m4-t3-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m4-t3-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m4-t3-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m4-t3-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m4-t3-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m4-t3-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m4-t3-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m4-t4-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m4-t4-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m4-t4-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m4-t4-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m4-t4-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m4-t4-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m4-t4-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m4-t5-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m4-t5-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m4-t5-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m4-t5-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m4-t5-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m4-t5-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m4-t5-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m5-t1-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m5-t1-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m5-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m5-t1-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m5-t1-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m5-t1-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m5-t1-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m5-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m5-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m5-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m5-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m5-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m5-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m5-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m5-t3-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m5-t3-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m5-t3-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m5-t3-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m5-t3-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m5-t3-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m5-t3-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m5-t4-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m5-t4-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m5-t4-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m5-t4-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m5-t4-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m5-t4-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m5-t4-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m5-t5-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m5-t5-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m5-t5-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m5-t5-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m5-t5-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m5-t5-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m5-t5-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m5-t6-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m5-t6-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m5-t6-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m5-t6-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m5-t6-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m5-t6-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m5-t6-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m6-t1-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m6-t1-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m6-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m6-t1-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m6-t1-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m6-t1-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m6-t1-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m6-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m6-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m6-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m6-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m6-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m6-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m6-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m6-t3-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m6-t3-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m6-t3-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m6-t3-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m6-t3-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m6-t3-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m6-t3-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m6-t4-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m6-t4-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m6-t4-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m6-t4-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m6-t4-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m6-t4-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m6-t4-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m6-t5-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m6-t5-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m6-t5-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m6-t5-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m6-t5-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m6-t5-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m6-t5-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m7-t1-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m7-t1-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m7-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m7-t1-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m7-t1-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m7-t1-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m7-t1-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m7-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m7-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m7-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m7-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m7-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m7-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m7-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m7-t3-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m7-t3-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m7-t3-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m7-t3-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m7-t3-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m7-t3-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m7-t3-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m7-t4-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m7-t4-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m7-t4-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m7-t4-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m7-t4-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m7-t4-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m7-t4-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m8-t1-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m8-t1-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m8-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m8-t1-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m8-t1-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m8-t1-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m8-t1-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m8-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m8-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m8-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m8-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m8-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m8-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m8-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m8-t3-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m8-t3-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m8-t3-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m8-t3-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m8-t3-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m8-t3-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m8-t3-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m8-t4-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m8-t4-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m8-t4-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m8-t4-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m8-t4-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m8-t4-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m8-t4-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m9-t1-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m9-t1-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m9-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m9-t1-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m9-t1-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m9-t1-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m9-t1-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m9-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m9-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m9-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m9-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m9-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m9-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m9-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m9-t3-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m9-t3-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m9-t3-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m9-t3-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m9-t3-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m9-t3-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m9-t3-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m10-t1-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m10-t1-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m10-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m10-t1-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m10-t1-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m10-t1-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m10-t1-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m10-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m10-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m10-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m10-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m10-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m10-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m10-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m10-t3-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m10-t3-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m10-t3-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m10-t3-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m10-t3-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m10-t3-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m10-t3-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m10-t4-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m10-t4-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m10-t4-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m10-t4-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m10-t4-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m10-t4-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m10-t4-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m10-t5-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m10-t5-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m10-t5-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m10-t5-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m10-t5-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m10-t5-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m10-t5-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m11-t1-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m11-t1-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m11-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m11-t1-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m11-t1-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m11-t1-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m11-t1-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m11-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m11-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m11-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m11-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m11-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m11-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m11-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m11-t3-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m11-t3-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m11-t3-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m11-t3-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m11-t3-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m11-t3-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m11-t3-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m12-t1-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m12-t1-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m12-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m12-t1-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m12-t1-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m12-t1-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m12-t1-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m12-t2-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m12-t2-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m12-t2-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m12-t2-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m12-t2-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m12-t2-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m12-t2-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m12-t3-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m12-t3-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m12-t3-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m12-t3-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m12-t3-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m12-t3-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m12-t3-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m12-t4-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m12-t4-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m12-t4-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m12-t4-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m12-t4-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m12-t4-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m12-t4-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m12-t5-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m12-t5-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m12-t5-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m12-t5-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m12-t5-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m12-t5-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m12-t5-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb),
  ('m13-t1-p01', '{"tests":[{"expectedStdout":"Ready"},{"setup":"# hidden check","expectedStdout":"Ready"}]}'::jsonb),
  ('m13-t1-p02', '{"tests":[{"expectedStdout":"A,B"},{"setup":"# hidden check","expectedStdout":"A,B"}]}'::jsonb),
  ('m13-t1-p03', '{"tests":[{"expectedStdout":"1\n2\n3\n4"},{"setup":"# hidden check","expectedStdout":"1\n2\n3\n4"}]}'::jsonb),
  ('m13-t1-p04', '{"tests":[{"expectedStdout":"Pass"},{"setup":"# hidden check","expectedStdout":"Pass"}]}'::jsonb),
  ('m13-t1-p05', '{"tests":[{"expectedStdout":"Hello"},{"setup":"# hidden check","expectedStdout":"Hello"}]}'::jsonb),
  ('m13-t1-p06', '{"tests":[{"expectedStdout":"middle"},{"setup":"# hidden check","expectedStdout":"middle"}]}'::jsonb),
  ('m13-t1-p07', '{"tests":[{"expectedStdout":"Python"},{"setup":"# hidden check","expectedStdout":"Python"}]}'::jsonb)
on conflict (problem_id) do update set tests_json = excluded.tests_json, updated_at = now();

-- Progress delete policies (auth-only reset)
drop policy if exists "Users delete own lesson progress" on public.lesson_progress;
create policy "Users delete own lesson progress"
  on public.lesson_progress for delete
  using (auth.uid() = user_id);

drop policy if exists "Users delete own practice progress" on public.practice_progress;
create policy "Users delete own practice progress"
  on public.practice_progress for delete
  using (auth.uid() = user_id);
