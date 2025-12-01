# ILO Design System - Icons

> This package only ships raw icon **assets**. The recommended way to use ILO icons in production is through the Icon components that already ship with our component libraries.

## Prefer Icon Components

- ⚛️ [React Icon component docs](https://react.ui.ilo.org/?path=/docs/components-user-interface-icon--docs)
- 🌿 [Twig Icon component docs](https://twig.ui.ilo.org/?path=/docs/components-user-interface-icon--docs)

Those component packages (`@ilo-org/react` and `@ilo-org/twig`) already depend on the correct asset pipeline, handle accessibility, and stay up to date automatically. Install this package directly only when you need to consume the underlying files (for example, during a custom build or CMS integration).

## Icons Gallery

The ILO Design System includes over 70 icons for a wide variety of use cases. [See the complete list](http://localhost:6006/?path=/docs/components-user-interface-icon--docs#list-of-icons).

## Installation

```bash
npm install @ilo-org/icons
```

## Export formats

All icons share the same naming convention (`arrow_down`, `social_linkedin`, etc.). You can explore the catalog in Storybook (links above) or by browsing the `svg/` folder inside this package. We expose the assets in three formats to cover different build pipelines.

### 1. CSS data URLs

`@ilo-org/icons/build/scss/icons.scss` exports a Sass map named `$icons`, where every entry is a `data:` URL string. This is the easiest way to inject icons via CSS pseudo-elements.

```scss
@use "@ilo-org/icons/build/scss/icons" as ilo-icons;

.ilo-link::after {
  content: "";
  width: 1.25rem;
  height: 1.25rem;
  background: no-repeat center/contain map-get(ilo-icons.$icons, "arrow_right");
}
```

### 2. JavaScript SVG objects

Every icon/size combination is available as a plain JavaScript object that describes the SVG tree. ES modules live under `@ilo-org/icons/es/<icon>/<size>.js` and CommonJS copies are under `lib/`. These objects are useful when you need to render icons in a framework-agnostic way.

```js
import ArrowDown24 from "@ilo-org/icons/es/arrow_down/24";

function renderIcon(icon) {
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, icon.elem);
  Object.entries(icon.attrs).forEach(([attr, value]) => {
    svg.setAttribute(attr, value);
  });
  icon.content?.forEach((child) => {
    const node = document.createElementNS(svgNS, child.elem);
    Object.entries(child.attrs || {}).forEach(([attr, value]) => {
      node.setAttribute(attr, value);
    });
    svg.appendChild(node);
  });
  return svg;
}

document.querySelector("#cta").append(renderIcon(ArrowDown24));
```

### 3. Raw SVG files

The actual SVG source files are published under `@ilo-org/icons/svg/<icon>.svg`. Load them however your toolchain prefers:

- bundlers that support the `?raw` convention:

  ```js
  import arrowDownSvg from "@ilo-org/icons/svg/arrow_down.svg?raw";
  element.innerHTML = arrowDownSvg;
  ```

- build scripts, CMS pipelines, or Drupal themes can read the file directly from `node_modules/@ilo-org/icons/svg`.

Because these are static files, you can also copy them into a CDN or asset pipeline if you need to reference them outside of a bundler.

## Contributing

We're always looking for contributors to help us fix bugs, build new features,
or help us improve the project documentation. If you're interested, definitely
check out our [Contributing Guide](/.github/CONTRIBUTING.md)! 👀

## Acknowledgements

This package is heavily inspired by [@carbon/icons](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)

## License

Licensed under the [Apache 2.0](/LICENSE).
