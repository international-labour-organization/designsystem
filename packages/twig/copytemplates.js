// This copies twig templates and yml wingsuit files from where Storybook needs them to a more convenient folder for use in a CMS
const fs = require("fs-extra");
const { globSync } = require("glob");
const theme = require("@ilo-org/themes/tokens/theme/base.json");

const twigFiles = globSync("src/patterns/components/**/*.twig");
twigFiles.forEach((file) => {
  const componentName = file.match(/([^\/]+)\.twig$/)[1];
  fs.readFile(file, "utf8", function (err, filedata) {
    const formatted = filedata.replace(/{{prefix}}/g, theme.themeprefix.value);
    fs.ensureDirSync(`dist/components/${componentName}`);
    fs.writeFileSync(
      `dist/components/${componentName}/${componentName}.twig`,
      formatted,
      "utf8"
    );
  });
});

const wingsuitFiles = globSync("src/patterns/components/**/*.yml");
wingsuitFiles.forEach((file) => {
  const componentName = file.match(/([^\/]+)\.wingsuit.yml$/)[1];
  fs.copySync(
    file,
    `dist/components/${componentName}/${componentName}.wingsuit.yml`
  );
});
