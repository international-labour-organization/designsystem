import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DetailCard } from "../src/components/Cards/DetailCard";

const defaultProps = {
  title: "Why we need tests",
  eyebrow: "Test",
  details: "30 October 2025 | Testland",
  link: "https://www.example.com",
  image: "test.jpg",
  intro: "Tests are a vital yet often neglected part of software development.",
  titleLevel: "h2" as const,
};

describe("DetailCard", () => {
  it("should render correctly", () => {
    render(<DetailCard {...defaultProps} />);

    // The first element returned is the stub text for the wrapper link
    const title = screen.getAllByText(defaultProps.title);
    expect(title[1]).toBeVisible();

    const eyebrow = screen.getByText(defaultProps.eyebrow);
    expect(eyebrow).toBeVisible();

    const details = screen.getByText(defaultProps.details);
    expect(details).toBeVisible();

    const link = screen.getByRole("link", { name: defaultProps.title });
    expect(link).toHaveAttribute("href", defaultProps.link);

    const image = screen.getByRole("img", { name: defaultProps.title });
    expect(image).toBeVisible();
    expect(image).toHaveAttribute("src", defaultProps.image);

    const intro = screen.getByText(defaultProps.intro);
    expect(intro).toBeVisible();
  });
});
