import { fireEvent, render, screen } from "@testing-library/react";
import { SearchField } from "../components/SearchField";
import searchFieldArgs from "../components/SearchField/SearchField.args";

describe("<SearchField>", () => {
  it("Should render `search field` with correct label from prop input.placeholder", () => {
    const { container } = render(
      <SearchField {...searchFieldArgs.searchfield} />
    );
    expect(container.children[0]).not.toBeNull();
    const inputElement = screen.getByPlaceholderText(
      searchFieldArgs.searchfield.input?.placeholder as string
    );
    expect(inputElement).not.toBeNull();
  });

  it("Should render `search field input` with disabled attribute", () => {
    const { container } = render(
      <SearchField {...searchFieldArgs.searchfielddisabled} />
    );
    expect(container.children[0]).not.toBeNull();
    const inputElement = screen.getByPlaceholderText(
      searchFieldArgs.searchfielddisabled.input?.placeholder as string
    );
    expect(inputElement).toHaveAttribute("disabled", "");
  });

  it('calls "callback" prop on button click', () => {
    const onClick = jest.fn();
    render(<SearchField {...searchFieldArgs.searchfield} callback={onClick} />);
    const buttonElement = screen.getAllByRole("button");
    fireEvent.click(buttonElement[0]);
    expect(onClick).toHaveBeenCalled();
  });
});
