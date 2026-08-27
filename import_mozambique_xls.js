const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const inputPath = process.argv[2] || 'C:\\Users\\ADMIN\\Downloads\\Mozambique Branches.xls';
const outputPath = process.argv[3] || path.join(__dirname, 'supabase_mozambique_branches.sql');

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function sql(value) {
  return "'" + String(value ?? '').replace(/'/g, "''") + "'";
}

function normalizeProvince(value) {
  return clean(value).replace(/\s+PROVINCE$/i, '');
}

const workbook = XLSX.readFile(inputPath, { cellDates: true });
const sheetName = workbook.SheetNames.includes('April 2026') ? 'April 2026' : workbook.SheetNames[workbook.SheetNames.length - 1];
const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: '' });
const records = [];
let province = '';
let district = '';
const headerRow = rows.findIndex(row => clean(row[0]).toUpperCase() === 'PROVINCE' && clean(row[1]).toUpperCase() === 'DISTRICT');
const dataStart = headerRow >= 0 ? headerRow + 1 : 0;

for (let rowIndex = dataStart; rowIndex < rows.length; rowIndex++) {
  const row = rows[rowIndex];
  const rowProvince = normalizeProvince(row[0]);
  const rowDistrict = clean(row[1]);
  const branch = clean(row[3]);
  if (rowProvince) province = rowProvince;
  if (rowDistrict) district = rowDistrict;
  if (!branch) continue;

  const sequence = records.length + 1;
  records.push({
    id: 'mz-branch-' + String(sequence).padStart(3, '0'),
    name: branch,
    province: province || 'Mozambique',
    country: 'Mozambique',
    prophet: '',
    phone: '',
    address: district ? district + ', Mozambique' : 'Mozambique Branch',
    gps: '',
    members: 0,
    code: 'J5-MZ-' + String(sequence).padStart(3, '0'),
    status: 'Live',
    founded: '2026',
    notes: 'Imported from Mozambique Branches.xls - April 2026',
    is_hq: false
  });
}

const values = records.map(record => `  (${[record.id, record.name, record.province, record.country, record.prophet, record.phone, record.address, record.gps, record.members, record.code, record.status, record.founded, record.notes].map(sql).join(', ')}, false)`).join(',\n');
const output = `-- Generated from ${path.basename(inputPath)}, sheet ${sheetName}. Review before running in Supabase.\n\ninsert into public.branches\n  (id, name, province, country, prophet, phone, address, gps, members, code, status, founded, notes, is_hq)\nvalues\n${values}\non conflict (id) do update set\n  name = excluded.name,\n  province = excluded.province,\n  country = excluded.country,\n  prophet = excluded.prophet,\n  phone = excluded.phone,\n  address = excluded.address,\n  gps = excluded.gps,\n  members = excluded.members,\n  code = excluded.code,\n  status = excluded.status,\n  founded = excluded.founded,\n  notes = excluded.notes,\n  is_hq = excluded.is_hq;\n`;

fs.writeFileSync(outputPath, output, 'utf8');
console.log(`Sheet: ${sheetName}`);
console.log(`Branch records: ${records.length}`);
console.log(`Generated: ${outputPath}`);
