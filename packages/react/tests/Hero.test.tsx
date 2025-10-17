import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { Hero } from "../src/components/Hero";
import { ThemeTypes } from "../src/types";

// Mock the useGlobalSettings hook
vi.mock("../src/hooks/useGlobalSettings", () => ({
  default: () => ({ prefix: "ilo" }),
}));

// Mock child components
vi.mock("../src/components/Breadcrumb", () => ({
  Breadcrumb: () => <div data-testid="breadcrumb">Breadcrumb Component</div>,
}));

vi.mock("../src/components/Tooltip", () => ({
  Tooltip: () => <div data-testid="tooltip">Tooltip Component</div>,
}));

vi.mock("../src/components/HeroCard", () => ({
  HeroCard: () => <div data-testid="hero-card">HeroCard Component</div>,
}));

const fixture = {
  image: {
    alt: "Test image",
    loading: "lazy" as const,
    url: [
      { breakpoint: 1280, src: "/xlarge.jpg" },
      { breakpoint: 1024, src: "/large.jpg" },
      { breakpoint: 768, src: "/medium.jpg" },
      { breakpoint: 0, src: "/small.jpg" },
    ],
  },
  breadcrumb: {
    buttonLabel: "More Links",
    links: [{ label: "Link One", url: "/linkone" }],
  },
  heroCard: {
    title: "Test Title",
    theme: "dark" as ThemeTypes,
    background: "solid" as const,
  },
  caption: {
    icon: true,
    theme: "dark" as const,
    label: "Test caption",
  },
};

describe("Hero", () => {
  it("should render with default props", () => {
    const { container } = render(<Hero heroCard={fixture.heroCard} />);
    const element = container.querySelector(".hero");

    expect(element).toHaveClass("hero__card-justify__start");
    expect(element).toHaveClass("hero__card-align__baseline");
    expect(element).toHaveClass("hero__card-size__small");
    expect(element).toHaveClass("hero__poster-size__large");
    expect(element).toHaveClass("hero__card-theme__dark");
  });

  it("should render custom classes when provided", () => {
    const customClass = "custom-hero";
    const { container } = render(
      <Hero heroCard={fixture.heroCard} className={customClass} />
    );

    expect(container.firstChild).toHaveClass(customClass);
  });

  it("should render the hero card", () => {
    render(<Hero heroCard={fixture.heroCard} />);
    expect(screen.getByTestId("hero-card")).toBeInTheDocument();
  });

  it("should render breadcrumb when provided", () => {
    render(
      <Hero heroCard={fixture.heroCard} breadcrumb={fixture.breadcrumb} />
    );
    expect(screen.getByTestId("breadcrumb")).toBeInTheDocument();
  });

  it("should not render breadcrumb when not provided", () => {
    render(<Hero heroCard={fixture.heroCard} />);
    expect(screen.queryByTestId("breadcrumb")).not.toBeInTheDocument();
  });

  it("should render caption when provided", () => {
    render(<Hero heroCard={fixture.heroCard} caption={fixture.caption} />);
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });

  it("should not render caption when not provided", () => {
    render(<Hero heroCard={fixture.heroCard} />);
    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();
  });

  it("should render responsive image sources in descending breakpoint order", () => {
    const { container } = render(
      <Hero heroCard={fixture.heroCard} image={fixture.image} />
    );

    const sources = container.querySelectorAll("source");
    const sourceBreakpoints = Array.from(sources).map((source) => {
      const media = source.getAttribute("media");
      return parseInt(media?.match(/\d+/)?.[0] || "0");
    });

    // Check sources are in descending order
    expect(sourceBreakpoints).toEqual(
      [...sourceBreakpoints].sort((a, b) => b - a)
    );

    // Check specific breakpoints
    expect(sourceBreakpoints).toEqual([1280, 1024, 768, 0]);
  });

  it("should apply correct responsive image source attributes", () => {
    const { container } = render(
      <Hero heroCard={fixture.heroCard} image={fixture.image} />
    );

    const sources = container.querySelectorAll("source");

    sources.forEach((source, index) => {
      const expectedUrl = fixture.image.url[index];
      expect(source).toHaveAttribute("srcset", expectedUrl.src);
      expect(source).toHaveAttribute(
        "media",
        `(min-width: ${expectedUrl.breakpoint}px)`
      );
    });
  });

  it("should render the fallback image with correct attributes", () => {
    const { container } = render(
      <Hero heroCard={fixture.heroCard} image={fixture.image} />
    );

    const img = container.querySelector("img");
    expect(img).toHaveAttribute(
      "src",
      fixture.image.url[fixture.image.url.length - 1].src
    );
    expect(img).toHaveAttribute("alt", fixture.image.alt);
    expect(img).toHaveClass("ilo-hero--image");
  });

  it("should not render image section when no image provided", () => {
    const { container } = render(<Hero heroCard={fixture.heroCard} />);
    expect(container.querySelector("picture")).not.toBeInTheDocument();
  });

  it("should apply gap class when gap prop is provided", () => {
    const { container } = render(
      <Hero heroCard={fixture.heroCard} gap="transparent" />
    );
    expect(container.firstChild).toHaveClass("hero__gap__transparent");
  });
});
