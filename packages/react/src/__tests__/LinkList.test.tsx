import { render } from "@testing-library/react";
import { LinkList } from "../components/LinkList";
import linkListArgs from "../components/LinkList/LinkList.args";

describe("<LinkList>", () => {
  it("Should render `ul` with some items.", () => {
    const { container } = render(<LinkList {...linkListArgs.basic} />);
    expect(container).not.toBeNull();
  });

  it("Should render `ul` with `li`s with the `indented` prop containing the class `indented`", () => {
    const { container } = render(<LinkList {...linkListArgs.withindented} />);
    expect(container).not.toBeNull();
    const indentedElement = document.querySelectorAll(".indented");
    expect(indentedElement).not.toEqual([]);
  });
});
