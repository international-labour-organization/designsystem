import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "../stories/Accordion/Accordion.stories";

const { Default: AccordionLarge } = composeStories(stories);

describe("<Accordion>", () => {
  it("Expect button to exist and aria expanded value to change on accordion button click.", () => {
    render(<AccordionLarge />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0].getAttribute("aria-expanded")).toBe("true");
    fireEvent.click(buttonElement[0]);
    expect(buttonElement[0].getAttribute("aria-expanded")).toBe("false");
  });
});
