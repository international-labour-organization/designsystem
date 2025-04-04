# @ilo-org/icons

## 2.1.0

### Minor Changes

- 79857079d: Add icons for Bluesky, Weibo and WeChat

## 2.0.0

### Major Changes

- 058345637: - Replaces all of the icons in the Icons package and replaces them with standardised versions that are all the same size, with the minor exception of the `Quote` icon. This required sizing changes to icons and affects the appearance of many components.
  - Pattern definitions for `modal` and `tabs` were adjusted to use the new icon settings.

## 1.1.0

### Minor Changes

- a318aa4e6: Add download icon to package

## 1.0.0

### Major Changes

- 72159bb1a: Stable release with no changes from the last zero version

### Patch Changes

- Updated dependencies [72159bb1a]
  - @ilo-org/icon-build-helpers@1.0.0

## 0.4.0

### Minor Changes

- e3e9d14a5: Add new X icon and remove the legacy twitter icon

## 0.3.1

### Patch Changes

- f1f08712a: Re-set files field in package.json of the package rather than at the monorepo root
- Updated dependencies [f1f08712a]
  - @ilo-org/icon-build-helpers@0.1.1

## 0.3.0

### Minor Changes

- 977e15006: Fixes a bug where some distribution assets weren't getting included in Design System packages while a lot of non-essential development assets were. At the same time, this removes some `src` directories from the packages which some consumers might have been using.

### Patch Changes

- Updated dependencies [977e15006]
  - @ilo-org/icon-build-helpers@0.1.0

## 0.2.1

### Patch Changes

- 0f45a7aae: Fix flickr, tiktok and youtube icons

## 0.2.0

### Minor Changes

- 5df0bb1a9: Add tiktok and flickr icons

## 0.1.17

### Patch Changes

- Updated dependencies [be8262383]
- Updated dependencies [be8262383]
  - @ilo-org/icon-build-helpers@0.0.4

## 0.1.16

### Patch Changes

- Updated dependencies [368092aee]
  - @ilo-org/icon-build-helpers@0.0.3

## 0.1.15

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.
- Updated dependencies [8e24e57fc]
  - @ilo-org/icon-build-helpers@0.0.2

## 0.1.14

### Patch Changes

- b48b386b8: Local nav color for the background is a setting now

## 0.1.13

### Patch Changes

- 62c3c624e: Bugfixes in multiple components
- 1b29018f0: Adds better React Storybook experience
- 43c2b0026: Cornercut changes to make more consistent across sizes and breakpoints for hero and cards

## 0.1.12

### Patch Changes

- 94bd642d9: ILOUAT-16: Clicking on the page should close subnav menu
  ILOUAT-26: mobile hamburger click shouldn't auto navigate to inside link
  ILOUAT-27: Menu take over on mobile should be the whole page without the ability to scroll past it
  ILOUAT-37: Subnav pane should properly open when subnav items are focused
- a167b7405: - Border radius for context menu
  - Mobile nav disappear on breakpoint instead of any resize event
  - More List spacing fixes (title item)
  - Breadcrumb on mobile in heroes
  - Bugfixes for feature card on wide mode with list item
  - Add in "Back to main site" link for local nav

## 0.1.11

### Patch Changes

- f4b7bcb7f: Local nav fixes for mobile
- 0dfb90274: Patchfix for Feature card wide version

## 0.1.10

### Patch Changes

- 592c40ae9: Hover fix for data card and breadcrumb for hero
- d7015e194: - Tag fixes for consistent font size
  - Accordion transition, font size and height fixes
  - Tooltip transition fix
  - Cards padding and anchor the date on feature cards
  - List fix font sizes on mobile
  - Callout fix transition timing
- 6ba8ee615: Documentation for wingusit

## 0.1.9

### Patch Changes

- 48e7a4ada: - Hero: Breadcrumb add in
  - Cards: Video icon for feature and external link option

## 0.1.8

### Patch Changes

- a76395618: ESC exits out of toggle menus in the nav

## 0.1.7

### Patch Changes

- 6e470111a: Nav, Card and Hero fixes for QA

## 0.1.6

### Patch Changes

- b65d5c4c1: Various bugfixes
- ab6c0a1c7: Set all packages to rely on latest fixed version of other internal packages

## 0.1.5

### Patch Changes

- aa8469ceb: Remove testing code from hero and add RTL style for tags
- 539894a90: Hero fixes for RTL and lack of image
- 22bda9fb8: Rename tagset to Tags to match other components and work as an npm package

## 0.1.4

### Patch Changes

- a8e627c45: Bugfixes in Form and Footer, and right-to-left styling for Form
- 9d25aa0e8: QA bugfixes for Nav Hero and Callout

## 0.1.3

### Patch Changes

- 774682316: Card fixes such as font sizes and some slight tweaks to make sure all the data is displayed
- 2d7d8114a: Bug fixes and right-to-left stlying for rich text, tabs, image and credit components
- 04fe60f9f: Mostly design bugfixes across multiple components

## 0.1.2

### Patch Changes

- a84c36d: Navigation RTL styles and design QA

## 0.1.1

### Patch Changes

- ce78c7a: Accordion, Callout and Hero minor bugfixing and RTL styling for Cards

  - Added sizes for cards, certain cards have different padding or styles for wide/standard/narrow
  - Changed the parameters for cardgroups, removing settings and adding type to denote variant of card
  - Changed the way cornercut and dark settings work, including a :not selector for cards that do no utilize those features

- 04c5c4e: - Fix some narrow/wide styles for multilink
  - Use px-to-rem
  - Overflow on hero images
  - max-width on mobile logos
- 1a7ac4f: Bugfixes for several components
- 2aa4aed: Bugfixes to Footer and Table components

## 0.1.0

### Minor Changes

- 6bf0e10: Use context menu for language switcher and wingsuit setup for local nav
