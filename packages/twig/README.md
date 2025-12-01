# ILO Design System - Twig Package

This package provides the implementation of the Design System using [Twig](https://twig.symfony.com/). It also includes a [Storybook](https://storybook.js.org/) project for documentation and development of the components in the system. Storybook and twig integration is done by the internal [Maestro](https://github.com/international-labour-organization/designsystem/tree/develop/packages/maestro). It has dependencies on the following other @ilo-org packages:

- [@ilo-org/fonts](./packages/fonts)
- [@ilo-org/styles](./packages/styles)
- [@ilo-org/icons](./packages/icons)

## Drupal Integration

- For Drupal integration, please refer to the [Main Documentation](https://twig.ui.ilo.org/?path=/docs/get-started-use-with-drupal--docs)
- [Drupal Base Theme](https://github.com/international-labour-organization/ilo_base_theme)

## Available Commands

### Prerequisites

- Node.js version 20 or higher
  - You can use [nvm](https://github.com/nvm-sh/nvm) to manage your Node.js versions
- [pnpm](https://pnpm.io/) installed globally or via corepack >= 9.14.0

### Getting Started

Before running any of the commands below, make sure to:

1. Run `pnpm install` from the monorepo root to install all dependencies
2. Run `pnpm build:libs` from the monorepo root to build all necessary packages

| Command            | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `pnpm build:lib`   | Builds the library                                           |
| `pnpm build:docs`  | Generates static Storybook documentation                     |
| `pnpm storybook`   | Starts Storybook development server on port 6006             |
| `pnpm start:theme` | Starts Docker containers in detached mode(Used in tests)     |
| `pnpm cr:theme`    | Rebuilds Drupal cache inside Docker container(Used in tests) |
| `pnpm cy:open`     | Opens Cypress test runner(Used in tests)                     |
| `pnpm test`        | Runs Cypress tests in headless mode(Used in tests)           |
| `pnpm lint`        | Runs ESLint to check code quality                            |
| `pnpm lint:fix`    | Runs ESLint with automatic fixes                             |

## Development

Each component is located in the `src/components` folder. Each component has its own folder named after the component. Inside each component folder, you will find:

- `[component].twig`: The Twig template file for the component. (Required)
- `[component].component.yml`: [UI Patterns](https://www.drupal.org/project/ui_patterns) definition for the component. This file will be used for the story generation too. (Required)
- `[component].js`: The JavaScript file for the component. (Optional)
- `[component].behavior.js`: The Drupal behavior runner for attaching the JS bundle to the component. (Optional)
- Sub components can be also created inside the component folder (Check the [`accordion`](./src/components/accordion) component for reference)

The storybook is a source of truth for the components. Each component will have its own stories file located in the `stories/[component].stories.js` file. The stories are generated from the UI Patterns definition file using the [Maestro](../maestro/README.md).

Here is an example of a story file for the `button` component:

```js
import Button from "../src/components/button/button.twig"; // Twig template
import ButtonPatterns from "../src/components/button/button.component.yml"; // UI Patterns definition
import { Maestro } from "@ilo-org/maestro";

const story = Maestro.create(Button, ButtonPatterns); // Generates a meta and stories from the UI Patterns definition

const Meta = {
  title: "Components/User Interface/Button",
  tags: ["autodocs"],
  ...story.meta,
};

const [Default] = story.stories; // Extracts the generated story

export default Meta;

export { Default };
```

For more details about the Maestro check the [Maestro documentation](../maestro/README.md).

## Testing

We are using Cypress for component testing. To achieve this, we have a Drupal instance running inside a Docker container. The Drupal instance has the [ILO Base Theme](https://github.com/international-labour-organization/ilo_base_theme) installed and configured. The components are rendered using the Base Theme and then tested using Cypress.

You can start the Docker containers using the following command:

```bash
pnpm run start:theme
```

After that you can check the `localhost:8082` to see the Drupal instance running.

To open the Cypress test runner, you can use the following command:

```bash
pnpm run cy:open
```

You can find the tests in the `cypress/e2e` folder. Each component will have its own test file named after the component.

## Contributing

For contribution guidelines, please refer to the [Main Documentation](../contributing.md).
