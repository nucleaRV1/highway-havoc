// Copies the game files into www/, the folder Capacitor bundles into the iOS app.
// The web version on GitHub Pages is served straight from the repo root.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const out = path.join(root, 'www');
const FILES = ['index.html', 'privacy.html'];
const DIRS = ['fonts', 'icons'];

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
for (const f of FILES) fs.copyFileSync(path.join(root, f), path.join(out, f));
for (const d of DIRS) fs.cpSync(path.join(root, d), path.join(out, d), { recursive: true });
console.log('Built www/');
