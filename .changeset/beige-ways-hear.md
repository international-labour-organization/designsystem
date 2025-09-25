---
"@ilo-org/fonts": major
---

We're replacing Noto Sans Arabic with Vazirmatn. Noto Sans Arabic had some `line-height` issues where ascenders and descenders were getting cut off. We unfortunately weren't able to resolve those in a way that would have been consistent with the `line-height` values that are being used with fonts in other languages. The best solution we could find was to replace the font altogether with a similar alternative.

While implementing Vazirmatn, we noticed that setting practically any `letter-spacing` value at all had the effect of creating some undesirable artifacts in the text. As a result, `letter-spacing` in Arabic only is now initialized to `0` for all text. Other other settings like `font-weight` have remained the same.
