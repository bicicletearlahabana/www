const fs = require('fs');
const path = require('path');
const ufligy = require('uglify-es');

const inputPath = path.resolve(process.cwd(), './src/js/main.js');
const outputPath = path.resolve(process.cwd(), './dist/js/main.js');

const input = fs.readFileSync(inputPath, {encoding: 'utf8'});

fs.writeFileSync(outputPath, ufligy.minify(input).code, {encoding: 'utf8'});