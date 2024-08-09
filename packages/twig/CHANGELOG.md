# @ilo-org/twig

## 1.2.0

### Minor Changes

- 33527f81a: We have introduced `*.component.yml` files as the new standard for pattern configuration. These files will serve as the source of truth for future releases. While `*.wingsuit.yml` files are still supported, they will be deprecated. Also this version removes [Wingsuit](https://wingsuit-designsystem.github.io/) and several other dependencies that were used to build the Twig Storybook packages. In doing so, we've rebuilt the package from the ground up and re-implemented the build workflows.

### Patch Changes

- 33527f81a: Fix breadcrumb not rendering middle links in the context area
- Updated dependencies [33527f81a]
- Updated dependencies [33527f81a]
  - @ilo-org/maestro@1.0.0
