---
"@ilo-org/react": patch
---

**Hero:** Fixed the card-offset space (between the left edge of the screen
and the HeroCard) so it correctly matches the hero card's background and
theme, bringing the React component in line with the Twig implementation.

- The root element now receives a `hero__card-background__*` class derived
  from `heroCard.background`, so the offset honours `semi-transparent` and
  `transparent` cards. Previously this class was never emitted in React,
  leaving the offset solid regardless of the card's background.
- The Hero `theme` now falls back to `heroCard.theme` when not explicitly
  set (matching Twig's `theme|default(herocard.theme)`), so a `light` card
  no longer renders next to a `dark` offset. An explicit `theme` on `Hero`
  still takes precedence.
