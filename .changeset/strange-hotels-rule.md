---
"@ilo-org/styles": minor
---

Chinese and Japanese font family declarations are now set using foundation variables based on the global lang attribute (e.g., <html lang="zh">). Previously, we relied on fallbacks in a universal font-family value, which caused some Chinese characters to be rendered in Japanese.
