# ILO Design System - Styles

The Styles package provides the stylesheets which are used to style the components in other packages. It includes both the styles for the individual components as well as bundled stylesheets for the entire design system. Both scss and compiled css files are exported from the package.

The styles are written in [SCSS](https://sass-lang.com/), so you can also import the SCSS files and include them in your own SASS workflow.

## Installation

```bash
npm i @ilo-org/styles
```

## Usage

### Include the bundled stylesheet

If you're going to use all or most of the components in the Design System, the easiest thing to do is to include the bundled stylesheet, which includes all of the styles for all of the components.

To do this, you can copy the file `@ilo-org/styles/css/index.css` to a place where you're hosting static files via build command and include it from there.

You can also import compiled CSS files for the individual components, which can be fetched or included from `@ilo-org/styles/css/components` directory.

Here's an example which uses Webpack to output CSS files together with components from the Design System's [React package](../react).

```jsx
import React from "react";
import { Accordion } from "@ilo-org/react";
import "@ilo-org/styles/css/components/accordion";

const MyAccordion = (props) => {
  return <Accordion {...props}>
}
```

### Use the source files directly

If you're already using SASS, then you can also import the SCSS files directly into your project and include them into your own SASS bundle.

Note that if you're doing this, you will also need to import the `@ilo-org/themes` package to ensure the SASS files have access to the style tokens they need.

```SCSS
@import "@ilo-org/themes/build/scss/tokens";
@import "@ilo-org/styles/scss";
```

As above, if you don't need styles for the whole design system, you can also import SCSS files from individual components.

```SCSS
@import "@ilo-org/styles/scss/components/accordion";
```

### Remember to include global styles

If you're importing CSS for individual components, remember to include the global styles as well. These are styles which are not scoped to any particular component, but which are needed for the components to work properly.

You can import the global styles from `@ilo-org/styles/scss/global` or from `@ilo-org/styles/css/global`.
