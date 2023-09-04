import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "../components/Button";
import buttonArgs from "../components/Button/Button.args";

describe("<Button>", () => {
  it("Should render `button` with correct class name from type prop", () => {
    render(<Button {...buttonArgs.primary} />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0].getAttribute("class")).toEqual(
      expect.stringContaining(buttonArgs.primary.type as string)
    );
  });

  it("Should render `button` with correct size class name from prop size", () => {
    render(<Button {...buttonArgs.primary} />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0].getAttribute("class")).toContain(
      buttonArgs.primary.size
    );
  });

  it("Should render `button` with correct label from prop label", () => {
    render(<Button {...buttonArgs.primary} />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0].textContent).toEqual(buttonArgs.primary.label);
  });

  it("Should render `button` as anchor, with the correct url", () => {
    render(<Button {...buttonArgs.link} />);
    const buttonElement = screen.getAllByRole("link");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0]).toHaveAttribute("href", buttonArgs.link.url);
  });

  it("Should render `button` with disabled attribute", () => {
    render(<Button {...buttonArgs.disabled} />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0]).toHaveAttribute("disabled", "");
  });

  it("Should render `button` as anchor with target attribute and rel attribute", () => {
    render(<Button {...buttonArgs.link} />);
    const buttonElement = screen.getAllByRole("link");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0]).toHaveAttribute("target", buttonArgs.link.target);
    expect(buttonElement[0]).toHaveAttribute("rel", "noopener noreferrer");
  });

  it('calls "callback" prop on button click', () => {
    const onClick = jest.fn();
    render(<Button {...buttonArgs.primary} callback={onClick} />);
    const buttonElement = screen.getAllByRole("button");
    fireEvent.click(buttonElement[0]);
    expect(onClick).toHaveBeenCalled();
  });
});
