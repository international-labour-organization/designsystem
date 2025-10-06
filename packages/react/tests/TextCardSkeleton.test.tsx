import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import { TextCardSkeleton } from "../src/components/Cards/TextCard";

describe("TextCardSkeleton", () => {
  it("should display loading skeleton correctly", () => {
    render(<TextCardSkeleton />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(4);
  });
});
