-- Auto-confirm emails so students can sign in immediately after registration.
-- GoTrue still may omit a session when "Confirm email" is ON; the app then
-- signs in with the password, which succeeds once email_confirmed_at is set.

create or replace function public.handle_auto_confirm()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.email_confirmed_at := coalesce(new.email_confirmed_at, now());
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_confirm on auth.users;
create trigger on_auth_user_created_confirm
  before insert on auth.users
  for each row
  execute function public.handle_auto_confirm();

update auth.users
set
  email_confirmed_at = coalesce(email_confirmed_at, now()),
  updated_at = now()
where email_confirmed_at is null;
