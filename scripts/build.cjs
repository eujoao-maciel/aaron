const fs = require('node:fs');
const path = require('node:path');

// Mantém a seção em pages/ e publica HTML estático, sem fetch no navegador.
const root = path.resolve(__dirname, '..');
const entryPath = path.join(root, 'index.html');
const hero = fs.readFileSync(path.join(root, 'pages/herosection/hero.html'), 'utf8');
const entry = fs.readFileSync(entryPath, 'utf8');
const marker = /(<!-- hero:start[^\n]*-->\n)[\s\S]*?(        <!-- hero:end -->)/;

if (!marker.test(entry)) {
    throw new Error('Os marcadores da hero não foram encontrados no index.html.');
}

const content = hero.trimEnd().split('\n').map(line => `        ${line}`).join('\n');
fs.writeFileSync(entryPath, entry.replace(marker, (_, start, end) => `${start}${content}\n${end}`));
console.log('index.html atualizado com pages/herosection/hero.html.');
