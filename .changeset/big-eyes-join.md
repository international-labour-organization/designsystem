---
"@ilo-org/twig": patch
---

Add support for reponsive images in the Card component. The `image` field can take either a string (for a non-responsive image) or an array of objects with an `src` and `breakpoint` property. The `image` field of the card now works the same way as the `url` field of the Image component. This also adds an `imageAlt` field that applies a describe alt tag to the image.
