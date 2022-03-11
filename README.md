# ILO Design System

## Status: Proof of Concept

## Packages

- [react](./packages/react)
- [styles](./packages/styles)
- [fonts](./packages/fonts)
- [icons](./packages/icons)
- [react icons](./packages/icons-react)

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
