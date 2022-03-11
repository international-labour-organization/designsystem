# ILO Design System - Styles Package

## Status: Proof of Concept

This package provides the stylesheets which are used to style components in other packages. It does this primarily by supplying a theme and other customization options to the `@un/styles` package [SASS](https://sass-lang.com/). It also includes custom css for components in cases where the desired styles can't be achieved only by configuring `@un/styles`.

## Prefixing

All stylesheets in `@un/core` are prefixed via SASS variables. This prefix should correspond with the one used in the component classnames in order for styles to be configured correctly. To see prefixes:

```scss
// Set prefix on default styles
@use "@un/styles/scss/config" with (
  $prefix: "ilo"
);

// Set prefix on default theme options
@use "@un/themes/scss/themes" as themes with (
  $custom-property-prefix: "ilo"
);
```

## CSS Reset

`@un/styles` includes a basic CSS reset that can be added like this.

```scss
@forward "@un/styles/scss/reset";
```

## Theming

UN Core is based on IBM Carbon, so themeing [works the same way](https://www.carbondesignsystem.com/guidelines/themes/overview/#customizing-a-theme).

[Here is an example](./scss/_theme.scss) of the theme used in this POC, which essentially just WFP's theme with a few values changed. Below shows how we use the theme to customize styles.

As you can see, a theme is simply a large map of style tokens which are consumed at various places by the `@un/styles` packages.

```scss
// Import our own theme settings
@use "theme" as theme;

// Apply the theme settings to the default styles
$carbon--theme: theme.$carbon--theme--ilo;
:root {
  @include themes.carbon--theme(theme.$carbon--theme--ilo, true) {
  }
}
```

## Styling components

We can accomplish a lot by customizing style tokens, but we will probably also need to apply more specific styles to components.

### Applying styles

We can use the default styles for an individual component simply by adding its scss from the `@un/styles` package.

```css
@forward "@un/styles/scss/components/button";
```

Note that some components (like Button) may also have their own set of tokens that we can customize like this:

```scss
@use "@un/styles/scss/components/button" with (
  $button-height: 2.5rem,
  $button-border-radius: 2px,
  $button-padding: 5px,
  $button-padding-lg: 0
);
```

Obviously, in addition to this, we can override or apply new styles to the component simply by writing our own stylesheets for them. There may be cases where we don't even want to use the default styles, and so we can forgo importing them for a given component.
