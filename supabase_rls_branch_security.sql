-- Cyberlyx J5 branch security
-- Review the assumed column names below against your Supabase schema before running.
-- This migration assumes:
--   branches.id, branches.prophet
--   members.auth_user_id, members.branch_id
--   events.branch_id (nullable for all-branch events; added below if missing)
--   portal_feedback.submitted_by, portal_feedback.branch, status, admin_reply
--   positions.assigned_to
--
-- Do not put service-role keys in the browser. Run this in Supabase SQL Editor.

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

create or replace function public.cyberlyx_identity_name()
returns text
language sql
stable
as $$
  select lower(coalesce(
    auth.jwt() -> 'user_metadata' ->> 'full_name',
    auth.jwt() -> 'user_metadata' ->> 'name',
    auth.jwt() ->> 'email',
    ''
  ));
$$;

create or replace function public.cyberlyx_branch_id()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select b.id::text
  from public.branches b
  where lower(coalesce(b.prophet, '')) = public.cyberlyx_identity_name()
  limit 1;
$$;

create or replace function public.cyberlyx_branch_name()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select b.name
  from public.branches b
  where b.id::text = public.cyberlyx_branch_id()
  limit 1;
$$;

create or replace function public.cyberlyx_is_member()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.members m where m.auth_user_id = auth.uid()
  );
$$;

alter table public.events add column if not exists branch_id text;
alter table public.portal_feedback add column if not exists status text not null default 'New';
alter table public.portal_feedback add column if not exists admin_reply text not null default '';

alter table public.branches enable row level security;
alter table public.members enable row level security;
alter table public.events enable row level security;
alter table public.portal_feedback enable row level security;
alter table public.positions enable row level security;
alter table public.activity_logs enable row level security;
alter table public.media_tasks enable row level security;
alter table public.media_assets enable row level security;
alter table public.event_rsvps enable row level security;
alter table public.media_assets add column if not exists is_public boolean not null default false;

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
alter table public.pledges enable row level security;
alter table public.pledges add column if not exists owner_key text not null default '';

create table if not exists public.projects (
  id text primary key,
  name text not null,
  owner text not null default '',
  status text not null default 'Planned',
  detail text not null default '',
  progress integer not null default 0 check (progress between 0 and 100),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.projects enable row level security;
insert into public.projects (id, name, owner, status, detail, progress) values
  ('project-1', 'Member Portal Stability', 'Software CIOS', 'In progress', 'Member login, profile uploads, and portal reliability', 82),
  ('project-2', 'Branch Network Sync', 'Branch Operations', 'Live', 'Branch nodes connected to MVUMA HQ', 100),
  ('project-3', 'Media Distribution Hub', 'Media Team', 'In progress', 'Facebook, YouTube, Instagram, and website publishing', 68),
  ('project-4', 'Prophet Seat Command', 'Archbishop Makururu', 'Protected', 'Pulpit live controls and sanctum access', 91)
on conflict (id) do nothing;

-- Branches: members may read the directory; prophets see only their assigned branch.
drop policy if exists "branches_read_authenticated" on public.branches;
create policy "branches_read_authenticated" on public.branches
  for select to authenticated using (
    public.is_cyberlyx_admin()
    or public.cyberlyx_is_member()
    or id::text = public.cyberlyx_branch_id()
  );
drop policy if exists "branches_admin_write" on public.branches;
create policy "branches_admin_write" on public.branches
  for all to authenticated using (public.is_cyberlyx_admin()) with check (public.is_cyberlyx_admin());

-- Members: members see themselves, prophets see their assigned branch, admins see all.
drop policy if exists "members_read_scoped" on public.members;
create policy "members_read_scoped" on public.members
  for select to authenticated using (
    public.is_cyberlyx_admin()
    or auth.uid() = auth_user_id
    or branch_id::text = public.cyberlyx_branch_id()
  );
drop policy if exists "members_admin_write" on public.members;
create policy "members_admin_write" on public.members
  for all to authenticated using (public.is_cyberlyx_admin()) with check (public.is_cyberlyx_admin());
drop policy if exists "members_self_update" on public.members;
create policy "members_self_update" on public.members
  for update to authenticated using (auth.uid() = auth_user_id) with check (auth.uid() = auth_user_id);

-- Events: null branch_id means all branches; prophets see only their branch or global events.
drop policy if exists "events_read_scoped" on public.events;
create policy "events_read_scoped" on public.events
  for select to authenticated using (
    public.is_cyberlyx_admin()
    or branch_id is null
    or branch_id::text = public.cyberlyx_branch_id()
  );
drop policy if exists "events_admin_write" on public.events;
create policy "events_admin_write" on public.events
  for all to authenticated using (public.is_cyberlyx_admin()) with check (public.is_cyberlyx_admin());

-- Reports: admins manage all; prophets submit and read only their own branch reports.
drop policy if exists "feedback_read_scoped" on public.portal_feedback;
create policy "feedback_read_scoped" on public.portal_feedback
  for select to authenticated using (
    public.is_cyberlyx_admin()
    or (branch = public.cyberlyx_branch_name() and lower(submitted_by) = public.cyberlyx_identity_name())
  );
drop policy if exists "feedback_prophet_insert" on public.portal_feedback;
create policy "feedback_prophet_insert" on public.portal_feedback
  for insert to authenticated with check (
    not public.is_cyberlyx_admin()
    and branch = public.cyberlyx_branch_name()
    and lower(submitted_by) = public.cyberlyx_identity_name()
  );
drop policy if exists "feedback_admin_update" on public.portal_feedback;
create policy "feedback_admin_update" on public.portal_feedback
  for update to authenticated using (public.is_cyberlyx_admin()) with check (public.is_cyberlyx_admin());

-- Positions and operational data are admin-controlled.
drop policy if exists "positions_read_authenticated" on public.positions;
create policy "positions_read_authenticated" on public.positions
  for select to authenticated using (true);
drop policy if exists "positions_admin_write" on public.positions;
create policy "positions_admin_write" on public.positions
  for all to authenticated using (public.is_cyberlyx_admin()) with check (public.is_cyberlyx_admin());

drop policy if exists "activity_admin_read" on public.activity_logs;
create policy "activity_admin_read" on public.activity_logs
  for select to authenticated using (public.is_cyberlyx_admin());
drop policy if exists "activity_authenticated_insert" on public.activity_logs;
create policy "activity_authenticated_insert" on public.activity_logs
  for insert to authenticated with check (true);

drop policy if exists "media_admin_only" on public.media_tasks;
create policy "media_admin_only" on public.media_tasks
  for all to authenticated using (public.is_cyberlyx_admin()) with check (public.is_cyberlyx_admin());
drop policy if exists "assets_admin_only" on public.media_assets;
create policy "assets_admin_only" on public.media_assets
  for all to authenticated using (public.is_cyberlyx_admin()) with check (public.is_cyberlyx_admin());
drop policy if exists "assets_public_gallery_read" on public.media_assets;
create policy "assets_public_gallery_read" on public.media_assets
  for select to anon, authenticated using (is_public = true and asset_type = 'IMG');

drop policy if exists "projects_admin_only" on public.projects;
create policy "projects_admin_only" on public.projects
  for all to authenticated using (public.is_cyberlyx_admin()) with check (public.is_cyberlyx_admin());

drop policy if exists "pledges_read_own_or_admin" on public.pledges;
create policy "pledges_read_own_or_admin" on public.pledges
  for select to authenticated using (public.is_cyberlyx_admin() or auth_user_id = auth.uid());
drop policy if exists "pledges_insert_authenticated" on public.pledges;
create policy "pledges_insert_authenticated" on public.pledges
  for insert to authenticated with check (public.is_cyberlyx_admin() or auth_user_id = auth.uid());
drop policy if exists "pledges_update_own_or_admin" on public.pledges;
create policy "pledges_update_own_or_admin" on public.pledges
  for update to authenticated using (public.is_cyberlyx_admin() or auth_user_id = auth.uid()) with check (public.is_cyberlyx_admin() or auth_user_id = auth.uid());

-- RSVPs: each signed-in user can manage only their own RSVP; admins can manage all.
drop policy if exists "rsvps_read_own" on public.event_rsvps;
create policy "rsvps_read_own" on public.event_rsvps
  for select to authenticated using (public.is_cyberlyx_admin() or user_id = auth.uid());
drop policy if exists "rsvps_write_own" on public.event_rsvps;
create policy "rsvps_write_own" on public.event_rsvps
  for all to authenticated using (public.is_cyberlyx_admin() or user_id = auth.uid()) with check (public.is_cyberlyx_admin() or user_id = auth.uid());

-- Storage: profile photos are private to the owner; admins can manage all.
-- The storage bucket must already exist as profile-photos.
drop policy if exists "profile_photos_read_scoped" on storage.objects;
create policy "profile_photos_read_scoped" on storage.objects
  for select to authenticated using (
    bucket_id = 'profile-photos'
    and (public.is_cyberlyx_admin() or (storage.foldername(name))[1] = auth.uid()::text)
  );
drop policy if exists "profile_photos_write_owner" on storage.objects;
create policy "profile_photos_write_owner" on storage.objects
  for insert to authenticated with check (
    bucket_id = 'profile-photos'
    and (public.is_cyberlyx_admin() or (storage.foldername(name))[1] = auth.uid()::text)
  );
drop policy if exists "profile_photos_update_owner" on storage.objects;
create policy "profile_photos_update_owner" on storage.objects
  for update to authenticated using (
    bucket_id = 'profile-photos'
    and (public.is_cyberlyx_admin() or (storage.foldername(name))[1] = auth.uid()::text)
  ) with check (
    bucket_id = 'profile-photos'
    and (public.is_cyberlyx_admin() or (storage.foldername(name))[1] = auth.uid()::text)
  );
drop policy if exists "profile_photos_delete_owner" on storage.objects;
create policy "profile_photos_delete_owner" on storage.objects
  for delete to authenticated using (
    bucket_id = 'profile-photos'
    and (public.is_cyberlyx_admin() or (storage.foldername(name))[1] = auth.uid()::text)
  );
