<p align="center">
  <img src="https://raw.githubusercontent.com/international-labour-organization/designsystem/develop/packages/brand-assets/src/assets/logo_en_horizontal_white.svg#gh-dark-mode-only" width="200"  alt="ILO Logo" />
  <img src="https://raw.githubusercontent.com/international-labour-organization/designsystem/develop/packages/brand-assets/src/assets/logo_en_horizontal_blue.svg#gh-light-mode-only" width="200"  alt="ILO Logo" />
</p>

<h1 align="center">ILO Design System</h1>

<p align="center">Tools and components for building accessible websites using Twig or React</p>

<p align="center">
  <a href="https://brand.ilo.org/designsystem"><button>🚀 Website</button></a>
  <a href="https://react.ui.ilo.org"><button>⚛️ React Docs</button></a>
  <a href="https://twig.ui.ilo.org"><button>🌿 Twig Docs</button></a>
</p>

## Introduction

This repo houses the source code of the ILO's Design System. It comes in two flavors:

- **[Twig](https://twig.symfony.com/)** is a template engine used by PHP apps like WordPress and Drupal.
- **[React](https://reactjs.org)** is a JavaScript library for building user interfaces.

Consult our documentation websites for information on how to get started with either one.

## Packages

This is a monorepo made of multiple packages which are published as node modules on `npm`.

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
|                                                                        |

## Code quality

JavasScript/Typescript projects undertaken for the ILO should use these configurations to be consist with ILO code standards.

| Package                                                        | Description                              | Current version                                                       |
| -------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------- |
| [@ilo-org/eslint-config](./config/eslint-config/README.md)     | Config for linting with eslint           | <img src="https://img.shields.io/npm/v/@ilo-org/eslint-config" />     |
| [@ilo-org/eslint-config](./config/prettier-config/README.md)   | Config for formatting with prettier      | <img src="https://img.shields.io/npm/v/@ilo-org/prettier-config" />   |
| [@ilo-org/eslint-config](./config/typescript-config/README.md) | config for type checking with TypeScript | <img src="https://img.shields.io/npm/v/@ilo-org/typescript-config" /> |

## Issues

Feel free to create an issue in this repository for all bugs, questions and feature requests.

## Contributing

ILO Design System is an open-source project and we welcome your contributions! Before submitting a pull request, please take a moment to review our [Contribution Guidelines](./contributing.md).

## License

Licensed under the [Apache 2.0](/LICENSE).
