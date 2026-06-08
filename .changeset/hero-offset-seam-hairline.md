---
"@ilo-org/react": patch
"@ilo-org/twig": patch
"@ilo-org/styles": patch
---

**Hero:** Removed the seam-bridging `box-shadow` on semi-transparent
card-offsets. With a translucent fill the shadow composited over the card's
own semi-transparent layer, producing a darker hairline at the offset/card
boundary on high-resolution screens. This is a visual change to the Hero in
any package that renders it.
