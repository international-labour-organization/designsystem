import { render } from "@testing-library/react";
import { Loading } from "../components/Loading";
import loadingArgs from "../components/Loading/Loading.args";

describe("<Loading>", () => {
  it("Should render `Loading` with correct label from prop label", () => {
    const { container } = render(<Loading {...loadingArgs.loadinglarge} />);
    expect(container.children[0]).not.toBeNull();
    const paragraphElement = document.querySelector(
      'p[class*="--copy"]'
    ) as Element;
    expect(paragraphElement).not.toBeNull();
    expect(paragraphElement.textContent).toEqual(
      loadingArgs.loadinglarge.message
    );
  });

  it("Should render `Loading` with correct class derived from prop status", () => {
    const { container } = render(<Loading {...loadingArgs.loadinglarge} />);
    expect(container.children[0]).not.toBeNull();
    expect(container.children[0].getAttribute("class")).toContain(
      loadingArgs.loadinglarge.status
    );
  });

  it("Should render `Loading` with correct class derived from prop size", () => {
    const { container } = render(<Loading {...loadingArgs.loadinglarge} />);
    expect(container.children[0]).not.toBeNull();
    expect(container.children[0].getAttribute("class")).toContain(
      loadingArgs.loadinglarge.size
    );
  });
});
