---
"@ilo-org/styles": patch
---

- `icon()` gains two optional args, `$size` and `$position`, emitting `mask-size` / `mask-position`, both default to `null`.
- `table`, `video` and `navigation` now use `icon` for their icons instead of `dataurlicon`
