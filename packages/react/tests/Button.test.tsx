import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from "../src/components/Button";

describe("Classic <Button />", () => {
  it("should render with the correct label", () => {
    render(<Button> Action Button </Button>);
    const element = screen.getByText(/Action Button/i);

    expect(element).toBeInTheDocument();
  });

  it("should have the correct type", () => {
    render(<Button type="primary" />);
    const element = screen.getByRole("button");

    expect(element.className).toContain("primary");
  });

  it("should have the correct size", () => {
    render(<Button size="large" />);
    const element = screen.getByRole("button");

    expect(element.className).toContain("large");
  });

  it("should have correct disabled state", () => {
    render(<Button disabled />);
    const element = screen.getByRole("button");

    expect(element).toBeDisabled();
  });

  it("should fire the callback", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const element = screen.getByText(/Click Me/i);
    await userEvent.click(element);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe("Icon <Button />", () => {
  it("should render with the svg element", () => {
    render(<Button icon={{ name: "close" }}>Icon button</Button>);
    const element = screen.getByRole("button");

    expect(element).toContainHTML("<svg ");
  });
});

describe("Link <Button />", () => {
  render(
    <Button
      link={{
        url: "https://example.com",
        label: "Link button",
        target: "_blank",
      }}
    />
  );
  const element = screen.getByRole("link");

  it("should render as an anchor", () => {
    expect(element).toHaveAttribute("href", "https://example.com");
  });

  it("should have the correct target and rel attributes", () => {
    expect(element).toHaveAttribute("target", "_blank");
    expect(element).toHaveAttribute("rel", "noopener noreferrer");
  });
});
