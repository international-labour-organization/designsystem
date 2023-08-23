# @ilo-org/styles

## 0.8.4

### Patch Changes

- 58bc8ff88: Ensure cards in card group take up full width of card group and always have the same gap
- 58a708c3a: Ensure Hero can expand to the full width of its container

## 0.8.3

### Patch Changes

- cefc8690e: Correctly apply max-width to card wrappers

## 0.8.2

### Patch Changes

- 270805a67: Avoid card wrappers getting stretched beyond the width of the actual component
- 9ed7f815a: Cards should have white background by default
- c81b76d1a: All cards in card group should be the same height.
- bffee71ef: In Feature Card, push dates and ctas to the bottom of the card

## 0.8.1

### Patch Changes

- 5887810c3: Feature Card, prevent image from distorting

## 0.8.0

### Minor Changes

- 9edcc451f: Add 2-column layout for Data Cards. `columns` setting allows users to choose preferred layout option.

### Patch Changes

- 9edcc451f: Fix spacing in data card to match designs

## 0.7.2

### Patch Changes

- 0cb90a388: Prevent caption from appearing on top of hero card when it's aligned bottom and justified start
- b0797d2f9: Fixes RTL styles in hero. As for other components, adding the `right-to-left` class to any parent of Hero now correctly renders the RTL styles.

## 0.7.1

### Patch Changes

- 0fd4b60df: - In Card Group, set `theme` and `type` properties for Cards on Card Group, not on invididual cards
  - Use `cardcount` to determine how many cards should be in a row and how wide they should be.

## 0.7.0

### Minor Changes

- bdeca8720: Refactor the Card Group in line with changes made to the Cards.

  - Width of the cards in the card group are set via a new `size` property that uses the `size` property of the cards in the group.
  - A new `collapsed` property optionally removes the space between the cards so they are touching.
  - A new `justify` property allows the user to horizontally align the cards to the beginning or center, or to the left and right edges of the container.

### Patch Changes

- ba46a3a7d: Complete refactor of card styles.
- bbd9262d1: Fix bug preventing sub-links in multilink card from being clickable
- ee14cd3d3: changed spaces between cards
- b56d55cfd: Cards: fix unlinked text changing colors on hover
- 5022dfc4c: Fix bug where profile in dark themed graphic card had unreadable white text on hover
- bacc0bba7: Fix hero image corner cut
- ba46a3a7d: Use clip-path for cornercuts instead of pseudoelements and svgs
- 652966ab7: Add `fluid` size to cards allowing them to take the full width of their container.

## 0.6.0

### Minor Changes

- c0648530f: Accordion items can now be made scrollable by passing `scroll: true` to the Accordion Panel component.
- 0dc9a8538: Add LogoGrid component which shows a list of logos with an optional link

## 0.5.0

### Minor Changes

- 0f45a7aae: Add styles for new social media component

### Patch Changes

- 0f45a7aae: Remove unneeded styles from footer which are now in social media component
- 2f6b0e73f: added background color white to the content tabs
- Updated dependencies [0f45a7aae]
- Updated dependencies [0f45a7aae]
  - @ilo-org/themes@0.2.0
  - @ilo-org/icons@0.2.1

## 0.4.0

### Minor Changes

- 6a7dbe609: Refactor hero and hero card, expose more options for styling and positioning and remove params that tied layout options to template names
- b498c19c4: Add support for tiktok and flickr social media links in footer

### Patch Changes

- Updated dependencies [5df0bb1a9]
- Updated dependencies [51b4be31a]
  - @ilo-org/icons@0.2.0
  - @ilo-org/themes@0.1.16

## 0.3.5

### Patch Changes

- 11801070b: Change request for videojs player to be able to work with Youtube videos.
- 1b942833b: Remove max-width for the video component. Not needed.

## 0.3.4

### Patch Changes

- ee2e53f51: Fix bug where whole nav disappeared when user clicked more button

## 0.3.3

### Patch Changes

- ee859111c: Fix bug where links in language toggle were still clickable even when not showing
- ee859111c: Correct hero card with
- ee859111c: Correctly handle visibility of mobile nav sections when they're covered by other parts

## 0.3.2

### Patch Changes

- be8262383: Use css fonts file for monorepo
- be8262383: Get monorepo fonts from css instead of from sass
- 36960e383: Transpile and export global css for components
  - @ilo-org/icons@0.1.17

## 0.3.1

### Patch Changes

- e5c100219: Correctly export files in styles/css dir

## 0.3.0

### Minor Changes

- 8bc52db6e: Create a new build folder called css which includes both the bundled stylesheets as well as the compiled css for each of the components.

## 0.2.1

### Patch Changes

- bac3cc9d5: Fix bug preventing the sub-brand from rendering with the proper font size on some mobile browsers

## 0.2.0

### Minor Changes

- c24a5f721: Adds responsive logo component and styles

### Patch Changes

- 2aa1f1cc6: feat/react: Implementation of Card and CardGroup components
- 2aa1f1cc6: enable profile to be themeable and address a few minor style issues

## 0.1.19

### Patch Changes

- 1405b9cbf: Fix logo not appearing in Navigation

## 0.1.18

### Patch Changes

- 2f60e9d92: Correct local navigation styles
- c9413b943: Fix small line showing through nav component diagonal at some viewports

## 0.1.17

### Patch Changes

- Updated dependencies [391687e3e]
  - @ilo-org/fonts@0.1.0

## 0.1.16

### Patch Changes

- @ilo-org/icons@0.1.16

## 0.1.15

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.
- Updated dependencies [8e24e57fc]
  - @ilo-org/themes@0.1.15
  - @ilo-org/fonts@0.0.7
  - @ilo-org/icons@0.1.15

## 0.1.14

### Patch Changes

- b48b386b8: Local nav color for the background is a setting now
- Updated dependencies [b48b386b8]
  - @ilo-org/fonts@0.0.6
  - @ilo-org/icons@0.1.14
  - @ilo-org/themes@0.1.14

## 0.1.13

### Patch Changes

- 62c3c624e: Bugfixes in multiple components
- 1b29018f0: Adds better React Storybook experience
- 43c2b0026: Cornercut changes to make more consistent across sizes and breakpoints for hero and cards
- Updated dependencies [62c3c624e]
- Updated dependencies [1b29018f0]
- Updated dependencies [43c2b0026]
  - @ilo-org/fonts@0.0.5
  - @ilo-org/icons@0.1.13
  - @ilo-org/themes@0.1.13

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
- Updated dependencies [94bd642d9]
- Updated dependencies [a167b7405]
- Updated dependencies [79e17c5d3]
- Updated dependencies [7b3813bb1]
  - @ilo-org/fonts@0.0.4
  - @ilo-org/icons@0.1.12
  - @ilo-org/themes@0.1.12

## 0.1.11

### Patch Changes

- f7f448c65: Fixes to React radio button, SearchField, add ability to serve different langauge fonts
- f4b7bcb7f: Local nav fixes for mobile
- 0dfb90274: Patchfix for Feature card wide version
- Updated dependencies [f7f448c65]
- Updated dependencies [f4b7bcb7f]
- Updated dependencies [0dfb90274]
  - @ilo-org/fonts@0.0.3
  - @ilo-org/themes@0.1.11
  - @ilo-org/icons@0.1.11

## 0.1.10

### Patch Changes

- fdba39df6: Adjust card widths
- 592c40ae9: Hover fix for data card and breadcrumb for hero
- 3005bb74c: Fixes to Video, Accordion, List, Checkbox, favicon
- b72b8aa9e: Update README; various bugfixes with Table, Footer, Notification, Video, RichText
- d7015e194: - Tag fixes for consistent font size
  - Accordion transition, font size and height fixes
  - Tooltip transition fix
  - Cards padding and anchor the date on feature cards
  - List fix font sizes on mobile
  - Callout fix transition timing
- 6ba8ee615: Documentation for wingusit
- Updated dependencies [592c40ae9]
- Updated dependencies [b72b8aa9e]
- Updated dependencies [d7015e194]
- Updated dependencies [6ba8ee615]
  - @ilo-org/icons@0.1.10
  - @ilo-org/themes@0.1.10

## 0.1.9

### Patch Changes

- 48e7a4ada: - Hero: Breadcrumb add in
  - Cards: Video icon for feature and external link option
- 2bfdfd356: Fixes to Hero, Cards components
- Updated dependencies [48e7a4ada]
  - @ilo-org/icons@0.1.9
  - @ilo-org/themes@0.1.9

## 0.1.8

### Patch Changes

- 069cd8eaf: FIxes to cards
- a76395618: ESC exits out of toggle menus in the nav
- 8cd74234c: Bugfixes to Tag, Tooltip, Callout, Checkbox, LinkList
- Updated dependencies [069cd8eaf]
- Updated dependencies [a76395618]
- Updated dependencies [8cd74234c]
  - @ilo-org/themes@0.1.8
  - @ilo-org/icons@0.1.8

## 0.1.7

### Patch Changes

- 84fd6bc7d: Bugfixes with several components
- 6e470111a: Nav, Card and Hero fixes for QA
- Updated dependencies [6e470111a]
  - @ilo-org/icons@0.1.7
  - @ilo-org/themes@0.1.7

## 0.1.6

### Patch Changes

- b65d5c4c1: Various bugfixes
- 487778036: CHangeset wasn't detected by github
- ab6c0a1c7: Set all packages to rely on latest fixed version of other internal packages
- d2b78bb88: Right to left for Profile component
- dd2b3ece6: YHet another changeset, perhaps something is broken with changesets
- Updated dependencies [b65d5c4c1]
- Updated dependencies [ab6c0a1c7]
  - @ilo-org/icons@0.1.6
  - @ilo-org/themes@0.1.6

## 0.1.5

### Patch Changes

- a3bd6c73c: Bugfixes for Form, Loading components
- aa8469ceb: Remove testing code from hero and add RTL style for tags
- da45da834: Bugfixes in several components
- 539894a90: Hero fixes for RTL and lack of image
- 22bda9fb8: Rename tagset to Tags to match other components and work as an npm package
- Updated dependencies [aa8469ceb]
- Updated dependencies [539894a90]
- Updated dependencies [22bda9fb8]
  - @ilo-org/icons@0.1.5
  - @ilo-org/themes@0.1.5

## 0.1.4

### Patch Changes

- a8e627c45: Bugfixes in Form and Footer, and right-to-left styling for Form
- 9d25aa0e8: QA bugfixes for Nav Hero and Callout
- Updated dependencies [a8e627c45]
- Updated dependencies [9d25aa0e8]
  - @ilo-org/icons@0.1.4
  - @ilo-org/themes@0.1.4

## 0.1.3

### Patch Changes

- 774682316: Card fixes such as font sizes and some slight tweaks to make sure all the data is displayed
- 2d7d8114a: Bug fixes and right-to-left stlying for rich text, tabs, image and credit components
- 04fe60f9f: Mostly design bugfixes across multiple components
- Updated dependencies [774682316]
- Updated dependencies [2d7d8114a]
- Updated dependencies [04fe60f9f]
  - @ilo-org/icons@0.1.3
  - @ilo-org/themes@0.1.3

## 0.1.2

### Patch Changes

- a84c36d: Navigation RTL styles and design QA
- Updated dependencies [a84c36d]
  - @ilo-org/icons@0.1.2
  - @ilo-org/themes@0.1.2

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
- Updated dependencies [ce78c7a]
- Updated dependencies [04c5c4e]
- Updated dependencies [1a7ac4f]
- Updated dependencies [2aa4aed]
  - @ilo-org/icons@0.1.1
  - @ilo-org/themes@0.1.1

## 0.1.0

### Minor Changes

- 6bf0e10: Use context menu for language switcher and wingsuit setup for local nav

### Patch Changes

- Updated dependencies [6bf0e10]
  - @ilo-org/icons@0.1.0
  - @ilo-org/themes@0.1.0

## 0.0.3

### Patch Changes

- ab6fd1b: fix(monorepo): update docs and fix css affecting templating
- b68f6fb: Remove styles for cardgroup that should be template styles

## 0.0.2

### Patch Changes

- b61692a: CSS should default to assuming fonts are being loaded via a server rather than by means of the monorepo
- Updated dependencies [b61692a]
  - @ilo-org/fonts@0.0.2
