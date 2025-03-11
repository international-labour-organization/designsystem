// Icon.test.tsx
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Icon } from "../src/components/Icon";

describe("Icon component", () => {
  it("returns null if no name is provided", () => {
    const { container } = render(<Icon />);
    expect(container.firstChild).toBeNull();
  });

  it("renders the correct icon with default size and fill", () => {
    const { container } = render(<Icon name="check" />);
    const icon = container.firstChild;
    expect(icon).toBeInTheDocument();
    // The className should be based on the mocked prefix
    expect(icon).toHaveAttribute("class", "ilo--icon");
    // Default fill should be "currentColor"
    expect(icon).toHaveAttribute("fill", "currentColor");
  });

  it("applies the provided fill color", () => {
    const { container } = render(<Icon name="check" color="red" />);
    const icon = container.firstChild;
    expect(icon).toHaveAttribute("fill", "red");
  });

  it("computes the machine name correctly when size is provided", () => {
    // Provide size explicitly (e.g. 32) so that machineName becomes "Check32"
    const { container } = render(<Icon name="check" size={32} />);
    const icon = container.firstChild;
    // The element is rendered using the dummy icon registered for "Check32"
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("fill", "currentColor");
  });
});
