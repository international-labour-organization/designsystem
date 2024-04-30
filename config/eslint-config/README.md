# @ilo-org/eslint-config

> ESLint configuration for ILO Design System. These docs are a WIP

## Getting started

```bash
npm install -D @ilo-org/eslint-config
```

## Usage

You can use `@ilo-org/eslint-config` in your project by extending it in your
`eslint` configuration. For example, if we had an `.eslintrc` file:

```json
{
  "extends": ["@ilo-org/eslint-config"]
}
```

## TypeScript

To use this configuration in a project with Typescript, you can add an `overrides` property to your `.eslintrc`. Here's an example:

```cjs
// .eslintrc.cjs

module.exports = {
  extends: ["@ilo-org/eslint-config"],
  ignorePatterns: ["node_modules/"],
  overrides: [
    /* =================== */
    /* TypeScript Settings */
    /* =================== */
    {
      // Which files the override will apply to relative to the package root
      files: ["**/*.{ts,tsx}"],
      extends: ["@ilo-org/eslint-config/typescript"],
      // Your typescript parser options
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
};
```

## 📝 License

Licensed under the [Apache 2.0 License](/LICENSE).
