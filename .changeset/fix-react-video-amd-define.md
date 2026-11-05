---
"@ilo-org/react": patch
---

Fix the `Video` component failing to bundle in webpack and Turbopack (Next.js) with `Module not found: Can't resolve 'videojs'`. Since the move to Vite 8 (Rolldown), the UMD wrapper of `videojs-youtube` was inlined verbatim into the published Video chunk; its AMD branch is now stripped at build time.
