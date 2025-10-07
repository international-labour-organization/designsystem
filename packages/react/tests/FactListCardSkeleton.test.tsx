import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import { FactListCardSkeleton } from "../src/components/Cards/FactListCard";

describe("FactListCardSkeleton", () => {
  it("should display loading skeleton correctly", () => {
    render(<FactListCardSkeleton />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='ilo--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(6);
  });
});
