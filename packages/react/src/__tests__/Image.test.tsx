import { render } from "@testing-library/react";
import { Image } from "../components/Image";
import imageArgs from "../components/Image/Image.args";

describe("<Image>", () => {
  it("Should render `img` with correct image src", () => {
    const { container } = render(<Image {...imageArgs.image} />);
    expect(container).not.toBeNull();
    expect(container.querySelector("img")?.getAttribute("src")).toEqual(
      imageArgs.image.url[0].src
    );
  });

  it("Should render `img` with correct image alt", () => {
    const { container } = render(<Image {...imageArgs.image} />);
    expect(container).not.toBeNull();
    expect(container.querySelector("img")?.getAttribute("alt")).toEqual(
      imageArgs.image.alt
    );
  });
});
