-- Public Church Gallery setup
-- Run once in Supabase SQL Editor after media_assets exists.

alter table public.media_assets
  add column if not exists is_public boolean not null default false;

alter table public.media_assets enable row level security;

drop policy if exists "assets_public_gallery_read" on public.media_assets;
create policy "assets_public_gallery_read" on public.media_assets
  for select to anon, authenticated
  using (is_public = true and asset_type = 'IMG');

-- Existing media remains private until an administrator approves it.
-- Approve selected existing images by name, for example:
-- update public.media_assets set is_public = true
-- where name in ('Sunday Prophecy Thumbnail', 'MVUMA HQ Drone');
