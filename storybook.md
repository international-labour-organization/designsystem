## 🗂️ [Introduction](https://twig.ui.ilo.org/?path=/docs/introduction--page)

Welcome to the ILO Design System Twig component library. This resource is crafted to assist developers in creating accessible, user-friendly websites for Drupal that with the International Labour Organization's Visual Identity. The library offers a variety of easy-to-use components tailored for these popular platforms, ensuring both compliance with web accessibility standards and a cohesive visual style. Components are responsive and are ready-made for RTL layouts.

## Requirements

The Design System comprises a series of packages that you can install from the [npm](https://www.npmjs.com/) registry directly into your custom theme. As such, you'll need to have `npm` or similar package manager (`yarn` or `pnpm`) installed in your environment.

## Installation

You will want to install the latest versions of both `@ilo-org/twig` and `@ilo-org/twig`. The first includes all of the Twig and JavaScript files that you'll need to use the component, whereas the second includes the stylesheets that you'll need to render them.

In the root of your custom theme, run the following command:

`$ npm i @ilo-org/twig @ilo-org/styles`

⚠️ Note that the two libraries are versioned separately so you'll want to make sure that you're always using the latest versions of both to ensure they're both in sync. You should see an installation warning if you try to install incompatible versions.

## Usage

Now that you have installed the component library, you'll need to expose them so that you can integrate them into your templates.

### Bundle JavaScript

You'll want to start by moving the components' JavaScript to a distribution folder where you can serve it as static assets. The easiest way to do this is with a JavaScript bundler like [Rollup.js](https://rollupjs.org/). Here's a sample configuration to illustrate.

```js
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { globSync } from "glob";

const designSystemEntries = globSync(
  "node_modules/@ilo-org/twig/dist/components/**"
);

export default () => {
  return designSystemEntries.map((entry) => {
    return {
      input: entry,
      output: {
        dir: "dist/js",
        compact: true,
        format: "umd",
        name: entry.match(/([^\/]+)\.js$/)[1],
      },
      plugins: [
        nodeResolve(),
        commonjs(),
      ],
    };
  });
};
```

This will output all of the Components JavaScript files into a `dist/js` directory so you'll have a list of both the component JavaScript and the `Drupal.behavior` declarations that you'll need to attach them to components.

```tree
📦js
 ┣ 📜accordion.behavior.js
 ┣ 📜accordion.js
 ┣ 📜breadcrumb.behavior.js
 ┣ 📜breadcrumb.js
 ┣ 📜callout.behavior.js
 ┣ 📜callout.js
 ...
```
### Bundle CSS

The CSS files are available in the 'dist/css' subdirectories:

```tree
📦css
 ┣ 📂00-base
 ┃ ┣ 📜base.css
 ┣ 📂01-paragraphs
 ┃ ┣ 📜paragraphs.css
 ┃ ┗ 📜breadcrumb.css
 ┣ 📂02-templates
 ┃ ┣ 📜maintenance-page.css
 ...
```
### Populating the theme.libraries.yml file

The theme.libraries.yml should first include the base CSS file:

```yaml
  base:
    css:
      theme:
        dist/css/00-base/base.css: {}
        node_modules/@ilo-org/styles/css/global.css: {}
        node_modules/@ilo-org/styles/css/components/container.css: {}
```

Then, for each component, you have to declare the CSS file in the theme.libraries.yml file. For example, for the breadcrumb component:

```yaml
  breadcrumb:
    css:
      theme:
        dist/css/01-paragraphs/breadcrumb.css: {}
```

With the 'dist' directory in your theme, you have to declare the components in the theme.libraries.yml file. For example, for the breadcrumb component:
    
```yaml
  breadcrumb:
    css:
      theme:
        dist/css/01-paragraphs/breadcrumb.css: {}
    embeds:
      js:
        dist/js/embeds.js: {defer: true}
```
The documentation for the theme.libraries.yml file is available [here](https://www.drupal.org/docs/8/creating-custom-modules/adding-stylesheets-css-and-javascript-js-to-a-drupal-8-module).

In the template file of the component, you have to declare the component in the Twig file. For example, for the breadcrumb component:

```twig
{{ attach_library('ilo/breadcrumb') }}

{% include '@ilo-org/twig/breadcrumb/breadcrumb.twig' with {
  home: breadcrumb_home,
  links: breadcrumb_links,
} %}
```

A helper function in your theme.theme file to aggregate all .behavior.js files:
    
```php
/**
* Implements hook_library_info_build().
*
* Generate libraries for all components if they don't already exist.
* The library name will mapped be the name of the source CSS / JS file,
* e.g. site_header.css will be mapped to `{THEME}/site_header`.
*
*/
function theme_library_info_build() {
  // Define libraries based on the components.
  $extensions = ['css'];
  $directory = 'themes/custom/ilo/node_modules/@ilo-org/styles/css/components';
  $css = 'node_modules/@ilo-org/styles/css/components';
  $js = 'dist/js';
  $extensions = array_map('preg_quote', $extensions);
  $extensions = implode('|', $extensions);
  $file_scan = \Drupal::service('file_system')->scanDirectory($directory, "/{$extensions}$/");
  $libraries = [];
  foreach ($file_scan as $file) {
    $libraries[$file->name]['css'] = [
      'component' => [
        $css . '/' . $file->name . '.css' => [],
      ],
    ];
  if (file_exists('themes/custom/ilo/' . $js . '/' . $file->name . '.behavior.js')) {
    $libraries[$file->name]['js'] = [
      $js . '/' . $file->name . '.behavior.js' => [],
    ];
  }

  return $libraries; 
}
```

