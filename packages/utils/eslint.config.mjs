import configs from "@ilo-org/eslint-config";

/** @type {import("eslint").Linter.Config} */
const UtilsConfig = {
  ignores: ["src/tests/"],
};

export default [...configs.ts, UtilsConfig];
