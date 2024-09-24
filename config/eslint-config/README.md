# @ilo-org/eslint-config

> ESLint configuration for ILO Design System. These docs are a WIP

## Getting started

```bash
npm install -D @ilo-org/eslint-config
```

## Usage

`@ilo-org/eslint-config` provides a list of ESLint flat configurations:

| Config Name | Description                           | Internal Extends |
| ----------- | ------------------------------------- | ---------------- |
| js          | Base JavaScript config                | ⛔               |
| recommended | Recommended configuration `js` + `ts` | `js`             |
| react       | React Typescript config               | `ts` -> `js`     |

You can use any configuration you like by simply including it inside your eslint config

Just export it

```js
import configs from "@ilo-org/eslint-config";

export default configs.recommended;
```

or extend and add your own

```js
import configs from "@ilo-org/eslint-config";

export default [
  ...configs.recommended,
  {
    rules: {
      "no-console": "warn",
    },
  },
];
```

## Opinionated rules

🚨 - Displayed as an error
🚧 - Displayed as a warning
✅ - Allowed

| Rule                                              | Severity | Description                                                     |
| ------------------------------------------------- | -------- | --------------------------------------------------------------- |
| "prettier/prettier"                               | 🚨       | Is strong about formatting                                      |
| "no-console"                                      | 🚧       | Prevents the use of `console.log` but allows `warn` and `error` |
| "no-duplicate-imports"                            | 🚧       | Prevents duplicate imports                                      |
| "no-await-in-loop"                                | 🚧       | Prevents `await` inside loops                                   |
| "no-unused-vars"                                  | 🚧       | Prevents unused variables but allows `_` to be ignored          |
| "@typescript-eslint/class-literal-property-style" | 🚧       | Normalizes class literal properties                             |
| "@typescript-eslint/no-duplicate-enum-values"     | 🚧       |                                                                 |
| "@typescript-eslint/prefer-for-of"                | 🚧       | Enforces the use of `for-of`                                    |
| "@typescript-eslint/consistent-type-definitions"  | 🚧       | `interface` is preferred                                        |
| "@typescript-eslint/ban-ts-comments"              | ✅       |                                                                 |
| "@typescript-eslint/ban-ts-ignores"               | ✅       |                                                                 |

## 📝 License

Licensed under the [Apache 2.0 License](/LICENSE).
