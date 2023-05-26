const baseConfig = require("./config/eslint-config");
const tsConfig = require("./config/eslint-config/typescript");

module.exports = {
  /* =============== */
  /* Global Settings */
  /* =============== */
  root: true,
  extends: [baseConfig],
  // Extend the default config and add any specific settings for this project
  ignorePatterns: ["node_modules/", "lib/", "dist/"],
  overrides: [
    /* =================== */
    /* TypeScript Settings */
    /* =================== */
    {
      // Which files the override will apply to relative to the package root
      files: ["**/*.{ts,tsx}"],
      extends: [tsConfig],
      // The typescript parser options for this package, which will be different
      // from other packages
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
};
