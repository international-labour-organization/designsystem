# Maestro

Maestro is a library for building front-end component libraries for [Drupal](https://www.drupal.org/) using [Storybook](https://storybook.js.org/).

It includes a collection of utilities for bundling Twig templates and JavaScript files so that you can develop components in isolation using the same syntax and conventions you'd use in a Drupal theme.

## Inspiration and alternatives

- Maestro makes a smaller, more flexible, but lower-level alternative to [Wingsuit](https://github.com/wingsuit-designsystem/wingsuit)
- It takes a lot of inspiration from [vite-plugin-twig-drupal](https://github.com/larowlan/vite-plugin-twig-drupal)

## Pre-requisites

Before using Maestro, you should have basic knowledge of the following:

- [UI Patterns](https://www.drupal.org/project/ui_patterns)
- [Storybook](https://storybook.js.org/)
- [Drupal JS API](https://www.drupal.org/docs/drupal-apis/javascript-api/javascript-api-overview)

## Installation

```shell
npm i @ilo-org/maestro
```

## Setup

The Maestro package has three major exports.

- `@ilo-org/maestro` - The main export that introduces a `Maestro` object
- `@ilo-org/maestro/storybook` - The storybook decorators/helpers
- `@ilo-org/maestro/plugin` - A vite plugin that helps to compile the twig components

To start with Maestro, you need a `html` storybook template using [Vite as a builder tool](https://storybook.js.org/docs/builders/vite)

```bash
npx storybook@latest init --type="html"
```

After your Storybook project is scaffolded, you can start adding Maestro.

### Vite plugin

First, we need to add the vite plugin from Maestro to Storybook's `vite.config.js`

```js
// vite.config.js

import { defineConfig } from "vite";
import { join } from "node:path";

import { UIPatterns } from "@ilo-org/maestro/plugin";

export default defineConfig({
  plugins: UIPatterns({
    namespaces: {
      components: join(__dirname, "..", "src/components"),
    },
  }),
});
```

The Vite plugin takes the following properties.

| property     | description                                                                                | required |
| ------------ | ------------------------------------------------------------------------------------------ | -------- |
| `namespaces` | A key-value pair of the namespace for your components and the directory it should point to | Yes      |
| `globals`      | A key-value pair of global variables that should be available to the Twig templates       | No       |
| `dynamics`     | An array of Twig templates names that use dynamic includes. [See more info below](#dynamic-includes).  |    No      |


### Storybook decorators

To enable Drupal's JS API in the storybook, you need first to add `Behavior Decorator` to the storybook's preview file

```js
// .storybook/preview.js

import { BehaviorDecorator } from "@ilo-org/maestro/storybook";

/** @type { import('@storybook/html').Preview } */
const preview = {
  decorators: [BehaviorDecorator],
};

export default preview;
```

and then you need to inject the `head` property to the storybook config and merge the vite config with the plugin mentioned above

```js
// .storybook/vite.config.js

import { mergeConfig } from "vite";
import alternate from "./vite.config.js";

import { head } from "@ilo-org/maestro/storybook";


/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ["../public"],
  core: {
    builder: "@storybook/builder-vite",
  },
  addons: [...],
  framework: {
    name: getAbsolutePath("@storybook/html-vite"),
    options: {},
  },
  viteFinal: (config) => {
    return mergeConfig(alternate, config);
  },
  previewHead: head,
};
export default config;
```

## Creating a story

### Component structure

Let's assume that your components are structured something like this:

```
📦accordion
┣ 📜accordion.behavior.js
┣ 📜accordion.component.yml
┣ 📜accordion.js
┣ 📜accordion-item.twig
┗ 📜accordion.twig
```

Here we have a Twig template, a JS file for interactivity, a [behaviors file](https://www.drupal.org/docs/drupal-apis/javascript-api/javascript-api-overview) for attaching the JavaScript to the component instance and a [pattern definitions file](https://www.drupal.org/docs/contributed-modules/ui-patterns/define-your-patterns) `accordion.component.yml` that determines the fields and settings that can be passed from Drupal to the component.

### Story structure

To create a story you need to use the main `Maestro` object. Maestro has a `create` method that accepts the following:

- component (actual twig component)
- pattern definition (ui pattern definition in yaml)

And in return, you get the object.

```js
{
  meta: {...}
  stories: [...],
}
```

The stories key will always have 1 element, which is the Default story, and if the pattern definition has any variants, you will get all other stories in an array

Here's an example of how to create a story

```js
import Accordion from "../components/accordion/accordion.twig";
import AccordionPatterns from "../components/accordion/accordion.pattern.yml";
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Accordion, AccordionPatterns);

const Meta = {
  title: "Components/Content/Accordion",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default, Scrollable, Focus] = story.stories;

export default Meta;

export { Default, Scrollable, Focus };
```

In this example, Maestro builds a component using the Twig template and then derives stories to create based on the pattern definitions file.

Any JavaScript is loaded and attached to the component automatically.

### Including sub-components

Twig includes work automatically. For example, assuming our `accordion.twig` component uses an `accordion-item.twig` component, then it would look like this:

```twig
<ul>
  {% for item in items %} {% include "@components/accordion/accordion-item.twig"
  with { label: item.label ... } %} {% endfor %}
</ul>
```

In this example, Maestro will import the `accordion-item.twig` template into the `accordion.twig` template so that it can be rendered correctly.

#### Dynamic includes

Dynamic includes are small caveat to this rule and require some additional setup. Consider the following example.

```twig
{# my-dynamic-component.twig #}
<div>
  {% for item in items %}
    {% include '@components/' ~ item.component ~ '/' ~ item.component ~ '.twig' with item.componentdata %}
  {% endfor %}
</div>
```

Here, the component is importing sub-component dynamically based on the arguments passed to it. Maestro can handle this situation as well with some additional configuration to its Vite plugin.

```js
// vite.config.js

export default defineConfig({
  plugins: UIPatterns({
    ...
    dynamics: ["my-dynamic-component"]
  }),
});
```

Simply pass an array of components that use dynamic imports to the `dynamics` property of the Vite plugin and you're off to the races.


### Variants

There are a few rules for variants:

- Variants will inherit any setting from the default definition
- Variants named default will be ignored because Default is generated by the pattern definition itself
