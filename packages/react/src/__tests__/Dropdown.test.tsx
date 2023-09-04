import { fireEvent, render, screen } from "@testing-library/react";
import { Dropdown } from "../components/Dropdown";
import dropdownArgs from "../components/Dropdown/Dropdown.args";

describe("<Dropdown>", () => {
  it("Should render `Dropdown` with correct label from prop label", () => {
    const { container } = render(<Dropdown {...dropdownArgs.basic} />);
    expect(container.children[0]).not.toBeNull();
    expect(container.querySelector("label")?.textContent).toEqual(
      dropdownArgs.basic.label
    );
  });

  it("should display the correct number of options", () => {
    render(<Dropdown {...dropdownArgs.basic} />);
    expect(screen.getAllByRole("option").length).toBe(
      dropdownArgs?.basic?.options?.length
    );
  });

  it("selects the correct option", () => {
    render(<Dropdown {...dropdownArgs.basic} />);
    fireEvent.change(screen.getByLabelText("Select a country" as string), {
      target: { value: "CH" },
    });
    const chosenoption = document.querySelector('option[value="CH"]');
    expect((chosenoption as HTMLOptionElement).selected).toBeTruthy();
  });

  it('calls "onChange" prop on button click', () => {
    const handleChange = jest.fn();
    render(<Dropdown {...dropdownArgs.basic} onChange={handleChange} />);
    fireEvent.change(screen.getByLabelText("Select a country" as string), {
      target: { value: "CH" },
    });
    expect(handleChange).toHaveBeenCalled();
  });
});
