-- Students can enroll themselves in admin-published courses.
-- Admins still insert/delete enrollments (college assign, student editor).
-- Safe to re-run. Paste into Supabase SQL Editor as RUN_STUDENT_ENROLL.sql.

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
