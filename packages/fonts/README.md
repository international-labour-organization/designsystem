# ILO Design System - Fonts Package

This package includes the ILO's brand fonts and typeface declarations. Fore more information about typography at the ILO, see the [ILO Brand Hub](https://brand.ilo.org/document/2#/typography/fonts).

## Usage

Simply add the project as a dependency in your package.json and then import the font-face declarations.

```scss
// SCSS
@import "~@ilo-org/fonts";
```

```js
// JavaScript with Webpack
import "~@ilo-org/fonts";
```

Then, in any css file

```scss
.my-type-class {
  font-family: "Overpass", sans;
  font-weight: normal;
  font-style: normal;
}
```

### As Google Fonts

If you need to import the fonts for Google for some reason, you can also do this:

```css
/* CSS */
@import url("@ilo-org/fonts/font-css/fonts-google.css");
```

## Fonts included

This package includes a subset of [Overpass](https://fonts.google.com/specimen/Overpass), [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans), and [Vazirmatn](https://fonts.google.com/specimen/Vazirmatn) fonts used in ILO projects.

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
| "Vazirmatn" | normal      | normal     | Vazirmatn-Regular       |
| "Vazirmatn" | normal      | italic     | Vazirmatn-Regular       |
| "Vazirmatn" | 700         | normal     | Vazirmatn-Bold          |

### Formats

All fonts-face declarations include files in the following formats:

- `.eot`
- `.woff`
- `.woff2`
- `.ttf`

## Raw CSS Import files

This pacakge includes a directory named `fonts-css` which contains raw css for importing font stacks. Included as of now:

| character set | font-family |
| ------------- | ----------- |
| Latin         | Noto Sans   |
| Latin         | Overpass    |
| Arabic        | Vazirmatn   |

(Note there is no Arabic character set for `Overpass`).

Note that both CSS imports refer to their character set's font-family as "Noto Sans" in the CSS. This allows switching out _just_ the font import files while loading CSS from the `styles` pacakge without having to load an entirely new version of `styles` package CSS. In an example font stack in an HTML `<head>` you might have the following logic (pseduo-code):

```
if is latin
	<link rel="stylesheet" href="css/fonts.css" type="text/css" media="screen" />
else
	<link rel="stylesheet" href="css/fonts-{{language}}.css" type="text/css" media="screen" />
endif
```

## Non-Latin Languages

### Arabic

This package includes [Vazirmatn](https://fonts.google.com/specimen/Vazirmatn), a modern Arabic typeface that provides excellent readability and proper rendering of Arabic text. Vazirmatn replaced Noto Sans Arabic to resolve line-height issues and ensure consistent typography across all languages.

| font-family | font-weight | font-style | file              |
| ----------- | ----------- | ---------- | ----------------- |
| "Vazirmatn" | normal      | normal     | Vazirmatn-Regular |
| "Vazirmatn" | 700         | normal     | Vazirmatn-Bold    |

## Chinese & Japense

Chinese and Japanese webfonts are very large and not often used. As such, when using the ILO Design System in a Chines or Japanese website, we recommend using the following system fonts:

### Chinese

`PingFang SC, Microsoft YaHei, 微软雅黑, sans-serif`

### Japanese

`Noto Sans CJK JP, Yu Gothic, Hiragino Sans`

Note: These font-family declarations are already included in the [@ilo-org/styles](../styles/) package. You will probably not have to make them yourself.
