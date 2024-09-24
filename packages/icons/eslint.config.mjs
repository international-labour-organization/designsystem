import configs from "@ilo-org/eslint-config";

/** @type {import("eslint").Linter.Config} */
const IconsConfig = {
  ignores: ["es/", "lib/", "svg/", "build/", "umd/"],
};

export default [...configs.js, IconsConfig];
