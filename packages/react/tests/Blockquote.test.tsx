import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Blockquote } from "../src/components/Blockquote";

const fixture = {
  quote: "My quote",
  cite: "Someone",
};

describe("Blockquote", () => {
  it("should render with the correct label", () => {
    render(<Blockquote quote={fixture.quote} cite={fixture.cite} />);
    const element = screen.getByText(fixture.quote);

    expect(element).toBeInTheDocument();
  });

  it("should render with the correct citation", () => {
    render(<Blockquote quote={fixture.quote} cite={fixture.cite} />);
    const element = screen.getByText(fixture.cite);

    expect(element).toBeInTheDocument();
  });

  it("should show opening quote marks", () => {
    render(<Blockquote quote={fixture.quote} cite={fixture.cite} />);
    const blockquote = screen
      .getByText(fixture.quote)
      .closest("blockquote") as HTMLQuoteElement;

    expect(blockquote).not.toBeNull();
    expect(window.getComputedStyle(blockquote, "::before").content).not.toBe(
      "none"
    );
  });

  it("should show closing quote marks", () => {
    render(<Blockquote quote={fixture.quote} cite={fixture.cite} />);
    const paragraph = screen.getByText(fixture.quote);

    expect(paragraph).not.toBeNull();
    expect(window.getComputedStyle(paragraph, "::after").content).not.toBe(
      "none"
    );
  });
});
