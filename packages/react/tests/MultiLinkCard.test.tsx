import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import {
  MultiLinkCard,
  MultiLinkCardProps,
} from "../src/components/Cards/MultiLinkCard";

const defaultProps: MultiLinkCardProps = {
  title: "Advancing social justice",
  eyebrow: "Podcast",
  intro:
    "As the United Nations agency for the world of work, the ILO sets international labour standards, promotes rights at work and encourages decent employment opportunities, the enhancement of social protection and the strengthening of dialogue on work-related issues.",
  size: "standard",
  alignment: "left",
  link: "https://www.ilo.org/",
  image: "/hero.jpg",
  linklist: {
    linkgroup: [
      {
        links: [
          { label: "Read the press release", url: "https://www.ilo.org" },
          { label: "See the statement", url: "https://www.ilo.org" },
          {
            label: "Remarks to G7 Opening Session",
            url: "https://www.ilo.org",
          },
        ],
      },
    ],
  },
};

describe("MultiLinkCard Component", () => {
  it("renders the component", () => {
    render(<MultiLinkCard {...defaultProps} />);
    expect(screen.queryAllByText(defaultProps.title)[0]).toBeInTheDocument();
  });

  it("renders the title with correct heading level", () => {
    render(<MultiLinkCard {...defaultProps} titleLevel="h2" />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      defaultProps.title
    );
  });

  it("displays the eyebrow text when provided", () => {
    render(<MultiLinkCard {...defaultProps} />);
    expect(
      screen.getByText(defaultProps.eyebrow as string)
    ).toBeInTheDocument();
  });

  it("renders the intro text correctly", () => {
    render(<MultiLinkCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.intro as string)).toBeInTheDocument();
  });

  it("renders the image(s) with correct alt text", () => {
    render(<MultiLinkCard {...defaultProps} />);
    const images = screen.getAllByRole("img");
    for (const image of images) {
      expect(image).toHaveAttribute("src", defaultProps.image);
      expect(image).toHaveAttribute("alt", defaultProps.title);
    }
  });

  it("applies the correct CSS classes based on props", () => {
    render(
      <MultiLinkCard
        {...defaultProps}
        alignment="right"
        size="wide"
        theme="soft"
      />
    );
    const card = screen.getAllByRole("link")[0].parentElement;
    expect(card).toHaveClass("ilo--card__align__right");
    expect(card).toHaveClass("ilo--card__size__wide");
    expect(card).toHaveClass("ilo--card__theme__soft");
  });

  it("renders the link when provided", () => {
    render(<MultiLinkCard {...defaultProps} />);
    const link = screen.getByRole("link", { name: defaultProps.title });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", defaultProps.link);
  });

  it("renders a video-specific class when isVideo is true", () => {
    render(<MultiLinkCard {...defaultProps} isVideo={true} />);
    const card = screen.getAllByRole("link")[0].parentElement;
    expect(card).toHaveClass("ilo--card__isvideo");
  });

  it("does not render an image wrapper if image prop is not provided", () => {
    render(<MultiLinkCard {...defaultProps} image={undefined} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders a list of links when linklist prop is provided", () => {
    render(<MultiLinkCard {...defaultProps} />);
    expect(screen.getByText("Read the press release")).toBeInTheDocument();
    expect(
      screen.getByText("Remarks to G7 Opening Session")
    ).toBeInTheDocument();
  });
});
