---
"@ilo-org/react": minor
---

Introduced a new export system, which allows you to import components, hooks and styles from the library in a more convenient way.

- `@ilo-org/react/styles` is reserved for the exported styles

```jsx
...
import "@ilo-org/react/styles/global.css";
import "@ilo-org/react/styles/index.css";
```

- `@ilo-org/react` exports all components and hooks

```jsx
import { Loading, Button, useGlobalSettings } from "@ilo-org/react";
```

Also react version is updated to 18
