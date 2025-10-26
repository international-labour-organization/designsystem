import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { FeatureCard } from "../src/components/Cards/FeatureCard";

const defaultProps = {
  title: "Will this card render correctly?",
  eyebrow: "Test",
  date: {
    human: "30 October 2025",
    unix: "1759227495",
  },
  link: "https://www.example.com/",
  image: "/test.jpg",
  size: "narrow",
  isVideo: false,
  linklist: {
    linkgroup: [
      {
        links: [
          {
            label: "Read More",
            url: "https://www.example.com/more",
          },
        ],
      },
    ],
  },
};

describe("FeatureCard", () => {
  it("should render correctly", () => {
    render(<FeatureCard {...defaultProps} />);

    // The first element returned is the stub text for the wrapper link
    const title = screen.getAllByText(defaultProps.title);
    expect(title[1]).toBeVisible();

    const eyebrow = screen.getByText(defaultProps.eyebrow);
    expect(eyebrow).toBeVisible();

    const date = screen.getByText(defaultProps.date.human);
    expect(date).toBeVisible();
    expect(date).toHaveAttribute("datetime", defaultProps.date.unix);

    const link = screen.getByRole("link", { name: defaultProps.title });
    expect(link).toHaveAttribute("href", defaultProps.link);

    const image = screen.getByRole("img", { name: defaultProps.title });
    expect(image).toBeVisible();
    expect(image).toHaveAttribute("src", defaultProps.image);

    const linklistItem = screen.getByRole("link", { name: "Read More" });
    expect(linklistItem).toBeVisible();
    expect(linklistItem).toHaveAttribute(
      "href",
      defaultProps.linklist.linkgroup[0].links[0].url
    );
  });

  it("should display loading skeleton correctly", () => {
    render(<FeatureCard.Skeleton />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='ilo--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(4);
  });
});
