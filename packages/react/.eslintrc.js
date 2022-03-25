/**
 * Package-level eslint config extends the project-level configs
 * and applies customizations relative to the local project. In this
 * example we have to lint js and ts files, so we combine two configs
 * and set the TypeScript one as an override
 */
module.exports = {
  /* =============== */
  /* Global Settings */
  /* =============== */
  root: true,
  // Extend the project config and add any specific to this project
  extends: [
    "plugin:storybook/recommended",
    "../../config/eslint-config-ilo/base.js",
  ],
  // This will vary from package to package
  ignorePatterns: [
    "storybook-static/",
    "node_modules/",
    "lib/",
    "src/stories/",
  ],
  /* =================== */
  /* TypeScript Settings */
  /* =================== */
  overrides: [
    {
      // Which files the override will apply to. This has tobe be set here,
      // it can't be set at the config level
      files: ["**/*.{ts,tsx}"],
      extends: ["../../config/eslint-config-ilo/ts.js"],
      // Assuming tsconfig's may vary from package to package, we have to set
      // this here as well
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
};
