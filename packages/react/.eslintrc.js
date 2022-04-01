/**
 * Package-level eslint config extends the global config and applies
 * customizations relative to the local project. In this example we
 * are lintinting both js and ts files, so we combine two configs
 * and set the TypeScript settings as an override
 */
module.exports = {
  /* =============== */
  /* Global Settings */
  /* =============== */
  root: true,
  extends: ["@ilo/eslint-config"],
  // Extend the default config and add any specific settings for this project
  ignorePatterns: [
    "storybook-static/",
    "node_modules/",
    "lib/",
    "src/stories/",
  ],

  overrides: [
    /* =================== */
    /* TypeScript Settings */
    /* =================== */
    {
      // Which files the override will apply to relative to the package root
      files: ["**/*.{ts,tsx}"],
      extends: ["@ilo/eslint-config/typescript"],
      // The typescript parser options for this package, which will be different
      // from other packages
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
};
