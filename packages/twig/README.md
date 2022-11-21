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

## Questions and Feedback

(TBD)

## Accessibility Standards

(TBD)

## Contributing

ILO Design System is an open-source project and we welcome your contributions! Before submitting a pull request, please take a moment to review the following guidelines.

### Branches

| Branch    | Purpose                            |
| --------- | ---------------------------------- |
| `main`    | The latest version of all packages |
| `develop` | The next release of all packages   |

### Contribution workflow

1. Fork and clone the repo
2. Create a new branch from the `develop` branch
3. Make your changes and [add a changeset](#versioning) identifying the changes and affected packages
4. Push your branch to the forked version of the repo
5. Open a pull request back to the `develop` branch of the main repo

### Versioning

The project uses [changesets](https://github.com/changesets/changesets) to manage package versioning. All pull requests that will affect the project's semantic versioning must include a changest.

See more information on [how to add a changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md)

### Conventions

Contributions should respect the following conventions for branch names, commit messages and pull request descriptions

#### Commits

Commits should follow [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#commit).

```
<type>(<scope>): <subject>
```

Examples:

```
fix(react): change button color on hover
feat(twig): add button component
ci(github): add release workflow
perf(react): improve modal animations
```

#### Types

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

#### Scopes

This should be a package name or an aspect of the project's configuration.

### Branches

Branch names should broadly mirror the same convention as commits.

Examples:

```
feat/react/modal-wrapper
fix/twig/modal-wrapper
```

### Pull requests

Pull requests should include a descriptive name and detailed explanation of what merging the pull request will accomplish. Authors should make sure to reference Github issues that the the pull request will fix or affect.

## Building the project

Use [nvm](https://github.com/nvm-sh/nvm) to make sure you have the correct version of node installed.

```bash
nvm use
```

Install [pnpm](https://pnpm.io/).

```bash
npm i -g pnpm
```

Install dependencies

```bash
pnpm recursive install
```

Build all packages.

```bash
pnpm build:all
```

Start React storybook

```bash
pnpm start:react-storybook
```

Start Twig storybook

```bash
pnpm start:twig-storybook
```

Check types

```bash
pnpm check:types
```

Run all tests

```bash
pnpm test:all
```
