/**
 * This script reads icon data from a YAML file (./icons.yml), generates a markdown table
 * of icons with their names and image paths, and replaces the existing table under the
 * ## Icons section in the README.md file. If the ## Icons section doesn't exist it adds
 * the new table at the end of the README file. The table includes the icon name and a
 * relative path to its corresponding SVG file.
 */

const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

// Path to your YAML file
const yamlFilePath = path.join(__dirname, "./icons.yml");

// Path to your README file
const readmeFilePath = path.join(__dirname, "./README.md");

// Read and parse YAML file
function parseYaml(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return yaml.load(fileContents);
  } catch (e) {
    console.error(`Failed to read or parse YAML file: ${e}`);
    return [];
  }
}

// Generate markdown table from icons data
function generateIconTable(icons) {
  let tableHeader =
    "| Icon Name                  | Image                                       |\n";
  tableHeader +=
    "| -------------------------- | ------------------------------------------- |\n";

  const tableRows = icons.map((icon) => {
    const imagePath = `./src/svg/${icon.name}.svg`; // Assuming icons are named as per the 'name' field
    return `| \`${icon.name}\`| <img src="${imagePath}" width="24px" height="24px"> |`;
  });

  return tableHeader + tableRows.join("\n");
}

// Replace existing icon table in README
function replaceInReadme(tableContent) {
  try {
    let readmeContent = fs.readFileSync(readmeFilePath, "utf8");
    const sectionHeader = "## Icons\n";

    // Define regex to match existing table under the ## Icons section
    const iconSectionRegex = /## Icons\n([\s\S]*?)(?=\n##|$)/;

    if (iconSectionRegex.test(readmeContent)) {
      // If there's already an Icons section, replace it with the new table
      readmeContent = readmeContent.replace(
        iconSectionRegex,
        sectionHeader + tableContent + "\n"
      );
    } else {
      // If there's no Icons section, add it at the end
      readmeContent += "\n" + sectionHeader + tableContent + "\n";
    }

    // Write the updated content back to README.md
    fs.writeFileSync(readmeFilePath, readmeContent, "utf8");
    console.log("README.md updated successfully!");
  } catch (e) {
    console.error(`Failed to read or update README.md: ${e}`);
  }
}

// Main function
function main() {
  const icons = parseYaml(yamlFilePath);
  if (icons.length > 0) {
    const iconTable = generateIconTable(icons);
    replaceInReadme(iconTable);
  } else {
    console.log("No icons to process.");
  }
}

main();
