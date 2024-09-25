import configs from "@ilo-org/eslint-config";

/** @type {import("eslint").Linter.Config} */
const ReactConfigOverrides = {
  ignores: ["**/*.args.ts", "**/*.stories.tsx"],
};

export default [...configs.react, ReactConfigOverrides];
