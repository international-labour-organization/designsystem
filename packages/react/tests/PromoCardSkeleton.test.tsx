import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import { PromoCardSkeleton } from "../src/components/Cards/PromoCard";

describe("PromoCardSkeleton", () => {
  it("should display loading skeleton correctly", () => {
    render(<PromoCardSkeleton />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='ilo--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(6);
  });
});
