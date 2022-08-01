import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Callout } from "../components/Callout";
import calloutArgs from "../components/Callout/Callout.args";

// const { InfoCallout, ErrorCallout, SuccessCallout, WarningCallout } =
//   composeStories(stories);

describe("<Callout>", () => {
  it("Should render Callout headline with content.", () => {
    const { container } = render(<Callout {...calloutArgs.hascta} />);
    expect(container.children[0]).not.toBeNull();
    const headlineElement = document.querySelector('[class*="--headline"]');
    console.log(headlineElement);
    expect(headlineElement?.textContent).toEqual(calloutArgs?.hascta?.headline);
  });

  it("Should render Callout copy with content.", () => {
    const { container } = render(<Callout {...calloutArgs.hascta} />);
    expect(container.children[0]).not.toBeNull();
    const copyElement = document.querySelector('[class*="--copy"]');
    expect(copyElement?.textContent).toEqual(calloutArgs?.hascta?.copy);
  });

  it("Should render `button` with correct label from prop toggleClosedLabel", () => {
    render(<Callout {...calloutArgs.hascta} />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0].textContent).toEqual(
      calloutArgs?.hascta?.toggleClosedLabel
    );
  });

  it("Should open the callout on button click", () => {
    const { container } = render(<Callout {...calloutArgs.hascta} />);
    expect(container.children[0]).not.toBeNull();
    userEvent.click(screen.getByRole("button"));
    const calloutOpenElement = document.querySelector('[class*="--open"]');
    expect(calloutOpenElement).not.toBeNull();
  });
});
