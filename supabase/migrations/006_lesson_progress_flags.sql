-- Lesson progress flags for quiz attempts and IDE runs.
-- Safe to re-run. Paste into Supabase SQL Editor (or include via RUN_ADMIN.sql).

alter table public.lesson_progress
  add column if not exists quiz_attempted boolean not null default false,
  add column if not exists ide_ran boolean not null default false;

-- Existing non-zero scores mean the quiz was taken.
update public.lesson_progress
set quiz_attempted = true
where quiz_score > 0
  and coalesce(quiz_attempted, false) = false;
