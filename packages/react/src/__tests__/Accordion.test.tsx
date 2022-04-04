import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "../stories/Accordion.stories";
import { Accordion, AccordionItem } from "../components/Accordion";
import accordionArgs from "../components/Accordion/Accordion.args";

const { AccordionLarge, AccordionSmall } = composeStories(stories);

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

  it("Expect button to have small class if small size prop passed", () => {
    render(<AccordionSmall />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0]).toHaveClass("ilo--accordion__button--small");
  });

  it("Expect button to have large class if large size prop passed", () => {
    render(<AccordionLarge />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0]).toHaveClass("ilo--accordion__button--large");
  });

  it("Should render `h1` with story text.", () => {
    render(<AccordionLarge />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    fireEvent.click(buttonElement[0]);
    expect(buttonElement[0]).toHaveAttribute("aria-expanded", "false");
  });

  it("Should render `h2` with story text.", () => {
    render(<AccordionSmall />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    fireEvent.click(buttonElement[0]);
    expect(buttonElement[0]).toHaveAttribute("aria-expanded", "false");
  });

  it("Should print a warning if two <AccordionItem /> have same id", async () => {
    const consoleWarn = jest.spyOn(console, "warn").mockImplementation(() => {
      // do nothing
    });
    render(
      <Accordion {...accordionArgs.large}>
        <AccordionItem id="test-1">Item/</AccordionItem>
        <AccordionItem id="test-1">Item/</AccordionItem>
      </Accordion>
    );
    expect(consoleWarn).toHaveBeenCalled();
  });
});
