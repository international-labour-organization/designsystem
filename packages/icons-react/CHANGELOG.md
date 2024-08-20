# @ilo-org/icons-react

## 1.0.0

### Major Changes

- 72159bb1a: Stable release with no changes from the last zero version

### Patch Changes

- Updated dependencies [72159bb1a]
  - @ilo-org/icon-build-helpers@1.0.0
  - @ilo-org/icons@1.0.0

## 0.1.2

### Patch Changes

- Updated dependencies [e3e9d14a5]
  - @ilo-org/icons@0.4.0

## 0.1.1

### Patch Changes

- f1f08712a: Re-set files field in package.json of the package rather than at the monorepo root
- Updated dependencies [f1f08712a]
  - @ilo-org/icon-build-helpers@0.1.1
  - @ilo-org/icons@0.3.1

## 0.1.0

### Minor Changes

- 977e15006: Fixes a bug where some distribution assets weren't getting included in Design System packages while a lot of non-essential development assets were. At the same time, this removes some `src` directories from the packages which some consumers might have been using.

### Patch Changes

- Updated dependencies [977e15006]
  - @ilo-org/icon-build-helpers@0.1.0
  - @ilo-org/icons@0.3.0

## 0.0.21

### Patch Changes

- Updated dependencies [0f45a7aae]
  - @ilo-org/icons@0.2.1

## 0.0.20

### Patch Changes

- Updated dependencies [5df0bb1a9]
  - @ilo-org/icons@0.2.0

## 0.0.19

### Patch Changes

- Updated dependencies [be8262383]
- Updated dependencies [be8262383]
  - @ilo-org/icon-build-helpers@0.0.4
  - @ilo-org/icons@0.1.17

## 0.0.18

### Patch Changes

- 368092aee: Set React peer dependencies to >16
- Updated dependencies [368092aee]
  - @ilo-org/icon-build-helpers@0.0.3
  - @ilo-org/icons@0.1.16

## 0.0.17

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.
- Updated dependencies [8e24e57fc]
  - @ilo-org/icon-build-helpers@0.0.2
  - @ilo-org/icons@0.1.15

## 0.0.16

### Patch Changes

- b48b386b8: Local nav color for the background is a setting now
- Updated dependencies [b48b386b8]
  - @ilo-org/icons@0.1.14

## 0.0.15

### Patch Changes

- 43c2b0026: Cornercut changes to make more consistent across sizes and breakpoints for hero and cards
- Updated dependencies [62c3c624e]
- Updated dependencies [1b29018f0]
- Updated dependencies [43c2b0026]
  - @ilo-org/icons@0.1.13

## 0.0.14

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
- Updated dependencies [94bd642d9]
- Updated dependencies [a167b7405]
  - @ilo-org/icons@0.1.12

## 0.0.13

### Patch Changes

- f4b7bcb7f: Local nav fixes for mobile
- 0dfb90274: Patchfix for Feature card wide version
- Updated dependencies [f4b7bcb7f]
- Updated dependencies [0dfb90274]
  - @ilo-org/icons@0.1.11

## 0.0.12

### Patch Changes

- 592c40ae9: Hover fix for data card and breadcrumb for hero
- d7015e194: - Tag fixes for consistent font size
  - Accordion transition, font size and height fixes
  - Tooltip transition fix
  - Cards padding and anchor the date on feature cards
  - List fix font sizes on mobile
  - Callout fix transition timing
- 6ba8ee615: Documentation for wingusit
- Updated dependencies [592c40ae9]
- Updated dependencies [d7015e194]
- Updated dependencies [6ba8ee615]
  - @ilo-org/icons@0.1.10

## 0.0.11

### Patch Changes

- 48e7a4ada: - Hero: Breadcrumb add in
  - Cards: Video icon for feature and external link option
- Updated dependencies [48e7a4ada]
  - @ilo-org/icons@0.1.9

## 0.0.10

### Patch Changes

- 069cd8eaf: FIxes to cards
- a76395618: ESC exits out of toggle menus in the nav
- 9bfb1eae1: Remove stray yarn files that were causing changesets to use yarn istead of pnpm to publish to npm.
- Updated dependencies [a76395618]
  - @ilo-org/icons@0.1.8

## 0.0.9

### Patch Changes

- 5a4806edb: Upgrading pnpm is expected to fix workspace deps not being fixed to version numbers in package.json. This should fix broken installs of the react-icons and react packages.
- 6e470111a: Nav, Card and Hero fixes for QA
- Updated dependencies [6e470111a]
  - @ilo-org/icons@0.1.7

## 0.0.8

### Patch Changes

- b65d5c4c1: Various bugfixes
- ab6c0a1c7: Set all packages to rely on latest fixed version of other internal packages
- Updated dependencies [b65d5c4c1]
- Updated dependencies [ab6c0a1c7]
  - @ilo-org/icons@0.1.6

## 0.0.7

### Patch Changes

- aa8469ceb: Remove testing code from hero and add RTL style for tags
- 539894a90: Hero fixes for RTL and lack of image
- 22bda9fb8: Rename tagset to Tags to match other components and work as an npm package
- Updated dependencies [aa8469ceb]
- Updated dependencies [539894a90]
- Updated dependencies [22bda9fb8]
  - @ilo-org/icons@0.1.5

## 0.0.6

### Patch Changes

- 9d25aa0e8: QA bugfixes for Nav Hero and Callout
- Updated dependencies [a8e627c45]
- Updated dependencies [9d25aa0e8]
  - @ilo-org/icons@0.1.4

## 0.0.5

### Patch Changes

- 774682316: Card fixes such as font sizes and some slight tweaks to make sure all the data is displayed
- 2d7d8114a: Bug fixes and right-to-left stlying for rich text, tabs, image and credit components
- Updated dependencies [774682316]
- Updated dependencies [2d7d8114a]
- Updated dependencies [04fe60f9f]
  - @ilo-org/icons@0.1.3

## 0.0.4

### Patch Changes

- a84c36d: Navigation RTL styles and design QA
- Updated dependencies [a84c36d]
  - @ilo-org/icons@0.1.2

## 0.0.3

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
- Updated dependencies [ce78c7a]
- Updated dependencies [04c5c4e]
- Updated dependencies [1a7ac4f]
- Updated dependencies [2aa4aed]
  - @ilo-org/icons@0.1.1

## 0.0.2

### Patch Changes

- Updated dependencies [6bf0e10]
  - @ilo-org/icons@0.1.0
