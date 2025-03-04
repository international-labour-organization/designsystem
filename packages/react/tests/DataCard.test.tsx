import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DataCard, DataCardProps } from "../src/components/Cards/DataCard";

const defaultProps: DataCardProps = {
  eyebrow: "Flagship report",
  size: "narrow",
  image: "/publication.jpg",
  dataset: {
    content: {
      items: [
        { label: "Date of publication", copy: "17 March 2022" },
        { label: "Published by", copy: "ILO Department of Research" },
      ],
    },
    files: {
      headline: "Files for download",
      items: [
        { label: "PDF 3.2 MB", url: "https://www.ilo.org", target: "_blank" },
        {
          label: "EPUB 5.8 MB",
          url: "https://www.ilo.org",
          target: "_parent",
        },
        { label: "MOBI 2.4 MB", url: "https://www.ilo.org" },
      ],
    },
    cta: {
      headline: "Read online",
      items: [
        { label: "HTML Version", url: "https://www.ilo.org" },
        {
          label: "InfoStories",
          url: "https://www.ilo.org/infostories/en-GB",
        },
      ],
    },
    links: {
      headline: "Also available in",
      items: [
        { label: "English", url: "https://www.ilo.org/search?q=link" },
        { label: "Español", url: "https://www.ilo.org/search?q=hyperlink" },
        { label: "Dansk", url: "https://www.ilo.org/search?q=url" },
        { label: "Deutsch", url: "https://www.ilo.org/search?q=url" },
        { label: "Français", url: "https://www.ilo.org/search?q=url" },
        { label: "Italiano", url: "https://www.ilo.org/search?q=url" },
        { label: "Português", url: "https://www.ilo.org/search?q=url" },
        { label: "Русский", url: "https://www.ilo.org/search?q=url" },
        { label: "中文", url: "https://www.ilo.org/search?q=url" },
        { label: "العربية", url: "https://www.ilo.org/search?q=url" },
        { label: "Ελληνικά", url: "https://www.ilo.org/search?q=url" },
        { label: "Nederlands", url: "https://www.ilo.org/search?q=url" },
      ],
    },
  },
};

describe("DataCard Component", () => {
  it("renders the component", () => {
    const { container } = render(<DataCard {...defaultProps} />);
    const outerDiv = container.firstChild;
    expect(outerDiv).toBeTruthy();
  });

  it("applies correct class for size prop", () => {
    const { container } = render(<DataCard {...defaultProps} size="wide" />);
    const outerDiv = container.firstChild;
    expect(outerDiv).toHaveClass("ilo--card__size__wide");
  });

  it("displays eyebrow text when provided", () => {
    render(<DataCard eyebrow="Sample Eyebrow" />);
    expect(screen.getByText("Sample Eyebrow")).toBeInTheDocument();
  });

  it("renders dataset content items correctly", () => {
    render(
      <DataCard
        dataset={{
          content: {
            items: [{ label: "Label 1", copy: "Copy 1" }],
          },
        }}
      />
    );
    expect(screen.getByText("Label 1")).toBeInTheDocument();
    expect(screen.getByText("Copy 1")).toBeInTheDocument();
  });

  it("renders links when dataset contains link items", () => {
    render(
      <DataCard
        dataset={{
          links: {
            headline: "Useful Links",
            items: [{ label: "Google", url: "https://google.com" }],
          },
        }}
      />
    );
    expect(screen.getByText("Useful Links")).toBeInTheDocument();
    expect(screen.getByText("Google")).toBeInTheDocument();
  });

  it("renders an image when the image prop is provided", () => {
    render(<DataCard {...defaultProps} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/publication.jpg");
  });

  it("renders CTA items correctly", () => {
    render(<DataCard {...defaultProps} />);
    expect(screen.getByText("Read online")).toBeInTheDocument();
    expect(screen.getByText("HTML Version")).toBeInTheDocument();
    expect(screen.getByText("InfoStories")).toBeInTheDocument();
  });

  it("renders a single column layout when size is 'narrow'", () => {
    const { container } = render(
      <DataCard {...defaultProps} columns="two" size="narrow" />
    );
    const outerDiv = container.firstChild;
    expect(outerDiv).toHaveClass("ilo--card__type__data__columns__one");
  });
});
