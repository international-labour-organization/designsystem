import configs from "@ilo-org/eslint-config";
import cypress from "eslint-plugin-cypress/flat";

/** @type {import("eslint").Linter.Config} */
const TwigConfig = {
  languageOptions: {
    globals: {
      Drupal: 'writeable',
    },
  },
  rules:{
    "cypress/no-unnecessary-waiting": "off"
  }
};



export default [...configs.js,  cypress.configs.recommended, TwigConfig];