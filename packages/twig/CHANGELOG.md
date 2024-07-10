# @ilo-org/twig

## 1.1.6

### Patch Changes

- 66a0bc4c2: CSS housekeeping for button component
- 963ca6f0b: CSS housekeeping for callout component and sync styles with design
- Updated dependencies [66a0bc4c2]
- Updated dependencies [66a0bc4c2]
- Updated dependencies [7558808c2]
- Updated dependencies [d560f1a86]
- Updated dependencies [963ca6f0b]
- Updated dependencies [7558808c2]
  - @ilo-org/styles@1.2.0
  - @ilo-org/themes@0.9.1

## 1.1.5

### Patch Changes

- Updated dependencies [97dbd5fd2]
  - @ilo-org/styles@1.1.1

## 1.1.4

### Patch Changes

- Updated dependencies [f8e19c9af]
- Updated dependencies [5af35c3e3]
  - @ilo-org/styles@1.1.0
  - @ilo-org/brand-assets@0.5.3

## 1.1.3

### Patch Changes

- Updated dependencies [201fde019]
  - @ilo-org/styles@1.0.8

## 1.1.2

### Patch Changes

- Updated dependencies [f76f43a5f]
- Updated dependencies [dd519d704]
  - @ilo-org/styles@1.0.7

## 1.1.1

### Patch Changes

- e3e9d14a5: Refactor legacy twitter social media icon with the new X icon
- a514679a8: Add new option to change size of icon in the social media component
- Updated dependencies [e3e9d14a5]
- Updated dependencies [a514679a8]
- Updated dependencies [e3e9d14a5]
- Updated dependencies [46d8998a4]
  - @ilo-org/styles@1.0.6
  - @ilo-org/icons@0.4.0
  - @ilo-org/brand-assets@0.5.2

## 1.1.0

### Minor Changes

- eea20bf9e: We have introduced the |boolval filter across several components, so that we can start using actual boolean values on fields and settings. This keeps backwards compatibility when passing "true" or "false" as strings.

## 1.0.5

### Patch Changes

- 6d4864df6: Added cypress test setup with theme container
- Updated dependencies [222e46d61]
- Updated dependencies [c80b5ea55]
  - @ilo-org/styles@1.0.5

## 1.0.4

### Patch Changes

- 607b6abb4: Small accessibility fixes to the Breadcrumb
- Updated dependencies [0c695f735]
  - @ilo-org/styles@1.0.4

## 1.0.3

### Patch Changes

- 878ce3fc0: Refactors the Breadcrumb Twig template. The `home` field will soon be deprecated, it will still work, but users should switch to passing in all of the links to the `links` field. The first `link` will be rendered as a house icon. This also fixes several accessibility issues with the Breadcrumb, including adding a `buttonlabel` prop for the context ellipsis that appears when the Breadcrumbs are collapsed.
- 680c0b71c: Change Context Menu from an unordered to an ordered list
- 7a37d7e6d: Clean up accordion styles and use standard class names
- Updated dependencies [878ce3fc0]
- Updated dependencies [7a37d7e6d]
- Updated dependencies [680c0b71c]
- Updated dependencies [7a37d7e6d]
  - @ilo-org/styles@1.0.3
  - @ilo-org/themes@0.9.0

## 1.0.2

### Patch Changes

- 389fb2e37: Fix icons not showing in tabs by using the new twig icon component
- 329e927cb: Fix long breadcrumb links not wrapping correctly on small devices
- Updated dependencies [990deb1b5]
- Updated dependencies [fdf83a353]
- Updated dependencies [329e927cb]
- Updated dependencies [ce1bd16a6]
- Updated dependencies [66a22bd35]
  - @ilo-org/styles@1.0.2
  - @ilo-org/fonts@0.2.2

## 1.0.1

### Patch Changes

- 1dc0d22d1: added defensive checks for the modal and navigation components
- Updated dependencies [5e1e3bc22]
- Updated dependencies [597e7cc74]
- Updated dependencies [7bc83b731]
  - @ilo-org/styles@1.0.1

## 1.0.0

### Major Changes

- 1a5f3b3a0: 🎉 Version 1 Release

### Minor Changes

- 86850a6b7: Address accessibility issues with the heading order of cards by changing the default element used to render the title from an `<h3>` to `<p>`. Additionaly add an optional prop that allows for configuration of the title element if needed.

### Patch Changes

- 7165c322e: Fix tab navigation order and accessibility issues in navigation component
- Updated dependencies [86850a6b7]
- Updated dependencies [1a5f3b3a0]
- Updated dependencies [7165c322e]
  - @ilo-org/styles@1.0.0

## 0.18.0

### Minor Changes

- eb68f11b6: Field "id" was renamed to "elementId" on "tag" and "list" components. This was necessary since "id" is a reserved Drupal word. This also impacts the "tags" component, since it includes several "tag"s.

### Patch Changes

- eb68f11b6: Add missing labels and namespace on component definitions.
- 50e299b79: Make sure subcomponents are exported from the same directory as components

## 0.17.1

### Patch Changes

- f1f08712a: Re-set files field in package.json of the package rather than at the monorepo root
- Updated dependencies [f1f08712a]
  - @ilo-org/brand-assets@0.5.1
  - @ilo-org/fonts@0.2.1
  - @ilo-org/icons@0.3.1
  - @ilo-org/styles@0.16.1
  - @ilo-org/themes@0.8.1
  - @ilo-org/utils@0.1.1

## 0.17.0

### Minor Changes

- 62ac366e3: Started publishing bundled js and compiled css for each component to npm
- 977e15006: Fixes a bug where some distribution assets weren't getting included in Design System packages while a lot of non-essential development assets were. At the same time, this removes some `src` directories from the packages which some consumers might have been using.
- 7728f1f64: Fix Wingsuit definition making sure that they can be properly read by an actual Drupal site. Also, remove excessive use of "|raw".
- d3bc4af8f: Fixed the substitution of the prefix

### Patch Changes

- 8e6c502a7: Fixes some layout issues in List that caused parts of the list item numbers to get chopped off in ordered lists when they were rendered in containers with hidden overflow, as well as some incorrect rendering in RTL layouts.
- 977e15006: Refactor of how Twig outputs templates and bundles JavaScript for components
- 83c0b3682: Add styling to links in breadcrumb
- 24957c9f5: added home screen
- Updated dependencies [3ceaceaa3]
- Updated dependencies [13bcd92df]
- Updated dependencies [8e6c502a7]
- Updated dependencies [f5a78ab73]
- Updated dependencies [d0a08d7c3]
- Updated dependencies [977e15006]
  - @ilo-org/styles@0.16.0
  - @ilo-org/brand-assets@0.5.0
  - @ilo-org/fonts@0.2.0
  - @ilo-org/icons@0.3.0
  - @ilo-org/themes@0.8.0
  - @ilo-org/utils@0.1.0

## 0.16.3

### Patch Changes

- 9a326f047: fixed accordion a11y
- 77fbf565d: Fix lighthouse accessibility audit error of tabs attributes not matching their roles
- 10dadfad7: Fix design bug in pagination for rtl
- Updated dependencies [7e1460a88]
- Updated dependencies [10dadfad7]
- Updated dependencies [5bc989f5d]
  - @ilo-org/styles@0.15.0

## 0.16.2

### Patch Changes

- 4ed63c1a1: Fix bug in Multilink Card that prevented `alignment` property from being applied was size was set to `fluid`.
- Updated dependencies [94c28eae7]
  - @ilo-org/styles@0.14.2

## 0.16.1

### Patch Changes

- Updated dependencies [d44ee1021]
- Updated dependencies [be59e9c1f]
  - @ilo-org/styles@0.14.1
  - @ilo-org/themes@0.7.2

## 0.16.0

### Minor Changes

- 138890e7a: implemented new icon component

### Patch Changes

- ac23bf484: Add clear button to search input field
- fd26dbafc: Enable Button to use newly refactored Icon component
- db2ecaf48: Correct the way the Table of Contents passes properties to the Open and Close buttons.
- Updated dependencies [ac23bf484]
- Updated dependencies [1b9c54f99]
- Updated dependencies [138890e7a]
  - @ilo-org/styles@0.14.0

## 0.15.0

### Minor Changes

- 4153f99b5: Removed black bars from youtube ebedded video
- 1ed3123ae: Re-implemented video.js styles

### Patch Changes

- 9bf73c7bd: Fix lists containing other elements than li items to improve accessibility
- a3c872512: separated labels for breadcrumbs
- 056754038: Revise and refactor color names with the same values and remove duplicates and replace where it was used
- e1000fbbd: added legacy classname for react video component
- Updated dependencies [4153f99b5]
- Updated dependencies [c8de2b695]
- Updated dependencies [7472dd625]
- Updated dependencies [b3298a267]
- Updated dependencies [bf4432d7c]
- Updated dependencies [1ed3123ae]
- Updated dependencies [f76a35fdc]
- Updated dependencies [a3c872512]
- Updated dependencies [056754038]
- Updated dependencies [4bbac5457]
- Updated dependencies [e1000fbbd]
- Updated dependencies [ac58b53d2]
- Updated dependencies [51b20d4aa]
- Updated dependencies [5a1e32f8e]
- Updated dependencies [52eeae214]
- Updated dependencies [709675b79]
  - @ilo-org/styles@0.13.3
  - @ilo-org/brand-assets@0.4.0
  - @ilo-org/themes@0.7.1

## 0.14.6

### Patch Changes

- Updated dependencies [2f7fe6c69]
  - @ilo-org/brand-assets@0.3.1

## 0.14.5

### Patch Changes

- Updated dependencies [dcb36eeef]
  - @ilo-org/brand-assets@0.3.0

## 0.14.4

### Patch Changes

- f557eb372: breadcrumbs: added check for context items

## 0.14.3

### Patch Changes

- ba3fdf8fc: Update how the breakpoints are set on the Hero twig component.
- fb6b65ec3: Fix alignment value to be used from cardgroup and passed on to the card
- e077aa740: Add a condition to check the breakpoint value.
- 67ac66a79: Refactor option label to be a child component instead of an attribute to improve screen reader experience
- e34e17292: Add optional name paramater that will pass a string to the button element's underlying name attribute
- d74d0161f: Refactor card heading from h5 to h3 to ensure headings are in sequential order to improve accessibility
- d0e3e8c87: Add optional string modalLabel parameter to be used as aria-label attribute in modal
- 261413766: Add block to wrap label, as required in Drupal development.
- 1ddab579a: Refactor tab role to be in the proper child element in tabs so that they peform their intended accessibility functions
- Updated dependencies [16dea2974]
- Updated dependencies [0d0341a3c]
  - @ilo-org/styles@0.13.2

## 0.14.2

### Patch Changes

- d67dc414b: Don't show language selector in Nav if no links are passed to the Language Context Menu
- Updated dependencies [08a2141cc]
- Updated dependencies [dea2d0a07]
  - @ilo-org/styles@0.13.1

## 0.14.1

### Patch Changes

- 9d79b2a6f: Modify tooltip label and icon condition
- 1e6365385: Add popperjs as a dependency in twig instead of as a dev dependency

## 0.14.0

### Minor Changes

- df7080c80: Used popper library to handle tooltip
- 6fe60e0d6: Add a `gap` setting to the hero card that allows the developer to set an optional background color on the entire Hero,
  which fills the "gap" between the bottom of the Hero Card and the bottom of the hero image when `align` is set to `bottom` or `baseline`. Options are `transparent`, `white`, `light` and `dark`.

### Patch Changes

- b014e9af0: Fix Breadcrumb incorrectly assuming there will always be at least two links
- c54ce9923: Fix Breadcrumb spacing vis-a-vis Hero
- a78b32be4: Add eyebrow to multilink card
- 9ed7b873d: build(deps-dev): bump postcss from 8.4.21 to 8.4.31
- Updated dependencies [df7080c80]
- Updated dependencies [c5eaabd55]
- Updated dependencies [720825342]
- Updated dependencies [6f86e7a94]
- Updated dependencies [94b03b9be]
- Updated dependencies [c54ce9923]
- Updated dependencies [6fe60e0d6]
- Updated dependencies [9ed7b873d]
- Updated dependencies [c173ec9f8]
  - @ilo-org/styles@0.13.0

## 0.13.0

### Minor Changes

- 55f0c47aa: Added chained hover effect for video play button
- 39e6bab1f: Implemented functionality for external links to open in new browser tab

### Patch Changes

- cf4d43446: added hover effect for anchor item inside indented linked list
- 3be0a12ac: reduced padding for accordion inner panel
- ca463b9b7: added full width on mobile viewport for affected cards
- 5df8f748a: fixed text input invalid state
- ee17a3bd2: Top spacing should be removed in hero card when there is no image
- cfba6422c: Make sure Breadcrumb shows first link when condensed with ellipses
- 5ad95a48f: Remove link from multicard when its not available
- Updated dependencies [ed548bcfc]
- Updated dependencies [4522e79de]
- Updated dependencies [bf1ec0843]
- Updated dependencies [34c8c9a8f]
- Updated dependencies [05a5a4b84]
- Updated dependencies [ccdb35c99]
- Updated dependencies [cf4d43446]
- Updated dependencies [e8cec8dfc]
- Updated dependencies [045602383]
- Updated dependencies [5e051fc7a]
- Updated dependencies [d74847eff]
- Updated dependencies [b04dd21bb]
- Updated dependencies [060748c0f]
- Updated dependencies [ff62947c3]
- Updated dependencies [02a0e177e]
- Updated dependencies [a010a5077]
- Updated dependencies [9b960abc2]
- Updated dependencies [55f0c47aa]
- Updated dependencies [30b275924]
- Updated dependencies [690efdabb]
- Updated dependencies [e48c3cdbd]
- Updated dependencies [01c4126c2]
- Updated dependencies [309733cdd]
- Updated dependencies [2b02101ef]
- Updated dependencies [4a5afb00e]
- Updated dependencies [aa4dce006]
- Updated dependencies [1794fc434]
- Updated dependencies [c885bf0cd]
- Updated dependencies [ea4ac05ea]
- Updated dependencies [3be0a12ac]
- Updated dependencies [f0dbaa608]
- Updated dependencies [b976f7221]
- Updated dependencies [ca463b9b7]
- Updated dependencies [6d089ba7f]
- Updated dependencies [ec4cec224]
- Updated dependencies [a8ce5d3fc]
- Updated dependencies [bec744d2e]
- Updated dependencies [6be769d3f]
- Updated dependencies [5df8f748a]
- Updated dependencies [ee17a3bd2]
- Updated dependencies [cfba6422c]
- Updated dependencies [03d0b6549]
- Updated dependencies [b972abe2e]
- Updated dependencies [1e58f9c7d]
- Updated dependencies [f0e5b51b9]
- Updated dependencies [76db527a0]
- Updated dependencies [70c645779]
- Updated dependencies [86189a0d7]
  - @ilo-org/styles@0.12.0
  - @ilo-org/themes@0.7.0

## 0.12.2

### Patch Changes

- 9b1d93031: Fix various styling issues with the Profile.
- 7dedac6dd: Fix Callout styles
- 1c65834a5: Change hero card date position
- 8d912f712: Make the accordion function properly inside a modal window. This also smoothens animations and simplifies the accordion styles.
- bd6fcbb9d: In Navigation, fix bug where clicking inside the Search Box would then close it immediately. This also fixes a similar issue in the context menu.
- 50ed7febf: Align source to the bottom of Stat Cards
- 44e42762f: fixed input border-radius on iOS Safari
- Updated dependencies [9b1d93031]
- Updated dependencies [1f7525b0d]
- Updated dependencies [632a16fcf]
- Updated dependencies [b8e8265ce]
- Updated dependencies [7dedac6dd]
- Updated dependencies [8d912f712]
- Updated dependencies [50ed7febf]
- Updated dependencies [44e42762f]
  - @ilo-org/styles@0.11.2
  - @ilo-org/fonts@0.1.2

## 0.12.1

### Patch Changes

- Updated dependencies [78f48eff5]
- Updated dependencies [03b3c26e4]
  - @ilo-org/fonts@0.1.1
  - @ilo-org/styles@0.11.1

## 0.12.0

### Minor Changes

- b7fcf3426: Data Card dataset field takes an optional `cta` argument that renders a list of secondary buttons with possible headline

### Patch Changes

- Updated dependencies [b7fcf3426]
- Updated dependencies [27624a076]
  - @ilo-org/styles@0.11.0

## 0.11.5

### Patch Changes

- 1a6d0671f: Align Hero Card content with main body content when `justify` is set to `start` or `offset`
- Updated dependencies [266671491]
- Updated dependencies [244fae9db]
- Updated dependencies [1a6d0671f]
- Updated dependencies [371faf0fb]
  - @ilo-org/styles@0.10.6

## 0.11.4

### Patch Changes

- Updated dependencies [2c4331403]
  - @ilo-org/styles@0.10.5
  - @ilo-org/themes@0.6.1

## 0.11.3

### Patch Changes

- Updated dependencies [477ccf7c0]
  - @ilo-org/styles@0.10.4

## 0.11.2

### Patch Changes

- Updated dependencies [0e2e0a039]
  - @ilo-org/styles@0.10.3

## 0.11.1

### Patch Changes

- 515502c24: The Hero component accepts top level `theme` and `background` variables that it will pass to the card. Otherwise, it's still possible to pass them directly to the card on an object with all of the other card properties.
- 7c5bb7bed: Update Hero to insert standard hero card offset so as to align it with content in the main content container
- Updated dependencies [ee517d0f2]
- Updated dependencies [71002bcde]
- Updated dependencies [703bc66a6]
- Updated dependencies [ad52c6442]
- Updated dependencies [9be1cd23e]
  - @ilo-org/styles@0.10.2
  - @ilo-org/themes@0.6.0

## 0.11.0

### Minor Changes

- 455e1b626: Add Radio as form element
- 41f933135: Adds File Upload as form element
- 4f439c1bf: Add Number Picker as form element
- b7e6cda36: Add TextArea as form element
- 2acffbd2e: Add Toggle as form element

### Patch Changes

- bd5919f50: Setting formControlClass as a variable with the default value at the begining of the template.
- a43230b26: Add blocks to override with Drupal search block on the navigation.
- c86fa4f33: Fix tooltip icon appearing in the wrong color. This adds a new parameter `icontheme` for the tooltip, which defaults to light.
- 86b5b118a: Set name as default id for TextInput
- Updated dependencies [c3b0e6def]
- Updated dependencies [39ff32a91]
- Updated dependencies [0488bc66e]
- Updated dependencies [c86fa4f33]
  - @ilo-org/styles@0.10.1
  - @ilo-org/themes@0.5.1

## 0.10.5

### Patch Changes

- ad590b833: Use container class to set max widths and padding for Navigation
- e575c2973: Fit content in the footer inside a 1300px max-width container
- Updated dependencies [1e18e0ca9]
- Updated dependencies [ad590b833]
- Updated dependencies [6c4ebfeb3]
- Updated dependencies [e575c2973]
- Updated dependencies [e575c2973]
- Updated dependencies [73640499b]
  - @ilo-org/styles@0.10.0
  - @ilo-org/themes@0.5.0

## 0.10.4

### Patch Changes

- Updated dependencies [3290283dd]
  - @ilo-org/themes@0.4.0
  - @ilo-org/styles@0.9.2

## 0.10.3

### Patch Changes

- 260be930f: Fix the Icon component being unable to actually render icons. This was happening because the icon files generated during build were not being included in the package published to npm.

## 0.10.2

### Patch Changes

- 3661a0200: Fix bug in Button where icons appeared outside the borders of the button. This was caused by the attribute being mislabelled in the twig component preventing the correct classname from being applied.
- Updated dependencies [c0fb36a66]
  - @ilo-org/brand-assets@0.2.0

## 0.10.1

### Patch Changes

- ac70147d0: Add a block wrap the modal content so it can be overriden.

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
