/* Base Eslint Settings for JS/JSX */

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  ignorePatterns: ["node_modules/"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["jsx-a11y"],
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
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
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};
