module.exports = {
  root: true,
  extends: ["@ilo-org/eslint-config"],
  globals: {
    Drupal: true,
    cy: true,
  },
  // Ignoring rollup.config until eslint update
  ignorePatterns: ["dist/", "rollup.config.js"],
};
