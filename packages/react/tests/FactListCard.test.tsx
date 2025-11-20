import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FactListCard } from "../src/components/Cards/FactListCard";

const defaultProps = {
  title: "The importance of tests",
  list: [
    "They help catch bugs",
    "They can serve as documentation",
    "They save time",
  ],
  theme: "dark" as const,
};

describe("FactListCard", () => {
  it("should render correctly", () => {
    render(<FactListCard {...defaultProps} />);

    const title = screen.getByText(defaultProps.title);
    expect(title).toBeVisible();

    // Check that all list items are rendered
    defaultProps.list.forEach((item) => {
      const listItem = screen.getByText(item);
      expect(listItem).toBeVisible();
    });

    // Check that the correct number of list items are rendered
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(defaultProps.list.length);
  });

  it("should display loading skeleton correctly", () => {
    render(<FactListCard.Skeleton />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='ilo--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(6);
  });
});
