<p align="center">
<img src="./packages/brand-assets/src/assets/logo_en_dds_horizontal_white.svg#gh-dark-mode-only" width="400"  alt="ILO Digital Design System" />
<img src="./packages/brand-assets/src/assets/logo_en_dds_horizontal_blue.svg#gh-light-mode-only" width="400"  alt="ILO Digital Design System" />
</p>

<p align="center">
  <a href="https://brand.ilo.org/designsystem">🚀 Go to website</a>
  &ensp;|&ensp;
  <a href="https://react.ui.ilo.org">⚛️ React docs</a>
   &ensp;|&ensp;
  <a href="https://twig.ui.ilo.org">🌿 Twig docs</a>
</p>

## Introduction

The ILO Design System provides tools and components for building accessible websites that implement the visual identity of the [International Labour Organization](https://www.ilo.org).

### Twig

Twig is a template engine used by PHP apps like WordPress and Drupal. Use our [Twig Component Library](https://twig.ui.ilo.org) to build content-heavy websites that don't require a lot of interactivity.

### React

React is a JavaScript library for building user interfaces. Use our [React Component Library](https://react.ui.ilo.org) to build dynamic web applications and dashboards, or websites that use frameworks like Next.js or Remix.

## Packages

In addition to the two component libraries mentioned above, this monorepo includes packages which provides all of the styles, assets and utilities that both libraries need to operate. All packages are public packages on `npm`.

| Package                                                                | Description                              | Current version                                                        |
| ---------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| [@ilo-org/brand-assets](./packages/brand-assets/README.md)             | Logos and image files                    | <img src="https://img.shields.io/npm/v/@ilo-org/brand-assets" />       |
| [@ilo-org/fonts](./packages/fonts/README.md)                           | Official fonts                           | <img src="https://img.shields.io/npm/v/@ilo-org/fonts" />              |
| [@ilo-org/icon-build-helpers](./packages/icon-build-helpers/README.md) | Module used internally to generate icons | <img src="https://img.shields.io/npm/v/@ilo-org/icon-build-helpers" /> |
| [@ilo-org/icons](./packages/icons/README.md)                           | Icon files                               | <img src="https://img.shields.io/npm/v/@ilo-org/icons" />              |
| [@ilo-org/icons-react](./packages/icons-react/README.md)               | Icon components                          | <img src="https://img.shields.io/npm/v/@ilo-org/icons-react" />        |
| [@ilo-org/react](./packages/react/README.md)                           | React component library                  | <img src="https://img.shields.io/npm/v/@ilo-org/react" />              |
| [@ilo-org/styles](./packages/styles/README.md)                         | Stylesheets for components               | <img src="https://img.shields.io/npm/v/@ilo-org/styles" />             |
| [@ilo-org/themes](./packages/themes/README.md)                         | Style tokens for stylesheets             | <img src="https://img.shields.io/npm/v/@ilo-org/themes" />             |
| [@ilo-org/twig](./packages/twig/README.md)                             | Twig component library                   | <img src="https://img.shields.io/npm/v/@ilo-org/twig" />               |
| [@ilo-org/utils](./packages/utils/README.md)                           | Shared utilities                         | <img src="https://img.shields.io/npm/v/@ilo-org/utils" />              |
| [@ilo-org/maestro](./packages/maestro/README.md)                       | Storybook helpers for Twig               | <img src="https://img.shields.io/npm/v/@ilo-org/maestro" /> |

## Code quality

JavasScript/Typescript projects undertaken for the ILO should use these configurations to be consist with ILO code standards.

| Package                                                            | Description                              | Current version                                                       |
| ------------------------------------------------------------------ | ---------------------------------------- | --------------------------------------------------------------------- |
| [@ilo-org/eslint-config](./config/eslint-config/README.md)         | Config for linting with eslint           | <img src="https://img.shields.io/npm/v/@ilo-org/eslint-config" />     |
| [@ilo-org/prettier-config](./config/prettier-config/README.md)     | Config for formatting with prettier      | <img src="https://img.shields.io/npm/v/@ilo-org/prettier-config" />   |
| [@ilo-org/typescript-config](./config/typescript-config/README.md) | config for type checking with TypeScript | <img src="https://img.shields.io/npm/v/@ilo-org/typescript-config" /> |

## Issues

Feel free to create an issue in this repository for all bugs, questions and feature requests.

## Contributing

ILO Design System is an open-source project and we welcome your contributions! Before submitting a pull request, please take a moment to review our [Contribution Guidelines](./contributing.md).

## License

Licensed under the [Apache 2.0](/LICENSE).
