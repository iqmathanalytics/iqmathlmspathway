-- Paste into Supabase SQL Editor (Dashboard → SQL → New query).
-- Requires admin platform tables from RUN_ADMIN.sql first.
--
-- College learning plans: admin assigns courses per college.
-- On signup, students are enrolled only in their college's assigned courses
-- (falls back to all published courses if the college has no plan yet).

create table if not exists public.college_courses (
  college_id uuid not null references public.colleges (id) on delete cascade,
  course_id text not null,
  assigned_at timestamptz not null default now(),
  primary key (college_id, course_id)
);

create index if not exists idx_college_courses_course
  on public.college_courses (course_id);

alter table public.college_courses enable row level security;

drop policy if exists "Public read college courses" on public.college_courses;
create policy "Public read college courses"
  on public.college_courses for select
  using (true);

drop policy if exists "Admins insert college courses" on public.college_courses;
create policy "Admins insert college courses"
  on public.college_courses for insert
  with check (public.is_admin());

drop policy if exists "Admins delete college courses" on public.college_courses;
create policy "Admins delete college courses"
  on public.college_courses for delete
  using (public.is_admin());

-- Enroll a student according to their college plan (or all published as fallback).
create or replace function public.enroll_student_for_college(p_user_id uuid, p_college_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_college_id is not null and exists (
    select 1 from public.college_courses where college_id = p_college_id
  ) then
    insert into public.enrollments (user_id, course_id)
    select p_user_id, cc.course_id
    from public.college_courses cc
    join public.course_settings cs on cs.course_id = cc.course_id
    where cc.college_id = p_college_id
      and cs.published = true
    on conflict do nothing;
  else
    insert into public.enrollments (user_id, course_id)
    select p_user_id, cs.course_id
    from public.course_settings cs
    where cs.published = true
    on conflict do nothing;
  end if;
end;
$$;

grant execute on function public.enroll_student_for_college(uuid, uuid) to authenticated;

-- Apply a college plan to every active student at that college.
-- p_replace: when true, remove enrollments not in the plan first.
create or replace function public.apply_college_plan(p_college_id uuid, p_replace boolean default false)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  n integer := 0;
  sid uuid;
begin
  if not public.is_admin() then
    raise exception 'Admin only';
  end if;

  if p_college_id is null then
    raise exception 'College is required';
  end if;

  for sid in
    select id from public.profiles
    where college_id = p_college_id
      and coalesce(role, 'student') = 'student'
      and coalesce(is_active, true) = true
  loop
    if p_replace then
      delete from public.enrollments where user_id = sid;
    end if;
    perform public.enroll_student_for_college(sid, p_college_id);
    n := n + 1;
  end loop;

  return n;
end;
$$;

grant execute on function public.apply_college_plan(uuid, boolean) to authenticated;

-- Signup: enroll from college plan instead of all published courses.
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
    perform public.enroll_student_for_college(new.id, college_uuid);
  end if;

  return new;
end;
$$;
