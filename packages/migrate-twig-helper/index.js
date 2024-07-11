#!/usr/bin/env node

import { argv } from "process";
import ejs from "ejs";
import { template } from "./templates/story.js";
import {
  copyComponent,
  removeFiles,
  renameFiles,
  getPatternProps,
  titleCase,
  createStory,
} from "./tasks/index.js";

if (argv.length < 3) {
  console.error("Usage: node migrate-twig <component-name>");
  process.exit(1);
}

const componentName = argv[2];
const oldComponentPath = `packages/twig/src/patterns/components/${componentName}`;
const oldPatternFile = `${componentName}.wingsuit.yml`;

const newComponentsDir = `packages/twig-new/src/components`;
const newComponentPath = `${newComponentsDir}/${componentName}`;
const newStoriesPath = "packages/twig-new/stories";
const newStoryPath = `${newStoriesPath}/${componentName}.stories.js`;
const newPatternFile = `${componentName}.pattern.yml`;
const newPatternPath = `${newComponentPath}/${newPatternFile}`;

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

  // The name of the React component as we'll import it in the story
  const componentImport = titleCase(componentName);

  // The name of the Pattern as we'll import it into the story
  const patternsImport = componentImport + "Patterns";

  // Relative paths to the Twig component in the project from the story
  const pathToTwig = `../src/components/${componentName}/${componentName}.twig`;
  const pathToPatterns = `../src/components/${componentName}/${newPatternFile}`;

  // Get the props we need from the pattern
  const patternProps = getPatternProps(
    newPatternPath,
    "namespace",
    "label",
    "variants"
  );

  // The props that we needed
  let { namespace, label, variants } = patternProps;

  // Get the variant names
  if (variants) {
    variants = Object.keys(variants);
  } else {
    variants = ["Default"];
  }

  // Title case our variants so they can be stories
  const variantStories = variants.map((variant) => titleCase(variant));

  // Title of the story
  const storyTitle = `${namespace}/${label}`;

  const story = ejs.render(template, {
    componentImport,
    patternsImport,
    pathToPatterns,
    pathToTwig,
    storyTitle,
    variantStories,
  });

  createStory(newStoryPath, story);

  // Create new stories file
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}

console.log("Migration completed successfully.");
