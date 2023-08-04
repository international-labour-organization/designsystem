---
"@ilo-org/twig": minor
---

Complete refactor of the Card component. Exposes each individual card as a separate template that can be imported individually or via the `Card` component using the `type` property.

Settings for the `Card` component change as follows:

- `cornercut` is deprecated for all cards except the Promo Card. For the others, it’s determined automatically by the type of card.
- `alignment` is deprecated for all cards except the Multilink Card, where it determines where the image should be placed, when size is set to wide.
- `size` has the following options: `narrow`, `wide`, `standard` and `fluid`. When a component only has two sizes, the options are `narrow`, `wide` and `fluid` and the default is `narrow`. When it has three options, all of the options are available and the default is `standard`. `fluid` is a new option which sets the card to be as wide as its container.
- `eventDetails` becomes `dateExtra`
- `imageAlt` is moved to `image.alt`
- `loading` is moved to `image.loading`

The following options for the Card's `type` setting have changed as follows:

- `graphic` becomes `text`
- `graphicpromo` becomes `promo`
