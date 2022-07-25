import { render } from "@testing-library/react";
import { Profile } from "../components/Profile";
import profileArgs from "../components/Profile/Profile.args";

describe("<Profile>", () => {
  it("Should render Profile with content from name prop.", () => {
    const { container } = render(<Profile {...profileArgs.basic} />);
    expect(container.children[0]).not.toBeNull();
    const nameElement = document.querySelector('[class*="--name"]');
    expect(nameElement?.textContent).toEqual(profileArgs?.basic?.name);
  });

  it("Should render Profile with content from avatar prop.", () => {
    const { container } = render(<Profile {...profileArgs.basic} />);
    expect(container.children[0]).not.toBeNull();
    const imgElement = document.querySelector('[class*="--avatar"]');
    expect(imgElement).toHaveAttribute("src", profileArgs?.basic?.avatar);
  });

  it("Should render Profile with content from role prop.", () => {
    const { container } = render(<Profile {...profileArgs.hasrole} />);
    expect(container.children[0]).not.toBeNull();
    const roleElement = document.querySelector('[class*="--role"]');
    expect(roleElement?.textContent).toEqual(profileArgs?.hasrole?.role);
  });

  it("Should render Profile with content from description prop.", () => {
    const { container } = render(<Profile {...profileArgs.hasdescription} />);
    expect(container.children[0]).not.toBeNull();
    const descriptionElement = document.querySelector(
      '[class*="--description"]'
    );
    expect(descriptionElement?.textContent).toEqual(
      profileArgs?.hasdescription?.description
    );
  });

  it("Should render Profile with content from link prop.", () => {
    const { container } = render(<Profile {...profileArgs.haslink} />);
    expect(container.children[0]).not.toBeNull();
    const linkElement = document.querySelector('[class*="--link"]');
    expect(linkElement?.textContent).toEqual(profileArgs?.haslink?.link?.label);
    expect(linkElement).toHaveAttribute(
      "href",
      profileArgs?.haslink?.link?.url
    );
  });
});
