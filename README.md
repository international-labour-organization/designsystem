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

It comes in two flavors:

### Twig (Drupal)

Our [Twig Component Library](https://twig.ui.ilo.org) ships production-ready component templates for Drupal. The fastest way to adopt it is via the [ILO Base Theme](https://github.com/international-labour-organization/ilo_base_theme), which bundles the components as Drupal patterns.

If you prefer to build a bespoke Drupal theme, you can still consume the package directly — import the Twig templates you need and wire them into your custom modules.

Quick links:

- 🌿 [Storybook playground](https://twig.ui.ilo.org/?path=/docs/ilo-design-system-for-twig-welcome--docs)
- 📖 [@ilo-org/twig README](./packages/twig/README.md)

### React

Our [React Component Library](https://react.ui.ilo.org) provides accessible building blocks for dynamic websites. Install `@ilo-org/react` (which already depends on `@ilo-org/styles`) to get the components you need for any framework — Next.js, React Router, Remix, or even a simple Vite app.

Quick links:

- ⚛️ [Storybook playground](https://react.ui.ilo.org)
- 📖 [@ilo-org/react README](./packages/react/README.md)

## Installation

You can install each library directly from npm:

```shell
npm i @ilo-org/twig
```

```shell
npm i @ilo-org/react
```

These two packages already include most of the assets you'll need in production. You do not have to — and in most cases shouldn't — install the following Design System dependencies separately.

- `@ilo-org/styles`
- `@ilo-org/fonts`
- `@ilo-org/icons` (or other icon-related packages)

However, if you need to use logos, you will need to install [`@ilo-org/brand-assets`](./packages/brand-assets) which provides a selection of approved brand assets in multiple languages.

## Packages

In addition to the two component libraries mentioned above, this monorepo includes packages that provide the styles, assets, and utilities both libraries need to operate. Again, because the component libraries already include everything (except logos) you need to start a new project, you generally shouldn't install these packages individually. Only installing `@ilo-org/react` or `@ilo-org/twig` should give you everything you need.

The one exception is the `@ilo-org/brand-assets` package which includes assets like logos that don't come bundled in with the main design system packages.

| Package                                                                | Description                              | Current version                                                        |
| ---------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| [@ilo-org/brand-assets](./packages/brand-assets/README.md)             | Logos and image files                    | <img src="https://img.shields.io/npm/v/@ilo-org/brand-assets" />       |
| [@ilo-org/fonts](./packages/fonts/README.md)                           | Official fonts                           | <img src="https://img.shields.io/npm/v/@ilo-org/fonts" />              |
| [@ilo-org/icon-build-helpers](./packages/icon-build-helpers/README.md) | Module used internally to generate icons | <img src="https://img.shields.io/npm/v/@ilo-org/icon-build-helpers" /> |
| [@ilo-org/icons](./packages/icons/README.md)                           | Icon files                               | <img src="https://img.shields.io/npm/v/@ilo-org/icons" />              |
| [@ilo-org/icons-react](./packages/icons-react/README.md)               | Icon components                          | <img src="https://img.shields.io/npm/v/@ilo-org/icons-react" />        |
| [@ilo-org/react](./packages/react/README.md)                           | React component library                  | <img src="https://img.shields.io/npm/v/@ilo-org/react" />              |
| [@ilo-org/styles](./packages/styles/README.md)                         | Stylesheets for components               | <img src="https://img.shields.io/npm/v/@ilo-org/styles" />             |
| [@ilo-org/twig](./packages/twig/README.md)                             | Twig component library                   | <img src="https://img.shields.io/npm/v/@ilo-org/twig" />               |
| [@ilo-org/maestro](./packages/maestro/README.md)                       | Storybook helpers for Twig               | <img src="https://img.shields.io/npm/v/@ilo-org/maestro" />            |

### Deprecated

The following packages have been deprecated and should no longer be used in new projects.

| Package                                        | Last version                                               | Notes                                                                                                                                                                                                                                          |
| ---------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@ilo-org/themes](./packages/themes/README.md) | <img src="https://img.shields.io/npm/v/@ilo-org/themes" /> | We are moving all theming to CSS custom properties defined in `@ilo-org/styles`, making design tokens available via a standard naming convention so teams can override defaults easily as theming becomes a core feature of upcoming releases. |
| [@ilo-org/utils](./packages/utils/README.md)   | <img src="https://img.shields.io/npm/v/@ilo-org/utils" />  | Initially intended for sharing logic between Twig and React packages, but it no longer provided enough unique functionality to justify a standalone package.                                                                                   |

## Code quality

JavaScript/TypeScript projects undertaken for the ILO should use these configurations to stay consistent with ILO code standards.

| Package                                                            | Description                              | Current version                                                       |
| ------------------------------------------------------------------ | ---------------------------------------- | --------------------------------------------------------------------- |
| [@ilo-org/eslint-config](./config/eslint-config/README.md)         | Config for linting with ESLint           | <img src="https://img.shields.io/npm/v/@ilo-org/eslint-config" />     |
| [@ilo-org/prettier-config](./config/prettier-config/README.md)     | Config for formatting with Prettier      | <img src="https://img.shields.io/npm/v/@ilo-org/prettier-config" />   |
| [@ilo-org/typescript-config](./config/typescript-config/README.md) | Config for type checking with TypeScript | <img src="https://img.shields.io/npm/v/@ilo-org/typescript-config" /> |

## Issues

Feel free to create an issue in this repository for all bugs, questions and feature requests.

## Contributing

ILO Design System is an open-source project and we welcome your contributions! Before submitting a pull request, please take a moment to review our [Contribution Guidelines](./contributing.md).

## License

Licensed under the [Apache 2.0](/LICENSE).
