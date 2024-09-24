/** @type {import("eslint").Linter.Config} */
const IgnoreConfig = {
  ignores: [
    "**/*.config.{js,mjs,ts}",
    "**/*.setup.{js,mjs,ts}",
    "lib/",
    "dist/",
    "build/",
    ".storybook/",
    "storybook-static/",
  ],
};

export { IgnoreConfig };
