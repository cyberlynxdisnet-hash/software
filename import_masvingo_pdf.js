const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const inputPath = process.argv[2] || 'C:\\Users\\ADMIN\\Downloads\\MASVINGO.pdf';
const outputPath = process.argv[3] || path.join(__dirname, 'supabase_masvingo_branch_contacts.sql');
const knownBranches = [
  'MASVINGO C', 'MANYAMA', 'MASVINGO B', 'MASVINGO A', 'BHUKA', 'STEVEN', 'SESE', 'RHODENE', 'MASHAVA A', 'ZIMUTO', 'ZIMUTO CYDIN', 'ZIMUTO MAHOTO', 'NEMAMWA', 'MADAMOMBE', 'MASHAVA SUPA', 'MASHAVA B', 'CHIKARUDZO', 'CHARUMBIRA', 'DETOYI', 'MAWERE', 'JERERA A', 'CHIPFUTI', 'NEMATAVANDA', '4 MILES', 'JERERA B', 'NDANGA', 'CHINORUMBA', 'CHIVAMBA', 'MUSARAVA', 'GUMBO', 'COTTCO', 'JUDEA', 'RUGARE', 'NYABOKWE', 'VEZA', 'SKUTA', 'FILABUSI', 'YORKO', 'MBERENGWA OFFICE', 'NKANKEZI', 'VANGUARD', 'BVUTE', 'NETAR', 'MBALABALA', 'BMINE', 'PHONEX', 'MAUNGWA', 'CHATSWORTHS', 'GUTU CENTER', 'MUCHECHETE', 'ZVAVAHERA', 'MUSHAYAVANHU', 'GONYE', 'HUNDUZA', 'CHISHECHE', 'BHASERA', 'TACHI', 'GUTU B', 'NERUPIRI', 'CHITSA', 'MUSHWAYI', 'CHAGWIZA', 'MUGONI', 'MUTEMA', 'MATIZHA', 'NGUNDU', 'RUTENGA', 'LUNDI', 'MARANDA TURN', 'ZIVUKU', 'SHONGAMITI', 'RENCO MINE', 'RUPIKE', 'MARANDA DINHE', 'GORORO', 'MUSEBA', 'MARINGIRE', 'MUSVOVI', 'NESHURO', 'ZVISHAVANE CHIGOMBA', '4 MILES', 'VUGWI', 'SIBOZA', 'CHITOWA', 'MAGLASS', 'CHIREDZI LYONAIS', 'TRIANGLE A', 'CHISASE', 'MKWASINE B', 'TRIANGLE B', 'SAMBA RANCH', 'MASHOKO', 'MASEKESA', 'MKWASINE A', 'RENCO TURN', 'GUTSARUZHINJI', 'NYANGAMBE', 'VHENEKA B', 'VHENEKA C', 'VHENEKA A', 'NYIKA', 'MUPAMAONDE', 'SILVEIRA', 'PAMUSHANA', 'MAKUVAZA', 'JENETI', 'CHIREMWAREMWA', 'NJARAVANI', 'PADARE', 'CHIVI CENTER', 'CHIBI TURN', 'MHANDAMABWE', 'TAKAVARASHA', 'DAVIRA'
];

function clean(value) { return String(value ?? '').replace(/\s+/g, ' ').trim(); }
function sql(value) { return "'" + String(value ?? '').replace(/'/g, "''") + "'"; }
function phone(value) { return clean(value).replace(/[^0-9/]/g, ''); }
function key(value) { return clean(value).toUpperCase().replace(/\s+/g, ' '); }

(async () => {
  const parser = new PDFParse({ data: fs.readFileSync(inputPath) });
  const result = await parser.getText();
  await parser.destroy();
  const text = result.text.replace(/\r/g, ' ');
  const normalizedBranches = new Map(knownBranches.map(name => [key(name), name]));
  const branchIndexes = [];
  for (const [normalized, name] of normalizedBranches) {
    const escaped = normalized.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const matcher = new RegExp('(?:^|[\\s\\n])(' + escaped + ')(?=\\s+(?:Treasurer|Secretary)|\\s*$)', 'gi');
    let match;
    while ((match = matcher.exec(text))) branchIndexes.push({ index: match.index + match[0].length - match[1].length, name });
  }
  branchIndexes.sort((left, right) => left.index - right.index);
  const uniqueBranchIndexes = branchIndexes.filter((item, index) => index === 0 || item.index !== branchIndexes[index - 1].index);
  const contacts = [];

  for (let position = 0; position < uniqueBranchIndexes.length; position++) {
    const current = uniqueBranchIndexes[position];
    const end = uniqueBranchIndexes[position + 1]?.index ?? text.length;
    const segment = text.slice(current.index + current.name.length, end).replace(/\s+/g, ' ').trim();
    const roleMatcher = /(Treasurer|Secretary)\s*([\s\S]*?)(?=Treasurer|Secretary|$)/gi;
    let roleMatch;
    while ((roleMatch = roleMatcher.exec(segment))) {
      let remainder = clean(roleMatch[2]);
      let contactPhone = phone(remainder.match(/0\d[\d\s/]{6,}/)?.[0] || '');
      let contactName = clean(remainder.replace(/0\d[\d\s/]{6,}/, ''));
      if (contactName || contactPhone) contacts.push({ branch: current.name, role: roleMatch[1][0].toUpperCase() + roleMatch[1].slice(1).toLowerCase(), name: contactName, phone: contactPhone });
    }
  }

  const values = contacts.map((contact, index) => `  ('masvingo-contact-${String(index + 1).padStart(3, '0')}', (select id from public.branches where upper(name) = ${sql(contact.branch.toUpperCase())} and upper(country) = 'ZIMBABWE' limit 1), ${sql(contact.branch)}, 'MASVINGO', ${sql(contact.role)}, ${sql(contact.name)}, ${sql(contact.phone)}, ${sql(path.basename(inputPath))})`).join(',\n');
  const output = `-- Extracted from ${path.basename(inputPath)}.\n-- These are branch Treasurer and Secretary contacts, not prophet assignments.\n-- Review the schema and run in Supabase SQL Editor.\n\ncreate table if not exists public.branch_contacts (\n  id text primary key,\n  branch_id text,\n  branch_name text not null,\n  province text not null default 'MASVINGO',\n  role text not null,\n  name text not null default '',\n  phone text not null default '',\n  source text not null default ''\n);\n\ninsert into public.branch_contacts\n  (id, branch_id, branch_name, province, role, name, phone, source)\nvalues\n${values}\non conflict (id) do update set\n  branch_id = excluded.branch_id,\n  branch_name = excluded.branch_name,\n  province = excluded.province,\n  role = excluded.role,\n  name = excluded.name,\n  phone = excluded.phone,\n  source = excluded.source;\n`;
  fs.writeFileSync(outputPath, output, 'utf8');
  console.log(`Branches matched: ${uniqueBranchIndexes.length}`);
  console.log(`Contacts extracted: ${contacts.length}`);
  console.log(`Generated: ${outputPath}`);
})();
