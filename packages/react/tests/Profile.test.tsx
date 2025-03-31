import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Profile } from "../src/components/Profile";

const fixture = {
  avatar: "/test-avatar.jpg",
  name: "Test Name",
  description: "Test description text",
  role: "Test Role",
  link: {
    label: "Learn more",
    url: "https://example.com",
  },
};

describe("Profile", () => {
  it("should render with the name", () => {
    render(<Profile {...fixture} />);
    const element = screen.getByText(fixture.name);
    expect(element).toBeInTheDocument();
  });

  it("should render with the avatar", () => {
    render(<Profile avatar={fixture.avatar} name={fixture.name} />);
    const element = screen.getByRole("img") as HTMLImageElement;
    expect(element).toBeInTheDocument();
    expect(element.src).toContain(fixture.avatar);
    expect(element.alt).toBe(`Photo of ${fixture.name}`);
  });

  it("should render with the role", () => {
    render(<Profile {...fixture} />);
    const element = screen.getByText(fixture.role);
    expect(element).toBeInTheDocument();
  });

  it("should render with the description", () => {
    render(<Profile {...fixture} />);
    const element = screen.getByText(fixture.description);
    expect(element).toBeInTheDocument();
  });

  it("should render with the link", () => {
    render(<Profile {...fixture} />);
    const element = screen.getByRole("link");
    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("href", fixture.link.url);
    expect(element).toHaveAttribute("target", "__blank");
    expect(element).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getByText(fixture.link.label)).toBeInTheDocument();
  });

  it("should render with the correct theme class", () => {
    render(<Profile {...fixture} theme="dark" />);
    const figure = screen.getByRole("figure");
    expect(figure).toHaveClass("ilo--profile__theme__dark");
  });

  it("should render with the default light theme", () => {
    render(<Profile {...fixture} />);
    const figure = screen.getByRole("figure");
    expect(figure).toHaveClass("ilo--profile__theme__light");
  });

  it("should render with a custom className", () => {
    const customClass = "custom-class";
    render(<Profile {...fixture} className={customClass} />);
    const figure = screen.getByRole("figure");
    expect(figure).toHaveClass(customClass);
  });
});
