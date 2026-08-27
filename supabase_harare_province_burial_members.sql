-- Imported from harare%20province.pdf.
-- The surname for record 4 is preserved as "Simb..." because it was unclear.
-- Missing phone and fee values are intentionally blank.
-- Uses the shared protected Burial Society registry table.

insert into public.burial_society_member_registry
  (id, source_number, full_name, phone, amount_paid, linked, linked_member_id, linked_auth_user_id, source)
values
  ('harare-burial-001', 1, 'Tendai Mapanzure', '0713134184', '12.00', false, null, null, 'harare_province_burial_members_extracted.txt'),
  ('harare-burial-002', 2, 'Chipo Herema', '0719409636', '12.00', false, null, null, 'harare_province_burial_members_extracted.txt'),
  ('harare-burial-003', 3, 'Sarah Chimunhu', '0718807745', '6.00', false, null, null, 'harare_province_burial_members_extracted.txt'),
  ('harare-burial-004', 4, 'Curudzai Simb...', '0716340512', '6.00', false, null, null, 'harare_province_burial_members_extracted.txt'),
  ('harare-burial-005', 5, 'Barbara Katura', '0717756781', '6.00', false, null, null, 'harare_province_burial_members_extracted.txt'),
  ('harare-burial-006', 6, 'Weston Matemba', '', '', false, null, null, 'harare_province_burial_members_extracted.txt')
on conflict (id) do update set
  source_number = excluded.source_number,
  full_name = excluded.full_name,
  phone = excluded.phone,
  amount_paid = excluded.amount_paid,
  source = excluded.source,
  updated_at = now();
