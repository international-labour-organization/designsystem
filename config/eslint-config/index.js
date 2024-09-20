import js from "./variants/base-js.config.js";
import ts from "./variants/base-ts.config.js";
import react from "./variants/react.config.js";
import storybook from "./variants/storybook-js.config.js";

const configs = {
  js,
  recommended: ts,
  react,
  storybook,
};

export default configs;
