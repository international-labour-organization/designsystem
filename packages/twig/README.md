# ILO Design System - Twig Package

This package provides the implementation of the Design System using [Twig](https://twig.symfony.com/). It also includes a [Storybook](https://storybook.js.org/) project for documentation and development of the components in the system. Storybook and twig integration is done by the internal [Maestro](https://github.com/international-labour-organization/designsystem/tree/develop/packages/maestro). It has dependencies on the following other @ilo-org packages:

- [@ilo-org/themes](./packages/themes)
- [@ilo-org/fonts](./packages/fonts)
- [@ilo-org/styles](./packages/styles)
- [@ilo-org/utils](./packages/utils)
- [@ilo-org/icons](./packages/icons)

## Drupal Integration

- For the Drupal integration, please refer to the [Main Documentation](https://twig.ui.ilo.org/?path=/docs/get-started-use-with-drupal--docs)
- [Drupal Base Theme](https://github.com/international-labour-organization/ilo_base_theme)

## Available Commands

Make sure to have a node version 20 or higher installed. You can use [nvm](https://github.com/nvm-sh/nvm) to manage your Node.js versions.

| Command               | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| `npm run build:lib`   | Builds the library                                           |
| `npm run build:docs`  | Generates static Storybook documentation                     |
| `npm run storybook`   | Starts Storybook development server on port 6006             |
| `npm run start:theme` | Starts Docker containers in detached mode(Used in tests)     |
| `npm run cr:theme`    | Rebuilds Drupal cache inside Docker container(Used in tests) |
| `npm run cy:open`     | Opens Cypress test runner(Used in tests)                     |
| `npm run test`        | Runs Cypress tests in headless mode(Used in tests)           |
| `npm run lint`        | Runs ESLint to check code quality                            |
| `npm run lint:fix`    | Runs ESLint with automatic fixes                             |

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
