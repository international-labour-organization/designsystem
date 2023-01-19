---
"@ilo-org/react": minor
"@ilo-org/icon-build-helpers": patch
"@ilo-org/brand-assets": patch
"@ilo-org/eslint-config": patch
"@ilo-org/icons-react": patch
"@ilo-org/styles": patch
"@ilo-org/themes": patch
"@ilo-org/fonts": patch
"@ilo-org/icons": patch
"@ilo-org/utils": patch
"@ilo-org/twig": patch
---

We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.
