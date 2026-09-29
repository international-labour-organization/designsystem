---
"@ilo-org/twig": patch
---

- Hero: added defaults for `justify` (`start`), `align` (`baseline`), `postersize` (`large`) and `cardsize` (`small`), `theme` and `background` fall back to `dark` and `solid` when the hero card sets none
- Hero card: added defaults for `theme` (`dark`) and `background` (`solid`)
- Card: added a default `type` (`feature`)
- Data card, detail card: added a default `size` (`narrow`)
- Fact list card: added defaults for `size` (`narrow`) and `theme` (`dark`)
- Multi-link card: added defaults for `size` (`standard`) and `alignment` (`left`)
- Promo card: added a default `theme` (`light`)
- Stat card: added defaults for `size` (`standard`) and `color` (`blue`)
- Text card: added defaults for `size` (`narrow`) and `theme` (`light`)
- Callout: added a default `alert` (`info`)
- Notification: added defaults for `placement` (`dialog`) and `type` (`info`)
- Link list, logo grid: added a default `theme` (`light`)
- Profile: the name and role now render when `size` isn't set (defaults to `large`)
- Icon: added defaults for `size` (`24`) and `color` (`#000000`)
