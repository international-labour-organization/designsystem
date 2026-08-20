/**
 * Asserts this package's exports map still resolves the subpaths consumers are
 * told to import.
 *
 * The Sass surface itself is guarded upstream, by the @ilo-org/styles tests.
 * What cannot move there is this: the exports map is a property of
 * THIS package.json, and it is checked with require.resolve rather than a Sass
 * compile because Sass resolves through loadPaths, which bypasses package
 * exports entirely and therefore proves nothing about them.
 *
 * It runs as part of build:lib rather than as a vitest test because it asserts
 * against the freshly built lib/, which a bare `vitest` run would not have.
 */
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

for (const subpath of [
  "@ilo-org/react/styles/index.css",
  // Node's exports resolution has no directory-index step, so this one resolves
  // only because of the explicit literal key in the exports map — the
  // "./styles/*" wildcard would map it to a directory and fail.
  "@ilo-org/react/styles/scss/helpers",
]) {
  require.resolve(subpath); // throws ERR_PACKAGE_PATH_NOT_EXPORTED on regression
}

console.log("✓ exports resolve");
