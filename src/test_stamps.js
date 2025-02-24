const fs = require('fs');

const rawCsvData = fs.readFileSync('./test_stamps.tsv', 'utf8');
const rawLines = rawCsvData.split('\r\n');
rawLines.shift();

const columnNames = rawLines[0].split('\t');
const separatedLines = rawLines.map(line => {
  const values = line.split('\t');

  let lineObj = {};
  for (let x = 0; x < columnNames.length; x++) {
    lineObj[columnNames[x]] = values[x] || 'No';
  }

  return lineObj;
});
console.log(separatedLines);

fs.writeFileSync('./test.txt', JSON.stringify(separatedLines));
