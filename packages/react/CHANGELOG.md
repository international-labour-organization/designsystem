# @ilo-org/react

## 0.28.7

### Patch Changes

- Updated dependencies [1bf3be5ee]
  - @ilo-org/styles@1.11.2

## 0.28.6

### Patch Changes

- ce9a5bfb3: **Logo:** Avoid re-rendering loop when small changes to the component occur

## 0.28.5

### Patch Changes

- c764da793: **NumberPicker:** Add missing `value` prop

## 0.28.4

### Patch Changes

- Updated dependencies [385f4b98c]
  - @ilo-org/styles@1.11.1

## 0.28.3

### Patch Changes

- 159803b46: **Video:** Fix issue preventing component to work with React 18 StrictMode. More details [here](https://github.com/videojs/video.js/issues/7746)

## 0.28.2

### Patch Changes

- 22cc3cae8: **SearchField:**

  - Add `onInputChange` prop that handles events every time the user changes the input value
  - Fix layout issue affecting alignment of the SearchField with other form elements

- 06b4453dc: **Button:** Fix icon position bug when button is a link

## 0.28.1

### Patch Changes

- d1539937f: **DetailCard:** Make sure `dateExtra` gets correctly rendered

## 0.28.0

### Minor Changes

- 990a3586c: We have removed the dependecy on the `@ilo-org/themes` package, which will soon be deprecated.

### Patch Changes

- 0cc87c1e8: **Notification:** Fixed layout issues and appearance of cta
- beab2eec1: **SearchField:** Refactor to improve styling and performance
- Updated dependencies [70500d207]
- Updated dependencies [0cc87c1e8]
- Updated dependencies [beab2eec1]
- Updated dependencies [2f571182b]
  - @ilo-org/styles@1.11.0

## 0.27.1

### Patch Changes

- Updated dependencies [8e8765baa]
- Updated dependencies [69a5029d8]
  - @ilo-org/styles@1.10.2

## 0.27.0

### Minor Changes

- c5be524ab: **PhotoGallery**: We're introducing a new component for displaying collections of photos. Check it out!
- 1e6a3ddb3: **Audioplayer**: We added a new component for playing audio files. Check it out!

### Patch Changes

- d2c64b9d6: We are deprecating the `@ilo-org/utils` package. In this release, we removed the dependency from both the `@ilo-org/react` and `@ilo-org/twig` packages. If you're using `@ilo-org/utils` be aware that it won't be maintained anymore and the values and functions it exported will no longer be used by the Design System.
- Updated dependencies [3bff82092]
- Updated dependencies [dd5bce4ca]
  - @ilo-org/styles@1.10.1
  - @ilo-org/icons-react@1.0.6

## 0.26.0

### Minor Changes

- f430e7f13: **MainNav**: New navigation component that replaces the old `Navigation` one with new search functionality;
  **useClickOutside**: New hook that detects clicks outside of the passed ref and triggers the callback; also support exceptions;
- 758f543a1: **Cards:** Each card now has a loading skeleton that can be used in React.

  ```tsx
  <Card.Skeleton {...args}>
  ```

- 35a3e3113: **List**: Dynamic title level support added via `titleLevel` variable (defaults to `h2`).
  **LinkList**: Dynamic title level support added via `titleLevel` variable (defaults to `h3`).
  **SocialMedia**: Dynamic title level support added via `titleLevel` variable (defaults to `h5`).

### Patch Changes

- bf9ae68f5: **Hero:** Fix issue that prevented responsive images from rendering correctly
- a615f018e: **ContextMenu**: FocusTrap support added
  **MainNav**: Improved a11y and focus management
  **SubsiteNav**: Improved a11y and focus management
- d9b111aac: **SocialMedia:** Add RSS to social media
- Updated dependencies [f430e7f13]
- Updated dependencies [758f543a1]
- Updated dependencies [1cfa21a41]
  - @ilo-org/styles@1.10.0
  - @ilo-org/icons-react@1.0.5

## 0.25.0

### Minor Changes

- 85599c276: An update to `@ilo-org/fonts` has changed the Arabic font from Noto Sans Arabic to Vazirmatn.

### Patch Changes

- 67780ea10: Fixed the display of image credit and added theme support to Image component
  **Image:** Fixed image caption and implemented theme support
- a268f06b7: **Dropdown:** fixed value not updating after initial render
- c150ba6e0: **Detail Card:** RTL arrow support
- b3fca61cd: **Search Field:** fixed label layout
- Updated dependencies [85599c276]
- Updated dependencies [e90383924]
- Updated dependencies [a59bbc896]
- Updated dependencies [3d05543f8]
- Updated dependencies [67780ea10]
- Updated dependencies [85599c276]
- Updated dependencies [4b4bee4e3]
- Updated dependencies [18ac64c26]
- Updated dependencies [6f2fdf93a]
- Updated dependencies [fc7bb0652]
- Updated dependencies [210c25d7d]
  - @ilo-org/fonts@2.0.0
  - @ilo-org/styles@1.9.0
  - @ilo-org/icons-react@1.0.4

## 0.24.6

### Patch Changes

- 4702ebfaf: **Tabs:** Allow `activeTab` to be programatically set via props

## 0.24.5

### Patch Changes

- 918c826cc: **CardGroup:** Add support for `ScoreCard`
- Updated dependencies [c306f6922]
- Updated dependencies [bfb0fdac3]
  - @ilo-org/brand-assets@1.0.1
  - @ilo-org/styles@1.8.5

## 0.24.4

### Patch Changes

- f0f6468df: **Loading:** Update styles and add `dark` theme
- Updated dependencies [366192cd7]
- Updated dependencies [f0f6468df]
  - @ilo-org/styles@1.8.4

## 0.24.3

### Patch Changes

- 6e347beac: **Status:**

  - Correctly export from library
  - `content` prop accepts `React.ReactNode` as well as string

- Updated dependencies [698e54099]
  - @ilo-org/styles@1.8.3

## 0.24.2

### Patch Changes

- 746eff08a: **Link:** Align styles with designs and fix appearance in `dark` theme.
- Updated dependencies [746eff08a]
  - @ilo-org/styles@1.8.2

## 0.24.1

### Patch Changes

- 2df830ce5: **Form:** Form component has `theme` prop which controls the `theme` value for all of its children. `theme` can still be set for individual form elements, but only when they're not rendered as children of `Form`, which will otherwise override their settings. Default setting for `theme` is `light`.
- 3e34c62e8: **DetailCard:** Show icon with details. Make sure `details` and `date` can't both be rendered.
- bae6e5b67: **RichText:** Add basic support for `dark` theme
- 336c02945: **Breadcrumb:** Enable `dark` theme
- 6c671d7c8: **Pagination:** Correctly supports `dark` theme
- 5c9d4fba8: **FeatureCard:** `linklist` appears beneath the rest of card when `size` is `fluid` or `wide`.
- Updated dependencies [bae6e5b67]
- Updated dependencies [09698a437]
- Updated dependencies [2ec653271]
- Updated dependencies [cf345502b]
- Updated dependencies [336c02945]
- Updated dependencies [6c671d7c8]
- Updated dependencies [9b681708e]
  - @ilo-org/styles@1.8.1

## 0.24.0

### Minor Changes

- 4a718ea43: **SubsiteNav:** Shows the subsite logo as a single image rather than rendering the subbrand name separately from the logo image.

### Patch Changes

- Updated dependencies [aac20fcb0]
- Updated dependencies [1bc3951da]
- Updated dependencies [a54793235]
- Updated dependencies [aac20fcb0]
  - @ilo-org/styles@1.8.0

## 0.23.4

### Patch Changes

- 20d48f5a3: **Callout:** Fix unreadable background color and some other minor issues
- Updated dependencies [20d48f5a3]
  - @ilo-org/styles@1.7.3

## 0.23.3

### Patch Changes

- 21fcdebb2: **DetailCard:** Add an option to swap the link component
  **ScoreCard:** Add an option to swap the link component

## 0.23.2

### Patch Changes

- 14dad84ee: **Tab:** Default value for the active tab
- 1bc5f9674: **ScoreCard:** Add `ReactNode` support
  **MultilinkCard::** Add `ReactNode` support
- Updated dependencies [264a5ebf3]
- Updated dependencies [2f7dab95a]
- Updated dependencies [3041e7607]
- Updated dependencies [b648f80f5]
- Updated dependencies [6366c87e6]
- Updated dependencies [8069f6fbd]
  - @ilo-org/styles@1.7.2

## 0.23.1

### Patch Changes

- Updated dependencies [a50d0ad83]
  - @ilo-org/styles@1.7.1

## 0.23.0

### Minor Changes

- a748e1247: **Tabs:** Now supports `dark` theme

### Patch Changes

- 05cf5839d: **TextInput:** Gets value prop
- 92d199971: - **LinkList:** Change width
  - **Button:** Add submit prop
  - **DataCard:** Can receive `copy` as ReactNode
  - **Dropdown:** Can receive default value
  - **Tabs:** Can receive custom `className`
- 88fd21e2b: **Profile:** Add chevron to link and make some accessibility improvements.
- Updated dependencies [92d199971]
- Updated dependencies [a748e1247]
- Updated dependencies [105d40f7a]
  - @ilo-org/styles@1.7.0

## 0.22.2

### Patch Changes

- 6082b9eae: minor adjustments for the SSR support
- Updated dependencies [6082b9eae]
  - @ilo-org/styles@1.6.2

## 0.22.1

### Patch Changes

- Updated dependencies [a0af0f6bf]
  - @ilo-org/styles@1.6.1

## 0.22.0

### Minor Changes

- a3e986077: **Status:** Adding new `<Status />` component to show the state of changing content
- c3539921d: **Picture:** Add new Picture component for responsive general purpose responsive images
- c8ade62a5: **Button**

  - Replace `icon.position` prop with `iconPosition`
  - Replace `icon.only` with `iconOnly`
  - `icon` now passess all props to the underlying `<Icon />` component
  - Make sure the `icon` renders in the correct position vis-a-vis the label

- 798931969: **ScoreCard:** Introducing the `<ScoreCard />` component which shows information about content that changes over time

### Patch Changes

- f17d74482: **Cards:** Remove needless class
- 6fc248b22: **Icon**

  - Add a `color` prop to the Icon so it can be styled correctly
  - Add `className` and `id` props in case those are needed
  - Correctly type the accepted values for Icon sizes
  - Add Icon documentation to Storybook

- Updated dependencies [5da6ec816]
- Updated dependencies [1f1160f94]
- Updated dependencies [ea11b2f23]
- Updated dependencies [99a2429bb]
- Updated dependencies [a2e0e1498]
- Updated dependencies [1f1160f94]
- Updated dependencies [c69acd279]
- Updated dependencies [177e8adce]
- Updated dependencies [274984e76]
- Updated dependencies [525322e47]
- Updated dependencies [584d975a2]
  - @ilo-org/styles@1.6.0

## 0.21.0

### Minor Changes

- 1d9596ea3: **SubsiteNav**: A brand new component to handle the various navigation use cases, with two `compact` and `complex` modes. It replaces the old `LocalNav` component.
  **ContextMenu**: Now supports rendering into a react portal
  **LocalNav**: Deprecated in favor of `SubsiteNav`

### Patch Changes

- 2d975de9f: **LanguageToggle:** Fixes some accessibility issues
- 6bbd8004c: **DataCard:** Can only have two columns if size is set to `wide` or `fluid`
- Updated dependencies [1f428b504]
- Updated dependencies [1d9596ea3]
- Updated dependencies [9fdfb26cf]
  - @ilo-org/styles@1.5.0

## 0.20.0

### Minor Changes

- 86555c6a6: **Blockquote:** Creates a new standalone component for the Blockquote which was already available as a styled element in **Richtext** but can now be used separately on its own.
- 2e8b79155: synced the part of react components with twig
- 7d41bcb13: **LanguageToggler:** A new stand-alone component for setting languages

### Patch Changes

- 758dcc8db: **SocialMedia:** Add icons for Bluesky, Weibo and WeChat
- Updated dependencies [4084b9adc]
- Updated dependencies [67995d20c]
- Updated dependencies [47f56d71f]
- Updated dependencies [74929064d]
- Updated dependencies [7d41bcb13]
- Updated dependencies [16e30c518]
  - @ilo-org/styles@1.4.0
  - @ilo-org/icons-react@1.0.3

## 0.19.0

### Minor Changes

- bd2986c8b: reimplemented an Accordion component
- b45c8d190: restructured the context menu component
- bd100f9c2: restructured the breadcrumb component
- 7617ebf01: resturctued SocialMedia, Hero, HeroCard and Tooltip components

### Patch Changes

- Updated dependencies [46abf411f]
- Updated dependencies [2bd377203]
- Updated dependencies [2bd377203]
- Updated dependencies [19d169619]
  - @ilo-org/styles@1.3.4

## 0.18.5

### Patch Changes

- a0242e580: removed broken types
- Updated dependencies [7f86da271]
- Updated dependencies [8c8bc2bd3]
- Updated dependencies [41117516c]
- Updated dependencies [75e30e1b0]
  - @ilo-org/styles@1.3.3

## 0.18.4

### Patch Changes

- Updated dependencies [76d200189]
  - @ilo-org/styles@1.3.2

## 0.18.3

### Patch Changes

- Updated dependencies [eac2922b5]
  - @ilo-org/styles@1.3.1

## 0.18.2

### Patch Changes

- 058345637: - Replaces all of the icons in the Icons package and replaces them with standardised versions that are all the same size, with the minor exception of the `Quote` icon. This required sizing changes to icons and affects the appearance of many components.
  - Pattern definitions for `modal` and `tabs` were adjusted to use the new icon settings.
- Updated dependencies [058345637]
- Updated dependencies [57715d1ce]
  - @ilo-org/styles@1.3.0
  - @ilo-org/icons-react@1.0.2

## 0.18.1

### Patch Changes

- Updated dependencies [340494e61]
- Updated dependencies [340494e61]
  - @ilo-org/styles@1.2.3
  - @ilo-org/brand-assets@1.0.0
  - @ilo-org/utils@0.1.1
  - @ilo-org/icons-react@1.0.1

## 0.18.0

### Minor Changes

- e631a897f: Introduced a new export system, which allows you to import components, hooks and styles from the library in a more convenient way.

  - `@ilo-org/react/styles` is reserved for the exported styles

  ```jsx
  ...
  import "@ilo-org/react/styles/global.css";
  import "@ilo-org/react/styles/index.css";
  ```

  - `@ilo-org/react` exports all components and hooks

  ```jsx
  import { Loading, Button, useGlobalSettings } from "@ilo-org/react";
  ```

  Also react version is updated to 18

## 0.17.8

### Patch Changes

- 2c2813c0a: Make image optional in multilink card
- bc007770d: Refactor cardgroup to use button component for cta instead of using button css classes
- Updated dependencies [2c2813c0a]
- Updated dependencies [e6d93b5ab]
  - @ilo-org/styles@1.2.2
  - @ilo-org/icons-react@1.0.1

## 0.17.7

### Patch Changes

- 33e6e5661: Refactor the Navigation component to automatically focus the Search Input field when the Search button is clicked.
- Updated dependencies [72159bb1a]
  - @ilo-org/brand-assets@1.0.0
  - @ilo-org/fonts@1.0.0
  - @ilo-org/icons-react@1.0.0
  - @ilo-org/styles@1.2.1

## 0.17.6

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

## 0.17.5

### Patch Changes

- Updated dependencies [97dbd5fd2]
  - @ilo-org/styles@1.1.1

## 0.17.4

### Patch Changes

- Updated dependencies [f8e19c9af]
- Updated dependencies [5af35c3e3]
  - @ilo-org/styles@1.1.0
  - @ilo-org/brand-assets@0.5.3

## 0.17.3

### Patch Changes

- Updated dependencies [201fde019]
  - @ilo-org/styles@1.0.8

## 0.17.2

### Patch Changes

- Updated dependencies [f76f43a5f]
- Updated dependencies [dd519d704]
  - @ilo-org/styles@1.0.7

## 0.17.1

### Patch Changes

- e3e9d14a5: Refactor legacy twitter social media icon with the new X icon
- a514679a8: Add new option to change size of icon in the social media component
- Updated dependencies [e3e9d14a5]
- Updated dependencies [a514679a8]
- Updated dependencies [46d8998a4]
  - @ilo-org/styles@1.0.6
  - @ilo-org/brand-assets@0.5.2
  - @ilo-org/icons-react@0.1.2

## 0.17.0

### Minor Changes

- f127ae16e: Aligns the Breadcrumb component with the Twig implementation which also fixes several accessibility issues.

## 0.16.4

### Patch Changes

- Updated dependencies [222e46d61]
- Updated dependencies [c80b5ea55]
  - @ilo-org/styles@1.0.5

## 0.16.3

### Patch Changes

- Updated dependencies [0c695f735]
  - @ilo-org/styles@1.0.4

## 0.16.2

### Patch Changes

- Updated dependencies [878ce3fc0]
- Updated dependencies [7a37d7e6d]
- Updated dependencies [680c0b71c]
- Updated dependencies [7a37d7e6d]
  - @ilo-org/styles@1.0.3
  - @ilo-org/themes@0.9.0

## 0.16.1

### Patch Changes

- Updated dependencies [990deb1b5]
- Updated dependencies [fdf83a353]
- Updated dependencies [329e927cb]
- Updated dependencies [ce1bd16a6]
- Updated dependencies [66a22bd35]
  - @ilo-org/styles@1.0.2
  - @ilo-org/fonts@0.2.2

## 0.16.0

### Minor Changes

- 80fcce82c: Started exporting CSS files from the styles package in the react package

### Patch Changes

- Updated dependencies [5e1e3bc22]
- Updated dependencies [597e7cc74]
- Updated dependencies [7bc83b731]
  - @ilo-org/styles@1.0.1

## 0.15.0

### Minor Changes

- 86850a6b7: Address accessibility issues with the heading order of cards by changing the default element used to render the title from an `<h3>` to `<p>`. Additionaly add an optional prop that allows for configuration of the title element if needed.

### Patch Changes

- 0606bc8b6: Sync cardgroup control options with twig and update the layout to facilitate the options. Additionaly update the cardgroup args data and props
- 7165c322e: Fix tab navigation order and accessibility issues in navigation component
- 600c568f7: removed legacy video player hook
- Updated dependencies [86850a6b7]
- Updated dependencies [1a5f3b3a0]
- Updated dependencies [7165c322e]
  - @ilo-org/styles@1.0.0

## 0.14.1

### Patch Changes

- f1f08712a: Re-set files field in package.json of the package rather than at the monorepo root
- Updated dependencies [f1f08712a]
  - @ilo-org/brand-assets@0.5.1
  - @ilo-org/fonts@0.2.1
  - @ilo-org/icons-react@0.1.1
  - @ilo-org/styles@0.16.1
  - @ilo-org/themes@0.8.1
  - @ilo-org/utils@0.1.1

## 0.14.0

### Minor Changes

- 977e15006: Fixes a bug where some distribution assets weren't getting included in Design System packages while a lot of non-essential development assets were. At the same time, this removes some `src` directories from the packages which some consumers might have been using.

### Patch Changes

- 0d38e6428: Update video.js types
- f226b7be3: added home screen
- 8e6c502a7: Fixes some layout issues in List that caused parts of the list item numbers to get chopped off in ordered lists when they were rendered in containers with hidden overflow, as well as some incorrect rendering in RTL layouts.
- f5a78ab73: Fix profile hover in dark mode in text card
- 92f05c1fe: commonjs module resolution
- Updated dependencies [3ceaceaa3]
- Updated dependencies [13bcd92df]
- Updated dependencies [8e6c502a7]
- Updated dependencies [f5a78ab73]
- Updated dependencies [d0a08d7c3]
- Updated dependencies [977e15006]
  - @ilo-org/styles@0.16.0
  - @ilo-org/brand-assets@0.5.0
  - @ilo-org/fonts@0.2.0
  - @ilo-org/icons-react@0.1.0
  - @ilo-org/themes@0.8.0
  - @ilo-org/utils@0.1.0

## 0.13.0

### Minor Changes

- 16e117853: Refactor card group to fix styles and use individual card components

### Patch Changes

- de97f52fc: removed extra dirs from bundle
- 10dadfad7: Fix design bug in pagination for rtl
- 53c5be426: Sync footer and navigation markup with twig
- 65f03a82a: Fix tagline on navigation
- Updated dependencies [7e1460a88]
- Updated dependencies [10dadfad7]
- Updated dependencies [5bc989f5d]
  - @ilo-org/styles@0.15.0

## 0.12.0

### Minor Changes

- 5bb16757b: Sync cards with twig

### Patch Changes

- Updated dependencies [94c28eae7]
  - @ilo-org/styles@0.14.2

## 0.11.0

### Minor Changes

- d44ee1021: Normalized video implementation for react
- 8491bba96: Create tabs component in react

### Patch Changes

- Updated dependencies [d44ee1021]
- Updated dependencies [be59e9c1f]
  - @ilo-org/styles@0.14.1
  - @ilo-org/themes@0.7.2

## 0.10.6

### Patch Changes

- 460210518: Add clear button to search input field
- Updated dependencies [ac23bf484]
- Updated dependencies [1b9c54f99]
- Updated dependencies [138890e7a]
  - @ilo-org/styles@0.14.0

## 0.10.5

### Patch Changes

- 9bf73c7bd: Fix lists containing other elements than li items to improve accessibility
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

## 0.10.4

### Patch Changes

- Updated dependencies [2f7fe6c69]
  - @ilo-org/brand-assets@0.3.1

## 0.10.3

### Patch Changes

- Updated dependencies [dcb36eeef]
  - @ilo-org/brand-assets@0.3.0

## 0.10.2

### Patch Changes

- 18dd9ea7c: Bump vite from 4.3.9 to 4.5.2

## 0.10.1

### Patch Changes

- 67ac66a79: Refactor option label to be a child component instead of an attribute to improve screen reader experience
- e34e17292: Add optional name paramater that will pass a string to the button element's underlying name attribute
- d74d0161f: Refactor card heading from h5 to h3 to ensure headings are in sequential order to improve accessibility
- Updated dependencies [16dea2974]
- Updated dependencies [0d0341a3c]
  - @ilo-org/styles@0.13.2

## 0.10.0

### Minor Changes

- 4630eea87: Upgrade react storybook to 7.6.6

### Patch Changes

- d20d3c750: Sync tooltip with twig
- 857b7b57b: Sync profile with twig
- Updated dependencies [08a2141cc]
- Updated dependencies [dea2d0a07]
  - @ilo-org/styles@0.13.1

## 0.9.1

### Patch Changes

- afb53cabb: Sync hero with twig implementation
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

## 0.9.0

### Minor Changes

- 55f0c47aa: Added chained hover effect for video play button

### Patch Changes

- cf4d43446: added hover effect for anchor item inside indented linked list
- 3be0a12ac: reduced padding for accordion inner panel
- ca463b9b7: added full width on mobile viewport for affected cards
- 5df8f748a: fixed text input invalid state
- ee17a3bd2: Top spacing should be removed in hero card when there is no image
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

## 0.8.13

### Patch Changes

- 1c65834a5: Change hero card date position
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

## 0.8.12

### Patch Changes

- Updated dependencies [78f48eff5]
- Updated dependencies [03b3c26e4]
  - @ilo-org/fonts@0.1.1
  - @ilo-org/styles@0.11.1

## 0.8.11

### Patch Changes

- Updated dependencies [b7fcf3426]
- Updated dependencies [27624a076]
  - @ilo-org/styles@0.11.0

## 0.8.10

### Patch Changes

- Updated dependencies [266671491]
- Updated dependencies [244fae9db]
- Updated dependencies [1a6d0671f]
- Updated dependencies [371faf0fb]
  - @ilo-org/styles@0.10.6

## 0.8.9

### Patch Changes

- Updated dependencies [2c4331403]
  - @ilo-org/styles@0.10.5
  - @ilo-org/themes@0.6.1

## 0.8.8

### Patch Changes

- Updated dependencies [477ccf7c0]
  - @ilo-org/styles@0.10.4

## 0.8.7

### Patch Changes

- Updated dependencies [0e2e0a039]
  - @ilo-org/styles@0.10.3

## 0.8.6

### Patch Changes

- Updated dependencies [ee517d0f2]
- Updated dependencies [71002bcde]
- Updated dependencies [703bc66a6]
- Updated dependencies [ad52c6442]
- Updated dependencies [9be1cd23e]
  - @ilo-org/styles@0.10.2
  - @ilo-org/themes@0.6.0

## 0.8.5

### Patch Changes

- 39ff32a91: Fix appearance of Radio buttons in Firefox
- bab87cfac: Add min, max and step props to NumberPicker
- c964d78cc: Adds an `accept` property to the FileUpload component so that it's possible to limit the kinds of files users can upload by file extension.
- Updated dependencies [c3b0e6def]
- Updated dependencies [39ff32a91]
- Updated dependencies [0488bc66e]
- Updated dependencies [c86fa4f33]
  - @ilo-org/styles@0.10.1
  - @ilo-org/themes@0.5.1

## 0.8.4

### Patch Changes

- Updated dependencies [1e18e0ca9]
- Updated dependencies [ad590b833]
- Updated dependencies [6c4ebfeb3]
- Updated dependencies [e575c2973]
- Updated dependencies [e575c2973]
- Updated dependencies [73640499b]
  - @ilo-org/styles@0.10.0
  - @ilo-org/themes@0.5.0

## 0.8.3

### Patch Changes

- Updated dependencies [3290283dd]
  - @ilo-org/themes@0.4.0
  - @ilo-org/styles@0.9.2

## 0.8.2

### Patch Changes

- Updated dependencies [c0fb36a66]
  - @ilo-org/brand-assets@0.2.0

## 0.8.1

### Patch Changes

- Updated dependencies [5a4a7255a]
- Updated dependencies [5a4a7255a]
- Updated dependencies [5a4a7255a]
  - @ilo-org/themes@0.3.0
  - @ilo-org/styles@0.9.1

## 0.8.0

### Minor Changes

- 897fe5766: This release includes refactored form components and styles. Whereas before, the Form component took all of the props for all of the form components itself and determined which to render based on data, this release exposes all of the individual form components directly to the developer. The Form component is refactored as a simple wrapper around an HTML form element, which includes a `theme` prop modifying the label and text colors for use on dark backgrounds. Otherwise, it simply provides a layout for different form elements. The Fieldset is used as a layout wrapper to group multiple related form components together, especially theRadio and Checkbox, for which it can also handle error messages. All form components provide access to the underlying form element (usually an `input`) via a `ref` prop.

### Patch Changes

- 897fe5766: fix label/icon misalignment issue
- Updated dependencies [897fe5766]
- Updated dependencies [897fe5766]
- Updated dependencies [897fe5766]
  - @ilo-org/styles@0.9.0

## 0.7.8

### Patch Changes

- Updated dependencies [58bc8ff88]
- Updated dependencies [58a708c3a]
  - @ilo-org/styles@0.8.4

## 0.7.7

### Patch Changes

- Updated dependencies [cefc8690e]
  - @ilo-org/styles@0.8.3

## 0.7.6

### Patch Changes

- Updated dependencies [270805a67]
- Updated dependencies [9ed7f815a]
- Updated dependencies [c81b76d1a]
- Updated dependencies [bffee71ef]
  - @ilo-org/styles@0.8.2

## 0.7.5

### Patch Changes

- Updated dependencies [5887810c3]
  - @ilo-org/styles@0.8.1

## 0.7.4

### Patch Changes

- Updated dependencies [9edcc451f]
- Updated dependencies [9edcc451f]
  - @ilo-org/styles@0.8.0

## 0.7.3

### Patch Changes

- Updated dependencies [0cb90a388]
- Updated dependencies [b0797d2f9]
  - @ilo-org/styles@0.7.2

## 0.7.2

### Patch Changes

- Updated dependencies [0fd4b60df]
  - @ilo-org/styles@0.7.1

## 0.7.1

### Patch Changes

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
- 0dc9a8538: Add LogoGrid component which shows a list of logos with an optional link

### Patch Changes

- 77517f4dc: Refactor Hero and HeroCard to sync with new implemenation in Twig and Styles packages
- Updated dependencies [c0648530f]
- Updated dependencies [0dc9a8538]
  - @ilo-org/styles@0.6.0

## 0.6.0

### Minor Changes

- 0f45a7aae: Add Social Media component and use in Footer

### Patch Changes

- Updated dependencies [0f45a7aae]
- Updated dependencies [0f45a7aae]
- Updated dependencies [0f45a7aae]
- Updated dependencies [2f6b0e73f]
  - @ilo-org/themes@0.2.0
  - @ilo-org/styles@0.5.0
  - @ilo-org/icons-react@0.0.21

## 0.5.1

### Patch Changes

- Updated dependencies [51b4be31a]
- Updated dependencies [6a7dbe609]
- Updated dependencies [b498c19c4]
  - @ilo-org/themes@0.1.16
  - @ilo-org/styles@0.4.0
  - @ilo-org/icons-react@0.0.20

## 0.5.0

### Minor Changes

- 25c3bca99: feat(react): add breadcrumb as a new component

### Patch Changes

- Updated dependencies [11801070b]
- Updated dependencies [1b942833b]
  - @ilo-org/styles@0.3.5

## 0.4.6

### Patch Changes

- Updated dependencies [ee2e53f51]
  - @ilo-org/styles@0.3.4

## 0.4.5

### Patch Changes

- Updated dependencies [ee859111c]
- Updated dependencies [ee859111c]
- Updated dependencies [ee859111c]
  - @ilo-org/styles@0.3.3

## 0.4.4

### Patch Changes

- Updated dependencies [be8262383]
- Updated dependencies [be8262383]
- Updated dependencies [36960e383]
  - @ilo-org/styles@0.3.2
  - @ilo-org/brand-assets@0.1.0
  - @ilo-org/utils@0.0.11
  - @ilo-org/icons-react@0.0.19

## 0.4.3

### Patch Changes

- Updated dependencies [e5c100219]
  - @ilo-org/styles@0.3.1

## 0.4.2

### Patch Changes

- Updated dependencies [8bc52db6e]
  - @ilo-org/styles@0.3.0

## 0.4.1

### Patch Changes

- bac3cc9d5: Fix bug preventing the sub-brand from rendering with the proper font size on some mobile browsers
- Updated dependencies [bac3cc9d5]
  - @ilo-org/styles@0.2.1

## 0.4.0

### Minor Changes

- 2aa1f1cc6: feat/react: Implementation of Card and CardGroup components
- c24a5f721: Adds responsive logo component and styles
- 77a4f5b75: LocalNav uses Logo component so that it can have sub-brands

### Patch Changes

- 2aa1f1cc6: enable profile to be themeable and address a few minor style issues
- Updated dependencies [2aa1f1cc6]
- Updated dependencies [2aa1f1cc6]
- Updated dependencies [c24a5f721]
  - @ilo-org/styles@0.2.0

## 0.3.0

### Minor Changes

- df509e960: react: added global Navigation component

### Patch Changes

- d55e975ca: Add homepage to package.json

## 0.2.1

### Patch Changes

- Updated dependencies [1405b9cbf]
  - @ilo-org/styles@0.1.19

## 0.2.0

### Minor Changes

- 3a19726f2: Add LocalNav and Footer components

### Patch Changes

- Updated dependencies [2f60e9d92]
- Updated dependencies [c9413b943]
  - @ilo-org/styles@0.1.18
  - @ilo-org/brand-assets@0.1.0
  - @ilo-org/utils@0.0.11

## 0.1.2

### Patch Changes

- Updated dependencies [391687e3e]
- Updated dependencies [e2a233688]
  - @ilo-org/fonts@0.1.0
  - @ilo-org/brand-assets@0.1.0
  - @ilo-org/styles@0.1.17

## 0.1.1

### Patch Changes

- 368092aee: Set React peer dependencies to >16
- Updated dependencies [368092aee]
  - @ilo-org/icons-react@0.0.18
  - @ilo-org/styles@0.1.16

## 0.1.0

### Minor Changes

- 8e24e57fc: We've fixed broken exports from @ilo-org/react and ensured that types are exported properly as well. We've upgraded the @ilo-org/react Storybook project to version 7.0.0-beta. This has required us to decouple the installation and build scripts of the react and storybook projects. It's no longer possible to install dependencies and then build both storybook projects together. Instead, users should run `pnpm react:install` or `pnpm twig:install` before building the respective Storbyook project. This should be fixed when Wingsuit upgrades to Webpack5.

### Patch Changes

- Updated dependencies [8e24e57fc]
  - @ilo-org/brand-assets@0.0.2
  - @ilo-org/icons-react@0.0.17
  - @ilo-org/styles@0.1.15
  - @ilo-org/themes@0.1.15
  - @ilo-org/fonts@0.0.7
  - @ilo-org/utils@0.0.11

## 0.0.18

### Patch Changes

- b48b386b8: Local nav color for the background is a setting now
- Updated dependencies [b48b386b8]
  - @ilo-org/fonts@0.0.6
  - @ilo-org/icons-react@0.0.16
  - @ilo-org/styles@0.1.14
  - @ilo-org/themes@0.1.14
  - @ilo-org/utils@0.0.10

## 0.0.17

### Patch Changes

- 62c3c624e: Bugfixes in multiple components
- 1b29018f0: Adds better React Storybook experience
- 43c2b0026: Cornercut changes to make more consistent across sizes and breakpoints for hero and cards
- Updated dependencies [62c3c624e]
- Updated dependencies [1b29018f0]
- Updated dependencies [43c2b0026]
  - @ilo-org/fonts@0.0.5
  - @ilo-org/styles@0.1.13
  - @ilo-org/themes@0.1.13
  - @ilo-org/utils@0.0.9
  - @ilo-org/icons-react@0.0.15

## 0.0.16

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
  - @ilo-org/icons-react@0.0.14
  - @ilo-org/styles@0.1.12
  - @ilo-org/themes@0.1.12
  - @ilo-org/utils@0.0.8

## 0.0.15

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
  - @ilo-org/icons-react@0.0.13

## 0.0.14

### Patch Changes

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
  - @ilo-org/icons-react@0.0.12
  - @ilo-org/themes@0.1.10
  - @ilo-org/utils@0.0.6

## 0.0.13

### Patch Changes

- 48e7a4ada: - Hero: Breadcrumb add in
  - Cards: Video icon for feature and external link option
- Updated dependencies [48e7a4ada]
- Updated dependencies [2bfdfd356]
  - @ilo-org/icons-react@0.0.11
  - @ilo-org/styles@0.1.9
  - @ilo-org/themes@0.1.9
  - @ilo-org/utils@0.0.5

## 0.0.12

### Patch Changes

- a76395618: ESC exits out of toggle menus in the nav
- Updated dependencies [069cd8eaf]
- Updated dependencies [a76395618]
- Updated dependencies [8cd74234c]
- Updated dependencies [9bfb1eae1]
  - @ilo-org/icons-react@0.0.10
  - @ilo-org/styles@0.1.8
  - @ilo-org/themes@0.1.8
  - @ilo-org/utils@0.0.4

## 0.0.11

### Patch Changes

- 5a4806edb: Upgrading pnpm is expected to fix workspace deps not being fixed to version numbers in package.json. This should fix broken installs of the react-icons and react packages.
- 6e470111a: Nav, Card and Hero fixes for QA
- Updated dependencies [5a4806edb]
- Updated dependencies [84fd6bc7d]
- Updated dependencies [6e470111a]
  - @ilo-org/icons-react@0.0.9
  - @ilo-org/styles@0.1.7
  - @ilo-org/themes@0.1.7
  - @ilo-org/utils@0.0.3

## 0.0.10

### Patch Changes

- b65d5c4c1: Various bugfixes
- ab6c0a1c7: Set all packages to rely on latest fixed version of other internal packages
- d2b78bb88: Right to left for Profile component
- Updated dependencies [b65d5c4c1]
- Updated dependencies [487778036]
- Updated dependencies [ab6c0a1c7]
- Updated dependencies [d2b78bb88]
- Updated dependencies [dd2b3ece6]
  - @ilo-org/icons-react@0.0.8
  - @ilo-org/styles@0.1.6
  - @ilo-org/utils@0.0.2
  - @ilo-org/themes@0.1.6

## 0.0.9

### Patch Changes

- a3bd6c73c: Bugfixes for Form, Loading components
- aa8469ceb: Remove testing code from hero and add RTL style for tags
- 539894a90: Hero fixes for RTL and lack of image
- 22bda9fb8: Rename tagset to Tags to match other components and work as an npm package
- Updated dependencies [a3bd6c73c]
- Updated dependencies [aa8469ceb]
- Updated dependencies [da45da834]
- Updated dependencies [539894a90]
- Updated dependencies [22bda9fb8]
  - @ilo-org/styles@0.1.5
  - @ilo-org/icons-react@0.0.7
  - @ilo-org/themes@0.1.5

## 0.0.8

### Patch Changes

- 9d25aa0e8: QA bugfixes for Nav Hero and Callout
- Updated dependencies [a8e627c45]
- Updated dependencies [9d25aa0e8]
  - @ilo-org/styles@0.1.4
  - @ilo-org/themes@0.1.4
  - @ilo-org/icons-react@0.0.6

## 0.0.7

### Patch Changes

- 774682316: Card fixes such as font sizes and some slight tweaks to make sure all the data is displayed
- 2d7d8114a: Bug fixes and right-to-left stlying for rich text, tabs, image and credit components
- 04fe60f9f: Mostly design bugfixes across multiple components
- Updated dependencies [774682316]
- Updated dependencies [2d7d8114a]
- Updated dependencies [04fe60f9f]
  - @ilo-org/icons-react@0.0.5
  - @ilo-org/styles@0.1.3
  - @ilo-org/themes@0.1.3

## 0.0.6

### Patch Changes

- a84c36d: Navigation RTL styles and design QA
- Updated dependencies [a84c36d]
  - @ilo-org/icons-react@0.0.4
  - @ilo-org/styles@0.1.2
  - @ilo-org/themes@0.1.2

## 0.0.5

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
  - @ilo-org/icons-react@0.0.3
  - @ilo-org/styles@0.1.1
  - @ilo-org/themes@0.1.1

## 0.0.4

### Patch Changes

- Updated dependencies [6bf0e10]
  - @ilo-org/styles@0.1.0
  - @ilo-org/themes@0.1.0
  - @ilo-org/icons-react@0.0.2

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
