const fs = require('fs');

const rawCsvData = fs.readFileSync('./test_stamps.tsv', 'utf8');
const rawLines = rawCsvData.split('\r\n');
rawLines.shift();

const columnNames = rawLines.shift().split('\t');
const separatedLines = rawLines.map(line => {
  const values = line.split('\t');

  let lineObj = {};
  for (let x = 0; x < columnNames.length; x++) {
    lineObj[columnNames[x]] = values[x] || 'No';
  }

  return lineObj;
});

fs.writeFileSync('./test.txt', 'export const data = ' + JSON.stringify(separatedLines) + ';\n\n' + 'export const columnNames = ' + JSON.stringify(columnNames) + ';\n');
