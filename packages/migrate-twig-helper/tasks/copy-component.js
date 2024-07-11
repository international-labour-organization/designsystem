import { execSync } from "child_process";
import { existsSync } from "fs";

/**
 *
 * @param {string} oldComponentPath
 * @param {string} newComponentsPath
 * @returns
 */
export function copyComponent(oldComponentPath, newComponentsPath) {
  if (!existsSync(oldComponentPath)) {
    throw new Error(`Component folder not found: ${oldComponentPath}`);
  }
  execSync(`cp -r ${oldComponentPath} ${newComponentsPath}`);
  return true;
}
