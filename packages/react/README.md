# ILO Design System - React Package

This package provides the implementation of the Design System using [React](https://reactjs.org). It also includes a [Storybook](https://storybook.js.org/) project for documentation and development of the components in the system. It has dependencies on the following other @ilo-org packages:

- [@ilo-org/themes](./packages/themes)
- [@ilo-org/fonts](./packages/fonts)
- [@ilo-org/styles](./packages/styles)
- [@ilo-org/icons](./packages/icons)
- [@ilo-org/icons-react](./packages/icons-react)

## Installation

To install

```bash
npm i @ilo-org/react
```

To start storybook

```bash
pnpm storybook
```

To build storybook

```bash
pnpm build:storybook
```

To test formatting

```bash
pnpm format
```

To test formatting and fix errors

```bash
pnpm format:fix
```

To lint

```bash
pnpm lint
```

To test formatting and fix errors

```bash
pnpm lint:fix
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
