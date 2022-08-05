/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require("fs-extra");
const path = require("path");
const svgToMiniDataURI = require("mini-svg-data-uri");

async function builder(metadata, { output }) {
  const SVG_OUTPUT_DIR = path.join(output, "build/scss");

  await fs.emptyDir(SVG_OUTPUT_DIR);

  let fileoutput = `$icons: (\n`;

  for (const icon of metadata.icons) {
    for (const asset of icon.assets) {
      let currenticon = `"${asset.filepath.slice(0, -4)}": "${svgToMiniDataURI(
        asset.optimized.data
      )}",\n`;
      const regex = /(stroke=')(none'|currentColor')/gm;
      currenticon = currenticon.replace(regex, ``);
      const regex2 = /(fill=')(none')/gm;
      currenticon = currenticon.replace(regex2, ``);
      fileoutput += currenticon;
    }
  }

  fileoutput.slice(0, -1);
  fileoutput += `);`;

  const filepath = path.join(SVG_OUTPUT_DIR, `icons.scss`);
  await fs.ensureFile(filepath);
  await fs.writeFile(filepath, fileoutput, "utf8");
}

module.exports = builder;
