-- Paste into the Supabase SQL Editor once.
-- Lets signed-in students enroll in programs the admin has published.
-- Requires enrollments + course_settings from RUN_ADMIN.sql.

drop policy if exists "Users enroll in published courses" on public.enrollments;
create policy "Users enroll in published courses"
  on public.enrollments for insert
  with check (
    auth.uid() = user_id
    and exists (
      select 1
      from public.course_settings cs
      where cs.course_id = enrollments.course_id
        and cs.published = true
    )
  );
