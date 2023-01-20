# @ilo-org/brand-assets

## 0.0.2

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.
- Updated dependencies [8e24e57fc]
  - @ilo-org/styles@0.1.15
  - @ilo-org/themes@0.1.15
  - @ilo-org/fonts@0.0.7
  - @ilo-org/icons@0.1.15
  - @ilo-org/utils@0.0.11
