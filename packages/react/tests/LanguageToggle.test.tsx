import { render, screen, fireEvent } from "@testing-library/react";
import {
  LanguageToggle,
  LanguageToggleProps,
} from "../src/components/LanguageToggle";
import { describe, it, expect } from "vitest";
import { LinkProps } from "../src/components/Link";

const defaultProps: LanguageToggleProps = {
  language: "English",
  options: [
    {
      label: "Spanish",
      url: "https://www.ilo.org",
    },
    {
      label: "German",
      url: "https://www.ilo.org",
    },
    {
      label: "French",
      url: "https://www.ilo.org",
    },
  ],
  theme: "dark",
  hideIcon: false,
};

describe("Language Toggle", () => {
  it("renders the language label correctly", () => {
    render(<LanguageToggle {...defaultProps} />);
    const toggleButton = screen.getByRole("button", {
      name: defaultProps.language,
    });
    expect(toggleButton).toHaveTextContent(defaultProps.language);
  });

  it("should not render the icon when hideicon is false", () => {
    const { container } = render(
      <LanguageToggle {...defaultProps} hideIcon={false} />
    );
    const icon = container.querySelector(".ilo--language-toggle--icon");
    expect(icon).toBeInTheDocument();
  });

  it("has the correct theme applied", () => {
    const { container } = render(<LanguageToggle {...defaultProps} />);
    const outerDiv = container.firstChild;
    expect(outerDiv).toHaveClass(
      `ilo--language-toggle__theme__${defaultProps.theme}`
    );
  });

  it("menu is hidden by default", () => {
    const { container } = render(<LanguageToggle {...defaultProps} />);
    const contextMenu = container.querySelector(
      ".ilo--language-toggle--context-menu"
    );
    expect(contextMenu).not.toBeVisible();
  });

  it("menu opens when button is clicked", () => {
    const { container } = render(<LanguageToggle {...defaultProps} />);
    const toggleButton = container.querySelector("button");
    const contextMenu = container.querySelector(
      ".ilo--language-toggle--context-menu"
    );
    fireEvent.click(toggleButton as HTMLButtonElement);
    expect(contextMenu).toBeVisible();
  });

  it("menu closes when button is clicked again", () => {
    const { container } = render(<LanguageToggle {...defaultProps} />);
    const toggleButton = container.querySelector("button");
    const contextMenu = container.querySelector(
      ".ilo--language-toggle--context-menu"
    );
    fireEvent.click(toggleButton as HTMLButtonElement);
    fireEvent.click(toggleButton as HTMLButtonElement);
    expect(contextMenu).not.toBeVisible();
  });

  it("renders the correct number of language options", () => {
    const { container } = render(<LanguageToggle {...defaultProps} />);
    const toggleButton = container.querySelector("button");
    fireEvent.click(toggleButton as HTMLButtonElement);
    if (defaultProps.options) {
      const links = screen.getAllByRole("link");
      expect(links).toHaveLength(defaultProps.options.length);
    }
  });

  it("ensures each language option has a valid href", () => {
    if (defaultProps.options) {
      const { container } = render(<LanguageToggle {...defaultProps} />);
      const toggleButton = container.querySelector("button");
      fireEvent.click(toggleButton as HTMLButtonElement);
      const links = screen.getAllByRole("link");
      links.forEach((link, index) => {
        const options = defaultProps.options as LinkProps[];
        const href = options[index].href as string;
        expect(link).toHaveAttribute("href", href);
      });
    }
  });

  it("has correct accessibility attributes (aria-expanded & hidden)", () => {
    const { container } = render(<LanguageToggle {...defaultProps} />);
    const toggleButton = container.querySelector("button");
    const contextMenu = container.querySelector(
      ".ilo--language-toggle--context-menu"
    );
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(contextMenu).toHaveAttribute("hidden");

    fireEvent.click(toggleButton as HTMLButtonElement);
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(contextMenu).not.toHaveAttribute("hidden");

    fireEvent.click(toggleButton as HTMLButtonElement);
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
    expect(contextMenu).toHaveAttribute("hidden");
  });
});
