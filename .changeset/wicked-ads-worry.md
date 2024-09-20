---
"@ilo-org/eslint-config": major
---

### ESLint 9 Upgrade

We've upgraded to ESLint 9! 🚀 This is a breaking change because ESLint 9 introduces several updates and deprecations that might impact your current linting setup.

The `@ilo-org/eslint-config` package now uses ESLint 9 and exports only flat configuration objects.

Here are the available configs:

| Config Name | Description                      | Internal Extends |
| ----------- | -------------------------------- | ---------------- |
| js          | Base JavaScript config           | ⛔               |
| recommended | Recommended one with `js` + `ts` | `js`             |
| react       | React config                     | `ts` -> `js`     |

Make sure to check out the [ESLint 9 migration guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0) for details on updating your configuration.
