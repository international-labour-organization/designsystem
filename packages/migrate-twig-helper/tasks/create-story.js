import fs from "fs";

export function createStory(path, story) {
  fs.writeFileSync(path, story);
}
