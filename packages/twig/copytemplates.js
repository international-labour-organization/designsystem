// This copies twig templates and yml wingsuit files from where Storybook needs them to a more convenient folder for use in a CMS
const fs = require("fs-extra");
const path = require("path");
const { globSync } = require("glob");
const theme = require("@ilo-org/themes/tokens/theme/base.json");

// Get a list of the component directories in patterns
const componentDirs = globSync("src/patterns/components/*/");

componentDirs.forEach((dir) => {
  // Get the name of the component from the dir
  const componentName = path.basename(dir);

  // Get a list of the twig files inside the dir
  const twigFiles = globSync(`${dir}/**/*.twig`);

  // For each Twig File
  twigFiles.forEach((file) => {
    //Get the name of the Twig file
    const twigFile = path.basename(file);
    fs.readFile(file, "utf8", function (err, filedata) {
      // Substitute the prefix
      const formatted = filedata
        .replace(/{{prefix}}/g, theme.themeprefix.value)
        .replace(/prefix ~/g, `'${theme.themeprefix.value}' ~`);
      // Then write it to the component directory in the dist folder
      fs.ensureDirSync(`dist/components/${componentName}`);
      fs.writeFileSync(
        `dist/components/${componentName}/${twigFile}`,
        formatted,
        "utf8"
      );
    });
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
