import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { composeStories } from "@storybook/testing-react";
import * as stories from "../stories/ReadMore.stories";
import { ReadMore } from "../components/ReadMore";
import readMoreArgs from "../components/ReadMore/readMore.args";

describe("<ReadMore>", () => {
  it("Should render RichText `div` with content.", () => {
    const { readMoreElement } = render(
      <ReadMore {...readMoreArgs.closedatstart} />
    );
    expect(readMoreElement).not.toBeNull();
    const richTextElement = document.querySelector('div[class*="--richtext"]');
    expect(richTextElement.textContent).toEqual(
      readMoreArgs.closedatstart.excerpt
    );
  });

  it("Should render `button` with correct label from prop buttonlabel", () => {
    const readMoreElement = render(
      <ReadMore {...readMoreArgs.closedatstart} />
    );
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0].textContent).toEqual(
      readMoreArgs.closedatstart.buttonlabel
    );
  });

  it("Should change contents of RichText `div` with new content.", () => {
    const { readMoreElement } = render(
      <ReadMore {...readMoreArgs.closedatstart} />
    );
    const richTextElement = document.querySelector('div[class*="--richtext"]');
    userEvent.click(
      screen.getByText(readMoreArgs.closedatstart.buttonlabel, {
        selector: "button",
      })
    );
    expect(richTextElement.textContent).toEqual(
      readMoreArgs.closedatstart.fulltext
    );
  });
});
