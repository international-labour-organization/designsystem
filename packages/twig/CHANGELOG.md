# @ilo-org/twig

## 1.3.0

### Minor Changes

- 7ab8fad7d: We have introduced `*.component.yml` files as the new standard for pattern configuration. These files will serve as the source of truth for future releases. While `*.wingsuit.yml` files are still supported, they will be deprecated. Also this version removes [Wingsuit](https://wingsuit-designsystem.github.io/) and several other dependencies that were used to build the Twig Storybook packages. In doing so, we've rebuilt the package from the ground up and re-implemented the build workflows.

### Patch Changes

- 5485606ed: Fix breadcrumb not rendering middle links in the context area
- Updated dependencies [283690299]
- Updated dependencies [ab85d96b8]
  - @ilo-org/maestro@1.0.0
