#!/usr/bin/env node

// Sync version from package.json to src/solar.ts
const fs = require('fs');
const pkg = require('../package.json');

const srcPath = 'src/solar.ts';
let src = fs.readFileSync(srcPath, 'utf8');

// Replace VERSION constant
src = src.replace(/const VERSION = '[^']+';/, `const VERSION = '${pkg.version}';`);

// Replace @version in JSDoc
src = src.replace(/@version [^\n]+/, `@version ${pkg.version}`);

fs.writeFileSync(srcPath, src);
console.log(`✅ Synced version to ${pkg.version} in src/solar.ts`);

