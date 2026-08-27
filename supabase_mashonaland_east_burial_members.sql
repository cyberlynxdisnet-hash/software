-- Imported from Mashonaland_East_Burial_Society.pdf.
-- Unclear names, phone numbers, and amounts are intentionally blank.
-- Uses the shared protected Burial Society registry table.

insert into public.burial_society_member_registry
  (id, source_number, full_name, phone, amount_paid, linked, linked_member_id, linked_auth_user_id, source)
values
  ('masheast-burial-001', 1, 'Taurer Masasa', '0789494250', '1200', false, null, null, 'mashonaland_east_burial_members_extracted.txt'),
  ('masheast-burial-002', 2, 'Eunice', '', '', false, null, null, 'mashonaland_east_burial_members_extracted.txt'),
  ('masheast-burial-003', 3, 'Kareen Sikini', '071523320', '600', false, null, null, 'mashonaland_east_burial_members_extracted.txt'),
  ('masheast-burial-004', 4, 'Nareicho Nyekadz...', '0718830737', '600', false, null, null, 'mashonaland_east_burial_members_extracted.txt'),
  ('masheast-burial-005', 5, 'Shine Nyakuna', '0715368254', '', false, null, null, 'mashonaland_east_burial_members_extracted.txt'),
  ('masheast-burial-006', 6, 'Cliff Chiwoshe', '0784501846', '800', false, null, null, 'mashonaland_east_burial_members_extracted.txt'),
  ('masheast-burial-007', 7, 'Shine Nyakuna', '0715368254', '1200', false, null, null, 'mashonaland_east_burial_members_extracted.txt')
on conflict (id) do update set
  source_number = excluded.source_number,
  full_name = excluded.full_name,
  phone = excluded.phone,
  amount_paid = excluded.amount_paid,
  source = excluded.source,
  updated_at = now();
