#!/usr/bin/env node

import { execSync } from "child_process";
import { existsSync, mkdirSync, readdirSync, unlinkSync } from "fs";
import { argv } from "process";

if (argv.length < 3) {
  console.error("Usage: node migrate-twig <component-name>");
  process.exit(1);
}

const componentName = argv[2];
const oldComponentPath = `packages/twig/src/patterns/components/${componentName}`;
const newComponentsPath = `packages/twig-new/components`;
const newComponentPath = `${newComponentsPath}/${componentName}`;
const newStoriesPath = "packages/twig-new/stories";

try {
  // Copy component folder from old twig to new twig
  if (!existsSync(oldComponentPath)) {
    throw new Error(`Component folder not found: ${oldComponentPath}`);
  }

  execSync(`cp -r ${oldComponentPath} ${newComponentsPath}`);
  console.log(`Copied ${componentName} to new twig components folder.`);

  // Remove the index.js file
  const indexPath = `${newComponentPath}/index.js`;
  if (existsSync(indexPath)) {
    execSync(`rm ${indexPath}`);
    console.log(`Removed ${indexPath}`);
  } else {
    console.warn(`index.js not found in ${newComponentPath}`);
  }

  // Remove the stories.js file
  const storiesFiles = /stories/;
  const storiesRemoved = readdirSync(newComponentPath)
    .filter((file) => storiesFiles.test(file))
    .map((file) => unlinkSync(`${newComponentPath}/${file}`));
  if (storiesRemoved.length > 0) {
    console.log(`Removed legacy stories file in ${newComponentPath}`);
  } else {
    console.log(`No legacy stories files found in ${newComponentPath}`);
  }

  // Rename the old wingsuit.yml file to pattern.yml
  const wingsuitPath = `${newComponentPath}/${componentName}.wingsuit.yml`;
  const patternPath = `${newComponentPath}/${componentName}.pattern.yml`;
  if (existsSync(wingsuitPath)) {
    execSync(`mv ${wingsuitPath} ${patternPath}`);
    console.log(`Renamed ${wingsuitPath} to ${patternPath}.`);
  } else {
    console.warn(`wingsuit.yml not found in ${newComponentPath}.`);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}

console.log("Migration completed successfully.");
