/**
 * This optionally loads husky except in CI environments
 * like Github Actions where the lint-staged pre-commit hook
 * seems to break. CI is always set to true in Github Actions
 * so there's no need to set it manually.
 */
const isCi = process.env.CI !== undefined;
if (!isCi) {
  require("husky").install();
}
