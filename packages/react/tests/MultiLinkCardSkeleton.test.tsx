import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import { MultiLinkCardSkeleton } from "../src/components/Cards/MultiLinkCard";

describe("MultiLinkCardSkeleton", () => {
  it("should display loading skeleton correctly", () => {
    render(<MultiLinkCardSkeleton />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='ilo--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(9);
  });
});
