// Take the PWA's index.html and split it into parts ready for metadata injection on the server-side

const fs = require('fs');
const inspect = require('util').inspect;
const process = require('process');
const serialize = require('serialize-javascript');

const INDEX_FILENAME = 'pwa/docs/index.html';
const OUTPUT_SCRIPT = 'functions/src/template.ts';

const originaData = fs.readFileSync(INDEX_FILENAME).toString();

const parts = originaData.split(/<replace-meta-(?:start|end)><\/replace-meta-(?:start|end)>/);
// console.log(inspect(parts));
if (parts.length !== 3) {
    console.error("Input file has invalid placeholders");
    process.exit(1);
}

const header = parts[0];
const body = parts[2];

const content = `// AUTO-GENERATED - Do not edit

export const pageHeader = ${serialize(header, { unsafe: true })};

export const pageBody = ${serialize(body, { unsafe: true })};
`;

fs.writeFileSync(OUTPUT_SCRIPT, content);
console.log(`Output to: ${OUTPUT_SCRIPT}`);
console.log('Done');
