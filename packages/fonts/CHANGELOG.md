# @ilo-org/fonts

## 2.0.0

### Major Changes

- 85599c276: We're replacing Noto Sans Arabic with Vazirmatn. Noto Sans Arabic had some `line-height` issues where ascenders and descenders were getting cut off. We unfortunately weren't able to resolve those in a way that would have been consistent with the `line-height` values that are being used with fonts in other languages. The best solution we could find was to replace the font altogether with a similar alternative.

  While implementing Vazirmatn, we noticed that setting practically any `letter-spacing` value at all had the effect of creating some undesirable artifacts in the text. As a result, `letter-spacing` in Arabic only is now initialized to `0` for all text. Other other settings like `font-weight` have remained the same.

## 1.0.0

### Major Changes

- 72159bb1a: Stable release with no changes from the last zero version

## 0.2.2

### Patch Changes

- fdf83a353: Set correct font weight for Arabic bold fonts

## 0.2.1

### Patch Changes

- f1f08712a: Re-set files field in package.json of the package rather than at the monorepo root

## 0.2.0

### Minor Changes

- 977e15006: Fixes a bug where some distribution assets weren't getting included in Design System packages while a lot of non-essential development assets were. At the same time, this removes some `src` directories from the packages which some consumers might have been using.

## 0.1.2

### Patch Changes

- 1f7525b0d: Fix issue where Overpass was missing some glyphs in Vietnamese and possibly other languages as well.

## 0.1.1

### Patch Changes

- 78f48eff5: Remove unused Arabic font files and add modern font file formats for Arabic
- 03b3c26e4: Fix Arabic font-face declarations which had incorrect font urls. Also, include declarations for modern font formats.

## 0.1.0

### Minor Changes

- 391687e3e: - Fixes broken font imports in /font-css

  - Adds Google Font import declaration

  ```css
  @import url("@ilo-org/fonts/font-css/fonts-google.css");
  ```

## 0.0.7

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.

## 0.0.6

### Patch Changes

- b48b386b8: Local nav color for the background is a setting now

## 0.0.5

### Patch Changes

- 62c3c624e: Bugfixes in multiple components
- 1b29018f0: Adds better React Storybook experience
- 43c2b0026: Cornercut changes to make more consistent across sizes and breakpoints for hero and cards

## 0.0.4

### Patch Changes

- 94bd642d9: ILOUAT-16: Clicking on the page should close subnav menu
  ILOUAT-26: mobile hamburger click shouldn't auto navigate to inside link
  ILOUAT-27: Menu take over on mobile should be the whole page without the ability to scroll past it
  ILOUAT-37: Subnav pane should properly open when subnav items are focused
- 79e17c5d3: Bufdixes to multiple components
- 7b3813bb1: Bugfixes to multiple components

## 0.0.3

### Patch Changes

- f7f448c65: Fixes to React radio button, SearchField, add ability to serve different langauge fonts

## 0.0.2

### Patch Changes

- b61692a: CSS should default to assuming fonts are being loaded via a server rather than by means of the monorepo
