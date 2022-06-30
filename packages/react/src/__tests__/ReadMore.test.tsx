import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReadMore } from "../components/ReadMore";
import readMoreArgs from "../components/ReadMore/readMore.args";

describe("<ReadMore>", () => {
  it("Should render RichText `div` with content.", () => {
    const { container } = render(<ReadMore {...readMoreArgs.closedatstart} />);
    expect(container.children[0]).not.toBeNull();
    const richTextElement = document.querySelector('div[class*="--richtext"]');
    expect(richTextElement?.textContent).toEqual(
      readMoreArgs.closedatstart.excerpt
    );
  });

  it("Should render `button` with correct label from prop buttonlabel", () => {
    render(<ReadMore {...readMoreArgs.closedatstart} />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0].textContent).toEqual(
      readMoreArgs?.closedatstart?.buttonlabel?.closed
    );
  });

  it("Should change contents of RichText `div` with new content.", () => {
    render(<ReadMore {...readMoreArgs.closedatstart} />);
    const richTextElement = document.querySelector(
      'div[class*="--richtext"]'
    ) as Element;
    userEvent.click(
      screen.getByText(
        readMoreArgs?.closedatstart?.buttonlabel?.closed as string,
        {
          selector: "button",
        }
      )
    );
    expect(richTextElement.textContent).toEqual(
      readMoreArgs.closedatstart.fulltext
    );
  });
});
