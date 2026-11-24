---
"@ilo-org/react": major
---

Removed support for setting custom prefixes to HTML class names. All components now use "ilo" as the HTML class name prefix, matching the default that was set so far.
Removed GlobalProvider and useGlobalSettings hook. All DS components can render without it now so you remove it from your projects.
