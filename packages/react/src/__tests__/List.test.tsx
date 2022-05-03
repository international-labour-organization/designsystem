import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import { List } from "../components/List";
import listArgs from "../components/List/List.args";
import * as stories from "../stories/List.stories";

describe("<List>", () => {
  it("Should render `ol` with some items.", () => {
    const listOrdered = render(<List {...listArgs.ordered} />);
    expect(listOrdered).not.toBeNull();
    expect(listOrdered).toHaveClass("ilo--list--ordered");
  });

  it("Should render `ul` with some items.", () => {
    const listUnordered = render(<List {...listArgs.unordered} />);
    expect(listUnordered).not.toBeNull();
    expect(listUnordered).toHaveClass("ilo--list--unordered");
  });

  it("Should render `ul` horizontally with some items.", () => {
    const listHorizontal = render(<List {...listArgs.horizontal} />);
    expect(listHorizontal).not.toBeNull();
    expect(listHorizontal).toHaveClass("ilo--list--horizontal");
  });

  it("Should render `ul` unstyled with some items.", () => {
    const listUnstyled = render(<List {...listArgs.unstyled} />);
    expect(listUnstyled).not.toBeNull();
    expect(listUnstyled).toHaveClass("ilo--list--unstyled");
  });
});
