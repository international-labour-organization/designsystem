import { expect, describe, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from "../src/components/Dropdown";

const fixture = {
  label: "Select an option",
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
    { label: "Option 4", value: "4" },
  ],
  name: "test-dropdown",
};

describe("Dropdown", () => {
  it("should render correctly", () => {
    render(<Dropdown {...fixture} />);
    const label = screen.getByText(fixture.label);
    expect(label).toBeVisible();
    const select = screen.getByRole("combobox");
    expect(select).toBeVisible();
    expect(select).toHaveAttribute("name", fixture.name);
    expect(select).not.toBeDisabled();
    expect(select).toHaveValue("1");
    expect(select.children.length).toBe(fixture.options.length);
  });

  it("should render with default value", () => {
    render(<Dropdown {...fixture} defaultValue="2" />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("2");
  });

  it("should update as value changes", () => {
    const { rerender } = render(<Dropdown {...fixture} value="2" />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("2");

    rerender(<Dropdown {...fixture} value="3" />);
    expect(select).toHaveValue("3");
  });

  it("should call onChange when selection changes", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Dropdown {...fixture} onChange={handleChange} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("1");

    await user.selectOptions(select, "3");
    expect(select).toHaveValue("3");
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "3" }),
      })
    );
  });

  it("should call onBlur when focus is lost", async () => {
    const user = userEvent.setup();
    const handleBlur = vi.fn();
    render(<Dropdown {...fixture} onBlur={handleBlur} />);
    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("1");

    await user.click(select);
    await user.tab();
    expect(handleBlur).toHaveBeenCalled();
  });

  it("should render error message when error is true", () => {
    const errorMessage = "There is an error";
    render(<Dropdown {...fixture} error={true} errorMessage={errorMessage} />);
    const error = screen.getByText(errorMessage);
    expect(error).toBeVisible();
    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("error");
  });

  it("should render helper text", () => {
    const helperText = "This is helper text";
    render(<Dropdown {...fixture} helper={helperText} />);
    const helper = screen.getByText(helperText);
    expect(helper).toBeVisible();
  });

  it("should render tooltip", async () => {
    const tooltipText = "This is a tooltip";
    render(<Dropdown {...fixture} tooltip={tooltipText} />);
    const tooltip = screen.getByText(tooltipText);
    // Ideally this should check for visibility but toBeVisible does not work here
    expect(tooltip).toHaveAttribute("aria-hidden", "true");
    const trigger = screen.getByTestId("tooltip-trigger");
    expect(trigger).toBeVisible();
    await userEvent.hover(trigger);
    expect(tooltip).toHaveAttribute("aria-hidden", "false");
  });

  it("should render disabled", () => {
    render(<Dropdown {...fixture} disabled={true} />);
    const select = screen.getByRole("combobox");
    expect(select).toBeDisabled();
  });

  it("should render disabled options", () => {
    render(
      <Dropdown
        {...fixture}
        options={[
          ...fixture.options,
          {
            label: "Disabled Option",
            value: "5",
            disabled: true,
          },
        ]}
      />
    );
    const disabledOption = screen.getByRole("option", {
      name: "Disabled Option",
    });
    expect(disabledOption).toBeDisabled();
  });
});
