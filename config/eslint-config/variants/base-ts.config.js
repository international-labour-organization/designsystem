import BaseJSConfig from "./base-js.config.js";
import ts from "typescript-eslint";
import { resolve } from "path";

const TSConfigs = [
  resolve(process.cwd(), "tsconfig.build.json"),
  resolve(process.cwd(), "tsconfig.json"),
];

const RecommendedTSConfig = ts.configs.recommendedTypeChecked.map((config) => ({
  ...config,
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    ...config.languageOptions,
    parserOptions: {
      project: TSConfigs,
    },
  },
}));

/** @type {import("eslint").Linter.Config} */
const BaseTSConfig = {
  files: ["**/*.ts"],
  plugins: {
    "@typescript-eslint": ts.plugin,
  },
  languageOptions: {
    parser: ts.parser,
    parserOptions: {
      sourceType: "module",
      project: TSConfigs,
    },
  },
  rules: {
    "@typescript-eslint/class-literal-property-style": "warn",
    "@typescript-eslint/no-duplicate-enum-values": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    // Migrated from old typescript-eslint config
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
  },
};

export default ts.config(
  ...BaseJSConfig,
  ...RecommendedTSConfig,
  BaseTSConfig,
  {
    // disable type-aware linting on JS files
    files: ["**/*.js"],
    ...ts.configs.disableTypeChecked,
  }
);
