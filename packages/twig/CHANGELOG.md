# @ilo-org/twig

## 1.3.2

### Patch Changes

- dd8e77ac1: fixed the localnav menu issue for responsive screens
- Updated dependencies [76d200189]
  - @ilo-org/styles@1.3.2

## 1.3.1

### Patch Changes

- Updated dependencies [eac2922b5]
  - @ilo-org/styles@1.3.1

## 1.3.0

### Minor Changes

- 058345637: - Replaces all of the icons in the Icons package and replaces them with standardised versions that are all the same size, with the minor exception of the `Quote` icon. This required sizing changes to icons and affects the appearance of many components.
  - Pattern definitions for `modal` and `tabs` were adjusted to use the new icon settings.

### Patch Changes

- Updated dependencies [058345637]
- Updated dependencies [57715d1ce]
  - @ilo-org/icons@2.0.0
  - @ilo-org/styles@1.3.0

## 1.2.6

### Patch Changes

- b63faa7c3: Data Cards can pass a `target` to buttons rendered by `dataset.files.items`. This fixes some inconsistent handling in cases where those links were pointing to files.

## 1.2.5

### Patch Changes

- Updated dependencies [340494e61]
- Updated dependencies [340494e61]
  - @ilo-org/styles@1.2.3
  - @ilo-org/brand-assets@1.0.0
  - @ilo-org/utils@0.1.1
  - @ilo-org/icons@1.1.0
  - @ilo-org/maestro@1.0.1

## 1.2.4

### Patch Changes

- 8a9ac6a5f: Adds backward compatibility to the socialmedia component which in 1.1.1 removed the twitter icon and replaced it with X. With this, passing `twitter` to as an argument to the icon field will render an X icon.

## 1.2.3

### Patch Changes

- a15094e82: Fixed bug where the last link in the Breadcrumb was rendering twice

## 1.2.2

### Patch Changes

- 2c2813c0a: Make image optional in multilink card
- eb517686e: Refactor search input to be queried by tag instead of class
- bc007770d: Refactor cardgroup to use button component for cta instead of using button css classes
- Updated dependencies [2c2813c0a]
- Updated dependencies [a318aa4e6]
- Updated dependencies [b6a508863]
- Updated dependencies [e6d93b5ab]
  - @ilo-org/styles@1.2.2
  - @ilo-org/icons@1.1.0
  - @ilo-org/maestro@1.0.1

## 1.2.1

### Patch Changes

- 33e6e5661: Refactor the Navigation component to automatically focus the Search Input field when the Search button is clicked.
- Updated dependencies [72159bb1a]
  - @ilo-org/brand-assets@1.0.0
  - @ilo-org/fonts@1.0.0
  - @ilo-org/icons@1.0.0
  - @ilo-org/styles@1.2.1

## 1.2.0

### Minor Changes

- 33527f81a: We have introduced `*.component.yml` files as the new standard for pattern configuration. These files will serve as the source of truth for future releases. While `*.wingsuit.yml` files are still supported, they will be deprecated. Also this version removes [Wingsuit](https://wingsuit-designsystem.github.io/) and several other dependencies that were used to build the Twig Storybook packages. In doing so, we've rebuilt the package from the ground up and re-implemented the build workflows.

### Patch Changes

- 33527f81a: Fix breadcrumb not rendering middle links in the context area
- Updated dependencies [33527f81a]
- Updated dependencies [33527f81a]
  - @ilo-org/maestro@1.0.0
