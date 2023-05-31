# @ilo-org/icon-build-helpers

## 0.0.4

### Patch Changes

- be8262383: Prevent optimizer from stripping out color placeholder used by sass functions
- be8262383: Add check for viewbox when generating descriptors. Builds broke sometimes without.

## 0.0.3

### Patch Changes

- 368092aee: Set React peer dependencies to >16

## 0.0.2

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.
