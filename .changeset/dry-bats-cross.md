---
"@ilo-org/styles": minor
"@ilo-org/twig": minor
---

Refactor the Card Group in line with changes made to the Cards.

- Width of the cards in the card group are set via a new `size` property that uses the `size` property of the cards in the group.
- A new `collapsed` property optionally removes the space between the cards so they are touching.
- A new `justify` property allows the user to horizontally align the cards to the beginning or center, or to the left and right edges of the container.
