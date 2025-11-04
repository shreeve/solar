#!/usr/bin/env node

// Sync version from package.json to lib/solar.js
import { readFileSync, writeFileSync } from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const srcPath = 'lib/solar.js';
let src = readFileSync(srcPath, 'utf8');

// Replace VERSION constant
src = src.replace(/const VERSION = '[^']+';/, `const VERSION = '${pkg.version}';`);

// Replace @version in JSDoc
src = src.replace(/@version [^\n]+/, `@version ${pkg.version}`);

writeFileSync(srcPath, src);
console.log(`✅ Synced version to ${pkg.version} in lib/solar.js`);
