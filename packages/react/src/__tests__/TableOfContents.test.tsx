import { render } from "@testing-library/react";
import { TableOfContents } from "../components/TableOfContents";
import tableOfContentsArgs from "../components/TableOfContents/TableOfContents.args";

describe("<TableOfContents>", () => {
  it("Should render `ul` with some items.", () => {
    const { container } = render(
      <TableOfContents {...tableOfContentsArgs.toc} />
    );
    expect(container).not.toBeNull();
  });
});
