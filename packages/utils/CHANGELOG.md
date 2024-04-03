# @ilo-org/utils

## 0.1.1

### Patch Changes

- f1f08712a: Re-set files field in package.json of the package rather than at the monorepo root

## 0.1.0

### Minor Changes

- 977e15006: Fixes a bug where some distribution assets weren't getting included in Design System packages while a lot of non-essential development assets were. At the same time, this removes some `src` directories from the packages which some consumers might have been using.

## 0.0.11

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.

## 0.0.10

### Patch Changes

- b48b386b8: Local nav color for the background is a setting now

## 0.0.9

### Patch Changes

- 62c3c624e: Bugfixes in multiple components
- 1b29018f0: Adds better React Storybook experience
- 43c2b0026: Cornercut changes to make more consistent across sizes and breakpoints for hero and cards

## 0.0.8

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
- 79e17c5d3: Bufdixes to multiple components
- 7b3813bb1: Bugfixes to multiple components

## 0.0.7

### Patch Changes

- f7f448c65: Fixes to React radio button, SearchField, add ability to serve different langauge fonts
- f4b7bcb7f: Local nav fixes for mobile
- 0dfb90274: Patchfix for Feature card wide version

## 0.0.6

### Patch Changes

- 592c40ae9: Hover fix for data card and breadcrumb for hero
- b72b8aa9e: Update README; various bugfixes with Table, Footer, Notification, Video, RichText
- d7015e194: - Tag fixes for consistent font size
  - Accordion transition, font size and height fixes
  - Tooltip transition fix
  - Cards padding and anchor the date on feature cards
  - List fix font sizes on mobile
  - Callout fix transition timing
- 6ba8ee615: Documentation for wingusit

## 0.0.5

### Patch Changes

- 48e7a4ada: - Hero: Breadcrumb add in
  - Cards: Video icon for feature and external link option

## 0.0.4

### Patch Changes

- a76395618: ESC exits out of toggle menus in the nav

## 0.0.3

### Patch Changes

- 6e470111a: Nav, Card and Hero fixes for QA

## 0.0.2

### Patch Changes

- b65d5c4c1: Various bugfixes
- ab6c0a1c7: Set all packages to rely on latest fixed version of other internal packages
