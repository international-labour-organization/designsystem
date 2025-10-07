import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import { ScoreCardSkeleton } from "../src/components/Cards/ScoreCard";

describe("ScoreCardSkeleton", () => {
  it("should display loading skeleton correctly", () => {
    render(<ScoreCardSkeleton />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='ilo--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(4);
  });
});
