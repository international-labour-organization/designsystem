import { render } from "@testing-library/react";
import { Pagination } from "../components/Pagination";
import paginationArgs from "../components/Pagination/Pagination.args";

describe("<Pagination>", () => {
  it("Pagination link should render with a disable class", () => {
    const { container } = render(
      <Pagination {...paginationArgs.firstDisabled} />
    );
    expect(container.children[0]).not.toBeNull();
    const previousPagination = document.querySelector('a[class*="--disable"]');
    expect(previousPagination).not.toBeNull();
  });

  it("First link should match the args", () => {
    render(<Pagination {...paginationArgs.firstDisabled} />);
    const pagination = document.querySelector('a[class*="--first-page"]');
    expect(pagination).not.toBeNull();
    expect(pagination?.getAttribute("href")).toEqual(
      expect.stringContaining(
        paginationArgs.firstDisabled.firstPageUrl as string
      )
    );
  });

  it("Previous link should match the args", () => {
    render(<Pagination {...paginationArgs.firstDisabled} />);
    const pagination = document.querySelector('a[class*="--prev-page"]');
    expect(pagination).not.toBeNull();
    expect(pagination?.getAttribute("href")).toEqual(
      expect.stringContaining(
        paginationArgs.firstDisabled.prevPageUrl as string
      )
    );
  });

  it("Next link should match the args", () => {
    render(<Pagination {...paginationArgs.firstDisabled} />);
    const pagination = document.querySelector('a[class*="--next-page"]');
    expect(pagination).not.toBeNull();
    expect(pagination?.getAttribute("href")).toEqual(
      expect.stringContaining(
        paginationArgs.firstDisabled.nextPageUrl as string
      )
    );
  });

  it("Last link should match the args", () => {
    render(<Pagination {...paginationArgs.firstDisabled} />);
    const pagination = document.querySelector('a[class*="--last-page"]');
    expect(pagination).not.toBeNull();
    expect(pagination?.getAttribute("href")).toEqual(
      expect.stringContaining(
        paginationArgs.firstDisabled.lastPageUrl as string
      )
    );
  });
});
