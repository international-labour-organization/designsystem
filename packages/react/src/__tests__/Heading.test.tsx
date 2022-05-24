import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import headingArgs from "../components/Heading/Heading.args";
import * as stories from "../stories/Heading.stories";

const {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} = composeStories(stories);

describe("<Heading>", () => {
  it("Should render `h1` with story text.", () => {
    render(<Heading1 />);
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual(headingArgs.heading1.children);
  });

  it("Should render `h2` with story text.", () => {
    render(<Heading2 />);
    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual(headingArgs.heading2.children);
  });

  it("Should render `h3` with story text.", () => {
    render(<Heading3 />);
    const headingElement = screen.getByRole("heading", { level: 3 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual(headingArgs.heading3.children);
  });

  it("Should render `h4` with story text.", () => {
    render(<Heading4 />);
    const headingElement = screen.getByRole("heading", { level: 4 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual(headingArgs.heading4.children);
  });

  it("Should render `h5` with story text.", () => {
    render(<Heading5 />);
    const headingElement = screen.getByRole("heading", { level: 5 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual(headingArgs.heading5.children);
  });

  it("Should render `h6` with story text.", () => {
    render(<Heading6 />);
    const headingElement = screen.getByRole("heading", { level: 6 });
    expect(headingElement).not.toBeNull();
    expect(headingElement.textContent).toEqual(headingArgs.heading6.children);
  });
});
