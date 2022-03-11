# ILO Design System

## Status: Proof of Concept

## Packages

- [themes](./packages/themes)
- [fonts](./packages/fonts)
- [styles](./packages/styles)
- [brand-assets](./packages/brand-assets)
- [icons](./packages/icons)
- [react icons](./packages/icons-react)
- [react](./packages/react)
- [twig](./packages/twig)

## Getting Started

Set the appropriate node version using [nvm](https://github.com/nvm-sh/nvm).

```bash
nvm use
```

If not yet installed, install [pnpm](https://pnpm.io/).

```bash
npm i -g pnpm
```

Install dependencies using pnpm.

```bash
pnpm recursive install
```

Build local packages.

```bash
pnpm run build
```

Start up storybook.

```bash
pnpm run start
```

Run tests.

```bash
pnpm run test
```
