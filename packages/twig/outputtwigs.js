// The build file for Twig package - this copies the twigs from where Storybook needs them to a more convenient folder for use in a CMS
const fs = require("fs");
const path = require("path");
const theme = require("@ilo-org/themes/tokens/theme/base.json");
let buffer = new Buffer.from(`prefix: ${theme.themeprefix.value}`);
const srcpath = `./src/patterns/components`;

const checkFolder = async (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const traverseDirectory = (directory) => {
  let files = fs.readdirSync(directory).filter((file) => {
    return file !== ".DS_Store";
  });
  for (const f in files) {
    const file = files[f];
    const absolute = path.join(directory, file);
    const ext = path.extname(file).toLowerCase();
    if (fs.statSync(absolute).isDirectory()) {
      traverseDirectory(absolute);
    } else {
      if (ext === ".twig" || (ext === ".js" && file !== "index.js")) {
        filepath = directory
          .replace(`src/`, `dist/`)
          .replace("patterns/", "")
          .replace(`/${file}`, "");
        checkFolder(filepath);
        fs.readFile(absolute, "utf8", function (err, filedata) {
          let formatted = filedata.replace(/{{prefix}}/g, buffer);
          fs.writeFile(
            `${path
              .dirname(absolute)
              .replace(`src/`, `dist/`)
              .replace("patterns/", "")}/${file}`,
            formatted,
            "utf8",
            function (err) {
              if (err) return console.log(".writeFile", err);
            }
          );
          if (err) return console.log("readFile", err);
        });
      }
    }
  }
};

const processTwigs = async () => {
  await checkFolder(`./dist/`);
  await checkFolder(`./dist/components/`);
  traverseDirectory(srcpath);
};

processTwigs();
