const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const inputPath = process.argv[2] || 'C:\\Users\\ADMIN\\Downloads\\PROPHETS DATA.xls';
const outputPath = process.argv[3] || path.join(__dirname, 'supabase_zimbabwe_prophets.sql');

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function sql(value) {
  return "'" + String(value ?? '').replace(/'/g, "''") + "'";
}

function normalizePhone(value) {
  const text = clean(value);
  return text ? text.replace(/\s+/g, '') : '';
}

function findHeader(rows) {
  return rows.findIndex(row => {
    const values = row.map(value => clean(value).toLowerCase());
    return values.includes('branch') && (values.includes('prophet') || values.includes('name'));
  });
}

function findColumn(header, names) {
  return header.findIndex(value => names.includes(clean(value).toLowerCase()));
}

function makeId(sheetName, rowNumber) {
  return 'zw-' + sheetName.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '-' + rowNumber;
}

const workbook = XLSX.readFile(inputPath, { cellDates: true });
const records = [];
const summary = [];

for (const sheetName of workbook.SheetNames) {
  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1, defval: '' });
  const headerRow = findHeader(rows);
  if (headerRow < 0) {
    summary.push(`${sheetName}: no branch header found`);
    continue;
  }

  const header = rows[headerRow];
  const branchColumn = findColumn(header, ['branch']);
  const districtColumn = findColumn(header, ['district']);
  const prophetColumn = findColumn(header, ['prophet', 'name']);
  const phoneColumn = findColumn(header, ['phone number', 'cell number']);
  let district = '';
  let added = 0;

  for (let rowIndex = headerRow + 1; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];
    const rowDistrict = districtColumn >= 0 ? clean(row[districtColumn]) : '';
    if (rowDistrict) district = rowDistrict;
    const branch = branchColumn >= 0 ? clean(row[branchColumn]) : '';
    if (!branch) continue;

    records.push({
      id: makeId(sheetName, rowIndex + 1),
      name: branch,
      province: sheetName,
      country: 'Zimbabwe',
      prophet: prophetColumn >= 0 ? clean(row[prophetColumn]) : '',
      phone: phoneColumn >= 0 ? normalizePhone(row[phoneColumn]) : '',
      address: district ? district + ' District, Zimbabwe' : 'Zimbabwe Branch',
      gps: '',
      members: 0,
      code: 'J5-ZW-' + sheetName.slice(0, 3) + '-' + String(added + 1).padStart(3, '0'),
      status: 'Live',
      founded: '2026',
      notes: 'Imported from PROPHETS DATA.xls - ' + sheetName,
      is_hq: false
    });
    added++;
  }
  summary.push(`${sheetName}: ${added} branch records`);
}

const values = records.map(record => `  (${[record.id, record.name, record.province, record.country, record.prophet, record.phone, record.address, record.gps, record.members, record.code, record.status, record.founded, record.notes].map(sql).join(', ')}, false)`).join(',\n');
const output = `-- Generated from ${path.basename(inputPath)}. Review before running in Supabase.\n-- Sheets: ${workbook.SheetNames.join(', ')}\n\ninsert into public.branches\n  (id, name, province, country, prophet, phone, address, gps, members, code, status, founded, notes, is_hq)\nvalues\n${values}\non conflict (id) do update set\n  name = excluded.name,\n  province = excluded.province,\n  country = excluded.country,\n  prophet = excluded.prophet,\n  phone = excluded.phone,\n  address = excluded.address,\n  gps = excluded.gps,\n  members = excluded.members,\n  code = excluded.code,\n  status = excluded.status,\n  founded = excluded.founded,\n  notes = excluded.notes,\n  is_hq = excluded.is_hq;\n`;

fs.writeFileSync(outputPath, output, 'utf8');
console.log(summary.join('\n'));
console.log(`Total branch records: ${records.length}`);
console.log(`Generated: ${outputPath}`);
