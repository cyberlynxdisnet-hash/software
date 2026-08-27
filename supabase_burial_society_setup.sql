-- Ensure member burial-society registration fields exist.
-- Run this once in the Supabase SQL Editor.

alter table public.members
  add column if not exists burial_society_registered boolean not null default false;

alter table public.members
  add column if not exists burial_society_package text not null default '';
