# @ilo-org/brand-assets

## 0.5.3

### Patch Changes

- 5af35c3e3: Replace apple touch icon png

## 0.5.2

### Patch Changes

- 46d8998a4: Replace small favicon with 96x96 version that should look good everywhere

## 0.5.1

### Patch Changes

- f1f08712a: Re-set files field in package.json of the package rather than at the monorepo root

## 0.5.0

### Minor Changes

- 977e15006: Fixes a bug where some distribution assets weren't getting included in Design System packages while a lot of non-essential development assets were. At the same time, this removes some `src` directories from the packages which some consumers might have been using.

## 0.4.0

### Minor Changes

- 5a1e32f8e: Fix logos in various languages showing inconsistent sizes

### Patch Changes

- b3298a267: Change favicon name, mstile-150x150.png to mstile-270x270.png

## 0.3.1

### Patch Changes

- 2f7fe6c69: Add different versions of favicons and move favicon.ico into `/assets/favicon` folder

## 0.3.0

### Minor Changes

- dcb36eeef: Replace favicon with a proper version of the ILO logo that will be easy to see and recognize even at small sizes.

## 0.2.0

### Minor Changes

- c0fb36a66: Add ILO logos in Arabic, Chinese, Dutch, German, Italian, Japanese, Portuguese, Russian, Turkish and Vietnamese,

## 0.1.0

### Minor Changes

- e2a233688: - This adds blue and white horizontal logos in English, French and Spanish. Logos are available as pngs and svgs.

  - Adjust exports. URl exports are available from the package root:

  ```js
  import { logo_en_horizontal_blue } from "@ilo-org/brand-assets";
  ```

  Whereas files are accessible by adding the filename to the root:

  ```js
  import ilo_logo from "@ilo-org/brand-assets/logo_en_horizontal_blue.svg";
  ```

  - Add types for URL exports
  - Update docs

## 0.0.2

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.
- Updated dependencies [8e24e57fc]
  - @ilo-org/styles@0.1.15
  - @ilo-org/themes@0.1.15
  - @ilo-org/fonts@0.0.7
  - @ilo-org/icons@0.1.15
  - @ilo-org/utils@0.0.11
