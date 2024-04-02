import { render } from "@testing-library/react";
import { List } from "../components/List";
import listArgs from "../components/List/List.args";

describe("<List>", () => {
  it("Should render `ol` with some items.", () => {
    const { container } = render(<List {...listArgs.ordered} />);
    expect(container).not.toBeNull();
  });

  it("Should render `ul` with some items.", () => {
    const { container } = render(<List {...listArgs.unordered} />);
    expect(container).not.toBeNull();
  });

  it("Should render `ul` horizontally with some items.", () => {
    const { container } = render(<List {...listArgs.horizontal} />);
    expect(container).not.toBeNull();
  });

  it("Should render `ul` unstyled with some items.", () => {
    const { container } = render(<List {...listArgs.unstyled} />);
    expect(container).not.toBeNull();
  });
});
