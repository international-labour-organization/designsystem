# @ilo-org/eslint-config

## 2.0.0

### Major Changes

- 93e6ddf24: ### ESLint 9 Upgrade

  We've upgraded to ESLint 9! 🚀 This is a breaking change because ESLint 9 introduces several updates and deprecations that might impact your current linting setup.

  The `@ilo-org/eslint-config` package now uses ESLint 9 and exports only flat configuration objects.

  Here are the available configs:

  | Config Name | Description                      | Internal Extends |
  | ----------- | -------------------------------- | ---------------- |
  | js          | Base JavaScript config           | ⛔               |
  | recommended | Recommended one with `js` + `ts` | `js`             |
  | react       | React config                     | `ts` -> `js`     |

  Make sure to check out the [ESLint 9 migration guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0) for details on updating your configuration.

## 1.0.0

### Major Changes

- b44994ae2: 🎉 Version 1 Release

## 0.2.1

### Patch Changes

- f1f08712a: Re-set files field in package.json of the package rather than at the monorepo root

## 0.2.0

### Minor Changes

- 977e15006: Fixes a bug where some distribution assets weren't getting included in Design System packages while a lot of non-essential development assets were. At the same time, this removes some `src` directories from the packages which some consumers might have been using.

## 0.1.0

### Minor Changes

- be8262383: Update eslint plugins

## 0.0.3

### Patch Changes

- 2f60e9d92: Make sure eslint treats broken prettier rules as errors

## 0.0.2

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.
