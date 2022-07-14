import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Notification } from "../components/Notification";
import notificationArgs from "../components/Notification/Notification.args";

describe("<Notification>", () => {
  it("Should render Notification headline with content.", () => {
    const { container } = render(<Notification {...notificationArgs.hascta} />);
    expect(container.children[0]).not.toBeNull();
    const headlineElement = document.querySelector('[class*="--headline"]');
    console.log(headlineElement);
    expect(headlineElement?.textContent).toEqual(
      notificationArgs?.hascta?.headline
    );
  });

  it("Should render Notification copy with content.", () => {
    const { container } = render(<Notification {...notificationArgs.hascta} />);
    expect(container.children[0]).not.toBeNull();
    const copyElement = document.querySelector('[class*="--copy"]');
    expect(copyElement?.textContent).toEqual(notificationArgs?.hascta?.copy);
  });

  it("Should render `button` with correct label from prop closelabel", () => {
    render(<Notification {...notificationArgs.hascta} />);
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement).not.toBeNull();
    expect(buttonElement[0].textContent).toEqual(
      notificationArgs?.hascta?.closelabel
    );
  });

  it("Should delete the component on click of the button", () => {
    const { container } = render(<Notification {...notificationArgs.hascta} />);
    expect(container.children[0]).not.toBeNull();
    userEvent.click(screen.getByRole("button"));
    expect(container.children[0]).toBeUndefined();
  });
});
