---
"@ilo-org/styles": minor
"@ilo-org/twig": minor
---

**Tags/Tag:** Complete refactor with some impact on usage and appearance:

- The `defaultActive` setting of `Tag` is deprecated in favor of `disabled`, which will override it if both are used. `defaultAcive` should no longer be used going forward.
- The `iconPosition` setting of `Tag` is removed. The icon will now be rendered after the label according to the `direction` context.
- The `showIcon` setting and `elementId` field of `Tag` are now correctly passed from `Tags` to `Tag`.
- The `Tag` component is moved into its own folder `@components/tag`
- All JavaScript for `Tag` is removed, it's now rendered entirely on the server.
- Documentation for using the `tag` alone has been added to Storybook.
