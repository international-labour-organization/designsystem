---
"@ilo-org/react": patch
---

**Form:** Form component has `theme` prop which controls the `theme` value for all of its children. `theme` can still be set for individual form elements, but only when they're not rendered as children of `Form`, which will otherwise override their settings. Default setting for `theme` is `light`.
