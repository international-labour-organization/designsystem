// Copies css files from the styles package to the build output folder (lib)
// Was not possible to do cleanly with rollup since rollup has two outputs and created two copies of the files
const fs = require("fs-extra");
const path = require("path");
const { globSync } = require("glob");

const cssFiles = globSync("node_modules/@ilo-org/styles/css/**/*.css");

cssFiles.forEach((file) => {
  const relativePath = path.relative("node_modules/@ilo-org/styles/css", file);
  fs.copySync(file, path.join("lib/styles", relativePath));
});
