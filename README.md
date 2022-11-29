# ILO Design System

This monorepo contains packages comprising the Design System of the [International Labour Organization](https://www.ilo.org). Our goal is to make it easy for developers and designers to build accessible websites and web applications that implement the [ILO's brand identity](https://brand.ilo.org/hub/2).

The components in this Design System are completely customizable so that they can be easily integrated into other design systems or website themes.

## Status

| Branch    | Current Status                                                                                                                         |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `main`    | ![Current release](https://github.com/international-labour-organization/designsystem/actions/workflows/release.yml/badge.svg)          |
| `develop` | ![Next release](https://github.com/international-labour-organization/designsystem/actions/workflows/test.yml/badge.svg?branch=develop) |

## Flavors

ILO Design System is currently available in two different flavors.

### [⚛️ React](./packages/react/README.md)

[React Storybook](https://react.ui.ilo.org)

Components for use in applications implemented in [React](https://reactjs.org/), a JavaScript library for building User Interfaces.

### [🌱 Twig](./packages/twig/README.md)

[Twig Storybook](https://twig.ui.ilo.org)

Components for use in applications that render pages with [Twig](https://twig.symfony.com/), a template engine for PHP.

## Design Styleguide

### [Frontify](https://brand.ilo.org/document/131#/accordion-1)

## Packages

- [themes](./packages/themes) -- ([README](./packages/themes/README.md))
- [fonts](./packages/fonts) -- ([README](./packages/fonts/README.md))
- [styles](./packages/styles) -- ([README](./packages/styles/README.md))
- [brand-assets](./packages/brand-assets) -- ([README](./packages/brand-assets/README.md))
- [icons](./packages/icons) -- ([README](./packages/icons/README.md))
- [react icons](./packages/icons-react) -- ([README](./packages/icons-react/README.md))
- [react](./packages/react) -- ([README](./packages/react/README.md))
- [twig](./packages/twig) -- ([README](./packages/twig/README.md))

### Themes

Implements [Style Dictionary](https://amzn.github.io/style-dictionary) to output scss files with constant tokens equalling values such as colors, spacing values, etc.

### Fonts

Provides ILO brand fonts as well as CSS import files that add font faces to font-families.

### Styles

SCSS styling for each component. Consumes tokens output by the themes package, and icon tokens output by the icons package.

### Brand Assets

Provides brand-specific assets such as logos and favicons.

### Icons

Processes SVGs and outputs them as optimized svgs and also as a SASS map of CSS background images with the icons as bse64-encoded data-urls, for use in SCSS.

### React Icons

Works in conjunction with the icons package - receives the same icons used in that package and outputs a set of React components that output an SVG HTML element.

### React

The ILO component library, as React components. Displays components in Storybook.

### Twig

The ILO component library, as [Twig](https://twig.symfony.com/) partials. Displays components in [Wingsuit](https://wingsuit-designsystem.github.io/components/wingsuit/), a port of Storybook modified to display Twigs.

## Contributing

[See contribution notes.](./contributing.md)

## Individual Package Scripts

Each package contains its own package.json with relevant scripts and commands to run, compile, build, etc its code. For example, the React package contains commands to build and run React locally, while the styles package contains commands to compile SASS into CSS.
The monorepo's package.json contains aliases to the most important and useful of these as well, meaning one can run commands to build one package while the current working directory is another package. These can be found in the monorepo's package.json.
In general, the command convention is

```
pnpm run build:package-name
```

where `package-name` is the name of the package in question (e.g. `react`, `styles`). This will run the top-level build command for that package. There are similar commands for `lint`, `format` and `test` (though bear in mind not every pacakge needs every command, for example, icons does not need to be linted, and fonts does not need to be tested.)

## Theme vs. Styles

The `themes` pacakge uses Amazon's [Style Dictionary](https://amzn.github.io/style-dictionary) utility to organize style tokens as JSON, outputting them as constants and maps in a SASS file which the `styles` package imports. Colors, spacing, border thickness and similar properties derive their values from what is set in the theme. See the themes pacakge README for more info.
