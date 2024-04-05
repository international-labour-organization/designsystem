# Contributing

ILO Design System is an open-source project and we welcome your contributions! Before submitting a pull request, please take a moment to review the following guidelines.

## Branches

| Branch    | Purpose                            |
| --------- | ---------------------------------- |
| `main`    | The latest version of all packages |
| `develop` | The next release of all packages   |

## Contribution workflow

1. Fork and clone the repo
2. Create a new branch from the `develop` branch
3. Make your changes and [add a changeset](#versioning) identifying the changes and affected packages
4. Push your branch to the forked version of the repo
5. Open a pull request back to the `develop` branch of the main repo

## Versioning

The project uses [changesets](https://github.com/changesets/changesets) to manage package versioning. All pull requests that will affect the project's semantic versioning must include a changest.

See more information on [how to add a changeset](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md)

## Conventions

Contributions should respect the following conventions for branch names, commit messages and pull request descriptions

### Commits

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

## Getting started

### Setup

Use [nvm](https://github.com/nvm-sh/nvm) to make sure you have the correct version of node installed.

```bash
nvm use
```

Install [pnpm](https://pnpm.io/). Check the [package.json](<[../package.json](https://github.com/international-labour-organization/designsystem/blob/1de14fe3a6c3edb8991720b189a870f2f132fc73/package.json#L9)>) to get the correct version. Example:

```bash
npm -i -g pnpm@8.6.0
```

### Installing Storybook dependencies

You can install all of the project dependencies with `pnpm install`. This is sufficient for building the `twig` and `react` libraries.

However, if you want to run the Storybook documentation sites for either `twig` or `react`, you will need to run a specific install script for either package in order to avoid dependency conflicts.

```bash
pnpm react:install
```

```bash
pnpm twig:install
```

These will clean out all project installation and build files (`node_modules`, `pnpm-lock.json`, `dist/`, etc.) and install all project dependencies for either `react` or `twig`. That includes dependencies for all of the other packages in the project that the `react` and `twig` packages depend on.

### React and Twig Libraries

Build both the `react` and `twig` libraries in one command. Before you run this, you should run the global `pnpm install` command.

```bash
pnpm build:libs
```

You can also build the libraries separately (in addition to each of their respective dependencies) with the following commands.

```bash
pnpm twig:build:lib
```

```bash
pnpm react:build:lib
```

This is handy if you only need to build the library for a given project, but what to avoid have to build the Storybook too.

### React and Twig Storybooks

Build React Storybook and dependent packages

```bash
pnpm react:build:docs
```

Shortcut to only install and build React deps for development

```bash
pnpm react:dev:prep
```

Start React storybook in dev mode

```bash
pnpm react:dev:docs
```

Build Twig Storybook and dependent packages

```bash
pnpm twig:build:docs
```

Shortcut to only install and build Twig deps for development

```bash
pnpm twig:dev:prep
```

Start Twig storybook in dev mode

```bash
pnpm twig:dev:docs
```

### Testing, linting, formatting and type checking

Format all code in the repository

```bash
pnpm format
```

Lint all code in the repository

```bash
pnpm lint
```

Check types for all packages in the project

```bash
pnpm check:types
```

Run tests for all packages in the project

```bash
pnpm test:all
```

You can also perform either of the above in a specific package like this:

```bash
pnpm --filter react format
```

### Clean dependencies and build artefacts

Removes all dependencies and build artefacts

```bash
pnpm clean
```

Removes only dependency files (node_modules, lock files, etc.)

```bash
pnpm clean:deps
```

Removes only build artefacts

```bash
pnpm clean:build
```

### Other commands

Checks to see if multiple packages are using different version of the same dependencies

```bash
pnpm check:deps
```

## Conventions

### Twig

Components in the Twig package must follow the following naming conventions and be placed in the appropriate folders. See the below example where "component" can be substituted with the name of the component.

```
patterns
└── components
    ├── component
    │   ├── sub-component.twig
    │   ├── component.behavior.js
    │   ├── component.js
    │   ├── component.stories.jsx
    │   ├── component.twig
    │   ├── component.wingsuit.yml
    │   └── index.js
```

In this example:

- The name of the component directory and the main component twig file are the same: `component`
- `component.js` exports a single JavaScript class which determines the behaviour of the component
- `component.behavior.js` attaches an instance of the Component class from `component.js` to an instance of the component rendered by the Twig file
- `component.wingsuit.yml` is a [Drupal UI pattern definition](https://ui-patterns.readthedocs.io/en/8.x-1.x/content/patterns-definition.html)
