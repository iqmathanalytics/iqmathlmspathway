-- Paste into Supabase SQL Editor after RUN_COLLEGE_COURSES.sql.
-- Department-level course plans: publish courses by college + department.
-- Enrollment = college-wide courses UNION matching department courses.
-- If a college has no plans at all, falls back to all published courses.

create table if not exists public.college_department_courses (
  college_id uuid not null references public.colleges (id) on delete cascade,
  department text not null,
  course_id text not null,
  assigned_at timestamptz not null default now(),
  primary key (college_id, department, course_id)
);

create index if not exists idx_college_department_courses_dept
  on public.college_department_courses (college_id, lower(department));

alter table public.college_department_courses enable row level security;

drop policy if exists "Public read college department courses" on public.college_department_courses;
create policy "Public read college department courses"
  on public.college_department_courses for select
  using (true);

drop policy if exists "Admins insert college department courses" on public.college_department_courses;
create policy "Admins insert college department courses"
  on public.college_department_courses for insert
  with check (public.is_admin());

drop policy if exists "Admins delete college department courses" on public.college_department_courses;
create policy "Admins delete college department courses"
  on public.college_department_courses for delete
  using (public.is_admin());

-- Enroll from college-wide plan + department plan for this student.
create or replace function public.enroll_student_for_college(p_user_id uuid, p_college_id uuid)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  v_department text := '';
  has_plan boolean := false;
begin
  if p_user_id is null then
    return;
  end if;

  select coalesce(trim(department), '') into v_department
  from public.profiles
  where id = p_user_id;

  if p_college_id is not null then
    has_plan := exists (
      select 1 from public.college_courses where college_id = p_college_id
    ) or exists (
      select 1 from public.college_department_courses where college_id = p_college_id
    );
  end if;

  if p_college_id is not null and has_plan then
    insert into public.enrollments (user_id, course_id)
    select distinct p_user_id, x.course_id
    from (
      select cc.course_id
      from public.college_courses cc
      where cc.college_id = p_college_id
      union
      select cdc.course_id
      from public.college_department_courses cdc
      where cdc.college_id = p_college_id
        and lower(trim(cdc.department)) = lower(trim(v_department))
        and trim(v_department) <> ''
    ) x
    join public.course_settings cs on cs.course_id = x.course_id
    where cs.published = true
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

-- Apply college (+ department) plans to every active student at that college.
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
