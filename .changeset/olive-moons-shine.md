---
"@ilo-org/react": minor
"@ilo-org/twig": minor
"@ilo-org/styles": minor
---

Ship all stylesheets and Sass utilities with `@ilo-org/react` and `@ilo-org/twig`; drop `@ilo-org/styles` as a hard dependency

`@ilo-org/styles` gains a `scss/_helpers.scss` entrypoint that forwards the
design system's Sass functions and mixins from a single place. It is guaranteed
to emit no CSS (enforced by a test), so it is safe to `@use` from every
`.module.scss` without duplicating rules into the compiled bundle.

`@ilo-org/react` and `@ilo-org/twig` already shipped the compiled CSS under
`styles/`; they now also republish the Sass source under `styles/scss/`,
mirroring the layout of `@ilo-org/styles`. Everything a consumer needs —
compiled CSS and Sass — is therefore importable from the component library
itself, and `@ilo-org/styles` no longer needs to be installed or documented
alongside it:

```scss
@use "@ilo-org/react/styles/scss/helpers" as *;
// or, with the Twig flavor:
@use "@ilo-org/twig/styles/scss/helpers" as *;
// or, without a component library:
@use "@ilo-org/styles/scss/helpers" as *;
```

Changes visible to consumers:

- `@ilo-org/styles` moves from a dependency of `@ilo-org/react` and
  `@ilo-org/twig` to a build-time devDependency, so it no longer lands in
  consumers' dependency trees.
- `@ilo-org/icons` is now a dependency of `@ilo-org/react`, which the `icon`
  mixin genuinely needs at compile time (`@ilo-org/twig` already had it).
- The `"./styles/"` export on `@ilo-org/react` is replaced with `"./styles/*"`
  plus an explicit `"./styles/scss/helpers"` key. Trailing-slash exports are
  deprecated (Node DEP0148) and were removed in Node 17 —
  `@ilo-org/react/styles/index.css` previously failed to resolve in plain Node.
  Existing imports keep working.
- `@ilo-org/twig` gains an exports map with the same `"./styles/*"` and
  `"./styles/scss/helpers"` keys, plus a `"./*"` passthrough so that existing
  deep imports like `@ilo-org/twig/dist/components/...` keep resolving.
