# @ilo-org/prettier-config

> Prettier configuration for ILO Design System projects

## Requirements

- Prettier 3.x
- Node.js with ES modules support

## Installation

```bash
npm install -D @ilo-org/prettier-config
# or
pnpm add -D @ilo-org/prettier-config
# or
yarn add -D @ilo-org/prettier-config
```

## Usage

### Basic Usage

Create a `prettier.config.js` file in your project root:

```js
import prettierConfig from "@ilo-org/prettier-config";

export default prettierConfig;
```

### Extending Configuration

You can extend the base configuration and override specific options:

```js
import prettierConfig from "@ilo-org/prettier-config";

export default {
  ...prettierConfig,
  printWidth: 100, // Override default
  // Add your own custom options
};
```

### Using with package.json

Alternatively, you can reference the config directly in your `package.json`:

```json
{
  "prettier": "@ilo-org/prettier-config"
}
```

## Configuration Options

This configuration includes the following Prettier settings:

| Option          | Value   | Description                                                    |
| --------------- | ------- | -------------------------------------------------------------- |
| `endOfLine`     | `lf`    | Use Unix-style line endings (LF)                               |
| `singleQuote`   | `false` | Use double quotes instead of single quotes                     |
| `tabWidth`      | `2`     | Use 2 spaces for indentation                                   |
| `trailingComma` | `es5`   | Add trailing commas where valid in ES5 (objects, arrays, etc.) |
| `printWidth`    | `80`    | Wrap lines at 80 characters                                    |

### Why These Settings?

- **`endOfLine: "lf"`** - Ensures consistent line endings across all platforms (Unix/Linux/macOS)
- **`singleQuote: false`** - Uses double quotes, which is consistent with JavaScript/TypeScript conventions
- **`tabWidth: 2`** - Two spaces provide a good balance between readability and horizontal space
- **`trailingComma: "es5"`** - Trailing commas make diffs cleaner and are valid in ES5 for objects and arrays
- **`printWidth: 80`** - Standard line length that works well for code reviews and side-by-side comparisons

## Integration with ESLint

This Prettier configuration is designed to work seamlessly with `@ilo-org/eslint-config`, which includes `eslint-plugin-prettier` and `eslint-config-prettier` to ensure Prettier formatting is enforced and conflicts with ESLint are resolved.

## Examples

### TypeScript/JavaScript Project

```js
// prettier.config.js
import prettierConfig from "@ilo-org/prettier-config";

export default prettierConfig;
```

### Monorepo Setup

For monorepos, you can share the config across packages:

```js
// prettier.config.js (root)
import prettierConfig from "@ilo-org/prettier-config";

export default prettierConfig;
```

### Custom Overrides

```js
// prettier.config.js
import prettierConfig from "@ilo-org/prettier-config";

export default {
  ...prettierConfig,
  // Override for specific file types
  overrides: [
    {
      files: "*.md",
      options: {
        printWidth: 100,
      },
    },
  ],
};
```

## 📝 License

Licensed under the [Apache 2.0 License](/LICENSE).
