---
"@ilo-org/styles": patch
---

Split the emitting parts out of `_animations.scss`

`_animations.scss` mixed two pure mixins (`globaltransition`, `pulse-animation`)
with five CSS-emitting `@keyframes` blocks, and `_mixins.scss` pulled the whole
module in. Every stylesheet that used any mixin therefore inherited all five
keyframes, and because legacy `@import` chains do not dedupe, the compiled
bundle accumulated hundreds of duplicate copies.

The two mixins now live in a new `scss/_animation-mixins.scss`, which
`_mixins.scss` uses instead. `_animations.scss` keeps the keyframes and
`@forward`s the mixins, so the 16 component stylesheets that `@use "../animations"`
continue to work unchanged.

No API changes and no removed selectors — all non-keyframe CSS is byte-identical.
`@keyframes` blocks in the compiled `index.css` drop from 450 to 80, with all
five names (`emptygradient`, `pulse`, `slideDown`, `slideUp`, `spin`) intact.
Consumers importing `scss/mixins.scss` no longer receive any keyframes at all.
