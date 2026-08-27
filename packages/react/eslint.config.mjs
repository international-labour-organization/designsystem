// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import configs from "@ilo-org/eslint-config";

/** @type {import("eslint").Linter.Config} */
const ReactConfigOverrides = {
  ignores: ["**/*.args.ts", "**/*.stories.tsx"],
};

export default [
  ...configs.react,
  ReactConfigOverrides,
  ...storybook.configs["flat/recommended"]
];
