import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ScoreCard } from "../src/components/Cards/ScoreCard";

const defaultProps = {
  title: "Improving test coverage",
  eyebrow: "Test",
  status: {
    statusType: "alert" as const,
    content: "Live",
  },
  link: "https://www.example.com/",
  content: {
    items: [
      { icon: "time", label: "30 October 2025" },
      { icon: "pin", label: "Geneva, Switzerland" },
    ],
  },
};

describe("ScoreCard", () => {
  it("should render correctly", () => {
    render(<ScoreCard {...defaultProps} />);

    // The first element returned is the stub text for the wrapper link
    const title = screen.getAllByText(defaultProps.title);
    expect(title[1]).toBeVisible();

    const eyebrow = screen.getByText(defaultProps.eyebrow);
    expect(eyebrow).toBeVisible();

    const status = screen.getByText(defaultProps.status.content);
    expect(status).toBeVisible();

    const link = screen.getByRole("link", { name: defaultProps.title });
    expect(link).toHaveAttribute("href", defaultProps.link);

    const content1 = screen.getByText(defaultProps.content.items[0].label);
    expect(content1).toBeVisible();

    const content2 = screen.getByText(defaultProps.content.items[1].label);
    expect(content2).toBeVisible();
  });
});
