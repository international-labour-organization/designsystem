import { describe, expect, test } from "vitest";

describe("@ilo-org/react exports", () => {
  test("package exports components", async () => {
    const { Button } = await import("@ilo-org/react");
    expect(Button).toBeDefined();
  });

  test("package exports styles", async () => {
    try {
      await import("@ilo-org/react/styles/index.css");
    } catch (err) {
      expect(err).toBeUndefined();
    }
  });

  test("package exports SCSS helpers", async () => {
    try {
      await import("@ilo-org/react/styles/scss/helpers");
    } catch (err) {
      expect(err).toBeUndefined();
    }
  });
});
