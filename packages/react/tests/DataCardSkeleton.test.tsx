import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import { DataCardSkeleton } from "../src/components/Cards/DataCard";

describe("DataCardSkeleton", () => {
  it("should display loading skeleton correctly", () => {
    render(<DataCardSkeleton />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='ilo--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(8);
  });
});
