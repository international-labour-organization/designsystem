# ILO Design System - Twig Package

This package provides the implementation of the Design System using [Twig](https://twig.symfony.com/doc/). It also includes a [Storybook](https://storybook.js.org/) project for documentation and development of Twig components, using [Wingsuit](https://wingsuit-designsystem.github.io/). Wingsuit uses [Twing](https://www.npmjs.com/package/twing), a Node port of Twig, to compile Twigs to HTML. It has dependencies on the following other @ilo-org packages:

- [@ilo-org/themes](./packages/themes)
- [@ilo-org/fonts](./packages/fonts)
- [@ilo-org/styles](./packages/styles)
- [@ilo-org/utils](./packages/utils)
- [@ilo-org/icons](./packages/icons)

#### Architecture

Because this is a modified version of Storybook which compliles and displays Twigs instead of React components, there are some notable differences between this and vanilla versions of Storybook. One prominent difference is in directory structure. Each component folder, located in `src/patterns/components`, contains the following files:

```
component.stories.jsx
component.twig
component.wingsuit.yml
index.js
```

and potentially, if Javascript interactivity exists, also the following:

```
component.behavior.js
component.js
```

Wingsuit consumes the `component.wingsuit.yml` file, which is a [UI Pattern YAML](https://wingsuit-designsystem.github.io/components/wingsuit/) borrowed from [Drupal](https://www.drupal.org/project/ui_patterns_settings), and uses this to populate and format the Storybook story for each components. **As such, one is limited in how much one can customize the Storybook experience.**

#### Javascript

In this package, Javascript is vanilla, with each component that requires Javascript functionality loading an [ES class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) named after the component, scoped and bound to the component's outermost element. Wingsuit is configured to instantiate view classes via a function that looks for a [data attribute](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) that calls the view name provided in that attribute. On page load, the app looks for elements with the data attribute `data-loadcomponent` and loads whatever modules have corresponding names, passing a reference to the `HTMLElement` containing the data attribute. All the JS is bundled by Webpack into one file, meaning the JS file can be cached and only has to be downloaded from the server once per session.

The JS is well-documented in comments, so poke around and you'll get the gist of how it works.

Here's an example of HTML component markup that will automatically call some Javascript. Given the following HTML:

```
<section class="component componentname" data-loadcomponent="ComponentName">
      <!-- component HTML goes here -->
</section>
```

Javascript will look in the `ComponentMap` Class for a JS Class called `ComponentName` and then create a new instance of that class and call it. If you've added a new JS Class specific to the module you've built, you'll need to import the JS file to `ComponenetMap` and add it to `ComponenteMap`'s exports. If you've created a new Class, you'll need to make sure to pass the param `element` into the constructor - this is a reference to the DOM element with the `data-loadcomponent` attribute on it. This allows you to scope your JS to each instance of an HTML module.

#### Installation and PNPM Commands

To install

```bash
npm i @ilo-org/twig
```

To start storybook

```bash
pnpm storybook
```

To build storybook

```bash
pnpm build:storybook
```

To build and start storybook

```bash
pnpm build
```

To build Twigs to be used in a CMS like Drupal (this will output Twigs and necessary JavaScript to a `/dist` folder.)

```bash
pnpm output
```

This package imports the `prefix` from the `themes` package; to manually import it, run

```bash
pnpm import:prefix
```

This package imports icon svgs from the `icons` package; to manually import them, run

```bash
pnpm import:svgs
```
