import configs from "@ilo-org/eslint-config";

/** @type {import("eslint").Linter.Config} */
const IconBuildHelpersConfig = {
  rules: {
    "no-await-in-loop": "off", // This package needs refactoring to remove this rule
    "no-console": "off",
  },
};

export default [
  ...configs.js,
  IconBuildHelpersConfig,
  { ignores: ["**/__tests__/"] },
];
