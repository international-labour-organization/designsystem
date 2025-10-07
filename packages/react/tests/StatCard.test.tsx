import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatCard } from "../src/components/Cards/StatCard";

const defaultProps = {
  title: "Test coverage has improved dramatically",
  intro:
    "The recent improvements to test infrastructure has led us to increase our test coverage significantly.",
  source: {
    label: "Test source",
    url: "https://www.example.com/test-source",
  },
};

describe("StatCard", () => {
  it("should render correctly", () => {
    render(<StatCard {...defaultProps} />);

    const title = screen.getByText(defaultProps.title);
    expect(title).toBeVisible();

    const intro = screen.getByText(defaultProps.intro);
    expect(intro).toBeVisible();

    const sourceLink = screen.getByRole("link", {
      name: defaultProps.source.label,
    });
    expect(sourceLink).toBeVisible();
    expect(sourceLink).toHaveAttribute("href", defaultProps.source.url);
  });
});
