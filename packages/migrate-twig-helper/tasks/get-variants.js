import fs from "fs";
import { parse } from "yaml";

/**
 *
 * @param {string} path of the pattern.yml file
 * @returns {string} title of the story
 */
export function getVariants(path) {
  const pattern = fs.readFileSync(path, "utf8");
  const parsedPattern = parse(pattern);
  const componentName = Object.keys(parsedPattern)[0];
  const { variants } = parsedPattern[componentName];
  return variants;
}
