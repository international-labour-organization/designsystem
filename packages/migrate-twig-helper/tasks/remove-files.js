import { readdirSync, unlinkSync } from "fs";

/**
 *
 * @param {regex} pattern of files to remove from path
 * @param {string} path of files to remove
 * @returns {number} number of files removed
 */
export function removeFiles(pattern, path) {
  const filesRemoved = readdirSync(path)
    .filter((file) => pattern.test(file))
    .map((file) => unlinkSync(`${path}/${file}`));
  return filesRemoved.length;
}
