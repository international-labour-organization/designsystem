import { configure, initJsBehaviors } from "@wingsuit-designsystem/storybook";
import { addDecorator, addParameters } from "@storybook/react";
import "./styles.scss";

const namespaces = require("../../src/namespaces");

initJsBehaviors("Drupal");

addParameters({
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: 1,
      title: "Documentation",
    },
    canvas: { title: "Canvas", hidden: false },
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Welcome", "Intro", "Tokens", ["Colors", "Typography"]],
      locales: "en-US",
    },
  },
});

configure(
  module,
  [
    require.context("./patterns", true, /\.stories(\.jsx|\.js|\.mdx)$/),
    require.context("wspatterns", true, /\.stories(\.jsx|\.js|\.mdx)$/),
  ],
  require.context("./config", false, /\.json|\.ya?ml$/),
  require.context("wspatterns", true, /\.twig$/),
  namespaces
);
