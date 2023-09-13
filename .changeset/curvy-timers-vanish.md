---
"@ilo-org/twig": patch
---

Fix the Icon component being unable to actually render icons. This was happening because the icon files generated during build were not being included in the package published to npm.
