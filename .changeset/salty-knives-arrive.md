---
"@ilo-org/styles": major
"@ilo-org/twig": patch
"@ilo-org/react": patch
---

Removed `@ilo-org/themes` package. If you used any tokens from it (SASS variables like $borders-_, $fonts-_, $opacity-_, $brand-_, $layout-_, $radius-_ or $widths-*), please remove them from your project and remove the package as a dependency. Many of those tokens are now exposed as CSS variables from the `@ilo-org/styles` package. (See https://github.com/international-labour-organization/designsystem/blob/develop/packages/styles/scss/theme/_foundation.scss)

Cards: Fixed color of date text
Table: Fixed chevron color
Promocard: Fixed cornercut position in RTL layouts
Mixins: Removed dataurlicon(). Please use icon() instead.
