---
"@ilo-org/brand-assets": minor
"@ilo-org/fonts": minor
"@ilo-org/icon-build-helpers": minor
"@ilo-org/icons": minor
"@ilo-org/icons-react": minor
"@ilo-org/react": minor
"@ilo-org/styles": minor
"@ilo-org/themes": minor
"@ilo-org/twig": minor
"@ilo-org/utils": minor
"@ilo-org/eslint-config": minor
"@ilo-org/prettier-config": minor
"@ilo-org/typescript-config": minor
---

Fixes a bug where some distribution assets weren't getting included in Design System packages while a lot of non-essential development assets were. At the same time, this removes some `src` directories from the packages which some consumers might have been using.
