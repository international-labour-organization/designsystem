# @ilo-org/eslint-config

> ESLint flat configuration for ILO Design System projects

## Requirements

- ESLint 9.x
- Node.js with ES modules support

## Installation

```bash
npm install -D @ilo-org/eslint-config
# or
pnpm add -D @ilo-org/eslint-config
# or
yarn add -D @ilo-org/eslint-config
```

## Available Configurations

This package provides three ESLint flat configurations:

| Config Name   | Description                            | Includes                                  | Extends       |
| ------------- | -------------------------------------- | ----------------------------------------- | ------------- |
| `js`          | Base JavaScript configuration          | ESLint recommended, Prettier, base rules  | None          |
| `recommended` | TypeScript configuration (recommended) | TypeScript ESLint, type-checking, base JS | `js`          |
| `react`       | React + TypeScript configuration       | React, React Hooks, jsx-a11y, base TS     | `recommended` |

### Configuration Details

#### `js` - Base JavaScript Config

- ESLint recommended rules
- Prettier integration (error level)
- Browser and Node.js globals
- Base JavaScript rules (console, imports, unused vars, etc.)

#### `recommended` - TypeScript Config

- Everything from `js`
- TypeScript ESLint with type-checking
- TypeScript-specific rules
- Requires `tsconfig.json` in your project root

#### `react` - React + TypeScript Config

- Everything from `recommended`
- React plugin (recommended + jsx-runtime)
- React Hooks plugin
- jsx-a11y accessibility rules
- React-specific rule overrides

## Usage

### Basic Usage

Import and use a configuration directly:

```js
import configs from "@ilo-org/eslint-config";

export default configs.recommended;
```

### Extending Configurations

You can extend any configuration and add your own rules:

```js
import configs from "@ilo-org/eslint-config";

export default [
  ...configs.recommended,
  {
    rules: {
      "no-console": "off", // Override default warning
      "my-custom-rule": "error",
    },
  },
];
```

### Using Multiple Configurations

You can combine configurations:

```js
import configs from "@ilo-org/eslint-config";

export default [
  ...configs.js,
  {
    files: ["**/*.ts", "**/*.tsx"],
    // Add TypeScript-specific rules
  },
];
```

## Ignored Files

The following files and directories are automatically ignored:

- `**/*.config.{js,mjs,ts}` - Configuration files
- `**/*.setup.{js,mjs,ts}` - Test setup files
- `lib/` - Compiled output
- `dist/` - Distribution files
- `build/` - Build output
- `.storybook/` - Storybook configuration
- `storybook-static/` - Storybook static output

## Opinionated Rules

This configuration includes several opinionated rules to maintain code quality and consistency:

### Severity Legend

- 🚨 **Error** - Will fail linting
- 🚧 **Warning** - Will show a warning
- ✅ **Allowed** - Rule is disabled/allowed

### JavaScript Rules

| Rule                   | Severity | Description                                                       |
| ---------------------- | -------- | ----------------------------------------------------------------- |
| `prettier/prettier`    | 🚨       | Enforces Prettier formatting (error level)                        |
| `no-console`           | 🚧       | Warns on `console.log`, allows `console.warn` and `console.error` |
| `no-duplicate-imports` | 🚧       | Prevents duplicate imports from the same module                   |
| `no-await-in-loop`     | 🚧       | Warns when using `await` inside loops                             |
| `no-unused-vars`       | 🚧       | Warns on unused variables; ignores variables prefixed with `_`    |

### TypeScript Rules

| Rule                                              | Severity | Description                                    |
| ------------------------------------------------- | -------- | ---------------------------------------------- |
| `@typescript-eslint/consistent-type-definitions`  | 🚨       | Enforces `interface` over `type` for objects   |
| `@typescript-eslint/class-literal-property-style` | 🚧       | Normalizes class literal property style        |
| `@typescript-eslint/no-duplicate-enum-values`     | 🚧       | Prevents duplicate enum values                 |
| `@typescript-eslint/prefer-for-of`                | 🚧       | Enforces `for-of` loops over traditional loops |
| `@typescript-eslint/no-unused-vars`               | 🚧       | Warns on unused variables; ignores `_` prefix  |
| `@typescript-eslint/ban-ts-comment`               | ✅       | Allows `@ts-ignore` and `@ts-expect-error`     |
| `@typescript-eslint/ban-ts-ignore`                | ✅       | Allows `@ts-ignore` comments                   |

### React Rules

| Rule                                              | Severity | Description                                      |
| ------------------------------------------------- | -------- | ------------------------------------------------ |
| `jsx-a11y/label-has-associated-control`           | 🚨       | Ensures labels are associated with form controls |
| `jsx-a11y/click-events-have-key-events`           | ✅       | Allows click handlers without keyboard events    |
| `jsx-a11y/media-has-caption`                      | ✅       | Allows media without captions                    |
| `jsx-a11y/no-noninteractive-element-interactions` | ✅       | Allows interactions on non-interactive elements  |
| `react/prop-types`                                | ✅       | Disabled (TypeScript handles type checking)      |
| `react/display-name`                              | ✅       | Disabled                                         |

## Included Plugins

- **ESLint** - Core recommended rules
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript linting and type-checking
- **React** - React best practices
- **React Hooks** - React Hooks rules
- **jsx-a11y** - Accessibility rules for JSX

## TypeScript Support

The `recommended` and `react` configurations require a `tsconfig.json` file in your project root. The configuration automatically resolves this file for type-aware linting.

## Examples

### JavaScript Project

```js
// eslint.config.js
import configs from "@ilo-org/eslint-config";

export default configs.js;
```

### TypeScript Project

```js
// eslint.config.js
import configs from "@ilo-org/eslint-config";

export default configs.recommended;
```

### React + TypeScript Project

```js
// eslint.config.js
import configs from "@ilo-org/eslint-config";

export default configs.react;
```

## 📝 License

Licensed under the [Apache 2.0 License](/LICENSE).
