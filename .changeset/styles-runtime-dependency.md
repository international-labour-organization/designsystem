---
"@ilo-org/react": patch
"@ilo-org/twig": patch
---

Declare `@ilo-org/styles` as a runtime dependency again. Both packages ship the compiled styles in their build output, so this keeps them in step with every styles release.
