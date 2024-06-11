const namespaces = require("./src/namespaces");

module.exports = {
  presets: [
    // "@wingsuit-designsystem/preset-tailwind", // If you use tailwind
    "@wingsuit-designsystem/preset-scss", // If you use SCSS
    "@wingsuit-designsystem/preset-lint",
    "@wingsuit-designsystem/preset-twing",
    "@wingsuit-designsystem/preset-placeholder",
    "@wingsuit-designsystem/preset-storybook",
    "@wingsuit-designsystem/preset-drupal",
    "@wingsuit-designsystem/preset-icon",
    "@wingsuit-designsystem/preset-icon-spritemap",
    "@wingsuit-designsystem/preset-imagemin",
  ],
  designSystems: {
    ilo: {
      path: "src",
      patternFolder: "patterns",
      namespaces,
    },
  },
  apps: {
    storybook: {
      path: "./apps/storybook",
      type: "storybook",
      cssMode: "hot",
      distFolder: "storybook-static",
      designSystem: "ilo",
      componentTypes: {
        wingsuit_presenter:
          "ILO component (UI Pattern) with presentation template",
        plain: "Twig only component",
        plain_presenter: "Twig only component with presentation template",
        presenter: "Presentation template",
      },
    },
  },
};
