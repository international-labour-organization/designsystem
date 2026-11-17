---
"@ilo-org/react": minor
"@ilo-org/styles": minor
---

**MegaNav:** New navigation with a mega menu. Each `MegaNav.Item` renders where it is written: `MegaNav.Trigger` opens `MegaNav.Panel`, which holds up to three `MegaNav.Column` or markup of your own. The `MegaNav.Link`s inside `MegaNav.Links` are collected by their `label`, so items that don't fit the bar move under "More" and the mobile drawer lists the same links; a link's `children` can add richer content, shown in the panel only. Item ids are made from their labels in any script, or set with `id`. `MegaNav` is the default layout; for others, compose `MegaNav.Root` with `Top`, `Bar`, `Menu`, `Search`, `Burger`, `Drawer` and `Container`, and use `useMegaNavState` in pieces of your own. The new `ilo--mega-nav` styles set the menu's free space before "More" with `--ilo-mega-nav-menu-gap`, and panels lay out two columns, or three from xl
