/**
 * Guards the public Sass surface this package produces.
 *
 * Compiles the scss/_helpers.scss entrypoint the way a consumer would reach it:
 * `@use "@ilo-org/styles/scss/helpers"` resolves here, and @ilo-org/react
 * copies scss/ verbatim into its published lib/styles/scss/, so the same file
 * backs `@use "@ilo-org/react/styles/scss/helpers"`.
 */
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { beforeAll, describe, expect, it } from "vitest";
import * as sass from "sass";

const packageRoot = fileURLToPath(new URL("..", import.meta.url));

// Resolving `scss/helpers` as a bare path exercises Sass's partial convention,
// which is exactly what `@use "@ilo-org/styles/scss/helpers"` relies on.
const loadPaths = [packageRoot, join(packageRoot, "node_modules")];

const compile = (source) =>
  sass.compileString(source, {
    loadPaths,
    silenceDeprecations: ["global-builtin", "import"],
  }).css;

describe("helpers", () => {
  // The whole point of the layer. If it ever emits a rule, every consumer
  // .module.scss that @uses it silently carries a duplicate copy.
  it("emits no CSS", () => {
    expect(compile('@use "scss/helpers" as *;').trim()).toBe("");
  });

  describe("is usable from a consumer stylesheet", () => {
    let css;

    beforeAll(() => {
      css = compile(
        '@use "scss/helpers" as *;\n' +
          ".thing { padding: spacing(4); max-width: px-to-rem(1296px);\n" +
          '  @include breakpoint("md", true) { display: none; } }'
      );
    });

    // Assert on the shape of the output rather than exact numbers, so that a
    // change to a design token does not fail these tests.
    it("resolves spacing() to the spacing custom property", () => {
      expect(css).toMatch(/--ilo-spacing-base/);
    });

    it("resolves px-to-rem() to a rem value", () => {
      expect(css).toMatch(/max-width:\s*[\d.]+rem/);
    });

    it("resolves breakpoint() to a media query", () => {
      expect(css).toMatch(/@media screen and \(max-width:\s*609px\)/);
    });
  });
});
