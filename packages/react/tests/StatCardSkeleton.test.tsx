import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import { StatCardSkeleton } from "../src/components/Cards/StatCard";

describe("StatCardSkeleton", () => {
  it("should display loading skeleton correctly", () => {
    render(<StatCardSkeleton />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='ilo--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(4);
  });
});
