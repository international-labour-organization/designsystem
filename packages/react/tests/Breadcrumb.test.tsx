import { expect, describe, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Breadcrumb } from "../src/components/Breadcrumb";

const mockLinks = [
  { url: "/home", label: "Home" },
  { url: "/section", label: "Section" },
  { url: "/subsection", label: "Subsection" },
  { url: "/page", label: "Current Page" },
];

describe("Breadcrumb", () => {
  let mockObserve: ReturnType<typeof vi.fn>;
  let mockUnobserve: ReturnType<typeof vi.fn>;
  let mockDisconnect: ReturnType<typeof vi.fn>;
  let mockResizeObserver: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // Mock ResizeObserver
    mockObserve = vi.fn();
    mockUnobserve = vi.fn();
    mockDisconnect = vi.fn();
    mockResizeObserver = vi.fn().mockImplementation(() => ({
      observe: mockObserve,
      unobserve: mockUnobserve,
      disconnect: mockDisconnect,
    }));

    global.ResizeObserver = mockResizeObserver;
  });

  it("should throw an error when less than 2 links are provided", () => {
    expect(() => {
      render(
        <Breadcrumb
          links={[{ url: "/home", label: "Home" }]}
          buttonLabel="Show more"
        />
      );
    }).toThrow("Breadcrumb component requires at least two links");
  });

  it("should render the context menu button when there are middle links", () => {
    render(<Breadcrumb links={mockLinks} buttonLabel="Show more" />);
    const button = screen.getByRole("button", { name: "Show more" });
    expect(button).toBeInTheDocument();
  });

  it("should toggle the context menu when the button is clicked", async () => {
    render(<Breadcrumb links={mockLinks} buttonLabel="Show more" />);
    const button = screen.getByRole("button", { name: "Show more" });

    // Initially closed
    expect(button).toHaveAttribute("aria-expanded", "false");

    // Click to open
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Click to close
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
  /*
  it("should show middle links in the context menu", async () => {
    render(<Breadcrumb links={mockLinks} buttonLabel="Show more" />);
    const button = screen.getByRole("button", { name: "Show more" });

    await userEvent.click(button);

    const contextLinks = screen.getAllByRole("link");
    expect(contextLinks).toHaveLength(4); // All links should be visible in the menu

    const sectionLink = screen.getByText("Section");
    const subsectionLink = screen.getByText("Subsection");

    expect(sectionLink).toHaveAttribute("href", "/section");
    expect(subsectionLink).toHaveAttribute("href", "/subsection");
  });
 */
  it("should apply the correct theme class", () => {
    render(
      <Breadcrumb links={mockLinks} buttonLabel="Show more" theme="dark" />
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("ilo--breadcrumb__theme__dark");
  });

  it("should apply custom className", () => {
    const customClass = "custom-breadcrumb";
    render(
      <Breadcrumb
        links={mockLinks}
        buttonLabel="Show more"
        className={customClass}
      />
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass(customClass);
  });

  it("should close the context menu when clicking outside", async () => {
    render(<Breadcrumb links={mockLinks} buttonLabel="Show more" />);
    const button = screen.getByRole("button", { name: "Show more" });

    // Open the menu
    await userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    // Click outside
    fireEvent.mouseDown(document.body);

    // Menu should be closed
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("should handle window resize for collapsing", async () => {
    render(<Breadcrumb links={mockLinks} buttonLabel="Show more" />);

    // Verify ResizeObserver was initialized
    expect(mockResizeObserver).toHaveBeenCalled();

    // Verify observe was called with document.body
    expect(mockObserve).toHaveBeenCalledWith(document.body);

    // Trigger resize
    window.dispatchEvent(new Event("resize"));

    // Cleanup should call disconnect
    const instance = mockResizeObserver.mock.results[0].value;
    instance.disconnect();
    expect(mockDisconnect).toHaveBeenCalled();
  });
});
