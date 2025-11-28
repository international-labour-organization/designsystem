# ILO Design System - React Package

This package provides the implementation of the Design System using [React](https://reactjs.org). It also includes a [Storybook](https://storybook.js.org/) project for documentation and development of the components in the system. It has dependencies on the following other @ilo-org packages:

- [@ilo-org/fonts](../fonts)
- [@ilo-org/styles](../styles)
- [@ilo-org/icons](../icons)
- [@ilo-org/icons-react](../icons-react)

## Installation and Usage

For detailed instructions on installing and using this package in your project, please visit the [Storybook documentation](https://react.ui.ilo.org). The Storybook includes:

- Installation instructions
- Component documentation
- Usage examples
- API references
- Code samples

## Styles and Fonts

The `@ilo-org/react` package includes styles and fonts, so you don't need to install `@ilo-org/styles` or `@ilo-org/fonts` separately.

### Importing Styles

You can import styles directly from the React package:

```javascript
// Import all styles
import "@ilo-org/react/styles/index.css";

// Or import individual component styles
import "@ilo-org/react/styles/components/button.css";
```

Alternatively, if you're using a bundler that supports CSS imports, you can reference the styles in your HTML:

```html
<link
  rel="stylesheet"
  href="node_modules/@ilo-org/react/lib/styles/index.css"
/>
```

### Importing Fonts

Fonts are included as dependencies and can be imported using your bundler:

```javascript
// JavaScript/TypeScript (with bundler support)
import "@ilo-org/fonts";
```

```scss
// SCSS
@import "~@ilo-org/fonts";
```

The fonts package is automatically installed as a dependency of `@ilo-org/react`, so you don't need to add it to your `package.json`.

## Development

This section covers commands for developing and working with the React package locally. The commands provided should be run from the root of the repository.

### Prerequisites

Use [nvm](https://github.com/nvm-sh/nvm) to make sure you have the correct version of node installed.

```bash
nvm use
```

Install [pnpm](https://pnpm.io/). Check the [package.json](../../package.json) to get the correct version.

```bash
npm i -g pnpm@9.14.4
```

### Storybook

Start Storybook in development mode:

```bash
pnpm react:dev:docs
```

Build Storybook for production:

```bash
pnpm react:build:docs
```

### Building

Build the library:

```bash
pnpm react:build:lib
```

Build the library in watch mode:

```bash
pnpm --filter react dev:lib
```

### Code Quality

Lint code:

```bash
pnpm --filter react lint
```

Lint code and fix errors:

```bash
pnpm --filter react lint:fix
```

Check TypeScript types:

```bash
pnpm --filter react check
```

### Testing

Run tests:

```bash
pnpm --filter react test
```

Run tests with UI:

```bash
pnpm --filter react test:ui
```

## Contributing

For contribution guidelines, please see the [Contributing Guide](../../contributing.md).
