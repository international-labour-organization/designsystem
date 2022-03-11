# ILO Design System - Brand Assets

## Status: Proof of Concept

> Static brand assets (pngs, favicons, jpgs, etc.) for use in digital and software products using the ILO
> Design System.

## Getting started

To install `@ilo/brand-assets` in your project, you will need to run the
following command using [npm](https://www.npmjs.com/):

```bash
npm install -S @ilo/brand-assets
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command
instead:

```bash
yarn add @ilo/brand-assets
```

## Using the package

### Direct Reference

Consume the assets by directly referencing the file from the public assets directory created on build (`@ilo/brand-assets/dist/public/`).

### React

To cosume the package in a react app, simply import the image of interest, e.g.:

``` jsx
import { logo } from '@ilo/brand-assets';
```

The logo will be the src string of the image, that you can pass directly into an img tag to render the brand asset.

```
<img src={logo} />
```
