---
"@ilo-org/styles": minor
"@ilo-org/twig": patch
"@ilo-org/react": patch
---

Migrated all component styles onto the light/dark semantic tokens and deprecated the raw colour aliases

Component styles, Twig templates, React components and Storybook no longer
reference raw colour aliases such as `--ilo-color-white` or
`--ilo-color-blue-dark`. Everything now consumes the light/dark semantic sets,
which name the role a colour plays (Text, Action, Icon, Border, Container
Background, Page Background, Supportive Feedback, Generic) rather than the
colour itself.

## New tokens

Added to fill roles the semantic set did not cover, as light/dark pairs:

- `--ilo-color-light-icon-brand` / `--ilo-color-dark-icon-brand`
- `--ilo-color-light-icon-disabled` / `--ilo-color-dark-icon-disabled`
- `--ilo-color-light-container-bg-inactive` / `--ilo-color-dark-container-bg-inactive`
- `--ilo-color-light-container-bg-inverse` / `--ilo-color-dark-container-bg-inverse`
- `--ilo-color-light-container-bg-inverse-subtle` / `--ilo-color-dark-container-bg-inverse-subtle`

And one light-only token, which has no dark counterpart:

- `--ilo-color-light-container-bg-accent`

## Changed token value

`--ilo-color-dark-action-selected` now resolves to `--ilo-color-brand-600`
(`rgba(30, 45, 190, 1)`) instead of `--ilo-color-brand-200`
(`rgba(190, 220, 250, 1)`). If you consume this token directly, expect a
markedly deeper blue — check anything you have painted with it.

## Deprecated aliases

These legacy aliases still resolve, so nothing breaks today, but nothing in the
design system uses them any more and they will be removed in the next major.
Prefer a light/dark semantic token that names the role you need; the global on
the right is the like-for-like swap if you just want the same colour.

| Deprecated                    | Currently resolves to                |
| ----------------------------- | ------------------------------------ |
| `--ilo-color-white`           | `--ilo-color-neutrals-white`         |
| `--ilo-color-blue`            | `--ilo-color-brand-600`              |
| `--ilo-color-blue-lighter`    | `--ilo-color-brand-100`              |
| `--ilo-color-blue-light`      | `--ilo-color-brand-200`              |
| `--ilo-color-blue-dark`       | `--ilo-color-brand-800`              |
| `--ilo-color-blue-ramp`       | `--ilo-color-brand-700`              |
| `--ilo-color-blue-dark-ramp`  | `--ilo-color-brand-800-transparent`  |
| `--ilo-color-gray-charcoal`   | `--ilo-color-neutrals-black`         |
| `--ilo-color-gray-accessible` | `--ilo-color-neutrals-700`           |
| `--ilo-color-gray-light`      | `--ilo-color-neutrals-200`           |
| `--ilo-color-gray-base`       | `--ilo-color-neutrals-500`           |
| `--ilo-color-red`             | `--ilo-color-red-500`                |
| `--ilo-color-red-light`       | `--ilo-color-red-100`                |
| `--ilo-color-red-dark`        | `--ilo-color-red-600`                |
| `--ilo-color-red-ramp`        | `--ilo-color-red-500-transparent`    |
| `--ilo-color-yellow`          | `--ilo-color-yellow-400`             |
| `--ilo-color-yellow-light`    | `--ilo-color-yellow-100`             |
| `--ilo-color-yellow-ramp`     | `--ilo-color-yellow-400-transparent` |
| `--ilo-color-green`           | `--ilo-color-green-400`              |
| `--ilo-color-green-light`     | `--ilo-color-green-100`              |
| `--ilo-color-green-ramp`      | `--ilo-color-green-400-transparent`  |
| `--ilo-color-turquoise`       | `--ilo-color-turquoise-500`          |
| `--ilo-color-purple`          | `--ilo-color-purple-600`             |

Two more are deprecated with no like-for-like global, because they are one-off
values that were never part of a ramp — pick the closest semantic token instead:

| Deprecated                                | Value                       | Suggested                  |
| ----------------------------------------- | --------------------------- | -------------------------- |
| `--ilo-color-blue-medium`                 | `rgba(210, 213, 242, 1)`    | `--ilo-color-brand-200`    |
| `--ilo-color-gray-light-semi-transparent` | `rgba(237, 240, 242, 0.25)` | `--ilo-color-neutrals-700` |

## Visual changes

Most of the migration is like-for-like, but some colours now render differently:

- **Blues shift slightly.** Everywhere `--ilo-color-blue-medium`
  (`rgba(210, 213, 242, 1)`) was used it is now `--ilo-color-brand-200`
  (`rgba(190, 220, 250, 1)`) — a marginally brighter, less mauve blue. This
  affects the textarea focus accent, table row hover and selected borders, the
  table sort chevron, and rich text links in the dark theme.
- **Dark theme borders are now opaque.** Image captions and feature card link
  lists take `--ilo-color-dark-border-subtle`
  (`--ilo-color-neutrals-700`, opaque) instead of a 25%-transparent neutral, so
  they read as a solid mid grey rather than blending into the background.
- **Card icons gain contrast.** Score card icons in the light theme darken from
  `--ilo-color-neutrals-700` to black, and detail card icons in the dark theme
  brighten from `--ilo-color-neutrals-200` to white.
- **Dark theme tabs.** Unselected tab buttons move from `--ilo-color-brand-700`
  to `--ilo-color-brand-600`, a slightly brighter blue against the selected tab.
