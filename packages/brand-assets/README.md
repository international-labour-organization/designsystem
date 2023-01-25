# ILO Design System - Brand Assets

Static brand assets (pngs, favicons, svgs, etc.) for use in digital and software products using the ILO
Design System.

## Installation

```bash
npm i @ilo-org/brand-assets
```

## Basic Usage

This package assuming you're using a module bundler like [Webpack](https://webpack.js.org/) or [Vite](https://vitejs.dev/) that will allow to import the image into a JavaScript file and then include it in a production bundle where the JavaScript import will be interpolated into a file path.

There are two ways that you can do this.

### 1. Import the image directly

This will work in most Webpack5 build systems like [Create React App](https://create-react-app.dev/docs/adding-images-fonts-and-files/);

```jsx
import ilo_logo from "@ilo-org/brand-assets/logo_en_horizontal_blue.svg";

const ReactComponent = () => <img src={ilo_logo} />;
```

If you're using [Next.js](https://nextjs.org/), you should use its [`next/image`](https://nextjs.org/docs/api-reference/next/image) component to do this.

### 2. Import the image URL

```jsx
import { logo_en_horizontal_blue } from "@ilo-org/brand-assets";

const ReactComponent = () => <img src={logo_en_horizontal_blue} />;
```

This will give you a normalized path to the file's location in the package. This may not work in situations like Next.js that have their own pipelines for static assets.

## List of Assets

Additional assets will be added to this package in future versions.

### ILO Logo

| Language | Color | Orientation | Filetype | Exported as                    | Filename                       |
| -------- | ----- | ----------- | -------- | ------------------------------ | ------------------------------ |
| English  | blue  | horizontal  | png      | `logo_en_horizontal_blue_png`  | `logo_en_horizontal_blue.png`  |
| English  | blue  | horizontal  | svg      | `logo_en_horizontal_blue_svg`  | `logo_en_horizontal_blue.svg`  |
| English  | white | horizontal  | png      | `logo_en_horizontal_white_png` | `logo_en_horizontal_white.png` |
| English  | white | horizontal  | svg      | `logo_en_horizontal_white_svg` | `logo_en_horizontal_white.svg` |
| French   | blue  | horizontal  | png      | `logo_fr_horizontal_blue_png`  | `logo_fr_horizontal_blue.png`  |
| French   | blue  | horizontal  | svg      | `logo_fr_horizontal_blue_svg`  | `logo_fr_horizontal_blue.svg`  |
| French   | white | horizontal  | png      | `logo_fr_horizontal_white_png` | `logo_fr_horizontal_white.png` |
| French   | white | horizontal  | svg      | `logo_fr_horizontal_white_svg` | `logo_fr_horizontal_white.svg` |
| Spanish  | blue  | horizontal  | png      | `logo_es_horizontal_blue_png`  | `logo_es_horizontal_blue.png`  |
| Spanish  | blue  | horizontal  | svg      | `logo_es_horizontal_blue_svg`  | `logo_es_horizontal_blue.svg`  |
| Spanish  | white | horizontal  | png      | `logo_es_horizontal_white_png` | `logo_es_horizontal_white.png` |
| Spanish  | white | horizontal  | svg      | `logo_es_horizontal_white_svg` | `logo_es_horizontal_white.svg` |

### Favicon

| Filetype | Exported as | Filename      |
| -------- | ----------- | ------------- |
| ico      | `favicon`   | `favicon.ico` |

## Contributing

ILO Design System is an open-source project and we welcome your contributions! Before submitting a pull request, please take a moment to review the [contribution guidelines](./contributing.md).
