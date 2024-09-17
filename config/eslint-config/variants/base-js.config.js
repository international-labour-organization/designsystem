import js from "@eslint/js";
import prettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import { IgnoreConfig } from "./ignores.config.js";

/** @type {import("eslint").Linter.Config} */
const BaseJSConfig = {
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    "no-console": "warn",
    "prettier/prettier": "error",
    "no-duplicate-imports": "warn",
    "no-await-in-loop": "warn",
    "no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
};

export default [js.configs.recommended, prettier, BaseJSConfig, IgnoreConfig];
