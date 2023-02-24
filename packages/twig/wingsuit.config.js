const namespaces = require("./src/namespaces");

module.exports = {
  presets: ["@wingsuit-designsystem/preset-scss"],
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
