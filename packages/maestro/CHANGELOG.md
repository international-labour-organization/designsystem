# @ilo-org/maestro

## 1.0.2

### Patch Changes

- f2e25d9: Updated dependencies (pnpm-lock.yaml refresh).

  Pinned the transitive dependency `human-id` to 4.1.1 via a pnpm override in the root `package.json`. Newer versions (4.2.0+) are ESM-only and crash `@changesets/write` (and therefore `npx changeset`) with `ERR_REQUIRE_ESM`, since it still loads `human-id` via CommonJS `require()`. The override can be removed once changesets ships a release that imports `human-id` as ESM.

## 1.0.1

### Patch Changes

- b6a508863: Update docs and license

## 1.0.0

### Major Changes

- 33527f81a: This introduces maestro, an package which is used internally by the Twig package to compile Twig templates and their associated JavaScript files so that they can be rendered as stories in Storybook. Maestro allows us to remove [Wingsuit](https://wingsuit-designsystem.github.io/) from the Twig project and its associated dependencies, which were blocking improvements to the project in a lot of different areas.

### Patch Changes

- 33527f81a: yml parser upgrade
