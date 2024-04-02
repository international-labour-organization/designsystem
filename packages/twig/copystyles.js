const fs = require("fs-extra");
const { globSync } = require("glob");

const componentCssFiles = globSync(
  "node_modules/@ilo-org/styles/css/components/*.css"
);

componentCssFiles.forEach((file) => {
  const componentName = file.match(/([^\/]+)\.css$/)[1];
  fs.copySync(file, `dist/components/${componentName}/${componentName}.css`);
});

fs.copySync(
  "node_modules/@ilo-org/styles/css/global.css",
  "dist/global/styles.css"
);
