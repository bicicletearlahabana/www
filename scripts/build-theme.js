const fs = require("fs");
const postcss = require("postcss");
const atImport = require("postcss-import");
const path = require('path');
const nano = require('cssnano');

const inputPath = path.resolve(process.cwd(), './src/theme/main.css');
const outputPath = path.resolve(process.cwd(), './dist/theme/main.css');

// css to be processed
const css = fs.readFileSync(inputPath, "utf8");

// process css
postcss()
  .use(atImport())
  .use(nano())
  .process(css, {
    from: inputPath
  })
  .then(({css}) => fs.writeFileSync(outputPath, css, {encoding: 'utf8'}));