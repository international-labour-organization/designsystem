import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import { List } from "../components/List";
import listArgs from "../components/List/List.args";
import * as stories from "../stories/List.stories";

describe("<List>", () => {
  it("Should render `ol` with some items.", () => {
    const { container } = render(<List {...listArgs.ordered} />);
    expect(container).not.toBeNull();
    expect(container.firstChild).toHaveClass("ilo--list--ordered");
  });

  it("Should render `ul` with some items.", () => {
    const { container } = render(<List {...listArgs.unordered} />);
    expect(container).not.toBeNull();
    expect(container.firstChild).toHaveClass("ilo--list--unordered");
  });

  it("Should render `ul` horizontally with some items.", () => {
    const { container } = render(<List {...listArgs.horizontal} />);
    expect(container).not.toBeNull();
    expect(container.firstChild).toHaveClass("ilo--list--horizontal");
  });

  it("Should render `ul` unstyled with some items.", () => {
    const { container } = render(<List {...listArgs.unstyled} />);
    expect(container).not.toBeNull();
    expect(container.firstChild).toHaveClass("ilo--list--unstyled");
  });
});
