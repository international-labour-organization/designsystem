import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import { DetailCardSkeleton } from "../src/components/Cards/DetailCard";

describe("DetailCardSkeleton", () => {
  it("should display loading skeleton correctly", () => {
    render(<DetailCardSkeleton />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='ilo--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(9);
  });
});
