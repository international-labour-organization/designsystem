# ILO Design System - Styles

The Styles package provides the stylesheets which are used to style the components in other packages. It includes both the styles for the individual components as well as bundled stylesheets for the entire design system. Both SCSS and compiled CSS files are exported from the package.

The styles are written in [SCSS](https://sass-lang.com/), so you can also import the SCSS files and include them in your own SASS workflow.

> [!WARNING] > **Do not use this package directly.** If you are using [@ilo-org/twig](../twig/) or [@ilo-org/react](../react/) packages, you should import styles from those packages instead. The classnames in this package are internal implementation details and are not part of the public API. They may change at any time without being considered a breaking change. Always use the component APIs provided by the React or Twig packages rather than directly referencing CSS classnames from this package.

## Installation

```bash
npm i @ilo-org/styles
```

## Usage

### Bundled Stylesheets

The package provides several bundled stylesheets depending on your needs:

- **`index.css`** - Complete bundle including all components, global styles, resets, and typography
- **`monorepo.css`** - Version for use within the monorepo (uses different typography setup)
- **`global.css`** - Global styles only (resets, theme, typography) without component styles

#### Using the Complete Bundle

If you're going to use all or most of the components in the Design System, the easiest approach is to include the complete bundled stylesheet.

**HTML:**

```html
<link rel="stylesheet" href="node_modules/@ilo-org/styles/css/index.css" />
```

**JavaScript/TypeScript (with bundler):**

```javascript
import "@ilo-org/styles/css/index.css";
```

**SCSS:**

```scss
@import "@ilo-org/styles/css/index.css";
```

#### Using Individual Component Styles

You can import compiled CSS files for individual components from the `@ilo-org/styles/css/components` directory. This is useful for code splitting or when you only need specific components.

**JavaScript/TypeScript (with bundler):**

```jsx
import React from "react";
import { Accordion } from "@ilo-org/react";
import "@ilo-org/styles/css/components/accordion.css";

const MyAccordion = (props) => {
  return <Accordion {...props} />;
};
```

**HTML:**

```html
<link
  rel="stylesheet"
  href="node_modules/@ilo-org/styles/css/components/accordion.css"
/>
```

> [!IMPORTANT]
> If you're importing CSS for individual components, remember to include the global styles as well. These are styles which are not scoped to any particular component, but which are needed for the components to work properly.

**Include global styles:**

```javascript
import "@ilo-org/styles/css/global.css";
import "@ilo-org/styles/css/components/accordion.css";
```

### Using Source SCSS Files

If you're already using SASS, you can import the SCSS files directly into your project and include them in your own SASS bundle. This gives you more control over compilation and allows you to customize the styles.

> [!NOTE]
> If you're using the SCSS source files, you will also need to import the `@ilo-org/themes` package to ensure the SASS files have access to the style tokens they need.

#### Import All Styles

```scss
@import "@ilo-org/themes/build/scss/tokens";
@import "@ilo-org/styles/scss";
```

#### Import Individual Component Styles

```scss
@import "@ilo-org/themes/build/scss/tokens";
@import "@ilo-org/styles/scss/components/accordion";
```

#### Import Global Styles Only

```scss
@import "@ilo-org/themes/build/scss/tokens";
@import "@ilo-org/styles/scss/global";
```

## Available Files

### CSS Files

- `css/index.css` - Complete bundle with all components
- `css/monorepo.css` - Monorepo-specific bundle
- `css/global.css` - Global styles only (resets, theme, typography)
- `css/components/*.css` - Individual component stylesheets

### SCSS Files

- `scss/index.scss` - Complete SCSS bundle
- `scss/monorepo.scss` - Monorepo-specific SCSS bundle
- `scss/global.scss` - Global SCSS styles only
- `scss/components/*.scss` - Individual component SCSS files
- `scss/theme/` - Theme foundation files (breakpoints, typography, etc.)
- `scss/_*.scss` - Utility files (mixins, functions, config, etc.)
