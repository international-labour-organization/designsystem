import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ComplexNav } from "../src/components/Nav/Subsite/ComplexNav";
import { CompactNav } from "../src/components/Nav/Subsite/CompactNav";
import { SubsiteNavArgs } from "../src/stories/SubsiteNav/SubsiteNav.args";

// Complex nav specific arguments with branding tag
const complexNavArgs = {
  ...SubsiteNavArgs,
  branding: {
    ...SubsiteNavArgs.branding,
    logo: {
      ...SubsiteNavArgs.branding.logo,
      main: <img src="/ilo-live-logo-en-dark.png" alt="Logo" />,
      mobile: <img src="/ilo-live-logo-en-light.png" alt="Logo" />,
    },
    tag: {
      main: "Live events that shape the future of work",
      sub: "The official livestream platform of the ILO",
    },
  },
};

describe("ComplexNav", () => {
  it("should render with the correct branding", () => {
    render(<ComplexNav props={complexNavArgs} />);

    expect(
      screen.getByText(complexNavArgs.branding.tag.main)
    ).toBeInTheDocument();

    expect(
      screen.getByText(complexNavArgs.branding.tag.sub)
    ).toBeInTheDocument();

    const logo = screen.getAllByAltText("Logo").at(0);
    expect(logo!.getAttribute("src")).toBe("/ilo-live-logo-en-dark.png");
  });

  it("should render with the language widget that toggles the context menu", async () => {
    const { container } = render(<ComplexNav props={complexNavArgs} />);
    const languageWidget = container.querySelector(
      ".ilo--subsite-nav-complex__widgets-bar__language"
    );
    expect(languageWidget).toBeInTheDocument();

    const languageContextMenu = document.querySelector(
      ".ilo--language-toggle--context-menu"
    );
    expect(languageContextMenu).toBeInTheDocument();
    expect(languageContextMenu?.querySelectorAll("li").length).toBe(
      complexNavArgs.widgets.language.options.length
    );

    const languageToggleButton = container.querySelector(
      '[aria-controls="ilo--language-toggle--context-menu"]'
    );
    expect(languageToggleButton).toBeInTheDocument();
    expect(languageToggleButton).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(languageToggleButton!);
    expect(languageToggleButton).toHaveAttribute("aria-expanded", "true");
    expect(languageContextMenu).toHaveClass(
      "ilo--language-toggle--context-menu__open"
    );

    await userEvent.click(languageToggleButton!);
    expect(languageToggleButton).toHaveAttribute("aria-expanded", "false");
    expect(languageContextMenu).not.toHaveClass(
      "ilo--language-toggle--context-menu__open"
    );
  });

  it("should render the more button and toggle navigation dropdown", async () => {
    render(<ComplexNav props={complexNavArgs} />);

    const moreButtons = screen.getAllByText(complexNavArgs.menu.labels.more);
    expect(moreButtons.length).toBeGreaterThan(0);

    const desktopMoreButton = moreButtons.filter((item) =>
      item.classList.contains("ilo--nav-menu__more")
    );
    expect(desktopMoreButton.length).toBe(1);

    const moreButton = desktopMoreButton.at(0)!;
    const navigationDropdown = document.querySelector(".ilo--nav-dropdown");

    expect(navigationDropdown).toBeInTheDocument();
    expect(navigationDropdown).not.toHaveClass("ilo--nav-dropdown--open");

    await userEvent.click(moreButton);
    expect(navigationDropdown).toHaveClass("ilo--nav-dropdown--open");

    await userEvent.click(moreButton);
    expect(navigationDropdown).not.toHaveClass("ilo--nav-dropdown--open");

    const menuItems = navigationDropdown!.querySelectorAll(
      ".ilo--nav-menu-grid__item"
    );
    expect(menuItems.length).toBe(complexNavArgs.menu.items.length - 5);
  });

  it("should render the search link correctly", () => {
    render(<ComplexNav props={complexNavArgs} />);

    const searchLink = document.querySelector(
      ".ilo--subsite-nav-complex__nav-search"
    );
    expect(searchLink).toBeInTheDocument();
    expect(searchLink).toHaveAttribute(
      "href",
      complexNavArgs.widgets.search.url
    );
    expect(searchLink).toHaveAttribute(
      "aria-label",
      complexNavArgs.widgets.search.label
    );
  });

  it("should render the external link widget", () => {
    render(<ComplexNav props={complexNavArgs} />);

    const externalLinks = screen.getAllByText(
      complexNavArgs.widgets.link.label
    );
    expect(externalLinks.length).toBeGreaterThan(0);

    const externalLink = externalLinks.at(0)!;
    expect(externalLink).toBeInTheDocument();
    expect(externalLink.closest("a")).toHaveAttribute(
      "href",
      complexNavArgs.widgets.link.href
    );
  });

  it("should trap focus within the more menu when opened", async () => {
    render(<ComplexNav props={complexNavArgs} />);

    const moreButtons = screen.getAllByText(complexNavArgs.menu.labels.more);
    const desktopMoreButton = moreButtons.filter((item) =>
      item.classList.contains("ilo--nav-menu__more")
    );
    expect(desktopMoreButton.length).toBe(1);

    const moreButton = desktopMoreButton.at(0)!;
    const navigationDropdown = document.querySelector(".ilo--nav-dropdown");

    await userEvent.click(moreButton);
    expect(navigationDropdown).toHaveClass("ilo--nav-dropdown--open");

    const focusableElements = navigationDropdown!.querySelectorAll(
      [
        "a[href]:not([disabled])",
        "button:not([disabled])",
        "textarea:not([disabled])",
        'input[type="text"]:not([disabled])',
        'input[type="radio"]:not([disabled])',
        'input[type="checkbox"]:not([disabled])',
        'input[type="search"]:not([disabled])',
        'input[type="submit"]:not([disabled])',
        "select:not([disabled])",
        '[tabindex]:not([tabindex="-1"]):not([disabled])',
      ].join(",")
    );
    expect(focusableElements.length).toBeGreaterThan(0);

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    expect(firstElement).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(lastElement).toHaveFocus();

    await userEvent.tab();
    expect(firstElement).toHaveFocus();
  });

  it("should close more menu with the escape key and have correct a11y attributes", async () => {
    render(<ComplexNav props={complexNavArgs} />);

    const moreButtons = screen.getAllByText(complexNavArgs.menu.labels.more);
    const desktopMoreButton = moreButtons.filter((item) =>
      item.classList.contains("ilo--nav-menu__more")
    );
    expect(desktopMoreButton.length).toBe(1);

    const moreButton = desktopMoreButton.at(0)!;
    const navigationDropdown = document.querySelector(".ilo--nav-dropdown");

    await userEvent.click(moreButton);
    expect(navigationDropdown).toHaveClass("ilo--nav-dropdown--open");
    expect(moreButton).toHaveAttribute("aria-expanded", "true");
    expect(moreButton.getAttribute("aria-controls")).toMatch(
      /ilo--subsite-nav-complex.*dropdown/
    );
    expect(navigationDropdown).toHaveAttribute("aria-hidden", "false");

    await userEvent.keyboard("{Escape}");
    expect(navigationDropdown).not.toHaveClass("ilo--nav-dropdown--open");
    expect(moreButton).toHaveAttribute("aria-expanded", "false");
    expect(navigationDropdown).toHaveAttribute("aria-hidden", "true");
  });
});

describe("CompactNav", () => {
  it("should render with the correct branding", () => {
    render(<CompactNav props={SubsiteNavArgs} />);

    const logos = screen.getAllByAltText("Logo").at(0);
    expect(logos!.getAttribute("src")).toBe("/ilo-live-logo-en-light.png");
  });

  it("should render with the language widget that toggles the context menu", async () => {
    const { container } = render(<CompactNav props={SubsiteNavArgs} />);

    const languageWidget = container.querySelector(
      ".ilo--subsite-nav-compact__widget-bar-language"
    );
    expect(languageWidget).toBeInTheDocument();

    const languageContextMenu = document.querySelector(
      ".ilo--language-toggle--context-menu"
    );
    expect(languageContextMenu).toBeInTheDocument();

    const languageToggleButton = container.querySelector(
      '[aria-controls="ilo--language-toggle--context-menu"]'
    );
    expect(languageToggleButton).toBeInTheDocument();
    expect(languageToggleButton).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(languageToggleButton!);
    expect(languageToggleButton).toHaveAttribute("aria-expanded", "true");
    expect(languageContextMenu).toHaveClass(
      "ilo--language-toggle--context-menu__open"
    );

    await userEvent.click(languageToggleButton!);
    expect(languageToggleButton).toHaveAttribute("aria-expanded", "false");
    expect(languageContextMenu).not.toHaveClass(
      "ilo--language-toggle--context-menu__open"
    );
  });

  it("should render the more button and toggle navigation dropdown", async () => {
    render(<CompactNav props={SubsiteNavArgs} />);

    const moreButtons = screen.getAllByText(SubsiteNavArgs.menu.labels.more);
    expect(moreButtons.length).toBeGreaterThan(0);

    const desktopMoreButton = moreButtons.filter((item) =>
      item.classList.contains("ilo--nav-menu__more")
    );
    expect(desktopMoreButton.length).toBe(1);

    const moreButton = desktopMoreButton.at(0)!;
    const navigationDropdown = document.querySelector(".ilo--nav-dropdown");

    expect(navigationDropdown).toBeInTheDocument();
    expect(navigationDropdown).not.toHaveClass("ilo--nav-dropdown--open");

    await userEvent.click(moreButton);
    expect(navigationDropdown).toHaveClass("ilo--nav-dropdown--open");

    await userEvent.click(moreButton);
    expect(navigationDropdown).not.toHaveClass("ilo--nav-dropdown--open");

    const menuItems = navigationDropdown!.querySelectorAll(
      ".ilo--nav-menu-grid__item"
    );
    expect(menuItems.length).toBe(SubsiteNavArgs.menu.items.length - 2);
  });

  it("should render the search link correctly", () => {
    render(<CompactNav props={SubsiteNavArgs} />);

    const searchLink = document.querySelector(
      ".ilo--subsite-nav-compact__widget-bar-search"
    );
    expect(searchLink).toBeInTheDocument();
    expect(searchLink).toHaveAttribute(
      "href",
      SubsiteNavArgs.widgets.search.url
    );
    expect(searchLink).toHaveAttribute(
      "aria-label",
      SubsiteNavArgs.widgets.search.label
    );
  });

  it("should render the external link widget", () => {
    render(<CompactNav props={SubsiteNavArgs} />);

    const externalLinks = screen.getAllByText(
      complexNavArgs.widgets.link.label
    );
    expect(externalLinks.length).toBeGreaterThan(0);

    const externalLink = externalLinks.at(0)!;
    expect(externalLink).toBeInTheDocument();
    expect(externalLink.closest("a")).toHaveAttribute(
      "href",
      complexNavArgs.widgets.link.href
    );
  });

  it("should trap focus within the more menu when opened", async () => {
    render(<CompactNav props={SubsiteNavArgs} />);

    const moreButtons = screen.getAllByText(SubsiteNavArgs.menu.labels.more);
    const desktopMoreButton = moreButtons.filter((item) =>
      item.classList.contains("ilo--nav-menu__more")
    );
    expect(desktopMoreButton.length).toBe(1);

    const moreButton = desktopMoreButton.at(0)!;
    const navigationDropdown = document.querySelector(".ilo--nav-dropdown");

    await userEvent.click(moreButton);
    expect(navigationDropdown).toHaveClass("ilo--nav-dropdown--open");

    const focusableElements = navigationDropdown!.querySelectorAll(
      [
        "a[href]:not([disabled])",
        "button:not([disabled])",
        "textarea:not([disabled])",
        'input[type="text"]:not([disabled])',
        'input[type="radio"]:not([disabled])',
        'input[type="checkbox"]:not([disabled])',
        'input[type="search"]:not([disabled])',
        'input[type="submit"]:not([disabled])',
        "select:not([disabled])",
        '[tabindex]:not([tabindex="-1"]):not([disabled])',
      ].join(",")
    );
    expect(focusableElements.length).toBeGreaterThan(0);

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    expect(firstElement).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(lastElement).toHaveFocus();

    await userEvent.tab();
    expect(firstElement).toHaveFocus();
  });
});
