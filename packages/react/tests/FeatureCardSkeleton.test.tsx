import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import { FeatureCardSkeleton } from "../src/components/Cards/FeatureCard";

describe("FeatureCardSkeleton", () => {
  it("should display loading skeleton correctly", () => {
    render(<FeatureCardSkeleton />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='ilo--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(4);
  });
});
