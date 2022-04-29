module.exports = {
  /* =============== */
  /* Global Settings */
  /* =============== */
  root: true,
  extends: ["@ilo-org/eslint-config"],
  // Extend the default config and add any specific settings for this project
  ignorePatterns: ["node_modules/", "lib/", "dist/"],
  overrides: [
    /* =================== */
    /* TypeScript Settings */
    /* =================== */
    {
      // Which files the override will apply to relative to the package root
      files: ["**/*.{ts,tsx}"],
      extends: ["@ilo-org/eslint-config/typescript"],
      // The typescript parser options for this package, which will be different
      // from other packages
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
};
