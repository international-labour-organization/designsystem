# @ilo-org/typescript-config

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
