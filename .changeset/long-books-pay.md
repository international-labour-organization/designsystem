---
"@ilo-org/eslint-config": patch
"@ilo-org/maestro": patch
"@ilo-org/styles": patch
"@ilo-org/react": patch
"@ilo-org/twig": patch
"@ilo-org/prettier-config": patch
"@ilo-org/typescript-config": patch
"@ilo-org/brand-assets": patch
"@ilo-org/fonts": patch
"@ilo-org/icon-build-helpers": patch
"@ilo-org/icons": patch
"@ilo-org/icons-react": patch
---

Updated dependencies (pnpm-lock.yaml refresh).

Pinned the transitive dependency `human-id` to 4.1.1 via a pnpm override in the root `package.json`. Newer versions (4.2.0+) are ESM-only and crash `@changesets/write` (and therefore `npx changeset`) with `ERR_REQUIRE_ESM`, since it still loads `human-id` via CommonJS `require()`. The override can be removed once changesets ships a release that imports `human-id` as ESM.
