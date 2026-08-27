const fs = require('fs');
const path = require('path');

const inputPath = process.argv[2] || 'bulawayo_province_burial_members_extracted.txt';
const outputPath = process.argv[3] || 'supabase_bulawayo_province_burial_members.sql';
const text = fs.readFileSync(inputPath, 'utf8');
const rows = [];
const occurrences = new Map();

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
  const occurrence = (occurrences.get(sourceNumber) || 0) + 1;
  occurrences.set(sourceNumber, occurrence);
  const suffix = occurrence === 1 ? '' : `-${occurrence}`;
  rows.push({ id: `bulawayo-burial-${String(sourceNumber).padStart(3, '0')}${suffix}`, sourceNumber, name, phone, amount });
}

const values = rows.map(row => `  (${sql(row.id)}, ${row.sourceNumber}, ${sql(row.name)}, ${sql(row.phone)}, ${sql(row.amount)}, false, null, null, ${sql(path.basename(inputPath))})`).join(',\n');
const output = `-- Imported from bulawayo%20province.pdf.\n-- Unclear names, phone numbers, and amounts are preserved as marked or blank.\n-- Duplicate source numbers are retained with suffixed IDs.\n-- Uses the shared protected Burial Society registry table.\n\ninsert into public.burial_society_member_registry\n  (id, source_number, full_name, phone, amount_paid, linked, linked_member_id, linked_auth_user_id, source)\nvalues\n${values}\non conflict (id) do update set\n  source_number = excluded.source_number,\n  full_name = excluded.full_name,\n  phone = excluded.phone,\n  amount_paid = excluded.amount_paid,\n  source = excluded.source,\n  updated_at = now();\n`;
fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Records imported: ${rows.length}`);
console.log(`Duplicate source numbers retained: ${[...occurrences.values()].filter(count => count > 1).length}`);
console.log(`Generated: ${outputPath}`);
