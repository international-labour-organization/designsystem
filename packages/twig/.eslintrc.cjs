module.exports = {
  root: true,
  extends: ["@ilo-org/eslint-config"],
  globals: {
    Drupal: true,
    cy: true,
  },
  ignorePatterns: ["dist/"],
};
