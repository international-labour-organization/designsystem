import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { TextCard } from "../src/components/Cards/TextCard";

const defaultProps = {
  title: "Why we need tests",
  eyebrow: "Test",
  date: {
    human: "30 October 2025",
    unix: "1759227495",
  },
  link: "https://www.example.com",
  profile: {
    avatar: "/test-man.jpg",
    description: "Test man is a sample character for testing this card.",
    name: "Test man",
    role: "Tester",
  },
};

describe("TextCard", () => {
  it("should render correctly", () => {
    render(<TextCard {...defaultProps} />);

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

    const profileName = screen.getByText(defaultProps.profile.name);
    expect(profileName).toBeVisible();

    const profileRole = screen.getByText(defaultProps.profile.role);
    expect(profileRole).toBeVisible();

    const profileDescription = screen.getByText(
      defaultProps.profile.description
    );
    expect(profileDescription).toBeVisible();
  });

  it("should display loading skeleton correctly", () => {
    const loadingProps = { ...defaultProps, loading: true };
    render(<TextCard {...loadingProps} />);

    // The skeleton elements should be present
    const skeletonElements = document.querySelectorAll(
      "[class*='ilo--card--skeleton--']"
    );
    expect(skeletonElements).toHaveLength(4);

    // The actual content should not be present
    const title = screen.queryByText(defaultProps.title);
    expect(title).not.toBeInTheDocument();

    const eyebrow = screen.queryByText(defaultProps.eyebrow);
    expect(eyebrow).not.toBeInTheDocument();

    const date = screen.queryByText(defaultProps.date.human);
    expect(date).not.toBeInTheDocument();

    const profileName = screen.queryByText(defaultProps.profile.name);
    expect(profileName).not.toBeInTheDocument();
  });
});
