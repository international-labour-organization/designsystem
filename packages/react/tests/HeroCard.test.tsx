import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { HeroCard } from "../src/components/HeroCard";

// Mock the useGlobalSettings hook
vi.mock("../src/hooks/useGlobalSettings", () => ({
  default: () => ({ prefix: "ilo" }),
}));

describe("HeroCard", () => {
  it("should render with default props", () => {
    const { container } = render(<HeroCard title="Test Title" />);
    const element = container.firstChild;

    expect(element).toHaveClass("ilo--hero-card");
    expect(element).toHaveClass("ilo--hero-card__theme__dark");
    expect(element).toHaveClass("ilo--hero-card__background__solid");
    expect(element).toHaveClass("ilo--hero-card__cornercut");
  });

  it("should render custom classes when provided", () => {
    const { container } = render(
      <HeroCard title="Test Title" className="custom-hero-card" />
    );

    expect(container.firstChild).toHaveClass("custom-hero-card");
    expect(container.firstChild).not.toHaveClass("className");
  });

  describe("children", () => {
    const socialmedia = {
      icons: [
        { icon: "facebook" as const, url: "https://example.com", label: "FB" },
      ],
    };

    it("should render children inside the actions wrapper", () => {
      const { container } = render(
        <HeroCard title="Test Title">
          <button>Call to action</button>
        </HeroCard>
      );

      const actions = container.querySelector(".ilo--hero-card--actions");
      expect(actions).toBeInTheDocument();
      expect(actions).toContainElement(
        screen.getByRole("button", { name: "Call to action" })
      );
    });

    it("should not render the actions wrapper when no children are passed", () => {
      const { container } = render(<HeroCard title="Test Title" />);

      expect(
        container.querySelector(".ilo--hero-card--actions")
      ).not.toBeInTheDocument();
    });

    it("should render actions after the date copy and before the social media links", () => {
      const { container } = render(
        <HeroCard
          title="Test Title"
          intro="Intro"
          datecopy="11 February 2021"
          socialmedia={socialmedia}
        >
          <button>Call to action</button>
        </HeroCard>
      );

      const card = container.firstChild as HTMLElement;
      const classes = Array.from(card.children).map((child) => child.className);

      expect(classes.indexOf("ilo--hero-card--actions")).toBeGreaterThan(
        classes.indexOf("ilo--hero-card--datecopy")
      );
      expect(classes.indexOf("ilo--hero-card--actions")).toBeLessThan(
        classes.findIndex((c) => c.includes("ilo--social-media"))
      );
    });
  });
});
