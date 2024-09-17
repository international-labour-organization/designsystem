import baseTsConfig from "./base-ts.config.js";
import react from "eslint-plugin-react";
import a11y from "eslint-plugin-jsx-a11y";
import hooks from "eslint-plugin-react-hooks";

/** @type {import("eslint").Linter.Config} */
const ReactConfig = {
  files: ["**/*.{tsx,jsx}"],
  settings: {
    react: {
      version: "18",
    },
  },
  plugins: {
    "react-hooks": hooks,
  },
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    // Migrated from old react config
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "either",
        controlComponents: [],
        depth: 25,
        labelAttributes: [],
        labelComponents: [],
      },
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
  },
};

export default [
  ...baseTsConfig,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  a11y.flatConfigs.recommended,
  ReactConfig,
];
