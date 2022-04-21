"use strict";

const { builders, Metadata } = require("@ilo-org/icon-build-helpers");
const path = require("path");

async function build() {
  const metadata = await Metadata.build({
    input: {
      svg: path.resolve(__dirname, "../src/svg"),
      extensions: path.resolve(__dirname, "../"),
    },
    extensions: [
      Metadata.extensions.icons,
      Metadata.extensions.assets,
      Metadata.extensions.deprecated,
      Metadata.extensions.output,
      Metadata.extensions.categories,
      Metadata.extensions.moduleInfo,
    ],
  });

  const output = path.resolve(__dirname, "../");
  await Promise.all([
    builders.svg.run(metadata, { output }),
    builders.vanilla.run(metadata, { output }),
  ]);
}

build().catch((error) => {
  console.log(error);
  process.exit(1);
});
