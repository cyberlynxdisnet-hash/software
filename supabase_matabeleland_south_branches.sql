-- Extracted from MAT_SOUTH-1_downloadable.pdf.
-- Review the location hierarchy before running in Supabase.
-- Prophet and branch phone fields were not provided in the PDF.

insert into public.branches
  (id, name, province, country, prophet, phone, address, gps, members, code, status, founded, notes, is_hq)
values
  ('zw-mts-001', 'Blanket mine', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'District Assembly, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-001', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-002', 'Hantinya', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'District Assembly, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-002', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-003', 'Makwe', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'District Assembly, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-003', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-004', 'Gwanda D', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Gwanda, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-004', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-005', 'Gwanda A', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Gwanda, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-005', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-006', 'Gwanda B', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Gwanda, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-006', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-007', 'Gwanda C', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Gwanda, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-007', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-008', 'Sezhuwee', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Gwanda, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-008', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-009', 'Jerusalem', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-009', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-010', 'Mangawa', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-010', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-011', 'Mashawire', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-011', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-012', 'Newlands', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-012', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-013', 'Makhakhaule', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-013', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-014', 'West Nickleson', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-014', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-015', 'Mbembesi', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-015', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-016', 'West Nickleson', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-016', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-017', 'GE Long', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-017', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-018', 'Callen Bawn', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-018', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-019', 'MAKHADHO', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-019', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-020', 'Bubi', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-020', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-021', 'Bubi', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-021', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-022', 'Makhombe', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbridge, Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-022', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-023', 'Chapfuche', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Beitbeleland South, Zimbabwe', '', 0, 'J5-MTS-023', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-024', 'Mawalle', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-024', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-025', 'lithumba', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-025', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false),
  ('zw-mts-026', 'Matshiloni', 'Matebeleland South', 'Zimbabwe', 'Unassigned', '', 'Matebeleland South, Zimbabwe', '', 0, 'J5-MTS-026', 'Live', '2026', 'Imported from MAT_SOUTH-1_downloadable.pdf', false)
on conflict (id) do update set
  name = excluded.name,
  province = excluded.province,
  country = excluded.country,
  prophet = excluded.prophet,
  phone = excluded.phone,
  address = excluded.address,
  gps = excluded.gps,
  members = excluded.members,
  code = excluded.code,
  status = excluded.status,
  founded = excluded.founded,
  notes = excluded.notes,
  is_hq = excluded.is_hq;
