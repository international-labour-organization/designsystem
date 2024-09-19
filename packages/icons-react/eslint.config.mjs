import configs from "@ilo-org/eslint-config";

/** @type {import("eslint").Linter.Config} */
const IconsReactConfig = {
  ignores: ["es/", "lib/", "next/", "umd/"],
};

export default [...configs.js, IconsReactConfig];
