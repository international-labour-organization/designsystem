#!/usr/bin/env node

import { execSync } from "child_process";
import { existsSync, mkdirSync } from "fs";
import { argv } from "process";

if (argv.length < 3) {
  console.error("Usage: node migrate-twig <component-name>");
  process.exit(1);
}

const componentName = argv[2];
const oldComponentPath = `packages/twig/src/patterns/components/${componentName}`;
const newComponentPath = `packages/twig-new/components/${componentName}`;
const newStoriesPath = "packages/twig-new/stories";

try {
  // Step 1: Copy component folder from old twig to new twig
  if (!existsSync(oldComponentPath)) {
    throw new Error(`Component folder not found: ${oldComponentPath}`);
  }
  if (!existsSync(newComponentPath)) {
    mkdirSync(newComponentPath, { recursive: true });
  }
  execSync(`cp -r ${oldComponentPath} ${newComponentPath}`);
  console.log(`Copied ${componentName} to new twig components folder.`);

  // Step 2: Remove the index.js file
  const indexPath = `${newComponentPath}/index.js`;
  if (existsSync(indexPath)) {
    execSync(`rm ${indexPath}`);
    console.log(`Removed ${indexPath}.`);
  } else {
    console.warn(`index.js not found in ${newComponentPath}.`);
  }

  // Step 3: Rename the old wingsuit.yml file to pattern.yml
  const wingsuitPath = `${newComponentPath}/${componentName}.wingsuit.yml`;
  const patternPath = `${newComponentPath}/${componentName}.pattern.yml`;
  if (existsSync(wingsuitPath)) {
    execSync(`mv ${wingsuitPath} ${patternPath}`);
    console.log(`Renamed ${wingsuitPath} to ${patternPath}.`);
  } else {
    console.warn(`wingsuit.yml not found in ${newComponentPath}.`);
  }

  // Step 4: Move the stories file into the stories folder
  const storiesFilePath = `${newComponentPath}/${componentName}.stories.jsx`;
  if (existsSync(storiesFilePath)) {
    if (!existsSync(newStoriesPath)) {
      mkdirSync(newStoriesPath, { recursive: true });
    }
    execSync(`mv ${storiesFilePath} ${newStoriesPath}`);
    console.log(`Moved ${storiesFilePath} to ${newStoriesPath}.`);
  } else {
    console.warn(`stories.jsx not found in ${newComponentPath}.`);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}

console.log("Migration completed successfully.");
