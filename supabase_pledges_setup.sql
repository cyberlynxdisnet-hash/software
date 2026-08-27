-- Run this entire file in Supabase SQL Editor.
-- It creates the pledge table before creating its policies.

create table if not exists public.pledges (
  id text primary key,
  auth_user_id uuid references auth.users(id) on delete set null,
  owner_key text not null default '',
  name text not null,
  phone text not null default '',
  email text not null default '',
  branch text not null default 'MVUMA HQ',
  pledge_type text not null default 'Money' check (pledge_type in ('Money', 'Materials')),
  amount text not null default '',
  materials text not null default '',
  notes text not null default '',
  status text not null default 'New' check (status in ('New', 'Confirmed', 'Fulfilled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.pledges add column if not exists owner_key text not null default '';
alter table public.pledges enable row level security;

create or replace function public.is_cyberlyx_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) in (
    'engcliff@j5internationalchurch.org',
    'admin@j5internationalchurch.org'
  );
$$;

drop policy if exists "pledges_read_own_or_admin" on public.pledges;
create policy "pledges_read_own_or_admin" on public.pledges
  for select to authenticated
  using (public.is_cyberlyx_admin() or auth_user_id = auth.uid());

drop policy if exists "pledges_insert_authenticated" on public.pledges;
create policy "pledges_insert_authenticated" on public.pledges
  for insert to authenticated
  with check (public.is_cyberlyx_admin() or auth_user_id = auth.uid());

drop policy if exists "pledges_update_own_or_admin" on public.pledges;
create policy "pledges_update_own_or_admin" on public.pledges
  for update to authenticated
  using (public.is_cyberlyx_admin() or auth_user_id = auth.uid())
  with check (public.is_cyberlyx_admin() or auth_user_id = auth.uid());
