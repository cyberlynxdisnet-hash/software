-- Add the updated South African branch network.
-- Run this in the Supabase SQL Editor after reviewing the branch names.

insert into public.branches
  (id, name, province, country, prophet, phone, address, gps, members, code, status, founded, notes, is_hq)
values
  ('za-branch-01', 'Evaton', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-01', 'Live', '2026', 'South African branch', false),
  ('za-branch-02', 'Orange Farm A', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-02', 'Live', '2026', 'South African branch', false),
  ('za-branch-03', 'Phumla Mqash', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-03', 'Live', '2026', 'South African branch', false),
  ('za-branch-04', 'Orange Farm B', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-04', 'Live', '2026', 'South African branch', false),
  ('za-branch-05', 'Lawley', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-05', 'Live', '2026', 'South African branch', false),
  ('za-branch-06', 'Lakeside', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-06', 'Live', '2026', 'South African branch', false),
  ('za-branch-07', 'Polokong', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-07', 'Live', '2026', 'South African branch', false),
  ('za-branch-08', 'Tshirela', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-08', 'Live', '2026', 'South African branch', false),
  ('za-branch-09', 'Poortjie', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-09', 'Live', '2026', 'South African branch', false),
  ('za-branch-10', 'Bekkersdale', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-10', 'Live', '2026', 'South African branch', false),
  ('za-branch-11', 'Carltenvile', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-11', 'Live', '2026', 'South African branch', false),
  ('za-branch-12', 'Westernarea', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-12', 'Live', '2026', 'South African branch', false),
  ('za-branch-13', 'Cell City', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-13', 'Live', '2026', 'South African branch', false),
  ('za-branch-14', 'Randfontein', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-14', 'Live', '2026', 'South African branch', false),
  ('za-branch-15', 'Oliven', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-15', 'Live', '2026', 'South African branch', false),
  ('za-branch-16', 'Spruit', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-16', 'Live', '2026', 'South African branch', false),
  ('za-branch-17', 'Thembisa', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-17', 'Live', '2026', 'South African branch', false),
  ('za-branch-18', 'Diepsloot', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-18', 'Live', '2026', 'South African branch', false),
  ('za-branch-19', 'Cosmo City', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-19', 'Live', '2026', 'South African branch', false),
  ('za-branch-20', 'Soshanguve', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-20', 'Live', '2026', 'South African branch', false),
  ('za-branch-21', 'Mabopane', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-21', 'Live', '2026', 'South African branch', false),
  ('za-branch-22', 'Brits A', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-22', 'Live', '2026', 'South African branch', false),
  ('za-branch-23', 'Brits B', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-23', 'Live', '2026', 'South African branch', false),
  ('za-branch-24', 'Rustenburg', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-24', 'Live', '2026', 'South African branch', false),
  ('za-branch-25', 'Mpumalanga', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-25', 'Live', '2026', 'South African branch', false),
  ('za-branch-26', 'Mpumalanga Matsuli', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-26', 'Live', '2026', 'South African branch', false),
  ('za-branch-27', 'Eastern Cape', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-27', 'Live', '2026', 'South African branch', false),
  ('za-branch-28', 'Northern Cape', 'South Africa', 'South Africa', 'Unassigned', '', 'South African Branch', '', 0, 'J5-ZA-28', 'Live', '2026', 'South African branch', false)
on conflict (id) do update set
  name = excluded.name,
  province = excluded.province,
  country = excluded.country,
  prophet = excluded.prophet,
  address = excluded.address,
  members = excluded.members,
  code = excluded.code,
  status = excluded.status,
  founded = excluded.founded,
  notes = excluded.notes,
  is_hq = excluded.is_hq;
