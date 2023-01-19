import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReadMore } from "../components/ReadMore";
import readMoreArgs from "../components/ReadMore/ReadMore.args";

describe("<ReadMore>", () => {
  it("Should render RichText `div` with content.", () => {
    const { container } = render(<ReadMore {...readMoreArgs.base} />);
    expect(container.children[0]).not.toBeNull();
    const richTextElement = document.querySelector('div[class*="--richtext"]');
    const excerpt = new DOMParser().parseFromString(
      readMoreArgs.base.excerpt,
      "text/html"
    ).documentElement.textContent;
    expect(richTextElement?.textContent).toEqual(excerpt);
  });

  it("Should render `button` with correct label from prop buttonlabel", () => {
    render(<ReadMore {...readMoreArgs.base} />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0].textContent).toEqual(
      readMoreArgs?.base?.buttonlabel?.closed
    );
  });

  it("Should change contents of RichText `div` with new content.", () => {
    render(<ReadMore {...readMoreArgs.base} />);
    const richTextElement = document.querySelector(
      'div[class*="--richtext"]'
    ) as Element;
    const fulltext = new DOMParser().parseFromString(
      readMoreArgs.open.fulltext,
      "text/html"
    ).documentElement.textContent;
    userEvent.click(
      screen.getByText(readMoreArgs?.base?.buttonlabel?.closed as string, {
        selector: "button",
      })
    );
    expect(richTextElement.textContent).toEqual(fulltext);
  });
});
