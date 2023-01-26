# ILO Design System - Brand Assets

Static brand assets for use in digital and software products using the ILO Design System.

## Installation

```bash
npm i @ilo-org/brand-assets
```

## Basic Usage

### 1. Import the image directly

This assumes that you're using a module bundler like [Webpack](https://webpack.js.org/) that will allow you to import the image into a JavaScript file and then include it in a production bundle where the import will be interpolated into a file path.

In this example, we're importing a logo from the from `@ilo-org/brand-assets` package and providing it to a [React](https://www.reactjs.com) component.

```jsx
import ilo_logo from "@ilo-org/brand-assets/logo_en_horizontal_blue.svg";

export const Logo = (props) => <img src={ilo_logo} {...props} />;
```

If you're using [Next.js](https://nextjs.org/), you should use its [`next/image`](https://nextjs.org/docs/api-reference/next/image) component to do this.

### 2. Import the image URL

```jsx
import { logo_en_horizontal_blue } from "@ilo-org/brand-assets";

export const Logo = (props) => <img src={logo_en_horizontal_blue} {...props} />;
```

This will give you a [URL object](https://developer.mozilla.org/en-US/docs/Web/API/URL) with normalized path to the file's location in the package. This is the easiest solution if you're able to serve them directly from the `node_modules` folder.

Conversely, it will not work in build systems that wont't serve assets from `node_modules` and that need to bundle them directly.

## List of Assets

Additional assets will be added to this package in future versions.

### ILO Logo

| Image                                                               | Language | Filetype | Exported as                    | Filename                       |
| ------------------------------------------------------------------- | -------- | -------- | ------------------------------ | ------------------------------ |
| <img src="./src/assets/logo_en_horizontal_blue.png" width="200" />  | English  | png      | `logo_en_horizontal_blue_png`  | `logo_en_horizontal_blue.png`  |
| <img src="./src/assets/logo_en_horizontal_blue.svg" width="200" />  | English  | svg      | `logo_en_horizontal_blue_svg`  | `logo_en_horizontal_blue.svg`  |
| <img src="./src/assets/logo_en_horizontal_white.png" width="200" /> | English  | png      | `logo_en_horizontal_white_png` | `logo_en_horizontal_white.png` |
| <img src="./src/assets/logo_en_horizontal_white.svg" width="200" /> | English  | svg      | `logo_en_horizontal_white_svg` | `logo_en_horizontal_white.svg` |
| <img src="./src/assets/logo_fr_horizontal_blue.png" width="200" />  | French   | png      | `logo_fr_horizontal_blue_png`  | `logo_fr_horizontal_blue.png`  |
| <img src="./src/assets/logo_fr_horizontal_blue.svg" width="200" />  | French   | svg      | `logo_fr_horizontal_blue_svg`  | `logo_fr_horizontal_blue.svg`  |
| <img src="./src/assets/logo_fr_horizontal_white.png" width="200" /> | French   | png      | `logo_fr_horizontal_white_png` | `logo_fr_horizontal_white.png` |
| <img src="./src/assets/logo_fr_horizontal_white.svg" width="200" /> | French   | svg      | `logo_fr_horizontal_white_svg` | `logo_fr_horizontal_white.svg` |
| <img src="./src/assets/logo_es_horizontal_blue.png" width="200" />  | Spanish  | png      | `logo_es_horizontal_blue_png`  | `logo_es_horizontal_blue.png`  |
| <img src="./src/assets/logo_es_horizontal_blue.svg" width="200" />  | Spanish  | svg      | `logo_es_horizontal_blue_svg`  | `logo_es_horizontal_blue.svg`  |
| <img src="./src/assets/logo_es_horizontal_white.png" width="200" /> | Spanish  | png      | `logo_es_horizontal_white_png` | `logo_es_horizontal_white.png` |
| <img src="./src/assets/logo_es_horizontal_white.svg" width="200" /> | Spanish  | svg      | `logo_es_horizontal_white_svg` | `logo_es_horizontal_white.svg` |

### Favicon

| Filetype | Exported as | Filename      |
| -------- | ----------- | ------------- |
| ico      | `favicon`   | `favicon.ico` |

## Contributing

ILO Design System is an open-source project and we welcome your contributions! Before submitting a pull request, please take a moment to review the [contribution guidelines](./contributing.md).
