---
"@ilo-org/react": minor
---

**AudioPlayer:** Track name can now be rendered as a link. Pass `nameHref` to turn the name into an anchor, and optionally pass `nameLinkComponent` (e.g. React Router or Next.js `Link`) to support client-side routing. The URL is forwarded as `href` for plain anchors and as `to` for custom components.
