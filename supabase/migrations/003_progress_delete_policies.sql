-- Run in Supabase SQL Editor if progress reset fails from the app (missing delete policies).
-- Safe to re-run: uses IF NOT EXISTS / drop+create for policies.

-- Allow users to delete their own lesson progress (needed for auth-only reset)
drop policy if exists "Users delete own lesson progress" on public.lesson_progress;
create policy "Users delete own lesson progress"
  on public.lesson_progress for delete
  using (auth.uid() = user_id);

-- Allow users to delete their own practice progress
drop policy if exists "Users delete own practice progress" on public.practice_progress;
create policy "Users delete own practice progress"
  on public.practice_progress for delete
  using (auth.uid() = user_id);

-- Optional: wipe ALL progress for every user (admin / one-time cleanup)
-- Uncomment and run only if you want a full platform reset:
-- delete from public.lesson_progress;
-- delete from public.practice_progress;
