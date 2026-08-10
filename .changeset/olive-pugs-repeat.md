---
"@ilo-org/styles": minor
---

Migrated component styles onto the light/dark semantic tokens

Component styles no longer reference raw color aliases such as `--ilo-color-white`
or `--ilo-color-blue-dark`. They now consume the light/dark semantic sets,

Eight tokens were added to fill roles the set did not cover, as light/dark pairs:

- `--ilo-color-light-icon-disabled` / `--ilo-color-dark-icon-disabled`
- `--ilo-color-light-container-bg-inactive` / `--ilo-color-dark-container-bg-inactive`
- `--ilo-color-light-container-bg-inverse` / `--ilo-color-dark-container-bg-inverse`
- `--ilo-color-light-container-bg-inverse-subtle` /
  `--ilo-color-dark-container-bg-inverse-subtle`
