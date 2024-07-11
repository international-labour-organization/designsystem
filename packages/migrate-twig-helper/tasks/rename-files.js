import { execSync } from "child_process";
import { readdirSync } from "fs";

/**
 *
 * @param {string} folder where the files are
 * @param {string} oldName of the file
 * @param {string} newName of the file
 * @returns
 */
export function renameFiles(path, oldName, newName) {
  const oldFiles = readdirSync(path)
    .filter((file) => file.includes(oldName))
    .map((file) => execSync(`mv ${path}/${file} ${path}/${newName}`));
  return oldFiles.length;
}
