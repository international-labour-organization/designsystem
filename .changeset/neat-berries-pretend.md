---
"@ilo-org/twig": minor
---

We have introduced `*.component.yml` files as the new standard for pattern configuration. These files will serve as the source of truth for future releases. While `*.wingsuit.yml` files are still supported, they will be deprecated. Also this version removes [Wingsuit](https://wingsuit-designsystem.github.io/) and several other dependencies that were used to build the Twig Storybook packages. In doing so, we've rebuilt the package from the ground up and re-implemented the build workflows.
