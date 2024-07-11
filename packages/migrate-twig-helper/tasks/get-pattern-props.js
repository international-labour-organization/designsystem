import fs from "fs";
import { parse } from "yaml";

/**
 *
 * @param {string} path to the pattern
 * @param  {...any} props to extract from the pattern
 * @returns
 */
export function getPatternProps(path, ...props) {
  const result = {};
  const pattern = fs.readFileSync(path, "utf8");
  const parsedPattern = parse(pattern);
  const componentName = Object.keys(parsedPattern)[0];
  for (const key of props) {
    result[key] = parsedPattern[componentName][key];
  }
  return result;
}
