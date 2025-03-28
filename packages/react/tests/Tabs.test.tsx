import { describe, expect, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "../src/components/Tabs";

describe("Tabs", () => {
  const mockItems = [
    {
      label: "Tab 1",
      content: "Tab 1 content",
    },
    {
      label: "Tab 2",
      content: "Tab 2 content",
    },
  ];

  it("renders tabs with correct labels", () => {
    render(<Tabs items={mockItems} theme="light" />);

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
  });

  it("shows first tab content by default", () => {
    render(<Tabs items={mockItems} theme="light" />);

    expect(screen.getByText("Tab 1 content")).toBeVisible();
    expect(screen.queryByText("Tab 2 content")).toBeNull();
  });

  it("switches content when clicking different tab", () => {
    render(<Tabs items={mockItems} theme="light" />);

    const tab2 = screen.getByText("Tab 2");
    fireEvent.click(tab2);

    expect(screen.queryByText("Tab 1 content")).toBeNull();
    expect(screen.getByText("Tab 2 content")).toBeVisible();
  });

  it("applies correct ARIA attributes", () => {
    render(<Tabs items={mockItems} theme="light" />);

    const tab1 = screen.getByText("Tab 1").closest("[role='tab']");
    const tab2 = screen.getByText("Tab 2").closest("[role='tab']");

    expect(tab1).toHaveAttribute("aria-selected", "true");
    expect(tab2).toHaveAttribute("aria-selected", "false");

    const panel1 = screen.getByText("Tab 1 content");
    expect(panel1).toHaveAttribute("role", "tabpanel");
    expect(panel1).toHaveAttribute("aria-labelledby", "tab--0");
  });

  it("sets correct tabindex attributes", () => {
    render(<Tabs items={mockItems} theme="light" />);

    // Tablist should be focusable
    const tablist = screen.getByRole("tablist");
    expect(tablist).toHaveAttribute("tabindex", "0");

    // First tab should be focusable (selected)
    const tab1 = screen.getByText("Tab 1").closest("[role='tab']");
    expect(tab1).toHaveAttribute("tabindex", "0");

    // Second tab should not be focusable (not selected)
    const tab2 = screen.getByText("Tab 2").closest("[role='tab']");
    expect(tab2).toHaveAttribute("tabindex", "-1");

    // Tabpanel should be focusable
    const panel = screen.getByRole("tabpanel");
    expect(panel).toHaveAttribute("tabindex", "0");
  });

  it("renders tabs with icons when provided", () => {
    const itemsWithIcons = [
      {
        label: "Tab 1",
        icon: { name: "search" },
        content: "Content",
      },
    ];

    render(<Tabs items={itemsWithIcons} theme="light" />);

    const tab = screen.getByText("Tab 1").closest("a");
    expect(tab).toHaveClass("icon");
  });

  it("applies theme class when theme prop is provided", () => {
    render(<Tabs items={mockItems} theme="dark" />);

    const tabsContainer = screen.getByRole("tablist").closest(".ilo--tabs");
    expect(tabsContainer).toHaveClass("ilo--tabs__theme__dark");
  });
});
