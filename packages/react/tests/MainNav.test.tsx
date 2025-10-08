import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { MainNav } from "../src/components/Nav";
import { MainNavArgs } from "../src/stories/MainNav/MainNav.args";
import userEvent from "@testing-library/user-event";

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
    expect(navigationDropdown).not.toHaveClass(".ilo--nav-dropdown--open");

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
    expect(navigationDropdown).not.toHaveClass(".ilo--nav-dropdown--open");

    await userEvent.click(moreButton);
    const searchButton = document.querySelector(".ilo--main-nav__nav-search");
    expect(searchButton).toBeInTheDocument();

    const searchDropdown = document.querySelector(
      ".ilo--main-nav__nav-search-dropdown"
    );
    expect(searchDropdown).toBeInTheDocument();
    expect(searchDropdown).not.toHaveClass(".ilo--nav-dropdown--open");

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
    expect(searchDropdown).not.toHaveClass(".ilo--nav-dropdown--open");

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

  //TODO add a11y tests mentioned in #1423
});
