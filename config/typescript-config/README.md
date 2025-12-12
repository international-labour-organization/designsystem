# @ilo-org/typescript-config

> TypeScript configuration for ILO Design System projects

This package provides sensible TypeScript compiler defaults that enforce strict type checking and modern JavaScript/TypeScript features. It's designed to work seamlessly with `@ilo-org/eslint-config` for a complete type-safe development experience.

## Requirements

- TypeScript 4.x or higher
- Node.js with ES modules support

## Installation

```bash
npm install -D @ilo-org/typescript-config
# or
pnpm add -D @ilo-org/typescript-config
# or
yarn add -D @ilo-org/typescript-config
```

## Usage

### Basic Usage

Create a `tsconfig.json` file in your project root and extend this configuration:

```json
{
  "extends": "@ilo-org/typescript-config",
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

Alternatively, you can reference the full path:

```json
{
  "extends": "@ilo-org/typescript-config/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

### Extending Configuration

You can override or add compiler options as needed:

```json
{
  "extends": "@ilo-org/typescript-config",
  "compilerOptions": {
    "outDir": "lib",
    "declaration": true,
    "declarationDir": "lib/types"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Configuration Options

This configuration includes the following TypeScript compiler options:

### Module System

| Option                         | Value    | Description                                                   |
| ------------------------------ | -------- | ------------------------------------------------------------- |
| `module`                       | `esnext` | Use the latest ES module format                               |
| `moduleResolution`             | `node`   | Use Node.js-style module resolution                           |
| `esModuleInterop`              | `true`   | Enable interoperability between CommonJS and ES modules       |
| `allowSyntheticDefaultImports` | `true`   | Allow default imports from modules with no default export     |
| `isolatedModules`              | `true`   | Ensure each file can be safely transpiled without other files |
| `resolveJsonModule`            | `true`   | Allow importing JSON files as modules                         |

### Language Features

| Option    | Value        | Description                             |
| --------- | ------------ | --------------------------------------- |
| `target`  | `es6`        | Compile to ES6 (ES2015)                 |
| `lib`     | `["es2017"]` | Include ES2017 library type definitions |
| `jsx`     | `react-jsx`  | Use the new JSX transform (React 17+)   |
| `allowJs` | `true`       | Allow JavaScript files to be included   |

### Type Checking

| Option                             | Value   | Description                                                            |
| ---------------------------------- | ------- | ---------------------------------------------------------------------- |
| `strict`                           | `true`  | Enable all strict type checking options                                |
| `alwaysStrict`                     | `true`  | Parse in strict mode and emit "use strict"                             |
| `noImplicitAny`                    | `true`  | Raise error on expressions and declarations with an implied `any` type |
| `strictBindCallApply`              | `true`  | Enable stricter checking of `bind`, `call`, and `apply` methods        |
| `strictFunctionTypes`              | `false` | Disable stricter checking of function types (allows bivariance)        |
| `noUnusedLocals`                   | `true`  | Report errors on unused local variables                                |
| `noUnusedParameters`               | `true`  | Report errors on unused parameters                                     |
| `noFallthroughCasesInSwitch`       | `true`  | Report errors for fallthrough cases in switch statements               |
| `forceConsistentCasingInFileNames` | `true`  | Disallow inconsistently-cased references to the same file              |

### Emit Options

| Option         | Value  | Description                                                  |
| -------------- | ------ | ------------------------------------------------------------ |
| `sourceMap`    | `true` | Generate corresponding `.map` files for debugging            |
| `skipLibCheck` | `true` | Skip type checking of declaration files (faster compilation) |

### Excluded Files

The following directories are excluded by default:

- `**/lib/*` - Compiled output
- `**/node_modules/*` - Dependencies
- `**/dist/*` - Distribution files

## Common Use Cases

### Library Package

For a library that needs to emit declaration files:

```json
{
  "extends": "@ilo-org/typescript-config",
  "compilerOptions": {
    "outDir": "lib",
    "declaration": true,
    "declarationDir": "lib/types"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "lib", "**/*.test.ts"]
}
```

### React Application

For a React application with DOM types:

```json
{
  "extends": "@ilo-org/typescript-config",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["dom", "dom.iterable", "es2017"],
    "types": ["node"]
  },
  "include": ["./src", "./tests"],
  "exclude": ["node_modules", "dist"]
}
```

### Build Configuration

For a separate build configuration (e.g., `tsconfig.build.json`):

```json
{
  "extends": "@ilo-org/typescript-config",
  "compilerOptions": {
    "outDir": "lib",
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["**/lib/*", "**/node_modules/*", "**/*.test.ts"]
}
```

Then reference it in your main `tsconfig.json`:

```json
{
  "extends": "./tsconfig.build.json",
  "compilerOptions": {
    "noEmit": true
  },
  "include": ["src/**/*", "tests/**/*"]
}
```

### Monorepo Root

For a monorepo root configuration:

```json
{
  "extends": "./config/typescript-config/tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "noEmit": true
  },
  "include": ["**/src/*"],
  "exclude": ["**/lib/*", "**/node_modules/*", "**/dist/*"]
}
```

## Integration with ESLint

This TypeScript configuration is designed to work seamlessly with `@ilo-org/eslint-config`, which uses TypeScript ESLint for type-aware linting. The ESLint config automatically resolves your `tsconfig.json` for type checking.

## Why These Settings?

- **Strict mode enabled** - Catches more potential bugs at compile time
- **ES2017 library** - Provides modern JavaScript APIs while maintaining compatibility
- **ES6 target** - Good balance between modern features and browser support
- **React JSX transform** - Uses the modern JSX transform (no need to import React)
- **Isolated modules** - Ensures files can be safely transpiled independently (important for build tools)
- **Source maps** - Enables better debugging experience
- **Skip lib check** - Faster compilation by skipping type checking of declaration files

## 📝 License

Licensed under the [Apache 2.0 License](/LICENSE).
