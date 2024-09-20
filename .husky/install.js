/**
 * This optionally loads husky except in CI environments
 * like Github Actions where the lint-staged pre-commit hook
 * seems to break. CI is always set to true in Github Actions
 * so there's no need to set it manually.
 */

if (process.env.CI === "true") {
  process.stdout.write("CI detected, skipping husky install \n");
  process.exit(0);
}

const husky = await import("husky");
process.stdout.write("husky - Installing Git hooks \n");

husky.default.install();
