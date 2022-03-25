module.exports = {
  /* Global Eslint Settings */
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  ignorePatterns: [
    "storybook-static/",
    "node_modules/",
    "lib/",
    "src/stories/",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },

  /* Default Eslint for JS/JSX */
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
    "plugin:storybook/recommended",
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
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },

  /* Overrides for TypeScript */
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      files: ["**/*.{ts,tsx}"],
      globals: {
        React: "writable",
      },
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      plugins: ["@typescript-eslint"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
