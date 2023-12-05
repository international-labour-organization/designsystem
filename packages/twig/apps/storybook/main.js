const wingsuitCore = require("@wingsuit-designsystem/core");

module.exports = {
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-viewport",
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-backgrounds",
    "@storybook/addon-postcss",
    "storybook-addon-rtl-direction",
  ],
  staticDirs: [
    {
      from: "../../node_modules/@ilo-org/brand-assets/dist/assets/",
      to: "/brand-assets",
    },
    { from: "../../node_modules/@ilo-org/fonts/font-css", to: "/fonts" },
  ],
  webpackFinal: (config) => {
    const final = wingsuitCore.getAppPack(
      wingsuitCore.resolveConfig("storybook"),
      [config]
    );
    return final;
  },
};
