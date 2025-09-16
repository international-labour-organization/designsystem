---
"@ilo-org/styles": major
---

This fixes a weird bug with Vazirmatn whereby practically any `letter-spacing` value will cause incorrect glyphs to be rendered. The fix is to override all `letter-spacing` values that we use with other languages to `0`.
