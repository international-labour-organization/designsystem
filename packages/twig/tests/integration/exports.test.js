import { describe, expect, test } from "vitest";

describe("@ilo-org/twig exports", () => {
  test("package exports component files", async () => {
    try {
      // TODO: The dist folder should be set as the root export so that dist doesn't need to be included in import paths
      // https://github.com/international-labour-organization/designsystem/issues/2004
      // Update these tests once the change is made
      await import("@ilo-org/twig/dist/components/button/button.twig");
      await import("@ilo-org/twig/dist/components/button/button.component.yml");
      await import("@ilo-org/twig/dist/components/button/button.behavior.js");
    } catch (err) {
      expect(err).toBeUndefined();
    }
  });

  test("package exports styles", async () => {
    try {
      await import("@ilo-org/twig/styles/index.css");
    } catch (err) {
      expect(err).toBeUndefined();
    }
  });

  test("package exports SCSS helpers", async () => {
    try {
      await import("@ilo-org/twig/styles/scss/helpers");
    } catch (err) {
      expect(err).toBeUndefined();
    }
  });
});
