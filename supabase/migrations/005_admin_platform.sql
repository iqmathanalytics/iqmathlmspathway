-- Admin platform: roles, colleges, enrollments, course publish, profile fields
-- Safe to re-run. Paste into Supabase SQL Editor if you are not using the CLI.

alter table public.profiles
  add column if not exists email text not null default '',
  add column if not exists college_id uuid,
  add column if not exists department text not null default '',
  add column if not exists role text not null default 'student',
  add column if not exists is_active boolean not null default true;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
      and coalesce(is_active, true) = true
  );
$$;

grant execute on function public.is_admin() to anon, authenticated;

do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'profiles_role_check'
  ) then
    alter table public.profiles
      add constraint profiles_role_check
      check (role in ('student', 'admin'));
  end if;
end $$;

-- Colleges
create table if not exists public.colleges (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  code text not null default '',
  city text not null default '',
  archived boolean not null default false,
  created_at timestamptz not null default now()
);

create unique index if not exists colleges_name_lower_idx
  on public.colleges (lower(name));
create unique index if not exists colleges_code_lower_idx
  on public.colleges (lower(code))
  where code <> '';

alter table public.profiles
  drop constraint if exists profiles_college_id_fkey;
alter table public.profiles
  add constraint profiles_college_id_fkey
  foreign key (college_id) references public.colleges (id) on delete set null;

create index if not exists idx_profiles_college on public.profiles (college_id);
create index if not exists idx_profiles_role on public.profiles (role);
create index if not exists idx_profiles_email on public.profiles (lower(email));

-- Course catalog visibility (toggle without redeploy)
create table if not exists public.course_settings (
  course_id text primary key,
  published boolean not null default true,
  updated_at timestamptz not null default now()
);

insert into public.course_settings (course_id, published)
values
  ('python', true),
  ('agentic-ai', true),
  ('sql', true),
  ('mba-ai', true)
on conflict (course_id) do nothing;

-- Student ↔ course assignment
create table if not exists public.enrollments (
  user_id uuid not null references auth.users (id) on delete cascade,
  course_id text not null,
  assigned_at timestamptz not null default now(),
  primary key (user_id, course_id)
);

create index if not exists idx_enrollments_course on public.enrollments (course_id);

-- Backfill email from auth
update public.profiles p
set email = coalesce(u.email, p.email, '')
from auth.users u
where u.id = p.id
  and (p.email is null or p.email = '');

-- Promote site admins if those accounts already exist
update public.profiles p
set role = 'admin'
from auth.users u
where p.id = u.id
  and lower(u.email) in (
    'jagathishwaranparthiban@gmail.com',
    'iqmathanalytics@gmail.com'
  );

-- Keep profile in sync on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  college_uuid uuid;
  v_role text := 'student';
begin
  begin
    college_uuid := nullif(trim(coalesce(new.raw_user_meta_data ->> 'college_id', '')), '')::uuid;
  exception when others then
    college_uuid := null;
  end;

  if lower(coalesce(new.email, '')) in (
    'jagathishwaranparthiban@gmail.com',
    'iqmathanalytics@gmail.com'
  ) then
    v_role := 'admin';
  end if;

  insert into public.profiles (id, full_name, mobile, email, college_id, department, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'mobile', ''),
    coalesce(new.email, ''),
    college_uuid,
    coalesce(new.raw_user_meta_data ->> 'department', ''),
    v_role
  )
  on conflict (id) do update
    set
      full_name = excluded.full_name,
      mobile = excluded.mobile,
      email = excluded.email,
      college_id = coalesce(excluded.college_id, public.profiles.college_id),
      department = case
        when excluded.department <> '' then excluded.department
        else public.profiles.department
      end,
      role = case
        when public.profiles.role = 'admin' then 'admin'
        else excluded.role
      end;

  if v_role = 'student' then
    insert into public.enrollments (user_id, course_id)
    select new.id, cs.course_id
    from public.course_settings cs
    where cs.published = true
    on conflict do nothing;
  end if;

  return new;
end;
$$;

-- Existing students: enroll in currently published courses
insert into public.enrollments (user_id, course_id)
select p.id, cs.course_id
from public.profiles p
cross join public.course_settings cs
where coalesce(p.role, 'student') = 'student'
  and cs.published = true
on conflict do nothing;

-- Students cannot change role / email / is_active via the client
create or replace function public.profiles_guard_privileged_columns()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  -- Dashboard SQL / service role have no user JWT; allow those updates.
  if auth.uid() is null then
    return new;
  end if;
  if public.is_admin() then
    return new;
  end if;
  new.role := old.role;
  new.email := old.email;
  new.is_active := old.is_active;
  return new;
end;
$$;

drop trigger if exists profiles_guard_privileged_columns on public.profiles;
create trigger profiles_guard_privileged_columns
  before update on public.profiles
  for each row execute function public.profiles_guard_privileged_columns();

-- After login: copy auth email + mobile onto the profile
create or replace function public.sync_login_profile(p_mobile text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  uemail text;
  cleaned text := trim(coalesce(p_mobile, ''));
begin
  if uid is null then
    raise exception 'Not authenticated';
  end if;

  select email into uemail from auth.users where id = uid;

  update public.profiles
  set
    email = coalesce(uemail, email),
    mobile = case when length(cleaned) >= 8 then cleaned else mobile end
  where id = uid;
end;
$$;

grant execute on function public.sync_login_profile(text) to authenticated;

-- RLS
alter table public.colleges enable row level security;
alter table public.course_settings enable row level security;
alter table public.enrollments enable row level security;

drop policy if exists "Admins read all profiles" on public.profiles;
create policy "Admins read all profiles"
  on public.profiles for select
  using (public.is_admin());

drop policy if exists "Admins update all profiles" on public.profiles;
create policy "Admins update all profiles"
  on public.profiles for update
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Public read colleges" on public.colleges;
create policy "Public read colleges"
  on public.colleges for select
  using (archived = false or public.is_admin());

drop policy if exists "Admins insert colleges" on public.colleges;
create policy "Admins insert colleges"
  on public.colleges for insert
  with check (public.is_admin());

drop policy if exists "Admins update colleges" on public.colleges;
create policy "Admins update colleges"
  on public.colleges for update
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Admins delete colleges" on public.colleges;
create policy "Admins delete colleges"
  on public.colleges for delete
  using (public.is_admin());

drop policy if exists "Anyone read course settings" on public.course_settings;
create policy "Anyone read course settings"
  on public.course_settings for select
  using (true);

drop policy if exists "Admins update course settings" on public.course_settings;
create policy "Admins update course settings"
  on public.course_settings for update
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Admins insert course settings" on public.course_settings;
create policy "Admins insert course settings"
  on public.course_settings for insert
  with check (public.is_admin());

drop policy if exists "Users read own enrollments" on public.enrollments;
create policy "Users read own enrollments"
  on public.enrollments for select
  using (auth.uid() = user_id);

drop policy if exists "Admins read all enrollments" on public.enrollments;
create policy "Admins read all enrollments"
  on public.enrollments for select
  using (public.is_admin());

drop policy if exists "Admins insert enrollments" on public.enrollments;
create policy "Admins insert enrollments"
  on public.enrollments for insert
  with check (public.is_admin());

drop policy if exists "Admins delete enrollments" on public.enrollments;
create policy "Admins delete enrollments"
  on public.enrollments for delete
  using (public.is_admin());

drop policy if exists "Admins read all lesson progress" on public.lesson_progress;
create policy "Admins read all lesson progress"
  on public.lesson_progress for select
  using (public.is_admin());

drop policy if exists "Admins read all practice progress" on public.practice_progress;
create policy "Admins read all practice progress"
  on public.practice_progress for select
  using (public.is_admin());

drop policy if exists "Admins read all entitlements" on public.entitlements;
create policy "Admins read all entitlements"
  on public.entitlements for select
  using (public.is_admin());

drop policy if exists "Admins insert entitlements" on public.entitlements;
create policy "Admins insert entitlements"
  on public.entitlements for insert
  with check (public.is_admin());

drop policy if exists "Admins delete entitlements" on public.entitlements;
create policy "Admins delete entitlements"
  on public.entitlements for delete
  using (public.is_admin());

alter table public.lesson_progress
  add column if not exists quiz_attempted boolean not null default false,
  add column if not exists ide_ran boolean not null default false;

update public.lesson_progress
set quiz_attempted = true
where quiz_score > 0
  and coalesce(quiz_attempted, false) = false;
