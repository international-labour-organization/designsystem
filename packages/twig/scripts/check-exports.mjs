/**
 * Asserts this package's exports map still resolves the subpaths consumers are
 * told to import.
 *
 * The Sass surface itself is guarded upstream, by the @ilo-org/styles tests.
 * What cannot move there is this: the exports map is a property of THIS
 * package.json, and it is checked with require.resolve rather than a Sass
 * compile because Sass resolves through loadPaths, which bypasses package
 * exports entirely and therefore proves nothing about them.
 *
 * It runs as part of build:lib rather than as a test because it asserts
 * against the freshly built dist/.
 */
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

for (const subpath of [
  "@ilo-org/twig/styles/index.css",
  // Node's exports resolution has no directory-index step, so this one resolves
  // only because of the explicit literal key in the exports map — the
  // "./styles/*" wildcard would map it to a directory and fail.
  "@ilo-org/twig/styles/scss/helpers",
  // The "./*" passthrough: this package had no exports map before, so direct
  // dist/ paths are public API for existing consumers and must keep resolving.
  "@ilo-org/twig/dist/styles/index.css",
]) {
  require.resolve(subpath); // throws ERR_PACKAGE_PATH_NOT_EXPORTED on regression
}

console.log("✓ exports resolve");
