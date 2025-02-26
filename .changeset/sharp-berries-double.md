---
"@ilo-org/styles": minor
"@ilo-org/twig": minor
---

**Tags/Tag:** Complete refactor with some impact on usage and appearance:

- The `defaultActive` setting is deprecated in favor of `disabled`, which will override it if both are used. `defaultAcive` should no longer be used going forward.
- The `iconPosition` setting is removed. The icon will now be rendered after the label according to the `direction` context.
- The `showIcon` setting and `elementId` field are now correctly passed from `Tags` to `Tag`.
- All JavaScript for this component is removed, it's now rendered entirely on the server.
- Documentation for using the `tag` alone has been added to Storybook.
