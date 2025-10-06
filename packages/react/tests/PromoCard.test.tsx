import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PromoCard } from "../src/components/Cards/PromoCard";

const defaultProps = {
  title: "Do we need tests?",
  eyebrow: "Test",
  intro: "Tests are a vital yet often neglected part of software development.",
  link: "https://www.example.com/",
  cta: {
    label: "Read the article",
    url: "https://www.example.com/article",
  },
};

describe("PromoCard", () => {
  it("should render correctly", () => {
    render(<PromoCard {...defaultProps} />);

    // The first element returned is the stub text for the wrapper link
    const title = screen.getAllByText(defaultProps.title);
    expect(title[1]).toBeVisible();

    const eyebrow = screen.getByText(defaultProps.eyebrow);
    expect(eyebrow).toBeVisible();

    const intro = screen.getByText(defaultProps.intro);
    expect(intro).toBeVisible();

    const link = screen.getByRole("link", { name: defaultProps.title });
    expect(link).toHaveAttribute("href", defaultProps.link);

    const ctaButton = screen.getByRole("link", {
      name: defaultProps.cta.label,
    });
    expect(ctaButton).toBeVisible();
    expect(ctaButton).toHaveAttribute("href", defaultProps.cta.url);
  });
});
