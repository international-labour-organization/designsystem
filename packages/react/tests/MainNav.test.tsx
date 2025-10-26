import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MainNav } from "../src/components/Nav";
import { MainNavArgs } from "../src/stories/MainNav/MainNav.args";

describe("MainNav", () => {
  it("should render with the correct branding", () => {
    render(<MainNav {...MainNavArgs} />);
    expect(
      screen.getByText(MainNavArgs.branding.tag!.main)
    ).toBeInTheDocument();
    expect(
      screen.getByText(MainNavArgs.branding.tag!.sub!)
    ).toBeInTheDocument();

    const logo = screen.getAllByAltText("Logo").at(0);
    expect(logo!.getAttribute("src")).toBe("/logo_en_horizontal_white.svg");
  });

  it("should render with the language widget that toggles the context menu", async () => {
    const { container } = render(<MainNav {...MainNavArgs} />);
    const languageWidget = container.querySelector(
      ".ilo--main-nav__widgets-bar__language"
    );
    expect(languageWidget).toBeInTheDocument();

    const languageContextMenu = document.querySelector(
      ".ilo--language-toggle--context-menu"
    );
    expect(languageContextMenu).toBeInTheDocument();
    expect(languageContextMenu?.querySelectorAll("li").length).toBe(
      MainNavArgs.widgets.language!.options!.length
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
    render(<MainNav {...MainNavArgs} />);

    const moreButtons = screen.getAllByText(MainNavArgs.menu.labels.more!);
    expect(moreButtons.length).toBeGreaterThan(0);

    const desktopMoreButton = moreButtons.filter((item) =>
      item.classList.contains("ilo--nav-menu__more")
    );
    expect(desktopMoreButton.length).toBe(1);

    const moreButton = desktopMoreButton.at(0)!;
    const navigationDropdown = document.querySelector(
      ".ilo--nav-dropdown:not(.ilo--main-nav__nav-search-dropdown)"
    );
    expect(navigationDropdown).toBeInTheDocument();
    expect(navigationDropdown).not.toHaveClass("ilo--nav-dropdown--open");

    await userEvent.click(moreButton);
    expect(navigationDropdown).toHaveClass("ilo--nav-dropdown--open");

    await userEvent.click(moreButton);
    expect(navigationDropdown).not.toHaveClass("ilo--nav-dropdown--open");

    const menuItems = navigationDropdown!.querySelectorAll(
      ".ilo--nav-menu-grid__item"
    );
    expect(menuItems.length).toBe(MainNavArgs.menu.items.length - 5);
  });

  it("should close more menu when search button is clicked", async () => {
    render(<MainNav {...MainNavArgs} />);

    const moreButtons = screen.getAllByText(MainNavArgs.menu.labels.more!);
    const desktopMoreButton = moreButtons.filter((item) =>
      item.classList.contains("ilo--nav-menu__more")
    );
    expect(desktopMoreButton.length).toBe(1);

    const moreButton = desktopMoreButton.at(0)!;
    const navigationDropdown = document.querySelector(
      ".ilo--nav-dropdown:not(.ilo--main-nav__nav-search-dropdown)"
    );

    expect(navigationDropdown).toBeInTheDocument();
    expect(navigationDropdown).not.toHaveClass("ilo--nav-dropdown--open");

    await userEvent.click(moreButton);

    const searchButton = document.querySelector(".ilo--main-nav__nav-search");
    expect(searchButton).toBeInTheDocument();

    const searchDropdown = document.querySelector(
      ".ilo--main-nav__nav-search-dropdown"
    );
    expect(searchDropdown).toBeInTheDocument();
    expect(searchDropdown).not.toHaveClass("ilo--nav-dropdown--open");

    await userEvent.click(searchButton!);
    expect(navigationDropdown).not.toHaveClass("ilo--nav-dropdown--open");
    expect(searchDropdown).toHaveClass("ilo--nav-dropdown--open");
  });

  it("should render the search correctly", async () => {
    render(<MainNav {...MainNavArgs} />);

    const searchButton = document.querySelector(".ilo--main-nav__nav-search");
    expect(searchButton).toBeInTheDocument();

    const searchDropdown = document.querySelector(
      ".ilo--main-nav__nav-search-dropdown"
    );
    expect(searchDropdown).toBeInTheDocument();
    expect(searchDropdown).not.toHaveClass("ilo--nav-dropdown--open");

    await userEvent.click(searchButton!);
    expect(searchDropdown).toHaveClass("ilo--nav-dropdown--open");

    const searchInput = screen
      .getAllByPlaceholderText(
        MainNavArgs.widgets.search.field!.input!.placeholder!
      )
      .at(0)!;
    expect(searchInput).toBeInTheDocument();
    expect((searchInput as HTMLInputElement).value).toBe("");

    await userEvent.type(searchInput, "test");
    expect((searchInput as HTMLInputElement).value).toBe("test");
  });

  it("should trap focus within the more menu when opened", async () => {
    render(<MainNav {...MainNavArgs} />);

    const moreButtons = screen.getAllByText(MainNavArgs.menu.labels.more!);
    const desktopMoreButton = moreButtons.filter((item) =>
      item.classList.contains("ilo--nav-menu__more")
    );
    expect(desktopMoreButton.length).toBe(1);

    const moreButton = desktopMoreButton.at(0)!;
    const navigationDropdown = document.querySelector(
      ".ilo--nav-dropdown:not(.ilo--main-nav__nav-search-dropdown)"
    );

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
    render(<MainNav {...MainNavArgs} />);

    const moreButtons = screen.getAllByText(MainNavArgs.menu.labels.more!);
    const desktopMoreButton = moreButtons.filter((item) =>
      item.classList.contains("ilo--nav-menu__more")
    );
    expect(desktopMoreButton.length).toBe(1);

    const moreButton = desktopMoreButton.at(0)!;
    const navigationDropdown = document.querySelector(
      ".ilo--nav-dropdown:not(.ilo--main-nav__nav-search-dropdown)"
    );

    await userEvent.click(moreButton);
    expect(navigationDropdown).toHaveClass("ilo--nav-dropdown--open");
    expect(moreButton).toHaveAttribute("aria-expanded", "true");
    expect(moreButton.getAttribute("aria-controls")).toMatch(
      /ilo--main-nav.*dropdown/
    );
    expect(navigationDropdown).toHaveAttribute("aria-hidden", "false");

    await userEvent.keyboard("{Escape}");
    expect(navigationDropdown).not.toHaveClass("ilo--nav-dropdown--open");
    expect(moreButton).toHaveAttribute("aria-expanded", "false");
    expect(navigationDropdown).toHaveAttribute("aria-hidden", "true");
  });

  it("should close search menu with the escape key and have correct a11y attributes", async () => {
    render(<MainNav {...MainNavArgs} />);

    const searchButton = document.querySelector(".ilo--main-nav__nav-search");
    expect(searchButton).toBeInTheDocument();

    const searchDropdown = document.querySelector(
      ".ilo--main-nav__nav-search-dropdown"
    );
    expect(searchDropdown).toBeInTheDocument();
    expect(searchDropdown).not.toHaveClass("ilo--nav-dropdown--open");

    await userEvent.click(searchButton!);
    expect(searchDropdown).toHaveClass("ilo--nav-dropdown--open");
    expect(searchButton).toHaveAttribute("aria-expanded", "true");
    expect(searchButton!.getAttribute("aria-controls")).toMatch(
      /ilo--main-nav.*search_dropdown/
    );
    expect(searchDropdown).toHaveAttribute("aria-hidden", "false");

    await userEvent.keyboard("{Escape}");
    expect(searchDropdown).not.toHaveClass("ilo--nav-dropdown--open");
    expect(searchButton).toHaveAttribute("aria-expanded", "false");
    expect(searchDropdown).toHaveAttribute("aria-hidden", "true");
  });
});
