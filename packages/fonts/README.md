# ILO Design System - Fonts Package

## Status: Proof of Concept

This package includes the ILO's brand fonts and typeface declarations. Fore more information about typography at the ILO, see the [ILO Brand Hub](https://brand.ilo.org/d/XdDMx745iKTL/visual-identity#/typography/fonts).

## Usage

Simply add the project as a dependency in your package.json and then import the font-face declarations.

```scss
// SCSS
@import "~@ilo/fonts";
```

```js
// JavaScript with Webpack
import "~@ilo/fonts";
```

Then, in any css file

```scss
.my-type-class {
  font-family: "Overpass", sans;
  font-weight: normal;
  font-style: normal;
}
```

## Fonts included

This package includes a subset of [Overpass](https://fonts.google.com/specimen/Overpass) and [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) fonts used in ILO projects.

| font-family | font-weight | font-style | file                    |
| ----------- | ----------- | ---------- | ----------------------- |
| "Overpass"  | normal      | normal     | Overpass-Regular        |
| "Overpass"  | normal      | italic     | Overpass-Italic         |
| "Overpass"  | 300         | normal     | Overpass-Light          |
| "Overpass"  | 700         | normal     | Overpass-SemiBold       |
| "Overpass"  | 700         | italic     | Overpass-SemiBoldItalic |
| "Noto Sans" | normal      | normal     | NotoSans                |
| "Noto Sans" | normal      | italic     | NotoSans-Italic         |
| "Noto Sans" | 700         | normal     | NotoSans-Bold           |
| "Noto Sans" | 700         | italic     | NotoSans-BoldItalic     |

### Formats

All fonts-face declarations include files in the following formats:

- `.eot`
- `.woff`
- `.woff2`
- `.ttf`
