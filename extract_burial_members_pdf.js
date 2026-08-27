const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const inputPath = process.argv[2] || 'C:\\Users\\ADMIN\\Downloads\\Masvingo_Burial_Society.pdf';
const outputPath = process.argv[3] || 'masvingo_burial_members_extracted.txt';

(async () => {
  const parser = new PDFParse({ data: fs.readFileSync(inputPath) });
  const result = await parser.getText();
  await parser.destroy();
  fs.writeFileSync(outputPath, result.text, 'utf8');
  console.log(`Pages: ${result.total}`);
  console.log(`Extracted text: ${outputPath}`);
})();
