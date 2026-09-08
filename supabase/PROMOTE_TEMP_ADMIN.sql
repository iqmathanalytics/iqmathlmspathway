-- Create / promote admin accounts.
-- Run ALL of this in SQL Editor, then sign in at /admin/login
--
-- Email:    Iqmathanalytics@gmail.com
-- Password: admin@1234

create extension if not exists pgcrypto;

create or replace function public.profiles_guard_privileged_columns()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
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

alter table public.profiles disable trigger profiles_guard_privileged_columns;

do $$
declare
  rec record;
  uid uuid;
  instance uuid;
begin
  select id into instance from auth.instances limit 1;
  if instance is null then
    instance := '00000000-0000-0000-0000-000000000000';
  end if;

  for rec in
    select *
    from (
      values
        ('iqmathanalytics@gmail.com'::text, 'admin@1234'::text, 'IQ Math Analytics'::text)
    ) as t(email, pass, full_name)
  loop
    select id into uid from auth.users where lower(email) = rec.email;

    if uid is null then
      uid := gen_random_uuid();

      insert into auth.users (
        instance_id,
        id,
        aud,
        role,
        email,
        encrypted_password,
        email_confirmed_at,
        raw_app_meta_data,
        raw_user_meta_data,
        created_at,
        updated_at,
        confirmation_token,
        email_change,
        email_change_token_new,
        recovery_token
      ) values (
        instance,
        uid,
        'authenticated',
        'authenticated',
        rec.email,
        crypt(rec.pass, gen_salt('bf')),
        now(),
        '{"provider":"email","providers":["email"]}'::jsonb,
        jsonb_build_object('full_name', rec.full_name),
        now(),
        now(),
        '',
        '',
        '',
        ''
      );

      begin
        insert into auth.identities (
          id,
          user_id,
          identity_data,
          provider,
          last_sign_in_at,
          created_at,
          updated_at,
          provider_id
        ) values (
          gen_random_uuid(),
          uid,
          jsonb_build_object('sub', uid::text, 'email', rec.email),
          'email',
          now(),
          now(),
          now(),
          uid::text
        );
      exception when others then
        begin
          insert into auth.identities (
            id,
            user_id,
            identity_data,
            provider,
            last_sign_in_at,
            created_at,
            updated_at
          ) values (
            uid::text,
            uid,
            jsonb_build_object('sub', uid::text, 'email', rec.email),
            'email',
            now(),
            now(),
            now()
          );
        exception when others then
          raise notice 'Could not insert auth.identities for %: %', rec.email, sqlerrm;
        end;
      end;
    else
      update auth.users
      set
        encrypted_password = crypt(rec.pass, gen_salt('bf')),
        email_confirmed_at = coalesce(email_confirmed_at, now()),
        updated_at = now()
      where id = uid;
    end if;

    insert into public.profiles (id, full_name, email, mobile, department, role, is_active)
    values (uid, rec.full_name, rec.email, '9999999999', 'Admin', 'admin', true)
    on conflict (id) do update
      set
        email = excluded.email,
        role = 'admin',
        is_active = true;
  end loop;
end $$;

alter table public.profiles enable trigger profiles_guard_privileged_columns;

-- Confirm: this must show role = admin
select u.email, p.role, p.is_active
from auth.users u
join public.profiles p on p.id = u.id
where lower(u.email) in (
  'iqmathanalytics@gmail.com',
  'jagathishwaranparthiban@gmail.com'
);
