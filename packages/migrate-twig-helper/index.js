#!/usr/bin/env node

import { argv } from "process";
import ejs from "ejs";
import { template } from "./templates/story.js";
import { copyComponent, removeFiles, renameFiles } from "./tasks/index.js";

if (argv.length < 3) {
  console.error("Usage: node migrate-twig <component-name>");
  process.exit(1);
}

const componentName = argv[2];
const oldComponentPath = `packages/twig/src/patterns/components/${componentName}`;
const newComponentsDir = `packages/twig-new/components`;
const newComponentPath = `${newComponentsDir}/${componentName}`;
const newStoriesPath = "packages/twig-new/stories";
const oldPatternFile = `${componentName}.wingsuit.yml`;
const newPatternFile = `${componentName}.pattern.yml`;

try {
  // Copy the component to its new home in the new twig project
  const componentCopied = copyComponent(oldComponentPath, newComponentsDir);
  if (componentCopied) {
    console.log(`Copied ${componentName} to new twig components folder.`);
  }

  // Remove the index.js file
  const indexFileRemoved = removeFiles(/index.js/, newComponentPath);
  if (indexFileRemoved > 0) {
    console.log(`Removed index.js from ${newComponentPath}`);
  }

  // Remove the legacy stories file
  const storiesFileRemoved = removeFiles(/stories/, newComponentPath);
  if (storiesFileRemoved > 0) {
    console.log(`Removed stories file from ${newComponentPath}`);
  }

  const renamedFiles = renameFiles(
    newComponentPath,
    oldPatternFile,
    newPatternFile
  );
  if (renamedFiles > 0) {
    console.log(`Renamed ${oldPatternFile} to ${newPatternFile}`);
  }

  const output = ejs.render(template, {
    component: componentName,
    componentTitle:
      componentName.charAt(0).toUpperCase() + componentName.slice(1),
  });
  console.log(output);

  // Create new stories file
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}

console.log("Migration completed successfully.");
