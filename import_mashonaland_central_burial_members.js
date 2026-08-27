const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2] || 'mashonaland_central_burial_members_extracted.txt';
const outputPath = process.argv[3] || 'supabase_mashonaland_central_burial_members.sql';
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
  const sourceNumber = Number(match[1]);
  let remainder = clean(match[2]);
  const amountMatch = remainder.match(/\$([0-9,]+(?:\.[0-9]{2})?)$/);
  const amount = amountMatch ? amountMatch[1].replace(/,/g, '') : '';
  if (amountMatch) remainder = clean(remainder.slice(0, amountMatch.index));
  remainder = remainder.replace(/[?]+$/, '').trim();
  const phoneMatch = remainder.match(/0\d[\d\s?]{5,}/);
  const phone = normalizePhone(phoneMatch ? phoneMatch[0].replace(/\?/g, '') : '');
  if (phoneMatch) remainder = clean(remainder.slice(0, phoneMatch.index));
  const name = clean(remainder.replace(/[—–-]+/g, ' '));
  rows.push({ id: 'mashcentral-burial-' + String(sourceNumber).padStart(3, '0'), sourceNumber, name, phone, amount });
}

const unique = [...new Map(rows.map(row => [row.id, row])).values()];
const values = unique.map(row => `  (${sql(row.id)}, ${row.sourceNumber}, ${sql(row.name)}, ${sql(row.phone)}, ${sql(row.amount)}, false, null, null, ${sql(path.basename(inputPath))})`).join(',\n');
const output = `-- Imported from Mashonaland_Central_Burial_Society.pdf.\n-- Unclear names, phone numbers, and amounts are intentionally preserved as blank or marked.\n-- Uses the shared protected Burial Society registry table.\n\ninsert into public.burial_society_member_registry\n  (id, source_number, full_name, phone, amount_paid, linked, linked_member_id, linked_auth_user_id, source)\nvalues\n${values}\non conflict (id) do update set\n  source_number = excluded.source_number,\n  full_name = excluded.full_name,\n  phone = excluded.phone,\n  amount_paid = excluded.amount_paid,\n  source = excluded.source,\n  updated_at = now();\n`;
fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Records imported: ${unique.length}`);
console.log(`Generated: ${outputPath}`);
