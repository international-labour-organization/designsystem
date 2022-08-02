# ILO Design System - Twig Package

This package provides the implementation of the Design System using [Twig](https://twig.symfony.com/doc/). It also includes a [Storybook](https://storybook.js.org/) project for documentation and development of Twig components, using [Wingsuit](https://wingsuit-designsystem.github.io/).

#### PNPM

To start storybook

```bash
pnpm storybook
```

To build storybook

```bash
pnpm build:storybook
```

To build Twigs to be used in a CMS like Drupal (this will output Twigs and necessary JavaScript to a `/dist` folder.)

```bash
pnpm output
```
