-- Paste into the Supabase SQL Editor once (local + production).
-- Stops signup from auto-enrolling students in every published course.
-- Students enroll from Programs. Admin "Apply college plan" still works.

-- College/department plan only. No fallback to every published course.
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

  if p_college_id is null or not has_plan then
    return;
  end if;

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
end;
$$;

grant execute on function public.enroll_student_for_college(uuid, uuid) to authenticated;

-- Signup: profile only. Students enroll from the Programs page.
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

  return new;
end;
$$;
