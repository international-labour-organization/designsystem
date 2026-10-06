import { expect, describe, it, vi } from "vitest";
import { render } from "@testing-library/react";

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
});
