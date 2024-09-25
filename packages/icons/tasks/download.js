/**
 * Copyright IBM Corp. 2018, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

const { svgExporter } = require("@un/figma-connect");

async function build() {
  /*rimraf.sync('./src');
  await fs.promises.mkdir('./src');*/
  svgExporter();
}

build().catch((error) => {
  console.error(error);
  process.exit(1);
});
