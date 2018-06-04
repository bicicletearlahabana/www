const fs = require('fs');
const path = require('path');

const inputPath = path.resolve(process.cwd(), './src/js/main.js');
const outputPath = path.resolve(process.cwd(), './dist/js/main.js');

fs.copyFileSync(inputPath, outputPath);