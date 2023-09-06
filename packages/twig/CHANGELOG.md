# @ilo-org/twig

## 0.10.0

### Minor Changes

- 5a4a7255a: This includes an initial refactor of the Form component and exposes several sub-components so they can be used directly by the developer without the Form component if they need to. So far, the Checkbox, Date Picker, Dropdown, Search and Text Input are exposed. Legacy form components have been removed from the documentation and should not be used, they will be refactored and exposed properly in the next version.

### Patch Changes

- Updated dependencies [5a4a7255a]
- Updated dependencies [5a4a7255a]
- Updated dependencies [5a4a7255a]
  - @ilo-org/themes@0.3.0
  - @ilo-org/styles@0.9.1

## 0.9.5

### Patch Changes

- 897fe5766: fix click event bubbling
- Updated dependencies [897fe5766]
- Updated dependencies [897fe5766]
- Updated dependencies [897fe5766]
  - @ilo-org/styles@0.9.0

## 0.9.4

### Patch Changes

- 58bc8ff88: Remove justify setting on card group
- 58bc8ff88: Ensure cards in card group take up full width of card group and always have the same gap
- Updated dependencies [58bc8ff88]
- Updated dependencies [58a708c3a]
  - @ilo-org/styles@0.8.4

## 0.9.3

### Patch Changes

- cefc8690e: Correctly apply max-width to card wrappers
- Updated dependencies [cefc8690e]
  - @ilo-org/styles@0.8.3

## 0.9.2

### Patch Changes

- Updated dependencies [270805a67]
- Updated dependencies [9ed7f815a]
- Updated dependencies [c81b76d1a]
- Updated dependencies [bffee71ef]
  - @ilo-org/styles@0.8.2

## 0.9.1

### Patch Changes

- 76e3c3efa: build(deps-dev): bump lodash from 4.17.20 to 4.17.21
- b90ff5984: Add `size` prop back to Card Group so that it can be used to set layout options.
- Updated dependencies [5887810c3]
  - @ilo-org/styles@0.8.1

## 0.9.0

### Minor Changes

- 9edcc451f: Add 2-column layout for Data Cards. `columns` setting allows users to choose preferred layout option.

### Patch Changes

- 289d2f3f6: Fix response images not working when only one breakpoint url is provided
- Updated dependencies [9edcc451f]
- Updated dependencies [9edcc451f]
  - @ilo-org/styles@0.8.0

## 0.8.2

### Patch Changes

- Updated dependencies [0cb90a388]
- Updated dependencies [b0797d2f9]
  - @ilo-org/styles@0.7.2

## 0.8.1

### Patch Changes

- 0fd4b60df: - In Card Group, set `theme` and `type` properties for Cards on Card Group, not on invididual cards
  - Use `cardcount` to determine how many cards should be in a row and how wide they should be.
- Updated dependencies [0fd4b60df]
  - @ilo-org/styles@0.7.1

## 0.8.0

### Minor Changes

- bdeca8720: Refactor the Card Group in line with changes made to the Cards.

  - Width of the cards in the card group are set via a new `size` property that uses the `size` property of the cards in the group.
  - A new `collapsed` property optionally removes the space between the cards so they are touching.
  - A new `justify` property allows the user to horizontally align the cards to the beginning or center, or to the left and right edges of the container.

- ba46a3a7d: Complete refactor of the Card component. Exposes each individual card as a separate template that can be imported individually or via the `Card` component using the `type` property.

  Settings for the `Card` component change as follows:

  - `cornercut` is deprecated for all cards except the Promo Card. For the others, it’s determined automatically by the type of card.
  - `alignment` is deprecated for all cards except the Multilink Card, where it determines where the image should be placed, when size is set to wide.
  - `size` has the following options: `narrow`, `wide`, `standard` and `fluid`. When a component only has two sizes, the options are `narrow`, `wide` and `fluid` and the default is `narrow`. When it has three options, all of the options are available and the default is `standard`. `fluid` is a new option which sets the card to be as wide as its container.
  - `eventDetails` becomes `dateExtra`
  - `imageAlt` is moved to `image.alt`
  - `loading` is moved to `image.loading`

  The following options for the Card's `type` setting have changed as follows:

  - `graphic` becomes `text`
  - `graphicpromo` becomes `promo`

### Patch Changes

- ee2889916: Cards are not clickable if they are passed a cta prop, only the cta is clickable
- 8b12345cb: Remove alignment prop from Card component, which didn't do anything
- ba46a3a7d: Create new picture component to be used internally where responsive images are needed without captions.
- 8b12345cb: In Card, change cornercut options to be boolean `true` or `false`
- Updated dependencies [ba46a3a7d]
- Updated dependencies [bdeca8720]
- Updated dependencies [bbd9262d1]
- Updated dependencies [ee14cd3d3]
- Updated dependencies [b56d55cfd]
- Updated dependencies [5022dfc4c]
- Updated dependencies [bacc0bba7]
- Updated dependencies [ba46a3a7d]
- Updated dependencies [652966ab7]
  - @ilo-org/styles@0.7.0

## 0.7.0

### Minor Changes

- c0648530f: Accordion items can now be made scrollable by passing `scroll: true` to the Accordion Panel component.
- d3c276e92: Add LogoGrid component which shows a list of logos with an optional link

### Patch Changes

- Updated dependencies [c0648530f]
- Updated dependencies [0dc9a8538]
  - @ilo-org/styles@0.6.0

## 0.6.0

### Minor Changes

- 0f45a7aae: Add new social media component and use in hero card and footer components

### Patch Changes

- Updated dependencies [0f45a7aae]
- Updated dependencies [0f45a7aae]
- Updated dependencies [0f45a7aae]
- Updated dependencies [0f45a7aae]
- Updated dependencies [2f6b0e73f]
  - @ilo-org/themes@0.2.0
  - @ilo-org/icons@0.2.1
  - @ilo-org/styles@0.5.0

## 0.5.0

### Minor Changes

- e74f529ac: Refactor hero and hero card component. Expose layout and style options more explicitly and remove parameters and classes that refer to specific template names which could change.
- cc4fe4ba6: In the Callout component, use the Button component so it can take a url and act as a link

### Patch Changes

- bb9180a14: In hero, make sure breadcrumb is not null and not empty or it could render unintentionally
- Updated dependencies [5df0bb1a9]
- Updated dependencies [51b4be31a]
- Updated dependencies [6a7dbe609]
- Updated dependencies [b498c19c4]
  - @ilo-org/icons@0.2.0
  - @ilo-org/themes@0.1.16
  - @ilo-org/styles@0.4.0

## 0.4.1

### Patch Changes

- 7cb5e74da: Add attributes to videoplayer missing.
- 2c843d726: Delete source tag duplicated.

## 0.4.0

### Minor Changes

- 36f5da68a: In responsive images, allow the breakpoint property to take either a string containing a media query or a number that will indicate the minimum width of the viewport at which the image should be displayed.

### Patch Changes

- 11801070b: Change request for videojs player to be able to work with Youtube videos.
- 1692a67dc: Remove needless console.logs
- bbfa1d9b9: Add Alt and loading card variables on cardgroup template.
- 1b942833b: Remove max-width for the video component. Not needed.
- Updated dependencies [11801070b]
- Updated dependencies [1b942833b]
  - @ilo-org/styles@0.3.5

## 0.3.1

### Patch Changes

- Updated dependencies [ee2e53f51]
  - @ilo-org/styles@0.3.4

## 0.3.0

### Minor Changes

- ee859111c: Add support for reponsive images in the Card component. The `image` field can take either a string (for a non-responsive image) or an array of objects with an `src` and `breakpoint` property. The `image` field of the card now works the same way as the `url` field of the Image component. This also adds an `imageAlt` field that applies a describe alt tag to the image.

### Patch Changes

- ee859111c: Fixes bug where touch events on the mobile open/close buttons inadvertantly activated the logo link. Also correctly hides the mobile nav when it's closed so it doesn't show up in the tab order and can't be clicked.
- Updated dependencies [ee859111c]
- Updated dependencies [ee859111c]
- Updated dependencies [ee859111c]
  - @ilo-org/styles@0.3.3

## 0.2.26

### Patch Changes

- 4dd7f57a5: Add an if statement to all Drupal.behaviors to avoid calling js functions more than once.
- 44ff8b6db: Add responsive image structure to card images. Add loading attribute for card images and image component.

## 0.2.25

### Patch Changes

- 48900c9ac: Add an if statement to all Drupal.behaviors to avoid calling js functions more than once.

## 0.2.24

### Patch Changes

- 55e5c479e: Add a check to only run the accordion function once in Drupal.

## 0.2.23

### Patch Changes

- 3134bcadf: Add blocks to wrap pictures in card component

## 0.2.22

### Patch Changes

- 31f3c3790: Added a block to wrap the image on the Hero component. That allows Drupal to include responsive images.

## 0.2.21

### Patch Changes

- Updated dependencies [be8262383]
- Updated dependencies [be8262383]
- Updated dependencies [36960e383]
  - @ilo-org/styles@0.3.2
  - @ilo-org/brand-assets@0.1.0
  - @ilo-org/utils@0.0.11
  - @ilo-org/icons@0.1.17

## 0.2.20

### Patch Changes

- Updated dependencies [e5c100219]
  - @ilo-org/styles@0.3.1

## 0.2.19

### Patch Changes

- Updated dependencies [8bc52db6e]
  - @ilo-org/styles@0.3.0

## 0.2.18

### Patch Changes

- Updated dependencies [bac3cc9d5]
  - @ilo-org/styles@0.2.1

## 0.2.17

### Patch Changes

- 2aa1f1cc6: enable profile to be themeable and address a few minor style issues
- Updated dependencies [2aa1f1cc6]
- Updated dependencies [2aa1f1cc6]
- Updated dependencies [c24a5f721]
  - @ilo-org/styles@0.2.0

## 0.2.16

### Patch Changes

- 9da85065a: Remove unneeded props and markup from localnav

## 0.2.15

### Patch Changes

- d55e975ca: Add homepage to package.json

## 0.2.14

### Patch Changes

- Updated dependencies [1405b9cbf]
  - @ilo-org/styles@0.1.19

## 0.2.13

### Patch Changes

- 7a09aa23c: Fix minor linting errors throughout
- 7a09aa23c: Update twig storybook deps
- Updated dependencies [2f60e9d92]
- Updated dependencies [c9413b943]
  - @ilo-org/styles@0.1.18
  - @ilo-org/brand-assets@0.1.0
  - @ilo-org/utils@0.0.11

## 0.2.12

### Patch Changes

- Updated dependencies [391687e3e]
  - @ilo-org/fonts@0.1.0
  - @ilo-org/styles@0.1.17

## 0.2.11

### Patch Changes

- @ilo-org/icons@0.1.16
- @ilo-org/styles@0.1.16

## 0.2.10

### Patch Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.
- Updated dependencies [8e24e57fc]
  - @ilo-org/styles@0.1.15
  - @ilo-org/themes@0.1.15
  - @ilo-org/fonts@0.0.7
  - @ilo-org/icons@0.1.15
  - @ilo-org/utils@0.0.11

## 0.2.9

### Patch Changes

- 414f75fca: Fix issue where CardGroup used the wrong size button
- e53bad307: enable hero to use title attribute instead of credit component
- b48b386b8: Local nav color for the background is a setting now
- Updated dependencies [b48b386b8]
  - @ilo-org/fonts@0.0.6
  - @ilo-org/icons@0.1.14
  - @ilo-org/styles@0.1.14
  - @ilo-org/themes@0.1.14
  - @ilo-org/utils@0.0.10

## 0.2.8

### Patch Changes

- 62c3c624e: Bugfixes in multiple components
- 1b29018f0: Adds better React Storybook experience
- 43c2b0026: Cornercut changes to make more consistent across sizes and breakpoints for hero and cards
- Updated dependencies [62c3c624e]
- Updated dependencies [1b29018f0]
- Updated dependencies [43c2b0026]
  - @ilo-org/fonts@0.0.5
  - @ilo-org/icons@0.1.13
  - @ilo-org/styles@0.1.13
  - @ilo-org/themes@0.1.13
  - @ilo-org/utils@0.0.9

## 0.2.7

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
  - @ilo-org/styles@0.1.12
  - @ilo-org/themes@0.1.12
  - @ilo-org/utils@0.0.8

## 0.2.6

### Patch Changes

- f7f448c65: Fixes to React radio button, SearchField, add ability to serve different langauge fonts
- f4b7bcb7f: Local nav fixes for mobile
- 0dfb90274: Patchfix for Feature card wide version
- Updated dependencies [f7f448c65]
- Updated dependencies [f4b7bcb7f]
- Updated dependencies [0dfb90274]
  - @ilo-org/fonts@0.0.3
  - @ilo-org/styles@0.1.11
  - @ilo-org/themes@0.1.11
  - @ilo-org/utils@0.0.7
  - @ilo-org/icons@0.1.11

## 0.2.5

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
- Updated dependencies [fdba39df6]
- Updated dependencies [592c40ae9]
- Updated dependencies [3005bb74c]
- Updated dependencies [b72b8aa9e]
- Updated dependencies [d7015e194]
- Updated dependencies [6ba8ee615]
  - @ilo-org/styles@0.1.10
  - @ilo-org/icons@0.1.10
  - @ilo-org/themes@0.1.10
  - @ilo-org/utils@0.0.6

## 0.2.4

### Patch Changes

- 48e7a4ada: - Hero: Breadcrumb add in
  - Cards: Video icon for feature and external link option
- 2bfdfd356: Fixes to Hero, Cards components
- Updated dependencies [48e7a4ada]
- Updated dependencies [2bfdfd356]
  - @ilo-org/icons@0.1.9
  - @ilo-org/styles@0.1.9
  - @ilo-org/themes@0.1.9
  - @ilo-org/utils@0.0.5

## 0.2.3

### Patch Changes

- 069cd8eaf: FIxes to cards
- a76395618: ESC exits out of toggle menus in the nav
- 8cd74234c: Bugfixes to Tag, Tooltip, Callout, Checkbox, LinkList
- Updated dependencies [069cd8eaf]
- Updated dependencies [a76395618]
- Updated dependencies [8cd74234c]
  - @ilo-org/styles@0.1.8
  - @ilo-org/themes@0.1.8
  - @ilo-org/icons@0.1.8
  - @ilo-org/utils@0.0.4

## 0.2.2

### Patch Changes

- 84fd6bc7d: Bugfixes with several components
- 6e470111a: Nav, Card and Hero fixes for QA
- Updated dependencies [84fd6bc7d]
- Updated dependencies [6e470111a]
  - @ilo-org/styles@0.1.7
  - @ilo-org/icons@0.1.7
  - @ilo-org/themes@0.1.7
  - @ilo-org/utils@0.0.3

## 0.2.1

### Patch Changes

- b65d5c4c1: Various bugfixes
- 487778036: CHangeset wasn't detected by github
- ab6c0a1c7: Set all packages to rely on latest fixed version of other internal packages
- d2b78bb88: Right to left for Profile component
- dd2b3ece6: YHet another changeset, perhaps something is broken with changesets
- Updated dependencies [b65d5c4c1]
- Updated dependencies [487778036]
- Updated dependencies [ab6c0a1c7]
- Updated dependencies [d2b78bb88]
- Updated dependencies [dd2b3ece6]
  - @ilo-org/icons@0.1.6
  - @ilo-org/styles@0.1.6
  - @ilo-org/utils@0.0.2
  - @ilo-org/themes@0.1.6

## 0.2.0

### Minor Changes

- 22bda9fb8: Rename tagset to Tags to match other components and work as an npm package

### Patch Changes

- a3bd6c73c: Bugfixes for Form, Loading components
- aa8469ceb: Remove testing code from hero and add RTL style for tags
- da45da834: Bugfixes in several components
- 539894a90: Hero fixes for RTL and lack of image
- Updated dependencies [a3bd6c73c]
- Updated dependencies [aa8469ceb]
- Updated dependencies [da45da834]
- Updated dependencies [539894a90]
- Updated dependencies [22bda9fb8]
  - @ilo-org/styles@0.1.5
  - @ilo-org/icons@0.1.5
  - @ilo-org/themes@0.1.5

## 0.1.4

### Patch Changes

- a8e627c45: Bugfixes in Form and Footer, and right-to-left styling for Form
- 9d25aa0e8: QA bugfixes for Nav Hero and Callout
- Updated dependencies [a8e627c45]
- Updated dependencies [9d25aa0e8]
  - @ilo-org/icons@0.1.4
  - @ilo-org/styles@0.1.4
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
  - @ilo-org/styles@0.1.3
  - @ilo-org/themes@0.1.3

## 0.1.2

### Patch Changes

- a84c36d: Navigation RTL styles and design QA
- Updated dependencies [a84c36d]
  - @ilo-org/icons@0.1.2
  - @ilo-org/styles@0.1.2
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
  - @ilo-org/styles@0.1.1
  - @ilo-org/themes@0.1.1

## 0.1.0

### Minor Changes

- 6bf0e10: Use context menu for language switcher and wingsuit setup for local nav

### Patch Changes

- Updated dependencies [6bf0e10]
  - @ilo-org/icons@0.1.0
  - @ilo-org/styles@0.1.0
  - @ilo-org/themes@0.1.0

## 0.0.3

### Patch Changes

- Updated dependencies [ab6fd1b]
- Updated dependencies [b68f6fb]
  - @ilo-org/styles@0.0.3

## 0.0.2

### Patch Changes

- b61692a: CSS should default to assuming fonts are being loaded via a server rather than by means of the monorepo
- Updated dependencies [b61692a]
  - @ilo-org/fonts@0.0.2
  - @ilo-org/styles@0.0.2
