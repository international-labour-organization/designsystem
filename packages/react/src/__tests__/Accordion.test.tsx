import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "../stories/Accordion/Accordion.stories";

const { Default: AccordionLarge } = composeStories(stories);

// Need to finish writting accordion tests

describe("<Accordion>", () => {
  it("Expect button to exist and aria expanded value to change on accordion button click.", () => {
    render(<AccordionLarge />);
    const buttonElement = screen.getAllByRole("button");
    const ariaExpanded = buttonElement[0].getAttribute("aria-expanded");
    expect(buttonElement).not.toBeNull();
    fireEvent.click(buttonElement[0]);
    expect(buttonElement[0]).toHaveAttribute(
      "aria-expanded",
      `${!ariaExpanded}`
    );
  });

  it("Should render `h1` with story text.", () => {
    render(<AccordionLarge />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    fireEvent.click(buttonElement[0]);
    expect(buttonElement[0]).toHaveAttribute("aria-expanded", "false");
  });

  it("Should render `h2` with story text.", () => {
    render(<AccordionLarge />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    fireEvent.click(buttonElement[0]);
    expect(buttonElement[0]).toHaveAttribute("aria-expanded", "false");
  });
});
