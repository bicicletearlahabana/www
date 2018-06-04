const promisify = require('util').promisify;
const path = require('path');
const fs = require('fs');
const renderFile = promisify(require('pug').renderFile);
const minify = require('html-minifier').minify;

(async function () {
  const inputPath = path.resolve(process.cwd(), './src/view/index.pug');
  const outputPath = path.resolve(process.cwd(), './dist/index.html');

  const html = await renderFile(inputPath, {});
  fs.writeFileSync(outputPath, minify(html), {encoding:'utf8'});
})();