import { render, screen } from "@testing-library/react";
import { Form } from "../components/Form";
import FormArgs from "../components/Form/Form.args";

describe("<Form>", () => {
  it("Should render `Form` with correct label from prop input.placeholder", () => {
    const { container } = render(<Form {...FormArgs.basic} />);
    expect(container.children[0]).not.toBeNull();
    const inputElement = screen.getAllByPlaceholderText(
      FormArgs.basic.items[0].field.placeholder
    );
    expect(inputElement[0]).not.toBeNull();
  });

  it("Should render `Form input` with disabled attribute", () => {
    const { container } = render(<Form {...FormArgs.hasdisabled} />);
    expect(container.children[0]).not.toBeNull();
    const inputElement = screen.getByPlaceholderText(
      FormArgs.hasdisabled.items[0].field.placeholder
    );
    expect(inputElement).toHaveAttribute("disabled", "");
  });

  it("Should render `Form input` with error class", () => {
    const { container } = render(<Form {...FormArgs.haserror} />);
    expect(container.children[0]).not.toBeNull();
    const inputElement = screen.getAllByPlaceholderText(
      FormArgs.haserror.items[0].field.placeholder
    );
    expect(inputElement[0].getAttribute("class")).toEqual(
      expect.stringContaining("error")
    );
  });
});
