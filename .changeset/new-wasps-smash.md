---
"@ilo-org/twig": patch
"@ilo-org/styles": patch
---

Refactors the Breadcrumb Twig template. The `home` field will soon be deprecated, it will still work, but users should switch to passing in all of the links to the `links` field. The first `link` will be rendered as a house icon. This also fixes several accessibility issues with the Breadcrumb, including adding a `buttonlabel` prop for the context ellipsis that appears when the Breadcrumbs are collapsed.
