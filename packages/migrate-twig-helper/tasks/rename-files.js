import { execSync } from "child_process";
import { readdirSync } from "fs";

export function renameFiles(path, oldName, newName) {
  const oldFiles = readdirSync(path)
    .filter((file) => file.includes(oldName))
    .map((file) => execSync(`mv ${path}/${file} ${path}/${newName}`));
  return oldFiles.length;
}
