import { render } from "@testing-library/react";
import { RichText } from "../components/RichText";
import richTextArgs from "../components/RichText/richText.args";

describe("<RichText>", () => {
  it("Should render `div` with content.", () => {
    const { container } = render(<RichText {...richTextArgs.richtext} />);
    expect(container.children[0]).not.toBeNull();
    expect(container.children[0].textContent).toEqual(
      richTextArgs.richtext.content
    );
  });
});
