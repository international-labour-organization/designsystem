# @ilo-org/maestro

## 1.0.0

### Major Changes

- 283690299: This introduces maestro, an package which is used internally by the Twig package to compile Twig templates and their associated JavaScript files so that they can be rendered as stories in Storybook. Maestro allows us to remove [Wingsuit](https://wingsuit-designsystem.github.io/) from the Twig project and its associated dependencies, which were blocking improvements to the project in a lot of different areas.

### Patch Changes

- ab85d96b8: yml parser upgrade
