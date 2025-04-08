import { expect, describe, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Callout } from "../src/components/Callout";
import { CalloutTypes } from "../src/types";

// Mock the useGlobalSettings hook
vi.mock("../src/hooks/useGlobalSettings", () => ({
  default: () => ({ prefix: "ilo" }),
}));

const fixture = {
  headline: "Important Notice",
  copy: "This is the main content of the callout component",
  type: "info" as CalloutTypes,
  isCollapsible: true,
  isOpen: false,
  toggleOpenLabel: "More",
  toggleClosedLabel: "Less",
  cta: {
    label: "Take action",
    url: "https://www.ilo.org",
  },
};

describe("Callout", () => {
  it("should render with the correct alert type", () => {
    const { container } = render(<Callout type={fixture.type} />);
    expect(container.firstChild).toHaveClass(`ilo--callout__${fixture.type}`);
  });

  it("should render the title correctly", () => {
    render(<Callout headline={fixture.headline} />);
    const element = screen.getByText(fixture.headline);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("ilo--callout--title");
  });

  it("should render the content correctly", () => {
    render(<Callout copy={fixture.copy} />);
    const element = screen.getByText(fixture.copy);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("ilo--callout--description");
  });

  it("should render the alert icon", () => {
    const { container } = render(<Callout type={fixture.type} />);
    const element = container.querySelector(".ilo--callout--icon");

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(`ilo--callout--icon__alert__${fixture.type}`);
  });

  it("should render the button when provided", () => {
    render(<Callout cta={fixture.cta} />);
    const element = screen.getByText(fixture.cta.label);

    expect(element).toBeInTheDocument();
    expect(element.closest("a")).toHaveAttribute("href", fixture.cta.url);
  });

  it("should have the correct collapsible state", () => {
    const { container } = render(
      <Callout isCollapsible={fixture.isCollapsible} isOpen={fixture.isOpen} />
    );
    const element = container.querySelector(".ilo--callout");

    expect(element).toHaveClass("ilo--callout__collapse");
    expect(element).not.toHaveClass("ilo--callout__open");
  });

  it("should render the toggle button when collapsible", () => {
    const { container } = render(
      <Callout
        isCollapsible={true}
        isOpen={false}
        toggleOpenLabel={fixture.toggleOpenLabel}
        toggleClosedLabel={fixture.toggleClosedLabel}
      />
    );

    const toggleButton = container.querySelector("button");
    expect(toggleButton).toBeInTheDocument();

    const buttonText = screen.getByText(fixture.toggleClosedLabel);
    expect(buttonText).toBeInTheDocument();
  });

  it("should toggle open/closed state when clicked", () => {
    const { container } = render(
      <Callout
        isCollapsible={true}
        isOpen={false}
        toggleOpenLabel={fixture.toggleOpenLabel}
        toggleClosedLabel={fixture.toggleClosedLabel}
      />
    );

    const element = container.querySelector(".ilo--callout");
    const toggleButton = screen.getByRole("button");

    // Initially closed
    expect(element).not.toHaveClass("ilo--callout__open");
    expect(screen.getByText(fixture.toggleClosedLabel)).toBeInTheDocument();

    // Click to open
    fireEvent.click(toggleButton);
    expect(element).toHaveClass("ilo--callout__open");
    expect(screen.getByText(fixture.toggleOpenLabel)).toBeInTheDocument();

    // Click to close
    fireEvent.click(toggleButton);
    expect(element).not.toHaveClass("ilo--callout__open");
    expect(screen.getByText(fixture.toggleClosedLabel)).toBeInTheDocument();
  });

  it("should not render toggle button when not collapsible", () => {
    render(
      <Callout
        isCollapsible={false}
        isOpen={false}
        toggleOpenLabel={fixture.toggleOpenLabel}
        toggleClosedLabel={fixture.toggleClosedLabel}
      />
    );

    const toggleButton = screen.queryByRole("button");
    expect(toggleButton).not.toBeInTheDocument();
  });

  it("should render with custom className", () => {
    const customClass = "custom-class";
    const { container } = render(<Callout className={customClass} />);

    const element = container.querySelector(".ilo--callout");
    expect(element).toHaveClass(customClass);
  });
});
