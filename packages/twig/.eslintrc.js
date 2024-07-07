module.exports = {
  root: true,
  extends: ["@ilo-org/eslint-config"],
  globals: {
    Drupal: true,
    jQuery: true,
    _: true,
    BUILD_TARGET: true,
    cy: true,
  },
  ignorePatterns: [
    "dist/",
    "pattern-lab/",
    "vendor/",
    "tools/test/vrt/backstop_data",
    "preview.js-generated-config-entry.js",
    "storybook-init-framework-entry.js",
    "tools/new-component/templates",
    "storybook-static/",
    "node_modules/",
    "lib/",
    "src/stories/",
    "src/__tests__",
    "src/components/**/*.args.ts",
  ],
};
