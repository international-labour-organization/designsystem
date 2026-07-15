# @ilo-org/typescript-config

## 2.0.1

### Patch Changes

- f2e25d9: Updated dependencies (pnpm-lock.yaml refresh).

  Pinned the transitive dependency `human-id` to 4.1.1 via a pnpm override in the root `package.json`. Newer versions (4.2.0+) are ESM-only and crash `@changesets/write` (and therefore `npx changeset`) with `ERR_REQUIRE_ESM`, since it still loads `human-id` via CommonJS `require()`. The override can be removed once changesets ships a release that imports `human-id` as ESM.

## 2.0.0

### Major Changes

- 93e6ddf24: Typescript package no longer exports lib with `["dom", "dom.iterable"]`, so it's more generic and can be used in more projects. This is a breaking change because it might impact your current TypeScript setup.

## 1.0.0

### Major Changes

- b44994ae2: 🎉 Version 1 Release

## 0.1.1

### Patch Changes

- f1f08712a: Re-set files field in package.json of the package rather than at the monorepo root

## 0.1.0

### Minor Changes

- 977e15006: Fixes a bug where some distribution assets weren't getting included in Design System packages while a lot of non-essential development assets were. At the same time, this removes some `src` directories from the packages which some consumers might have been using.
