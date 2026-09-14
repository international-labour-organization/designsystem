---
"@ilo-org/styles": patch
---

Migrated the Sass sources off the APIs Dart Sass 3.0.0 removes

- Replaced every `@import` with `@use` and the global built-ins (`map-get`, `str-index`, `unquote`) with their `sass:` module equivalents, the package now compiles with no deprecation warnings.
- `@use` loads each module once, so `index.css` and `monorepo.css` no longer carry duplicated keyframes or re-emitted Image/Blockquote rules, as a result, image captions inside a RichText now follow the RichText theme instead of the Image's.
