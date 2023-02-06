/**
 * Use AirBnB ES6 linting standards, as well as a Jest plugin for tests
 *
 * Rule reference: http://eslint.org/docs/rules
 * Individual rule reference: http://eslint.org/docs/rules/NAME-OF-RULE
 */
// const wingsuitCore = require("@wingsuit-designsystem/core");
// const wingsuitConfig = require("./wingsuit.config.js");

// const appConfig = wingsuitCore.resolveConfig(
//   "storybook",
//   "development",
//   {},
//   wingsuitConfig,
//   __dirname
// );
// const { namespaces } = appConfig;
// const aliasMap = [];
// Object.keys(namespaces).forEach(key => {
//   aliasMap.push([key, namespaces[key]]);
// });

module.exports = {
  root: true,
  extends: ["@ilo-org/eslint-config"],
  globals: {
    Drupal: true,
    jQuery: true,
    _: true,
    BUILD_TARGET: true,
  },
  // settings: {
  //   "import/resolver": {
  //     alias: {
  //       map: aliasMap,
  //     },
  //   },
  // },
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
