import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  SocialMedia,
  socialMediaArgs,
  SocialMediaProps,
} from "../src/components/SocialMedia";

describe("SocialMedia Component", () => {
  it("renders social media icons", () => {
    render(<SocialMedia {...socialMediaArgs} />);
    expect(screen.getByRole("link", { name: "Bluesky" })).toBeInTheDocument();
    expect(screen.getByText("x")).toBeInTheDocument();
  });

  it("renders with a headline", () => {
    render(<SocialMedia {...socialMediaArgs} />);
    expect(screen.getByText("Follow us on social media")).toBeInTheDocument();
  });

  it("applies the correct theme class", () => {
    render(<SocialMedia {...socialMediaArgs} />);
    const container = screen.getByRole("list").parentElement;
    expect(container).toHaveClass("ilo--social-media__theme__light");
  });

  it("applies the correct justification class", () => {
    render(<SocialMedia {...socialMediaArgs} />);
    const container = screen.getByRole("list").parentElement;
    expect(container).toHaveClass("ilo--social-media__justify__start");
  });

  it("applies the correct icon size class", () => {
    render(<SocialMedia {...socialMediaArgs} />);
    const list = screen.getByRole("list");
    expect(list).toHaveClass("ilo--social-media--list__size__normal");
  });

  it("applies custom class names to icons", () => {
    const customIcons: SocialMediaProps = {
      iconSize: "normal",
      icons: [
        {
          icon: "facebook",
          url: "https://facebook.com",
          label: "Facebook",
          className: "custom-class",
        },
      ],
    };
    render(<SocialMedia {...customIcons} />);
    const iconItem = screen.getByText("Facebook").parentElement;
    expect(iconItem).toHaveClass("custom-class");
  });
});
