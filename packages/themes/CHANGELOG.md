# @ilo-org/themes

## 0.7.0

### Minor Changes

- 4522e79de: Added new config values for spacing
- bf1ec0843: Truncate long text in tags

### Patch Changes

- ccdb35c99: Adjust padding-9 value by 1px
- 5df8f748a: fixed text input invalid state
- ee17a3bd2: Top spacing should be removed in hero card when there is no image

## 0.6.1

### Patch Changes

- 2c4331403: Set opacity with decimals instead of percents to prevent cssnano from clamping values at 1%.

## 0.6.0

### Minor Changes

- ad52c6442: - Update color tokens for Hero
  - Update spacing tokens for Hero
  - Add new opacity token for `semi-transparent`

## 0.5.1

### Patch Changes

- 0488bc66e: Fix padding in Hero Card

## 0.5.0

### Minor Changes

- 73640499b: Add tokens for layout values maxWidth and padding

## 0.4.0

### Minor Changes

- 3290283dd: Specify system fonts to use for Chinese and Japanese

## 0.3.0

### Minor Changes

- 5a4a7255a: Includes themes for new form elements

## 0.2.0

### Minor Changes

- 0f45a7aae: Add tokens for social media component

## 0.1.16

### Patch Changes

- 51b4be31a: Add dark color options for tooltip icon

## 0.1.15

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.

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
- 79e17c5d3: Bufdixes to multiple components
- 7b3813bb1: Bugfixes to multiple components

## 0.1.11

### Patch Changes

- f7f448c65: Fixes to React radio button, SearchField, add ability to serve different langauge fonts
- f4b7bcb7f: Local nav fixes for mobile
- 0dfb90274: Patchfix for Feature card wide version

## 0.1.10

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

## 0.1.9

### Patch Changes

- 48e7a4ada: - Hero: Breadcrumb add in
  - Cards: Video icon for feature and external link option

## 0.1.8

### Patch Changes

- 069cd8eaf: FIxes to cards
- a76395618: ESC exits out of toggle menus in the nav
- 8cd74234c: Bugfixes to Tag, Tooltip, Callout, Checkbox, LinkList

## 0.1.7

### Patch Changes

- 6e470111a: Nav, Card and Hero fixes for QA

## 0.1.6

### Patch Changes

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
