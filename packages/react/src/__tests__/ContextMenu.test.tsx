import { render } from "@testing-library/react";
import { ContextMenu } from "../components/ContextMenu";
import contextMenuArgs from "../components/ContextMenu/ContextMenu.args";

describe("<ContextMenu>", () => {
  it("Should render `ul` with some items.", () => {
    const { container } = render(<ContextMenu {...contextMenuArgs.basic} />);
    expect(container).not.toBeNull();
  });

  it("Should render `ul` with `li`s with the `endsection` prop containing the class `endsection`", () => {
    const { container } = render(
      <ContextMenu {...contextMenuArgs.withsection} />
    );
    expect(container).not.toBeNull();
    const endsectionElement = document.querySelector(".endsection");
    expect(endsectionElement).not.toBeNull();
  });
});
