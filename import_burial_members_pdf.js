const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2] || 'masvingo_burial_members_extracted.txt';
const outputPath = process.argv[3] || 'supabase_masvingo_burial_members.sql';
const text = fs.readFileSync(inputPath, 'utf8');
const rows = [];

function clean(value) { return String(value || '').replace(/\s+/g, ' ').trim(); }
function sql(value) { return "'" + String(value || '').replace(/'/g, "''") + "'"; }
function normalizePhone(value) {
  const digits = clean(value).replace(/[^0-9]/g, '');
  return digits.length >= 9 && digits.length <= 11 ? digits : '';
}

for (const line of text.split(/\r?\n/)) {
  const match = clean(line).match(/^(\d+)\s+(.+)$/);
  if (!match) continue;
  const number = Number(match[1]);
  if (number < 1 || number > 380) continue;
  let remainder = clean(match[2]);
  const amountMatch = remainder.match(/\$([0-9]+(?:\.[0-9]{2})?)$/);
  const amount = amountMatch ? amountMatch[1] : '';
  if (amountMatch) remainder = clean(remainder.slice(0, amountMatch.index));
  const phoneMatch = remainder.match(/0\d[\d\s?]{5,}/);
  const phone = normalizePhone(phoneMatch ? phoneMatch[0].replace(/\?/g, '') : '');
  if (phoneMatch) remainder = clean(remainder.slice(0, phoneMatch.index));
  const rawName = remainder.replace(/[—-]+$/g, '').trim();
  const hasUnclearName = /[.?…]|—/.test(rawName);
  const name = hasUnclearName ? '' : rawName;
  rows.push({ id: 'masvingo-burial-' + String(number).padStart(3, '0'), sourceNumber: number, name, phone, amount });
}

const unique = [...new Map(rows.map(row => [row.id, row])).values()];
const values = unique.map(row => `  (${sql(row.id)}, ${row.sourceNumber}, ${sql(row.name)}, ${sql(row.phone)}, ${sql(row.amount)}, false, null, null, ${sql(path.basename(inputPath))})`).join(',\n');
const output = `-- Imported from Masvingo_Burial_Society.pdf.\n-- Unclear names and phone numbers are intentionally blank.\n-- Members can be linked after registration using a verified phone number or name.\n\ncreate table if not exists public.burial_society_member_registry (\n  id text primary key,\n  source_number integer not null,\n  full_name text not null default '',\n  phone text not null default '',\n  amount_paid text not null default '',\n  linked boolean not null default false,\n  linked_member_id text,\n  linked_auth_user_id uuid,\n  source text not null default '',\n  created_at timestamptz not null default now(),\n  updated_at timestamptz not null default now()\n);\n\nalter table public.burial_society_member_registry enable row level security;\ndrop policy if exists "Admins can manage burial registry" on public.burial_society_member_registry;\ncreate policy "Admins can manage burial registry" on public.burial_society_member_registry\n  for all using (public.is_cyberlyx_admin()) with check (public.is_cyberlyx_admin());\n\ninsert into public.burial_society_member_registry\n  (id, source_number, full_name, phone, amount_paid, linked, linked_member_id, linked_auth_user_id, source)\nvalues\n${values}\non conflict (id) do update set\n  source_number = excluded.source_number,\n  full_name = excluded.full_name,\n  phone = excluded.phone,\n  amount_paid = excluded.amount_paid,\n  source = excluded.source,\n  updated_at = now();\n`;
fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Records imported: ${unique.length}`);
console.log(`Records with clear names: ${unique.filter(row => row.name).length}`);
console.log(`Records with usable phones: ${unique.filter(row => row.phone).length}`);
console.log(`Generated: ${outputPath}`);
